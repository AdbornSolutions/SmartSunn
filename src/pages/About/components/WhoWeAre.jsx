import { BoltIcon } from "../../../components/common/Icons";
import { aboutImages, whoWeAre } from "../data";
import Reveal from "../../../components/common/Reveal";
import SectionTag from "../../../components/common/SectionTag";
import SectionTitle from "../../../components/common/SectionTitle";

// The collage is positioned in % of a 637 x 680 box, so it scales on small screens
function Collage() {
  return (
    <div className="relative mx-auto aspect-[637/680] w-full max-w-[637px] lg:mx-0">
      <img
        src={aboutImages.whoTeam}
        alt="Smartsun team reviewing a solar layout"
        className="absolute left-0 top-0 h-[70%] w-[55.7%] rounded-[12px] object-cover"
      />

      {/* yellow bolt badge */}
      <div className="absolute left-[63.9%] top-[5.3%] flex aspect-square w-[22.3%] items-center justify-center rounded-full bg-[#FFC629]">
        <div className="flex h-[45%] w-[45%] items-center justify-center rounded-full bg-[#071B2C]">
          <BoltIcon className="h-[52%] w-[52%] text-white" />
        </div>
      </div>

      {/* second photo with white gap over the first one */}
      <img
        src={aboutImages.whoWalking}
        alt="Smartsun engineers on site"
        className="absolute left-[45.7%] top-[30.4%] h-[69%] w-[54.3%] rounded-[12px] object-cover ring-[9px] ring-white"
      />

      {/* experience card */}
      <div className="absolute left-0 top-[73.4%] flex h-[26.8%] w-[41.4%] flex-col items-center justify-center rounded-[12px] bg-[#071B2C] text-center">
        <span className="font-manrope text-[clamp(28px,4vw,54px)] font-semibold leading-none text-[#FFC629]">
          {whoWeAre.experience.value}
        </span>
        <span className="mt-[10px] font-inter text-[clamp(11px,1.3vw,17.6px)] text-white">
          {whoWeAre.experience.label}
        </span>
      </div>
    </div>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-white pb-[60px] pt-[44px] lg:pb-[75px] lg:pt-[66px]">
      <div className="mx-auto grid w-[89%] items-center gap-10 lg:grid-cols-2 lg:gap-x-[39px]">
        <Reveal>
          <Collage />
        </Reveal>

        <Reveal delay={120}>
          <SectionTag>{whoWeAre.tag}</SectionTag>
          <SectionTitle dark={whoWeAre.titleDark} accent={whoWeAre.titleAccent} className="mt-[2px]" />
          <p className="font-inter text-[16px] leading-[27px] text-[#0B0B0B] lg:text-[17.6px] lg:leading-[29px]">
            {whoWeAre.paragraphs.map((text, i) => (
              <span key={i}>
                {text}
                {i < whoWeAre.paragraphs.length - 1 && <br />}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default WhoWeAre;

