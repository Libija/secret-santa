// src/routes/sessionRoutes.ts
import { Router } from 'express';
import {
  generateOptimalSessionHandler,
  generateNaiveSessionHandler,
  getLatestSessionHandler,
  getMyLatestAssignmentHandler,
  getSessionByIdHandler,
  listSessionsHandler
} from '../controllers/sessionController';
import { authMiddleware, requireAdmin } from '../middleware/authMiddleware';

const router = Router();


router.post(
  '/generate-optimal',
  authMiddleware,
  requireAdmin,
  generateOptimalSessionHandler,
);

router.post(
  '/generate-naive',
  authMiddleware,
  requireAdmin,
  generateNaiveSessionHandler,
);

router.get(
  '/latest',
  authMiddleware,
  requireAdmin,
  getLatestSessionHandler,
);

router.get(
  '/me/latest',
  authMiddleware,                
  getMyLatestAssignmentHandler,
);

router.get(
  '/',
  authMiddleware,
  requireAdmin,
  listSessionsHandler,
);


router.get(
  '/:id',
  authMiddleware,
  requireAdmin,
  getSessionByIdHandler,
);


export default router;
