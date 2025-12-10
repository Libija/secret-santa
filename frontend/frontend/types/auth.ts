// frontend/types/auth.ts
export type UserRole = 'ADMIN' | 'EMPLOYEE';

export interface AuthUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}
