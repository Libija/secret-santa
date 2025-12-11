// src/repositories/sessionRepository.ts
import { prisma } from '../config/prisma';
import type { CreateSessionWithResultsInput } from './types/sessionRepo.types';

export const sessionRepository = {
  async createSessionWithResults(input: CreateSessionWithResultsInput) {
    const { createdByUserId, mode, pairs, unmatchedUserIds } = input;

    return prisma.$transaction(async (tx) => {
      
      const session = await tx.secretSantaSession.create({
        data: {
          createdByUserId,
          mode,
        },
      });

      
      if (pairs.length > 0) {
        await tx.pair.createMany({
          data: pairs.map((p) => ({
            sessionId: session.id,
            giverId: p.giverId,
            receiverId: p.receiverId,
          })),
        });
      }

      
      if (unmatchedUserIds.length > 0) {
        await tx.unmatchedUser.createMany({
          data: unmatchedUserIds.map((userId) => ({
            sessionId: session.id,
            userId,
          })),
        });
      }

      
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

    async getLatestSessionForUser(userId: number) {
    return prisma.secretSantaSession.findFirst({
      orderBy: { createdAt: 'desc' },
      include: {
        
        pairs: {
          where: { giverId: userId },
          include: {
            receiver: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
       
        unmatchedUsers: {
          where: { userId },
        },
        
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

  async listAllSessionsSummary() {
    return prisma.secretSantaSession.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        createdByUser: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        _count: {
          select: {
            pairs: true,
            unmatchedUsers: true,
          },
        },
      },
    });
  },

  
  async getSessionByIdWithDetails(id: number) {
    return prisma.secretSantaSession.findUnique({
      where: { id },
      include: {
        createdByUser: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        pairs: {
          include: {
            giver: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
            receiver: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
        unmatchedUsers: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
  },

};
