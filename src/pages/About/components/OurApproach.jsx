import { aboutImages, approach } from "../data";
import CheckList from "../../../components/common/CheckList";
import Reveal from "../../../components/common/Reveal";
import SectionTag from "../../../components/common/SectionTag";
import SectionTitle from "../../../components/common/SectionTitle";

function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-[#EBEBEB] py-[50px] lg:py-[66px]">
      {/* faint line-art background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${aboutImages.bgApproach})` }}
      />

      <div className="relative mx-auto grid w-[89%] items-center gap-10 lg:grid-cols-2 lg:gap-x-[39px]">
        <Reveal>
          <SectionTag>{approach.tag}</SectionTag>
          <SectionTitle dark={approach.titleDark} accent={approach.titleAccent} className="mt-[2px]" />
          <p className="font-inter text-[16px] leading-[27px] text-[#0B0B0B] lg:text-[17.6px] lg:leading-[29px]">
            {approach.paragraphs.map((text, i) => (
              <span key={i}>
                {text}
                {i < approach.paragraphs.length - 1 && <br />}
              </span>
            ))}
          </p>
          <CheckList items={approach.points} className="mt-[26px] pl-[7px] lg:mt-[34px]" />
        </Reveal>

        <Reveal delay={120}>
          <img
            src={aboutImages.approach}
            alt="Engineers commissioning a rooftop solar system"
            className="aspect-[857/572] w-full rounded-[20px] object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default OurApproach;
