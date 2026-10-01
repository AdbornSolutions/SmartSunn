function Projects() {
  const projects = [
    {
      category: "RESIDENTIAL",
      title: "Residential Project — Location Placeholder",
      meta: "[XX] kWp · On-Grid · Est. [XXX] kWh/month",
      image: "/images/P1.jpg",
    },
    {
      category: "INDUSTRIAL",
      title: "Industrial Project — Location Placeholder",
      meta: "[XXX] kWp · Grid-Tied · Est. [XXX] kWh/month",
      image: "/images/P2.jpg",
    },
    {
      category: "COMMERCIAL",
      title: "Commercial Project — Location Placeholder",
      meta: "[XXX] kWp · Hybrid · Est. [XXX] kWh/month",
      image: "/images/P3.png",
    },
  ];

  return (
    <section className="w-full bg-[#061C2A]">
     
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-[20px]
          pt-[55px]
          pb-[60px]

          sm:px-[28px]
          sm:pt-[60px]
          sm:pb-[65px]

          md:px-[40px]
          md:pt-[70px]
          md:pb-[70px]

          lg:px-[55px]
          lg:pt-[78px]
          lg:pb-[75px]

          xl:px-[20px]
          xl:pt-[80px]
          xl:pb-[80px]
        "
      >
       
        <div>
          {/* SMALL LABEL */}
          <p
            className="
              m-0
              text-[11px]
              font-semibold
              uppercase
              leading-[1.2]
              tracking-[0.12em]
              text-[#10B777]

              sm:text-[12px]

              md:text-[13px]

              lg:text-[14px]
            "
          >
            Featured Projects
          </p>

          {/* MAIN HEADING */}
          <h2
            className="
              m-0
              mt-[22px]
              text-[30px]
              font-bold
              leading-[1.1]
              tracking-[-0.025em]
              text-white

              sm:mt-[24px]
              sm:text-[34px]

              md:text-[38px]

              lg:mt-[26px]
              lg:text-[42px]

              xl:text-[44px]
            "
          >
            Our Installations
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              m-0
              mt-[16px]
              max-w-[850px]
              text-[12px]
              font-normal
              leading-[1.55]
              text-[#A8B7BE]

              sm:text-[13px]

              md:text-[14px]

              lg:text-[15px]
            "
          >
            Explore our portfolio of completed solar installations across
            residential, commercial, and industrial sectors.
          </p>
        </div>

       
        <div
          className="
            relative
            mt-[42px]
            h-[300px]
            w-full
            overflow-hidden
            rounded-[8px]

            sm:mt-[46px]
            sm:h-[340px]

            md:h-[390px]

            lg:mt-[50px]
            lg:h-[430px]

            xl:h-[445px]
          "
        >
          {/* FEATURED IMAGE */}
          <img
            src="/images/P0.jpg"
            alt="Featured commercial rooftop solar installation"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out

              hover:scale-[1.015]
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-[#061C2A]/45
            "
          />

          {/* FEATURED CONTENT */}
          <div
            className="
              absolute
              bottom-[22px]
              left-[20px]
              right-[20px]

              sm:bottom-[25px]
              sm:left-[26px]
              sm:right-[26px]

              md:bottom-[28px]
              md:left-[30px]
              md:right-[30px]

              lg:bottom-[30px]
              lg:left-[34px]
              lg:right-[34px]
            "
          >
            <div
              className="
                mb-[10px]
                h-[7px]
                w-[260px]
                rounded-full
                bg-[#FFC329]

                sm:w-[350px]

                md:w-[500px]

                lg:w-[650px]

                xl:w-[715px]
              "
            />

            <p
              className="
                m-0
                text-[10px]
                font-semibold
                leading-none
                text-white

                sm:text-[11px]

                md:text-[12px]
              "
            >
              Featured Project
            </p>

            <h3
              className="
                m-0
                mt-[8px]
                max-w-[700px]
                text-[20px]
                font-bold
                leading-[1.15]
                tracking-[-0.015em]
                text-white

                sm:text-[23px]

                md:text-[26px]

                lg:text-[29px]

                xl:text-[31px]
              "
            >
              Commercial Rooftop — [Location Placeholder]
            </h3>

            <div
              className="
                mt-[13px]
                flex
                flex-wrap
                items-center
                gap-x-[12px]
                gap-y-[8px]
                text-[9px]
                font-medium
                leading-[1.2]
                text-[#C0CCD1]

                sm:text-[10px]

                md:text-[11px]

                lg:text-[12px]
              "
            >
              <span>
                <span className="text-[#FFC329]">⚡</span>{" "}
                [XX] kWp System
              </span>

              <span className="hidden text-[#5A707B] sm:inline">
                |
              </span>

              <span>
                <span className="text-[#12B978]">📍</span>{" "}
                [City, Country]
              </span>

              <span className="hidden text-[#5A707B] sm:inline">
                |
              </span>

              <span>
                <span className="text-[#12B978]">✓</span>{" "}
                On-Grid Hybrid
              </span>
            </div>

            {/* CASE STUDY */}
            <button
              type="button"
              className="
                m-0
                mt-[12px]
                text-[10px]
                font-semibold
                leading-none
                text-[#FFC329]
                transition-all
                duration-200

                sm:text-[11px]

                md:text-[12px]

                hover:translate-x-[3px]
              "
            >
              View Case Study →
            </button>
          </div>
        </div>

        
        <div
          className="
            mt-[14px]
            grid
            grid-cols-1
            gap-[25px]

            sm:grid-cols-2
            sm:gap-[18px]

            lg:grid-cols-3
            lg:gap-[20px]

            xl:gap-[21px]
          "
        >
          {projects.map((project) => (
            <article
              key={project.category}
              className="
                min-w-0
                group
              "
            >
              <div
                className="
                  relative
                  h-[210px]
                  w-full
                  overflow-hidden
                  rounded-[8px]
                  bg-[#102B3A]

                  sm:h-[220px]

                  md:h-[250px]

                  lg:h-[275px]

                  xl:h-[280px]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out

                    group-hover:scale-[1.035]
                  "
                />
              </div>

              <p
                className="
                  m-0
                  mt-[12px]
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-[1.2]
                  tracking-[0.08em]
                  text-[#10B777]

                  sm:text-[11px]

                  md:text-[12px]
                "
              >
                {project.category}
              </p>

              <h3
                className="
                  m-0
                  mt-[7px]
                  text-[14px]
                  font-semibold
                  leading-[1.3]
                  text-white

                  sm:text-[15px]

                  md:text-[16px]

                  lg:text-[17px]
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  m-0
                  mt-[7px]
                  text-[10px]
                  font-normal
                  leading-[1.45]
                  text-[#A8B7BE]

                  sm:text-[11px]

                  md:text-[12px]
                "
              >
                {project.meta}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;