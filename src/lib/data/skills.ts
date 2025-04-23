import {
  BackendIcon,
  DevOpsIcon,
  FrontendIcon,
  LanguageIcon,
} from "@/components/icons/imageIcons";

export const skillsData = [
  {
    title: "Language",
    icon: LanguageIcon,
    items: [
      { label: "TypeScript", color: "bg-blue-400" },
      { label: "JavaScript", color: "bg-yellow-400" },
      { label: "Java", color: "bg-orange-400" },
    ],
  },
  {
    title: "Frontend",
    icon: FrontendIcon,
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
    icon: BackendIcon,
    items: [
      { label: "MySQL", color: "bg-yellow-400" },
      { label: "Supabase", color: "bg-green-500 text-white" },
    ],
  },
  {
    title: "DevOps",
    icon: DevOpsIcon,
    items: [{ label: "Vercel", color: "bg-gray-900 text-white" }],
  },
];
