export type MemberRole = "owner" | "admin" | "member" | "viewer";

export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}
