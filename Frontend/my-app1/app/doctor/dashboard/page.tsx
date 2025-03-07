import Link from "next/link"
import {
  Bell,
  Calendar,
  FileText,
  MessageSquare,
  Search,
  Users,
  User,
  Home,
  Settings,
  LogOut,
  PlusCircle,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DoctorDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/doctor/dashboard" className="flex items-center gap-2 font-semibold">
            <FileText className="h-5 w-5 text-teal-600" />
            <span>Docto</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <h2 className="mb-2 text-xs font-semibold text-gray-500">Dashboard</h2>
            <div className="space-y-1">
              <Link
                href="/doctor/dashboard"
                className="flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium"
              >
                <Home className="h-4 w-4" />
                Overview
              </Link>
              <Link
                href="/doctor/patients"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Users className="h-4 w-4" />
                Patients
              </Link>
              <Link
                href="/doctor/appointments"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Calendar className="h-4 w-4" />
                Appointments
              </Link>
              <Link
                href="/doctor/community"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <MessageSquare className="h-4 w-4" />
                Community
                <Badge className="ml-auto bg-teal-500">3</Badge>
              </Link>
            </div>
          </div>
          <div className="px-4 mb-4">
            <h2 className="mb-2 text-xs font-semibold text-gray-500">Settings</h2>
            <div className="space-y-1">
              <Link
                href="/doctor/profile"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/doctor/settings"
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
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Jane Smith" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Dr. Jane Smith</p>
              <p className="text-xs text-gray-500">Cardiologist</p>
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
                  placeholder="Search patients, cases..."
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
              <h1 className="text-2xl font-bold tracking-tight">Doctor Dashboard</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>March 7, 2025</span>
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                  <Users className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">248</div>
                  <p className="text-xs text-gray-500">+12 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                  <FileText className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-gray-500">5 urgent cases</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-gray-500">Next at 10:30 AM</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Community Questions</CardTitle>
                  <MessageSquare className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-gray-500">2 new since yesterday</p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs for different sections */}
            <Tabs defaultValue="pending-reviews">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="pending-reviews">Pending Reviews</TabsTrigger>
                  <TabsTrigger value="recent-patients">Recent Patients</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span>Filter</span>
                  </Button>
                  <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span>New Case</span>
                  </Button>
                </div>
              </div>

              {/* Pending Reviews Tab */}
              <TabsContent value="pending-reviews" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Cases Requiring Review</CardTitle>
                    <CardDescription>Review AI diagnoses and approve treatment plans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Case 1 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">John Doe</p>
                              <p className="text-sm text-gray-500">Male, 45 years</p>
                            </div>
                          </div>
                          <Badge className="bg-amber-500">Urgent</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">AI Diagnosis: Suspected Hypertension</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Uploaded chest X-ray and blood pressure readings. AI suggests medication review.
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Uploaded 2 hours ago</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">Review</Button>
                          </div>
                        </div>
                      </div>

                      {/* Case 2 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                              <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Sarah Johnson</p>
                              <p className="text-sm text-gray-500">Female, 32 years</p>
                            </div>
                          </div>
                          <Badge className="bg-teal-500">New</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">AI Diagnosis: Skin Condition - Possible Eczema</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Uploaded images of skin rash. AI suggests topical treatment and allergy testing.
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Uploaded 5 hours ago</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">Review</Button>
                          </div>
                        </div>
                      </div>

                      {/* Case 3 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                              <AvatarFallback>MC</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Michael Chen</p>
                              <p className="text-sm text-gray-500">Male, 28 years</p>
                            </div>
                          </div>
                          <Badge>Standard</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">AI Diagnosis: Respiratory Infection</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Uploaded lung X-ray and symptom description. AI suggests antibiotics and follow-up.
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Uploaded yesterday</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">Review</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Recent Patients Tab */}
              <TabsContent value="recent-patients" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Patients</CardTitle>
                    <CardDescription>Your recently active patients and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                          <thead>
                            <tr className="border-b bg-gray-50">
                              <th className="h-10 px-4 text-left font-medium">Patient</th>
                              <th className="h-10 px-4 text-left font-medium">Status</th>
                              <th className="h-10 px-4 text-left font-medium">Last Visit</th>
                              <th className="h-10 px-4 text-left font-medium">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Emily Wilson" />
                                    <AvatarFallback>EW</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">Emily Wilson</p>
                                    <p className="text-xs text-gray-500">Female, 41 years</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <Badge className="bg-green-500">Treatment Complete</Badge>
                              </td>
                              <td className="p-4">March 5, 2025</td>
                              <td className="p-4">
                                <Button variant="outline" size="sm">
                                  View Profile
                                </Button>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Robert Garcia" />
                                    <AvatarFallback>RG</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">Robert Garcia</p>
                                    <p className="text-xs text-gray-500">Male, 52 years</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <Badge className="bg-blue-500">Follow-up Scheduled</Badge>
                              </td>
                              <td className="p-4">March 3, 2025</td>
                              <td className="p-4">
                                <Button variant="outline" size="sm">
                                  View Profile
                                </Button>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Aisha Patel" />
                                    <AvatarFallback>AP</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">Aisha Patel</p>
                                    <p className="text-xs text-gray-500">Female, 36 years</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <Badge className="bg-amber-500">Awaiting Test Results</Badge>
                              </td>
                              <td className="p-4">March 1, 2025</td>
                              <td className="p-4">
                                <Button variant="outline" size="sm">
                                  View Profile
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="David Kim" />
                                    <AvatarFallback>DK</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">David Kim</p>
                                    <p className="text-xs text-gray-500">Male, 29 years</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <Badge>New Patient</Badge>
                              </td>
                              <td className="p-4">February 28, 2025</td>
                              <td className="p-4">
                                <Button variant="outline" size="sm">
                                  View Profile
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Community Tab */}
              <TabsContent value="community" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Doctor Community</CardTitle>
                    <CardDescription>Collaborate with other doctors and share knowledge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Question 1 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Mark Williams" />
                              <AvatarFallback>MW</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Dr. Mark Williams</p>
                              <p className="text-xs text-gray-500">Neurologist</p>
                            </div>
                          </div>
                          <Badge className="bg-teal-500">New</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">Question about unusual MRI findings</p>
                          <p className="text-sm text-gray-500 mt-1">
                            I have a patient with these unusual MRI findings. Has anyone seen something similar in cases
                            of early-onset dementia?
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Posted 3 hours ago • 5 replies</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Discussion
                            </Button>
                            <Button size="sm">Reply</Button>
                          </div>
                        </div>
                      </div>

                      {/* Question 2 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sophia Rodriguez" />
                              <AvatarFallback>SR</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Dr. Sophia Rodriguez</p>
                              <p className="text-xs text-gray-500">Dermatologist</p>
                            </div>
                          </div>
                          <Badge className="bg-teal-500">New</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">Seeking second opinion on rare skin condition</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Patient presents with this unusual rash that doesn't respond to standard treatments. Any
                            suggestions?
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Posted yesterday • 3 replies</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Discussion
                            </Button>
                            <Button size="sm">Reply</Button>
                          </div>
                        </div>
                      </div>

                      {/* Question 3 */}
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. James Lee" />
                              <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Dr. James Lee</p>
                              <p className="text-xs text-gray-500">Cardiologist</p>
                            </div>
                          </div>
                          <Badge className="bg-teal-500">New</Badge>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">New research on hypertension treatment</p>
                          <p className="text-sm text-gray-500 mt-1">
                            I've been reviewing the latest research on combination therapies for resistant hypertension.
                            Thoughts on this approach?
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-xs text-gray-500">Posted 2 days ago • 8 replies</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Discussion
                            </Button>
                            <Button size="sm">Reply</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

function Menu(props) {
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

