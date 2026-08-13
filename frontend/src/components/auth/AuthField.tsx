import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode
  error?: string
}

export function AuthField({ icon, error, className, id, ...props }: AuthFieldProps) {
  return (
    <div className="space-y-1">
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#1e3a8a]">
          {icon}
        </span>
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error && id ? `${id}-error` : undefined}
          className={cn(
            'w-full rounded-full border-0 bg-[#c5cae9] py-3 pr-4 pl-11 text-sm text-[#1e3a8a] shadow-sm placeholder:text-[#1e3a8a]/70 focus:ring-2 focus:ring-[#3949ab] focus:outline-none',
            error && 'ring-2 ring-red-400',
            className,
          )}
          {...props}
        />
      </div>
      {error && id && (
        <p id={`${id}-error`} className="px-2 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
