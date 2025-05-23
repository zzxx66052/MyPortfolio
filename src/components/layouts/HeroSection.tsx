"use client";

import { DownArrowIcon } from "../icons/icons";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="flex h-screen items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/heroSection.png')" }}
    >
      <div className="flex flex-col items-center text-center mx-4">
        <div className="mb-4" style={{ fontFamily: "SBAggroB" }}>
          <h2 className="text-5xl font-extrabold mb-4">- 이경민 -</h2>
          <p className="text-3xl font-bold mb-8">
            프론트 엔드 개발자 포트폴리오
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-30 h-1 bg-orange-500 "></div>
        </div>

        <div
          className="mb-12 text-lg text-white"
          style={{ fontFamily: "KakaoBigSans-ExtraBold" }}
        >
          <p>안녕하세요.</p>
          <p>
            목표한 일에 집중하고 논리적으로 문제를 해결하는 프론트엔드 개발자
          </p>
          <p>이경민입니다.</p>
        </div>
        <button
          onClick={scrollToAbout}
          className="flex items-center rounded-full bg-orange-500 px-6 py-2 font-bold text-white hover:bg-red-500 transition"
        >
          <span className="mr-1">더 알아보기</span>
          <DownArrowIcon />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
