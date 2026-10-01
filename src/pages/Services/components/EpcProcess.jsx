import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../../../components/common/FadeIn";

const arial = "[font-family:Arial,Helvetica,sans-serif]";

// "Solar EPC Solutions" timeline.
//  - hover a step (mouse), or tap / focus it (touch + keyboard)  ->  it turns dark, shows the photo
//    and its number turns green.   Only one step is highlighted at a time; step 1 at the start.
function EpcProcess({ tag, title, text, steps, activeImage }) {
  const [active, setActive] = useState(0);

  return (
    <section id="epc" className="bg-white py-[52px] lg:py-[76px]">
      <div className="mx-auto w-[89%]">
        {/* heading */}
        <FadeIn className="text-center">
          <p className="text-[15px] leading-[22px] text-[#2B3642] [font-family:system-ui,'Segoe_UI',Roboto,Arial,sans-serif]">
            {tag}
          </p>
          <h2 className="mx-auto mt-[18px] max-w-[1000px] text-[26px] font-semibold leading-[1.3] text-[#1E2A3A] [font-family:system-ui,'Segoe_UI',Roboto,Arial,sans-serif] sm:text-[30px] lg:mt-[25px] lg:text-[36px] lg:leading-[47px]">
            {title}
          </h2>
          <p className="mx-auto mt-[16px] max-w-[760px] text-[15px] leading-[24px] text-[#3B4753] [font-family:system-ui,'Segoe_UI',Roboto,Arial,sans-serif] lg:mt-[21px] lg:text-[16px]">
            {text}
          </p>
        </FadeIn>

        {/* steps */}
        <FadeIn delay={0.1} y={22} amount={0.08}>
          <ol className="mx-auto mt-[32px] max-w-[676px] bg-[#F5F2EC] px-3 py-5 sm:px-6 lg:mt-[40px] lg:py-[28px] lg:pl-[42px] lg:pr-[36px]">
            {steps.map((step, i) => {
              const isActive = active === i;
              const isLast = i === steps.length - 1;

              return (
                <li key={step.title} className="relative flex items-start gap-3 pb-[20px] last:pb-0 sm:gap-5 lg:pb-[28px]">
                  {/* yellow line: from this number to the next one */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-[13px] top-[14px] w-[2px] bg-[#F6BA3B] ${
                      isLast ? "bottom-[14px]" : "-bottom-[14px]"
                    }`}
                  />

                  {/* number */}
                  <motion.span
                    animate={{ scale: isActive ? 1.06 : 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 24 }}
                    className={`relative z-10 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border-2 text-[14px] font-bold transition-colors duration-300 ${arial} ${
                      isActive
                        ? "border-white bg-[#1FB877] text-white shadow-[0_0_0_3px_rgba(31,184,119,0.25)]"
                        : "border-[#E6E6E6] bg-white text-[#8A8A8A]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>

                  {/* card */}
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className={`relative isolate min-w-0 flex-1 cursor-pointer overflow-hidden rounded-[10px] bg-white px-4 pb-[22px] pt-[21px] text-left transition-shadow duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1FB877] sm:px-5 ${arial} ${
                      isActive
                        ? "shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
                        : "shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                    }`}
                  >
                    {/* photo – always in the page, faded in/out so nothing flashes */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <img
                        src={activeImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full bg-[#0A2236] object-cover object-[center_52%]"
                      />
                      <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,34,52,0.90)_0%,rgba(8,34,52,0.58)_55%,rgba(30,36,20,0.38)_100%)]" />
                    </motion.span>

                    <span
                      className={`block text-[17px] font-bold leading-[28px] transition-colors duration-300 lg:text-[20px] ${
                        isActive ? "text-white" : "text-[#1F2A28]"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`mt-[6px] block max-w-[90%] text-[14px] leading-[22px] transition-colors duration-300 lg:mt-[8px] lg:text-[16px] lg:leading-[25px] ${
                        isActive ? "text-white" : "text-[#707070]"
                      }`}
                    >
                      {step.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}

export default EpcProcess;
