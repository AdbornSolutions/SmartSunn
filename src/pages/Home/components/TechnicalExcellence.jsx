function TechnicalExcellence() {
  const features = [
    {
      title: "Module Efficiency",
      description:
        "Our monocrystalline panels achieve up to 22.8% conversion efficiency using N-type TOPCon cell technology.",
      label: "Efficiency Rating",
      value: "22.8%",
      progress: "22.8%",
    },
    {
      title: "Inverter Sizing",
      description:
        "Hybrid inverters with MPPT optimization ensure maximum harvest even under partial shading conditions.",
      label: "MPPT Tracking",
      value: "99.6%",
      progress: "99%",
    },
    {
      title: "Battery Storage",
      description:
        "Lithium iron phosphate batteries provide safe, long-lasting backup power with 6,000+ charge cycles.",
      label: "Cycle Life",
      value: "6000+",
      progress: "99%",
    },
  ];

  return (
    <section className="w-full bg-[#061E2D] px-[16px] py-[55px] sm:px-[24px] sm:py-[60px] md:px-[40px] md:py-[65px] lg:px-[60px] lg:py-[70px] xl:px-[70px]">

      <div className="mx-auto w-full max-w-[1330px]">

        {/* HEADER */}
        <div className="text-center">

          <p className="!m-0 !text-[14px] !font-medium !tracking-[0.5px] !text-[#00C98D] sm:!text-[15px] md:!text-[16px]">
            Technology
          </p>

          <h2 className="!m-0 !mt-[18px] !text-[30px] !font-semibold !leading-[1.15] !tracking-[-0.7px] !text-white sm:!mt-[20px] sm:!text-[34px] md:!mt-[22px] md:!text-[36px] lg:!mt-[26px] lg:!text-[40px]">
            Technical Excellence
          </h2>

          <p className="!m-0 !mt-[16px] !text-[14px] !leading-[1.5] !text-[#8797A3] sm:!mt-[18px] sm:!text-[15px] md:!mt-[20px] md:!text-[16px]">
            Explore the advanced engineering behind our solar systems.
          </p>

        </div>

        {/* CARDS */}
        <div className="mt-[42px] grid grid-cols-1 gap-[16px] sm:mt-[48px] sm:gap-[18px] md:mt-[55px] md:grid-cols-2 md:gap-[18px] lg:mt-[65px] lg:grid-cols-3 lg:gap-[20px] xl:mt-[70px]">

          {features.map((item) => (
            <div
              key={item.title}
              className="min-h-[270px] rounded-[14px] border border-[#21434D] bg-[#08343C] px-[20px] py-[22px] sm:min-h-[280px] sm:px-[22px] sm:py-[24px] md:min-h-[285px] md:px-[23px] lg:h-[302px] lg:min-h-0 lg:px-[24px] lg:py-[25px]"
            >

              {/* TITLE */}
              <h3 className="!m-0 !text-[21px] !font-semibold !leading-[1.2] !text-white sm:!text-[22px] md:!text-[23px] lg:!text-[25px]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="!m-0 !mt-[18px] !text-[14px] !leading-[1.55] !text-[#82939D] sm:!mt-[20px] sm:!text-[15px] md:!mt-[22px] md:!text-[15px] lg:!mt-[24px] lg:!text-[16px]">
                {item.description}
              </p>

              {/* STATS */}
              <div className="mt-[42px] sm:mt-[48px] md:mt-[52px] lg:mt-[60px]">

                <div className="flex items-center justify-between gap-[12px]">

                  <span className="!text-[13px] !text-[#9AA7AE] sm:!text-[14px] md:!text-[15px] lg:!text-[16px]">
                    {item.label}
                  </span>

                  <span className="!text-[14px] !font-semibold !text-[#FFC329] sm:!text-[15px] lg:!text-[16px]">
                    {item.value}
                  </span>

                </div>

                {/* PROGRESS BAR */}
                <div className="mt-[7px] h-[9px] w-full overflow-hidden rounded-full bg-[#E5E5E5] sm:h-[10px] lg:h-[11px]">
                  <div
                    className="h-full rounded-full bg-[#FFC329]"
                    style={{ width: item.progress }}
                  />
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TechnicalExcellence;