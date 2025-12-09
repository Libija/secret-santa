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

// Mali helper da promiješamo niz Fisher–Yates
function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Naivni Secret Santa algoritam:
 * - prolazi kroz givere u random poretku
 * - za svakog bira random receivera:
 *    - koji NIJE on sam
 *    - koji još nije izabran kao receiver
 * - ako za nekog givera nema validnih kandidata -> ostaje unmatched
 *
 * Pravila:
 *  - A -> B znači da B više niko ne može dobiti
 *  - ali B i dalje može dobiti A (ako je A slobodan kao receiver kad na njega dođe red)
 */
export function generateNaive(users: AlgorithmUser[]): NaiveResult {
  // edge-case: 0 ili 1 user -> niko ne može nikog dobiti
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
    // kandidati: svi koji nisu on sam i još nisu izvučeni
    const candidates = users.filter(
      (u) => u.id !== giver.id && remainingReceivers.has(u.id),
    );

    if (candidates.length === 0) {
      // nema validnih kandidata -> ovaj giver ostaje bez para
      unmatchedUserIds.push(giver.id);
      continue;
    }

    // random receiver iz liste kandidata
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const receiver = candidates[randomIndex];

    // B više niko ne može dobiti:
    remainingReceivers.delete(receiver.id);

    pairs.push({
      giverId: giver.id,
      receiverId: receiver.id,
    });
  }

  return { pairs, unmatchedUserIds };
}
