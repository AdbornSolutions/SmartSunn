import { useState } from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Edit these values – everything in the footer comes from here       */
/* ------------------------------------------------------------------ */
const LOGO = "/images/footer-logo.png"; // white SmartSun logo (falls back to logo-smartsun.png)
const LOGO_FALLBACK = "/images/logo-smartsun.png";

const ABOUT_TEXT =
  "Smart Sun Solar provides customized residential, commercial and industrial solar solutions with complete support from consultation and design to installation, monitoring and maintenance.";

// Each icon opens its own social page in a new tab -> put your real page URLs here
const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "X", href: "https://x.com/" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact-us" },
];

// both phone numbers open this link (as on the reference site)
const PHONE_LINK = "https://wpmet.com/plugin/elementskit/";
const phones = ["(+91) 9371153880", "(+91) 7397995662"];
const EMAIL = "matrixinfotech.ngp@gmail.com";
const ADDRESS = "201, Achraj Retreat, above wazalwar Driving school, Raj Nagar, Sadar, Nagpur -440013";

// Google map (London Eye pin, like the reference)
const MAP_SRC = "https://maps.google.com/maps?q=London%20Eye&z=12&output=embed";

/* ------------------------------ icons ------------------------------ */
const svgProps = { viewBox: "0 0 24 24", "aria-hidden": "true" };

function SocialIcon({ name }) {
  switch (name) {
    case "Facebook":
      return (
        <svg {...svgProps} className="h-[17px] w-[17px]" fill="currentColor">
          <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.4H7.6V13h2.7v8h3.2z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...svgProps} className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...svgProps} className="h-[18px] w-[18px]" fill="currentColor">
          <path d="M4 9h3.4v11H4z" />
          <circle cx="5.7" cy="5.7" r="1.9" />
          <path d="M10 9h3.2v1.5c.5-.9 1.7-1.8 3.4-1.8 3.4 0 4 2.2 4 5.1V20h-3.4v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20H10z" />
        </svg>
      );
    default:
      return (
        <svg {...svgProps} className="h-[16px] w-[16px]" fill="currentColor">
          <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
        </svg>
      );
  }
}

function PhoneIcon() {
  return (
    <svg {...svgProps} className="h-[20px] w-[20px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...svgProps} className="h-[20px] w-[20px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="m22 8-10 6L2 8" />
    </svg>
  );
}

/* ------------------------------ footer ----------------------------- */
const heading = "font-inter text-[22px] font-semibold leading-[32px] text-white lg:text-[26.4px]";
const bodyText = "font-inter text-[16px] leading-[1.7] text-white lg:text-[17.6px] lg:leading-[28.8px]";
const goldBar = "h-[5px] w-full bg-[linear-gradient(90deg,#7A4A14_0%,#9C8A22_50%,#7A4A14_100%)]";

function Footer() {
  const [logoSrc, setLogoSrc] = useState(LOGO);
  const usingFallback = logoSrc === LOGO_FALLBACK;

  return (
    <footer className="w-full bg-black font-inter text-white">
      <div className={goldBar} />

      <div className="mx-auto w-[89%] pt-[56px] lg:pt-[104px]">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-[421fr_274fr_421fr_373fr] lg:gap-x-0">
          {/* About */}
          <div>
            <img
              src={logoSrc}
              alt="SmartSun Solar"
              onError={() => setLogoSrc(LOGO_FALLBACK)}
              className={`h-[48px] w-auto lg:mt-[15px] lg:h-[56px] ${usingFallback ? "brightness-0 invert" : ""}`}
            />
            <h3 className={`${heading} mt-[22px] lg:mt-[27px]`}>About Company.</h3>
            <p className={`${bodyText} mt-[16px] max-w-[330px] lg:mt-[25px] lg:max-w-[312px]`}>{ABOUT_TEXT}</p>

            <div className="mt-[22px] flex gap-[12px] lg:mt-[27px]">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-[44px] w-[44px] items-center justify-center border border-[#3A3A3A] text-white transition hover:bg-white hover:text-black"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className={heading}>Quick Links</h3>
            <ul className="mt-[16px] lg:mt-[23px]">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={`${bodyText} inline-block leading-[37.5px] transition hover:text-[#FFC629] lg:leading-[37.5px]`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={heading}>Contact Details</h3>
            <h3 className={`${heading} mt-[22px] lg:mt-[34px]`}>Operational Address:</h3>
            <p className={`${bodyText} mt-[16px] max-w-[330px] lg:mt-[33px] lg:max-w-[320px]`}>{ADDRESS}</p>

            <ul className="mt-[14px] lg:mt-[18px]">
              {phones.map((p) => (
                <li key={p}>
                  <a
                    href={PHONE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bodyText} inline-flex items-center gap-[12px] leading-[37.5px] transition hover:text-[#FFC629]`}
                  >
                    <PhoneIcon />
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className={`${bodyText} inline-flex items-center gap-[12px] break-all leading-[37.5px] transition hover:text-[#FFC629]`}
                >
                  <MailIcon />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-2 lg:col-span-1">
            <iframe
              title="SmartSun location map"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[260px] w-full border-0 lg:h-[330px]"
            />
          </div>
        </div>

        {/* divider + bottom bar */}
        <div className="mt-[56px] w-full border-t border-[#2A2A2A] lg:mt-[100px] lg:w-[88.6%]" />
        <div className="flex flex-col gap-4 pb-[32px] pt-[26px] lg:w-[88.6%] lg:flex-row lg:items-start lg:justify-between lg:pb-[37px] lg:pt-[38px]">
          <div className="flex items-center gap-[22px] leading-[28px]">
            {["Privacy Policy", "Terms & Conditions"].map((text) => (
              <a
                key={text}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-inter text-[15px] text-white transition hover:text-[#FFC629] lg:text-[17.6px]"
              >
                {text}
              </a>
            ))}
          </div>
          <p className="font-inter text-[14px] leading-[28px] text-[#D4D4D4] lg:text-[16.5px] lg:text-right">
            © {new Date().getFullYear()} SmartSun. All Rights Reserved. Site Design and Maintained by AdBorn Solutions.
          </p>
        </div>
      </div>

      <div className={goldBar} />
    </footer>
  );
}

export default Footer;
