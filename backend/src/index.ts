import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { prisma } from './config/prisma';
import authRoutes from './routes/authRoutes';


dotenv.config();

const app = express();

// basic middlewares
app.use(cors());
app.use(express.json());

// health-check ruta (da testiramo da backend radi)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is up 🚀' });
});

app.get('/health/db', async (req, res) => {
  try {
    // najjednostavniji upit
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, message: 'DB connection OK' });
  } catch (error) {
    console.error('DB HEALTH ERROR:', error);
    res.status(500).json({ ok: false, message: 'DB connection FAILED' });
  }
});


app.use('/auth', authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
