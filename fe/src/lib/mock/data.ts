import type { User, Board, Column, Task, Label } from "@/types";

// ===== Users =====
export const mockUsers: User[] = [
  {
    id: "user-1",
    username: "khoa",
    email: "khoa@taskflow.dev",
    displayName: "Khoa Nguyen",
    createdAt: "2025-01-15",
  },
  {
    id: "user-2",
    username: "linh",
    email: "linh@taskflow.dev",
    displayName: "Linh Tran",
    createdAt: "2025-02-01",
  },
  {
    id: "user-3",
    username: "minh",
    email: "minh@taskflow.dev",
    displayName: "Minh Le",
    createdAt: "2025-02-10",
  },
];

// ===== Labels =====
export const mockLabels: Label[] = [
  { id: "label-1", name: "Design", color: "#8b5cf6" },
  { id: "label-2", name: "Frontend", color: "#3b82f6" },
  { id: "label-3", name: "Backend", color: "#10b981" },
  { id: "label-4", name: "Bug", color: "#ef4444" },
  { id: "label-5", name: "Feature", color: "#f59e0b" },
];

// ===== Columns =====
export const mockColumns: Column[] = [
  {
    id: "col-1",
    title: "Todo",
    boardId: "board-1",
    position: 0,
    color: "#6366f1",
  },
  {
    id: "col-2",
    title: "In Progress",
    boardId: "board-1",
    position: 1,
    color: "#f59e0b",
  },
  {
    id: "col-3",
    title: "Completed",
    boardId: "board-1",
    position: 2,
    color: "#22c55e",
  },
  {
    id: "col-4",
    title: "Revised",
    boardId: "board-1",
    position: 3,
    color: "#ef4444",
  },
];

// ===== Tasks =====
export const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Design landing page",
    description: "Create responsive layout with hero section and feature cards",
    priority: "high",
    columnId: "col-1",
    boardId: "board-1",
    assigneeId: "user-1",
    assignee: mockUsers[0],
    dueDate: "2025-03-01",
    labels: [mockLabels[0], mockLabels[1]],
    subtasks: [
      { id: "st-1", title: "Wireframe", completed: true, taskId: "task-1" },
      { id: "st-2", title: "UI mockup", completed: true, taskId: "task-1" },
      { id: "st-3", title: "Code layout", completed: false, taskId: "task-1" },
      {
        id: "st-4",
        title: "Responsive test",
        completed: false,
        taskId: "task-1",
      },
    ],
    comments: [],
    position: 0,
    createdAt: "2025-02-01",
    updatedAt: "2025-02-15",
  },
  {
    id: "task-2",
    title: "Setup authentication",
    description: "Implement NextAuth with GitHub and Google providers",
    priority: "urgent",
    columnId: "col-1",
    boardId: "board-1",
    assigneeId: "user-2",
    assignee: mockUsers[1],
    dueDate: "2025-02-25",
    labels: [mockLabels[1], mockLabels[4]],
    subtasks: [
      {
        id: "st-5",
        title: "Install NextAuth",
        completed: true,
        taskId: "task-2",
      },
      {
        id: "st-6",
        title: "Configure providers",
        completed: false,
        taskId: "task-2",
      },
    ],
    comments: [],
    position: 1,
    createdAt: "2025-02-05",
    updatedAt: "2025-02-18",
  },
  {
    id: "task-3",
    title: "Create API endpoints",
    description: "Build REST API for boards and tasks CRUD",
    priority: "medium",
    columnId: "col-2",
    boardId: "board-1",
    assigneeId: "user-3",
    assignee: mockUsers[2],
    dueDate: "2025-03-05",
    labels: [mockLabels[2]],
    subtasks: [
      { id: "st-7", title: "Board CRUD", completed: true, taskId: "task-3" },
      { id: "st-8", title: "Task CRUD", completed: true, taskId: "task-3" },
      { id: "st-9", title: "Column CRUD", completed: false, taskId: "task-3" },
    ],
    comments: [],
    position: 0,
    createdAt: "2025-02-03",
    updatedAt: "2025-02-17",
  },
  {
    id: "task-4",
    title: "Implement drag and drop",
    description: "Use @dnd-kit for kanban board drag and drop functionality",
    priority: "high",
    columnId: "col-2",
    boardId: "board-1",
    assigneeId: "user-1",
    assignee: mockUsers[0],
    dueDate: "2025-03-10",
    labels: [mockLabels[1], mockLabels[4]],
    subtasks: [],
    comments: [],
    position: 1,
    createdAt: "2025-02-10",
    updatedAt: "2025-02-16",
  },
  {
    id: "task-5",
    title: "Fix sidebar responsive",
    description: "Sidebar should collapse on mobile screens",
    priority: "low",
    columnId: "col-3",
    boardId: "board-1",
    assigneeId: "user-2",
    assignee: mockUsers[1],
    labels: [mockLabels[3]],
    subtasks: [
      {
        id: "st-10",
        title: "Add media query",
        completed: true,
        taskId: "task-5",
      },
      {
        id: "st-11",
        title: "Test on mobile",
        completed: true,
        taskId: "task-5",
      },
    ],
    comments: [],
    position: 0,
    createdAt: "2025-02-08",
    updatedAt: "2025-02-14",
  },
  {
    id: "task-6",
    title: "Setup Prisma schema",
    description: "Define database models for users, boards, tasks",
    priority: "medium",
    columnId: "col-3",
    boardId: "board-1",
    assigneeId: "user-3",
    assignee: mockUsers[2],
    labels: [mockLabels[2]],
    subtasks: [],
    comments: [],
    position: 1,
    createdAt: "2025-02-06",
    updatedAt: "2025-02-12",
  },
  {
    id: "task-7",
    title: "Review color system",
    description: "Check color contrast and accessibility compliance",
    priority: "low",
    columnId: "col-4",
    boardId: "board-1",
    assigneeId: "user-1",
    assignee: mockUsers[0],
    labels: [mockLabels[0]],
    subtasks: [],
    comments: [],
    position: 0,
    createdAt: "2025-02-11",
    updatedAt: "2025-02-13",
  },
  {
    id: "task-8",
    title: "Write unit tests",
    description: "Add Vitest tests for stores and utility functions",
    priority: "medium",
    columnId: "col-1",
    boardId: "board-1",
    assigneeId: "user-2",
    assignee: mockUsers[1],
    dueDate: "2025-03-15",
    labels: [mockLabels[4]],
    subtasks: [
      { id: "st-12", title: "Store tests", completed: false, taskId: "task-8" },
      { id: "st-13", title: "Hook tests", completed: false, taskId: "task-8" },
    ],
    comments: [],
    position: 2,
    createdAt: "2025-02-12",
    updatedAt: "2025-02-18",
  },
  {
    id: "task-9",
    title: "Setup CI/CD pipeline",
    description: "GitHub Actions for lint, test, and build",
    priority: "low",
    columnId: "col-1",
    boardId: "board-1",
    assigneeId: "user-3",
    assignee: mockUsers[2],
    labels: [mockLabels[2], mockLabels[4]],
    subtasks: [],
    comments: [],
    position: 3,
    createdAt: "2025-02-14",
    updatedAt: "2025-02-18",
  },
  {
    id: "task-10",
    title: "Add real-time with Pusher",
    description: "Setup Pusher for board-level real-time sync",
    priority: "high",
    columnId: "col-2",
    boardId: "board-1",
    assigneeId: "user-1",
    assignee: mockUsers[0],
    dueDate: "2025-03-12",
    labels: [mockLabels[1], mockLabels[2]],
    subtasks: [],
    comments: [],
    position: 2,
    createdAt: "2025-02-15",
    updatedAt: "2025-02-18",
  },
];

// ===== Boards =====
export const mockBoards: Board[] = [
  {
    id: "board-1",
    title: "TaskFlow Development",
    description: "Main development board for TaskFlow app",
    ownerId: "user-1",
    owner: mockUsers[0],
    columns: mockColumns,
    members: [
      { userId: "user-1", user: mockUsers[0], role: "owner" },
      { userId: "user-2", user: mockUsers[1], role: "admin" },
      { userId: "user-3", user: mockUsers[2], role: "member" },
    ],
    createdAt: "2025-01-20",
    updatedAt: "2025-02-18",
  },
  {
    id: "board-2",
    title: "Marketing Campaign",
    description: "Q1 2025 marketing tasks and content calendar",
    ownerId: "user-2",
    owner: mockUsers[1],
    columns: [
      {
        id: "col-5",
        title: "Backlog",
        boardId: "board-2",
        position: 0,
        color: "#6366f1",
      },
      {
        id: "col-6",
        title: "In Progress",
        boardId: "board-2",
        position: 1,
        color: "#f59e0b",
      },
      {
        id: "col-7",
        title: "Done",
        boardId: "board-2",
        position: 2,
        color: "#22c55e",
      },
    ],
    members: [
      { userId: "user-2", user: mockUsers[1], role: "owner" },
      { userId: "user-1", user: mockUsers[0], role: "member" },
    ],
    createdAt: "2025-02-01",
    updatedAt: "2025-02-15",
  },
];

// ===== Helper: lay tasks theo board =====
export function getTasksByBoard(boardId: string): Record<string, Task[]> {
  const boardTasks = mockTasks.filter((t) => t.boardId === boardId);
  const grouped: Record<string, Task[]> = {};

  const board = mockBoards.find((b) => b.id === boardId);
  if (board) {
    board.columns.forEach((col) => {
      grouped[col.id] = boardTasks
        .filter((t) => t.columnId === col.id)
        .sort((a, b) => a.position - b.position);
    });
  }

  return grouped;
}
