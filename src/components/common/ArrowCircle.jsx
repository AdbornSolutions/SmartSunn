function ArrowCircle({ variant = "dark", className = "h-[18px] w-[18px]" }) {
  const circle = variant === "dark" ? "#0B0F14" : "#FFFFFF";
  const arrow = variant === "dark" ? "#FFC629" : "#0B1F2E";

  return (
    <svg viewBox="0 0 20 20" className={`shrink-0 ${className}`} aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={circle} />
      <path
        d="M5.5 10h8m0 0-3.2-3.2M13.5 10l-3.2 3.2"
        fill="none"
        stroke={arrow}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowCircle;
