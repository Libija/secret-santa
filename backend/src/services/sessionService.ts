// src/services/sessionService.ts
import { SessionMode } from '../generated/prisma/client';
import { userRepository } from '../repositories/userRepository';
import { sessionRepository } from '../repositories/sessionRepository';
import { generateOptimal } from './algorithms/generateOptimal';
import { generateNaive } from './algorithms/generateNaive';

export async function generateOptimalSession(adminUserId: number) {
  
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

export async function getMyLatestAssignment(userId: number) {
  const session = await sessionRepository.getLatestSessionForUser(userId);

  if (!session) {
    throw new Error('NO_SESSIONS_YET');
  }

  const pair = session.pairs[0] ?? null;
  const isUnmatched = !pair || session.unmatchedUsers.length > 0;

  if (isUnmatched) {
    return {
      sessionId: session.id,
      mode: session.mode,
      isUnmatched: true,
      receiver: null,
    };
  }

  return {
    sessionId: session.id,
    mode: session.mode,
    isUnmatched: false,
    receiver: {
      id: pair.receiver.id,
      email: pair.receiver.email,
      firstName: pair.receiver.firstName,
      lastName: pair.receiver.lastName,
    },
  };
}

export async function getAllSessionsForAdmin() {
  const sessions = await sessionRepository.listAllSessionsSummary();

  
  return sessions.map((s) => ({
    id: s.id,
    createdAt: s.createdAt,
    mode: s.mode,
    createdBy: {
      id: s.createdByUser.id,
      email: s.createdByUser.email,
      firstName: s.createdByUser.firstName,
      lastName: s.createdByUser.lastName,
    },
    pairCount: s._count.pairs,
    unmatchedCount: s._count.unmatchedUsers,
  }));
}

export async function getSessionDetailsForAdmin(sessionId: number) {
  const session = await sessionRepository.getSessionByIdWithDetails(sessionId);

  if (!session) {
    throw new Error('SESSION_NOT_FOUND');
  }

  return session;
}

