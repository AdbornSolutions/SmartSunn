import { useEffect, useRef, useState } from "react";


const steps = [
  {
    title: "Sunlight Capture",
    description:
      "Solar panels absorb sunlight and convert photons into direct current (DC) electricity through photovoltaic cells.",
    image: "/images/steps/step-1.png",
  },
  {
    title: "Power Conversion",
    description:
      "An inverter transforms DC electricity into alternating current (AC) usable by your home or business appliances.",
    image: "/images/steps/step-1.png",
  },
  {
    title: "Energy Distribution",
    description:
      "Clean energy powers your loads directly, reducing reliance on the grid and lowering your monthly bills.",
    image: "/images/steps/step-1.png",
  },
  {
    title: "Battery Storage",
    description:
      "Excess energy is stored in batteries for nighttime use or during outages, maximizing self-consumption.",
    image: "/images/steps/step-1.png",
  },
  {
    title: "Grid Feedback",
    description:
      "Surplus power can be exported back to the grid, earning you credits through net metering programs.",
    image: "/images/steps/step-1.png",
  },
  {
    title: "Monitoring & Optimization",
    description:
      "Smart software tracks performance in real time and optimizes energy usage automatically.",
    image: "/images/steps/step-1.png",
  },
];

function HowItWorks() {
  const [active, setActive] = useState(-1);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="how-it-works" className="bg-white pt-[40px] lg:pt-[56px]">
      <section className="bg-[#F5F3EE] px-5 pb-[24px] pt-[22px] [font-family:Arial,Helvetica,sans-serif]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[15.4px] font-bold leading-[20px] text-[#0FA36B]">How It Works</p>
          <h2 className="mt-[24px] text-[30px] font-bold leading-[1.2] text-[#14221E] lg:mt-[30px] lg:text-[40px] lg:leading-[48px]">
            Demystifying Solar Energy
          </h2>
          <p className="mx-auto mt-[20px] max-w-[640px] text-[16px] leading-[1.7] text-[#6B6B6B] lg:mt-[28px] lg:max-w-none lg:text-[17.6px] lg:leading-[28px]">
            From sunlight to savings — here&apos;s how your solar system works, step by step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-[36px] max-w-[1155px] rounded-[16px] bg-[#F8F6F2] py-6 pl-[52px] pr-3 lg:mt-[46px] lg:py-8 lg:pl-[100px] lg:pr-[35px]">
          {/* vertical line */}
          <span className="absolute bottom-[42px] left-[25px] top-[38px] w-[3px] rounded bg-[#F7D27A] lg:bottom-[45px] lg:left-[62px] lg:top-[47px]" />

          <ol className="flex flex-col gap-[20px] lg:gap-[30px]">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.title} ref={(el) => (itemRefs.current[i] = el)} data-index={i} className="relative">
                  <span
                    className={`absolute -left-[40px] top-0 z-10 flex h-[28px] w-[28px] items-center justify-center rounded-full border-[2px] text-[14px] font-bold transition-colors duration-500 lg:-left-[53px] lg:h-[32px] lg:w-[32px] lg:text-[15px] ${
                      isActive
                        ? "border-[#12A66B] bg-[#12A66B] text-white"
                        : "border-[#E2E2E2] bg-white text-[#8A8A8A]"
                    }`}
                  >
                    {i + 1}
                  </span>

                  <article
                    className={`relative overflow-hidden rounded-[10px] px-4 pb-[20px] pt-[28px] transition-shadow duration-500 lg:px-[23px] lg:pb-[25px] lg:pt-[34px] ${
                      isActive
                        ? "shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
                        : "shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                    } bg-white`}
                  >
                    <img
                      src={step.image}
                      alt=""
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-[linear-gradient(90deg,rgba(6,32,44,0.88)_0%,rgba(6,32,44,0.55)_55%,rgba(6,32,44,0.30)_100%)] transition-opacity duration-700 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <span
                      className={`absolute right-[14px] top-[12px] text-[11.5px] font-bold tracking-[0.1em] transition-colors duration-500 lg:right-[20px] lg:top-[20px] lg:text-[12.8px] ${
                        isActive ? "text-white" : "text-[#9A9A9A]"
                      }`}
                    >
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`relative text-[20px] font-bold leading-[32px] transition-colors duration-500 lg:text-[24px] ${
                        isActive ? "text-white" : "text-[#1B2A26]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`relative mt-[10px] max-w-[830px] text-[15px] leading-[1.65] transition-colors duration-500 lg:mt-[15px] lg:text-[17.6px] lg:leading-[29px] ${
                        isActive ? "text-white" : "text-[#6B6B6B]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
