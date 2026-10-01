// All text + image paths for the Projects page live here.
//
// PHOTOS: save the collage pictures from the design into  public/images/projects/
// with the file names below. Until a file exists, its "imageFallback" (a picture
// that is already in the project) is shown instead.

export const projectsHero = {
  eyebrow: "Our Solar Projects",
  title: "Powering Homes, Businesses & Industries with Smarter Solar",
};

// Use **double asterisks** for bold. A "\n" inside a paragraph = new line without a gap.
// tone: "white" | "grey"     imageSide: "left" | "right"
export const projectBlocks = [
  {
    id: "experience",
    tag: "Our Project Experience",
    titleDark: "Proven Experience.",
    titleAccent: "Real Solar Impact.",
    paragraphs: [
      "From compact residential rooftop systems to high-capacity industrial plants, our project experience covers diverse energy requirements and site conditions.",
      "Our approach combines careful site assessment, quality components and performance-focused engineering to ensure every installation is built for reliability and long-term value. Each project is executed with attention to efficiency, safety and customer requirements, delivering solar solutions designed to perform consistently for years to come.",
    ],
    image: "/images/projects/project-experience.jpg",
    imageFallback: "/images/P2.jpg",
    imageAlt: "Residential, commercial and industrial solar projects delivered by SmartSun",
    tone: "white",
    imageSide: "left",
  },
  {
    id: "residential",
    tag: "Residential Solar Projects",
    titleDark: "Smart Energy for Homes &",
    titleAccent: "Housing Societies",
    paragraphs: [
      "Our residential solar projects are designed to help homeowners and housing societies reduce electricity costs and move toward greater energy independence.",
      "Our systems are carefully sized according to each property’s energy consumption, available rooftop space and installation requirements. With efficient design, reliable components and professional installation, we deliver dependable solar solutions that support long-term savings, better energy efficiency and a more sustainable lifestyle.",
    ],
    image: "/images/projects/residential-projects.jpg",
    imageFallback: "/images/residential-solar.jpg",
    imageAlt: "Family in front of a home with rooftop solar, and housing society rooftops",
    tone: "grey",
    imageSide: "right",
  },
  {
    id: "commercial",
    tag: "Commercial Solar Projects",
    titleDark: "Helping Businesses",
    titleAccent: "Reduce Energy Costs",
    paragraphs: [
      "We execute solar projects for commercial establishments including **offices, hospitals, schools and institutions**.\nEach project is planned to optimize available space, energy requirements, generation and potential savings while minimizing disruption to daily operations.",
      "Our commercial solar solutions are built to deliver reliable energy performance while supporting the long-term financial goals of each business. With efficient system design, quality components and professional execution, we help commercial and institutional customers improve energy efficiency, lower operating expenses and make a confident transition toward cleaner power.",
    ],
    image: "/images/projects/commercial-projects.jpg",
    imageFallback: "/images/commercial-solar.jpg",
    imageAlt: "Solar installations on offices, a hospital, a school and a warehouse",
    tone: "white",
    imageSide: "left",
  },
  {
    // NOTE: this block was not in the design screenshots (the grey band before the
    // "How we deliver" section suggests it exists). The text below is written to
    // match the others – replace it with the approved copy.
    id: "industrial",
    tag: "Industrial Solar Projects",
    titleDark: "Large-Scale Solar",
    titleAccent: "Built for Industry",
    paragraphs: [
      "We deliver **rooftop and ground-mounted solar plants** for factories, manufacturing units and large energy consumers.\nEach plant is engineered around the facility’s load profile, available area and operating schedule.",
      "Our industrial solar projects are executed with a strong focus on safety, quality components and dependable performance. From detailed site assessment and system design to commissioning and maintenance, we help industries reduce energy costs, improve efficiency and gain long-term energy stability.",
    ],
    image: "/images/projects/industrial-projects.jpg",
    imageFallback: "/images/industrial-solar.jpg",
    imageAlt: "Ground-mounted solar plant serving an industrial facility",
    tone: "grey",
    imageSide: "right",
  },
];

// "How We Deliver Every Project" – clickable timeline (component: src/components/EpcTimeline.jsx)
export const epc = {
  tag: "How We Deliver Every Project",
  title: "From Site Assessment to Solar Generation",
  text: "Our projects follow a structured EPC process to ensure the system is appropriately designed and professionally executed.",
  activeImage: "/images/cta-bg.png", // photo shown on the clicked step
  steps: [
    { title: "Site Survey", text: "Understanding the site and conducting detailed shadow analysis." },
    { title: "Load Assessment", text: "Evaluating energy requirements and determining optimal system sizing." },
    { title: "Engineering & Design", text: "Planning the system layout and engineering specifications." },
    { title: "Procurement", text: "Sourcing high-quality components." },
    { title: "Installation", text: "Professional installation with safety compliance." },
    { title: "Approvals & Commissioning", text: "Managing documentation, approvals, net-metering, testing, commissioning and grid connectivity." },
    { title: "After-Sales Support", text: "Providing long-term service and performance support." },
    { title: "Monitor & Save", text: "Helping customers generate clean energy and enjoy long-term savings." },
  ],
};

export const analysis = {
  id: "analysis",
  tag: "Built Around Performance",
  titleDark: "Every Project Starts",
  titleAccent: "With Analysis",
  paragraphs: [
    "Before installation, Smartsun Power provides a detailed **Solar Analysis Report** to help customers make informed decisions.",
    "Our analysis evaluates key factors such as energy consumption, site conditions, available installation area, system capacity and expected solar generation. This helps us develop a solution that is technically suitable, financially practical and aligned with the customer’s long-term energy goals, ensuring every project begins with clarity and confidence.",
  ],
  image: "/images/projects/solar-analysis.jpg",
  imageFallback: "/images/KnowledgeC/K0.jpg",
  imageAlt: "Engineers reviewing a solar analysis report on a laptop",
  tone: "white",
  imageSide: "left",
};

// Both buttons open the Contact Us page
export const projectsCta = {
  title: "Your Solar Project Could Be Next",
  text: "Whether you need solar for your **home, business or industrial facility**, our engineering-driven approach helps you understand your requirements, evaluate your solar potential and build a solution designed for long-term performance.",
  background: "/images/cta-bg.png",
  buttons: [
    { label: "Get Free Solar Consultation", to: "/contact-us" },
    { label: "Request Solar Analysis", to: "/contact-us" },
  ],
};
