import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Residential Solar",
    description:
      "Reduce your electricity bills by up to 80% with our premium rooftop solar systems designed for modern homes.",
    image: "/images/residential-solar.jpg",
    large: true,
    features: [
      "Rooftop & Ground Mount Systems",
      "Battery Storage Integration",
      "Smart Home Energy Management",
    ],
  },
  {
    title: "Commercial Solar",
    description:
      "Scale your business sustainability with cost-effective commercial solar installations.",
    image: "/images/commercial-solar.jpg",
  },
  {
    title: "Industrial Solar",
    description:
      "High-capacity solar power plants for factories and large-scale energy consumers.",
    image: "/images/industrial-solar.jpg",
  },
];

function SolutionCard({ item }) {
  const { large } = item;

  return (
    <article
      className={`relative overflow-hidden rounded-[11px] ${
        large ? "h-[440px] sm:h-[520px] lg:h-[707px]" : "h-[270px] lg:h-[342px]"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className={`absolute inset-0 ${
          large
            ? "bg-[linear-gradient(180deg,rgba(5,27,43,0.25)_0%,rgba(5,27,43,0.30)_45%,rgba(5,27,43,0.72)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(5,27,43,0.10)_0%,rgba(5,27,43,0.55)_100%)]"
        }`}
      />

      <div className="absolute inset-x-0 bottom-0 px-5 pb-[35px] text-left lg:px-8">
        <h3 className="font-manrope text-[22px] font-semibold leading-[32px] text-white lg:text-[26.4px]">
          {item.title}
        </h3>

        <p className="mt-[20px] font-roboto text-[15px] leading-[1.65] text-white/80 lg:mt-[33px] lg:text-[17.6px] lg:leading-[29px]">
          {item.description}
        </p>

        {large && (
          <ul className="mt-[23px]">
            {item.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-[10px] font-roboto text-[15px] leading-[29px] text-white/85 lg:text-[17.6px]"
              >
                <svg viewBox="0 0 12 12" className="h-[14px] w-[14px] shrink-0" aria-hidden="true">
                  <path d="M2 6.5 4.8 9 10 3.2" fill="none" stroke="#FFC629" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/services"
          className="mt-[24px] inline-flex items-center gap-[7px] font-manrope text-[15px] font-bold leading-[24px] text-[#FFC629] lg:mt-[26px] lg:text-[16px]"
        >
          Learn More
          <svg viewBox="0 0 16 16" className="h-[16px] w-[16px]" aria-hidden="true">
            <path d="M2.5 8h10m0 0L8.5 4M12.5 8l-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

function SolutionsSection() {
  return (
    <section className="bg-[#051B2B]">
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-[67px] pt-[64px] lg:w-[88.3%] lg:px-0 lg:pt-[98px]">
        <p className="font-manrope text-[16.8px] font-semibold leading-[22px] text-[#1FB877]">
          Our Solutions
        </p>

        <h2 className="mt-[16px] max-w-[480px] font-manrope text-[30px] font-semibold leading-[1.4] text-white lg:mt-[25px] lg:text-[38px] lg:leading-[56px]">
          Tailored Solar for Every Scale
        </h2>

        <p className="mt-1 max-w-[590px] font-roboto text-[16px] leading-[1.65] text-[#7F8E99] lg:text-[17.6px] lg:leading-[29px]">
          From single-family homes to large industrial facilities, we design and install
          solar systems engineered for your specific energy needs.
        </p>

        <div className="mt-[40px] grid gap-[23px] lg:mt-[59px] lg:grid-cols-[3fr_2fr]">
          <SolutionCard item={solutions[0]} />
          <div className="grid gap-[23px]">
            <SolutionCard item={solutions[1]} />
            <SolutionCard item={solutions[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
