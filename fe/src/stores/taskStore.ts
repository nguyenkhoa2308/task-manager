import { create } from "zustand";
import type { Task, Priority } from "@/types";
import { tasksApi } from "@/services/taskService";

interface Filters {
  priority: Priority | null;
  assigneeId: string | null;
  search: string;
  dateRange: [string, string] | null;
}

interface TaskState {
  tasks: Record<string, Task[]>; // columnId -> Task[]
  selectedTask: Task | null;
  filters: Filters;

  fetchTasksByBoard: (boardId: string) => Promise<void>;
  setAllTasks: (tasks: Record<string, Task[]>) => void;
  selectTask: (task: Task | null) => void;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  removeTask: (taskId: string, columnId: string) => void;
  moveTask: (
    taskId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number,
  ) => void;
  setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  clearFilters: () => void;
}

const defaultFilters: Filters = {
  priority: null,
  assigneeId: null,
  search: "",
  dateRange: null,
};

export const useTaskStore = create<TaskState>()((set, get) => ({
  tasks: {},
  selectedTask: null,
  filters: { ...defaultFilters },

  fetchTasksByBoard: async (boardId: string) => {
    const res = await tasksApi.getByBoard(boardId);
    set({ tasks: res.data });
  },

  setAllTasks: (tasks) => set({ tasks }),

  selectTask: (task) => set({ selectedTask: task }),

  addTask: (task) =>
    set((s) => {
      const columnTasks = s.tasks[task.columnId] || [];
      return {
        tasks: {
          ...s.tasks,
          [task.columnId]: [...columnTasks, task],
        },
      };
    }),

  updateTask: (task) =>
    set((s) => {
      const columnTasks = s.tasks[task.columnId] || [];
      return {
        tasks: {
          ...s.tasks,
          [task.columnId]: columnTasks.map((t) =>
            t.id === task.id ? task : t,
          ),
        },
        selectedTask: s.selectedTask?.id === task.id ? task : s.selectedTask,
      };
    }),

  removeTask: (taskId, columnId) =>
    set((s) => ({
      tasks: {
        ...s.tasks,
        [columnId]: (s.tasks[columnId] || []).filter((t) => t.id !== taskId),
      },
    })),

  moveTask: (taskId, fromColumnId, toColumnId, newIndex) =>
    set((s) => {
      const fromTasks = [...(s.tasks[fromColumnId] || [])];
      const taskIndex = fromTasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return s;

      const [task] = fromTasks.splice(taskIndex, 1);
      const movedTask = { ...task, columnId: toColumnId, position: newIndex };

      if (fromColumnId === toColumnId) {
        // Same column reorder
        fromTasks.splice(newIndex, 0, movedTask);
        return {
          tasks: {
            ...s.tasks,
            [fromColumnId]: fromTasks.map((t, i) => ({ ...t, position: i })),
          },
        };
      }

      // Cross column
      const toTasks = [...(s.tasks[toColumnId] || [])];
      toTasks.splice(newIndex, 0, movedTask);

      return {
        tasks: {
          ...s.tasks,
          [fromColumnId]: fromTasks.map((t, i) => ({ ...t, position: i })),
          [toColumnId]: toTasks.map((t, i) => ({ ...t, position: i })),
        },
      };
    }),

  setFilter: (key, value) =>
    set((s) => ({
      filters: { ...s.filters, [key]: value },
    })),

  clearFilters: () => set({ filters: { ...defaultFilters } }),
}));
