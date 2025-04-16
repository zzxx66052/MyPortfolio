import { Project } from "@/types/projectType";
import { create } from "zustand";

interface ProjectModalState {
  isOpen: boolean;
  selectedProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

export const useProjectModalStore = create<ProjectModalState>((set) => ({
  isOpen: false,
  selectedProject: null,
  openModal: (project) => set({ isOpen: true, selectedProject: project }),
  closeModal: () => set({ isOpen: false, selectedProject: null }),
}));
