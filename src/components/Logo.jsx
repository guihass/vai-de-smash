import { useId } from "react";

// Marca do Brasa Burger: badge em degradê "brasa" com o smash empilhado dentro.
export function LogoMark({ className = "h-9 w-9" }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f59e0b" />
          <stop offset=".55" stopColor="#ef4444" />
          <stop offset="1" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill={`url(#${gradientId})`} />
      <circle cx="32" cy="32" r="27" fill="none" stroke="#f4efe6" strokeOpacity=".28" strokeWidth="1.5" />
      <g transform="translate(0 -1)">
        <path d="M16 33C16 22.5 23.2 16 32 16s16 6.5 16 17z" fill="#f4efe6" />
        <g fill="#c2410c" opacity=".55">
          <ellipse cx="25.6" cy="24.4" rx="2" ry="1.3" transform="rotate(-22 25.6 24.4)" />
          <ellipse cx="32" cy="21.6" rx="2" ry="1.3" />
          <ellipse cx="38.4" cy="24.4" rx="2" ry="1.3" transform="rotate(22 38.4 24.4)" />
        </g>
        <rect x="14.5" y="32.8" width="35" height="3" rx="1.5" fill="#fbbf24" />
        <rect x="15" y="36.4" width="34" height="6" rx="3" fill="#2a0e0e" />
        <rect x="17" y="43.4" width="30" height="6" rx="3" fill="#f4efe6" />
      </g>
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <a
      href="#inicio"
      aria-label="Brasa Burger - ir para o início"
      className={`flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-white ${className}`}
    >
      <LogoMark />
      Brasa <span className="text-brand-amber">Burger</span>
    </a>
  );
}
