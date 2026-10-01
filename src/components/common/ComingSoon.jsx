import { Link } from "react-router-dom";

// Temporary body for pages whose design has not been built yet.
// Delete it from the page file when you add the real sections.
function ComingSoon({ name }) {
  return (
    <section className="bg-white px-5 py-[90px] text-center">
      <p className="font-manrope text-[26px] font-semibold text-[#101E33] lg:text-[32px]">
        {name} page is being built
      </p>
      <p className="mx-auto mt-3 max-w-[520px] font-inter text-[16px] leading-[27px] text-[#666]">
        The sections for this page will be added here.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-[45px] items-center rounded-full bg-[#FFC629] px-7 font-manrope text-[15px] font-semibold text-[#0B1F2E] transition hover:bg-[#ffd24d]"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default ComingSoon;
