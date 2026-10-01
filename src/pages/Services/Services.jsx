import { MotionConfig } from "framer-motion";
import PageLayout from "../../components/layout/PageLayout";
import PageHero from "../../components/layout/PageHero";

import ServiceBlock from "./components/ServiceBlock";
import EpcProcess from "./components/EpcProcess";
import SolarAnalysis from "./components/SolarAnalysis";
import SolarStreetLights from "./components/SolarStreetLights";
import SolarWaterHeaters from "./components/SolarWaterHeaters";
import CustomizedSolarApplications from "./components/CustomizedSolarApplications";
import WhyChooseSmarttsun from "./components/WhyChooseSmarttsun";
import PerformanceCommitment from "./components/PerformanceCommitment";
import ServicesCTA from "./components/ServicesCTA";

import {
  epc,
  intro,
  serviceBlocks,
  servicesHero,
  solarAnalysis,
  solarWaterHeaters,
  solarStreetLights,
  customizedSolarApplications,
  whyChooseSmarttsun,
  performanceCommitment,
} from "./data";

function Services() {
  return (
    <PageLayout>
      <MotionConfig reducedMotion="user">
        <PageHero
          eyebrow={servicesHero.eyebrow}
          title={servicesHero.title}
          titleClassName="max-w-[620px]"
        />

        <ServiceBlock {...intro} />

        {serviceBlocks.map((block) => (
          <ServiceBlock key={block.id} {...block} />
        ))}

        <EpcProcess {...epc} />

        <SolarAnalysis {...solarAnalysis} />

        <SolarStreetLights data={solarStreetLights} />

        <SolarWaterHeaters data={solarWaterHeaters} />

        <CustomizedSolarApplications
          data={customizedSolarApplications}
        />

        <WhyChooseSmarttsun data={whyChooseSmarttsun} />

        <PerformanceCommitment data={performanceCommitment} />

        <ServicesCTA />
      </MotionConfig>
    </PageLayout>
  );
}

export default Services;