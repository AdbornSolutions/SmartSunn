import FallbackImage from "./FallbackImage";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import SectionTitle from "./SectionTitle";

// Turns "some **bold** text" into text with <strong> parts
function RichText({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#0B0B0B]">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

// One image + one text column (used by the Services and Projects pages).
//   tone       "white" | "grey"
//   imageSide  "left"  | "right"   (on phones the image always sits on top)
//   aspect     full Tailwind class of the picture shape, e.g. "aspect-square"
//   paragraphs a "\n" inside a paragraph makes a line break (no blank gap)
function ContentBlock({
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
  aspect = "aspect-[570/600]",
}) {
  const imageLeft = imageSide === "left";

  return (
    <section id={id} className={`${tone === "grey" ? "bg-[#EBEBEB]" : "bg-white"} py-[50px] lg:py-[66px]`}>
      <div className="mx-auto grid w-[89%] items-center gap-10 lg:grid-cols-2 lg:gap-x-[58px]">
        <Reveal className={imageLeft ? "" : "lg:order-2"}>
          <FallbackImage
            src={image}
            fallback={imageFallback}
            alt={imageAlt}
            className={`${aspect} w-full rounded-[24px] bg-[#DDE3E8] object-cover`}
          />
        </Reveal>

        <Reveal delay={120} className={imageLeft ? "" : "lg:order-1"}>
          <SectionTag>{tag}</SectionTag>
          <SectionTitle dark={titleDark} accent={titleAccent} className="mt-[6px]" />
          <div className="space-y-[18px] font-inter text-[15.5px] leading-[27px] text-[#1A1A1A] lg:text-[16px] lg:leading-[28px]">
            {paragraphs.map((text, i) => (
              <p key={i} className="whitespace-pre-line">
                <RichText text={text} />
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContentBlock;
