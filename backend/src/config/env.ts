// backend/src/config/env.ts
import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(process.env.PORT ?? 4000),
  DATABASE_URL: process.env.DATABASE_URL as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
};
