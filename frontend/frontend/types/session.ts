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


export interface SessionPairDetail {
  id: number;
  giver: string;
  receiver: string;
}


export interface UnmatchedUserSummary {
  id: number;
  fullName: string;
}


export interface SessionDetails {
  id: number;
  pairs: SessionPairDetail[];
  unmatchedCount: number;
  unmatchedUsers: UnmatchedUserSummary[];
}

export interface CreateSessionProps {
  onSuccess: () => void;
}