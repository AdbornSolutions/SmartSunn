// Yellow round check + text list (Our Approach / Our Commitment)
function CheckList({ items, className = "" }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-[14px] font-inter text-[15.2px] leading-[25.4px] text-[#2E2E2E]"
        >
          <svg viewBox="0 0 16 16" className="h-[15px] w-[15px] shrink-0" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#FFC629" />
            <path
              d="m4.6 8.2 2.3 2.3 4.5-4.6"
              fill="none"
              stroke="#fff"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CheckList;
