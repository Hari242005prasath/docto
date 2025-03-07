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
  Upload,
  Heart,
  Activity,
  PlusCircle,
  FileUp,
  ChevronRight,
  Microscope,
  TreesIcon as Lungs,
  Eye,
  Brain,
  Bone,
  Ribbon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { JSX, SVGProps } from "react"

export default function PatientDashboard() {
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
                className="flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium"
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

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-2xl font-bold tracking-tight">Patient Dashboard</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>March 7, 2025</span>
                </Button>
              </div>
            </div>

            {/* Health Summary */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                  <Heart className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85/100</div>
                  <Progress value={85} className="mt-2" />
                  <p className="text-xs text-gray-500 mt-2">+5 from last check</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Diagnoses</CardTitle>
                  <Activity className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-gray-500">Hypertension, Allergies</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Appointment</CardTitle>
                  <Calendar className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Mar 12</div>
                  <p className="text-xs text-gray-500">Dr. Jane Smith, 10:30 AM</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Medication Adherence</CardTitle>
                  <FileText className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <Progress value={92} className="mt-2" />
                  <p className="text-xs text-gray-500 mt-2">Last 30 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Services Section */}
            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
                <CardDescription>Explore our AI-powered health screening and diagnostic services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* General Health Care */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">General Health Care</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <ServiceCard
                        title="Comprehensive Health Screening"
                        icon={<Microscope className="h-6 w-6" />}
                        description="Complete health analysis using AI for vital signs, blood work, and general wellness"
                      />
                      <ServiceCard
                        title="Preventive Health Analysis"
                        icon={<Activity className="h-6 w-6" />}
                        description="Early detection of health risks and personalized preventive measures"
                      />
                    </div>
                  </div>

                  {/* Specialized External Analysis */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Specialized External Analysis</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <ServiceCard
                        title="Eye Condition Analysis"
                        icon={<Eye className="h-6 w-6" />}
                        description="AI analysis of eye photos for common conditions and vision problems"
                      />
                      <ServiceCard
                        title="Skin Disease Detection"
                        icon={<div className="h-6 w-6 bg-amber-100 rounded-full" />}
                        description="Upload photos of skin conditions for instant AI analysis"
                      />
                      <ServiceCard
                        title="External Symptoms Check"
                        icon={<FileText className="h-6 w-6" />}
                        description="Analysis of visible symptoms and physical conditions"
                      />
                    </div>
                  </div>

                  {/* Medical Image Analysis */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Medical Image Analysis</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <ServiceCard
                        title="Brain MRI Analysis"
                        icon={<Brain className="h-6 w-6" />}
                        description="Advanced AI analysis of brain MRI scans for neurological conditions"
                      />
                      <ServiceCard
                        title="Chest X-Ray Analysis"
                        icon={<Lungs className="h-6 w-6" />}
                        description="Detection of lung diseases and respiratory conditions"
                      />
                      <ServiceCard
                        title="Mammogram Analysis"
                        icon={<Ribbon className="h-6 w-6" />}
                        description="Early detection of breast abnormalities and cancer screening"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for different sections */}
            <Tabs defaultValue="recent-diagnoses">
              <TabsList>
                <TabsTrigger value="recent-diagnoses">Recent Diagnoses</TabsTrigger>
                <TabsTrigger value="documents">My Documents</TabsTrigger>
                <TabsTrigger value="medications">Medications</TabsTrigger>
              </TabsList>

              {/* Recent Diagnoses Tab */}
              <TabsContent value="recent-diagnoses" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent AI Diagnoses</CardTitle>
                    <CardDescription>Your recent diagnoses and doctor verifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Diagnosis 1 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Hypertension - Stage 1</p>
                            <p className="text-sm text-gray-500">Based on blood pressure readings and symptoms</p>
                          </div>
                          <Badge className="bg-green-500">Verified by Doctor</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">AI Recommendations:</p>
                          <ul className="mt-1 text-sm text-gray-500 list-disc pl-5 space-y-1">
                            <li>Reduce sodium intake</li>
                            <li>Regular exercise (30 min/day)</li>
                            <li>Medication: Lisinopril 10mg daily</li>
                            <li>Monitor blood pressure weekly</li>
                          </ul>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Diagnosed on March 1, 2025</p>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>

                      {/* Diagnosis 2 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Seasonal Allergies</p>
                            <p className="text-sm text-gray-500">Based on symptom description and images</p>
                          </div>
                          <Badge className="bg-amber-500">Pending Verification</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">AI Recommendations:</p>
                          <ul className="mt-1 text-sm text-gray-500 list-disc pl-5 space-y-1">
                            <li>Over-the-counter antihistamine</li>
                            <li>Nasal irrigation with saline solution</li>
                            <li>Avoid known allergens when possible</li>
                            <li>Consider allergy testing</li>
                          </ul>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Diagnosed on February 25, 2025</p>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="mt-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>My Documents</CardTitle>
                      <CardDescription>Your uploaded medical documents and reports</CardDescription>
                    </div>
                    <Button size="sm" className="gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      <span>Upload New</span>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Document 1 */}
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                            <FileUp className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Blood Test Results.pdf</p>
                            <p className="text-xs text-gray-500">Uploaded on March 5, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Document 2 */}
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                            <FileUp className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Chest X-Ray.jpg</p>
                            <p className="text-xs text-gray-500">Uploaded on March 2, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Document 3 */}
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                            <FileUp className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Blood Pressure Readings.xlsx</p>
                            <p className="text-xs text-gray-500">Uploaded on February 28, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Medications Tab */}
              <TabsContent value="medications" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Medications</CardTitle>
                    <CardDescription>Your prescribed medications and schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Medication 1 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Lisinopril 10mg</p>
                            <p className="text-sm text-gray-500">For hypertension</p>
                          </div>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-500">Take 1 tablet daily in the morning</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Progress value={75} className="flex-1" />
                            <span className="text-xs text-gray-500">75% adherence</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Prescribed by Dr. Jane Smith</p>
                          <Button variant="outline" size="sm">
                            Set Reminder
                          </Button>
                        </div>
                      </div>

                      {/* Medication 2 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Cetirizine 10mg</p>
                            <p className="text-sm text-gray-500">For allergies</p>
                          </div>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-500">Take 1 tablet daily as needed for allergies</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Progress value={90} className="flex-1" />
                            <span className="text-xs text-gray-500">90% adherence</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Prescribed by Dr. Robert Chen</p>
                          <Button variant="outline" size="sm">
                            Set Reminder
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Doctor Consultation Card */}
            <Card>
              <CardHeader>
                <CardTitle>Connect with a Doctor</CardTitle>
                <CardDescription>Get your AI diagnosis verified by a medical professional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Doctor 1 */}
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Dr. Jane Smith" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Dr. Jane Smith</p>
                        <p className="text-sm text-gray-500">Cardiologist</p>
                        <div className="mt-1 flex items-center">
                          <StarRating rating={4.8} />
                          <span className="ml-1 text-xs text-gray-500">4.8 (120 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Button className="w-full">Book Consultation</Button>
                    </div>
                  </div>

                  {/* Doctor 2 */}
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Dr. Robert Chen" />
                        <AvatarFallback>RC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Dr. Robert Chen</p>
                        <p className="text-sm text-gray-500">Allergist</p>
                        <div className="mt-1 flex items-center">
                          <StarRating rating={4.7} />
                          <span className="ml-1 text-xs text-gray-500">4.7 (98 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Button className="w-full">Book Consultation</Button>
                    </div>
                  </div>

                  {/* Doctor 3 */}
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Dr. Maria Garcia" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Dr. Maria Garcia</p>
                        <p className="text-sm text-gray-500">General Practitioner</p>
                        <div className="mt-1 flex items-center">
                          <StarRating rating={4.9} />
                          <span className="ml-1 text-xs text-gray-500">4.9 (145 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Button className="w-full">Book Consultation</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 px-6 py-4">
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm text-gray-500">Need immediate assistance?</p>
                  <Button variant="outline">View All Doctors</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function Menu(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < fullStars ? "gold" : i === fullStars && hasHalfStar ? "url(#half)" : "none"}
          stroke="gold"
          strokeWidth="1"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="gold" />
              <stop offset="50%" stopColor="white" />
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

function ServiceCard({ title, icon, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg border p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="mt-3">
        <Button variant="outline" size="sm" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  )
}

