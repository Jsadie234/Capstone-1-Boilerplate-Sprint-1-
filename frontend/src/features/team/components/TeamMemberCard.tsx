'use client'

import { useState } from 'react'
import { UserAvatarIcon } from '@/components/auth/UserAvatarIcon'
import type { TeamMember } from '@/features/team/data'

const TRUNCATE_LENGTH = 80

type TeamMemberCardProps = {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isLong = member.bio.length > TRUNCATE_LENGTH
  const displayBio =
    expanded || !isLong ? member.bio : `${member.bio.slice(0, TRUNCATE_LENGTH).trim()}…`

  return (
    <article className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-white to-[#dbeafe] p-5 shadow-sm sm:p-6">
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-start md:flex-col md:items-center">
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt=""
            className="h-20 w-20 shrink-0 rounded-full object-cover sm:h-16 sm:w-16 md:h-24 md:w-24"
          />
        ) : (
          <UserAvatarIcon className="h-20 w-20 shrink-0 sm:h-16 sm:w-16 md:h-24 md:w-24" />
        )}

        <div className="w-full space-y-1 text-center sm:text-left md:text-center">
          <h2 className="text-sm font-bold tracking-wide text-black uppercase sm:text-base">
            {member.name}
          </h2>
          <p className="text-xs font-bold tracking-wide text-black uppercase sm:text-sm">
            {member.role}
          </p>
          <p className="pt-2 text-xs leading-relaxed text-zinc-700 sm:text-sm">{displayBio}</p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-1 text-xs font-semibold text-[#1e3a8a] hover:underline"
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          )}
          <div className="space-y-1 pt-3 text-xs text-zinc-700 sm:text-sm">
            <p>
              <a
                href={`mailto:${member.email}`}
                className="break-all text-[#1e3a8a] hover:underline"
              >
                {member.email}
              </a>
            </p>
            <p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-[#1e3a8a] hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
