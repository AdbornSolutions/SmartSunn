import { Link } from "react-router-dom";
import ArrowCircle from "../../../components/common/ArrowCircle";
import Reveal from "../../../components/common/Reveal";
import { projectsCta } from "../data";

// "**bold**" support for the paragraph
function RichText({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-white">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

// Sunset banner at the bottom of the page; both buttons go to /contact-us
function ProjectsCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#3A1D10]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-[position:center_35%]"
        style={{ backgroundImage: `url(${projectsCta.background})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#061E2D]/35" />

      <Reveal className="mx-auto flex w-[89%] max-w-[900px] flex-col items-center px-1 py-[72px] text-center sm:py-[96px] lg:py-[140px]">
        <h2 className="font-roboto text-[32px] font-bold leading-[1.2] text-white sm:text-[44px] lg:text-[58px] lg:leading-[76px]">
          {projectsCta.title}
        </h2>

        <p className="mt-6 max-w-[820px] font-roboto text-[16px] leading-[1.7] text-white/75 lg:mt-8 lg:text-[19px] lg:leading-[32px]">
          <RichText text={projectsCta.text} />
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row lg:mt-[52px]">
          {projectsCta.buttons.map((button) => (
            <Link
              key={button.label}
              to={button.to}
              className="inline-flex h-[54px] items-center justify-center gap-[10px] rounded-full border border-white/40 px-7 font-roboto text-[16px] font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629]"
            >
              {button.label}
              <ArrowCircle variant="light" className="h-[19px] w-[19px]" />
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default ProjectsCta;
