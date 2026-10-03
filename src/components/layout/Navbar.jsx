import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/", id: "home" },
  { label: "About Us", to: "/about-us", id: "about" },
  { label: "Services", to: "/services", id: "services" },
  { label: "Projects", to: "/projects", id: "projects" },
  { label: "Contact Us", to: "/contact-us", id: "contact" },
];

const LOGO = "/images/logo-smartsun.png";

function QuoteArrow({ className = "h-[21px] w-[21px]" }) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="10" strokeWidth="1.4" />
      <path
        d="M7.7 14.3 14.3 7.7M8.4 7.7h5.9v5.9"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const active =
    navItems.find((item) =>
      item.to === "/"
        ? pathname === "/"
        : pathname.startsWith(item.to)
    )?.id ?? "";

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const desktop = window.matchMedia("(min-width: 1024px)");

    const onResize = (event) => {
      if (event.matches) setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const linkClass = (id) =>
    `group relative whitespace-nowrap font-manrope text-[14.5px] font-medium transition-colors duration-300 ${
      active === id
        ? "text-[#F5B61A]"
        : "text-[#0B1F2E] hover:text-[#F5B61A]"
    }`;

  return (
    <header className="relative z-[70] w-full bg-white">
      <nav
        className="
          mx-auto
          flex
          h-[76px]
          w-full
          max-w-[1160px]
          items-center
          justify-between
          px-5
          sm:px-7
          lg:grid
          lg:h-[78px]
          lg:grid-cols-[1fr_auto_1fr]
          lg:px-7
          xl:px-0
        "
      >
        
        <Link
          to="/"
          aria-label="SmartSun Solar home"
          onClick={closeMenu}
          className="
            group
            relative
            flex
            shrink-0
            items-center
            justify-self-start
            rounded-full
            outline-none
          "
        >
          {/* Logo glow */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[54px]
              w-[112px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#FFC629]/15
              blur-xl
              transition-all
              duration-300
              group-hover:h-[61px]
              group-hover:w-[125px]
              group-hover:bg-[#FFC629]/25
              group-active:h-[66px]
              group-active:w-[135px]
              group-active:bg-[#FFC629]/40
            "
          />

          {/* Logo */}
          <img
            src={LOGO}
            alt="SmartSun Solar"
            className="
              relative
              z-10
              h-[69px]
              w-auto
              object-contain
              transition-transform
              duration-300
              group-hover:scale-[1.03]
              group-active:scale-[0.97]
              sm:h-[59px]
              lg:h-[68px]
            "
          />
        </Link>

       
        <div
          className="
            hidden
            items-center
            gap-5
            justify-self-center
            lg:flex
            xl:gap-[34px]
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={linkClass(item.id)}
            >
              {item.label}

              {/* Yellow underline */}
              <span
                aria-hidden="true"
                className={`
                  absolute
                  -bottom-2
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#F5B61A]
                  transition-all
                  duration-300
                  ${
                    active === item.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }
                `}
              />
            </Link>
          ))}
        </div>

       
        <Link
          to="/contact-us"
          className="
            hidden
            h-[46px]
            items-center
            gap-2
            justify-self-end
            whitespace-nowrap
            rounded-full
            bg-[#FFC629]
            pl-[20px]
            pr-[16px]
            font-manrope
            text-[13.5px]
            font-semibold
            text-[#0B1F2E]
            shadow-[0_4px_14px_rgba(255,198,41,0.12)]
            transition-all
            duration-300
            hover:bg-[#FFD34D]
            hover:shadow-[0_6px_20px_rgba(255,198,41,0.22)]
            active:scale-[0.97]
            lg:inline-flex
          "
        >
          Get Quote
          <QuoteArrow />
        </Link>

     
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="
            -mr-2
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            transition-colors
            duration-300
            hover:bg-[#FFC629]/10
            active:bg-[#FFC629]/20
            lg:hidden
          "
        >
          <span className="flex flex-col gap-[6px]">
            <span className="h-[2px] w-[25px] rounded-full bg-[#0B1F2E]" />
            <span className="h-[2px] w-[25px] rounded-full bg-[#0B1F2E]" />
            <span className="h-[2px] w-[25px] rounded-full bg-[#0B1F2E]" />
          </span>
        </button>
      </nav>

      
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[55]
          bg-black/50
          transition-opacity
          duration-300
          lg:hidden
          ${
            open
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

     
      <aside
        id="mobile-menu"
        aria-hidden={!open}
        className={`
          fixed
          inset-y-0
          left-0
          z-[60]
          flex
          w-[85%]
          max-w-[370px]
          flex-col
          overflow-y-auto
          bg-[#F7F7F7]
          shadow-[8px_0_30px_rgba(0,0,0,0.25)]
          transition-[transform,visibility]
          duration-300
          ease-out
          lg:hidden
          ${
            open
              ? "visible translate-x-0"
              : "invisible -translate-x-full"
          }
        `}
      >
        {/* Mobile menu header */}
        <div
          className="
            flex
            h-[76px]
            shrink-0
            items-center
            justify-between
            px-[17px]
          "
        >
          <Link
            to="/"
            aria-label="SmartSun Solar home"
            onClick={closeMenu}
            className="flex items-center outline-none"
          >
            <img
              src={LOGO}
              alt="SmartSun Solar"
              className="h-[50px] w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="
              flex
              h-[34px]
              w-[46px]
              items-center
              justify-center
              rounded-[3px]
              border
              border-[#4B5563]
              text-[#0B1F2E]
              transition-colors
              duration-300
              hover:border-[#F5B61A]
              hover:text-[#F5B61A]
              active:scale-95
            "
          >
            <svg
              viewBox="0 0 16 16"
              className="h-[14px] w-[14px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m2.5 2.5 11 11m0-11-11 11" />
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        <nav
          aria-label="Mobile"
          className="flex flex-col px-[17px] pb-8 pt-[8px]"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.id}
              to={item.to}
              onClick={closeMenu}
              style={{
                transitionDelay: open
                  ? `${90 + index * 45}ms`
                  : "0ms",
              }}
              className={`
                py-[8px]
                font-manrope
                text-[15px]
                font-medium
                transition-all
                duration-300
                ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-3 opacity-0"
                }
                ${
                  active === item.id
                    ? "text-[#F5B61A]"
                    : "text-[#0B1F2E] hover:text-[#F5B61A]"
                }
              `}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Get Quote */}
          <Link
            to="/contact-us"
            onClick={closeMenu}
            style={{
              transitionDelay: open
                ? `${90 + navItems.length * 45}ms`
                : "0ms",
            }}
            className={`
              mt-4
              inline-flex
              h-[44px]
              w-fit
              items-center
              gap-2
              rounded-full
              bg-[#FFC629]
              pl-[20px]
              pr-[15px]
              font-manrope
              text-[13.5px]
              font-semibold
              text-[#0B1F2E]
              transition-all
              duration-300
              hover:bg-[#FFD34D]
              active:scale-[0.97]
              ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }
            `}
          >
            Get Quote
            <QuoteArrow />
          </Link>
        </nav>
      </aside>
    </header>
  );
}

export default Navbar;