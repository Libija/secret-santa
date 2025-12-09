// src/routes/sessionRoutes.ts
import { Router } from 'express';
import {
  generateOptimalSessionHandler,
  generateNaiveSessionHandler,
  getLatestSessionHandler,
} from '../controllers/sessionController';
import { authMiddleware, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

// sve rute za sesije su admin-only
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

export default router;
