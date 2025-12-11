// src/types/express.d.ts
import type { UserRole } from '../repositories/types/userRepo.types';

declare global {
  namespace Express {
    interface AuthUser {
      id: number;
      email: string;
      role: UserRole;
    }

    interface Request {
      user?: AuthUser; 
    }
  }
}


export {};
