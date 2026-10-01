import { motion } from "framer-motion";
import FadeIn from "../../../components/common/FadeIn";
import FallbackImage from "../../../components/common/FallbackImage";
import ServiceTag from "./ServiceTag";
import ServiceTitle from "./ServiceTitle";

// "some **bold** text"  ->  text with <strong> parts
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

// One photo + one text column.
//   tone       "white" | "grey"
//   imageSide  "left"  | "right"   (on phones the photo always comes first)
function ServiceBlock({
  id,
  tag,
  titleDark,
  titleAccent,
  paragraphs,
  image,
  imageFallback,
  imageAlt,
  tone = "white",
  imageSide = "left",
}) {
  const imageLeft = imageSide === "left";

  return (
    <section id={id} className={`${tone === "grey" ? "bg-[#EBEBEB]" : "bg-white"} py-[44px] lg:py-[60px]`}>
      <div className="mx-auto grid w-[88.7%] items-center gap-9 lg:grid-cols-2 lg:gap-x-[70px]">
        {/* photo */}
        <motion.div
          className={imageLeft ? "" : "lg:order-2"}
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <FallbackImage
            src={image}
            fallback={imageFallback}
            alt={imageAlt}
            className="aspect-square w-full rounded-[24px] bg-[#DDE3E8] object-cover"
          />
        </motion.div>

        {/* text */}
        <FadeIn delay={0.12} className={imageLeft ? "" : "lg:order-1"}>
          <ServiceTag>{tag}</ServiceTag>
          <ServiceTitle dark={titleDark} accent={titleAccent} />
          <div className="-mt-[2px] font-inter text-[15px] leading-[25px] text-[#0B0B0B] lg:text-[16px] lg:leading-[26.3px]">
            {paragraphs.map((text, i) => (
              <p key={i} className={`whitespace-pre-line ${i > 0 ? "mt-[25px]" : ""}`}>
                <RichText text={text} />
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ServiceBlock;
