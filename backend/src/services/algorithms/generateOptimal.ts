// src/services/algorithms/generateOptimal.ts

export interface AlgorithmPair {
  giverId: number;
  receiverId: number;
}

export interface AlgorithmResult {
  pairs: AlgorithmPair[];
  unmatchedUserIds: number[];
}

/**
 * OPTIMALNI algoritam:
 * - svi aktivni učesnici imaju tačno jednog kome daju i od koga dobijaju
 * - nema sam sebi
 * - nema neuparenih
 */
export function generateOptimal(users: { id: number }[]): AlgorithmResult {
  const ids = users.map((u) => u.id);

  if (ids.length < 2) {
    // ako ima 0 ili 1 user -> svi su unmatched (tj. niko ne može igrat)
    return {
      pairs: [],
      unmatchedUserIds: [...ids],
    };
  }

  // napravi kopiju i promiješaj
  const shuffled = [...ids];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const pairs: AlgorithmPair[] = [];

  for (let i = 0; i < shuffled.length; i++) {
    const giverId = shuffled[i];
    const receiverId = shuffled[(i + 1) % shuffled.length]; // zadnji -> prvi

    pairs.push({ giverId, receiverId });
  }

  return {
    pairs,
    unmatchedUserIds: [], // u optimalnoj verziji nema neuparenih
  };
}
