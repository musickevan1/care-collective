import { SignUpForm } from '@/components/auth/signup-form'

export const metadata = {
  title: 'Sign Up - CARE Collective',
  description: 'Join the CARE Collective community and connect with fellow caregivers',
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm mx-auto">
        <SignUpForm />
      </div>
    </div>
  )
}