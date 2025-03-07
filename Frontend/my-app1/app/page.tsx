import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Upload, FileText, Shield, Users, CheckCircle, Stethoscope } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">Docto</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/doctor/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              For Doctors
            </Link>
            <Link href="/patient/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              For Patients
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Medical Diagnosis at Your Fingertips
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Upload your medical reports and scans to get instant AI analysis, preventive measures, and connect
                    with doctors online.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="max-h-[519px] max-w-[678px]">
                <img
                  className="custom-animate size-full object-contain"
                  src="/hero.jpg"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive Health Analysis
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform analyzes your medical documents to provide detailed insights and
                  recommendations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Upload className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Easy Document Upload</h3>
                <p className="text-center text-gray-500">
                  Upload X-rays, scan reports, and medical documents with a simple drag and drop interface.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <FileText className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">AI Diagnosis</h3>
                <p className="text-center text-gray-500">
                  Get instant analysis of your medical condition with our advanced AI algorithms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Shield className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Preventive Measures</h3>
                <p className="text-center text-gray-500">
                  Receive personalized preventive measures and natural remedies for your condition.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Doctor Verification</h3>
                <p className="text-center text-gray-500">
                  Connect with qualified doctors to verify your diagnosis and treatment plan.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <CheckCircle className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Medicine Suggestions</h3>
                <p className="text-center text-gray-500">
                  Get AI-recommended medications that can be verified by doctors before use.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Stethoscope className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Doctor Community</h3>
                <p className="text-center text-gray-500">
                  Doctors can collaborate in domain-specific communities to share knowledge and insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Docto Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple process to get the medical insights you need
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Upload Documents</h3>
                <p className="text-center text-gray-500">
                  Upload your medical reports, X-rays, or photos of visible symptoms to our secure platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-center text-gray-500">
                  Our AI analyzes your documents and provides a comprehensive health assessment with recommendations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Doctor Verification</h3>
                <p className="text-center text-gray-500">
                  Connect with a qualified doctor who reviews your AI diagnosis and provides professional guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Doctors Section */}
        <section id="for-doctors" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="max-h-[540px] max-w-[678px]">
                <Image
                  src="/new2.png"
                  alt="Doctor using the platform"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    For Healthcare Professionals
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join our community of doctors to expand your practice and collaborate with peers.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Access to a domain-specific community of medical professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Collaborate on complex cases with AI-assisted insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Expand your practice with telemedicine capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Secure document sharing and patient management</span>
                  </li>
                </ul>
                <div>
                  <Link href="/doctor/dashboard">
                    <Button size="lg">Join as a Doctor</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Patients Section */}
        <section id="for-patients" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">For Patients</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Take control of your health with AI-powered insights and professional medical guidance.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Quick AI analysis of your medical documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Visual representation of your health status</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Personalized preventive measures and natural remedies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Connect with qualified doctors for verification</span>
                  </li>
                </ul>
                <div>
                  <Link href="/patient/dashboard">
                    <Button size="lg">Sign Up as a Patient</Button>
                  </Link>
                </div>
              </div>
              <div className="max-h-[540px] max-w-[678px]">
                <Image
                  src="/new1.png"
                  alt="Patient using the platform"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Healthcare Experience?
                </h2>
                <p className="max-w-[900px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of patients and doctors already using Docto for better healthcare outcomes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-800">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-6 w-6 text-teal-600" />
              <span className="text-xl font-bold">Docto</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/terms" className="text-sm hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link href="/about" className="text-sm hover:underline underline-offset-4">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Docto. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

