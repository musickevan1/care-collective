import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MessageSquare, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Announcements - CARE Collective',
  description: 'Stay updated with community announcements and events',
}

export default async function AnnouncementsPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/signin')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile?.full_name) {
    redirect('/onboarding')
  }

  // Mock announcements data - replace with real data fetch
  const announcements = [
    {
      id: 1,
      title: 'New Support Group Starting Next Week',
      content: 'Join us for our weekly caregiver support group meetings every Tuesday at 7 PM...',
      type: 'event',
      date: '2025-01-28',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Resource Library Updated',
      content: 'We\'ve added new guides and resources to help with daily caregiving tasks...',
      type: 'update',
      date: '2025-01-25',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Community Guidelines Reminder',
      content: 'Please remember to follow our community guidelines when posting help requests...',
      type: 'announcement',
      date: '2025-01-20',
      priority: 'low'
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Caregiver Workshop: Self-Care Strategies',
      date: '2025-02-05',
      time: '2:00 PM - 4:00 PM',
      location: 'Community Center',
      attendees: 12
    },
    {
      id: 2,
      title: 'Monthly Coffee Meetup',
      date: '2025-02-10',
      time: '10:00 AM - 12:00 PM',
      location: 'Local Café',
      attendees: 8
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Community Hub</h1>
          <p className="text-muted-foreground">
            Stay connected with announcements, events, and community updates
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/app/help-board">
              <MessageSquare className="w-4 h-4 mr-2" />
              View Help Board
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/app/help-board/new">
              Post Help Request
            </Link>
          </Button>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="announcements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="announcements" className="space-y-4">
            <div className="grid gap-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="transition-shadow hover:shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-xl">{announcement.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant={announcement.priority as 'high' | 'medium' | 'low'}>
                          {announcement.priority}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(announcement.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {announcement.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              {events.map((event) => (
                <Card key={event.id} className="transition-shadow hover:shadow-md">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{event.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Attending:</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{event.attendees}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-4">
                      RSVP
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}