// src/services/algorithms/generateNaive.ts

export interface AlgorithmUser {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface NaiveResult {
  pairs: { giverId: number; receiverId: number }[];
  unmatchedUserIds: number[];
}


function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


export function generateNaive(users: AlgorithmUser[]): NaiveResult {
  
  if (users.length <= 1) {
    return {
      pairs: [],
      unmatchedUserIds: users.map((u) => u.id),
    };
  }

  const givers = shuffle(users);
  const remainingReceivers = new Set(users.map((u) => u.id));

  const pairs: { giverId: number; receiverId: number }[] = [];
  const unmatchedUserIds: number[] = [];

  for (const giver of givers) {
    
    const candidates = users.filter(
      (u) => u.id !== giver.id && remainingReceivers.has(u.id),
    );

    if (candidates.length === 0) {
      
      unmatchedUserIds.push(giver.id);
      continue;
    }

    
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const receiver = candidates[randomIndex];

    
    remainingReceivers.delete(receiver.id);

    pairs.push({
      giverId: giver.id,
      receiverId: receiver.id,
    });
  }

  return { pairs, unmatchedUserIds };
}
