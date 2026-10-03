import { motion } from "framer-motion";

const heroImage = "/Hero.jpg";

// Dark banner at the top of inner pages
// Same look as the About Us banner
function PageHero({ eyebrow, title }) {
  return (
    <section className="relative isolate flex min-h-[400px] items-start overflow-hidden bg-[#0A2236] lg:min-h-[521px]">
      {/* Background Image */}
      <motion.img
        src={heroImage}
        alt=""
        loading="lazy"
        decoding="async"
        initial={{
          opacity: 0,
          scale: 1.06,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,38,0.62)_0%,rgba(4,20,38,0.45)_60%,rgba(4,20,38,0.40)_100%)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-[89%] pb-14 pt-[110px] lg:pl-3 lg:pt-[195px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <p className="font-inter text-[15px] font-semibold uppercase leading-[24px] text-[#FFC629] lg:text-[16px]">
            {eyebrow}
          </p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="mt-[14px] max-w-[700px] font-manrope text-[30px] font-semibold leading-[1.1] text-white lg:mt-[16px] lg:text-[54px] lg:leading-[57.5px]"
          >
            {title}
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;