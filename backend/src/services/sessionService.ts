// src/services/sessionService.ts
import { SessionMode } from '../generated/prisma/client';
import { userRepository } from '../repositories/userRepository';
import { sessionRepository } from '../repositories/sessionRepository';
import { generateOptimal } from './algorithms/generateOptimal';
import { generateNaive } from './algorithms/generateNaive';

export async function generateOptimalSession(adminUserId: number) {
  // Učesnici: svi aktivni useri (možeš kasnije ograničiti na EMPLOYEE role, ako želiš)
  const users = await userRepository.listAllActive();

  if (users.length < 2) {
    throw new Error('NOT_ENOUGH_USERS');
  }

  const { pairs, unmatchedUserIds } = generateOptimal(
    users.map((u) => ({ id: u.id })),
  );

  const session = await sessionRepository.createSessionWithResults({
    createdByUserId: adminUserId,
    mode: SessionMode.OPTIMAL,
    pairs,
    unmatchedUserIds,
  });

  return session;
}

export async function generateNaiveSession(adminUserId: number) {
  const users = await userRepository.listAllActive();

  if (users.length < 2) {
    throw new Error('NOT_ENOUGH_USERS');
  }

  const { pairs, unmatchedUserIds } = generateNaive(
    users.map((u) => ({ id: u.id })),
  );

  const session = await sessionRepository.createSessionWithResults({
    createdByUserId: adminUserId,
    mode: SessionMode.NAIVE,
    pairs,
    unmatchedUserIds,
  });

  return session;
}

export async function getLatestSessionForAdmin() {
  const session = await sessionRepository.getLatestSessionWithDetails();

  if (!session) {
    throw new Error('NO_SESSIONS_YET');
  }

  return session;
}
