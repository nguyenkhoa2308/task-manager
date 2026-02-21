import { create } from "zustand";
import type { Board } from "@/types";
import { boardsApi } from "@/services/boardService";

interface BoardState {
  boards: Board[];
  activeBoard: Board | null;
  loading: boolean;

  fetchBoards: () => Promise<void>;
  fetchBoardById: (id: string) => Promise<void>;
  createBoard: (data: { title: string; description?: string }) => Promise<void>;
  deleteBoard: (id: string) => Promise<void>;
  setActiveBoard: (board: Board | null) => void;
}

export const useBoardStore = create<BoardState>()((set) => ({
  boards: [],
  activeBoard: null,
  loading: false,

  fetchBoards: async () => {
    set({ loading: true });
    try {
      const res = await boardsApi.getAll();
      set({ boards: res.data });
    } finally {
      set({ loading: false });
    }
  },

  fetchBoardById: async (id: string) => {
    set({ loading: true });
    try {
      const res = await boardsApi.getById(id);
      set({ activeBoard: res.data });
    } finally {
      set({ loading: false });
    }
  },

  createBoard: async (data) => {
    const res = await boardsApi.create(data);
    set((s) => ({ boards: [...s.boards, res.data] }));
  },

  deleteBoard: async (id: string) => {
    await boardsApi.delete(id);
    set((s) => ({ boards: s.boards.filter((b) => b.id !== id) }));
  },

  setActiveBoard: (board) => set({ activeBoard: board }),
}));
