// Small pill with a yellow dot, e.g. "OUR SOLAR SERVICES"
function ServiceTag({ children }) {
  return (
    <span className="inline-flex h-[35px] items-center gap-[7px] rounded-full bg-[#F1F1F1] px-[10px] font-inter text-[14px] uppercase leading-none text-[#222]">
      <span className="h-[8px] w-[8px] rounded-full bg-[#FFC629]" />
      {children}
    </span>
  );
}

export default ServiceTag;
