import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../../../components/common/FadeIn";

const arial = "[font-family:Arial,Helvetica,sans-serif]";

// "Solar EPC Solutions" timeline.
// - hover a step -> active
// - tap/click/focus -> active
// - only one step active at a time
// - step 1 active by default
function EpcProcess({ tag, title, text, steps, activeImage }) {
  const [active, setActive] = useState(0);

  return (
    <section
      id="epc"
      className="
        relative
        overflow-hidden
        bg-white
        py-[52px]
        sm:py-[60px]
        lg:py-[76px]
      "
    >
      <div className="mx-auto w-[89%] max-w-[1400px]">
        {/* =====================================================
            HEADING
        ===================================================== */}
        <FadeIn className="text-center">
          <p
            className="
              text-[14px]
              font-medium
          
              leading-[22px]
              text-[#364253]
              sm:text-[15px]
            "
          >
            {tag}
          </p>

          <h2
            className="
              mx-auto
              mt-[14px]
              max-w-[1100px]
              text-[28px]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#1E2A3A]
              sm:text-[34px]
              md:text-[38px]
              lg:mt-[20px]
              lg:text-[35px]
              lg:leading-[50px]
            "
          >
            {title}
          </h2>

          <p
            className="
              mx-auto
              mt-[16px]
              max-w-[1000px]
              text-[14px]
              leading-[24px]
              text-[#3B4753]
              sm:text-[15px]
              sm:leading-[26px]
              lg:mt-[20px]
              lg:text-[16px]

            "
          >
            {text}
          </p>
        </FadeIn>

        {/* =====================================================
            TIMELINE
        ===================================================== */}
        <FadeIn delay={0.1} y={22} amount={0.08}>
          <ol
            className="
              mx-auto
              mt-[32px]
              max-w-[760px]
              rounded-[14px]
              bg-[#F5F2EC]
              px-[12px]
              py-[20px]
              shadow-[0_8px_30px_rgba(16,30,51,0.04)]
              sm:px-[20px]
              sm:py-[24px]
              lg:mt-[42px]
              lg:px-[30px]
              lg:py-[28px]
            "
          >
            {steps.map((step, i) => {
              const isActive = active === i;
              const isLast = i === steps.length - 1;

              return (
                <li
                  key={step.title}
                  className="
                    relative
                    flex
                    items-start
                    gap-3
                    pb-[20px]
                    last:pb-0
                    sm:gap-4
                    sm:pb-[24px]
                    lg:gap-5
                    lg:pb-[28px]
                  "
                >
                  {/* =================================================
                      CONNECTING LINE
                  ================================================= */}
                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      left-[13px]
                      top-[14px]
                      w-[2px]
                      bg-[#F6BA3B]
                      ${
                        isLast
                          ? "bottom-[14px]"
                          : "-bottom-[14px]"
                      }
                    `}
                  />

                  {/* =================================================
                      NUMBER
                  ================================================= */}
                  <motion.span
                    animate={{
                      scale: isActive ? 1.06 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 24,
                    }}
                    className={`
                      relative
                      z-20
                      flex
                      h-[28px]
                      w-[28px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      text-[13px]
                      font-bold
                      transition-all
                      duration-300
                      sm:h-[30px]
                      sm:w-[30px]
                      ${arial}
                      ${
                        isActive
                          ? "border-white bg-[#1FB877] text-white shadow-[0_0_0_3px_rgba(31,184,119,0.22)]"
                          : "border-[#E6E6E6] bg-white text-[#8A8A8A]"
                      }
                    `}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>

                  {/* =================================================
                      STEP CARD
                  ================================================= */}
                  <motion.button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    whileHover={{
                      y: isActive ? 0 : -2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`
                      relative
                      isolate
                      min-w-0
                      flex-1
                      cursor-pointer
                      overflow-hidden
                      rounded-[12px]
                      px-[16px]
                      pb-[20px]
                      pt-[18px]
                      text-left
                      transition-shadow
                      duration-500
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#1FB877]
                      sm:px-[20px]
                      sm:pb-[22px]
                      sm:pt-[20px]
                      lg:px-[22px]
                      lg:pb-[24px]
                      lg:pt-[21px]
                      ${arial}
                      ${
                        isActive
                          ? "shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
                          : "bg-white shadow-[0_3px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_7px_20px_rgba(0,0,0,0.10)]"
                      }
                    `}
                  >
                    {/* =================================================
                        BACKGROUND IMAGE
                    ================================================= */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 z-0"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 1.03,
                      }}
                      transition={{
                        opacity: {
                          duration: 0.45,
                          ease: "easeOut",
                        },
                        scale: {
                          duration: 0.7,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <img
                        src={activeImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="
                          h-full
                          w-full
                          bg-[#0A2236]
                          object-cover
                          object-[center_52%]
                        "
                      />

                      {/* Image overlay */}
                      <span
                        className="
                          absolute
                          inset-0
                          bg-[linear-gradient(90deg,rgba(8,34,52,0.92)_0%,rgba(8,34,52,0.65)_55%,rgba(30,36,20,0.40)_100%)]
                        "
                      />
                    </motion.span>

                    {/* =================================================
                        CARD CONTENT
                    ================================================= */}
                    <span
                      className={`
                        relative
                        z-10
                        block
                        text-[16px]
                        font-bold
                        leading-[25px]
                        transition-colors
                        duration-300
                        sm:text-[18px]
                        sm:leading-[27px]
                        lg:text-[20px]
                        lg:leading-[28px]
                        pl-[10px]
                         py-[5px]
                        ${
                          isActive
                            ? "text-white"
                            : "text-[#1F2A28]"
                        }
                      `}
                    >
                      {step.title}
                    </span>

                    <span
                      className={`
                        relative
                        z-10
                        mt-[6px]
                        pl-[10px]
                         pb-[5px]
                        block
                        max-w-[92%]
                        text-[13.5px]
                        leading-[21px]
                        transition-colors
                        duration-300
                        sm:text-[14px]
                        sm:leading-[22px]
                        lg:mt-[8px]
                        lg:text-[16px]
                        lg:leading-[25px]
                        ${
                          isActive
                            ? "text-white/90"
                            : "text-[#707070]"
                        }
                      `}
                    >
                      {step.text}
                    </span>
                  </motion.button>
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