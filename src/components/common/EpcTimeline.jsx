import { useState } from "react";
import Reveal from "./Reveal";

// "How we deliver" timeline used on the Services and Projects pages.
//  - click (or tap / press Enter) a step -> that step turns dark and shows the photo
//  - only one step is highlighted at a time; step 1 is highlighted at the start
//  - every step is a real <button>, so it also works with the keyboard
//
// props: tag, title, text, steps: [{ title, text }], activeImage
function EpcTimeline({ tag, title, text, steps, activeImage, defaultActive = 0 }) {
  const [active, setActive] = useState(defaultActive);

  return (
    <section className="bg-white py-[56px] lg:py-[80px]">
      <div className="mx-auto w-[89%]">
        <Reveal className="text-center">
          <p className="font-inter text-[14.5px] text-[#2B3642]">{tag}</p>
          <h2 className="mx-auto mt-3 max-w-[820px] font-manrope text-[26px] font-semibold leading-[1.25] text-[#101E33] sm:text-[32px] lg:text-[38px] lg:leading-[48px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] font-inter text-[15px] leading-[26px] text-[#3A4652]">{text}</p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="mx-auto mt-[32px] max-w-[760px] rounded-[10px] bg-[#F5F2EC] p-3 sm:p-6 lg:mt-[44px] lg:px-[34px] lg:py-[24px]">
            {steps.map((step, i) => {
              const isActive = active === i;
              const isLast = i === steps.length - 1;

              return (
                <li key={step.title} className="relative flex items-start gap-3 pb-[14px] last:pb-0 sm:gap-5">
                  {/* yellow line: from this badge to the next one */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-[12px] top-[14px] w-[3px] rounded-full bg-[#F5B61A] ${
                      isLast ? "bottom-[6px]" : "h-full"
                    }`}
                  />

                  <span
                    className={`relative z-10 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border-2 font-manrope text-[11.5px] font-bold transition-colors duration-300 ${
                      isActive
                        ? "border-white bg-[#1FB877] text-white shadow-[0_0_0_2px_rgba(31,184,119,0.25)]"
                        : "border-[#E4E0D6] bg-white text-[#8A94A0]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className={`relative isolate min-w-0 flex-1 cursor-pointer overflow-hidden rounded-[10px] bg-white px-4 py-4 text-left transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629] sm:px-5 sm:py-[18px] ${
                      isActive
                        ? "shadow-[0_10px_28px_rgba(6,30,45,0.28)]"
                        : "shadow-[0_2px_10px_rgba(16,30,51,0.05)] hover:shadow-[0_6px_20px_rgba(16,30,51,0.12)]"
                    }`}
                  >
                    {/* photo layer – always in the page, faded in/out so there is no flash */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 -z-10 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={activeImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full bg-[#0A2236] object-cover object-[center_52%]"
                      />
                      <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,20,35,0.90)_0%,rgba(5,20,35,0.62)_100%)]" />
                    </span>

                    <span
                      className={`block font-manrope text-[16.5px] font-bold leading-[24px] transition-colors duration-300 sm:text-[18px] ${
                        isActive ? "text-white" : "text-[#101E33]"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`mt-[6px] block font-inter text-[14px] leading-[22px] transition-colors duration-300 ${
                        isActive ? "text-white/90" : "text-[#6B7480]"
                      }`}
                    >
                      {step.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export default EpcTimeline;
