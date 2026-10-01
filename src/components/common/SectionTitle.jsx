// Two-line heading: dark first line + yellow second line
function SectionTitle({ dark, accent, className = "" }) {
  return (
    <h2
      className={`font-manrope text-[30px] font-semibold leading-[1.3] text-[#101E33] lg:text-[40px] lg:leading-[57px] ${className}`}
    >
      {dark}
      <br />
      <span className="text-[#FFC629]">{accent}</span>
    </h2>
  );
}

export default SectionTitle;
