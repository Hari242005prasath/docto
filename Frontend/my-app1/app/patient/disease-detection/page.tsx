'use client';

import { useState } from 'react';
import Link from "next/link";
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
  Upload,
  X,
  Loader2,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DiseaseDetection() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [location, setLocation] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    if (!location) {
      setError('Please enter your location');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('location', location);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/detect-disease/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to process image');
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
      // Create form data with the same image and location
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('location', location);
      formData.append('generate_pdf', 'true');

      // Make request to get PDF
      const response = await fetch('http://127.0.0.1:8000/api/detect-disease/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      // Create blob from response and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `medical_report_${new Date().toISOString().slice(0, 19).replace(/[:]/g, '')}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Handle error appropriately
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
                href="/patient/documents"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <FileText className="h-4 w-4" />
                My Documents
              </Link>
              <Link
                href="/patient/consultations"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <MessageSquare className="h-4 w-4" />
                Consultations
              </Link>
              <Link
                href="/patient/appointments"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Calendar className="h-4 w-4" />
                Appointments
                <Badge className="ml-auto bg-teal-500">1</Badge>
              </Link>
              <Link
                href="/patient/disease-detection"
                className="flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium"
              >
                <Stethoscope className="h-4 w-4" />
                Disease Detection
              </Link>
            </div>
          </div>
          <div className="px-4 mb-4">
            <h2 className="mb-2 text-xs font-semibold text-gray-500">Settings</h2>
            <div className="space-y-1">
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
              <Link
                href="/logout"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </div>
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Patient ID: P-12345</p>
            </div>
          </div>
        </div>
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
                  placeholder="Search documents, diagnoses..."
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
              <h1 className="text-3xl font-bold text-gray-900">Chest X-Ray Analysis</h1>
              <p className="mt-2 text-gray-600">
                Upload a chest X-ray image for AI-powered disease detection and personalized recommendations
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Upload Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Upload X-Ray Image</CardTitle>
                  <CardDescription>
                    Get instant analysis and personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!previewUrl ? (
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8">
                      <div className="flex flex-col items-center">
                        <Upload className="h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-sm text-gray-600 text-center mb-4">
                          Drag and drop your X-ray image here, or click to browse
                        </p>
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageSelect}
                          className="hidden"
                        />
                        <Button
                          onClick={() => document.getElementById('image')?.click()}
                          variant="outline"
                        >
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={previewUrl}
                        alt="X-ray Preview"
                        className="w-full rounded-lg shadow-md"
                      />
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={handleRemoveImage}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {error && (
                    <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {/* Add location input */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Your Location
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your city"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={!selectedImage || !location || loading}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze X-Ray'
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Results Section */}
              {result && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Diagnosis Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-green-50 rounded-lg mb-4">
                        <div className="text-2xl font-bold text-green-900">
                          {result.disease}
                        </div>
                      </div>
                      
                      {/* Disease Information */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold mb-2">About the Condition</h3>
                          <p className="text-sm text-gray-600">
                            {result.details.description}
                          </p>
                        </div>

                        {/* Symptoms */}
                        <div>
                          <h3 className="font-semibold mb-2">Common Symptoms</h3>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            {result.details.symptoms.map((symptom: string, index: number) => (
                              <li key={index}>{symptom}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Preventive Measures */}
                        <div>
                          <h3 className="font-semibold mb-2">Preventive Measures</h3>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            {result.details.preventive_measures.map((measure: string, index: number) => (
                              <li key={index}>{measure}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Natural Remedies */}
                        <div>
                          <h3 className="font-semibold mb-2">Natural Remedies</h3>
                          <div className="grid gap-4 md:grid-cols-2">
                            {result.details.natural_remedies.map((remedy: any, index: number) => (
                              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                <div className="font-medium">{remedy.name}</div>
                                <p className="text-sm text-gray-600 mt-1">{remedy.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Lifestyle Modifications */}
                        <div>
                          <h3 className="font-semibold mb-2">Lifestyle Modifications</h3>
                          <div className="text-sm text-gray-600">
                            {result.details.lifestyle_modifications}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Doctor Recommendations */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Recommended Doctors Near You</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        {result.details.recommended_doctors.map((doctor: any, index: number) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="font-semibold">{doctor.name}</div>
                            <div className="text-sm text-gray-600 mt-1">{doctor.specialty}</div>
                            <div className="text-sm text-gray-500 mt-1">{doctor.location}</div>
                            <Button variant="outline" className="mt-3 w-full">
                              Book Appointment
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* When to See a Doctor */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">When to Seek Medical Help</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-gray-800">
                          {result.details.when_to_see_doctor}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4 mt-6">
                    <Button 
                      onClick={handleDownloadPDF}
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Save Medical Report (PDF)
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