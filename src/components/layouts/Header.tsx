"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "../icons/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black p-6 text-white">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between"
        style={{ fontFamily: "Cafe24Ohsquare" }}
      >
        <h1 className="text-xl font-bold">
          <button onClick={handleScrollTop} className="hover:text-gray-500">
            K-lee&apos;s Portfolio
          </button>
        </h1>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          <a href="#about" className="hover:text-gray-500">
            About me
          </a>
          <a href="#skills" className="hover:text-gray-500">
            Skills
          </a>
          <a href="#archive" className="hover:text-gray-500">
            Archiving
          </a>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
        </nav>

        {/* 모바일 메뉴 */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden"
          aria-label="모바일 메뉴"
        >
          <MenuIcon />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-1/3 max-w-xs bg-white text-black z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-4 text-2xl"
        >
          <CloseIcon />
        </button>
        <nav className="mt-16 flex flex-col gap-6 px-6 text-lg font-semibold">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About me
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#archive" onClick={() => setIsOpen(false)}>
            Archiving
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
