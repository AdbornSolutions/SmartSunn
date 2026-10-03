import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="relative isolate min-h-[560px] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-[#061E2D]/65" />

      {/* Extra bottom darkening */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[190px] bg-[#061E2D]/35" />

      {/* Content */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[560px]
          max-w-[1100px]
          flex-col
          items-center
          justify-center
          px-5
          py-16
          text-center

          sm:px-8
        "
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            max-w-[850px]
            text-[38px]
            font-bold
            leading-[1.15]
            tracking-[-0.025em]
            text-white

            sm:text-[48px]

            lg:text-[62px]
          "
        >
          Ready to Turn Sunlight
          <br />
          into Long-Term Savings?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            mt-7
            max-w-[850px]
            text-[16px]
            leading-[1.7]
            text-white/85

            sm:text-[20px]
          "
        >
          Join forward-thinking homeowners and businesses investing in clean,
          reliable solar energy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            mt-10
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-4

            sm:flex-row
          "
        >
          {/* 1st - GREEN */}
          <CTAButton to="/contact-us" variant="primary">
            Get a Solar Quote
          </CTAButton>

          {/* 2nd - TRANSPARENT */}
          <CTAButton to="/contact-us" variant="secondary">
            Schedule a Site Assessment
          </CTAButton>
        </motion.div>

        {/* 3rd - TRANSPARENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mt-4"
        >
          <CTAButton to="/contact-us" variant="secondary">
            Speak with a Solar Expert
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

const CTAButton = ({ children, to, variant = "primary" }) => {
  const isPrimary = variant === "primary";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link
        to={to}
        className={`
          relative
          flex
          min-h-[58px]
          min-w-[280px]
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-full
          border
          px-7
          py-3.5
          text-[15px]
          font-semibold
          transition-all
          duration-300
          sm:min-w-[300px]

          ${
            isPrimary
              ? "border-white/40 text-white"
              : "border-white/40 bg-transparent text-white"
          }
        `}
      >
        {/* Background */}
        <span
          className={`
            absolute
            inset-0
            -z-10
            rounded-full
            transition-all
            duration-300

            ${
              isPrimary
                ? "bg-[#019b62] group-hover:bg-[#ffbd21] group-hover:shadow-[0_0_22px_rgba(255,189,33,0.55)]"
                : "bg-transparent group-hover:bg-[#ffbd21] group-hover:shadow-[0_0_22px_rgba(255,189,33,0.55)]"
            }
          `}
        />

        {/* Traffic-light pulse */}
        <span
          className="
            absolute
            inset-0
            -z-10
            rounded-full
            bg-[#ffbd21]
            opacity-0
            group-hover:animate-[trafficBlink_1.2s_ease-in-out_infinite]
          "
        />

        {/* Text */}
        <span
          className={`
            relative
            z-10
            transition-colors
            duration-300

            ${
              isPrimary
                ? "text-white group-hover:text-[#17231F]"
                : "text-white group-hover:text-[#17231F]"
            }
          `}
        >
          {children}
        </span>

        {/* Arrow */}
        <motion.span
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
          className="
            relative
            z-10
            flex
            items-center
            text-white
            transition-colors
            duration-300
            group-hover:text-[#17231F]
          "
        >
          <ArrowRight size={18} strokeWidth={2.5} />
        </motion.span>
      </Link>
    </motion.div>
  );
};
export default FinalCTA;