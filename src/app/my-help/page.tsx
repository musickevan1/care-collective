import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { MyHelpItems } from '@/components/help/my-help-items'

export const metadata = {
  title: 'My Help Items - CARE Collective',
  description: 'Manage your help requests and offers',
}

export default async function MyHelpPage() {
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MyHelpItems />
      </div>
    </div>
  )
}