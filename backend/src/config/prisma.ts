// backend/src/config/prisma.ts
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set in .env');
}

// 1) Učitamo Aiven CA cert
const caCertPath = path.join(__dirname, '../../certs/aiven-ca.pem');
const ca = fs.readFileSync(caCertPath, 'utf8');

// 2) Napravimo pg pool sa pravim SSL podešenjima
const pool = new pg.Pool({
  connectionString,
  ssl: {
    ca,                  // vjerujemo baš tom CA certu
    rejectUnauthorized: true,
  },
});

// 3) Napravimo Prisma adapter
const adapter = new PrismaPg(pool);

// 4) Napravimo PrismaClient sa adapterom
export const prisma = new PrismaClient({
  adapter,
});

// 5) Graceful shutdown (nije obavezno, ali je fino)
process.on('beforeExit', async () => {
  await prisma.$disconnect();
  await pool.end();
});
