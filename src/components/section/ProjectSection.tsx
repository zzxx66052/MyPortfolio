import { projects } from "@/lib/data/project";
import { BaseLineIcon } from "../icons/icons";
import ProjectCard from "../project/ProjectCard";
import ProjectModal from "../project/ProJectModal";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-white text-black py-16 px-4 scroll-mt-24"
    >
      <h2 className="flex items-center justify-center text-3xl font-extrabold text-black">
        <BaseLineIcon /> <span className="ml-2">PROJECT</span>
      </h2>

      <div className="mt-2 flex justify-center mb-12">
        <div className="h-1 w-50 bg-black" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <ProjectModal />
    </section>
  );
};

export default ProjectSection;
