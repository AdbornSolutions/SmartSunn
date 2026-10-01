import Navbar from "../../components/layout/Navbar";
import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import HowItWorks from "./components/HowItWorks";
import EngineeringExcellence from "./components/EngineeringExcellence";
import TechnicalExcellence from "./components/TechnicalExcellence";
import Products from "./components/Products";
import InstallationJourney from "./components/InstallationJourney";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import KnowledgeCenter from "./components/KnowledgeCenter";
import FAQ from "../../components/common/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <main className="min-h-screen">
      <div id="home">
        <Navbar />
        <Hero />
      </div>

      <SolutionsSection />
      <HowItWorks />

      <EngineeringExcellence />
      <TechnicalExcellence />
      <Products />
      <InstallationJourney />

      <div id="projects">
        <Projects />
      </div>

      <Impact />
      <Testimonials />
      <KnowledgeCenter />
      <FAQ />

      <div id="contact">
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
}

export default Home;