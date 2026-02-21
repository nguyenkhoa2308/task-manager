import api from "@/lib/axios";
import { mockResponse } from "@/lib/mock/handlers";
import { mockBoards } from "@/lib/mock/data";
import type { Board, ApiResponse } from "@/types";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

export const boardsApi = {
  getAll: async (): Promise<ApiResponse<Board[]>> => {
    if (USE_MOCK) return mockResponse(mockBoards);
    const res = await api.get("/boards");
    return res.data;
  },

  getById: async (id: string): Promise<ApiResponse<Board>> => {
    if (USE_MOCK) {
      const board = mockBoards.find((b) => b.id === id);
      if (!board) throw new Error("Board not found");
      return mockResponse(board);
    }
    const res = await api.get(`/boards/${id}`);
    return res.data;
  },

  create: async (data: {
    title: string;
    description?: string;
  }): Promise<ApiResponse<Board>> => {
    if (USE_MOCK) {
      const newBoard: Board = {
        id: `board-${Date.now()}`,
        title: data.title,
        description: data.description,
        ownerId: "user-1",
        owner: mockBoards[0].owner,
        columns: [
          {
            id: `col-${Date.now()}-1`,
            title: "Todo",
            boardId: `board-${Date.now()}`,
            position: 0,
            color: "#6366f1",
          },
          {
            id: `col-${Date.now()}-2`,
            title: "In Progress",
            boardId: `board-${Date.now()}`,
            position: 1,
            color: "#f59e0b",
          },
          {
            id: `col-${Date.now()}-3`,
            title: "Done",
            boardId: `board-${Date.now()}`,
            position: 2,
            color: "#22c55e",
          },
        ],
        members: [
          { userId: "user-1", user: mockBoards[0].owner, role: "owner" },
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      mockBoards.push(newBoard);
      return mockResponse(newBoard);
    }
    const res = await api.post("/boards", data);
    return res.data;
  },

  delete: async (id: string): Promise<ApiResponse<null>> => {
    if (USE_MOCK) {
      const idx = mockBoards.findIndex((b) => b.id === id);
      if (idx !== -1) mockBoards.splice(idx, 1);
      return mockResponse(null);
    }
    const res = await api.delete(`/boards/${id}`);
    return res.data;
  },
};
