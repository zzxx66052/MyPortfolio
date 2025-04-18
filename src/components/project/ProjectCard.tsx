"use client";

import { Project } from "@/types/projectType";
import { useProjectModalStore } from "@/utils/store/useProjectModal";
import Image from "next/image";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const openModal = useProjectModalStore((state) => state.openModal);

  return (
    <div
      className="bg-zinc-800 rounded-lg overflow-hidden shadow-md cursor-pointer transform transition duration-300 hover:scale-105"
      onClick={() => openModal(project)}
    >
      <Image src={project.image} alt={project.title} width={600} height={400} />
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-gray-400">{project.description}</p>
        <p className="text-xs mt-2">{project.date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
