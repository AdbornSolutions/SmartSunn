function FinalCTA() {
  return (
    <section className="w-full overflow-hidden">

      
      {/* ================= CTA HERO ================= */}
      <section
        className="relative h-[506px] w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
        }}
      >

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#061E2D]/65" />

        {/* Extra bottom darkening */}
        <div className="absolute inset-x-0 bottom-0 h-[190px] bg-[#061E2D]/35" />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[760px] flex-col items-center text-center">

          {/* Heading */}
          <h1 className="!m-0 !mt-[53px] !max-w-[650px] !text-[52px] !font-bold !leading-[1.27] !tracking-[-0.035em] !text-white">
            Ready to Turn Sunlight
            <br />
            into Long-Term Savings?
          </h1>

          {/* Description */}
          <p className="!m-0 !mt-[36px] !max-w-[670px] !text-[17px] !font-normal !leading-[1.45] !text-[#D0D1CB]">
            Join forward-thinking homeowners and businesses investing in clean, reliable solar
            <br />
            energy.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="mt-[37px] flex items-center justify-center gap-[13px]">

            {/* Yellow */}
            <button
              type="button"
              className="flex h-[54px] min-w-[190px] items-center justify-center rounded-full bg-[#FFC329] px-[27px] text-[15px] font-bold leading-none text-[#101D18] transition-transform duration-200 hover:scale-[1.02]"
            >
              Get a Solar Quote
            </button>

            {/* Outline */}
            <button
              type="button"
              className="flex h-[54px] min-w-[275px] items-center justify-center rounded-full border border-[#788078] bg-transparent px-[28px] text-[14px] font-semibold leading-none text-[#18241F] transition-colors duration-200 hover:border-white hover:text-white"
            >
              Schedule a Site Assessment
            </button>

          </div>

          {/* Green CTA */}
          <button
            type="button"
            className="mt-[15px] flex h-[53px] min-w-[251px] items-center justify-center rounded-full bg-[#12B878] px-[29px] text-[15px] font-bold leading-none text-white shadow-[0_8px_25px_rgba(18,184,120,0.18)] transition-transform duration-200 hover:scale-[1.02]"
          >
            Speak with a Solar Expert
          </button>

        </div>
      </section>

    </section>
  );
}

export default FinalCTA;