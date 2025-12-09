// src/repositories/sessionRepository.ts
import { prisma } from '../config/prisma';
import type { CreateSessionWithResultsInput } from './types/sessionRepo.types';

export const sessionRepository = {
  async createSessionWithResults(input: CreateSessionWithResultsInput) {
    const { createdByUserId, mode, pairs, unmatchedUserIds } = input;

    return prisma.$transaction(async (tx) => {
      // 1) kreiramo sesiju
      const session = await tx.secretSantaSession.create({
        data: {
          createdByUserId,
          mode,
        },
      });

      // 2) upišemo parove (ako ih ima)
      if (pairs.length > 0) {
        await tx.pair.createMany({
          data: pairs.map((p) => ({
            sessionId: session.id,
            giverId: p.giverId,
            receiverId: p.receiverId,
          })),
        });
      }

      // 3) upišemo unmatched (ako ih ima)
      if (unmatchedUserIds.length > 0) {
        await tx.unmatchedUser.createMany({
          data: unmatchedUserIds.map((userId) => ({
            sessionId: session.id,
            userId,
          })),
        });
      }

      // 4) vratimo sesiju sa detaljima
      return tx.secretSantaSession.findUnique({
        where: { id: session.id },
        include: {
          pairs: true,
          unmatchedUsers: true,
          createdByUser: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      });
    });
  },

  async getLatestSessionWithDetails() {
    return prisma.secretSantaSession.findFirst({
      orderBy: { createdAt: 'desc' },
      include: {
        pairs: true,
        unmatchedUsers: true,
        createdByUser: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  },
};
