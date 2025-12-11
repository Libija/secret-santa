// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import type { UserRole } from '../repositories/types/userRepo.types';

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set in .env');
}

interface AuthTokenPayload extends JwtPayload {
  sub: string;      
  email: string;
  role: UserRole;
}


export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ message: 'Missing or invalid Authorization header' });
  }

  const token = authHeader.slice('Bearer '.length);

  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthTokenPayload;

    req.user = {
      id: Number(payload.sub), 
      email: payload.email,
      role: payload.role,
    };

    return next();
  } catch (error) {
    console.error('AUTH ERROR:', error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Admin access required' });
  }

  return next();
}
