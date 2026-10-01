import { MailIcon, PhoneIcon, PinIcon } from "../../../components/common/Icons";
import Reveal from "../../../components/common/Reveal";
import SectionTag from "../../../components/common/SectionTag";
import { contactDetails, contactIntro } from "../data";

const linkClass = "transition-colors hover:text-[#B7860A]";

function InfoItem({ icon: Icon, title, children }) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#FFC629] lg:h-[40px] lg:w-[40px]">
        <Icon className="h-[21px] w-[21px] text-[#0B0F14] lg:h-[19px] lg:w-[19px]" />
      </span>
      <div className="min-w-0">
        <h3 className="font-manrope text-[19px] font-semibold leading-[26px] text-[#101E33]">{title}</h3>
        <div className="mt-[2px] break-words font-inter text-[15.5px] leading-[26px] text-[#0B0B0B]">{children}</div>
      </div>
    </li>
  );
}

function ContactInfo() {
  const { address, phones, email } = contactDetails;

  return (
    <Reveal>
      <SectionTag>{contactIntro.tag}</SectionTag>

      <h2 className="mt-[6px] font-manrope text-[30px] font-semibold leading-[1.3] text-[#101E33] sm:text-[36px] lg:text-[40px] lg:leading-[57px]">
        {contactIntro.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="block text-[#FFC629]">{contactIntro.titleAccent}</span>
      </h2>

      <p className="max-w-[560px] font-inter text-[15.5px] leading-[26px] text-[#0B0B0B] lg:text-[16px] lg:leading-[27px]">
        {contactIntro.text}
      </p>

      <ul className="mt-[30px] space-y-[26px] lg:mt-[36px] lg:space-y-[30px]">
        <InfoItem icon={PinIcon} title="Office Address">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            {address}
          </a>
        </InfoItem>

        <InfoItem icon={PhoneIcon} title="Call Us">
          {phones.map((phone) => (
            <a key={phone} href={`tel:+91${phone}`} className={`${linkClass} block`}>
              {phone}
            </a>
          ))}
        </InfoItem>

        <InfoItem icon={MailIcon} title="Email Us">
          <a href={`mailto:${email}`} className={linkClass}>
            {email}
          </a>
        </InfoItem>
      </ul>
    </Reveal>
  );
}

export default ContactInfo;
