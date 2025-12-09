// src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import { getAllUsersForAdmin,setUserStatus, } from '../services/userService';


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

export async function updateUserStatusHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ message: 'Invalid user id' });
    }

    const { isActive } = req.body as { isActive?: boolean };

    if (typeof isActive !== 'boolean') {
      return res
        .status(400)
        .json({ message: 'Body must contain boolean isActive' });
    }

    const updated = await setUserStatus(id, isActive);

    return res.status(200).json(updated);
  } catch (err: any) {
    if (err instanceof Error && err.message === 'USER_NOT_FOUND') {
      return res.status(404).json({ message: 'User not found' });
    }

    return next(err);
  }
}
