export type OpeningCategory = 
  | 'gambit' 
  | 'classical' 
  | 'defense' 
  | 'hypermodern' 
  | 'trap';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type PieceColor = 'w' | 'b';

/**
 * Tactical or strategic arrow drawn on the board:
 * [fromSquare, toSquare, color?]
 * e.g., ['b2', 'b4', 'rgba(34, 197, 94, 0.8)']
 */
export type CustomArrow = [string, string, string?];

/**
 * Common blunder at a specific point in the opening,
 * paired with the tactical punishment / refutation.
 */
export interface BlunderPunishment {
  san: string;
  from: string;
  to: string;
  blunderExplanation: string;
  refutation: string;
  refutationMoveSan: string;
}

/**
 * A single move node in the opening tree.
 * Supports tree branching via `children` for alternative lines
 * (e.g. Accepted vs Declined, or alternative defensive tries).
 */
export interface MoveNode {
  /** Unique identifier for this node */
  id: string;
  /** Standard Algebraic Notation (e.g., "b4", "Nf3", "exd4") */
  san: string;
  /** Starting square (e.g., "b2") */
  from: string;
  /** Destination square (e.g., "b4") */
  to: string;
  /** Optional promotion piece ('q', 'r', 'b', 'n') */
  promotion?: string;
  /** Resulting FEN board state after this move */
  fen: string;
  /** The side that made this move ('w' or 'b') */
  turn: PieceColor;
  /** Half-move number (ply): 1 = 1.e4, 2 = 1...e5, 3 = 2.Nf3, etc. */
  ply: number;
  /** Pedagogical explanation shown to the learner */
  annotation: string;
  /** In-depth rationale explaining *why* this move is played over others */
  whyThisMove?: string;
  /** Key strategic or tactical squares to highlight */
  keySquares?: string[];
  /** Visual arrows highlighting threats, plans, or pawn breaks */
  arrows?: CustomArrow[];
  /** Whether this move is a verified book move */
  isBookMove?: boolean;
  /** Whether this move is a book sacrifice */
  isSacrifice?: boolean;
  /** Details on sacrificed material and compensation gained */
  sacrificeInfo?: {
    material: string;
    compensation: string;
  };
  /** Known blunders and how to punish them */
  blunders?: BlunderPunishment[];
  /** Branching alternative continuation moves from this position */
  children?: MoveNode[];
  /** ID of parent node in the tree */
  parentId?: string | null;
}

/**
 * A specific variation or branch of an opening
 * (e.g., Evans Gambit Accepted vs Evans Gambit Declined).
 */
export interface Variation {
  id: string;
  openingId: string;
  name: string;
  eco: string;
  description: string;
  difficulty: DifficultyLevel;
  /** Linear primary mainline sequence of MoveNodes */
  moves: MoveNode[];
}

/**
 * Classic grandmaster or historical game showcasing this opening concept.
 */
export interface FamousGame {
  white: string;
  black: string;
  year: number;
  event: string;
  result: string;
  description: string;
  keyMomentFen?: string;
}

/**
 * Master opening definition containing core metadata, philosophy,
 * key themes, historical context, and variations.
 */
export interface Opening {
  id: string;
  slug: string;
  name: string;
  eco: string;
  category: OpeningCategory;
  /** Side that initiates or plays this system */
  side: 'white' | 'black';
  difficulty: DifficultyLevel;
  summary: string;
  /** Why play this opening? Strategic philosophy & goals */
  philosophy: string;
  /** Core strategic and tactical themes */
  keyThemes: string[];
  /** Pawn structure guidance (e.g., isolated queen pawn, open files) */
  pawnStructureInfo: string;
  /** Historic master game illustrating key motifs */
  famousGame: FamousGame;
  /** Available variations (e.g. Mainline, Accepted, Declined) */
  variations: Variation[];
}

/**
 * Interactive training lesson instance.
 */
export interface Lesson {
  id: string;
  openingId: string;
  variationId: string;
  title: string;
  objective: string;
  playerColor: 'white' | 'black';
  targetLine: MoveNode[];
}

/**
 * User progress and mastery state stored locally.
 */
export interface UserMasteryRecord {
  variationId: string;
  openingId: string;
  completed: boolean;
  attempts: number;
  flawlessRuns: number;
  lastTrainedAt: string;
}
