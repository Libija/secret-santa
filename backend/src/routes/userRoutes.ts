// src/routes/userRoutes.ts
import { Router } from 'express';
import { listUsersHandler,updateUserStatusHandler } from '../controllers/userController';
import { authMiddleware, requireAdmin } from '../middleware/authMiddleware';

const router = Router();


router.get('/', authMiddleware, requireAdmin, listUsersHandler);
router.patch('/:id/status', authMiddleware, requireAdmin, updateUserStatusHandler);

export default router;
