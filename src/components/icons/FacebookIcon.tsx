export function FacebookIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.34c-.27-.036-1.2-.117-2.28-.117-2.26 0-3.81 1.38-3.81 3.9V10.5H8v3h2.41V21z" />
    </svg>
  );
}
