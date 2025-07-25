import { SignInForm } from '@/components/auth/signin-form'

export const metadata = {
  title: 'Sign In - CARE Collective',
  description: 'Sign in to your CARE Collective account to connect with your community',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm mx-auto">
        <SignInForm />
      </div>
    </div>
  )
}