import { useRef, useState } from "react";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import { aboutImages, approach } from "../data";
import CheckList from "../../../components/common/CheckList";
import SectionTag from "../../../components/common/SectionTag";
import SectionTitle from "../../../components/common/SectionTitle";
import ApproachBackground from "./ApproachBackground";

const ease = [0.22, 1, 0.36, 1];

// text column: tag -> title -> paragraph -> list appear one after another
const stack = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

// Photo: lazy loaded, soft fade-in when ready, zoom-out reveal, small zoom on hover.
// If the file is missing a neutral placeholder is shown (no broken-image icon).
function ApproachPhoto({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: 0.15, ease }}
      className="relative aspect-[857/572] w-full overflow-hidden rounded-[20px] bg-[#D9DCDF] shadow-[0_18px_40px_rgba(16,30,51,0.12)]"
    >
      {/* loading shimmer */}
      {!loaded && !failed && <span aria-hidden="true" className="absolute inset-0 animate-pulse bg-[#CFD3D7]" />}

      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center font-inter text-[14px] text-[#6B7480]"
        >
          Image unavailable
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.04, transition: { duration: 0.6, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.3, ease }}
          className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </motion.div>
  );
}

function OurApproach() {
  const sectionRef = useRef(null);

  // the line-art behind the section drifts very slowly while you scroll
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [26, -26]);

  return (
    // people who turned on "reduce motion" in their system get no movement
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} className="relative overflow-hidden bg-[#EBEBEB] py-[50px] lg:py-[66px]">
        {/* faint line-art background */}
        <motion.div aria-hidden="true" style={{ y: artY }} className="pointer-events-none absolute inset-x-0 -inset-y-[30px]">
          <ApproachBackground src={aboutImages.bgApproach} />
        </motion.div>

        <div className="relative mx-auto grid w-[89%] items-center gap-10 lg:grid-cols-2 lg:gap-x-[39px]">
          <motion.div
            variants={stack}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={rise}>
              <SectionTag>{approach.tag}</SectionTag>
            </motion.div>

            <motion.div variants={rise}>
              <SectionTitle dark={approach.titleDark} accent={approach.titleAccent} className="mt-[2px]" />
            </motion.div>

            <motion.p
              variants={rise}
              className="font-inter text-[16px] leading-[27px] text-[#0B0B0B] lg:text-[17.6px] lg:leading-[29px]"
            >
              {approach.paragraphs.map((text, i) => (
                <span key={i}>
                  {text}
                  {i < approach.paragraphs.length - 1 && <br />}
                </span>
              ))}
            </motion.p>

            <motion.div variants={rise}>
              <CheckList items={approach.points} className="mt-[26px] pl-[7px] lg:mt-[34px]" />
            </motion.div>
          </motion.div>

          <ApproachPhoto src={aboutImages.approach} alt="Engineers commissioning a rooftop solar system" />
        </div>
      </section>
    </MotionConfig>
  );
}

export default OurApproach;
