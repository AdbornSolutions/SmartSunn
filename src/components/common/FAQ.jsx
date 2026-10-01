import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How much can I save with a solar system?",
      answer:
        "Savings depend on your current electricity consumption, local tariff rates, system size, and available sunlight. A properly designed system can offset 60–80% of a typical household's electricity bill. Use our Solar Savings Calculator for a personalised estimate.",
    },
    {
      question: "What is the typical payback period for a solar installation?",
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

  // First FAQ open initially, matching the reference
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section className="w-full overflow-hidden bg-[#061E2D]">
 
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-[20px]
          pb-[38px]
          pt-[38px]

          sm:px-[28px]
          sm:pb-[42px]
          sm:pt-[42px]

          md:px-[40px]
          md:pb-[46px]
          md:pt-[46px]

          lg:px-[50px]
          lg:pb-[50px]
          lg:pt-[48px]

          xl:px-[60px]
        "
      >
        
        <div className="text-center">
          {/* LABEL */}
          <p
            className="
              m-0
              text-[9px]
              font-semibold
              uppercase
              leading-[1.2]
              tracking-[0.15em]
              text-[#08B477]

              sm:text-[10px]

              md:text-[11px]
            "
          >
            FAQ
          </p>

          {/* HEADING */}
          <h1
            className="
              m-0
              mt-[12px]
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

      
        <div
          className="
            mx-auto
            mt-[34px]
            flex
            w-full
            max-w-[1100px]
            flex-col
            gap-[6px]

            sm:mt-[38px]
            sm:gap-[7px]

            md:mt-[42px]
            md:gap-[8px]
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className={`
                  w-full
                  overflow-hidden
                  rounded-[6px]
                  border
                  border-[#203A49]
                  bg-transparent
                  transition-all
                  duration-300
                  ease-out
                  ${isOpen ? "min-h-[125px]" : "min-h-[58px]"}
                `}
              >
               
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-between
                    gap-[20px]
                    px-[17px]
                    py-[15px]
                    text-left

                    sm:px-[18px]

                    md:px-[20px]
                  "
                >
                  {/* QUESTION */}
                  <span
                    className="
                      text-[11px]
                      font-semibold
                      leading-[1.35]
                      text-white

                      sm:text-[12px]

                      md:text-[13px]
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className="
                      flex
                      h-[23px]
                      w-[23px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#355160]
                      text-[17px]
                      font-light
                      leading-none
                      text-[#D0D9DD]
                      transition-transform
                      duration-300
                    "
                  >
                    <span className="-translate-y-[1px]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>

            
                <div
                  className={`
                    grid
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
                    <p
                      className="
                        m-0
                        px-[17px]
                        pb-[18px]
                        text-[10px]
                        font-normal
                        leading-[1.55]
                        text-[#8FA0A8]

                        sm:px-[18px]
                        sm:text-[10.5px]

                        md:px-[20px]
                        md:text-[11px]

                        lg:max-w-[1000px]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

       
        <div
          className="
            pt-[28px]
            text-center

            sm:pt-[30px]

            md:pt-[32px]
          "
        >
          <p
            className="
              m-0
              text-[10px]
              font-normal
              leading-[1.3]
              text-[#0CAF73]

              sm:text-[11px]

              md:text-[12px]
            "
          >
            <span className="font-semibold">
              Still have questions?
            </span>{" "}
            Contact our experts
            <span className="ml-[5px] text-[13px]">→</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;