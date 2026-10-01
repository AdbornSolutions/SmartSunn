const heroImage = "/Hero.jpg";

// Dark banner at the top of inner pages (same look as the About Us banner)
function PageHero({ eyebrow, title }) {
  return (
    <section className="relative isolate flex min-h-[400px] items-start overflow-hidden bg-[#0A2236] lg:min-h-[521px]">
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,38,0.62)_0%,rgba(4,20,38,0.45)_60%,rgba(4,20,38,0.40)_100%)]" />

      <div className="relative z-10 mx-auto w-[89%] pb-14 pt-[110px] lg:pl-3 lg:pt-[195px]">
        <p className="font-inter text-[15px] font-semibold uppercase leading-[24px] text-[#FFC629] lg:text-[16px]">
          {eyebrow}
        </p>
        <h1 className="mt-[14px] max-w-[530px] font-manrope text-[36px] font-semibold leading-[1.1] text-white lg:mt-[16px] lg:text-[54px] lg:leading-[57.5px]">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default PageHero;
