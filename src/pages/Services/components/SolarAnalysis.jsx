import { motion } from "framer-motion";
import FadeIn from "../../../components/common/FadeIn";
import FallbackImage from "../../../components/common/FallbackImage";
import ServiceTag from "./ServiceTag";
import ServiceTitle from "./ServiceTitle";

function RichText({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-black">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function SolarAnalysis({
  id,
  tag,
  titleDark,
  titleAccent,
  paragraphs,
  image,
  imageFallback,
  imageAlt,
}) {
  return (
    <section
      id={id}
      className="bg-white py-[44px] lg:py-[60px]"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto grid w-[88.7%] items-center gap-9 lg:grid-cols-2 lg:gap-x-[70px]">
        <motion.div
          className="overflow-hidden rounded-[24px]"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.015 }}
        >
          <FallbackImage
            src={image}
            fallback={imageFallback}
            alt={imageAlt}
            className="aspect-[1/0.96] w-full bg-[#DDE3E8] object-cover transition-transform duration-500 ease-out"
          />
        </motion.div>

        <FadeIn delay={0.12}>
          <ServiceTag>{tag}</ServiceTag>

          <div id={`${id}-title`}>
            <ServiceTitle dark={titleDark} accent={titleAccent} />
          </div>

          <div className="-mt-[2px] font-inter text-[15px] leading-[25px] text-[#0B0B0B] lg:text-[16px] lg:leading-[26.3px]">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className={`whitespace-pre-line ${i > 0 ? "mt-[25px]" : ""}`}
              >
                <RichText text={text} />
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default SolarAnalysis;
