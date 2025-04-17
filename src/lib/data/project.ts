import { Project } from "@/types/projectType";

export const projects: Project[] = [
  {
    id: "onson",
    title: "ON:SON",
    description: "온손은 봉사를 위한 플랫폼입니다.",
    image: "/images/project/onson/Onson.png",
    siteUrl: "https://onson.kr/",
    date: "2024년 12월 31일 ~ 2025년 2월 7일",
    architecture: "/images/project/onson/Onson_architecture.webp",
    content:
      " ‘온손’은 ‘On(켜다)’의 의미를 담아 나눔의 불씨를 밝히고 따뜻한 손길이 더 많은 사람들에게 닿을 수 있도록 하는 것을 목표로 합니다.",
    skills: [
      { name: "React", color: "bg-sky-400 text-white" },
      { name: "TypeScript", color: "bg-blue-600 text-white" },
      { name: "Next.js", color: "bg-black text-white" },
      { name: "Tailwind CSS", color: "bg-teal-400 text-white" },
      { name: "Supabase", color: "bg-green-500 text-white" },
      { name: "React-Query", color: "bg-pink-400 text-white" },
      { name: "Zustand", color: "bg-neutral-500 text-white" },
      { name: "React-Hook-Form", color: "bg-purple-500 text-white" },
      { name: "zod", color: "bg-indigo-400 text-white" },
    ],
    videoUrl: "https://youtube.com/embed/uBWAiYlbgzk",
  },
  {
    id: "duodingco",
    title: "Duo-Dingco",
    description: "낱말카드를 통해 코딩 개념을 학습할 수 있는 웹앱",
    image: "/images/project/duodingco/DuoDingco.png",
    siteUrl: "https://duo-dingco-beta.vercel.app/",
    date: "2024년 12월 20일 ~ 2024년 12월 30일",
    content:
      "Duo-Dingco는 학습 관리형 낱말카드 기반 프로젝트로 낱말카드를 생성해 코딩 개념을 쉽게 학습·관리할 수 있도록 돕는 사이트입니다.",
    skills: [
      { name: "React", color: "bg-sky-400 text-white" },
      { name: "TypeScript", color: "bg-blue-600 text-white" },
      { name: "Next.js", color: "bg-black text-white" },
      { name: "Tailwind CSS", color: "bg-teal-400 text-white" },
      { name: "Supabase", color: "bg-green-500 text-white" },
      { name: "React-Query", color: "bg-pink-400 text-white" },
      { name: "Zustand", color: "bg-neutral-500 text-white" },
      { name: "React-Hook-Form", color: "bg-purple-500 text-white" },
    ],
    videoUrl: "https://youtube.com/embed/1rlFj3NN-D0",
  },
];
