import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { NewHelpForm } from '@/components/help/new-help-form'

export default async function NewHelpPage() {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <NewHelpForm />
      </div>
    </div>
  )
}