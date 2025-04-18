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
    wireframe: "/images/project/onson/onson_wireframe.png",
    videoUrl: "https://youtube.com/embed/uBWAiYlbgzk",
    myPartPage: [
      "/images/project/onson/Onson1.png",
      "/images/project/onson/Onson2.png",
    ],
    troubleshooting: [
      {
        title: "문제 상황",
        description:
          "채팅 기능이 모달 형태로 구현되어 있고, PC와 모바일 모두 동일한 동작을 해야 했습니다. 하지만 모바일 버전에서 채팅 모달의 열림/닫힘 시 GNB 상태가 페이지별로 일관되지 않게 바뀌는 문제가 있었습니다.",
      },
      {
        title: "시도한 해결 방법",
        description:
          "초기에는 각 모달 내부에서 GNB 상태를 로컬로 관리했지만, 페이지 간 상태 동기화가 어렵고 유지보수가 어려웠습니다.",
      },
      {
        title: "최종 해결 방법",
        description:
          "Zustand를 활용한 전역 상태 관리로 GNB 상태를 통합했고, 모바일에서는 GNB 상태 변화를 명확히 보여주기 위해 하단 여백을 추가했습니다.",
      },
      {
        title: "배운 점",
        description:
          "다양한 디바이스에서 일관된 UX 제공을 위해 UI 구성 요소의 상태는 전역적으로 관리해야 하며, 특히 GNB처럼 전역에 영향을 주는 요소는 더욱 신중한 설계가 필요하다는 점을 느꼈습니다.",
      },
    ],
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
    wireframe: "/images/project/duodingco/Dingco_wireframe.png",
    videoUrl: "https://youtube.com/embed/1rlFj3NN-D0",
    myPartPage: [
      "/images/project/duodingco/DuoDingco1.png",
      "/images/project/duodingco/DuoDingco2.png",
    ],
    troubleshooting: [
      {
        title: "문제 상황",
        description:
          "카드 상세 페이지에서 게시글 작성자의 정보가 항상 동일하게 표시되는 문제가 있었습니다. 다른 사용자가 작성한 카드임에도 동일한 사용자 이름과 프로필이 노출되는 현상이 발생했습니다.",
      },
      {
        title: "원인 분석",
        description:
          "초기 개발 단계에서 사용자 정보를 목데이터로 구성했고, 이로 인해 모든 카드에 동일한 유저 ID가 할당되어 있었습니다. 실제 로그인 사용자와 무관하게 데이터가 표시되면서 정보가 일관되지 않았습니다.",
      },
      {
        title: "최종 해결 방법",
        description:
          "Zustand를 활용하여 로그인된 사용자의 정보를 전역 상태로 관리하고, 카드 데이터를 불러올 때 해당 유저 ID와 연동되도록 구조를 변경했습니다. 이를 통해 올바른 작성자 정보를 정확히 가져오도록 수정했습니다.",
      },
      {
        title: "배운 점",
        description:
          "유저 정보와 같이 중요한 데이터는 목데이터에 의존하지 않고 인증 기반으로 정확하게 처리되어야 하며, 전역 상태 관리를 통한 데이터 일관성 유지가 중요하다는 것을 알게 되었습니다.",
      },
    ],
  },
];
