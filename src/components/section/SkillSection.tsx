"use client";

import { skillsData } from "@/lib/data/skills";
import React from "react";
import { BaseLineIcon } from "../icons/icons";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 w-full bg-yellow-400 py-16 px-4 flex flex-col items-center"
    >
      <h2 className="flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-black">
        <BaseLineIcon /> <span className="ml-2">SKILLS</span>
      </h2>

      <div className="mt-2 flex justify-center mb-12">
        <div className="h-1 w-32 sm:w-40 bg-black" />
      </div>

      <div className="rounded-xl bg-[#FFF6DC] px-4 sm:px-8 py-6 sm:py-8 shadow-xl max-w-4xl w-full space-y-6">
        {skillsData.map(({ title, icon, items }) => (
          <div
            key={title}
            className="flex flex-row sm:flex-row items-start gap-2 sm:gap-4 text-base sm:text-lg font-semibold"
          >
            <div className="w-[30px] h-[30px]">{React.createElement(icon)}</div>
            <div className="flex flex-col gap-2">
              <span className="text-zinc-700">{title}</span>
              <div
                className="flex flex-wrap gap-2"
                style={{ fontFamily: "yg-jalnan" }}
              >
                {items.map(({ label, color }) => (
                  <span
                    key={label}
                    className={`px-3 py-1 rounded-md text-sm sm:text-base font-light ${color}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
