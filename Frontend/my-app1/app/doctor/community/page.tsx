"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Hash,
  Users,
  Bell,
  Pin,
  Search,
  Send,
  PlusCircle,
  Heart,
  Stethoscope,
  TreesIcon as Lungs,
  Brain,
  Bone,
  Eye,
  Ear,
  Pill,
  Settings,
  HelpCircle,
  Menu,
  X,
} from "lucide-react"

export default function DoctorCommunityPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isMobileUsersOpen, setIsMobileUsersOpen] = useState(false)
  const [activeChannel, setActiveChannel] = useState("skin")

  const specialties = [
    { id: "skin", name: "Dermatology", icon: <Heart className="h-4 w-4 mr-2" /> },
    { id: "lungs", name: "Pulmonology", icon: <Lungs className="h-4 w-4 mr-2" /> },
    { id: "neuro", name: "Neurology", icon: <Brain className="h-4 w-4 mr-2" /> },
    { id: "ortho", name: "Orthopedics", icon: <Bone className="h-4 w-4 mr-2" /> },
    { id: "ophth", name: "Ophthalmology", icon: <Eye className="h-4 w-4 mr-2" /> },
    { id: "ent", name: "ENT", icon: <Ear className="h-4 w-4 mr-2" /> },
    { id: "general", name: "General Medicine", icon: <Stethoscope className="h-4 w-4 mr-2" /> },
    { id: "pharma", name: "Pharmacology", icon: <Pill className="h-4 w-4 mr-2" /> },
  ]

  const onlineUsers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Dermatology",
      status: "online",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pulmonology",
      status: "online",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Neurology",
      status: "online",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const awayUsers = [
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      status: "away",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      specialty: "Ophthalmology",
      status: "away",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const messages = [
    {
      id: 1,
      user: onlineUsers[0],
      content: "Has anyone encountered a patient with unusual skin lesions that don't respond to standard treatments?",
      timestamp: "Today at 10:23 AM",
    },
    {
      id: 2,
      user: onlineUsers[1],
      content:
        "I've seen similar cases. Could you share some images for reference? Might be worth considering a biopsy.",
      timestamp: "Today at 10:25 AM",
    },
    {
      id: 3,
      user: onlineUsers[2],
      content:
        "I had a case last month with similar symptoms. The patient had an autoimmune condition that was causing the skin manifestations.",
      timestamp: "Today at 10:28 AM",
    },
    {
      id: 4,
      user: onlineUsers[0],
      content: "That's interesting. I'll look into autoimmune factors. Would you recommend any specific tests?",
      timestamp: "Today at 10:30 AM",
    },
    {
      id: 5,
      user: awayUsers[0],
      content:
        "ANA and immunoglobulin levels would be a good start. Happy to review the case if you want to share more details.",
      timestamp: "Today at 10:35 AM",
    },
  ]

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const toggleMobileUsers = () => {
    setIsMobileUsersOpen(!isMobileUsersOpen)
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-3 border-b">
        <Button variant="ghost" size="icon" onClick={toggleMobileSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">MedConnect</h1>
        <Button variant="ghost" size="icon" onClick={toggleMobileUsers}>
          <Users className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar - Specialties */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 md:relative md:translate-x-0 md:w-64 md:flex md:flex-col bg-muted/50 border-r ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">MedConnect</h2>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileSidebar}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            <div className="mb-4">
              <h3 className="px-4 py-2 text-xs font-semibold uppercase text-muted-foreground">Medical Specialties</h3>
              <div className="space-y-1">
                {specialties.map((specialty) => (
                  <Button
                    key={specialty.id}
                    variant={activeChannel === specialty.id ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveChannel(specialty.id)
                      if (window.innerWidth < 768) {
                        setIsMobileSidebarOpen(false)
                      }
                    }}
                  >
                    {specialty.icon}
                    {specialty.name}
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <h3 className="px-4 py-2 text-xs font-semibold uppercase text-muted-foreground">Resources</h3>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full md:h-screen">
        {/* Channel Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Hash className="h-5 w-5 mr-2 text-muted-foreground" />
            <h3 className="font-semibold">{specialties.find((s) => s.id === activeChannel)?.name || "Channel"}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Pin className="h-5 w-5" />
            </Button>
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search" className="w-48 pl-8 rounded-md bg-muted/50" />
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="flex">
                <Avatar className="h-10 w-10 mr-3 mt-1">
                  <AvatarImage src={message.user.avatar} alt={message.user.name} />
                  <AvatarFallback>
                    {message.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{message.user.name}</span>
                    <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                  </div>
                  <p className="text-sm mt-1">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="relative">
            <Input
              placeholder={`Message #${specialties.find((s) => s.id === activeChannel)?.name || "channel"}`}
              className="pr-10"
            />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center mt-2 text-xs text-muted-foreground">
            <PlusCircle className="h-4 w-4 mr-1" />
            <span>Upload files, images or documents</span>
          </div>
        </div>
      </div>

      {/* Users Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 transform transition-transform duration-300 md:relative md:translate-x-0 md:w-64 md:flex md:flex-col bg-muted/50 border-l ${isMobileUsersOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Members</h3>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileUsers}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4">
            <div className="mb-4">
              <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">
                Online — {onlineUsers.length}
              </h4>
              <div className="space-y-3">
                {onlineUsers.map((user) => (
                  <div key={user.id} className="flex items-center">
                    <div className="relative mr-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-background"></span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.specialty}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Away — {awayUsers.length}</h4>
              <div className="space-y-3">
                {awayUsers.map((user) => (
                  <div key={user.id} className="flex items-center">
                    <div className="relative mr-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-yellow-500 ring-1 ring-background"></span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.specialty}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Overlay for mobile */}
      {(isMobileSidebarOpen || isMobileUsersOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => {
            setIsMobileSidebarOpen(false)
            setIsMobileUsersOpen(false)
          }}
        />
      )}
    </div>
  )
}

