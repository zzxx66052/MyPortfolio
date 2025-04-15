"use client";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black p-6 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-xl font-bold">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-gray-500"
          >
            K-lee&apos;s Portfolio
          </button>
        </h1>
        <nav className="space-x-6 text-sm font-semibold">
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
      </div>
    </header>
  );
};

export default Header;
