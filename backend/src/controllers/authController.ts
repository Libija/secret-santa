// src/controllers/authController.ts
import { Request, Response, NextFunction } from 'express';
import { login, register } from '../services/authService';
import type { UserRole } from '../repositories/types/userRepo.types';

export async function loginHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' });
    }

    const result = await login(email, password);

    return res.status(200).json(result);
  } catch (err: any) {
    if (err instanceof Error && err.message === 'INVALID_CREDENTIALS') {
      return res
        .status(401)
        .json({ message: 'Invalid email or password' });
    }

    return next(err);
  }
}

export async function registerHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, password, firstName, lastName, role } = req.body as {
      email?: string;
      password?: string;
      firstName?: string;
      lastName?: string;
      role?: UserRole;
    };

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        message: 'email, password, firstName and lastName are required',
      });
    }

    const result = await register({
      email,
      password,
      firstName,
      lastName,
      role,
    });

    return res.status(201).json(result);
  } catch (err: any) {
    if (err instanceof Error && err.message === 'EMAIL_TAKEN') {
      return res.status(409).json({
        message: 'User with this email already exists',
      });
    }

    return next(err);
  }
}
