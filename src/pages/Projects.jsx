import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import data from "../data/projectsData";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <SectionHeader sectionId="2" sectionTitle="projects" id="projects" />
        <ul>
          {data.map((item) => {
            return <ProjectCard key={item.id} {...item} />;
          })}
        </ul>
      </section>
    </>
  );
};
export default Projects;
