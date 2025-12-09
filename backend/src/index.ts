import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { prisma } from './config/prisma';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import sessionRoutes from './routes/sessionRoutes';



import { authMiddleware } from './middleware/authMiddleware';


dotenv.config();

const app = express();

// basic middlewares
app.use(cors());
app.use(express.json());

// health-check ruta (da testiramo da backend radi)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is up 🚀' });
});

app.get('/health/db', authMiddleware, async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      ok: true,
      message: 'DB connection OK',
      user: req.user, // samo da vidiš da middleware radi
    });
  } catch (error) {
    console.error('DB HEALTH ERROR:', error);
    res.status(500).json({ ok: false, message: 'DB connection FAILED' });
  }
});



app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/sessions', sessionRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
