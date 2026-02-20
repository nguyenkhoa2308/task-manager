import { create } from "zustand";

interface UIState {
  sidebarCollapsed: boolean;
  activeModal: string | null;
  filterPanelOpen: boolean;
  toggleSidebar: () => void;
  openModal: (modal: string) => void;
  closeModal: () => void;
  toggleFilterPanel: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  sidebarCollapsed: false,
  activeModal: null,
  filterPanelOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
  toggleFilterPanel: () =>
    set((s) => ({ filterPanelOpen: !s.filterPanelOpen })),
}));
