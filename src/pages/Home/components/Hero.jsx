import { Link } from "react-router-dom";
import ArrowCircle from "../../../components/common/ArrowCircle";

const tags = ["Residential", "Commercial", "Industrial"];

const stats = [
  { label: "Solar Generation", value: "847 kWh", note: "+12% vs last month" },
  { label: "Monthly Savings", value: "$240", note: "On track" },
  { label: "System Efficiency", value: "98.4%", note: "Optimal" },
  { label: "CO₂ Reduced", value: "0.6 T", note: "This year" },
];

const capabilities = [
  { title: "Solar PV", text: "Clean energy generation" },
  { title: "BESS", text: "Intelligent energy storage" },
  { title: "Grid", text: "Optimized grid interaction" },
  { title: "DG Integration", text: "Smarter backup management" },
  { title: "EMS", text: "Real-time energy intelligence" },
];

const outlineBtn =
  "inline-flex h-[45px] items-center gap-[10px] rounded-full border border-white/70 bg-[#0B2438]/30 pl-[22px] pr-[10px] font-manrope text-[15px] font-bold text-white transition hover:bg-white/10 lg:text-[16.6px]";

function Hero() {
  return (
    <section className="relative flex min-h-[560px] flex-col overflow-hidden bg-[#0A2236] lg:min-h-[672px]">
      {/* Background */}
      <img
        src="/Hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,38,0.80)_0%,rgba(5,26,46,0.62)_55%,rgba(5,26,46,0.55)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04142A]/70 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1620px] flex-1 items-center px-5 py-12 lg:px-[22px] lg:py-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_527px]">
          {/* Left */}
          <div>
            <h1 className="max-w-[800px] font-manrope text-[34px] font-semibold leading-[1.2] text-white sm:text-[42px] lg:text-[52px] lg:leading-[63px]">
              Powering a Smarter, More Resilient Energy Future.
            </h1>

            <p className="mt-[11px] max-w-[880px] font-roboto text-[16px] font-medium leading-[1.75] text-white lg:text-[17.6px]">
              SmartSun Solar delivers innovative, reliable solar energy systems
              for homes and businesses across the region.
            </p>

            {/* Tags */}
            <div className="mt-[36px] flex flex-wrap gap-4 lg:mt-[55px]">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-[#0B2438]/40 px-[26px] py-[10px] font-manrope text-[15px] font-semibold text-white lg:px-[33px] lg:text-[16.5px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-x-[23px] gap-y-3">
              <Link to="/contact-us" className={outlineBtn}>
                Get a Solar Quote
                <ArrowCircle
                  variant="light"
                  className="h-[24px] w-[24px]"
                />
              </Link>

              <Link to="/contact-us" className={outlineBtn}>
                Schedule a Site Assessment
                <ArrowCircle
                  variant="light"
                  className="h-[24px] w-[24px]"
                />
              </Link>
            </div>
          </div>

          {/* Live stats card */}
          <div className="w-full rounded-[8px] border border-white/10 bg-[#07182A]/55 p-3 backdrop-blur-[2px]">
            <p className="font-roboto text-[18px] font-medium leading-[30px] text-white/70 lg:text-[20.8px]">
              Live Solar Stats
            </p>

            <div className="mt-[19px] grid grid-cols-2 gap-x-6 gap-y-[22px]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-roboto text-[16px] font-medium leading-[26px] text-white/60 lg:text-[19.2px]">
                    {s.label}
                  </p>

                  <p className="mt-[10px] font-manrope text-[28px] font-semibold leading-[40px] text-white lg:text-[35px]">
                    {s.value}
                  </p>

                  <p className="mt-[7px] font-roboto text-[16px] font-medium leading-[26px] text-white/60 lg:text-[19.2px]">
                    {s.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Energy Source */}
            <div className="mt-[33px] px-3 pb-3">
              <p className="font-roboto text-[18px] font-medium leading-[30px] text-white/85 lg:text-[20.8px]">
                Energy Source
              </p>

              <div className="mt-[6px] flex h-[13px] overflow-hidden rounded-full bg-white/90">
                <span className="w-[72%] rounded-full bg-[#FFC629]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capability strip */}
      <div className="relative z-10 mx-auto w-full max-w-[1620px]">
        <div className="grid grid-cols-2 border-y border-white/25 md:grid-cols-3 lg:grid-cols-5">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className={`px-[23px] py-[23px] ${
                i > 0 ? "lg:border-l lg:border-white/25" : ""
              } ${
                i % 2 === 1
                  ? "border-l border-white/25 md:border-l-0"
                  : ""
              }`}
            >
              <p className="font-manrope text-[16px] font-bold leading-[26px] text-[#FFC629] lg:text-[18.4px]">
                {c.title}
              </p>

              <p className="font-roboto text-[15px] leading-[28px] text-white/50 lg:text-[17.6px]">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;