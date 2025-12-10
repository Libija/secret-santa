export type UserRole = "ADMIN" | "EMPLOYEE";

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
}

export interface GiftResponse {
  sessionId: number;
  mode: "NAIVE" | "OPTIMAL";
  isUnmatched: boolean;
  receiver: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  } | null;
}