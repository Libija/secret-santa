// src/controllers/sessionController.ts
import { Request, Response, NextFunction } from 'express';
import {
  generateOptimalSession,
  generateNaiveSession,
  getLatestSessionForAdmin,
  getMyLatestAssignment,
} from '../services/sessionService';

export async function generateOptimalSessionHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const session = await generateOptimalSession(req.user.id);

    return res.status(201).json(session);
  } catch (err: any) {
    if (err instanceof Error && err.message === 'NOT_ENOUGH_USERS') {
      return res.status(400).json({
        message: 'At least two active users are required to generate a session',
      });
    }

    return next(err);
  }
}

export async function generateNaiveSessionHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const session = await generateNaiveSession(req.user.id);

    return res.status(201).json(session);
  } catch (err: any) {
    if (err instanceof Error && err.message === 'NOT_ENOUGH_USERS') {
      return res.status(400).json({
        message: 'At least two active users are required to generate a session',
      });
    }

    return next(err);
  }
}

export async function getLatestSessionHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const session = await getLatestSessionForAdmin();

    return res.status(200).json(session);
  } catch (err: any) {
    if (err instanceof Error && err.message === 'NO_SESSIONS_YET') {
      return res.status(404).json({
        message: 'No Secret Santa sessions have been created yet',
      });
    }

    return next(err);
  }
}

export async function getMyLatestAssignmentHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const result = await getMyLatestAssignment(req.user.id);

    return res.status(200).json(result);
  } catch (err: any) {
    if (err instanceof Error && err.message === 'NO_SESSIONS_YET') {
      return res.status(404).json({
        message: 'No Secret Santa sessions have been created yet',
      });
    }

    return next(err);
  }
}

