import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { HeartHandshake, MessageSquare, Megaphone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'CARE Collective - Community Care, Simplified',
  description: 'An accessible web application for family caregivers to offer or request help',
}

export default async function Home() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (!profile?.full_name) {
      redirect('/onboarding')
    } else {
      redirect('/app/announcements')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <HeartHandshake className="h-12 w-12 text-primary" />
          </div>
          
          {/* Hero Text */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            Community Care, <span className="text-primary">Simplified</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            A supportive network for family caregivers to share, connect, and find help when it matters most. 
            Join a community that understands your journey.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A helping hand for the helpers
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our platform provides the tools and community to make caregiving less isolating and more manageable.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Help Board
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Post requests for help, from errands to respite care, and get support from a trusted network of fellow caregivers.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <Megaphone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Community Announcements
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Stay informed with the latest updates, resources, and events relevant to the caregiving community.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="text-xl font-medium text-foreground sm:text-2xl">
            &ldquo;CARE Collective has been a lifeline. It&apos;s more than just an app; it&apos;s a community that understands.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="text-base font-semibold text-muted-foreground">Jane D., Family Caregiver</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
        <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          <span>&copy; 2025 CARE Collective</span>
        </div>
      </footer>
    </div>
  )
}
