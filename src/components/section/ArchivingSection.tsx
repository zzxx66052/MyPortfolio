"use client";

import Image from "next/image";
import { BaseLineIcon, TistoryIcon } from "../icons/icons";

const ArchivingSection = () => {
  return (
    <section
      id="archive"
      className="scroll-mt-24 w-full bg-purple-800 py-16 px-4 text-white flex flex-col items-center"
    >
      <h2 className="flex items-center justify-center text-3xl font-extrabold text-white">
        <BaseLineIcon /> <span className="ml-2">Archive</span>
      </h2>

      <div className="mt-2 flex justify-center mb-12">
        <div className="h-1 w-43 bg-white" />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
        style={{ fontFamily: "KakaoBigSans-ExtraBold" }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/zzxx66052"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105 bg-white text-black rounded-xl p-6 shadow-md flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/images/github.png"
              alt="GitHub"
              width={50}
              height={50}
            />
            <span className="text-5xl">GitHub</span>
          </div>
          <p className="text-blue-500 underline">github.com/zzxx66052</p>
          <p className="text-sm text-zinc-600">소스 코드 저장소</p>
        </a>

        {/* Blog */}
        <a
          href="https://zzxx66052.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105 bg-white text-black rounded-xl p-6 shadow-md flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <TistoryIcon />
            <span className="text-4xl">Tistory 블로그</span>
          </div>
          <p className="text-blue-500 underline">zzxx66052.tistory.com</p>
          <p className="text-sm text-zinc-600">
            공부 및 TIL 작성 목적의 블로그
          </p>
        </a>
      </div>
    </section>
  );
};

export default ArchivingSection;
