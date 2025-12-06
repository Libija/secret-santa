import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// basic middlewares
app.use(cors());
app.use(express.json());

// health-check ruta (da testiramo da backend radi)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is up 🚀' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
