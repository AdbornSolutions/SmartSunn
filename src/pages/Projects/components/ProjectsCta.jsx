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

// Sunset banner at the bottom of the page;
// both buttons go to their existing destinations.
function ProjectsCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#3A1D10]">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-[position:center_35%]"
        style={{
          backgroundImage: `url(${projectsCta.background})`,
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#061E2D]/35"
      />

      <Reveal className="mx-auto flex w-[89%] max-w-[900px] flex-col items-center px-1 py-[72px] text-center sm:py-[96px] lg:py-[140px]">
        {/* Heading */}
        <h2 className="font-roboto text-[20px] font-bold leading-[1.2] text-white sm:text-[44px] lg:text-[55px] lg:leading-[75px]">
          {projectsCta.title}
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-[820px] font-roboto text-[16px] leading-[1.7] text-white/75 lg:mt-8 lg:text-[19px] lg:leading-[32px]">
          <RichText text={projectsCta.text} />
        </p>

        {/* Buttons */}
        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row lg:mt-[52px]">
          {projectsCta.buttons.map((button, index) => {
            const isPrimary = index === 0;

            return (
              <Link
                key={button.label}
                to={button.to}
                className={`
                  group
                  relative
                  inline-flex
                  h-[54px]
                  min-w-[240px]
                  items-center
                  justify-center
                  gap-[10px]
                  overflow-hidden
                  rounded-full
                  border
                  px-7
                  font-roboto
                  text-[16px]
                  font-semibold
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#FFC629]

                  ${
                    isPrimary
                      ? "border-[#009b62] bg-[#009b62] text-white hover:border-[#ffbd21] hover:bg-[#ffbd21] hover:text-[#17231F]"
                      : "border-white/60 bg-transparent text-white hover:border-[#ffbd21] hover:bg-[#ffbd21] hover:text-[#17231F]"
                  }
                `}
              >
                {/* Hover glow */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    opacity-0
                    shadow-[0_0_22px_rgba(255,189,33,0.55)]
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <span className="relative z-10">
                  {button.label}
                </span>

                <ArrowCircle
                  variant="light"
                  className={`
                    relative
                    z-10
                    h-[19px]
                    w-[19px]
                    transition-all
                    duration-300
                    ${
                      isPrimary
                        ? "group-hover:text-[#17231F]"
                        : "group-hover:text-[#17231F]"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

export default ProjectsCta;