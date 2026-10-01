import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Premium Tier-1 Components",
    description:
      "Only the highest-efficiency modules and inverters from globally certified manufacturers.",
    image: "/images/why/why-1.webp",
  },
  {
    title: "Certified Engineering Team",
    description:
      "Licensed engineers design every system for optimal yield and structural integrity.",
    image: "/images/why/why-2.webp",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees — detailed proposals with clear ROI projections upfront.",
    image: "/images/why/why-3.webp",
  },
  {
    title: "End-to-End Service",
    description:
      "From permitting to installation to ongoing maintenance, we handle everything.",
    image: "/images/why/why-4.webp",
  },
  {
    title: "25-Year Performance Warranty",
    description:
      "Guaranteed output over the lifetime of your system, backed by our service team.",
    image: "/images/why/why-5.webp",
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Track your energy production and savings from any device, anywhere.",
    image: "/images/why/why-6.webp",
  },
  {
    title: "Community Impact",
    description:
      "Every installation reduces carbon emissions and supports local clean energy jobs.",
    image: "/images/why/why-4.webp",
  },
  {
    title: "Flexible Financing",
    description:
      "Multiple payment options including leases, loans, and purchase plans.",
    image: "/images/why/why-2.webp",
  },
];

function EngineeringExcellence() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  /* =========================================
     ACTIVE ITEM ON SCROLL
  ========================================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="
        w-full
        bg-white
        px-[20px]
        pb-[65px]
        pt-[55px]
        sm:px-[28px]
        sm:pb-[75px]
        sm:pt-[65px]
        md:px-[40px]
        md:pb-[85px]
        md:pt-[75px]
        lg:px-[55px]
        lg:pb-[100px]
        lg:pt-[85px]
      "
    >
      {/* =========================================
          HEADER
      ========================================= */}

      <div className="mx-auto w-full max-w-[1200px] text-center">

        <p
          className="
            !m-0
            font-manrope
            !text-[14px]
            font-bold
            uppercase
            !leading-[20px]
            tracking-[0.3px]
            text-[#0FA36B]
            sm:!text-[15px]
          "
        >
          Why SmartSun
        </p>

        <h2
          className="
            !m-0
            mt-[18px]
            font-manrope
            !text-[28px]
            font-bold
            !leading-[1.25]
            tracking-[-0.4px]
            text-[#111]
            sm:!text-[32px]
            md:!text-[36px]
            lg:mt-[25px]
            lg:!text-[39px]
            lg:!leading-[1.25]
          "
        >
          Engineering Excellence Meets Clean Energy
        </h2>

        <p
          className="
            mx-auto
            mt-[16px]
            max-w-[850px]
            font-roboto
            !text-[15px]
            !leading-[1.65]
            text-[#555]
            sm:!text-[16px]
            md:!text-[16.5px]
            lg:mt-[22px]
            lg:!text-[17px]
            lg:!leading-[1.7]
          "
        >
          We combine cutting-edge technology with expert craftsmanship to
          deliver solar systems that perform flawlessly for decades.
        </p>

      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div
        className="
          mx-auto
          mt-[42px]
          grid
          w-full
          max-w-[1200px]
          items-start
          gap-[35px]
          sm:mt-[50px]
          sm:gap-[40px]
          md:mt-[65px]
          md:gap-[50px]
          lg:mt-[85px]
          lg:grid-cols-[480px_minmax(0,1fr)]
          lg:gap-[65px]
          xl:grid-cols-[520px_minmax(0,1fr)]
          xl:gap-[80px]
        "
      >

        {/* =========================================
            DESKTOP IMAGE
        ========================================= */}

        <div
          className="
            sticky
            top-[110px]
            hidden
            aspect-[4/4.6]
            w-full
            max-w-[520px]
            overflow-hidden
            rounded-[14px]
            bg-[#E9EDF0]
            lg:block
          "
        >
          {features.map((feature, index) => (
            <img
              key={`${feature.image}-${index}`}
              src={feature.image}
              alt={feature.title}
              className={`
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-opacity
                duration-700
                ease-in-out
                ${
                  index === active
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            />
          ))}
        </div>

        {/* =========================================
            FEATURE LIST
        ========================================= */}

        <ol
          className="
            m-0
            list-none
            space-y-[8px]
            p-0
            sm:space-y-[10px]
            lg:space-y-0
          "
        >
          {features.map((feature, index) => {
            const isActive = index === active;

            return (
              <li
                key={feature.title}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-index={index}
                className={`
                  flex
                  flex-col
                  justify-center
                  rounded-r-[8px]
                  border-l-[3px]
                  py-[18px]
                  pl-[16px]
                  pr-[8px]
                  transition-all
                  duration-500

                  sm:py-[20px]
                  sm:pl-[20px]

                  md:py-[22px]
                  md:pl-[24px]

                  lg:min-h-[190px]
                  lg:rounded-none
                  lg:py-[25px]
                  lg:pl-[30px]
                  lg:pr-[10px]

                  ${
                    isActive
                      ? "border-[#12B981] bg-[#F8FCFA]"
                      : "border-transparent bg-transparent"
                  }
                `}
              >
                {/* =================================
                    TITLE
                ================================= */}

                <h3
                  className={`
                    !m-0
                    font-manrope
                    !text-[18px]
                    font-bold
                    !leading-[1.35]
                    transition-colors
                    duration-500

                    sm:!text-[19px]
                    md:!text-[20px]
                    lg:!text-[20.5px]

                    ${
                      isActive
                        ? "text-[#111]"
                        : "text-[#888]"
                    }
                  `}
                >
                  {feature.title}
                </h3>

                {/* =================================
                    DESCRIPTION
                ================================= */}

                <p
                  className={`
                    !m-0
                    mt-[7px]
                    max-w-[570px]
                    font-roboto
                    !text-[14px]
                    !leading-[1.55]
                    transition-colors
                    duration-500

                    sm:!text-[15px]
                    md:!text-[15.5px]
                    lg:!text-[14.5px]

                    ${
                      isActive
                        ? "text-[#555]"
                        : "text-[#B5B5B5]"
                    }
                  `}
                >
                  {feature.description}
                </p>

                {/* =================================
                    MOBILE IMAGE
                ================================= */}

                <div
                  className="
                    mt-[14px]
                    w-full
                    max-w-[300px]
                    overflow-hidden
                    rounded-[9px]
                    sm:mt-[16px]
                    sm:max-w-[340px]
                    md:max-w-[380px]
                    lg:hidden
                  "
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="
                      h-[150px]
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-[1.025]
                      sm:h-[170px]
                      md:h-[190px]
                    "
                  />
                </div>

              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
}

export default EngineeringExcellence;