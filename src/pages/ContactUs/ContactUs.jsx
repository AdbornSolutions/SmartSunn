import PageLayout from "../../components/layout/PageLayout";
import PageHero from "../../components/layout/PageHero";
import FAQ from "../../components/common/FAQ";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import { contactBg, contactHero } from "./data";

// Contact Us page  ->  route: /contact-us
// Text: ./data.js  ·  sending the form: ./api.js  ·  FAQ is the shared Home-page component
function ContactUs() {
  return (
    <PageLayout>
      <PageHero eyebrow={contactHero.eyebrow} title={contactHero.title} uppercase={false} />

      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#4F9BE0_0%,#BBD9F2_45%,#F2C27A_72%,#2E4A3B_100%)]">
        {/* photo (falls back to the sky gradient above until the file is added) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-[position:60%_center]"
          style={{ backgroundImage: `url(${contactBg})` }}
        />
        {/* keeps the dark text readable: strong on phones, fades out to the right on desktop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-white/75 lg:bg-transparent lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0)_78%)]"
        />

        <div className="mx-auto grid w-[89%] items-start gap-10 py-[50px] lg:grid-cols-2 lg:gap-x-[60px] lg:py-[80px]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <FAQ />
    </PageLayout>
  );
}

export default ContactUs;
