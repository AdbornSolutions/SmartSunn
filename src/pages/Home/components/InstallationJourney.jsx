function InstallationJourney() { 
  const steps = [ 
    { 
      number: "1", 
      title: "Consultation", 
      description: "Free site assessment and energy audit.", 
    }, 
    { 
      number: "2", 
      title: "Design", 
      description: "Custom system engineering.", 
    }, 
    { 
      number: "3", 
      title: "Proposal", 
      description: "Detailed quote and ROI analysis.", 
    }, 
    { 
      number: "4", 
      title: "Permits", 
      description: "We handle all paperwork.", 
      active: true, 
    }, 
    { 
      number: "5", 
      title: "Installation", 
      description: "Professional mounting and wiring.", 
    }, 
    { 
      number: "6", 
      title: "Inspection", 
      description: "Safety and code compliance.", 
    }, 
    { 
      number: "7", 
      title: "Activation", 
      description: "Grid connection and startup.", 
    }, 
    { 
      number: "8", 
      title: "Training", 
      description: "System walkthrough for you.", 
    }, 
    { 
      number: "9", 
      title: "Monitoring", 
      description: "App setup and live tracking.", 
    }, 
    { 
      number: "10", 
      title: "Support", 
      description: "Ongoing maintenance forever.", 
    }, 
  ]; 
 
  return ( 
    <section className="w-full bg-white px-[20px] py-[70px] sm:px-[28px] sm:py-[75px] md:px-[40px] md:py-[80px] lg:px-[50px] lg:py-[85px]"> 
 
      {/* FIXED DESIGN WIDTH */} 
      <div className="mx-auto w-full max-w-[1310px]"> 
 
       
        <div className="text-center"> 
 
          <p className="!m-0 !text-[13px] !font-medium !leading-none !text-[#00A87A] sm:!text-[14px]"> 
            Installation 
          </p> 
 
          <h2 className="!m-0 !mt-[32px] !text-[32px] !font-medium !leading-[1.15] !tracking-[-0.8px] !text-[#050505] sm:!text-[35px] md:!text-[37px]"> 
            Your Solar Installation Journey 
          </h2> 
 
          <p className="!m-0 !mt-[27px] !text-[13px] !leading-[1.5] !text-[#6D7479] sm:!text-[14px] md:!text-[15px]"> 
            A seamless, transparent process from first consultation to system activation. 
          </p> 
 
        </div> 
 
       
        <div className="mt-[78px] grid grid-cols-2 gap-x-[24px] gap-y-[55px] sm:grid-cols-2 sm:gap-x-[35px] md:grid-cols-5 md:gap-x-[18px] md:gap-y-[55px] lg:grid-cols-10 lg:gap-x-0"> 
 
          {steps.map((step, index) => ( 
 
            <div 
              key={step.number} 
              className="group relative min-w-0 text-center" 
            > 
 
              {/* CONNECTING LINE - DESKTOP */} 
              {index < steps.length - 1 && ( 
                <div className="absolute left-1/2 top-[22px] hidden h-[3px] w-full bg-[#E8EBE8] lg:block" /> 
              )} 
 
             
 
              <div className="relative z-10 mx-auto flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#E3E5E2] bg-[#F4F5F2] transition-all duration-300 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.08] group-hover:border-[#FFC329] group-hover:bg-[#FFC329] group-hover:shadow-[0_5px_15px_rgba(255,195,41,0.25)] sm:h-[46px] sm:w-[46px] md:h-[46px] md:w-[46px] lg:h-[46px] lg:w-[46px]"> 
 
                <span 
                  className={`!text-[12px] !font-normal transition-colors duration-300 ${ 
                    step.active 
                      ? "!text-[#061E2D]" 
                      : "!text-[#7E8583] group-hover:!text-[#061E2D]" 
                  }`} 
                > 
                  {step.number} 
                </span> 
 
              </div> 
 
            
 
              <h3 
                className={`!m-0 !mt-[17px] !text-[12px] !font-semibold !leading-[1.25] transition-all duration-300 sm:!text-[13px] ${ 
                  step.active 
                    ? "!text-[#061E2D]" 
                    : "!text-[#202625] group-hover:!text-[#00A87A]" 
                }`} 
              > 
                {step.title} 
              </h3> 
 
             
              <p className="!m-0 !mx-auto !mt-[10px] max-w-[105px] !text-[9px] !leading-[1.35] !text-[#7B817F] transition-colors duration-300 group-hover:!text-[#4E5754] sm:!text-[10px] md:max-w-[112px]"> 
                {step.description} 
              </p> 
 
            </div> 
 
          ))} 
 
        </div> 
 
      </div> 
 
    </section> 
  ); 
} 
 
export default InstallationJourney;