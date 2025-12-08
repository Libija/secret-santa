// src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import { getAllUsersForAdmin } from '../services/userService';

export async function listUsersHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const users = await getAllUsersForAdmin();

    return res.status(200).json({ users });
  } catch (err) {
    return next(err);
  }
}
