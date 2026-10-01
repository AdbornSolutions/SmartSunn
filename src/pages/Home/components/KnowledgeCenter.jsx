function KnowledgeCenter() {
  const articles = [
    {
      category: "INVERTERS",
      title: "On-Grid vs. Hybrid vs. Off-Grid Systems",
      readTime: "6 min read",
      image: "../images/KnowledgeC/K1.jpg",
    },
    {
      category: "STORAGE",
      title: "Complete Battery Storage Buyer's Guide",
      readTime: "10 min read",
      image: "../images/KnowledgeC/K2.png",
    },
    {
      category: "FINANCE",
      title: "Understanding Solar Payback Periods",
      readTime: "5 min read",
      image: "../images/KnowledgeC/K3.png",
    },
    {
      category: "MAINTENANCE",
      title: "Solar Maintenance Checklist & Schedule",
      readTime: "4 min read",
    image: "../images/KnowledgeC/K4.jpg",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
    
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-[20px]
          pb-[50px]
          pt-[42px]

          sm:px-[28px]
          sm:pb-[55px]
          sm:pt-[46px]

          md:px-[40px]
          md:pb-[60px]
          md:pt-[50px]

          lg:px-[50px]
          lg:pb-[65px]
          lg:pt-[52px]

          xl:px-0
        "
      >
     
        <div>
          {/* LABEL */}
          <p
            className="
              m-0
              text-[10px]
              font-semibold
              uppercase
              leading-[1.2]
              tracking-[0.15em]
              text-[#0CAF70]

              sm:text-[11px]

              md:text-[12px]
            "
          >
            Knowledge Center
          </p>

          {/* HEADING */}
          <h1
            className="
              m-0
              mt-[14px]
              max-w-[650px]
              text-[32px]
              font-bold
              leading-[1.08]
              tracking-[-0.025em]
              text-[#17251F]

              sm:mt-[16px]
              sm:text-[36px]

              md:text-[40px]

              lg:text-[43px]
            "
          >
            Learn Solar. Make
            <br className="hidden sm:block" />
            Smarter Decisions.
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              m-0
              mt-[15px]
              max-w-[600px]
              text-[11px]
              font-normal
              leading-[1.6]
              text-[#737B78]

              sm:text-[12px]

              md:text-[13px]

              lg:text-[14px]
            "
          >
            Technical guides, buyer's resources, and in-depth articles on
            solar energy.
          </p>
        </div>

      
        <div
          className="
            mt-[40px]
            grid
            grid-cols-1
            gap-[30px]

            sm:mt-[44px]
            sm:grid-cols-2
            sm:gap-[22px]

            lg:mt-[48px]
            lg:grid-cols-[1.15fr_1fr_1fr]
            lg:gap-x-[24px]
            lg:gap-y-[30px]
          "
        >
      
          <article
            className="
              min-w-0

              sm:col-span-2

              lg:col-span-1
              lg:row-span-2
            "
          >
            {/* FEATURED IMAGE */}
            <div
              className="
                relative
                h-[220px]
                w-full
                overflow-hidden
                rounded-[10px]

                sm:h-[230px]

                md:h-[250px]

                lg:h-[260px]
              "
            >
              <img
                src="/images/K0.jpg"
                alt="How Solar Panels Actually Work"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-out
                  hover:scale-[1.02]
                "
              />
            </div>

            {/* FEATURED CONTENT */}
            <div className="mt-[16px]">
              {/* CATEGORY */}
              <p
                className="
                  m-0
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-[1.2]
                  tracking-[0.13em]
                  text-[#08AC6D]

                  sm:text-[11px]

                  md:text-[12px]
                "
              >
                Solar Basics
              </p>

              {/* TITLE */}
              <h2
                className="
                  m-0
                  mt-[10px]
                  max-w-[600px]
                  text-[20px]
                  font-bold
                  leading-[1.25]
                  tracking-[-0.015em]
                  text-[#17251F]

                  sm:text-[22px]

                  md:text-[24px]

                  lg:text-[25px]
                "
              >
                How Solar Panels Actually Work: A Technical Guide
              </h2>

              {/* META */}
              <div
                className="
                  mt-[12px]
                  flex
                  flex-wrap
                  items-center
                  gap-x-[12px]
                  gap-y-[6px]
                  text-[9px]
                  font-normal
                  text-[#89918E]

                  sm:text-[10px]

                  md:text-[11px]
                "
              >
                <span className="flex items-center gap-[4px]">
                  <span className="text-[12px]">◷</span>
                  8 min read
                </span>

                <span className="flex items-center gap-[4px]">
                  <span className="text-[11px]">▣</span>
                  [Date Placeholder]
                </span>
              </div>
            </div>
          </article>

         
          {articles.map((article) => (
            <article
              key={article.category}
              className="
                min-w-0
                group
              "
            >
              {/* IMAGE */}
              <div
                className="
                  h-[145px]
                  w-full
                  overflow-hidden
                  rounded-[8px]

                  sm:h-[135px]

                  md:h-[145px]

                  lg:h-[135px]
                "
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="mt-[11px]">
                {/* CATEGORY */}
                <p
                  className="
                    m-0
                    text-[9px]
                    font-semibold
                    uppercase
                    leading-[1.2]
                    tracking-[0.13em]
                    text-[#08AC6D]

                    sm:text-[10px]

                    md:text-[11px]
                  "
                >
                  {article.category}
                </p>

                {/* TITLE */}
                <h3
                  className="
                    m-0
                    mt-[7px]
                    text-[14px]
                    font-bold
                    leading-[1.3]
                    tracking-[-0.01em]
                    text-[#17251F]

                    sm:text-[15px]

                    md:text-[16px]

                    lg:text-[15px]
                  "
                >
                  {article.title}
                </h3>

                {/* READ TIME */}
                <p
                  className="
                    m-0
                    mt-[8px]
                    flex
                    items-center
                    gap-[5px]
                    text-[9px]
                    font-normal
                    leading-none
                    text-[#8B9290]

                    sm:text-[10px]

                    md:text-[11px]
                  "
                >
                  <span className="text-[11px]">◷</span>
                  {article.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KnowledgeCenter;