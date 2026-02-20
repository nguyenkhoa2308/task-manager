import type { User, MemberRole } from "./user.types";

export interface Column {
  id: string;
  title: string;
  boardId: string;
  position: number;
  color?: string;
}

export interface BoardMember {
  userId: string;
  user: User;
  role: MemberRole;
}

export interface Board {
  id: string;
  title: string;
  description?: string;
  ownerId: string;
  owner: User;
  columns: Column[];
  members: BoardMember[];
  createdAt: string;
  updatedAt: string;
}
