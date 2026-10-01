// Tiny inline icons (no extra package needed)

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function ArrowLeftIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
    </svg>
  );
}

export function ArrowRightIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export function BoltIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13.2 2 5 13.4h5.6L9.8 22 19 10.3h-5.9L13.2 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FingerprintIcon({ className }) {
  return (
    <svg {...base} strokeWidth={1.6} className={className}>
      <path d="M12 11c0 3-.5 5.6-1.6 8" />
      <path d="M8 19.5c.9-1.8 1.4-4.5 1.4-7.5a2.6 2.6 0 0 1 5.2 0c0 1.1 0 2.2-.2 3.2" />
      <path d="M5.3 17c.5-1.6.7-3.2.7-5a6 6 0 0 1 12 0c0 1 0 1.8-.1 2.7" />
      <path d="M4 10.5A8 8 0 0 1 20 11c0 .8 0 1.6-.2 2.4" />
      <path d="M17.6 18.5c.4-1.2.7-2.4.9-3.6" />
      <path d="M14 20c.4-1 .7-2 .9-3" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6L17 12l4 1.5v3c0 1.1-.9 2-2 2C11.3 18.5 5.5 12.7 5.5 5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

export function PinIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}