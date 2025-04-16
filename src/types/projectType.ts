export interface Project {
  id: string;
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  date: string;
  skills?: string[];
  content?: string;
  architecture?: string;
  troubleshooting?: string;
}
