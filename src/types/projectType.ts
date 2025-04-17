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
  troubleshooting?: string;
}
