import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      quote:
        '"[Placeholder testimonial] — SmartSun Solar provided an exceptional installation experience. Our electricity bills dropped significantly within the first month."',
      name: "[Customer Name Placeholder]",
      location: "Residential",
      project: "[Location Placeholder]",
      system: "[X] kWp",
      image: "/images/Customers/customer-1.jpg",
    },
    {
      rating: 5,
      quote:
        '"[Placeholder testimonial] — The engineering team was thorough and professional. The monitoring system gives us complete visibility over our energy production."',
      name: "[Customer Name Placeholder]",
      location: "Commercial",
      project: "[Location Placeholder]",
      system: "[XX] kWp",
      image: "/images/Customers/customer-2.jpg",
    },
    {
      rating: 5,
      quote:
        '"[Placeholder testimonial] — From consultation to activation, the process was smooth and transparent. Highly recommend for industrial-scale solar."',
      name: "[Customer Name Placeholder]",
      location: "Industrial",
      project: "[Location Placeholder]",
      system: "[XXX] kWp",
      image: "/images/Customers/customer-3.jpg",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#F7F6F1]">
      {/* HEADER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-[20px]
          pt-[52px]

          sm:px-[28px]
          sm:pt-[58px]

          md:px-[40px]
          md:pt-[64px]

          lg:px-[50px]
          lg:pt-[68px]

          xl:px-0
        "
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* LABEL */}
          <p
            className="
              m-0
              text-[12px]
              font-bold
              uppercase
              leading-[1.2]
              tracking-[0.14em]
              text-[#10A96D]

              sm:text-[13px]

              md:text-[14px]
            "
          >
            Client Stories
          </p>

          {/* HEADING */}
          <h2
            className="
              m-0
              mt-[14px]
              text-[34px]
              font-bold
              leading-[1.12]
              tracking-[-0.025em]
              text-[#17231F]

              sm:text-[38px]

              md:text-[42px]

              lg:text-[44px]
            "
          >
            What Our Customers Say
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-[19px]
              max-w-[1100px]
              text-[15px]
              text-center
              font-normal
              leading-[1.55]
              text-[#737C78]

              sm:text-[16px]

              md:text-[15px]

              lg:text-[15px]
            "
          >
            The following testimonials are placeholder examples. Real
            customer reviews will be added after verification.
          </p>
        </motion.div>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div
        className="
          mx-auto
          mt-[42px]
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          gap-[18px]
          px-[20px]
          pb-[60px]

          sm:mt-[45px]
          sm:gap-[20px]
          sm:px-[28px]
          sm:pb-[65px]

          md:px-[60px]
          md:pb-[72px]

          lg:mt-[48px]
          lg:grid-cols-3
          lg:gap-[16px]
          lg:px-[50px]
          lg:pb-[78px]

          xl:px-0
        "
      >
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.25 },
            }}
            className="
              flex
              min-w-0
              min-h-[315px]
              flex-col
              rounded-[10px]
              border
              border-[#D9DAD5]
              bg-white
              px-[20px]
              py-[19px]
              transition-shadow
              duration-300
              hover:shadow-[0_10px_30px_rgba(23,35,31,0.08)]

              sm:min-h-[325px]
              sm:px-[22px]
              sm:py-[20px]

              md:min-h-[335px]
              md:px-[22px]
              md:py-[27px]

              lg:min-h-[340px]
              lg:px-[21px]
              lg:py-[20px]

              xl:min-h-[345px]
            "
          >
            {/* STARS */}
            <div className="flex items-center gap-[4px]">
              {Array.from({ length: testimonial.rating }).map(
                (_, starIndex) => (
                  <span
                    key={starIndex}
                    className="
                      text-[17px]
                      font-medium
                      leading-none
                      text-[#F5B544]

                      sm:text-[18px]

                      md:text-[21px]
                    "
                  >
                    ★
                  </span>
                )
              )}
            </div>

            {/* QUOTE ICON */}
            <div
              className="
                mt-[13px]
                h-[36px]
                overflow-hidden
                text-[58px]
                font-bold
                leading-[0.7]
                tracking-[-0.08em]
                text-[#63BDE2]

                sm:h-[38px]
                sm:text-[62px]

                md:h-[40px]
                md:text-[65px]
              "
            >
              “
            </div>

            {/* QUOTE */}
            <p
              className="
                m-0
                mt-[10px]
                max-w-full
                text-[14px]
                font-normal
                italic
                leading-[1.6]
                text-[#596562]

                sm:text-[14px]

                md:text-[16px]

                lg:text-[14px]

                xl:text-[16px]
              "
            >
              {testimonial.quote}
            </p>

            {/* CUSTOMER INFO */}
            <div
              className="
                mt-auto
                flex
                items-center
                border-t
                border-[#E4E6E1]
                pt-[14px]

                sm:pt-[15px]

                md:pt-[17px]
              "
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                decoding="async"
                className="
                  h-[45px]
                  w-[45px]
                  shrink-0
                  rounded-full
                  object-cover

                  sm:h-[47px]
                  sm:w-[47px]

                  md:h-[49px]
                  md:w-[49px]
                "
              />

              <div className="ml-[11px] min-w-0">
                <p
                  className="
                    m-0
                    truncate
                    text-[12px]
                    font-semibold
                    leading-[1.25]
                    text-[#17231F]

                    sm:text-[12px]

                    md:text-[15px]
                  "
                >
                  {testimonial.name}
                </p>

                <p
                  className="
                    m-0
                    mt-[5px]
                    truncate
                    text-[9px]
                    font-normal
                    leading-[1.35]
                    text-[#7E8783]

                    sm:text-[9px]

                    md:text-[11px]
                  "
                >
                  {testimonial.location} · {testimonial.project} ·{" "}
                  {testimonial.system}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;