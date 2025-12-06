export type UserRole = 'ADMIN' | 'EMPLOYEE';

export interface CreateUserInput {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role?: UserRole;
  isActive?: boolean;
}
