import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Residential / Commercial / Industrial -> Projects page
const tags = [
  { label: "Residential", to: "/projects" },
  { label: "Commercial", to: "/projects" },
  { label: "Industrial", to: "/projects" },
];

const stats = [
  {
    label: "Solar Generation",
    value: "847 kWh",
    note: "+12% vs last month",
  },
  {
    label: "Monthly Savings",
    value: "$240",
    note: "On track",
  },
  {
    label: "System Efficiency",
    value: "98.4%",
    note: "Optimal",
  },
  {
    label: "CO₂ Reduced",
    value: "0.6 T",
    note: "This year",
  },
];

const capabilities = [
  { title: "Solar PV", text: "Clean energy generation" },
  { title: "BESS", text: "Intelligent energy storage" },
  { title: "Grid", text: "Optimized grid interaction" },
  { title: "DG Integration", text: "Smarter backup management" },
  { title: "EMS", text: "Real-time energy intelligence" },
];

/* =========================================================
   RESIDENTIAL / COMMERCIAL / INDUSTRIAL
========================================================= */

const tagClass =
  "inline-flex h-[42px] items-center justify-center rounded-full border border-white/20 bg-[#465060]/65 px-[22px] font-roboto text-[15px] font-semibold !text-white backdrop-blur-[2px] transition-all duration-300 hover:border-[#69CF6C] hover:bg-[#69CF6C] hover:!text-white active:scale-[0.97] sm:h-[44px] sm:px-[27px] sm:text-[16px] lg:h-[clamp(44px,3vw,50px)] lg:px-[clamp(25px,2vw,32px)] lg:text-[clamp(16px,1.1vw,18px)]";

/* =========================================================
   CTA BUTTONS
   Normal = White
   Hover / Active = Yellow
   No glow
========================================================= */

const primaryBtn =
  "inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-transparent px-[22px] font-roboto text-[15px] font-bold !text-white transition-colors duration-300 hover:border-[#FFC629] hover:!text-[#FFC629] active:border-[#FFC629] active:!text-[#FFC629] active:scale-[0.97] sm:h-[58px] sm:px-[23px] sm:text-[16px] lg:h-[clamp(56px,3.4vw,64px)] lg:px-[clamp(24px,2vw,32px)] lg:text-[clamp(16px,1.05vw,18px)]";

const outlineBtn =
  "inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-transparent px-[22px] font-roboto text-[15px] font-bold !text-white transition-colors duration-300 hover:border-[#FFC629] hover:!text-[#FFC629] active:border-[#FFC629] active:!text-[#FFC629] active:scale-[0.97] sm:h-[58px] sm:px-[23px] sm:text-[16px] lg:h-[clamp(56px,3.4vw,64px)] lg:px-[clamp(24px,2vw,32px)] lg:text-[clamp(16px,1.05vw,18px)]";

/* =========================================================
   CAPABILITY BORDERS
========================================================= */

function cellBorders(i) {
  return [
    i % 2 === 0 ? "border-l-0" : "border-l",
    i >= 2 ? "border-t" : "border-t-0",
    i % 3 === 0 ? "md:border-l-0" : "md:border-l",
    i >= 3 ? "md:border-t" : "md:border-t-0",
    i === 0 ? "lg:border-l-0" : "lg:border-l",
    "lg:border-t-0",
  ].join(" ");
}

function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[585px]
        flex-col
        overflow-hidden
        bg-[#0A2236]
        sm:min-h-[600px]
        lg:min-h-[clamp(585px,40vw,700px)]
      "
    >
      {/* =====================================================
          HERO BACKGROUND
      ====================================================== */}

      <img
        src="/Hero.jpg"
        alt=""
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(4,20,38,0.82)_0%,rgba(5,26,46,0.64)_52%,rgba(5,26,46,0.56)_100%)]
        "
      />

      {/* Bottom dark fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-36
          lg:h-[clamp(144px,10vw,180px)]
          bg-gradient-to-t
          from-[#04182A]/80
          to-transparent
        "
      />

      {/* =====================================================
          MAIN HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-[92%]
          max-w-[1500px]
          flex-1
          items-start
          pt-[40px]
          pb-[5px]
          sm:pt-[49px]
          lg:pt-[clamp(60px,5vw,90px)]
          lg:pb-[8px]
        "
      >
        <div
          className="
            grid
            w-full
            items-start
            gap-7
            lg:grid-cols-[minmax(0,1fr)_clamp(380px,30vw,470px)]
            lg:gap-[clamp(32px,4vw,70px)]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Heading */}

            <h1
              className="
                max-w-[850px]
                font-manrope
                text-[31px]
                font-semibold
                leading-[1.12]
                !text-white
                sm:text-[40px]
                lg:text-[clamp(48px,3.5vw,64px)]
                lg:leading-[1.06]
              "
            >
              Powering a Smarter, More Resilient Energy Future.
            </h1>

            {/* Description */}

            <p
              className="
                mt-[13px]
                max-w-[760px]
                font-roboto
                text-[15px]
                font-medium
                leading-[1.65]
                !text-white
                sm:text-[16px]
                lg:mt-[clamp(15px,1.3vw,22px)]
                lg:text-[clamp(17px,1.15vw,20px)]
                lg:leading-[1.65]
              "
            >
              SmartSun Solar delivers innovative, reliable solar energy systems
              for homes and businesses across the region.
            </p>

            {/* =================================================
                TAGS
            ================================================== */}

            <div
              className="
                mt-[24px]
                flex
                flex-wrap
                gap-[12px]
                sm:gap-[18px]
                lg:mt-[clamp(26px,2vw,34px)]
                lg:gap-[clamp(14px,1.3vw,22px)]
              "
            >
              {tags.map((tag, index) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.12 + index * 0.06,
                  }}
                >
                  <Link to={tag.to} className={tagClass}>
                    {tag.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="
                mt-[17px]
                flex
                flex-wrap
                gap-x-[18px]
                gap-y-3
                lg:mt-[clamp(18px,1.5vw,25px)]
                lg:gap-x-[clamp(18px,1.5vw,28px)]
              "
            >
              <Link to="/contact-us" className={primaryBtn}>
                Get a Solar Quote
              </Link>

              <Link to="/contact-us" className={outlineBtn}>
                Schedule a Site Assessment
              </Link>
            </motion.div>
          </motion.div>

          {/* =================================================
              LIVE SOLAR STATS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -2,
              transition: { duration: 0.25 },
            }}
            className="
              w-full
              max-w-[470px]
              justify-self-start
              rounded-[8px]
              border
              border-white/20
              bg-[#263B4B]/55
              px-[22px]
              pb-[22px]
              pt-[15px]
              shadow-[0_8px_25px_rgba(0,0,0,0.16)]
              backdrop-blur-[7px]
              lg:px-[clamp(22px,2vw,32px)]
              lg:pb-[clamp(22px,2vw,32px)]
              lg:pt-[clamp(16px,1.3vw,22px)]
              lg:justify-self-end
            "
          >
            {/* Card title */}

            <p
              className="
                font-roboto
                text-[17px]
                font-medium
                leading-[28px]
                !text-white/65
                lg:text-[clamp(17px,1.15vw,20px)]
                lg:leading-[1.6]
              "
            >
              Live Solar Stats
            </p>

            {/* Stats */}

            <div
              className="
                mt-[10px]
                grid
                grid-cols-2
                gap-x-[20px]
                gap-y-[12px]
                lg:mt-[clamp(10px,0.8vw,16px)]
                lg:gap-x-[clamp(20px,2vw,30px)]
                lg:gap-y-[clamp(12px,1vw,18px)]
              "
            >
              {stats.map((s, index) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + index * 0.08,
                  }}
                  className="min-w-0"
                >
                  <p
                    className="
                      font-roboto
                      text-[14px]
                      font-medium
                      leading-[22px]
                      !text-white/60
                      lg:text-[clamp(14px,0.9vw,17px)]
                      lg:leading-[1.55]
                    "
                  >
                    {s.label}
                  </p>

                  <p
                    className="
                      mt-[4px]
                      font-roboto
                      text-[23px]
                      font-bold
                      leading-[31px]
                      !text-white
                      lg:text-[clamp(23px,1.7vw,29px)]
                      lg:leading-[1.3]
                    "
                  >
                    {s.value}
                  </p>

                  <p
                    className="
                      mt-[3px]
                      font-roboto
                      text-[14px]
                      font-medium
                      leading-[22px]
                      !text-white/55
                      lg:text-[clamp(14px,0.9vw,17px)]
                      lg:leading-[1.55]
                    "
                  >
                    {s.note}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Energy Source */}

            <div
              className="
                mt-[18px]
                px-[9px]
                lg:mt-[clamp(18px,1.5vw,26px)]
              "
            >
              <p
                className="
                  font-roboto
                  text-[16px]
                  font-medium
                  leading-[27px]
                  !text-white/75
                  lg:text-[clamp(16px,1vw,19px)]
                "
              >
                Energy Source
              </p>

              <div
                className="
                  mt-[5px]
                  flex
                  h-[10px]
                  overflow-hidden
                  rounded-full
                  bg-white/90
                  lg:h-[clamp(10px,0.7vw,13px)]
                "
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                  className="block h-full rounded-full bg-[#FFC629]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          CAPABILITY STRIP
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        className="
          relative
          z-10
          mx-auto
          w-[92%]
          max-w-[1500px]
        "
      >
        <div
          className="
            grid
            grid-cols-2
            border-y
            border-white/25
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className={`
                border-white/25
                py-[11px]
                pl-[18px]
                pr-[14px]
                transition-colors
                duration-300
                hover:bg-white/[0.035]
                lg:py-[clamp(12px,1vw,18px)]
                lg:pl-[clamp(20px,1.5vw,28px)]
                lg:pr-[clamp(17px,1.3vw,25px)]
                ${cellBorders(i)}
              `}
            >
              <p
                className="
                  font-roboto
                  text-[15px]
                  font-bold
                  leading-[22px]
                  text-[#FFC629]
                  lg:text-[clamp(15px,1vw,18px)]
                  lg:leading-[1.45]
                "
              >
                {c.title}
              </p>

              <p
                className="
                  font-roboto
                  text-[14px]
                  leading-[22px]
                  !text-white
                  lg:text-[clamp(14px,0.95vw,17px)]
                  lg:leading-[1.5]
                "
              >
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;