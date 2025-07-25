import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { HelpBoard } from '@/components/help/help-board'

export const metadata = {
  title: 'Help Board - CARE Collective',
  description: 'Connect with your community to offer or request help with daily tasks',
}

export default async function HelpBoardPage() {
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

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HelpBoard />
      </div>
    </div>
  )
}