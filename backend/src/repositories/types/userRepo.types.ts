export interface CreateUserInput {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role?: 'ADMIN' | 'EMPLOYEE';
  isActive?: boolean;
}
