// Small pill with a yellow dot, e.g. "WHO WE ARE"
function SectionTag({ children }) {
  return (
    <span className="inline-flex h-[39px] items-center gap-[9px] rounded-full bg-[#F1F1F1] px-[15px] font-inter text-[12.5px] font-medium uppercase tracking-[0.1em] text-[#2B2B2B]">
      <span className="h-[7px] w-[7px] rounded-full bg-[#FFC629]" />
      {children}
    </span>
  );
}

export default SectionTag;
