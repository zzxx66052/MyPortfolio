export interface TroubleshootingItem {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  date: string;
  skills: { name: string; color: string }[];
  content?: string;
  architecture?: string;
  videoUrl?: string;
  wireframe: string;
  myPartPage?: string[];
  team: {
    total: number;
    role: string;
    myRole: string;
  };
  troubleshooting?: TroubleshootingItem[];
}
