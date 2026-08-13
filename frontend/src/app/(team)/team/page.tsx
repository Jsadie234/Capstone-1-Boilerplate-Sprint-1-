import type { Metadata } from 'next'
import { TeamHeader } from '@/features/team/components/TeamHeader'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'
import { TEAM_MEMBERS } from '@/features/team/data'

export const metadata: Metadata = {
  title: 'Meet Our Team',
}

export default function TeamPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/team-page-background.svg"
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <TeamHeader />

      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-wide text-[#1e3a8a] sm:mb-14 sm:text-4xl md:text-5xl">
          MEET OUR TEAM
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </main>
    </div>
  )
}
