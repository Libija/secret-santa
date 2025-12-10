export type UserRole = "ADMIN" | "EMPLOYEE";

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
}