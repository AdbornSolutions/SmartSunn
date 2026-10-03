import { motion } from "framer-motion";
import { BoltIcon } from "../../../components/common/Icons";
import { aboutImages, whoWeAre } from "../data";
import Reveal from "../../../components/common/Reveal";
import SectionTag from "../../../components/common/SectionTag";
import SectionTitle from "../../../components/common/SectionTitle";

// The collage is positioned in % of a 637 x 680 box,
// so it scales proportionally on all screen sizes.
function Collage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        relative mx-auto
        aspect-[637/680]
        w-full
        max-w-[637px]
        lg:mx-0
      "
    >
      {/* =========================
          FIRST / TOP IMAGE
      ========================= */}
      <motion.img
        src={aboutImages.whoTeam}
        alt="Smartsun team reviewing a solar layout"
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          absolute
          left-0
          top-0
          h-[70%]
          w-[55.7%]
          rounded-[12px]
          object-cover
        "
      />

      {/* =========================
          YELLOW BOLT BADGE
      ========================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: 0.25,
          ease: "backOut",
        }}
        whileHover={{
          scale: 1.06,
          rotate: 4,
          transition: { duration: 0.25 },
        }}
        className="
          absolute
          left-[63.9%]
          top-[5.3%]
          flex
          aspect-square
          w-[22.3%]
          items-center
          justify-center
          rounded-full
          bg-[#FFC629]
        "
      >
        <div
          className="
            flex
            h-[45%]
            w-[45%]
            items-center
            justify-center
            rounded-full
            bg-[#071B2C]
          "
        >
          <BoltIcon className="h-[52%] w-[52%] text-white" />
        </div>
      </motion.div>

      {/* =========================
          SECOND / BOTTOM IMAGE
      ========================= */}
      <motion.img
        src={aboutImages.whoWalking}
        alt="Smartsun engineers on site"
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: 25, scale: 1.03 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="
          absolute
          left-[45.7%]
          top-[30.4%]
          h-[69%]
          w-[54.3%]
          rounded-[12px]
          object-cover
          ring-[6px]
          ring-white
          sm:ring-[7px]
          lg:ring-[9px]
        "
      />

      {/* =========================
          EXPERIENCE CARD
      ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: 0.35,
          ease: "easeOut",
        }}
        whileHover={{
          y: -4,
          transition: { duration: 0.25 },
        }}
        className="
          absolute
          left-0
          top-[73.4%]
          flex
          h-[26.8%]
          w-[41.4%]
          flex-col
          items-center
          justify-center
          rounded-[12px]
          bg-[#071B2C]
          px-2
          text-center
        "
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "backOut",
          }}
          className="
            font-manrope
            text-[clamp(28px,4vw,54px)]
            font-semibold
            leading-none
            text-[#FFC629]
          "
        >
          {whoWeAre.experience.value}
        </motion.span>

        <span
          className="
            mt-[7px]
            font-inter
            text-[clamp(10px,1.3vw,17.6px)]
            leading-[1.3]
            text-white
            sm:mt-[10px]
          "
        >
          {whoWeAre.experience.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

function WhoWeAre() {
  return (
    <section
      className="
        bg-white
        pb-[50px]
        pt-[40px]
        sm:pb-[60px]
        sm:pt-[48px]
        md:pb-[65px]
        md:pt-[55px]
        lg:pb-[75px]
        lg:pt-[66px]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-[89%]
          max-w-[1400px]
          items-center
          gap-[45px]
          sm:gap-[55px]
          md:gap-[60px]
          lg:grid-cols-2
          lg:gap-x-[39px]
          lg:gap-y-0
        "
      >
        {/* =========================
            COLLAGE
        ========================= */}
        <Reveal>
          <Collage />
        </Reveal>

        {/* =========================
            CONTENT
        ========================= */}
        <Reveal delay={120}>
          <div className="w-full">
            <SectionTag>{whoWeAre.tag}</SectionTag>

            <SectionTitle
              dark={whoWeAre.titleDark}
              accent={whoWeAre.titleAccent}
              className="mt-[2px]"
            />

            <p
              className="
                mt-[14px]
                font-inter
                text-[14.5px]
                leading-[24px]
                text-[#0B0B0B]
                sm:mt-[16px]
                sm:text-[15.5px]
                sm:leading-[26px]
                md:text-[16px]
                md:leading-[27px]
                lg:mt-[18px]
                lg:text-[17.6px]
                lg:leading-[29px]
              "
            >
              {whoWeAre.paragraphs.map((text, i) => (
                <span key={i}>
                  {text}

                  {i < whoWeAre.paragraphs.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhoWeAre;