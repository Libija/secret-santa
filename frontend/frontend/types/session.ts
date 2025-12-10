// tip iz backend service-a: getAllSessionsForAdmin
export type SessionMode = "NAIVE" | "OPTIMAL";

export interface SessionSummary {
  id: number;
  mode: SessionMode;
  createdAt: string; // iz backa dolazi kao ISO string
  pairCount: number;
  unmatchedCount: number;
  createdBy: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
}

// za detalje jedne sesije (/sessions/:id)
export interface SessionPairDetail {
  id: number;
  giver: string;
  receiver: string;
}

// ✨ novi tip za unmatched user-a
export interface UnmatchedUserSummary {
  id: number;
  fullName: string;
}

// DODANO unmatchedUsers ovdje 👇
export interface SessionDetails {
  id: number;
  pairs: SessionPairDetail[];
  unmatchedCount: number;
  unmatchedUsers: UnmatchedUserSummary[];
}

export interface CreateSessionProps {
  onSuccess: () => void;
}