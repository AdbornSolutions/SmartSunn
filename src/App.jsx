import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import ContactUs from "./pages/ContactUs/ContactUs";
import NotFound from "./pages/NotFound";
import ScrollToHash from "./components/layout/ScrollToHash";
import BackToTop from "./components/common/BackToTop";
function App() {
  return (
    <BrowserRouter>
      {/* new page -> starts at the top; "/#section" links -> smooth scroll */}
      <ScrollToHash />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
