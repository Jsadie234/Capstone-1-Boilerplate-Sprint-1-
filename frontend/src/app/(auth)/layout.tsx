import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e8dff5] via-[#dce8f5] to-[#c9dff5] p-4 sm:p-8">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="relative hidden min-h-[520px] w-2/5 md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/login-page-image.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-left-top"
          />
        </div>
        <div className="flex w-full flex-col justify-center bg-white/90 px-8 py-10 backdrop-blur-sm md:w-3/5 md:px-12 md:py-14">
          {children}
        </div>
      </div>
    </div>
  )
}
