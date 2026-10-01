import { FingerprintIcon } from "../../../components/common/Icons";
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
            <span key={i} className="font-inter text-[15px] font-medium text-white">
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
        {/* Photos */}
        <Reveal>
          <div className="grid grid-cols-2 gap-[14px] lg:gap-[21px]">
            <div className="relative col-span-2 aspect-[690/357] overflow-hidden rounded-[15px]">
              <img
                src={aboutImages.journeyGroup}
                alt="Smartsun team on a solar site"
                className="h-full w-full object-cover"
              />
              <Marquee />
            </div>

            {/* green support card */}
            <div className="relative flex aspect-[334/357] flex-col justify-between overflow-hidden rounded-[15px] bg-[#17A865] p-[5%] pb-[7%] text-white">
              <img
                src={aboutImages.supportIcon}
                alt=""
                className="h-auto w-[33%] min-w-[56px] object-contain"
              />
              <div>
                <h3 className="font-manrope text-[clamp(16px,1.9vw,24px)] font-medium leading-[32px]">
                  {journey.support.title}
                </h3>
                <div className="mt-[10px] h-px w-[75%] bg-white/25 lg:mt-[15px]" />
                <p className="mt-[10px] max-w-[230px] font-inter text-[clamp(12px,1.4vw,17.6px)] leading-[1.5] lg:mt-[18px] lg:leading-[26px]">
                  {journey.support.text}
                </p>
              </div>
            </div>

            <img
              src={aboutImages.journeyWorker}
              alt="Technician inspecting solar panels"
              className="aspect-[334/357] w-full rounded-[15px] object-cover"
            />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <SectionTag>{journey.tag}</SectionTag>
          <SectionTitle dark={journey.titleDark} accent={journey.titleAccent} className="mt-[2px]" />
          <p className="font-inter text-[16px] leading-[27px] text-[#0B0B0B] lg:text-[17.6px] lg:leading-[29px]">
            {journey.text}
          </p>

          {/* feature card with green glow */}
          <div className="mt-[24px] flex gap-[22px] rounded-[15px] bg-white p-[21px] shadow-[-4px_4px_12px_rgba(24,180,110,0.6),0_1px_6px_rgba(0,0,0,0.05)] lg:mt-[29px] lg:min-h-[164px] lg:pb-[50px] lg:pr-[24px] lg:pt-[22px]">
            <span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-[#17A865] text-white lg:mt-[0px]">
              <FingerprintIcon className="h-[26px] w-[26px]" />
            </span>
            <div className="lg:-mt-[1px]">
              <h3 className="font-manrope text-[22px] font-medium leading-[34px] text-[#101E33] lg:text-[26px]">
                {journey.presence.title}
              </h3>
              <p className="font-inter text-[15px] leading-[1.6] text-[#666] lg:text-[17.6px] lg:leading-[28.8px]">
                {journey.presence.text}
              </p>
            </div>
          </div>

          {/* stats */}
          <div className="mt-[30px] grid grid-cols-3 gap-2 pl-[21px] lg:mt-[46px]">
            {journey.stats.map((s) => (
              <div key={s.label}>
                <p className="font-manrope text-[24px] font-semibold leading-[40px] text-[#101E33] lg:text-[35px]">
                  {s.value}
                </p>
                <p className="mt-[2px] font-inter text-[13px] leading-[20px] text-[#666] lg:text-[16px] lg:leading-[24px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default OurJourney;
