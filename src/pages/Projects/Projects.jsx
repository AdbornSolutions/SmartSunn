import PageLayout from "../../components/layout/PageLayout";
import PageHero from "../../components/layout/PageHero";
import EpcTimeline from "../../components/common/EpcTimeline";
import ContentBlock from "../../components/common/ContentBlock";
import ProjectsCta from "./components/ProjectsCta";
import { analysis, epc, projectBlocks, projectsHero } from "./data";

// Projects page  ->  route: /projects
// Text and images for every section are in  ./data.js
// PageLayout adds the Navbar at the top and the Footer at the very bottom.
function Projects() {
  return (
    <PageLayout>
      <PageHero eyebrow={projectsHero.eyebrow} title={projectsHero.title} uppercase={false} />

      {projectBlocks.map((block) => (
        <ContentBlock key={block.id} {...block} aspect="aspect-square" />
      ))}

      <EpcTimeline {...epc} />

      <ContentBlock {...analysis} aspect="aspect-square" />

      <ProjectsCta />
    </PageLayout>
  );
}

export default Projects;
