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


const caCertPath = path.join(__dirname, '../../certs/aiven-ca.pem');
const ca = fs.readFileSync(caCertPath, 'utf8');


const pool = new pg.Pool({
  connectionString,
  ssl: {
    ca,                  
    rejectUnauthorized: true,
  },
});


const adapter = new PrismaPg(pool);


export const prisma = new PrismaClient({
  adapter,
});


process.on('beforeExit', async () => {
  await prisma.$disconnect();
  await pool.end();
});
