// src/routes/userRoutes.ts
import { Router } from 'express';
import { listUsersHandler } from '../controllers/userController';
import { authMiddleware, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

// GET /users  -> samo admin, vraća sve usere
router.get('/', authMiddleware, requireAdmin, listUsersHandler);

export default router;
