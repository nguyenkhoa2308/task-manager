import api from "@/lib/axios";
import { mockResponse } from "@/lib/mock/handlers";
import { mockTasks, getTasksByBoard } from "@/lib/mock/data";
import type { Task, ApiResponse } from "@/types";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

export const tasksApi = {
  getByBoard: async (
    boardId: string,
  ): Promise<ApiResponse<Record<string, Task[]>>> => {
    if (USE_MOCK) return mockResponse(getTasksByBoard(boardId));
    const res = await api.get(`/tasks?boardId=${boardId}`);
    return res.data;
  },

  create: async (data: Partial<Task>): Promise<ApiResponse<Task>> => {
    if (USE_MOCK) {
      const newTask: Task = {
        id: `task-${Date.now()}`,
        title: data.title || "Untitled",
        description: data.description,
        priority: data.priority || "medium",
        columnId: data.columnId || "col-1",
        boardId: data.boardId || "board-1",
        assigneeId: data.assigneeId,
        assignee: data.assignee,
        dueDate: data.dueDate,
        labels: data.labels || [],
        subtasks: [],
        comments: [],
        position: mockTasks.filter((t) => t.columnId === data.columnId).length,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      mockTasks.push(newTask);
      return mockResponse(newTask);
    }
    const res = await api.post("/tasks", data);
    return res.data;
  },

  update: async (
    id: string,
    data: Partial<Task>,
  ): Promise<ApiResponse<Task>> => {
    if (USE_MOCK) {
      const idx = mockTasks.findIndex((t) => t.id === id);
      if (idx !== -1) {
        mockTasks[idx] = {
          ...mockTasks[idx],
          ...data,
          updatedAt: new Date().toISOString(),
        };
        return mockResponse(mockTasks[idx]);
      }
      throw new Error("Task not found");
    }
    const res = await api.patch(`/tasks/${id}`, data);
    return res.data;
  },

  delete: async (id: string): Promise<ApiResponse<null>> => {
    if (USE_MOCK) {
      const idx = mockTasks.findIndex((t) => t.id === id);
      if (idx !== -1) mockTasks.splice(idx, 1);
      return mockResponse(null);
    }
    const res = await api.delete(`/tasks/${id}`);
    return res.data;
  },

  reorder: async (
    taskId: string,
    columnId: string,
    position: number,
  ): Promise<ApiResponse<null>> => {
    if (USE_MOCK) {
      const task = mockTasks.find((t) => t.id === taskId);
      if (task) {
        task.columnId = columnId;
        task.position = position;
      }
      return mockResponse(null, 100);
    }
    const res = await api.patch(`/tasks/${taskId}/move`, {
      columnId,
      position,
    });
    return res.data;
  },
};
