import { ForgotPasswordForm } from '@/components/auth/forgot-password-form'

export const metadata = {
  title: 'Reset Password - CARE Collective',  
  description: 'Reset your CARE Collective account password',
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm mx-auto">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}