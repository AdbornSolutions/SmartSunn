function Impact() {
  const impacts = [
    {
      icon: "☼",
      value: "[X, XXX]",
      color: "#FFC329",
      title: "MWh Clean Energy Generated",
      note: "[Placeholder — to be updated]",
    },
    {
      icon: "♨",
      value: "[XX%]",
      color: "#12B978",
      title: "Average Grid Reduction",
      note: "[Placeholder — to be updated]",
    },
    {
      icon: "☁",
      value: "[X, XXX]",
      color: "#FFFFFF",
      title: "Tonnes CO₂ Offset Annually",
      note: "[Placeholder — to be updated]",
    },
    {
      icon: "⌂",
      value: "[XXX]+",
      color: "#FF8A24",
      title: "Systems Successfully Installed",
      note: "[Placeholder — to be updated]",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#064238]
      "
    >
     
      <img
        src="/images/impact-bg.jpg"
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

     
      <div
        className="
          absolute
          inset-0
          bg-[#064238]/80
        "
      />

      
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1100px]
          px-[20px]
          py-[45px]

          sm:px-[28px]
          sm:py-[50px]

          md:px-[40px]
          md:py-[55px]

          lg:px-[50px]
          lg:py-[48px]

          xl:px-[60px]
        "
      >
      
        <div className="text-center">
          {/* LABEL */}
          <p
            className="
              m-0
              text-[9px]
              font-bold
              uppercase
              leading-[1.2]
              tracking-[0.15em]
              text-[#FFC329]

              sm:text-[10px]

              md:text-[11px]
            "
          >
            Our Impact
          </p>

          {/* HEADING */}
          <h2
            className="
              m-0
              mt-[11px]
              text-[24px]
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-white

              sm:mt-[12px]
              sm:text-[27px]

              md:text-[30px]

              lg:text-[32px]
            "
          >
            Powering a Cleaner Planet
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-[12px]
              max-w-[850px]
              text-[10px]
              font-normal
              leading-[1.5]
              text-[#C0D0CB]

              sm:text-[11px]

              md:text-[12px]

              lg:text-[13px]
            "
          >
            Every system we install contributes to a measurable reduction in
            carbon emissions and dependence on fossil fuels.
          </p>
        </div>

      
        <div
          className="
            mt-[32px]
            grid
            grid-cols-2
            gap-x-[20px]
            gap-y-[30px]

            sm:mt-[35px]
            sm:gap-x-[35px]
            sm:gap-y-[35px]

            md:grid-cols-4
            md:gap-x-[28px]
            md:gap-y-0

            lg:mt-[36px]
            lg:gap-x-[45px]

            xl:gap-x-[65px]
          "
        >
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="
                min-w-0
                text-center
              "
            >
             
              <div
                className="
                  mx-auto
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  text-[18px]

                  sm:h-[44px]
                  sm:w-[44px]
                  sm:text-[19px]

                  md:h-[46px]
                  md:w-[46px]
                  md:text-[20px]
                "
                style={{
                  borderColor: `${impact.color}80`,
                  color: impact.color,
                  backgroundColor: "rgba(0,0,0,0.08)",
                }}
              >
                {impact.icon}
              </div>

             
              <p
                className="
                  m-0
                  mt-[10px]
                  text-[22px]
                  font-bold
                  leading-none
                  tracking-[-0.02em]

                  sm:text-[24px]

                  md:text-[26px]

                  lg:text-[28px]
                "
                style={{
                  color: impact.color,
                }}
              >
                {impact.value}
              </p>

             
              <p
                className="
                  m-0
                  mx-auto
                  mt-[7px]
                  max-w-[150px]
                  text-[9px]
                  font-medium
                  leading-[1.3]
                  text-[#E0E8E5]

                  sm:max-w-[170px]
                  sm:text-[10px]

                  md:max-w-[180px]
                  md:text-[10px]

                  lg:text-[11px]
                "
              >
                {impact.title}
              </p>

              
              <p
                className="
                  m-0
                  mx-auto
                  mt-[4px]
                  max-w-[170px]
                  text-[7px]
                  leading-[1.35]
                  text-[#A5B8B1]

                  sm:text-[8px]

                  md:text-[8px]

                  lg:text-[9px]
                "
              >
                {impact.note}
              </p>
            </div>
          ))}
        </div>

       
        <p
          className="
            m-0
            mt-[35px]
            text-center
            text-[10px]
            italic
            leading-[1.4]
            text-[#A1B5AE]

            sm:mt-[38px]
            sm:text-[12px]

            md:mt-[40px]
            
          "
        >
          *All statistics are placeholder values and will be updated with
          verified data upon project completion.
        </p>
      </div>
    </section>
  );
}

export default Impact;