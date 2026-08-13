'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { KeyRound, UserRound } from 'lucide-react'
import { toast } from 'sonner'
import { AuthField } from '@/components/auth/AuthField'
import { UserAvatarIcon } from '@/components/auth/UserAvatarIcon'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'
import { useAuth } from '@/hooks/useAuth'
import { signupSchema, type SignupInput } from '@/lib/validations/auth'

export default function SignUpPage() {
  const router = useRouter()
  const { user, loading, signUpWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  })

  useEffect(() => {
    if (!loading && !isSubmitting && user) {
      router.replace('/team')
    }
  }, [loading, isSubmitting, user, router])

  if (loading) return <FullPageSpinner />

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/team')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  const onSubmit = async (data: SignupInput) => {
    try {
      await signUpWithEmail(data.email, data.password, data.displayName)
      router.push('/auth/signin?verification=sent')
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-already-in-use')) {
        toast.error('An account with this email already exists')
      } else {
        toast.error('Failed to create account. Please try again.')
      }
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center space-y-6">
      <UserAvatarIcon className="h-16 w-16" />

      <h1 className="text-2xl font-bold tracking-wide text-[#1e3a8a]">SIGN UP</h1>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex w-full items-center justify-center gap-3 rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-[#1e3a8a] shadow-sm transition-colors hover:bg-zinc-50"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>

      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-zinc-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-zinc-400">or</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <AuthField
          id="displayName"
          type="text"
          autoComplete="name"
          placeholder="name"
          icon={<UserRound className="h-4 w-4" strokeWidth={2.5} />}
          error={errors.displayName?.message}
          {...register('displayName')}
        />

        <AuthField
          id="email"
          type="email"
          autoComplete="email"
          placeholder="username"
          icon={<UserRound className="h-4 w-4" strokeWidth={2.5} />}
          error={errors.email?.message}
          {...register('email')}
        />

        <AuthField
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="password"
          icon={<KeyRound className="h-4 w-4" strokeWidth={2.5} />}
          error={errors.password?.message}
          {...register('password')}
        />

        <AuthField
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="confirm password"
          icon={<KeyRound className="h-4 w-4" strokeWidth={2.5} />}
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 text-sm font-bold tracking-wide text-black transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'Creating account…' : 'CREATE ACCOUNT'}
        </button>
      </form>

      <p className="text-center text-sm text-[#1e3a8a]/80">
        Already have an account?{' '}
        <Link href="/auth/signin" className="font-semibold text-[#1e3a8a] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
