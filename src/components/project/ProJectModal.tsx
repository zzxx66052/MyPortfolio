"use client";

import { useProjectModalStore } from "@/utils/store/useProjectModal";
import Image from "next/image";
import { CloseIcon } from "../icons/icons";

const ProjectModal = () => {
  const { selectedProject, isOpen, closeModal } = useProjectModalStore();

  if (!isOpen || !selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-xl p-6 max-w-3xl w-full relative">
        <button
          className="absolute top-3 right-3 text-black"
          onClick={closeModal}
        >
          <CloseIcon />
        </button>

        <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
        <p className="text-sm text-gray-600">{selectedProject.date}</p>
        <p className="mt-4">{selectedProject.content}</p>

        {selectedProject.architecture && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-1">아키텍처</h3>
            <Image
              src={selectedProject.architecture}
              alt="architecture"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}

        {selectedProject.skills && (
          <div className="mt-4">
            <h3 className="font-semibold mb-1">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-200 text-sm px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          <a
            href={selectedProject.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 underline"
          >
            사이트 바로가기 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
