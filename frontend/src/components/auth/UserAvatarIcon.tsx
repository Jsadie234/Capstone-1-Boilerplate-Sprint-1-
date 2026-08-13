type UserAvatarIconProps = {
  className?: string
  /** Header profile uses navy; anonymous placeholders use grey. */
  tone?: 'grey' | 'navy'
}

export function UserAvatarIcon({ className, tone = 'grey' }: UserAvatarIconProps) {
  const color = tone === 'navy' ? '#1e3a8a' : '#3f3f46'

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="29" stroke={color} strokeWidth="3" />
      <circle cx="32" cy="21" r="11" fill={color} />
      <path
        d="M19 42Q32 36 45 42c4 5 6 8 6.4 9.5A27.5 27.5 0 0 1 12.6 51.5C13 50 15 47 19 42Z"
        fill={color}
      />
    </svg>
  )
}
