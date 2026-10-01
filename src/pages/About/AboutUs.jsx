import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import AboutHero from "./components/AboutHero";
import WhoWeAre from "./components/WhoWeAre";
import OurApproach from "./components/OurApproach";
import OurJourney from "./components/OurJourney";
import OurCommitment from "./components/OurCommitment";

// About Us page -> route: /about-us
function AboutUs() {
  return (
    <main className="min-h-screen font-inter">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <OurApproach />
      <OurJourney />
      <OurCommitment />
      <Footer />
    </main>
  );
}

export default AboutUs;