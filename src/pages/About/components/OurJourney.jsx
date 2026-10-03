import { motion } from "framer-motion";
import { Monitor, FingerprintIcon } from "lucide-react";
import { aboutImages, journey } from "../data";
import Reveal from "../../../components/common/Reveal";
import SectionTag from "../../../components/common/SectionTag";
import SectionTitle from "../../../components/common/SectionTitle";

function Marquee() {
  // list is doubled so the loop (translateX -50%) is seamless
  const items = [...journey.marquee, ...journey.marquee];

  return (
    <div className="absolute inset-x-0 bottom-0 h-[110px] bg-gradient-to-t from-black/45 to-transparent">
      <div className="absolute inset-x-0 bottom-[38px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="about-marquee flex w-max gap-[40px] whitespace-nowrap">
          {items.map((text, i) => (
            <span
              key={i}
              className="font-inter text-[15px] font-medium text-white"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function OurJourney() {
  return (
    <section className="bg-white py-[50px] lg:py-[66px]">
      <div className="mx-auto grid w-[89%] items-center gap-10 lg:grid-cols-2 lg:gap-x-[39px]">

        {/* =====================================================
            PHOTOS
        ====================================================== */}

        <Reveal>
          <div className="grid grid-cols-2 gap-[14px] lg:gap-[21px]">

            {/* =================================================
                TOP JOURNEY IMAGE
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative
                col-span-2
                aspect-[690/357]
                overflow-hidden
                rounded-[15px]
              "
            >
              <motion.img
                src={aboutImages.journeyGroup}
                alt="Smartsun team on a solar site"
                loading="lazy"
                decoding="async"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 1.1,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover"
              />

              <Marquee />
            </motion.div>

            {/* =================================================
                STRONG REGIONAL PRESENCE
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="
                relative
                flex
                aspect-[334/357]
                flex-col
                justify-between
                overflow-hidden
                rounded-[15px]
                bg-[#17A865]
                p-[5%]
                pb-[7%]
                text-white
              "
            >
              {/* SUPPORT ICON */}

              <motion.img
                src={aboutImages.supportIcon}
                alt=""
                loading="lazy"
                decoding="async"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: "backOut",
                }}
                className="
                  h-auto
                  w-[33%]
                  min-w-[56px]
                  object-contain
                "
              />

              <div>
                <h3
                  className="
                    font-manrope
                    text-[clamp(16px,1.9vw,24px)]
                    font-medium
                    leading-[32px]
                  "
                >
                  {journey.support.title}
                </h3>

                <div
                  className="
                    mt-[10px]
                    h-px
                    w-[75%]
                    bg-white/25
                    lg:mt-[15px]
                  "
                />

                <p
                  className="
                    mt-[10px]
                    max-w-[230px]
                    font-inter
                    text-[clamp(12px,1.4vw,17.6px)]
                    leading-[1.5]
                    lg:mt-[18px]
                    lg:leading-[26px]
                  "
                >
                  {journey.support.text}
                </p>
              </div>
            </motion.div>

            {/* =================================================
                WORKER IMAGE
            ================================================== */}

            <motion.img
              src={aboutImages.journeyWorker}
              alt="Technician inspecting solar panels"
              loading="lazy"
              decoding="async"
              initial={{
                opacity: 0,
                y: 25,
                scale: 1.02,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                aspect-[334/357]
                w-full
                rounded-[15px]
                object-cover
              "
            />
          </div>
        </Reveal>

        {/* =====================================================
            TEXT CONTENT
        ====================================================== */}

        <Reveal delay={120}>
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <SectionTag>{journey.tag}</SectionTag>

            <SectionTitle
              dark={journey.titleDark}
              accent={journey.titleAccent}
              className="mt-[2px]"
            />

            <p
              className="
                font-inter
                text-[16px]
                leading-[27px]
                text-[#0B0B0B]
                lg:text-[17.6px]
                lg:leading-[29px]
              "
            >
              {journey.text}
            </p>

            {/* =================================================
                LONG TERM SUPPORT CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.25 },
              }}
              className="
                mt-[24px]
                flex
                gap-[22px]
                rounded-[15px]
                bg-white
                p-[21px]
                shadow-[0_0_18px_rgba(23,168,101,0.55)]
                lg:mt-[29px]
                lg:min-h-[164px]
                lg:pb-[50px]
                lg:pr-[24px]
                lg:pt-[18px]
              "
            >
              {/* COMPUTER ICON */}

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.75,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "backOut",
                }}
                className="
                  flex
                  h-[55px]
                  w-[55px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#17A865]
                  text-white
                  lg:mt-[-2px]
                "
              >
                <Monitor
                  className="h-[27px] w-[27px]"
                  strokeWidth={2.2}
                />
              </motion.span>

              {/* CARD CONTENT */}

              <div className="lg:-mt-[5px]">
                <h3
                  className="
                    font-manrope
                    text-[22px]
                    font-medium
                    leading-[34px]
                    text-[#101E33]
                    lg:text-[29px]
                    lg:leading-[34px]
                  "
                >
                  {journey.presence.title}
                </h3>

                <p
                  className="
                    mt-[2px]
                    font-inter
                    text-[15px]
                    leading-[1.6]
                    text-[#666]
                    lg:text-[18.6px]
                    lg:leading-[28.8px]
                  "
                >
                  {journey.presence.text}
                </p>
              </div>
            </motion.div>

            {/* =================================================
                STATS
            ================================================== */}

            <motion.div
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="
                mt-[30px]
                grid
                grid-cols-3
                gap-2
                pl-[21px]
                lg:mt-[46px]
              "
            >
              {journey.stats.map((s, index) => (
                <motion.div
                  key={s.label}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + index * 0.1,
                  }}
                >
                  <p
                    className="
                      font-manrope
                      text-[24px]
                      font-semibold
                      leading-[40px]
                      text-[#101E33]
                      lg:text-[35px]
                    "
                  >
                    {s.value}
                  </p>

                  <p
                    className="
                      mt-[2px]
                      font-inter
                      text-[13px]
                      leading-[20px]
                      text-[#666]
                      lg:text-[16px]
                      lg:leading-[24px]
                    "
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default OurJourney;