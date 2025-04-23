"use client";

import { useProjectModalStore } from "@/utils/store/useProjectModal";
import { useEffect, useState } from "react";
import { UpArrowIcon } from "./icons/imageIcons";

export const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  const { isOpen } = useProjectModalStore();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show || isOpen) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-md bg-gray-300 p-3 text-black hover:bg-gray-400 transition shadow-lg"
      aria-label="맨 위로 이동"
    >
      <UpArrowIcon />
    </button>
  );
};
