import type { User } from "./user.types";

export type Priority = "urgent" | "high" | "medium" | "low";

export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
  taskId: string;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  author: User;
  taskId: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  columnId: string;
  boardId: string;
  assigneeId?: string;
  assignee?: User;
  dueDate?: string;
  labels: Label[];
  subtasks: Subtask[];
  comments: Comment[];
  position: number;
  createdAt: string;
  updatedAt: string;
}
