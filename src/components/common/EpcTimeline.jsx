import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

function EpcTimeline({
  tag,
  title,
  text,
  steps,
  activeImage,
  defaultActive = 0,
}) {
  const [active, setActive] = useState(defaultActive);

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F5F2EC]
        py-[60px]
        sm:py-[70px]
        lg:py-[85px]
        min-[1600px]:py-[100px]
      "
    >
      <div
        className="
          mx-auto
          w-[89%]
          max-w-[1400px]
          min-[1600px]:max-w-[1550px]
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <Reveal className="text-center">
          <p
            className="
              font-inter
              text-[14.5px]
              leading-[24px]
              text-[#2B3642]
              sm:text-[15px]
              min-[1600px]:text-[17px]
              min-[1600px]:leading-[27px]
            "
          >
            {tag}
          </p>

          <h2
            className="
              mx-auto
              mt-[14px]
              max-w-[1100px]
              font-manrope
              text-[28px]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#101E33]
              sm:text-[33px]
              md:text-[37px]
              lg:mt-[16px]
              lg:text-[40px]
              lg:leading-[48px]
              min-[1600px]:mt-[22px]
              min-[1600px]:max-w-[1350px]
              min-[1600px]:text-[50px]
              min-[1600px]:leading-[1.2]
            "
          >
            {title}
          </h2>

          <p
            className="
              mx-auto
              mt-[18px]
              max-w-[1000px]
              font-inter
              text-[14.5px]
              leading-[25px]
              text-[#3A4652]
              sm:text-[15.5px]
              sm:leading-[27px]
              lg:mt-[20px]
              lg:text-[16px]
              min-[1600px]:mt-[26px]
              min-[1600px]:max-w-[1200px]
              min-[1600px]:text-[18px]
              min-[1600px]:leading-[30px]
            "
          >
            {text}
          </p>
        </Reveal>

        {/* =====================================================
            PROCESS TIMELINE
        ===================================================== */}

        <Reveal delay={120}>
          <ol
            className="
              mx-auto
              mt-[40px]
              max-w-[850px]
              lg:mt-[52px]
              min-[1600px]:mt-[60px]
              min-[1600px]:max-w-[1050px]
            "
          >
            {steps.map((step, i) => {
              const isActive = active === i;
              const isLast = i === steps.length - 1;

              return (
                <motion.li
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  onViewportEnter={() => {
                    setActive(i);
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    flex
                    items-start
                    gap-4
                    pb-[22px]
                    sm:gap-6
                    sm:pb-[26px]
                    lg:gap-7
                    lg:pb-[30px]
                    min-[1600px]:gap-8
                    min-[1600px]:pb-[38px]
                  "
                >
                  {/* =================================================
                      CONNECTING LINE
                  ================================================= */}

                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      left-[16px]
                      top-[18px]
                      w-[3px]
                      rounded-full
                      bg-[#F5B61A]
                      sm:left-[18px]

                      ${
                        isLast
                          ? "bottom-[8px]"
                          : "bottom-0"
                      }

                      min-[1600px]:left-[20px]
                      min-[1600px]:top-[20px]
                      min-[1600px]:w-[3px]
                    `}
                  />

                  {/* =================================================
                      STEP NUMBER
                  ================================================= */}

                  <motion.span
                    animate={{
                      scale: isActive ? 1.08 : 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`
                      relative
                      z-20
                      flex
                      h-[34px]
                      w-[34px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      font-manrope
                      text-[12px]
                      font-bold
                      transition-all
                      duration-300
                      sm:h-[40px]
                      sm:w-[40px]
                      sm:text-[13px]
                      lg:h-[44px]
                      lg:w-[44px]
                      lg:text-[13px]

                      ${
                        isActive
                          ? "border-white bg-[#1FB877] text-white shadow-[0_0_0_3px_rgba(31,184,119,0.25)]"
                          : "border-[#DDD7CA] bg-white text-[#7C858F]"
                      }

                      min-[1600px]:h-[48px]
                      min-[1600px]:w-[48px]
                      min-[1600px]:text-[14px]
                    `}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>

                  {/* =================================================
                      PROCESS CARD
                      ACTIVE CHANGES AUTOMATICALLY ON SCROLL
                  ================================================= */}

                  <motion.div
                    initial={false}
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`
                      relative
                      isolate
                      min-w-0
                      flex-1
                      cursor-default
                      overflow-hidden
                      rounded-[14px]
                      px-[22px]
                      py-[22px]
                      text-left
                      transition-all
                      duration-300

                      sm:px-[26px]
                      sm:py-[25px]

                      lg:px-[32px]
                      lg:py-[28px]

                      min-[1600px]:rounded-[16px]
                      min-[1600px]:px-[38px]
                      min-[1600px]:py-[34px]

                      ${
                        isActive
                          ? "shadow-[0_12px_32px_rgba(6,30,45,0.22)]"
                          : "bg-white shadow-[0_3px_14px_rgba(16,30,51,0.08)]"
                      }
                    `}
                  >
                    {/* =================================================
                        ACTIVE IMAGE
                    ================================================= */}

                    <AnimatePresence mode="sync">
                      {isActive && (
                        <motion.span
                          key={`image-${i}`}
                          aria-hidden="true"
                          initial={{
                            opacity: 0,
                            scale: 1.04,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          transition={{
                            opacity: {
                              duration: 0.45,
                              ease: "easeOut",
                            },
                            scale: {
                              duration: 0.65,
                              ease: "easeOut",
                            },
                          }}
                          className="
                            absolute
                            inset-0
                            z-0
                            overflow-hidden
                            rounded-[14px]
                          "
                        >
                          <img
                            src={step.image || activeImage}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="
                              h-full
                              w-full
                              bg-[#0A2236]
                              object-cover
                              object-center
                              min-[1600px]:object-[center_48%]
                            "
                          />

                          {/* Image Overlay */}
                          <span
                            className="
                              absolute
                              inset-0
                              bg-[linear-gradient(90deg,rgba(5,20,35,0.90)_0%,rgba(5,20,35,0.62)_100%)]
                            "
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* =================================================
                        PROCESS TITLE
                    ================================================= */}

                    <span
                      className={`
                        relative
                        z-10
                        block
                        pl-[20px]
                        pt-[20px]
                        font-manrope
                        text-[18px]
                        font-bold
                        leading-[25px]
                        transition-colors
                        duration-300

                        sm:text-[20px]
                        sm:leading-[28px]

                        lg:text-[21px]
                        lg:leading-[30px]

                        min-[1600px]:pl-[24px]
                        min-[1600px]:pt-[24px]
                        min-[1600px]:text-[25px]
                        min-[1600px]:leading-[33px]

                        ${
                          isActive
                            ? "text-white"
                            : "text-[#101E33]"
                        }
                      `}
                    >
                      {step.title}
                    </span>

                    {/* =================================================
                        PROCESS DESCRIPTION
                    ================================================= */}

                    <span
                      className={`
                        relative
                        z-10
                        mt-[9px]
                        block
                        py-[10px]
                        pl-[20px]
                        font-inter
                        text-[14.5px]
                        leading-[23px]
                        transition-colors
                        duration-300

                        sm:mt-[10px]
                        sm:text-[15px]
                        sm:leading-[24px]

                        lg:mt-[11px]
                        lg:text-[15.5px]
                        lg:leading-[25px]

                        min-[1600px]:mt-[13px]
                        min-[1600px]:pl-[24px]
                        min-[1600px]:py-[12px]
                        min-[1600px]:text-[18px]
                        min-[1600px]:leading-[29px]

                        ${
                          isActive
                            ? "text-white/90"
                            : "text-[#6B7480]"
                        }
                      `}
                    >
                      {step.text}
                    </span>
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export default EpcTimeline;