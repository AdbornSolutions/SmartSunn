// import { Link } from "react-router-dom";

// function Projects() {
//   const projects = [
//     {
//       category: "Residential",
//       title: "Residential Project — Location Placeholder",
//       meta: "[XX] kWp · On-Grid · Est. [XXX] kWh/month",
//       image: "/images/P1.jpg",
//     },
//     {
//       category: "Industrial",
//       title: "Industrial Project — Location Placeholder",
//       meta: "[XXX] kWp · Grid-Tied · Est. [XXX] kWh/month",
//       image: "/images/P2.jpg",
//     },
//     {
//       category: "Commercial",
//       title: "Commercial Project — Location Placeholder",
//       meta: "[XXX] kWp · Hybrid · Est. [XXX] kWh/month",
//       image: "/images/P3.png",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#061C2A]">
//       {/* =====================================================
//           MAIN CONTAINER
//       ====================================================== */}

//       <div
//         className="
//           mx-auto
//           w-full
//           max-w-[1500px]
//           px-[20px]
//           pb-[55px]
//           pt-[55px]

//           sm:px-[28px]
//           sm:pb-[60px]
//           sm:pt-[60px]

//           md:px-[40px]
//           md:pb-[65px]
//           md:pt-[68px]

//           lg:px-[55px]
//           lg:pb-[70px]
//           lg:pt-[75px]

//           xl:px-[20px]
//           xl:pb-[75px]
//           xl:pt-[78px]
//         "
//       >
//         {/* =====================================================
//             HEADER
//         ====================================================== */}

//         <div>
//           {/* SMALL LABEL */}

//           <p
//             className="
//               m-0
//               text-[11px]
//               font-semibold
//               uppercase
//               leading-[1.2]
//               tracking-[0.12em]
//               text-[#10B777]

//               sm:text-[12px]
//               md:text-[13px]
//               lg:text-[14px]
//             "
//           >
//             Featured Projects
//           </p>

//           {/* MAIN HEADING */}

//           <h2
//             className="
//               m-0
//               mt-[18px]
//               text-[30px]
//               font-bold
//               leading-[1.1]
//               tracking-[-0.025em]
//               text-white

//               sm:mt-[20px]
//               sm:text-[34px]

//               md:text-[38px]

//               lg:mt-[22px]
//               lg:text-[42px]

//               xl:text-[44px]
//             "
//           >
//             Our Installations
//           </h2>

//           {/* DESCRIPTION */}

//           <p
//             className="
//               m-0
//               mt-[14px]
//               max-w-[850px]
//               text-[12px]
//               font-normal
//               leading-[1.55]
//               text-[#A8B7BE]

//               sm:text-[13px]
//               md:text-[14px]
//               lg:text-[15px]
//             "
//           >
//             Explore our portfolio of completed solar installations across
//             residential, commercial, and industrial sectors.
//           </p>
//         </div>

//         {/* =====================================================
//             FEATURED PROJECT
//         ====================================================== */}

//         <div
//           className="
//             relative
//             mt-[36px]
//             h-[300px]
//             w-full
//             overflow-hidden
//             rounded-[8px]

//             sm:mt-[40px]
//             sm:h-[340px]

//             md:h-[390px]

//             lg:mt-[44px]
//             lg:h-[430px]

//             xl:h-[445px]
//           "
//         >
//           {/* FEATURED IMAGE */}

//           <img
//             src="/images/P0.jpg"
//             alt="Featured commercial rooftop solar installation"
//             loading="lazy"
//             decoding="async"
//             className="
//               absolute
//               inset-0
//               h-full
//               w-full
//               object-cover
//               transition-transform
//               duration-700
//               ease-out
//               hover:scale-[1.015]
//             "
//           />

//           {/* DARK OVERLAY */}

//           <div
//             className="
//               absolute
//               inset-0
//               bg-[#061C2A]/45
//             "
//           />

//           {/* FEATURED CONTENT */}

//           <div
//             className="
//               absolute
//               bottom-[20px]
//               left-[18px]
//               right-[18px]

//               sm:bottom-[23px]
//               sm:left-[24px]
//               sm:right-[24px]

//               md:bottom-[26px]
//               md:left-[28px]
//               md:right-[28px]

//               lg:bottom-[28px]
//               lg:left-[32px]
//               lg:right-[32px]
//             "
//           >
//             {/* YELLOW LINE */}

//             <div
//               className="
//                 mb-[9px]
//                 h-[6px]
//                 w-[190px]
//                 rounded-full
//                 bg-[#FFC329]

//                 sm:w-[300px]

//                 md:w-[430px]

//                 lg:w-[580px]

//                 xl:w-[680px]
//               "
//             />

//             {/* LABEL */}

//             <p
//               className="
//                 m-0
//                 text-[10px]
//                 font-semibold
//                 leading-none
//                 text-white

//                 sm:text-[11px]
//                 md:text-[12px]
//               "
//             >
//               Featured Project
//             </p>

//             {/* TITLE */}

//             <h3
//               className="
//                 m-0
//                 mt-[7px]
//                 max-w-[700px]
//                 text-[20px]
//                 font-bold
//                 leading-[1.15]
//                 tracking-[-0.015em]
//                 text-white

//                 sm:text-[23px]
//                 md:text-[26px]
//                 lg:text-[29px]
//                 xl:text-[31px]
//               "
//             >
//               Commercial Rooftop — [Location Placeholder]
//             </h3>

//             {/* META */}

//             <div
//               className="
//                 mt-[11px]
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-x-[12px]
//                 gap-y-[7px]
//                 text-[9px]
//                 font-medium
//                 leading-[1.2]
//                 text-[#C0CCD1]

//                 sm:text-[10px]
//                 md:text-[11px]
//                 lg:text-[12px]
//               "
//             >
//               <span>
//                 <span className="text-[#FFC329]">⚡</span>{" "}
//                 [XX] kWp System
//               </span>

//               <span className="hidden text-[#5A707B] sm:inline">
//                 |
//               </span>

//               <span>
//                 <span className="text-[#12B978]">📍</span>{" "}
//                 [City, Country]
//               </span>

//               <span className="hidden text-[#5A707B] sm:inline">
//                 |
//               </span>

//               <span>
//                 <span className="text-[#12B978]">✓</span>{" "}
//                 On-Grid Hybrid
//               </span>
//             </div>

//             {/* =================================================
//                 CASE STUDY -> CONTACT PAGE
//             ================================================== */}

//             <Link
//               to="/contact-us"
//               className="
//                 inline-flex
//                 items-center
//                 m-0
//                 mt-[13px]
//                 text-[10px]
//                 font-semibold
//                 leading-none
//                 text-[#FFC329]
//                 transition-all
//                 duration-300
//                 hover:translate-x-[4px]
//                 hover:text-[#FFD34D]

//                 sm:text-[11px]
//                 md:text-[12px]
//               "
//             >
//               View Case Study →
//             </Link>
//           </div>
//         </div>

//         {/* =====================================================
//             PROJECT CARDS
//         ====================================================== */}

//         <div
//           className="
//             mt-[22px]
//             grid
//             grid-cols-1
//             gap-[32px]

//             sm:mt-[24px]
//             sm:grid-cols-2
//             sm:gap-[24px]

//             lg:mt-[26px]
//             lg:grid-cols-3
//             lg:gap-[24px]

//             xl:gap-[26px]
//           "
//         >
//           {projects.map((project) => (
//             <article
//               key={project.category}
//               className="
//                 group
//                 min-w-0
//               "
//             >
//               {/* =================================================
//                   PROJECT IMAGE
//               ================================================== */}

//               <div
//                 className="
//                   relative
//                   h-[210px]
//                   w-full
//                   overflow-hidden
//                   rounded-[8px]
//                   bg-[#102B3A]

//                   sm:h-[220px]

//                   md:h-[250px]

//                   lg:h-[275px]

//                   xl:h-[280px]
//                 "
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   loading="lazy"
//                   decoding="async"
//                   className="
//                     h-full
//                     w-full
//                     object-cover
//                     transition-transform
//                     duration-500
//                     ease-out
//                     group-hover:scale-[1.035]
//                   "
//                 />
//               </div>

//               <div className="px-[2px]">
//   {/* CATEGORY */}
//   <p
//     className="
//       m-0
//       mt-[28px]
//       text-[10px]
//       font-semibold
//       leading-[1.2]
//       tracking-[0.08em]
//       text-[#10B777]

//       sm:mt-[28px]
//       sm:text-[11px]

//       md:mt-[30px]
//       md:text-[12px]
//     "
//   >
//     {project.category}
//   </p>

//   {/* TITLE */}
//   <h3
//     className="
//       m-0
//       mt-[7px]
//       max-w-[360px]
//       text-[14px]
//       font-semibold
//       leading-[1.3]
//       text-white

//       sm:text-[16px]

//       md:text-[17px]

//       lg:text-[18px]
//     "
//   >
//     {project.title}
//   </h3>

//   {/* META */}
//   <p
//     className="
//       m-0
//       mt-[6px]
//       text-[10px]
//       font-normal
//       leading-[1.45]
//       text-[#10B777]

//       sm:text-[11px]

//       md:text-[12px]
//     "
//   >
//     {project.meta}
//   </p>
// </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      category: "Residential",
      title: "Residential Project — Location Placeholder",
      meta: "[XX] kWp · On-Grid · Est. [XXX] kWh/month",
      image: "/images/P1.jpg",
    },
    {
      category: "Industrial",
      title: "Industrial Project — Location Placeholder",
      meta: "[XXX] kWp · Grid-Tied · Est. [XXX] kWh/month",
      image: "/images/P2.jpg",
    },
    {
      category: "Commercial",
      title: "Commercial Project — Location Placeholder",
      meta: "[XXX] kWp · Hybrid · Est. [XXX] kWh/month",
      image: "/images/P3.png",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#061C2A]">
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-[20px]
          pb-[55px]
          pt-[55px]

          sm:px-[28px]
          sm:pb-[60px]
          sm:pt-[60px]

          md:px-[40px]
          md:pb-[65px]
          md:pt-[68px]

          lg:px-[55px]
          lg:pb-[70px]
          lg:pt-[75px]

          xl:px-[20px]
          xl:pb-[75px]
          xl:pt-[78px]

          min-[1600px]:max-w-[1600px]
          min-[1600px]:px-[40px]
          min-[1600px]:pb-[90px]
          min-[1600px]:pt-[90px]
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

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

              min-[1600px]:text-[15px]
            "
          >
            Featured Projects
          </p>

          {/* MAIN HEADING */}

          <h2
            className="
              m-0
              mt-[18px]
              text-[30px]
              font-bold
              leading-[1.1]
              tracking-[-0.025em]
              text-white

              sm:mt-[20px]
              sm:text-[34px]

              md:text-[38px]

              lg:mt-[22px]
              lg:text-[42px]

              xl:text-[44px]

              min-[1600px]:mt-[24px]
              min-[1600px]:text-[52px]
            "
          >
            Our Installations
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              m-0
              mt-[14px]
              max-w-[850px]
              text-[12px]
              font-normal
              leading-[1.55]
              text-[#A8B7BE]

              sm:text-[13px]

              md:text-[14px]

              lg:text-[15px]

              min-[1600px]:mt-[18px]
              min-[1600px]:max-w-[1000px]
              min-[1600px]:text-[17px]
              min-[1600px]:leading-[1.6]
            "
          >
            Explore our portfolio of completed solar installations across
            residential, commercial, and industrial sectors.
          </p>
        </div>

        {/* =====================================================
            FEATURED PROJECT
        ====================================================== */}

        <div
          className="
            relative
            mt-[36px]
            h-[300px]
            w-full
            overflow-hidden
            rounded-[8px]

            sm:mt-[40px]
            sm:h-[340px]

            md:h-[390px]

            lg:mt-[44px]
            lg:h-[430px]

            xl:h-[445px]

            min-[1600px]:mt-[52px]
            min-[1600px]:h-[500px]
            min-[1600px]:rounded-[10px]
          "
        >
          {/* FEATURED IMAGE */}

          <img
            src="/images/P0.jpg"
            alt="Featured commercial rooftop solar installation"
            loading="lazy"
            decoding="async"
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
              bottom-[20px]
              left-[18px]
              right-[18px]

              sm:bottom-[23px]
              sm:left-[24px]
              sm:right-[24px]

              md:bottom-[26px]
              md:left-[28px]
              md:right-[28px]

              lg:bottom-[28px]
              lg:left-[32px]
              lg:right-[32px]

              min-[1600px]:bottom-[34px]
              min-[1600px]:left-[42px]
              min-[1600px]:right-[42px]
            "
          >
            {/* YELLOW LINE */}

            <div
              className="
                mb-[9px]
                h-[6px]
                w-[190px]
                rounded-full
                bg-[#FFC329]

                sm:w-[300px]

                md:w-[430px]

                lg:w-[580px]

                xl:w-[680px]

                min-[1600px]:mb-[12px]
                min-[1600px]:h-[7px]
                min-[1600px]:w-[760px]
              "
            />

            {/* LABEL */}

            <p
              className="
                m-0
                text-[10px]
                font-semibold
                leading-none
                text-white

                sm:text-[11px]

                md:text-[12px]

                min-[1600px]:text-[14px]
              "
            >
              Featured Project
            </p>

            {/* TITLE */}

            <h3
              className="
                m-0
                mt-[7px]
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

                min-[1600px]:mt-[9px]
                min-[1600px]:max-w-[850px]
                min-[1600px]:text-[36px]
              "
            >
              Commercial Rooftop — [Location Placeholder]
            </h3>

            {/* META */}

            <div
              className="
                mt-[11px]
                flex
                flex-wrap
                items-center
                gap-x-[12px]
                gap-y-[7px]
                text-[9px]
                font-medium
                leading-[1.2]
                text-[#C0CCD1]

                sm:text-[10px]

                md:text-[11px]

                lg:text-[12px]

                min-[1600px]:mt-[14px]
                min-[1600px]:gap-x-[16px]
                min-[1600px]:gap-y-[8px]
                min-[1600px]:text-[14px]
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

            {/* CASE STUDY -> CONTACT PAGE */}

            <Link
              to="/contact-us"
              className="
                inline-flex
                items-center
                m-0
                mt-[13px]
                text-[10px]
                font-semibold
                leading-none
                text-[#FFC329]
                transition-all
                duration-300
                hover:translate-x-[4px]
                hover:text-[#FFD34D]

                sm:text-[11px]

                md:text-[12px]

                min-[1600px]:mt-[16px]
                min-[1600px]:text-[14px]
              "
            >
              View Case Study →
            </Link>
          </div>
        </div>

        {/* =====================================================
            PROJECT CARDS
        ====================================================== */}

        <div
          className="
            mt-[22px]
            grid
            grid-cols-1
            gap-[32px]

            sm:mt-[24px]
            sm:grid-cols-2
            sm:gap-[24px]

            lg:mt-[26px]
            lg:grid-cols-3
            lg:gap-[24px]

            xl:gap-[26px]

            min-[1600px]:mt-[32px]
            min-[1600px]:gap-[30px]
          "
        >
          {projects.map((project) => (
            <article
              key={project.category}
              className="
                group
                min-w-0
              "
            >
              {/* =================================================
                  PROJECT IMAGE
              ================================================== */}

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

                  min-[1600px]:h-[360px]
                  min-[1600px]:rounded-[9px]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
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

              {/* =================================================
                  PROJECT CONTENT
              ================================================== */}

              <div
                className="
                  px-[2px]
                  pt-[14px]

                  sm:pt-[16px]

                  md:pt-[17px]

                  min-[1600px]:pt-[18px]
                "
              >
                {/* CATEGORY */}

                <p
                  className="
                    m-0
                    text-[10px]
                    font-semibold
                    leading-[1.2]
                    tracking-[0.08em]
                    text-[#10B777]

                    sm:text-[11px]

                    md:text-[12px]

                    min-[1600px]:text-[13px]
                  "
                >
                  {project.category}
                </p>

                {/* TITLE */}

                <h3
                  className="
                    m-0
                    mt-[7px]
                    max-w-[360px]
                    text-[15px]
                    font-semibold
                    leading-[1.3]
                    text-white

                    sm:text-[16px]

                    md:text-[17px]

                    lg:text-[18px]

                    min-[1600px]:mt-[8px]
                    min-[1600px]:max-w-[430px]
                    min-[1600px]:text-[19px]
                  "
                >
                  {project.title}
                </h3>

                {/* META */}

                <p
                  className="
                    m-0
                    mt-[6px]
                    text-[10px]
                    font-normal
                    leading-[1.45]
                    text-[#10B777]

                    sm:text-[11px]

                    md:text-[12px]

                    min-[1600px]:mt-[7px]
                    min-[1600px]:text-[13px]
                  "
                >
                  {project.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;