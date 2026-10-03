import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCTA = () => {
  return (
    <section className="relative isolate min-h-[560px] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services/CTA.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/45" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[560px] max-w-[1100px] flex-col items-center justify-center px-5 py-16 text-center sm:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-[850px] text-[30px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[62px]"
        >
          Ready to Make the Switch
          <br />
          to Solar?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-7 max-w-[850px] text-[16px] leading-[1.7] text-white/85 sm:text-[20px]"
        >
          Whether you’re a homeowner looking to reduce electricity bills, a
          business seeking greater energy efficiency, or an industrial
          facility planning a high-capacity solar plant, Smarttsun Power can
          help you plan the right solution.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          {/* PRIMARY */}
          <CTAButton
            to="/contact-us/"
            variant="primary"
          >
            Get a Free Solar Consultation
          </CTAButton>

          {/* SECONDARY */}
          <CTAButton
            to="/contact-us/"
            variant="secondary"
          >
            Request Solar Analysis
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   CTA BUTTON
   Primary  : Green -> Yellow on hover
   Secondary: Transparent -> Yellow on hover
========================================================= */

const CTAButton = ({
  children,
  to,
  variant = "primary",
}) => {
  const isPrimary = variant === "primary";

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
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
          text-white
          transition-all
          duration-300
          sm:min-w-[300px]
          ${
            isPrimary
              ? "border-white/40"
              : "border-white/60 bg-transparent"
          }
        `}
      >
        {/* Main background */}
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
                ? "bg-[#009b62] group-hover:bg-[#ffbd21] group-hover:shadow-[0_0_22px_rgba(255,189,33,0.55)]"
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
          className="
            relative
            z-10
            text-white
            transition-colors
            duration-300
            group-hover:text-[#17231F]
          "
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

export default ServicesCTA;