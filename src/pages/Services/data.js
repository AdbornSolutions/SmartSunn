// All text + image paths for the Services page live here.
//
// PHOTOS: save the pictures from the design into  public/images/services/  with the
// file names below. Until a file exists, its "imageFallback" (a picture that is
// already in the project) is shown instead.
//
// Use **double asterisks** around words that should be bold.
// A "\n" inside a paragraph = new line WITHOUT a gap; a new paragraph = a gap.

export const servicesHero = {
  eyebrow: "SmartSun Power",
  title: "Complete Solar Solutions, Engineered for Performance",
};

// First block under the banner (white background, photo on the left)
export const intro = {
  id: "overview",
  tag: "Our Solar Services",
  titleDark: "Powering Homes, Businesses",
  titleAccent: "& industries with Smarter Solar",
  paragraphs: [
    "We provide professionally engineered solar solutions across residential, commercial and industrial applications. From planning and design to installation, commissioning and after-sales support, we manage the complete solar journey.",
    "Our solutions are tailored to each project’s unique energy needs, site conditions and operational goals, ensuring every solar system delivers reliable performance, maximum energy generation and long-term value. With a focus on quality components, safety and efficient execution, we help customers reduce electricity costs while moving confidently toward a cleaner and more energy-independent future.",
  ],
  image: "/images/services/intro.jpg",
  imageFallback: "/images/P1.jpg",
  imageAlt: "Solar panels installed on a home rooftop",
  tone: "white",
  imageSide: "left",
};

// One block per service.   tone: "grey" | "white"     imageSide: "left" | "right"
export const serviceBlocks = [
  {
    id: "residential",
    tag: "Residential Solar",
    titleDark: "Smarter Solar",
    titleAccent: "for Your Home",
    paragraphs: [
      "Make your home more energy independent with a rooftop solar system designed to significantly reduce your monthly electricity bills.\nOur residential solar solutions are customized according to your energy consumption, roof space and requirements.",
      "Our residential solar systems are designed for seamless integration with your home while delivering dependable energy throughout the year. With smart system sizing, quality components and professional installation, we help homeowners lower their electricity expenses, improve energy independence and enjoy reliable solar power for the long term.",
    ],
    image: "/images/services/residential.jpg",
    imageFallback: "/images/residential-solar.jpg",
    imageAlt: "Family looking at their home with rooftop solar at sunset",
    tone: "grey",
    imageSide: "right",
  },
  {
    id: "commercial",
    tag: "Commercial Solar",
    titleDark: "Reduce Business Energy",
    titleAccent: "Costs with Solar",
    paragraphs: [
      "Power your commercial establishment with an efficiently designed solar system focused on **maximum savings and faster ROI**.\nWe provide solar solutions for offices, hospitals, schools, institutions and other commercial establishments while ensuring minimal disruption to daily operations.",
      "Our commercial solar systems are engineered to make the most of available rooftop and site space while matching your business’s energy consumption patterns. With high-quality components, efficient installation and performance-focused system design, we help businesses lower operating costs, improve energy efficiency and achieve long-term savings without affecting their day-to-day operations.",
    ],
    image: "/images/services/commercial.jpg",
    imageFallback: "/images/commercial-solar.jpg",
    imageAlt: "Engineer with a tablet on a commercial rooftop solar plant",
    tone: "white",
    imageSide: "left",
  },
  {
    id: "industrial",
    tag: "Industrial Solar",
    titleDark: "High-Capacity Solar",
    titleAccent: "Engineered for Industry",
    paragraphs: [
      // NOTE: "Smarttsun" is spelled like this on the reference site – change it here if it is a typo.
      "Industrial facilities require solar systems designed around their specific energy consumption, load patterns and available space.\nSmarttsun Power provides customized **rooftop and ground-mounted solar plants** engineered for long-term performance, safety and scalability.",
      "Our industrial solar solutions are planned to maximize energy generation while seamlessly integrating with ongoing operations. From detailed site assessment and system design to installation, commissioning and maintenance, we deliver robust solar plants that help industries reduce energy costs, improve efficiency and achieve greater energy independence over the long term.",
    ],
    image: "/images/services/industrial.jpg",
    imageFallback: "/images/P2.jpg",
    imageAlt: "Rows of ground-mounted solar panels under a blue sky",
    tone: "grey",
    imageSide: "right",
  },
];

// "How we deliver" timeline.  Hover (or tap / focus) a step -> it turns dark and shows the photo.
export const epc = {
  tag: "Solar EPC Solutions",
  title: "End-to-End Solar EPC — From Concept to Commissioning",
  text: "Our turnkey EPC service brings every stage of your solar project together under one roof.",
  // photo shown behind the highlighted step
  activeImage: "/images/cta-bg.png",
  steps: [
    { title: "Site Survey & Shadow Analysis", text: "Assess the site and identify shading conditions." },
    { title: "Load Assessment & System Sizing", text: "Analyze energy requirements and determine the optimal system capacity." },
    { title: "Engineering & Layout Planning", text: "Develop the engineering design and solar plant layout." },
    { title: "Component Procurement", text: "Source high-quality components for the project." },
    { title: "Professional Installation", text: "Execute installation with appropriate safety and quality standards." },
    { title: "Approvals & Grid Connectivity", text: "Manage documentation, approvals, net-metering, testing and commissioning." },
    { title: "After-Sales Support", text: "Provide long-term performance and service support." },
    { title: "Monitor & Save", text: "Generate clean energy, monitor performance and enjoy long-term savings." },
  ],
};


// Solar analysis section shown after the EPC process.
export const solarAnalysis = {
  id: "solar-analysis",
  tag: "SOLAR ANALYSIS & CONSULTATION",
  titleDark: "Know Your Solar Potential",
  titleAccent: "Before You Invest",
  paragraphs: [
    "At Smarttsun Power, we believe informed decisions lead to better solar investments.\nBefore installation, we provide a detailed **Solar Analysis Report** to help you understand the potential performance, generation and financial benefits of your proposed solar system.",
    "Our solar analysis considers key factors such as your energy consumption, roof or site conditions, available installation area and expected solar generation. This helps us recommend the right system capacity and configuration while providing a clear understanding of projected savings, ROI and long-term performance, so you can invest in solar with confidence.",
  ],
  image: "/images/services/solar-analysis.webp",
  imageFallback: "/images/P1.jpg",
  imageAlt: "Solar analysis and consultation for a rooftop solar installation",
};
export const solarStreetLights = {
  eyebrow: "SOLAR STREET LIGHTS",
  title: "Efficient Solar",
  highlight: "Lighting Solutions",
  image: "/images/services/solar-street-lights.webp",

  paragraphs: [
    "We provide solar street light solutions as part of our range of customized solar applications. Designed to utilize solar energy for lighting requirements, these solutions can be considered for suitable residential, commercial, institutional and other applications.",

    "Our solar street lighting systems are designed to provide reliable and energy-efficient illumination while reducing dependence on conventional electricity sources. With properly selected solar panels, batteries and LED lighting components, we offer practical solutions that support lower operating costs, easy installation and dependable lighting performance across a variety of locations.",
  ],
};
export const solarWaterHeaters = {
  eyebrow: "SOLAR WATER HEATERS",
  title: "Harness Solar Energy",
  highlight: "for Water Heating",
  image: "/images/services/solar-water-heaters.webp",

  paragraphs: [
    "Smarttsun Power also provides solar water heater solutions for applications where solar-powered water heating can support energy efficiency.",
    "Our team can help assess your requirements and recommend a suitable solution.",
    "Our solar water heating systems are designed to make efficient use of available sunlight while reducing reliance on conventional water-heating methods. Based on your application, water demand and installation conditions, we help select a suitable system that delivers reliable hot water, improves energy efficiency and supports long-term savings.",
  ],
};export const customizedSolarApplications = {
  eyebrow: "CUSTOMIZED SOLAR APPLICATIONS",
  title: "Solar Solutions Designed",
  highlight: "Around Your Requirements",
  image: "/images/services/Customized-Solar-Applications.webp",

  paragraphs: [
    "Every energy requirement is different. Our engineering-led approach allows us to develop customized solar applications based on your specific needs, site conditions and available resources.",

    "Our customized solar applications are developed to maximize energy generation, improve system efficiency and make the best use of available space and resources. From specialized rooftop installations to unique commercial, industrial and institutional requirements, we focus on delivering practical, scalable and reliable solar solutions tailored to each project.",
  ],
};export const whyChooseSmarttsun = {
  eyebrow: "Why Choose Smarttsun Power?",
  title: "More Than Installation. A Complete Solar Partnership.",

  steps: [
    {
      title: "10+ Years of Experience",
      description: "Executing solar projects since 2016.",
    },
    {
      title: "25+ MW Installed",
      description: "Successfully commissioned solar capacity.",
    },
    {
      title: "1100+ Projects",
      description: "Residential, commercial and industrial installations.",
    },
    {
      title: "ISO 9001:2015 Certified",
      description:
        "Committed to quality management and professional practices.",
    },
    {
      title: "Engineering-Driven Approach",
      description:
        "Systems designed around actual energy requirements and site conditions.",
    },
    {
      title: "End-to-End EPC",
      description:
        "From initial analysis and commissioning to after-sales support.",
    },
    {
      title: "Strong Regional Presence",
      description:
        "Serving the Vidarbha region and Chhattisgarh.",
    },
    {
      title: "4.9★ Customer Satisfaction",
      description:
        "Focused on long-term relationships and customer confidence.",
    },
  ],
};
export const performanceCommitment = {
  eyebrow: "OUR COMMITMENT TO EVERY PROJECT",
  title: "Designed for Performance.",
  highlight: "Built for the Long Term.",

  image: "/images/services/performance-commitment.webp",

  intro: "Every Smarttsun Power solar installation focuses on:",

  points: [
    "Maximum energy generation",
    "Faster return on investment",
    "High safety and quality standards",
    "Long system life",
    "Dependable after-sales service",
    "Safety, durability and regulatory compliance",
  ],
};

export const servicesCta = {
  title: "Not sure which solution fits you?",
  text: "Tell us about your property and monthly electricity bill – our engineers will recommend the right system size and give you a clear, no-obligation quote.",
  button: "Talk to Our Team",
};
