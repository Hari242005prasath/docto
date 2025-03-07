from django.shortcuts import render
from django.http import JsonResponse, FileResponse
from django.views.decorators.csrf import csrf_exempt
import tensorflow as tf
import numpy as np
from PIL import Image
import google.generativeai as genai
import os
from dotenv import load_dotenv
import json
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from io import BytesIO
from datetime import datetime

# Load environment variables
load_dotenv()

# Configure Gemini AI with your API key
GOOGLE_API_KEY ='AIzaSyAsHmwZYIWf3Om52-xN_-mKcMrwuICKRF0' # Get API key from environment variable
genai.configure(api_key=GOOGLE_API_KEY)

# Initialize Gemini model with the correct model name
gemini_model = genai.GenerativeModel('gemini-1.5-flash')  # Updated to Gemini 1.5 Pro

# Load the H5 model
model_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__)))), 'lung (1).h5')
h5_model = tf.keras.models.load_model(model_path)

# Define disease classes with their corresponding indices
CLASSES = ['Covid-19', 'Normal', 'Viral Pneumonia', 'Bacterial Pneumonia']

# Additional information about each disease
DISEASE_INFO = {
    'Covid-19': 'COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus.',
    'Normal': 'No significant abnormalities detected in the chest X-ray.',
    'Viral Pneumonia': 'Pneumonia caused by viral infection, often less severe than bacterial pneumonia.',
    'Bacterial Pneumonia': 'Pneumonia caused by bacterial infection, typically requires antibiotic treatment.'
}

async def get_disease_details(disease_name, location):
    try:
        prompt = f"""
        You are a medical AI assistant. Generate a JSON response about {disease_name}. 
        Return ONLY the JSON object without any additional text or explanation.
        The JSON must follow this exact structure:
        {{
            "description": "A clear medical description of {disease_name}",
            "symptoms": [
                "list 5 specific symptoms",
                "each as a separate string",
                "be precise and clear",
                "focus on main symptoms",
                "include severity indicators"
            ],
            "preventive_measures": [
                "list 4 specific prevention steps",
                "each as a separate string",
                "be actionable and clear",
                "consider {location} conditions"
            ],
            "natural_remedies": [
                {{
                    "name": "Specific Remedy Name",
                    "description": "Clear explanation of how to use this remedy"
                }},
                {{
                    "name": "Another Remedy",
                    "description": "Its specific usage and benefits"
                }}
            ],
            "lifestyle_modifications": "Specific lifestyle changes including diet, exercise, and rest recommendations",
            "when_to_see_doctor": "Specific warning signs that require immediate medical attention",
            "recommended_doctors": [
                {{
                    "name": "Relevant Specialist Type",
                    "specialty": "Medical Specialty",
                    "location": "{location}"
                }}
            ]
        }}
        """
        
        response = await gemini_model.generate_content_async(prompt)
        response_text = response.text if hasattr(response, 'text') else ''.join(part.text for part in response.parts)
        
        # Clean the response text to ensure it's valid JSON
        # Remove any markdown formatting or extra text
        response_text = response_text.strip()
        if response_text.startswith('```json'):
            response_text = response_text[7:]
        if response_text.endswith('```'):
            response_text = response_text[:-3]
        response_text = response_text.strip()
        
        try:
            parsed_details = json.loads(response_text)
            # Validate that all required fields are present
            required_fields = ['description', 'symptoms', 'preventive_measures', 
                             'natural_remedies', 'lifestyle_modifications', 
                             'when_to_see_doctor', 'recommended_doctors']
            
            if all(field in parsed_details for field in required_fields):
                return parsed_details
            else:
                raise ValueError("Missing required fields in response")
                
        except (json.JSONDecodeError, ValueError) as e:
            print(f"Error parsing JSON: {str(e)}")
            print(f"Raw response: {response_text}")
            
            # Return a structured fallback response
            return {
                'description': DISEASE_INFO.get(disease_name, f"Information about {disease_name}"),
                'symptoms': [
                    "Consult a healthcare provider for accurate symptom assessment",
                    "Symptoms vary by individual",
                    "Regular monitoring is important",
                    "Document any changes in condition",
                    "Report new symptoms to your doctor"
                ],
                'preventive_measures': [
                    "Follow local health guidelines",
                    "Maintain good hygiene practices",
                    "Practice social distancing when necessary",
                    "Use appropriate personal protective equipment"
                ],
                'natural_remedies': [
                    {
                        'name': "Rest and Hydration",
                        'description': "Ensure adequate rest and stay well hydrated"
                    },
                    {
                        'name': "Balanced Diet",
                        'description': "Maintain a healthy, balanced diet rich in nutrients"
                    }
                ],
                'lifestyle_modifications': "Follow a healthy lifestyle with proper rest, nutrition, and exercise as advised by your healthcare provider",
                'when_to_see_doctor': "Seek immediate medical attention if symptoms worsen or new symptoms develop",
                'recommended_doctors': [
                    {
                        'name': "Primary Care Physician",
                        'specialty': "General Medicine",
                        'location': location
                    },
                    {
                        'name': "Specialist Referral",
                        'specialty': "As recommended by your primary doctor",
                        'location': location
                    }
                ]
            }
            
    except Exception as e:
        print(f"Gemini API Error: {str(e)}")
        # Return a basic error response
        return {
            'description': DISEASE_INFO.get(disease_name, f"Information about {disease_name}"),
            'symptoms': ["Please consult a healthcare provider for accurate information"],
            'preventive_measures': ["Follow local health guidelines"],
            'natural_remedies': [
                {
                    'name': "Professional Care",
                    'description': "Seek professional medical advice"
                }
            ],
            'lifestyle_modifications': "Follow your healthcare provider's recommendations",
            'when_to_see_doctor': "Contact a healthcare provider for proper medical advice",
            'recommended_doctors': [
                {
                    'name': "Healthcare Provider",
                    'specialty': "General Practice",
                    'location': location
                }
            ]
        }

def generate_pdf_report(disease_name, confidence, details, location, image_file):
    buffer = BytesIO()
    
    # Create the PDF object
    doc = SimpleDocTemplate(
        buffer,
        pagesize=letter,
        rightMargin=72,
        leftMargin=72,
        topMargin=72,
        bottomMargin=72
    )
    
    elements = []
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=30,
        alignment=1  # Center alignment
    )
    
    header_style = ParagraphStyle(
        'Header',
        parent=styles['Heading2'],
        fontSize=16,
        spaceBefore=20,
        spaceAfter=10,
        textColor=colors.HexColor('#1a1a1a')
    )

    # Add logo or hospital name if needed
    elements.append(Paragraph("DOCTO Medical Report", title_style))
    elements.append(Spacer(1, 20))
    
    # Add date, time, and location
    elements.append(Paragraph(f"Date: {datetime.now().strftime('%B %d, %Y')}", styles['Normal']))
    elements.append(Paragraph(f"Time: {datetime.now().strftime('%H:%M:%S')}", styles['Normal']))
    elements.append(Paragraph(f"Location: {location}", styles['Normal']))
    elements.append(Spacer(1, 20))

    # Add X-ray image
    if image_file:
        img = Image.open(image_file)
        img = img.convert('RGB')
        img_width = 400  # Set desired width
        aspect = img.height / img.width
        img_height = int(img_width * aspect)
        
        # Save image to temporary buffer
        img_buffer = BytesIO()
        img = img.resize((img_width, img_height))
        img.save(img_buffer, format='PNG')
        img_buffer.seek(0)
        
        # Add image to PDF
        elements.append(Paragraph("X-Ray Image", header_style))
        elements.append(Image(img_buffer, width=img_width, height=img_height))
        elements.append(Spacer(1, 20))

    # Add diagnosis section
    elements.append(Paragraph("Diagnosis Results", header_style))
    diagnosis_data = [
        ['Condition', disease_name],
        ['Confidence Level', f"{confidence:.2%}"]
    ]
    diagnosis_table = Table(diagnosis_data, colWidths=[200, 300])
    diagnosis_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (0, -1), colors.lightgrey),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.black),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('BACKGROUND', (0, 0), (-1, -1), colors.white),
        ('GRID', (0, 0), (-1, -1), 1, colors.black)
    ]))
    elements.append(diagnosis_table)
    elements.append(Spacer(1, 20))

    # Add detailed information
    elements.append(Paragraph("Disease Description", header_style))
    elements.append(Paragraph(details['description'], styles['Normal']))
    elements.append(Spacer(1, 15))

    # Add symptoms
    elements.append(Paragraph("Key Symptoms", header_style))
    for symptom in details['symptoms']:
        elements.append(Paragraph(f"• {symptom}", styles['Normal']))
    elements.append(Spacer(1, 15))

    # Add preventive measures
    elements.append(Paragraph("Preventive Measures", header_style))
    for measure in details['preventive_measures']:
        elements.append(Paragraph(f"• {measure}", styles['Normal']))
    elements.append(Spacer(1, 15))

    # Add natural remedies
    elements.append(Paragraph("Natural Remedies", header_style))
    for remedy in details['natural_remedies']:
        elements.append(Paragraph(f"• {remedy['name']}", styles['Heading4']))
        elements.append(Paragraph(f"  {remedy['description']}", styles['Normal']))
    elements.append(Spacer(1, 15))

    # Add lifestyle modifications
    elements.append(Paragraph("Lifestyle Recommendations", header_style))
    elements.append(Paragraph(details['lifestyle_modifications'], styles['Normal']))
    elements.append(Spacer(1, 15))

    # Add when to see doctor
    elements.append(Paragraph("When to Seek Medical Help", header_style))
    elements.append(Paragraph(details['when_to_see_doctor'], styles['Normal']))
    elements.append(Spacer(1, 15))

    # Add recommended doctors
    elements.append(Paragraph("Recommended Medical Professionals", header_style))
    for doctor in details['recommended_doctors']:
        elements.append(Paragraph(
            f"• {doctor['name']} - {doctor['specialty']}\n  Location: {doctor['location']}",
            styles['Normal']
        ))
    elements.append(Spacer(1, 20))

    # Add disclaimer
    elements.append(Paragraph(
        "DISCLAIMER: This report is generated by an AI system and should not be considered as a substitute "
        "for professional medical advice. Please consult with healthcare professionals for proper diagnosis "
        "and treatment. This report is based on the analysis of the provided X-ray image and general medical "
        "knowledge. Individual cases may vary.",
        ParagraphStyle('Disclaimer', parent=styles['Normal'], textColor=colors.red, fontSize=10)
    ))

    # Build PDF
    doc.build(elements)
    buffer.seek(0)
    return buffer

@csrf_exempt
async def detect_disease(request):
    if request.method == 'POST':
        try:
            # Get location from request
            location = request.POST.get('location', 'Unknown')
            
            # Get the image from the request
            image_file = request.FILES.get('image')
            if not image_file:
                return JsonResponse({'error': 'No image provided'}, status=400)

            # Process image for H5 model
            image = Image.open(image_file)
            if image.mode != 'RGB':
                image = image.convert('RGB')
            image = image.resize((256, 256))
            image_array = np.array(image)
            image_array = image_array / 255.0
            image_array = np.expand_dims(image_array, axis=0)

            # Get prediction from H5 model
            predictions = h5_model.predict(image_array)
            predicted_class_index = np.argmax(predictions[0])
            predicted_class = CLASSES[predicted_class_index]
            confidence = float(np.max(predictions[0]))

            # Get additional information using Gemini AI
            details = await get_disease_details(predicted_class, location)

            # Generate PDF if requested
            if request.POST.get('generate_pdf', 'false').lower() == 'true':
                pdf_buffer = generate_pdf_report(
                    predicted_class, 
                    confidence, 
                    details, 
                    location,
                    image_file  # Pass the image file to the PDF generator
                )
                
                # Return PDF file
                return FileResponse(
                    pdf_buffer,
                    as_attachment=True,
                    filename=f'medical_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.pdf'
                )

            # Return the JSON response if PDF not requested
            return JsonResponse({
                'disease': predicted_class,
                'confidence': confidence,
                'details': details,
                'message': f'Detected: {predicted_class} with {confidence:.2%} confidence'
            })

        except Exception as e:
            print(f"Error processing image: {str(e)}")
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Only POST method is allowed'}, status=405)

# Create your views here.
