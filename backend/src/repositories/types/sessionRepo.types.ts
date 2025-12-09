// src/repositories/types/sessionRepo.types.ts
import type { SessionMode } from '../../generated/prisma/client';

export interface CreateSessionWithResultsInput {
  createdByUserId: number;
  mode: SessionMode;
  pairs: {
    giverId: number;
    receiverId: number;
  }[];
  unmatchedUserIds: number[];
}
