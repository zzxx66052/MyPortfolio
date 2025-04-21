"use client";

import { useProjectModalStore } from "@/utils/store/useProjectModal";
import Image from "next/image";
import { useEffect } from "react";
import { CloseIcon } from "../icons/icons";
import { CloverIcon } from "../icons/imageIcons";

const ProjectModal = () => {
  const { selectedProject, isOpen, closeModal } = useProjectModalStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-xl p-6 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-black"
          onClick={closeModal}
        >
          <CloseIcon />
        </button>

        <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
        <p className="text-sm text-gray-600">{selectedProject.date}</p>
        <p className="mt-4">{selectedProject.content}</p>

        {selectedProject.team && (
          <div className="mt-4 text-sm text-gray-700 space-y-1">
            <p>
              <strong className="text-black">총 인원 : </strong>
              {selectedProject.team.total}명
            </p>
            <p>
              <strong className="text-black">구성 : </strong>
              {selectedProject.team.role}
            </p>
            <p>
              <strong className="text-black">담당 역할 : </strong>
              {selectedProject.team.myRole}
            </p>
          </div>
        )}

        {selectedProject.siteUrl && (
          <div className="mt-6 flex flex-row">
            <h3 className="text-lg font-semibold mb-2">사이트 주소 : </h3>
            <a
              href={selectedProject.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl ml-2 text-black underline break-all hover:text-blue-600 transition"
            >
              {selectedProject.siteUrl}
            </a>
          </div>
        )}

        {selectedProject.architecture && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-1">아키텍처</h3>
            <Image
              src={selectedProject.architecture}
              alt="architecture"
              width={800}
              height={400}
              style={{ width: "auto", height: "auto" }}
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
                  key={skill.name}
                  className={`text-sm px-2 py-1 rounded ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {selectedProject.videoUrl && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">시연 영상</h3>
            <div
              className="relative w-full h-0"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={selectedProject.videoUrl}
                title="시연 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        )}

        {selectedProject.wireframe && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">와이어프레임</h3>
            <Image
              src={selectedProject.wireframe}
              alt="Wireframe"
              width={800}
              height={400}
              style={{ height: "auto" }}
            />
          </div>
        )}

        {selectedProject.myPartPage &&
          selectedProject.myPartPage.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">직접 구현한 페이지</h3>
              <div className="grid grid-cols-1 mobile:grid-cols-2 gap-4">
                {selectedProject.myPartPage.map((page, index) => (
                  <Image
                    key={index}
                    src={page}
                    alt={`Page ${index + 1}`}
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

        {selectedProject.troubleshooting &&
          selectedProject.troubleshooting.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-row items-start mb-2">
                <CloverIcon />
                <h3 className="text-lg font-semibold ml-1">트러블슈팅</h3>
              </div>
              <div
                className="space-y-3 text-sm leading-relaxed text-gray-700"
                style={{ fontFamily: "KakaoBigSans-ExtraBold" }}
              >
                {selectedProject.troubleshooting.map((item, index) => (
                  <div key={index}>
                    <strong className="text-black">• {item.title}</strong>
                    <br />
                    {item.description}
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ProjectModal;
