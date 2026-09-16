export default function Scribble({ className = "" }) {
  return (
    <svg
      viewBox="0 0 320 26"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 15.5c52-7.5 105-11 158-10.2 49 .8 98 4.8 152 12.2"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M26 23c58-5.5 117-7.6 176-6.2"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
