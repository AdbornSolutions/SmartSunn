/* ---------------------------- icons (inline SVG) ---------------------------- */
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M12 2.2v2.6M12 19.2v2.6M2.2 12h2.6M19.2 12h2.6M5.1 5.1l1.8 1.8M17.1 17.1l1.8 1.8M5.1 18.9l1.8-1.8M17.1 6.9l1.8-1.8" />
      </g>
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <g fill="currentColor">
        <rect x="7.4" y="1.8" width="2.4" height="5.4" rx="1" />
        <rect x="13.4" y="1.8" width="2.4" height="5.4" rx="1" />
        <path d="M5 7.2h13v3.4a6.5 6.5 0 0 1-6.5 6.5A6.5 6.5 0 0 1 5 10.6z" />
        <rect x="10.2" y="16.5" width="2.6" height="5" rx="1" />
      </g>
      {/* little "x" badge */}
      <circle cx="18.3" cy="18" r="4.2" fill="#24332F" />
      <path d="m16.5 16.2 3.6 3.6m0-3.6-3.6 3.6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 19.2a5 5 0 0 1-.9-9.9 6.4 6.4 0 0 1 12.3 1.1 4.4 4.4 0 0 1-.9 8.8z"
      />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.4 1.6 11.6h3V21h5.7v-6.2h3.4V21h5.7v-9.4h3z"
      />
    </svg>
  );
}

const impacts = [
  {
    Icon: SunIcon,
    color: "#FFC329",
    ring: "rgba(255,195,41,0.35)",
    value: "[X,XXX]",
    title: "MWh Clean Energy Generated",
    note: "[Placeholder — to be updated]",
  },
  {
    Icon: PlugIcon,
    color: "#12B978",
    ring: "rgba(18,185,120,0.40)",
    value: "[X,XXX]",
    title: "Average Grid Reduction",
    note: "[Placeholder — to be updated]",
  },
  {
    Icon: CloudIcon,
    color: "#FFFFFF",
    ring: "rgba(255,255,255,0.25)",
    value: "[X,XXX]",
    title: "Tonnes CO₂ Offset Annually",
    note: "[Placeholder — to be updated]",
  },
  {
    Icon: HouseIcon,
    color: "#FF8A24",
    ring: "rgba(255,138,36,0.38)",
    value: "[X,XXX]",
    title: "Systems Successfully Installed",
    note: "[Placeholder — to be updated]",
  },
];

// text size used for description, titles, notes and footnote
const bodyText =
  "font-roboto text-[15px] leading-[24px] text-white md:text-[16px] lg:text-[17.5px] lg:leading-[28px] min-[1300px]:text-[19.5px] min-[1300px]:leading-[32px]";

function Impact() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B2A20]">
      {/* Background photo */}
      <img
        src="/images/impact-bg.jpg"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* dark overlay so the text stays readable */}
      <div className="absolute inset-0 bg-[#06140F]/45" />

      <div className="relative mx-auto w-[90%] max-w-[1620px] py-[44px] lg:py-[48px]">
        {/* Heading */}
        <div className="text-center">
          <p className="font-roboto text-[16px] font-bold leading-[24px] text-[#FFC329] lg:text-[18px] min-[1300px]:text-[20px]">
            Our Impact
          </p>

          <h2 className="mt-[14px] font-manrope text-[28px] font-semibold leading-[1.2] text-white sm:text-[34px] lg:mt-[24px] min-[1300px]:mt-[33px] min-[1300px]:text-[41.6px] min-[1300px]:leading-[50px]">
            Powering a Cleaner Planet
          </h2>

          <p className={`mx-auto mt-[16px] max-w-[1100px] ${bodyText} min-[1300px]:mt-[29px]`}>
            Every system we install contributes to a measurable reduction in carbon emissions and dependence on fossil fuels.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-[44px] grid grid-cols-2 gap-x-4 gap-y-[40px] md:grid-cols-4 lg:mt-[64px] min-[1300px]:mt-[94px]">
          {impacts.map(({ Icon, color, ring, value, title, note }) => (
            <div key={title} className="flex min-w-0 flex-col items-center">
              {/* icon in a ring */}
              <div
                className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-[3px] bg-black/20 md:h-[84px] md:w-[84px] min-[1300px]:h-[98px] min-[1300px]:w-[98px] min-[1300px]:border-4"
                style={{ borderColor: ring, color }}
              >
                <span className="block h-[30px] w-[30px] md:h-[33px] md:w-[33px] min-[1300px]:h-[38px] min-[1300px]:w-[38px]">
                  <Icon />
                </span>
              </div>

              {/* big number */}
              <p
                className="mt-[10px] font-roboto text-[28px] font-bold leading-[1.2] text-[#FFC329] md:text-[30px] lg:text-[33px] min-[1300px]:mt-[3px] min-[1300px]:text-[36.8px] min-[1300px]:leading-[44px]"
              >
                {value}
              </p>

              {/* title + note: centered block, text starts at the same left edge */}
              <div className="w-fit max-w-full text-left">
                <p className={bodyText}>{title}</p>
                <p className={bodyText}>{note}</p>
              </div>
            </div>
          ))}
        </div>
<p>.</p>
        {/* Footnote */}
        <p className={`mt-[49px]  text-center ${bodyText} min-[1300px]:mt-[90px]`}>
          * All statistics are placeholder values and will be updated with verified data upon project completion.
        </p>
      </div>
    </section>
  );
}

export default Impact;
