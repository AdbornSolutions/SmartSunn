// Two-line heading: dark first line + yellow second line
function ServiceTitle({ dark, accent }) {
  return (
    <h1 className="font-manrope text-[28px] font-semibold leading-[38px] text-[#101E33] sm:text-[32px] sm:leading-[44px] lg:text-[36px] lg:leading-[50px]">
      {dark}
      <br />
      <span className="text-[#FFC629]">{accent}</span>
    </h1>
  );
}

export default ServiceTitle;
