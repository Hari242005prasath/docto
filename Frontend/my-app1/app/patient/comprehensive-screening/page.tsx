'use client'

import { useState } from 'react'
import Link from "next/link"
import {
  Bell,
  Calendar,
  FileText,
  MessageSquare,
  Search,
  User,
  Home,
  Settings,
  LogOut,
  Stethoscope,
  Menu,
  CheckCircle,
  X,
  Loader2,
  Download
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

const symptoms = [
    'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills',
    'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting',
    'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety',
    'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy',
    'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes',
    'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin',
    'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation',
    'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes',
    'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes',
    'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes',
    'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate',
    'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus',
    'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels',
    'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger',
    'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain',
    'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements',
    'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort',
    'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching',
    'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium',
    'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches',
    'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum',
    'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion',
    'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen',
    'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf',
    'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling',
    'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister',
    'red_sore_around_nose', 'yellow_crust_ooze'
];

export default function ComprehensiveScreening() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (selectedSymptoms.length === 0) {
      setError('Please select at least one symptom');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/predict-disease/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: selectedSymptoms }),
      });

      if (!response.ok) {
        throw new Error('Failed to process symptoms');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/predict-disease/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symptoms: selectedSymptoms,
          generate_pdf: true
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `health_screening_report_${new Date().toISOString().slice(0, 19).replace(/[:]/g, '')}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      setError('Failed to download PDF report');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/patient/dashboard" className="flex items-center gap-2 font-semibold">
            <FileText className="h-5 w-5 text-teal-600" />
            <span>Docto</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <h2 className="mb-2 text-xs font-semibold text-gray-500">Dashboard</h2>
            <div className="space-y-1">
              <Link
                href="/patient/dashboard"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Home className="h-4 w-4" />
                Overview
              </Link>
              <Link
                href="/patient/disease-detection"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <FileText className="h-4 w-4" />
                Disease Detection
              </Link>
              <Link
                href="/patient/skin-detection"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <MessageSquare className="h-4 w-4" />
                Skin Disease Detection
              </Link>
              <Link
                href="/patient/comprehensive-screening"
                className="flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium"
              >
                <Stethoscope className="h-4 w-4" />
                Comprehensive Screening
              </Link>
              <Link
                href="/patient/profile"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/patient/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search symptoms..."
                  className="w-full bg-gray-50 pl-8 md:max-w-sm"
                />
              </div>
            </form>
          </div>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-teal-600"></span>
          </Button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Comprehensive Health Screening</h1>
              <p className="mt-2 text-gray-600">
                Select your symptoms for AI-powered health analysis and personalized recommendations
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Symptoms Selection Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Select Your Symptoms</CardTitle>
                  <CardDescription>
                    Choose all symptoms you are currently experiencing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ScrollArea className="h-[400px] w-full border rounded-lg p-4">
                    <div className="grid gap-4">
                      {symptoms.map((symptom) => (
                        <div key={symptom} className="flex items-center space-x-2">
                          <Checkbox
                            id={symptom}
                            checked={selectedSymptoms.includes(symptom)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedSymptoms([...selectedSymptoms, symptom]);
                              } else {
                                setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
                              }
                            }}
                          />
                          <label
                            htmlFor={symptom}
                            className="text-sm font-medium capitalize"
                          >
                            {symptom.replace(/_/g, ' ')}
                          </label>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {error && (
                    <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    onClick={handleSubmit}
                    disabled={selectedSymptoms.length === 0 || loading}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze Symptoms'
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Results Section */}
              {result && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Health Analysis Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-green-50 rounded-lg mb-4">
                        <div className="text-2xl font-bold text-green-900">
                          {result.disease}
                        </div>
                        <div className="text-sm text-green-800 mt-1">
                          Confidence: {(result.confidence * 100).toFixed(2)}%
                        </div>
                      </div>
                      
                      {/* Disease Information */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold mb-2">About the Condition</h3>
                          <p className="text-sm text-gray-600">
                            {result.details?.description}
                          </p>
                        </div>

                        {/* Common Symptoms */}
                        <div>
                          <h3 className="font-semibold mb-2">Common Symptoms</h3>
                          <div className="grid gap-2">
                            {result.details?.symptoms?.map((symptom: string, index: number) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-gray-600">{symptom}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Recommendations */}
                        <div>
                          <h3 className="font-semibold mb-2">Recommendations</h3>
                          <div className="grid gap-4">
                            {result.details?.recommendations?.map((rec: string, index: number) => (
                              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                <div className="text-sm text-gray-600">{rec}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* When to See a Doctor */}
                        <div>
                          <h3 className="font-semibold mb-2">When to See a Doctor</h3>
                          <div className="p-4 bg-yellow-50 rounded-lg">
                            <p className="text-sm text-gray-800">
                              {result.details?.when_to_see_doctor}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4 mt-6">
                    <Button 
                      onClick={handleDownloadPDF}
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download Health Report
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
