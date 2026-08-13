'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserAvatarIcon } from '@/components/auth/UserAvatarIcon'
import { useAuth } from '@/hooks/useAuth'
import { TEAM_HEADER_TITLE } from '@/features/team/data'

export function TeamHeader() {
  const router = useRouter()
  const { signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }

  return (
    <header className="relative z-20 bg-[#c5cae9] px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="text-xs font-bold tracking-wide text-[#1e3a8a] sm:text-sm">
          {TEAM_HEADER_TITLE}
        </p>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full focus:ring-2 focus:ring-[#3949ab] focus:outline-none"
            aria-label="Open profile menu"
            aria-expanded={open}
          >
            <UserAvatarIcon tone="navy" className="h-9 w-9 sm:h-10 sm:w-10" />
          </button>

          {open && (
            <div className="absolute top-full right-0 z-30 mt-2 min-w-[140px] rounded-bl-3xl bg-white py-4 pr-6 pl-6 text-center shadow-lg">
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm font-medium text-black hover:underline"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
