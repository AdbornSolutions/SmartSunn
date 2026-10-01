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
        style={{ backgroundImage: `url(${aboutImages.bgCommitment})` }}
      />

      <div className="relative mx-auto grid w-[89%] items-center gap-10 lg:grid-cols-2 lg:gap-x-[39px]">
        <Reveal>
          <SectionTag>{commitment.tag}</SectionTag>
          <SectionTitle dark={commitment.titleDark} accent={commitment.titleAccent} className="mt-[2px]" />
          <p className="font-inter text-[16px] leading-[27px] text-[#0B0B0B] lg:text-[17.6px] lg:leading-[29px]">
            {commitment.text}
          </p>
          <CheckList items={commitment.points} className="mt-[26px] pl-[7px] lg:mt-[35px]" />
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-[21px] sm:grid-cols-2">
            <article className="rounded-[20px] bg-[#04240D] p-[21px] pb-6 text-white lg:h-[199px]">
              <h3 className="font-manrope text-[24px] font-semibold leading-[36px] lg:text-[26px]">
                {commitment.vision.title}
              </h3>
              <p className="mt-[10px] font-inter text-[16px] leading-[1.35] lg:text-[17.4px] lg:leading-[21.6px]">
                {commitment.vision.text}
              </p>
            </article>

            <article className="rounded-[20px] bg-[#FFC629] p-[21px] pb-6 text-[#101E33] lg:h-[199px]">
              <h3 className="font-manrope text-[24px] font-semibold leading-[36px] lg:text-[26px]">
                {commitment.mission.title}
              </h3>
              <p className="mt-[10px] font-inter text-[16px] leading-[1.35] text-[#3A3A3A] lg:text-[17.4px] lg:leading-[21.6px]">
                {commitment.mission.text}
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default OurCommitment;
