import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowCircle from "../common/ArrowCircle";

// id = section id on the Home page
const navItems = [
  { label: "Home", to: "/", id: "home" },
  { label: "About Us", to: "/about-us", id: "about" },
  { label: "Services", to: "/services", id: "services" },
  { label: "Projects", to: "/projects", id: "projects" },
  { label: "Contact Us", to: "/contact-us", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // active link = the page we are on ("/" is only Home, others match their path)
  const active =
    navItems.find((item) => (item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)))?.id ?? "";

  const linkClass = (id) =>
    `font-manrope text-[16.8px] font-medium transition-colors ${
      active === id ? "text-[#F5B61A]" : "text-[#0B1F2E] hover:text-[#F5B61A]"
    }`;

  return (
    <header className="relative z-40 w-full bg-white">
      <nav className="relative mx-auto flex h-[76px] w-full max-w-[1620px] items-center justify-between px-5 lg:h-[124px] lg:px-[22px]">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center" aria-label="SmartSun Solar home">
          <img
            src="/images/logo-smartsun.png"
            alt="SmartSun Solar"
            className="h-[44px] w-auto lg:h-[60px]"
          />
        </Link>

        {/* Desktop links (centered on the page) */}
        <div className="hidden items-center gap-[45px] lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          {navItems.map((item) => (
            <Link key={item.id} to={item.to} className={linkClass(item.id)}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact-us"
          className="hidden h-[45px] items-center gap-[10px] rounded-full bg-[#FFC629] pl-[24px] pr-[10px] font-manrope text-[15px] font-semibold text-[#0B1F2E] transition hover:bg-[#ffd24d] lg:mr-6 lg:inline-flex"
        >
          Get Quote
          <ArrowCircle variant="dark" className="h-[24px] w-[24px]" />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1F2E]/15 lg:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`h-[2px] w-5 bg-[#0B1F2E] transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 bg-[#0B1F2E] transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 bg-[#0B1F2E] transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-full border-t border-black/5 bg-white shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-[1620px] flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`${linkClass(item.id)} py-3`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-[44px] items-center justify-center gap-2 self-start rounded-full bg-[#FFC629] pl-5 pr-3 font-manrope text-[15px] font-semibold text-[#0B1F2E]"
            >
              Get Quote
              <ArrowCircle variant="dark" className="h-[24px] w-[24px]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
