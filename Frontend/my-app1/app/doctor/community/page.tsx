import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DoctorCommunity() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r">
        {/* ... (Keep the sidebar content the same as in the dashboard) ... */}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
          {/* ... (Keep the header content the same as in the dashboard) ... */}
        </header>

        {/* Community Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-2xl font-bold tracking-tight">Doctor Community</h1>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="oncology">Oncology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="general">General Practice</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Post
                </Button>
              </div>
            </div>

            {/* Community Tabs */}
            <Tabs defaultValue="all-posts">
              <TabsList>
                <TabsTrigger value="all-posts">All Posts</TabsTrigger>
                <TabsTrigger value="my-specialty">My Specialty</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>

              <TabsContent value="all-posts" className="mt-4 space-y-4">
                {/* New Post Form */}
                <Card>
                  <CardContent className="pt-6">
                    <Textarea placeholder="Share your thoughts, ask a question, or discuss a case..." />
                    <div className="mt-4 flex justify-between items-center">
                      <Select defaultValue="public">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="specialty">My Specialty</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button>Post</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Community Posts */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Emily Chen" />
                        <AvatarFallback>EC</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">Dr. Emily Chen</CardTitle>
                        <CardDescription>Cardiologist • 2 hours ago</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Has anyone had experience with the new AI-assisted ECG interpretation software? I'm considering
                      implementing it in my practice and would love to hear some feedback.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <Button variant="outline" size="sm">
                        💬 12 Comments
                      </Button>
                      <Button variant="outline" size="sm">
                        👍 8 Likes
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Michael Johnson" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">Dr. Michael Johnson</CardTitle>
                        <CardDescription>Neurologist • 5 hours ago</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      I'm presenting a case study on a rare neurological condition at next month's conference. If anyone
                      has encountered similar cases or has insights to share, I'd greatly appreciate your input.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <Button variant="outline" size="sm">
                        💬 8 Comments
                      </Button>
                      <Button variant="outline" size="sm">
                        👍 15 Likes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="my-specialty" className="mt-4">
                {/* Add content for My Specialty tab */}
                <Card>
                  <CardHeader>
                    <CardTitle>My Specialty: Cardiology</CardTitle>
                    <CardDescription>Discussions and posts related to your specialty</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Add specialty-specific content here */}</CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trending" className="mt-4">
                {/* Add content for Trending tab */}
                <Card>
                  <CardHeader>
                    <CardTitle>Trending Discussions</CardTitle>
                    <CardDescription>Hot topics in the medical community</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Add trending posts and discussions here */}</CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

