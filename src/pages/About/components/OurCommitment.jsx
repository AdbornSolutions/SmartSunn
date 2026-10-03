import { motion } from "framer-motion";
import { aboutImages, commitment } from "../data";
import CheckList from "../../../components/common/CheckList";
import Reveal from "../../../components/common/Reveal";
import SectionTag from "../../../components/common/SectionTag";
import SectionTitle from "../../../components/common/SectionTitle";

function OurCommitment() {
  return (
    <section className="relative overflow-hidden bg-[#EBEBEB] py-[50px] lg:pb-[70px] lg:pt-[66px]">
      {/* faint line-art background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: `url(${aboutImages.bgCommitment})`,
        }}
      />

      <div
        className="
          relative
          mx-auto
          grid
          w-[89%]
          items-center
          gap-10
          lg:grid-cols-2
          lg:gap-x-[39px]
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <Reveal>
          <div className="w-full">
            <SectionTag>{commitment.tag}</SectionTag>

            <SectionTitle
              dark={commitment.titleDark}
              accent={commitment.titleAccent}
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
              {commitment.text}
            </p>

            <CheckList
              items={commitment.points}
              className="mt-[26px] pl-[7px] lg:mt-[35px]"
            />
          </div>
        </Reveal>

        {/* =====================================================
            RIGHT CARDS
        ===================================================== */}
        <Reveal delay={120}>
          <div
            className="
              grid
              gap-[21px]
              sm:grid-cols-2
              sm:items-stretch
            "
          >
            {/* =========================
                VISION CARD
            ========================= */}
            <motion.article
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
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                flex
                min-h-[190px]
                flex-col
                rounded-[20px]
                bg-[#04240D]
                p-[21px]
                pb-[24px]
                text-white
                sm:min-h-[205px]
                md:p-[23px]
                lg:min-h-[199px]
                lg:p-[21px]
                lg:pb-[24px]
              "
            >
              <h3
                className="
                  font-manrope
                  text-[22px]
                  font-semibold
                  leading-[1.35]
                  lg:text-[26px]
                  lg:leading-[36px]
                "
              >
                {commitment.vision.title}
              </h3>

              <p
                className="
                  mt-[10px]
                  font-inter
                  text-[15px]
                  leading-[1.5]
                  text-white/90
                  sm:text-[15.5px]
                  lg:text-[17.4px]
                  lg:leading-[21.6px]
                "
              >
                {commitment.vision.text}
              </p>
            </motion.article>

            {/* =========================
                MISSION CARD
            ========================= */}
            <motion.article
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
                delay: 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                flex
                min-h-[190px]
                flex-col
                rounded-[20px]
                bg-[#FFC629]
                p-[21px]
                pb-[24px]
                text-[#101E33]
                sm:min-h-[205px]
                md:p-[23px]
                lg:min-h-[199px]
                lg:p-[21px]
                lg:pb-[24px]
              "
            >
              <h3
                className="
                  font-manrope
                  text-[22px]
                  font-semibold
                  leading-[1.35]
                  lg:text-[26px]
                  lg:leading-[36px]
                "
              >
                {commitment.mission.title}
              </h3>

              <p
                className="
                  mt-[10px]
                  font-inter
                  text-[15px]
                  leading-[1.5]
                  text-[#3A3A3A]
                  sm:text-[15.5px]
                  lg:text-[17.4px]
                  lg:leading-[21.6px]
                "
              >
                {commitment.mission.text}
              </p>
            </motion.article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default OurCommitment;