"use client";

import { BaseLineIcon } from "../icons/icons";
import {
  BackendIcon,
  DevOpsIcon,
  FrontendIcon,
  LanguageIcon,
} from "../icons/imageIcons";

const skillsData = [
  {
    title: "Language",
    icon: <LanguageIcon />,
    items: [
      { label: "TypeScript", color: "bg-blue-400" },
      { label: "JavaScript", color: "bg-yellow-400" },
      { label: "Java", color: "bg-orange-400" },
    ],
  },
  {
    title: "Frontend",
    icon: <FrontendIcon />,
    items: [
      { label: "Next.js (React)", color: "bg-black text-white" },
      { label: "Zustand", color: "bg-zinc-600 text-white" },
      { label: "React-Query", color: "bg-pink-400" },
      { label: "Style-Components", color: "bg-blue-400" },
      { label: "Tailwind CSS", color: "bg-sky-400" },
    ],
  },
  {
    title: "Backend",
    icon: <BackendIcon />,
    items: [
      { label: "MySQL", color: "bg-yellow-400" },
      { label: "Supabase", color: "bg-green-500 text-white" },
    ],
  },
  {
    title: "DevOps",
    icon: <DevOpsIcon />,
    items: [{ label: "Vercel", color: "bg-black text-white" }],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full bg-yellow-400 py-16 px-4 flex flex-col items-center"
    >
      <h2 className="flex items-center justify-center text-3xl font-extrabold text-black">
        <BaseLineIcon /> <span className="ml-2">SKILLS</span>
      </h2>

      <div className="mt-2 flex justify-center mb-12">
        <div className="h-1 w-40 bg-black" />
      </div>

      <div className="rounded-xl bg-[#FFF6DC] px-8 py-8 shadow-xl max-w-4xl w-full space-y-6">
        {skillsData.map(({ title, icon, items }) => (
          <div
            key={title}
            className="flex items-start gap-4 text-lg font-semibold"
          >
            <div className="w-[30px] h-[30px]">{icon}</div>
            <div className="flex flex-col gap-2">
              <span className="text-zinc-700">{title}</span>
              <div className="flex flex-wrap gap-2">
                {items.map(({ label, color }) => (
                  <span
                    key={label}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${color}`}
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
