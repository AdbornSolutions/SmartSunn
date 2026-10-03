import { useState } from "react";
import { Link } from "react-router-dom";

function FAQ() {
  const faqs = [
    {
      question: "How much can I save with a solar system?",
      answer:
        "Savings depend on your current electricity consumption, local tariff rates, system size, and available sunlight. A properly designed system can offset 60–80% of a typical household's electricity bill. Use our Solar Savings Calculator for a personalised estimate.",
    },
    {
      question:
        "What is the typical payback period for a solar installation?",
      answer:
        "Payback periods vary based on system cost, energy savings, and available incentives. Estimates are indicative only and depend on individual consumption patterns, tariff structures, and financing arrangements. Our team provides detailed ROI projections as part of every proposal.",
    },
    {
      question: "Do solar panels work on cloudy days?",
      answer:
        "Solar panels generate electricity from diffused light, not just direct sunlight. Output is reduced on overcast days, typically 10–25% of full capacity, but systems are designed factoring in your local weather patterns and average sun hours.",
    },
    {
      question: "What maintenance does a solar system require?",
      answer:
        "Solar systems are low-maintenance. Key tasks include periodic panel cleaning, annual performance inspections, inverter checks, and monitoring software reviews. We offer structured service plans to keep your system performing optimally year-round.",
    },
    {
      question: "Do I need battery storage?",
      answer:
        "Battery storage is optional but beneficial for maximising self-consumption and providing backup power during outages. Our engineers assess your consumption profile and recommend whether battery storage is financially justified for your situation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section className="w-full overflow-hidden bg-[#061E2D]">
      {/* HEADER */}
      <div
        className="
          mx-auto
          w-full
          px-[20px]
          pb-[36px]
          pt-[42px]

          sm:px-[28px]
          sm:pb-[40px]
          sm:pt-[46px]

          md:px-[40px]
          md:pb-[44px]
          md:pt-[50px]

          lg:px-[50px]
          lg:pb-[48px]
          lg:pt-[54px]
        "
      >
        <div className="text-center">
          {/* LABEL */}
          <p
            className="
              m-0
              text-[10px]
              font-semibold
              uppercase
              leading-[1.2]
              tracking-[0.15em]
              text-[#08B477]

              sm:text-[11px]

              md:text-[12px]
            "
          >
            FAQ
          </p>

          {/* HEADING */}
          <h1
            className="
              m-0
              mt-[10px]
              text-[30px]
              font-bold
              leading-[1.1]
              tracking-[-0.025em]
              text-white

              sm:text-[34px]

              md:text-[38px]

              lg:text-[40px]
            "
          >
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ CONTAINER */}
      <div
        className="
          mx-auto
          w-[calc(100%-40px)]
          max-w-[1000px]

          sm:w-[calc(100%-56px)]

          md:w-[calc(100%-80px)]

          lg:w-[800px]
        "
      >
        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className="
                  w-full
                  overflow-hidden
                  border
                  border-[#203A49]
                  border-b-0
                  last:border-b
                "
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-[65px]
                    w-full
                    items-center
                    justify-between
                    gap-[30px]
                    py-[16px]
                    pl-[5px]
                    pr-[40px]

                    sm:min-h-[68px]
                    sm:pl-[42px]
                    sm:pr-[42px]

                    md:min-h-[70px]
                    md:pl-[44px]
                    md:pr-[44px]

                    lg:min-h-[66px]
                    lg:pl-[40px]
                    lg:pr-[40px]
                  "
                >
                  {/* QUESTION */}
                  <span
                    className="
                      min-w-0
                      pr-[10px]
                      pl-[20px]
                      text-left
                      font-manrope
                      text-[15px]
                      font-medium
                      leading-[1.4]
                      text-white

                      sm:text-[16px]

                      md:text-[17px]

                      lg:text-[17px]
                    "
                  >
                    {faq.question}
                  </span>

                  {/* PLUS / MINUS */}
                  <span
                    className="
                      flex
                      h-[30px]
                      pr-[20px]
                      w-[30px]
                      shrink-0
                      items-center
                      justify-center
                      font-roboto
                      text-[29px]
                      font-light
                      leading-none
                      text-white
                    "
                    aria-hidden="true"
                  >
                    <span className="-translate-y-[2px]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid
                    pl-[20px]
                    pb-[10px]
                    transition-all
                    duration-300
                    ease-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-[#203A49]">
                      <p
                        className="
                          m-0
                          px-[40px]
                          pb-[40px]
                          
                          pt-[17px]
                          text-left
                          font-manrope
                          text-[13px]
                          font-normal
                          leading-[1.65]
                          text-[#9BAEB7]

                          sm:px-[42px]
                          sm:pb-[42px]
                          sm:text-[14px]

                          md:px-[44px]
                          md:pb-[44px]
                          md:text-[15px]

                          lg:px-[40px]
                          lg:pb-[43px]
                          lg:text-[15px]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* CONTACT LINK */}
      <div
        className="
          flex
          justify-center
          px-[20px]
          pb-[42px]
          pt-[34px]

          sm:pb-[46px]
          sm:pt-[36px]

          md:pb-[50px]
          md:pt-[38px]
        "
      >
        <Link
          to="/contact-us"
          className="
            inline-flex
            items-center
            justify-center
            text-center
            font-roboto
            text-[11px]
            font-normal
            leading-[1.3]
            text-[#0CAF73]
            transition-colors
            duration-200
            hover:text-[#FFC329]

            sm:text-[12px]

            md:text-[13px]
          "
        >
          <span className="font-semibold">
            Still have questions?
          </span>

          <span className="ml-[4px]">
            Contact our experts
          </span>

          <span className="ml-[5px] text-[15px]">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

export default FAQ;