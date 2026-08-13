export function UserAvatarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="32" fill="#1e3a8a" />
      <circle cx="32" cy="24" r="10" fill="white" />
      <path
        d="M12 54c4-12 12-18 20-18s16 6 20 18"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
