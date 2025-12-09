import { Router } from 'express';
import { loginHandler,registerHandler, } from '../controllers/authController';
import { authMiddleware, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

router.post('/login', loginHandler);
router.post('/register', authMiddleware,requireAdmin,registerHandler);

export default router;
