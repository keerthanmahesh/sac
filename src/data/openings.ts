import { Opening } from '../types/chess';

export const OPENINGS_DATA: Opening[] = [
  // ==========================================
  // 1. EVANS GAMBIT
  // ==========================================
  {
    id: 'evans-gambit',
    slug: 'evans-gambit',
    name: "Evans Gambit",
    eco: 'C51',
    category: 'gambit',
    side: 'white',
    difficulty: 'intermediate',
    summary: 'A romantic 19th-century attacking weapon offering the b-pawn to seize total central dominance and blitz Black\'s king.',
    philosophy: 'White sacrifices the b4-pawn on move 4 to lure Black\'s dark-squared bishop off the active c5 diagonal, gain tempo with c3, establish a classical pawn center with d4, and open rapid avenues toward Black\'s fragile f7 point.',
    keyThemes: [
      'Rapid piece development ahead of Black',
      'Classical pawn center with c3 and d4',
      'Targeting the weak f7 focal point with Bc4, Qb3, or Ng5',
      'Cutting off Black\'s king from castling with Ba3'
    ],
    pawnStructureInfo: 'White willingly surrenders the queenside wing pawn (b2-b4) to create a mobile central duo (c3-d4-e4) that blows open the c-, d-, and e-files against the uncastled enemy king.',
    famousGame: {
      white: 'Adolf Anderssen',
      black: 'Jean Dufresne',
      year: 1852,
      event: 'Berlin (The "Evergreen Game")',
      result: '1-0',
      description: 'One of the most famous games in chess history. Anderssen sacrifices both rooks and a queen to deliver a picturesque checkmate with bishop and knight, born directly out of the Evans Gambit!',
      keyMomentFen: 'r1b2rk1/ppp1bppp/8/8/1B1q4/1B1P4/P1P2PPP/RN1Q1RK1 w - - 0 13'
    },
    variations: [
      {
        "id": "evans-compromised-defense",
        "openingId": "evans-gambit",
        "name": "Compromised Defense & King Hunt (11.Ba3!)",
        "eco": "C51",
        "description": "White sacrifices three pawns to completely dismantle Black's defenses. With 11.Ba3!, White slices the board and traps Black's king in the crossfire of the open center.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "ev-comp-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "White opens with 1.e4, taking control of central squares.",
            "whyThisMove": "Controls e4 and d5 while freeing bishop and queen.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black replies symmetrically with 1...e5.",
            "whyThisMove": "Matches White's stake in the center.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White attacks the undefended e5 pawn.",
            "whyThisMove": "Develops with tempo against e5.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black defends e5 with natural knight development.",
            "whyThisMove": "Safeguards e5 and guards d4.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-5",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Italian Game. White targets the weak f7 square.",
            "whyThisMove": "Eyes the weakest square in Black's camp.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-6",
            "san": "Bc5",
            "from": "f8",
            "to": "c5",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Giuoco Piano. Black mirrors White's bishop placement.",
            "whyThisMove": "Active minor piece development.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-7",
            "san": "b4",
            "from": "b2",
            "to": "b4",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "THE EVANS GAMBIT! White sacrifices the b-pawn on move 4.",
            "whyThisMove": "Lures Black's bishop off c5 to gain tempo with c3 and conquer the center with d4.",
            "isBookMove": true,
            "arrows": [
              [
                "b2",
                "b4",
                "rgba(249, 115, 22, 0.9)"
              ],
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.8)"
              ]
            ],
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "b-pawn (1 point)",
              "compensation": "Huge lead in development, open center, and open diagonals."
            }
          },
          {
            "id": "ev-comp-8",
            "san": "Bxb4",
            "from": "c5",
            "to": "b4",
            "fen": "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black accepts the gambit pawn.",
            "whyThisMove": "Tests White's compensation.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-9",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/2P2N2/P2P1PPP/RNBQK2R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White hits the bishop with tempo, preparing d2-d4.",
            "whyThisMove": "Gains time and creates the ideal central pawn duo.",
            "isBookMove": true,
            "arrows": [
              [
                "c3",
                "b4",
                "rgba(239, 68, 68, 0.8)"
              ],
              [
                "c3",
                "d4",
                "rgba(34, 197, 94, 0.8)"
              ]
            ]
          },
          {
            "id": "ev-comp-10",
            "san": "Ba5",
            "from": "b4",
            "to": "a5",
            "fen": "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6",
            "turn": "b",
            "ply": 10,
            "annotation": "The classical retreat, keeping pressure on the c3 pin.",
            "whyThisMove": "Preserves the bishop along the a5-e1 diagonal.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-11",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bqk1nr/pppp1ppp/2n5/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White strikes at the center immediately!",
            "whyThisMove": "Opens lines for pieces and challenges e5.",
            "isBookMove": true,
            "arrows": [
              [
                "d4",
                "e5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ev-comp-12",
            "san": "exd4",
            "from": "e5",
            "to": "d4",
            "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black captures the central pawn.",
            "whyThisMove": "Liquidation in the center.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-13",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 b kq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White castles into safety, offering yet another pawn on c3!",
            "whyThisMove": "Brings the king's rook to the semi-open f/e files without wasting time recapturing.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "c3 pawn (1 point)",
              "compensation": "Open e-file and tremendous speed in piece mobilization."
            }
          },
          {
            "id": "ev-comp-14",
            "san": "dxc3",
            "from": "d4",
            "to": "c3",
            "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2p2N2/P4PPP/RNBQ1RK1 w kq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "The Compromised Defense! Black greedily devours a third pawn.",
            "whyThisMove": "Snatching pawns while falling drastically behind in development.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-15",
            "san": "Qb3",
            "from": "d1",
            "to": "b3",
            "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/1Qp2N2/P4PPP/RNB2RK1 b kq - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White creates the legendary queen and bishop battery targeting f7!",
            "whyThisMove": "Threatens immediate destruction on f7.",
            "isBookMove": true,
            "arrows": [
              [
                "b3",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "ev-comp-16",
            "san": "Qf6",
            "from": "d8",
            "to": "f6",
            "fen": "r1b1k1nr/pppp1ppp/2n2q2/b7/2B1P3/1Qp2N2/P4PPP/RNB2RK1 w kq - 2 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black scrambles to defend f7 with the queen.",
            "whyThisMove": "Only viable way to guard the f7 focal point.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-17",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "r1b1k1nr/pppp1ppp/2n2q2/b3P3/2B5/1Qp2N2/P4PPP/RNB2RK1 b kq - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "7.e5! White attacks Black's defending queen with tempo, deflecting it away!",
            "whyThisMove": "Forces the queen away from ideal defensive squares.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "f6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "ev-comp-18",
            "san": "Qg6",
            "from": "f6",
            "to": "g6",
            "fen": "r1b1k1nr/pppp1ppp/2n3q1/b3P3/2B5/1Qp2N2/P4PPP/RNB2RK1 w kq - 1 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black's queen sidesteps to g6, eyeing the g2 point.",
            "whyThisMove": "Maintains contact with the kingside.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-19",
            "san": "Nxc3",
            "from": "b1",
            "to": "c3",
            "fen": "r1b1k1nr/pppp1ppp/2n3q1/b3P3/2B5/1QN2N2/P4PPP/R1B2RK1 b kq - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White develops the queenside knight, reclaiming material with complete control.",
            "whyThisMove": "Centralizes the knight and controls d5.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-20",
            "san": "Nge7",
            "from": "g8",
            "to": "e7",
            "fen": "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/1QN2N2/P4PPP/R1B2RK1 w kq - 1 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black tries desperately to prepare kingside castling.",
            "whyThisMove": "Attempts to evacuate the king.",
            "isBookMove": true
          },
          {
            "id": "ev-comp-21",
            "san": "Ba3",
            "from": "c1",
            "to": "a3",
            "fen": "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/BQN2N2/P4PPP/R4RK1 b kq - 2 11",
            "turn": "w",
            "ply": 21,
            "annotation": "11.Ba3!! THE MASTERSTROKE! White slices the a3-f8 diagonal, permanently trapping Black's king in the center!",
            "whyThisMove": "Prevents Black from ever castling. Black's king is now trapped in the open center under lethal attack.",
            "isBookMove": true,
            "arrows": [
              [
                "a3",
                "f8",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "evans-declined",
        "openingId": "evans-gambit",
        "name": "Evans Gambit Declined (4...Bb6 & Queenside Squeeze)",
        "eco": "C51",
        "description": "When Black declines the gambit pawn with 4...Bb6, White seizes queenside space with 5.a4 and establishes a stranglehold on the center with c3 and d3.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "ev-dec-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "White opens 1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black plays 1...e5.",
            "whyThisMove": "Symmetrical response.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Attacks e5.",
            "whyThisMove": "Tempo development.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Defends e5.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-5",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Targets f7.",
            "whyThisMove": "Italian bishop placement.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-6",
            "san": "Bc5",
            "from": "f8",
            "to": "c5",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black plays 3...Bc5.",
            "whyThisMove": "Giuoco Piano.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-7",
            "san": "b4",
            "from": "b2",
            "to": "b4",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "The Evans Gambit! White offers the b-pawn.",
            "whyThisMove": "Challenging the bishop.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "b-pawn (1 point)",
              "compensation": "Dynamic initiative."
            }
          },
          {
            "id": "ev-dec-8",
            "san": "Bb6",
            "from": "c5",
            "to": "b6",
            "fen": "r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black declines the gambit with 4...Bb6, avoiding White's tactical traps.",
            "whyThisMove": "Keeps bishop safe without accepting pawn.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-9",
            "san": "a4",
            "from": "a2",
            "to": "a4",
            "fen": "r1bqk1nr/pppp1ppp/1bn5/4p3/PPB1P3/5N2/2PP1PPP/RNBQK2R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White immediately strikes on the wing with 5.a4, threatening to trap the bishop with a5!",
            "whyThisMove": "Threatens to win the bishop with a5.",
            "isBookMove": true,
            "arrows": [
              [
                "a4",
                "a5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ev-dec-10",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bqk1nr/1ppp1ppp/pbn5/4p3/PPB1P3/5N2/2PP1PPP/RNBQK2R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black creates an escape hatch for the bishop on a7.",
            "whyThisMove": "Provides retreat square.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-11",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r1bqk1nr/1ppp1ppp/pbn5/4p3/PPB1P3/2P2N2/3P1PPP/RNBQK2R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White bolsters the center and prepares d2-d4.",
            "whyThisMove": "Pawn center reinforcement.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-12",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqk2r/1ppp1ppp/pbn2n2/4p3/PPB1P3/2P2N2/3P1PPP/RNBQK2R w KQkq - 1 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops the knight and counter-attacks e4.",
            "whyThisMove": "Kingside piece development.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-13",
            "san": "d3",
            "from": "d2",
            "to": "d3",
            "fen": "r1bqk2r/1ppp1ppp/pbn2n2/4p3/PPB1P3/2PP1N2/5PPP/RNBQK2R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "Solid! White protects e4 while unlocking the dark-squared bishop.",
            "whyThisMove": "Consolidates central advantage.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-14",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bqk2r/1pp2ppp/pbnp1n2/4p3/PPB1P3/2PP1N2/5PPP/RNBQK2R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black supports e5 and frees the c8 bishop.",
            "whyThisMove": "Solid pawn chain.",
            "isBookMove": true
          },
          {
            "id": "ev-dec-15",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqk2r/1pp2ppp/pbnp1n2/4p3/PPB1P3/2PP1N2/5PPP/RNBQ1RK1 b kq - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White castles into safety with a superior spatial grip and easy attacking plans.",
            "whyThisMove": "King safety and rook activation.",
            "isBookMove": true
          }
        ]
      }
    ]
  },

  // ==========================================
  // 2. ITALIAN GAME (FOUNDATIONAL OPENING)
  // ==========================================
  {
    id: 'italian-game',
    slug: 'italian-game',
    name: 'Italian Game (Giuoco Piano)',
    eco: 'C50',
    category: 'classical',
    side: 'white',
    difficulty: 'beginner',
    summary: 'The classic foundation of chess strategy. Rapid piece mobilization, harmonious development, and pressure on f7 without sacrificing material.',
    philosophy: 'Unlike gambits which sacrifice pawns for speed, the classical Italian Game builds a stable, enduring positional advantage. White develops pieces naturally toward central influence, secures king safety, and prepares a patient central pawn push.',
    keyThemes: [
      'Rapid kingside development and castling',
      'Targeting f7 with Bc4',
      'Flexible central pawn duo with c3 and d3/d4',
      'Maneuvering the knight via Nbd2-f1-g3 to join the kingside attack'
    ],
    pawnStructureInfo: 'Maintains symmetrical e4/e5 pawns. White reinforces e4 with d3 (Giuoco Pianissimo) and supports a future d4 thrust with c3.',
    famousGame: {
      white: 'Garry Kasparov',
      black: 'Viswanathan Anand',
      year: 1996,
      event: 'Dos Hermanas',
      result: '1-0',
      description: 'Kasparov demonstrated the profound attacking depth hidden in the quiet Italian Game, executing a devastating kingside knight maneuver.',
      keyMomentFen: 'r2q1rk1/1pp2ppp/p1np1n2/2b1p1B1/2B1P1b1/2PP1N2/PP3PPP/RN1Q1RK1 w - - 0 9'
    },
    variations: [
      {
        "id": "italian-moller-attack",
        "openingId": "italian-game",
        "name": "Moller Attack - Evans-Style Central Crush (9.d5!)",
        "eco": "C54",
        "description": "The sharpest weapon in the Giuoco Piano! White plays 4.c3 and 5.d4!, sacrificing central pawns to blast open the e-file and tie Black's pieces into knots with 9.d5! and 12.Bg5!.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "it-moller-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "White opens with the king's pawn.",
            "whyThisMove": "Controls e4 and d5.",
            "isBookMove": true
          },
          {
            "id": "it-moller-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black mirrors centrally.",
            "whyThisMove": "Prevents White from seizing full center.",
            "isBookMove": true
          },
          {
            "id": "it-moller-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White attacks the undefended e5 pawn.",
            "whyThisMove": "Develops with tempo.",
            "isBookMove": true
          },
          {
            "id": "it-moller-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black defends e5.",
            "whyThisMove": "Natural piece development.",
            "isBookMove": true
          },
          {
            "id": "it-moller-5",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Italian Game! White targets the weak f7 focal point.",
            "whyThisMove": "Aims at f7 square.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "it-moller-6",
            "san": "Bc5",
            "from": "f8",
            "to": "c5",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Giuoco Piano: Black actively develops the bishop.",
            "whyThisMove": "Controls active diagonal.",
            "isBookMove": true
          },
          {
            "id": "it-moller-7",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White prepares the classical d2-d4 pawn wedge.",
            "whyThisMove": "Prepares central dominance.",
            "isBookMove": true
          },
          {
            "id": "it-moller-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black counter-attacks White's e4 pawn.",
            "whyThisMove": "Attacks e4 pawn.",
            "isBookMove": true
          },
          {
            "id": "it-moller-9",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "BOOM! White blasts open the center immediately!",
            "whyThisMove": "Strikes at e5 and c5.",
            "isBookMove": true,
            "arrows": [
              [
                "d4",
                "e5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "it-moller-10",
            "san": "exd4",
            "from": "e5",
            "to": "d4",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black captures the central pawn.",
            "whyThisMove": "Must address central tension.",
            "isBookMove": true
          },
          {
            "id": "it-moller-11",
            "san": "cxd4",
            "from": "c3",
            "to": "d4",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BPP3/5N2/PP3PPP/RNBQK2R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White recaptures with the c-pawn, creating the ideal central duo.",
            "whyThisMove": "Maintains pawn center.",
            "isBookMove": true
          },
          {
            "id": "it-moller-12",
            "san": "Bb4+",
            "from": "c5",
            "to": "b4",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Check! Black gives check to force White's hand.",
            "whyThisMove": "Pins White's king or piece.",
            "isBookMove": true,
            "arrows": [
              [
                "b4",
                "e1",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "it-moller-13",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/2N2N2/PP3PPP/R1BQK2R b KQkq - 2 7",
            "turn": "w",
            "ply": 13,
            "annotation": "THE MOLLER ATTACK! White offers the e4 pawn as bait!",
            "whyThisMove": "Sacrifices e4 pawn for lightning development.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "e4 pawn (1 point)",
              "compensation": "Massive development lead and open e-file attack."
            }
          },
          {
            "id": "it-moller-14",
            "san": "Nxe4",
            "from": "f6",
            "to": "e4",
            "fen": "r1bqk2r/pppp1ppp/2n5/8/1bBPn3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black takes the bait, capturing on e4.",
            "whyThisMove": "Greedily grabs material.",
            "isBookMove": true
          },
          {
            "id": "it-moller-15",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqk2r/pppp1ppp/2n5/8/1bBPn3/2N2N2/PP3PPP/R1BQ1RK1 b kq - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White castles into safety, bringing the rook to the open e-file!",
            "whyThisMove": "Prepares Re1 pin.",
            "isBookMove": true
          },
          {
            "id": "it-moller-16",
            "san": "Bxc3",
            "from": "b4",
            "to": "c3",
            "fen": "r1bqk2r/pppp1ppp/2n5/8/2BPn3/2b2N2/PP3PPP/R1BQ1RK1 w kq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black captures on c3, hoping to survive the coming storm.",
            "whyThisMove": "Trades bishop for knight.",
            "isBookMove": true
          },
          {
            "id": "it-moller-17",
            "san": "d5",
            "from": "d4",
            "to": "d5",
            "fen": "r1bqk2r/pppp1ppp/2n5/3P4/2B1n3/2b2N2/PP3PPP/R1BQ1RK1 b kq - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "9.d5!! THE MOLLER THRUST! White attacks Black's knight and fractures Black's coordination!",
            "whyThisMove": "Splits Black's defenders and cuts off retreat squares.",
            "isBookMove": true,
            "arrows": [
              [
                "d5",
                "c6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "it-moller-18",
            "san": "Bf6",
            "from": "c3",
            "to": "f6",
            "fen": "r1bqk2r/pppp1ppp/2n2b2/3P4/2B1n3/5N2/PP3PPP/R1BQ1RK1 w kq - 1 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black retreats the bishop to f6 to guard the kingside.",
            "whyThisMove": "Guards against kingside collapse.",
            "isBookMove": true
          },
          {
            "id": "it-moller-19",
            "san": "Re1",
            "from": "f1",
            "to": "e1",
            "fen": "r1bqk2r/pppp1ppp/2n2b2/3P4/2B1n3/5N2/PP3PPP/R1BQR1K1 b kq - 2 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White's rook pins the e4 knight against the black king!",
            "whyThisMove": "Pins knight down the e-file.",
            "isBookMove": true,
            "arrows": [
              [
                "e1",
                "e8",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "it-moller-20",
            "san": "Ne7",
            "from": "c6",
            "to": "e7",
            "fen": "r1bqk2r/ppppnppp/5b2/3P4/2B1n3/5N2/PP3PPP/R1BQR1K1 w kq - 3 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black develops knight to e7 to reinforce the camp.",
            "whyThisMove": "Blocks e-file.",
            "isBookMove": true
          },
          {
            "id": "it-moller-21",
            "san": "Rxe4",
            "from": "e1",
            "to": "e4",
            "fen": "r1bqk2r/ppppnppp/5b2/3P4/2B1R3/5N2/PP3PPP/R1BQ2K1 b kq - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White regains the piece with total board domination!",
            "whyThisMove": "Reclaims material with attacking rook.",
            "isBookMove": true
          },
          {
            "id": "it-moller-22",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bqk2r/ppp1nppp/3p1b2/3P4/2B1R3/5N2/PP3PPP/R1BQ2K1 w kq - 0 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black tries to free the c8 bishop.",
            "whyThisMove": "Frees bishop.",
            "isBookMove": true
          },
          {
            "id": "it-moller-23",
            "san": "Bg5",
            "from": "c1",
            "to": "g5",
            "fen": "r1bqk2r/ppp1nppp/3p1b2/3P2B1/2B1R3/5N2/PP3PPP/R2Q2K1 b kq - 1 12",
            "turn": "w",
            "ply": 23,
            "annotation": "12.Bg5!! White pins and threatens to shatter Black's kingside pawn fortress! Black is under lethal pressure!",
            "whyThisMove": "Removes Black's key defender with unstoppable attack.",
            "isBookMove": true,
            "arrows": [
              [
                "g5",
                "f6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "italian-pianissimo-kasparov",
        "openingId": "italian-game",
        "name": "Giuoco Pianissimo - Kasparov Knight Maneuver (Nbd2-f1-g3)",
        "eco": "C50",
        "description": "The gold standard of modern master chess. White plays 4.c3 and 5.d3, then maneuvers the queen's knight via d2-f1-g3 into an unstoppable kingside attacking post.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "it-kasp-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "White starts 1.e4.",
            "whyThisMove": "Central stake.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black plays 1...e5.",
            "whyThisMove": "Symmetrical defense.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Attacks e5.",
            "whyThisMove": "Tempo development.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Defends e5.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-5",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Italian bishop placement.",
            "whyThisMove": "Targets f7.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-6",
            "san": "Bc5",
            "from": "f8",
            "to": "c5",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Giuoco Piano.",
            "whyThisMove": "Active bishop.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-7",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White supports future d4 and secures d4 control.",
            "whyThisMove": "Pawn structure setup.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black attacks e4.",
            "whyThisMove": "Kingside mobilization.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-9",
            "san": "d3",
            "from": "d2",
            "to": "d3",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "Giuoco Pianissimo! White solidifies e4 cleanly.",
            "whyThisMove": "Fortifies the center.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-10",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black solidifies e5.",
            "whyThisMove": "Frees bishop.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-11",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 b kq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-12",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 w - - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-13",
            "san": "Re1",
            "from": "f1",
            "to": "e1",
            "fen": "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQR1K1 b - - 3 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White places the rook on the e-file, preparing the knight tour.",
            "whyThisMove": "Overprotects e4 and frees f1.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-14",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bq1rk1/1pp2ppp/p1np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQR1K1 w - - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black creates an escape square on a7.",
            "whyThisMove": "Preserves bishop.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-15",
            "san": "Bb3",
            "from": "c4",
            "to": "b3",
            "fen": "r1bq1rk1/1pp2ppp/p1np1n2/2b1p3/4P3/1BPP1N2/PP3PPP/RNBQR1K1 b - - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White prophylactically tucks the bishop away.",
            "whyThisMove": "Avoids ...Na5 trades.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-16",
            "san": "Ba7",
            "from": "c5",
            "to": "a7",
            "fen": "r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N2/PP3PPP/RNBQR1K1 w - - 2 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black retreats bishop to a7.",
            "whyThisMove": "Maintains diagonal.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-17",
            "san": "h3",
            "from": "h2",
            "to": "h3",
            "fen": "r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White denies g4 to Black's pieces.",
            "whyThisMove": "Stops ...Bg4 pin.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-18",
            "san": "h6",
            "from": "h7",
            "to": "h6",
            "fen": "r1bq1rk1/bpp2pp1/p1np1n1p/4p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 w - - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black mirrors White's prophylaxis.",
            "whyThisMove": "Stops Ng5.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-19",
            "san": "Nbd2",
            "from": "b1",
            "to": "d2",
            "fen": "r1bq1rk1/bpp2pp1/p1np1n1p/4p3/4P3/1BPP1N1P/PP1N1PP1/R1BQR1K1 b - - 1 10",
            "turn": "w",
            "ply": 19,
            "annotation": "THE KNIGHT TOUR BEGINS! White maneuvers toward the kingside.",
            "whyThisMove": "Heading for f1 and g3.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-20",
            "san": "Re8",
            "from": "f8",
            "to": "e8",
            "fen": "r1bqr1k1/bpp2pp1/p1np1n1p/4p3/4P3/1BPP1N1P/PP1N1PP1/R1BQR1K1 w - - 2 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black mobilizes rook.",
            "whyThisMove": "Controls e-file.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-21",
            "san": "Nf1",
            "from": "d2",
            "to": "f1",
            "fen": "r1bqr1k1/bpp2pp1/p1np1n1p/4p3/4P3/1BPP1N1P/PP3PP1/R1BQRNK1 b - - 3 11",
            "turn": "w",
            "ply": 21,
            "annotation": "Step two: Knight reaches f1, ready to spring to g3 or e3!",
            "whyThisMove": "Knight transfer.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-22",
            "san": "Be6",
            "from": "c8",
            "to": "e6",
            "fen": "r2qr1k1/bpp2pp1/p1npbn1p/4p3/4P3/1BPP1N1P/PP3PP1/R1BQRNK1 w - - 4 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black challenges White's light-squared bishop.",
            "whyThisMove": "Trades bishops.",
            "isBookMove": true
          },
          {
            "id": "it-kasp-23",
            "san": "Ng3",
            "from": "f1",
            "to": "g3",
            "fen": "r2qr1k1/bpp2pp1/p1npbn1p/4p3/4P3/1BPP1NNP/PP3PP1/R1BQR1K1 b - - 5 12",
            "turn": "w",
            "ply": 23,
            "annotation": "12.Ng3!! Kasparov's trademark! The knight reaches g3, controlling f5 and h5, ready for a crushing kingside onslaught!",
            "whyThisMove": "Dominant knight post eyeing f5 and h5.",
            "isBookMove": true,
            "arrows": [
              [
                "g3",
                "f5",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "g3",
                "h5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "italian-two-knights-traxler",
        "openingId": "italian-game",
        "name": "Two Knights Defense - Traxler Counter-Attack Clash",
        "eco": "C57",
        "description": "When Black challenges with 3...Nf6 4.Ng5, Black unleashes the fearsome Traxler Counter-Attack 4...Bc5!?. White plays the clinical 5.Bxf7+! Ke7 6.Bb3! to conquer the board.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "it-trax-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "it-trax-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "it-trax-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Attacks e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "it-trax-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Defends e5.",
            "whyThisMove": "Defends pawn.",
            "isBookMove": true
          },
          {
            "id": "it-trax-5",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Italian Game.",
            "whyThisMove": "Targets f7.",
            "isBookMove": true
          },
          {
            "id": "it-trax-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Two Knights Defense! Black counter-attacks e4.",
            "whyThisMove": "Dynamic counterplay.",
            "isBookMove": true
          },
          {
            "id": "it-trax-7",
            "san": "Ng5",
            "from": "f3",
            "to": "g5",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White leaps forward with 4.Ng5, threatening f7!",
            "whyThisMove": "Double attack on f7.",
            "isBookMove": true,
            "arrows": [
              [
                "g5",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "it-trax-8",
            "san": "Bc5",
            "from": "f8",
            "to": "c5",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 6 5",
            "turn": "b",
            "ply": 8,
            "annotation": "THE TRAXLER COUNTER-ATTACK! Black ignores the attack on f7 and targets f2!",
            "whyThisMove": "Tactical counter-strike.",
            "isBookMove": true,
            "arrows": [
              [
                "c5",
                "f2",
                "rgba(249, 115, 22, 0.9)"
              ]
            ]
          },
          {
            "id": "it-trax-9",
            "san": "Bxf7+",
            "from": "c4",
            "to": "f7",
            "fen": "r1bqk2r/pppp1Bpp/2n2n2/2b1p1N1/4P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "5.Bxf7+! White captures with the bishop, avoiding Black's deadly traps!",
            "whyThisMove": "Strikes f7 without losing control.",
            "isBookMove": true,
            "arrows": [
              [
                "f7",
                "e8",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "it-trax-10",
            "san": "Ke7",
            "from": "e8",
            "to": "e7",
            "fen": "r1bq3r/ppppkBpp/2n2n2/2b1p1N1/4P3/8/PPPP1PPP/RNBQK2R w KQ - 1 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black king is forced to move.",
            "whyThisMove": "Only square.",
            "isBookMove": true
          },
          {
            "id": "it-trax-11",
            "san": "Bb3",
            "from": "f7",
            "to": "b3",
            "fen": "r1bq3r/ppppk1pp/2n2n2/2b1p1N1/4P3/1B6/PPPP1PPP/RNBQK2R b KQ - 2 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White drops the bishop back safely.",
            "whyThisMove": "Guards bishop.",
            "isBookMove": true
          },
          {
            "id": "it-trax-12",
            "san": "Rf8",
            "from": "h8",
            "to": "f8",
            "fen": "r1bq1r2/ppppk1pp/2n2n2/2b1p1N1/4P3/1B6/PPPP1PPP/RNBQK2R w KQ - 3 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black puts rook on the f-file.",
            "whyThisMove": "F-file pressure.",
            "isBookMove": true
          },
          {
            "id": "it-trax-13",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bq1r2/ppppk1pp/2n2n2/2b1p1N1/4P3/1B6/PPPP1PPP/RNBQ1RK1 b - - 4 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White castles into absolute safety.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "it-trax-14",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bq1r2/ppp1k1pp/2np1n2/2b1p1N1/4P3/1B6/PPPP1PPP/RNBQ1RK1 w - - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black frees the c8 bishop.",
            "whyThisMove": "Piece mobilization.",
            "isBookMove": true
          },
          {
            "id": "it-trax-15",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r1bq1r2/ppp1k1pp/2np1n2/2b1p1N1/4P3/1BP5/PP1P1PPP/RNBQ1RK1 b - - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White prepares central d4 advance.",
            "whyThisMove": "Controls d4.",
            "isBookMove": true
          },
          {
            "id": "it-trax-16",
            "san": "Qe8",
            "from": "d8",
            "to": "e8",
            "fen": "r1b1qr2/ppp1k1pp/2np1n2/2b1p1N1/4P3/1BP5/PP1P1PPP/RNBQ1RK1 w - - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black's queen prepares to join the attack via g6 or h5.",
            "whyThisMove": "Queen transfer.",
            "isBookMove": true
          },
          {
            "id": "it-trax-17",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1b1qr2/ppp1k1pp/2np1n2/2b1p1N1/3PP3/1BP5/PP3PPP/RNBQ1RK1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White strikes in the center! White has a free pawn, safe king, and complete command!",
            "whyThisMove": "Dominates the center.",
            "isBookMove": true,
            "arrows": [
              [
                "d4",
                "e5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "it-trax-18",
            "san": "Bb6",
            "from": "c5",
            "to": "b6",
            "fen": "r1b1qr2/ppp1k1pp/1bnp1n2/4p1N1/3PP3/1BP5/PP3PPP/RNBQ1RK1 w - - 1 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black bishop retreats. White is completely in control!",
            "whyThisMove": "Saves bishop.",
            "isBookMove": true
          }
        ]
      }
    ]
  },

  // ==========================================
  // 3. RUY LOPEZ (SPANISH OPENING)
  // ==========================================
  {
    id: 'ruy-lopez',
    slug: 'ruy-lopez',
    name: 'Ruy Lopez (Spanish Opening)',
    eco: 'C60',
    category: 'classical',
    side: 'white',
    difficulty: 'intermediate',
    summary: 'The "King of Openings" and favorite of World Champions. White attacks the defender of e5 to exert relentless pressure.',
    philosophy: 'On move 3, White plays 3.Bb5 to pin and pressure Black\'s c6 knight, which defends the central e5 pawn. Rather than sacrificing pawns, White applies deep, suffocating positional pressure that lasts through the middlegame.',
    keyThemes: [
      'Indirect pressure on Black\'s central e5 stronghold',
      'The c3 + d4 pawn center plan',
      'Preserving the Spanish bishop on b3/c2',
      'Maneuvering the knight to the kingside via Nbd2-f1-g3'
    ],
    pawnStructureInfo: 'Creates deep central tension. Black often expands on the queenside with ...b5 to break the pin, while White targets the kingside with Re1 and d4.',
    famousGame: {
      white: 'Bobby Fischer',
      black: 'Boris Spassky',
      year: 1972,
      event: 'World Championship (Game 4)',
      result: '1/2-1/2',
      description: 'Fischer\'s trademark mastery of the Spanish Opening pushed Spassky to his theoretical limits in Reykjavik.',
      keyMomentFen: 'r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w - - 0 8'
    },
    variations: [
      {
        "id": "ruy-lopez-chigorin",
        "openingId": "ruy-lopez",
        "name": "Closed Mainline - Chigorin Variation (9...Na5 & 10...c5)",
        "eco": "C97",
        "description": "The crown jewel of classical chess theory. Black kicks the Spanish bishop with ...Na5 and claims queenside space with ...c5. White orchestrates a masterly central buildup.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "rl-chig-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "King's pawn.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Symmetrical defense.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Attacks e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Defends e5.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-5",
            "san": "Bb5",
            "from": "f1",
            "to": "b5",
            "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "The Spanish Bishop! White attacks the defender of e5.",
            "whyThisMove": "Undermines Black's central control.",
            "isBookMove": true,
            "arrows": [
              [
                "b5",
                "c6",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "rl-chig-6",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Morphy Defense. Black asks the bishop its intentions.",
            "whyThisMove": "Forces bishop decision.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-7",
            "san": "Ba4",
            "from": "b5",
            "to": "a4",
            "fen": "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White preserves the pin.",
            "whyThisMove": "Maintains tension.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight and attacks e4.",
            "whyThisMove": "Kingside mobilization.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-9",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-10",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Solid bishop.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-11",
            "san": "Re1",
            "from": "f1",
            "to": "e1",
            "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 b kq - 5 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White protects e4 and prepares c3-d4.",
            "whyThisMove": "Central support.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-12",
            "san": "b5",
            "from": "b7",
            "to": "b5",
            "fen": "r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black breaks the pin.",
            "whyThisMove": "Queenside space.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-13",
            "san": "Bb3",
            "from": "a4",
            "to": "b3",
            "fen": "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "Spanish bishop nests on b3.",
            "whyThisMove": "Aims at f7.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-14",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black fortifies e5.",
            "whyThisMove": "Solidifies center.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-15",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b kq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White prepares the d4 breakthrough.",
            "whyThisMove": "Central preparation.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-16",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black castles into safety.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-17",
            "san": "h3",
            "from": "h2",
            "to": "h3",
            "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White denies g4 to Black's bishop and knight.",
            "whyThisMove": "Prophylaxis against ...Bg4.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-18",
            "san": "Na5",
            "from": "c6",
            "to": "a5",
            "fen": "r1bq1rk1/2p1bppp/p2p1n2/np2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
            "turn": "b",
            "ply": 18,
            "annotation": "THE CHIGORIN VARIATION! Black drives the bishop off the a2-g8 diagonal and prepares ...c5.",
            "whyThisMove": "Displaces the bishop and prepares ...c5.",
            "isBookMove": true,
            "arrows": [
              [
                "a5",
                "b3",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "rl-chig-19",
            "san": "Bc2",
            "from": "b3",
            "to": "c2",
            "fen": "r1bq1rk1/2p1bppp/p2p1n2/np2p3/4P3/2P2N1P/PPBP1PP1/RNBQR1K1 b - - 2 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White saves the valuable Spanish bishop on c2.",
            "whyThisMove": "Preserves bishop for kingside attack.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-20",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "r1bq1rk1/4bppp/p2p1n2/npp1p3/4P3/2P2N1P/PPBP1PP1/RNBQR1K1 w - - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black expands on the queenside and clamps down on d4.",
            "whyThisMove": "Claims queenside space.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-21",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bq1rk1/4bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 b - - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White strikes in the center! The classical Spanish tension is at its peak.",
            "whyThisMove": "Full central challenge.",
            "isBookMove": true,
            "arrows": [
              [
                "d4",
                "e5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "rl-chig-22",
            "san": "Qc7",
            "from": "d8",
            "to": "c7",
            "fen": "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black guards e5 and c5 with the queen.",
            "whyThisMove": "Central coordination.",
            "isBookMove": true
          },
          {
            "id": "rl-chig-23",
            "san": "Nbd2",
            "from": "b1",
            "to": "d2",
            "fen": "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 b - - 2 12",
            "turn": "w",
            "ply": 23,
            "annotation": "White develops the remaining knight toward the kingside. A magnificent strategic struggle!",
            "whyThisMove": "Heading for f1 and kingside attack.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "ruy-lopez-marshall-attack",
        "openingId": "ruy-lopez",
        "name": "Marshall Attack - Legendary Pawn Sac & Kingside Storm (8...d5!)",
        "eco": "C89",
        "description": "Frank Marshall's immortal counter-gambit! Black sacrifices the d5 pawn (8...d5!) to unleash an unstoppable attack with ...Qh4 and ...Qh3 against White's king.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "rl-marsh-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Symmetrical defense.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Attacks e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Defends e5.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-5",
            "san": "Bb5",
            "from": "f1",
            "to": "b5",
            "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Ruy Lopez.",
            "whyThisMove": "Spanish opening.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-6",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Morphy defense.",
            "whyThisMove": "Kicks bishop.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-7",
            "san": "Ba4",
            "from": "b5",
            "to": "a4",
            "fen": "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "Retreats bishop.",
            "whyThisMove": "Preserves pin.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Develops knight.",
            "whyThisMove": "Attacks e4.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-9",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5",
            "turn": "w",
            "ply": 9,
            "annotation": "Castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-10",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Develops bishop.",
            "whyThisMove": "Prepares castling.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-11",
            "san": "Re1",
            "from": "f1",
            "to": "e1",
            "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 b kq - 5 6",
            "turn": "w",
            "ply": 11,
            "annotation": "Guards e4.",
            "whyThisMove": "Rook mobilization.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-12",
            "san": "b5",
            "from": "b7",
            "to": "b5",
            "fen": "r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Kicks bishop.",
            "whyThisMove": "Queenside space.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-13",
            "san": "Bb3",
            "from": "a4",
            "to": "b3",
            "fen": "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "Bishop retreats.",
            "whyThisMove": "Nest on b3.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-14",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w - - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-15",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White prepares d4.",
            "whyThisMove": "Prepares central pawn duo.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-16",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "BOOM! 8...d5!! THE MARSHALL ATTACK! Black sacrifices the central pawn on move 8!",
            "whyThisMove": "Explosive counter-gambit for immediate initiative.",
            "isBookMove": true,
            "arrows": [
              [
                "d7",
                "d5",
                "rgba(249, 115, 22, 0.9)"
              ]
            ],
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "d-pawn (1 point)",
              "compensation": "Blistering kingside piece attack with queen, bishops, and rook."
            }
          },
          {
            "id": "rl-marsh-17",
            "san": "exd5",
            "from": "e4",
            "to": "d5",
            "fen": "r1bq1rk1/2p1bppp/p1n2n2/1p1Pp3/8/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White accepts the gambit pawn.",
            "whyThisMove": "Captures on d5.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-18",
            "san": "Nxd5",
            "from": "f6",
            "to": "d5",
            "fen": "r1bq1rk1/2p1bppp/p1n5/1p1np3/8/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black recaptures with the knight.",
            "whyThisMove": "Active knight.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-19",
            "san": "Nxe5",
            "from": "f3",
            "to": "e5",
            "fen": "r1bq1rk1/2p1bppp/p1n5/1p1nN3/8/1BP5/PP1P1PPP/RNBQR1K1 b - - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White takes the second pawn on e5.",
            "whyThisMove": "Wins pawn.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-20",
            "san": "Nxe5",
            "from": "c6",
            "to": "e5",
            "fen": "r1bq1rk1/2p1bppp/p7/1p1nn3/8/1BP5/PP1P1PPP/RNBQR1K1 w - - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black trades knights on e5.",
            "whyThisMove": "Knight trade.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-21",
            "san": "Rxe5",
            "from": "e1",
            "to": "e5",
            "fen": "r1bq1rk1/2p1bppp/p7/1p1nR3/8/1BP5/PP1P1PPP/RNBQ2K1 b - - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White recaptures with the rook.",
            "whyThisMove": "Rook on e5.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-22",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "r1bq1rk1/4bppp/p1p5/1p1nR3/8/1BP5/PP1P1PPP/RNBQ2K1 w - - 0 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black anchors the centralized d5 knight.",
            "whyThisMove": "Secures d5.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-23",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bq1rk1/4bppp/p1p5/1p1nR3/3P4/1BP5/PP3PPP/RNBQ2K1 b - - 0 12",
            "turn": "w",
            "ply": 23,
            "annotation": "White claims the center.",
            "whyThisMove": "Frees c1 bishop.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-24",
            "san": "Bd6",
            "from": "e7",
            "to": "d6",
            "fen": "r1bq1rk1/5ppp/p1pb4/1p1nR3/3P4/1BP5/PP3PPP/RNBQ2K1 w - - 1 13",
            "turn": "b",
            "ply": 24,
            "annotation": "Black hits the e5 rook with tempo, aiming the bishop directly at White's h2 square!",
            "whyThisMove": "Attacks rook and eyes h2.",
            "isBookMove": true,
            "arrows": [
              [
                "d6",
                "h2",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "rl-marsh-25",
            "san": "Re1",
            "from": "e5",
            "to": "e1",
            "fen": "r1bq1rk1/5ppp/p1pb4/1p1n4/3P4/1BP5/PP3PPP/RNBQR1K1 b - - 2 13",
            "turn": "w",
            "ply": 25,
            "annotation": "White retreats the rook to safety.",
            "whyThisMove": "Guards rook.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-26",
            "san": "Qh4",
            "from": "d8",
            "to": "h4",
            "fen": "r1b2rk1/5ppp/p1pb4/1p1n4/3P3q/1BP5/PP3PPP/RNBQR1K1 w - - 3 14",
            "turn": "b",
            "ply": 26,
            "annotation": "THE ATTACK STRIKES! Black's queen invades, threatening 14...Qxh2# checkmate!",
            "whyThisMove": "Lethal checkmate threat on h2.",
            "isBookMove": true,
            "arrows": [
              [
                "h4",
                "h2",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "rl-marsh-27",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "r1b2rk1/5ppp/p1pb4/1p1n4/3P3q/1BP3P1/PP3P1P/RNBQR1K1 b - - 0 14",
            "turn": "w",
            "ply": 27,
            "annotation": "White is forced to weaken the kingside dark squares with 14.g3.",
            "whyThisMove": "Only defense against mate.",
            "isBookMove": true
          },
          {
            "id": "rl-marsh-28",
            "san": "Qh3",
            "from": "h4",
            "to": "h3",
            "fen": "r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP3Pq/PP3P1P/RNBQR1K1 w - - 1 15",
            "turn": "b",
            "ply": 28,
            "annotation": "14...Qh3!! Black anchors the queen deep inside White's fortress! Black holds a ferocious attacking grip!",
            "whyThisMove": "Dominates the light/dark squares around White's exposed king.",
            "isBookMove": true,
            "arrows": [
              [
                "h3",
                "g3",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          }
        ]
      },
      {
        "id": "ruy-lopez-open",
        "openingId": "ruy-lopez",
        "name": "Open Ruy Lopez - Central Firefight (5...Nxe4 & 7...d5)",
        "eco": "C80",
        "description": "Black boldly captures White's e4 pawn on move 5, establishing a powerful outpost on e4 and fighting for the center with 7...d5! and 11...f5.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "rl-open-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "rl-open-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Symmetrical defense.",
            "isBookMove": true
          },
          {
            "id": "rl-open-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Attacks e5.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "rl-open-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Defends e5.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "rl-open-5",
            "san": "Bb5",
            "from": "f1",
            "to": "b5",
            "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Spanish Bishop.",
            "whyThisMove": "Attacks defender.",
            "isBookMove": true
          },
          {
            "id": "rl-open-6",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Morphy defense.",
            "whyThisMove": "Kicks bishop.",
            "isBookMove": true
          },
          {
            "id": "rl-open-7",
            "san": "Ba4",
            "from": "b5",
            "to": "a4",
            "fen": "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "Bishop retreats.",
            "whyThisMove": "Keeps pin.",
            "isBookMove": true
          },
          {
            "id": "rl-open-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Attacks e4.",
            "whyThisMove": "Kingside mobilization.",
            "isBookMove": true
          },
          {
            "id": "rl-open-9",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "rl-open-10",
            "san": "Nxe4",
            "from": "f6",
            "to": "e4",
            "fen": "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "THE OPEN RUY LOPEZ! Black boldly captures the e4 pawn on move 5!",
            "whyThisMove": "Snaps up central pawn.",
            "isBookMove": true,
            "arrows": [
              [
                "f6",
                "e4",
                "rgba(34, 197, 94, 0.9)"
              ]
            ]
          },
          {
            "id": "rl-open-11",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bqkb1r/1ppp1ppp/p1n5/4p3/B2Pn3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White strikes at the center to open lines against Black's king.",
            "whyThisMove": "Challenges Black's center.",
            "isBookMove": true
          },
          {
            "id": "rl-open-12",
            "san": "b5",
            "from": "b7",
            "to": "b5",
            "fen": "r1bqkb1r/2pp1ppp/p1n5/1p2p3/B2Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black kicks the Spanish bishop.",
            "whyThisMove": "Breaks pin.",
            "isBookMove": true
          },
          {
            "id": "rl-open-13",
            "san": "Bb3",
            "from": "a4",
            "to": "b3",
            "fen": "r1bqkb1r/2pp1ppp/p1n5/1p2p3/3Pn3/1B3N2/PPP2PPP/RNBQ1RK1 b kq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "Bishop nests on b3.",
            "whyThisMove": "Maintains pressure.",
            "isBookMove": true
          },
          {
            "id": "rl-open-14",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "r1bqkb1r/2p2ppp/p1n5/1p1pp3/3Pn3/1B3N2/PPP2PPP/RNBQ1RK1 w kq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black anchors the center with 7...d5!",
            "whyThisMove": "Solidifies e4 knight outpost.",
            "isBookMove": true
          },
          {
            "id": "rl-open-15",
            "san": "dxe5",
            "from": "d4",
            "to": "e5",
            "fen": "r1bqkb1r/2p2ppp/p1n5/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 b kq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White regains the pawn.",
            "whyThisMove": "Reclaims material.",
            "isBookMove": true
          },
          {
            "id": "rl-open-16",
            "san": "Be6",
            "from": "c8",
            "to": "e6",
            "fen": "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black develops bishop to guard d5.",
            "whyThisMove": "Fortifies center.",
            "isBookMove": true
          },
          {
            "id": "rl-open-17",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 b kq - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White controls d4 and prepares Nbd2.",
            "whyThisMove": "Central support.",
            "isBookMove": true
          },
          {
            "id": "rl-open-18",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 w kq - 1 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black prepares kingside castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "rl-open-19",
            "san": "Nbd2",
            "from": "b1",
            "to": "d2",
            "fen": "r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP1N1PPP/R1BQ1RK1 b kq - 2 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White challenges the powerful e4 knight.",
            "whyThisMove": "Attacks e4.",
            "isBookMove": true
          },
          {
            "id": "rl-open-20",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r2q1rk1/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP1N1PPP/R1BQ1RK1 w - - 3 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "rl-open-21",
            "san": "Bc2",
            "from": "b3",
            "to": "c2",
            "fen": "r2q1rk1/2p1bppp/p1n1b3/1p1pP3/4n3/2P2N2/PPBN1PPP/R1BQ1RK1 b - - 4 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White preserves the bishop, aiming at Black's kingside.",
            "whyThisMove": "Aims at h7.",
            "isBookMove": true
          },
          {
            "id": "rl-open-22",
            "san": "f5",
            "from": "f7",
            "to": "f5",
            "fen": "r2q1rk1/2p1b1pp/p1n1b3/1p1pPp2/4n3/2P2N2/PPBN1PPP/R1BQ1RK1 w - f6 0 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black cements the knight with 11...f5! A classic heavyweight clash!",
            "whyThisMove": "Locks e4 knight into an immovable fortress.",
            "isBookMove": true
          }
        ]
      }
    ]
  },

  // ==========================================
  // 4. SICILIAN DEFENSE (CLASSICAL / NAJDORF)
  // ==========================================
  {
    id: 'sicilian-defense',
    slug: 'sicilian-defense',
    name: 'Sicilian Defense (Najdorf)',
    eco: 'B90',
    category: 'defense',
    side: 'black',
    difficulty: 'advanced',
    summary: 'The highest-scoring counter-attacking response to 1.e4. Black fights for the center from the flank, aiming for an asymmetrical win.',
    philosophy: 'By playing 1...c5, Black rejects symmetry. When White opens the center with d4, Black trades a flank c-pawn for White\'s central d-pawn, creating a central pawn majority and an open c-file for devastating counter-punches.',
    keyThemes: [
      'Asymmetrical imbalance and win-seeking dynamics',
      'The open c-file for Black\'s rooks',
      'Central pawn majority (e- and d-pawns vs e-pawn)',
      'Sharp opposite-side castling battles'
    ],
    pawnStructureInfo: 'Black gives up the c-pawn for White\'s d-pawn. Black gets pawns on d6/e5 and an open c-file, generating dynamic queenside counter-play.',
    famousGame: {
      white: 'Garry Kasparov',
      black: 'Veselin Topalov',
      year: 1999,
      event: 'Wijk aan Zee ("Kasparov\'s Immortal")',
      result: '1-0',
      description: 'Widely regarded as one of the greatest games ever played, stemming from a fierce Sicilian battle featuring a legendary rook sacrifice.',
      keyMomentFen: '2r3k1/1p1b1pp1/p2ppn1p/4b3/2P1P1P1/1PN2P2/PB1QB2P/1K5R w - - 0 20'
    },
    variations: [
      {
        "id": "sicilian-najdorf-english-attack",
        "openingId": "sicilian-defense",
        "name": "Najdorf Variation - The English Attack (g4-g5 Pawn Storm)",
        "eco": "B90",
        "description": "The most ruthless attacking system in modern chess. White castles queenside (O-O-O) and hurls the kingside pawns forward with g4-g5 and Nd5!.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "sic-eng-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-2",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Sicilian Defense.",
            "whyThisMove": "Asymmetrical counter-attack.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Prepares d4.",
            "whyThisMove": "Open Sicilian setup.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-4",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Controls e5.",
            "whyThisMove": "Restricts e5 push.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-5",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White opens the center.",
            "whyThisMove": "Central liquidation.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-6",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black trades flank pawn for center pawn.",
            "whyThisMove": "Takes central pawn.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-7",
            "san": "Nxd4",
            "from": "f3",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White centralizes knight.",
            "whyThisMove": "Controls center.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black attacks e4.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-9",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White defends e4.",
            "whyThisMove": "Natural piece play.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-10",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "The signature Najdorf move! Controls b5 and prepares ...e5 or ...b5.",
            "whyThisMove": "Denies b5 to all White pieces.",
            "isBookMove": true,
            "keySquares": [
              "b5"
            ]
          },
          {
            "id": "sic-eng-11",
            "san": "Be3",
            "from": "c1",
            "to": "e3",
            "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "THE ENGLISH ATTACK! White develops the bishop, planning f3, Qd2, and O-O-O.",
            "whyThisMove": "Prepares battery.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-12",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkb1r/1p3ppp/p2p1n2/4p3/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black strikes at the center, kicking White's knight!",
            "whyThisMove": "Claims central space.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-13",
            "san": "Nb3",
            "from": "d4",
            "to": "b3",
            "fen": "rnbqkb1r/1p3ppp/p2p1n2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R b KQkq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White knight retreats to b3.",
            "whyThisMove": "Safe square.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-14",
            "san": "Be6",
            "from": "c8",
            "to": "e6",
            "fen": "rn1qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black develops bishop to fight for d5.",
            "whyThisMove": "Develops with tempo.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-15",
            "san": "f3",
            "from": "f2",
            "to": "f3",
            "fen": "rn1qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1BP2/PPP3PP/R2QKB1R b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White solidifies e4 and prepares the g2-g4 pawn storm.",
            "whyThisMove": "Supports g4 advance.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-16",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPP3PP/R2QKB1R w KQkq - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Develops bishop.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-17",
            "san": "Qd2",
            "from": "d1",
            "to": "d2",
            "fen": "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/R3KB1R b KQkq - 2 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White forms the battery with the dark-squared bishop.",
            "whyThisMove": "Prepares queenside castling.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-18",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/R3KB1R w KQ - 3 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black castles kingside into the line of fire.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-19",
            "san": "O-O-O",
            "from": "e1",
            "to": "c1",
            "fen": "rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R b - - 4 10",
            "turn": "w",
            "ply": 19,
            "annotation": "OPPOSITE-SIDE CASTLING! A full-board race to checkmate begins!",
            "whyThisMove": "Secures king and frees kingside pawns.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-20",
            "san": "Nbd7",
            "from": "b8",
            "to": "d7",
            "fen": "r2q1rk1/1p1nbppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R w - - 5 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black coordinates knights.",
            "whyThisMove": "Heading for c5 or b6.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-21",
            "san": "g4",
            "from": "g2",
            "to": "g4",
            "fen": "r2q1rk1/1p1nbppp/p2pbn2/4p3/4P1P1/1NN1BP2/PPPQ3P/2KR1B1R b - - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "THE PAWN STORM BEGINS! 11.g4! White charges forward on the kingside!",
            "whyThisMove": "Launches kingside storm.",
            "isBookMove": true,
            "arrows": [
              [
                "g4",
                "g5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sic-eng-22",
            "san": "b5",
            "from": "b7",
            "to": "b5",
            "fen": "r2q1rk1/3nbppp/p2pbn2/1p2p3/4P1P1/1NN1BP2/PPPQ3P/2KR1B1R w - - 0 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black answers with the queenside pawn storm!",
            "whyThisMove": "Queenside counter-attack.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-23",
            "san": "g5",
            "from": "g4",
            "to": "g5",
            "fen": "r2q1rk1/3nbppp/p2pbn2/1p2p1P1/4P3/1NN1BP2/PPPQ3P/2KR1B1R b - - 0 12",
            "turn": "w",
            "ply": 23,
            "annotation": "White kicks Black's defending f6 knight!",
            "whyThisMove": "Drives away key defender of Black's king.",
            "isBookMove": true,
            "arrows": [
              [
                "g5",
                "f6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sic-eng-24",
            "san": "Nh5",
            "from": "f6",
            "to": "h5",
            "fen": "r2q1rk1/3nbppp/p2pb3/1p2p1Pn/4P3/1NN1BP2/PPPQ3P/2KR1B1R w - - 1 13",
            "turn": "b",
            "ply": 24,
            "annotation": "Black's knight hops to the rim.",
            "whyThisMove": "Only active square.",
            "isBookMove": true
          },
          {
            "id": "sic-eng-25",
            "san": "Nd5",
            "from": "c3",
            "to": "d5",
            "fen": "r2q1rk1/3nbppp/p2pb3/1p1Np1Pn/4P3/1N2BP2/PPPQ3P/2KR1B1R b - - 2 13",
            "turn": "w",
            "ply": 25,
            "annotation": "13.Nd5!! White invades the d5 hole with the knight! A monstrous outpost controlling the entire board!",
            "whyThisMove": "Dominates the critical d5 outpost with overwhelming threats.",
            "isBookMove": true,
            "arrows": [
              [
                "c3",
                "d5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "sicilian-dragon-yugoslav",
        "openingId": "sicilian-defense",
        "name": "Sicilian Dragon - Yugoslav Attack (Sac, Sac, Mate!)",
        "eco": "B78",
        "description": "The fiercest battle in chess. Black fianchettoes on g7 (the Dragon), and White responds with the brutal Yugoslav Attack: opposite castling, h4-h5, and Bh6 to rip open the h-file.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "sic-drag-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-2",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Sicilian defense.",
            "whyThisMove": "Counterplay.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Develops knight.",
            "whyThisMove": "Prepares d4.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-4",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Controls e5.",
            "whyThisMove": "Pawn structure.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-5",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Opens center.",
            "whyThisMove": "Central trade.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-6",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Takes d4.",
            "whyThisMove": "Trade pawn.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-7",
            "san": "Nxd4",
            "from": "f3",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "Centralizes knight.",
            "whyThisMove": "Recaptures.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Attacks e4.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-9",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "Defends e4.",
            "whyThisMove": "Piece defense.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-10",
            "san": "g6",
            "from": "g7",
            "to": "g6",
            "fen": "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "THE SICILIAN DRAGON! Black prepares to place the bishop on the monstrous g7-a1 diagonal.",
            "whyThisMove": "Dragon setup targeting the long diagonal.",
            "isBookMove": true,
            "keySquares": [
              "g7"
            ]
          },
          {
            "id": "sic-drag-11",
            "san": "Be3",
            "from": "c1",
            "to": "e3",
            "fen": "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "Yugoslav Attack begins. White targets the dark squares.",
            "whyThisMove": "Prepares Qd2 and Bh6.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-12",
            "san": "Bg7",
            "from": "f8",
            "to": "g7",
            "fen": "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "The Dragon Bishop breathes fire down the long diagonal!",
            "whyThisMove": "Monstrous bishop.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-13",
            "san": "f3",
            "from": "f2",
            "to": "f3",
            "fen": "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White fortifies e4 and denies g4 to Black's knight.",
            "whyThisMove": "Restricts ...Ng4.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-14",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnbq1rk1/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R w KQ - 1 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-15",
            "san": "Qd2",
            "from": "d1",
            "to": "d2",
            "fen": "rnbq1rk1/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R b KQ - 2 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White forms the battery eyeing h6.",
            "whyThisMove": "Prepares Bh6 trade.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-16",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 3 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black develops knight.",
            "whyThisMove": "Pressure on d4.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-17",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R b KQ - 4 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White takes aim at f7.",
            "whyThisMove": "Controls d5 and f7.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-18",
            "san": "Bd7",
            "from": "c8",
            "to": "d7",
            "fen": "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ - 5 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black completes minor piece development.",
            "whyThisMove": "Prepares Rc8.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-19",
            "san": "O-O-O",
            "from": "e1",
            "to": "c1",
            "fen": "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R b - - 6 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White castles queenside. Opposite-side castling reached!",
            "whyThisMove": "Rook joins attack.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-20",
            "san": "Rc8",
            "from": "a8",
            "to": "c8",
            "fen": "2rq1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R w - - 7 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black's rook takes the semi-open c-file.",
            "whyThisMove": "Pressure on c2 and Bc4.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-21",
            "san": "Bb3",
            "from": "c4",
            "to": "b3",
            "fen": "2rq1rk1/pp1bppbp/2np1np1/8/3NP3/1BN1BP2/PPPQ2PP/2KR3R b - - 8 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White prophylactically tucks bishop away.",
            "whyThisMove": "Avoids discovered attacks.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-22",
            "san": "Ne5",
            "from": "c6",
            "to": "e5",
            "fen": "2rq1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/2KR3R w - - 9 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black's knight maneuvers to c4.",
            "whyThisMove": "Outpost on c4.",
            "isBookMove": true
          },
          {
            "id": "sic-drag-23",
            "san": "h4",
            "from": "h2",
            "to": "h4",
            "fen": "2rq1rk1/pp1bppbp/3p1np1/4n3/3NP2P/1BN1BP2/PPPQ2P1/2KR3R b - - 0 12",
            "turn": "w",
            "ply": 23,
            "annotation": "THE H-FILE CHARGE! White pushes 12.h4, intending h5 to rip open Black's king!",
            "whyThisMove": "Opens the h-file for the rook.",
            "isBookMove": true,
            "arrows": [
              [
                "h4",
                "h5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sic-drag-24",
            "san": "h5",
            "from": "h7",
            "to": "h5",
            "fen": "2rq1rk1/pp1bppb1/3p1np1/4n2p/3NP2P/1BN1BP2/PPPQ2P1/2KR3R w - - 0 13",
            "turn": "b",
            "ply": 24,
            "annotation": "Black plays 12...h5! to physically block White's pawn thrust. High-voltage tactical warfare!",
            "whyThisMove": "Stops h5 break.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "sicilian-najdorf-fischer-sozin",
        "openingId": "sicilian-defense",
        "name": "Najdorf - Fischer-Sozin Attack (6.Bc4 & 7.Bb3)",
        "eco": "B88",
        "description": "Bobby Fischer's favorite weapon against the Najdorf! White places the bishop on c4, aiming like a laser beam directly at Black's e6 and f7 pawns.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "sic-sozin-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-2",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Sicilian.",
            "whyThisMove": "Counterplay.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Develops knight.",
            "whyThisMove": "Prepares d4.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-4",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Controls e5.",
            "whyThisMove": "Solid pawn.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-5",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Opens center.",
            "whyThisMove": "Trade pawn.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-6",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Takes d4.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-7",
            "san": "Nxd4",
            "from": "f3",
            "to": "d4",
            "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "Centralizes knight.",
            "whyThisMove": "Knight post.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Attacks e4.",
            "whyThisMove": "Development.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-9",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "Defends e4.",
            "whyThisMove": "Piece defense.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-10",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Najdorf setup.",
            "whyThisMove": "Denies b5.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-11",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "THE FISCHER-SOZIN ATTACK! Bobby Fischer's pet system targeting e6 and f7!",
            "whyThisMove": "Immediate pressure on the a2-g8 diagonal.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sic-sozin-12",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnbqkb1r/1p3ppp/p2ppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black blunts the bishop's diagonal.",
            "whyThisMove": "Guards f7.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-13",
            "san": "Bb3",
            "from": "c4",
            "to": "b3",
            "fen": "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/1BN5/PPP2PPP/R1BQK2R b KQkq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "Fischer's trademark retreat, dodging ...b5 and ...d5 tricks.",
            "whyThisMove": "Prophylactic safety.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-14",
            "san": "b5",
            "from": "b7",
            "to": "b5",
            "fen": "rnbqkb1r/5ppp/p2ppn2/1p6/3NP3/1BN5/PPP2PPP/R1BQK2R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black expands on the queenside.",
            "whyThisMove": "Queenside space.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-15",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rnbqkb1r/5ppp/p2ppn2/1p6/3NP3/1BN5/PPP2PPP/R1BQ1RK1 b kq - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-16",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "rnbqk2r/4bppp/p2ppn2/1p6/3NP3/1BN5/PPP2PPP/R1BQ1RK1 w kq - 2 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Prepares castling.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-17",
            "san": "Qf3",
            "from": "d1",
            "to": "f3",
            "fen": "rnbqk2r/4bppp/p2ppn2/1p6/3NP3/1BN2Q2/PPP2PPP/R1B2RK1 b kq - 3 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White creates the deadly battery eyeing a8 and the kingside!",
            "whyThisMove": "Battery on the long diagonal.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-18",
            "san": "Qc7",
            "from": "d8",
            "to": "c7",
            "fen": "rnb1k2r/2q1bppp/p2ppn2/1p6/3NP3/1BN2Q2/PPP2PPP/R1B2RK1 w kq - 4 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black's queen sidesteps to c7.",
            "whyThisMove": "Guards against e5 tricks.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-19",
            "san": "Qg3",
            "from": "f3",
            "to": "g3",
            "fen": "rnb1k2r/2q1bppp/p2ppn2/1p6/3NP3/1BN3Q1/PPP2PPP/R1B2RK1 b kq - 5 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White shifts the queen to g3, threatening g7 and kingside sacrifices!",
            "whyThisMove": "Pivots queen to kingside attack.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-20",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnb2rk1/2q1bppp/p2ppn2/1p6/3NP3/1BN3Q1/PPP2PPP/R1B2RK1 w - - 6 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "sic-sozin-21",
            "san": "Bh6",
            "from": "c1",
            "to": "h6",
            "fen": "rnb2rk1/2q1bppp/p2ppn1B/1p6/3NP3/1BN3Q1/PPP2PPP/R4RK1 b - - 7 11",
            "turn": "w",
            "ply": 21,
            "annotation": "11.Bh6!! White attacks g7, threatening immediate checkmate!",
            "whyThisMove": "Invades on the kingside with mate threats.",
            "isBookMove": true,
            "arrows": [
              [
                "h6",
                "g7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sic-sozin-22",
            "san": "Ne8",
            "from": "f6",
            "to": "e8",
            "fen": "rnb1nrk1/2q1bppp/p2pp2B/1p6/3NP3/1BN3Q1/PPP2PPP/R4RK1 w - - 8 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black's knight scrambles to e8 to guard g7. White holds a blistering initiative!",
            "whyThisMove": "Only defense for g7.",
            "isBookMove": true
          }
        ]
      }
    ]
  },

  // ==========================================
  // 5. KING'S GAMBIT
  // ==========================================
  {
    id: 'kings-gambit',
    slug: 'kings-gambit',
    name: "King's Gambit",
    eco: 'C30',
    category: 'gambit',
    side: 'white',
    difficulty: 'intermediate',
    summary: 'The ultimate weapon of the Romantic Era. White offers the f-pawn on move 2 to rip open the f-file and conquer the center.',
    philosophy: 'By deflecting Black\'s e5 pawn with 2.f4, White eliminates Black\'s central post, opens the half-open f-file for the King\'s rook after castling, and sets up d4 to dominate the entire board.',
    keyThemes: [
      'Elimination of Black\'s central e5 stronghold',
      'Rapid kingside castling and heavy f-file pressure',
      'Targeting f7 with Bc4 and Qf3/Qh5',
      'Dynamic sacrifices for king exposure'
    ],
    pawnStructureInfo: 'White willingly compromises king safety by advancing the f-pawn on move 2, betting that rapid tactical firepower will crush Black before the weakened e1-h4 diagonal can be exploited.',
    famousGame: {
      white: 'Adolf Anderssen',
      black: 'Lionel Kieseritzky',
      year: 1851,
      event: 'London ("The Immortal Game")',
      result: '1-0',
      description: 'The most legendary chess game ever played! White gave up a bishop, both rooks, and a queen to deliver checkmate with three minor pieces.',
      keyMomentFen: 'r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 b - - 1 23'
    },
    variations: [
    {
        "id": "kings-gambit-muzio",
        "openingId": "kings-gambit",
        "name": "The Muzio Attack (5.O-O! Knight Sac & King Hunt)",
        "eco": "C37",
        "description": "When Black plays 4...g4, White shocks Black with 5.O-O!!, offering the knight to open the f-file and unleash a vicious king hunt against f7.",
        "difficulty": "intermediate",
        "moves": [
            {
                "id": "kg-muzio-1",
                "san": "e4",
                "from": "e2",
                "to": "e4",
                "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
                "turn": "w",
                "ply": 1,
                "annotation": "White starts with 1.e4.",
                "whyThisMove": "Central stake.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-2",
                "san": "e5",
                "from": "e7",
                "to": "e5",
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                "turn": "b",
                "ply": 2,
                "annotation": "Black responds with 1...e5.",
                "whyThisMove": "Symmetrical defense.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-3",
                "san": "f4",
                "from": "f2",
                "to": "f4",
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
                "turn": "w",
                "ply": 3,
                "annotation": "The King's Gambit! White offers the f-pawn right on move 2.",
                "whyThisMove": "Undermines Black's center and opens the f-file.",
                "isBookMove": true,
                "isSacrifice": true,
                "sacrificeInfo": {
                    "material": "f-pawn (1 point)",
                    "compensation": "Central supremacy and open f-file."
                }
            },
            {
                "id": "kg-muzio-4",
                "san": "exf4",
                "from": "e5",
                "to": "f4",
                "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
                "turn": "b",
                "ply": 4,
                "annotation": "King's Gambit Accepted. Black wins a pawn and threatens Qh4+.",
                "whyThisMove": "Takes the material.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-5",
                "san": "Nf3",
                "from": "g1",
                "to": "f3",
                "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3",
                "turn": "w",
                "ply": 5,
                "annotation": "The vital Knight move! Stops ...Qh4+ check cold while developing.",
                "whyThisMove": "Controls h4 and prepares kingside pressure.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-6",
                "san": "g5",
                "from": "g7",
                "to": "g5",
                "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
                "turn": "b",
                "ply": 6,
                "annotation": "Black plays 3...g5 to stubbornly hold onto the f4 gambit pawn.",
                "whyThisMove": "Guards the f4 pawn.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-7",
                "san": "Bc4",
                "from": "f1",
                "to": "c4",
                "fen": "rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R b KQkq - 1 4",
                "turn": "w",
                "ply": 7,
                "annotation": "White develops the bishop directly targeting Black's vulnerable f7 focal point.",
                "whyThisMove": "Sets up the battery against f7.",
                "isBookMove": true,
                "arrows": [
                    [
                        "c4",
                        "f7",
                        "rgba(239, 68, 68, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-muzio-8",
                "san": "g4",
                "from": "g5",
                "to": "g4",
                "fen": "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQK2R w KQkq - 0 5",
                "turn": "b",
                "ply": 8,
                "annotation": "Black lashes out with 4...g4! Kicking White's knight to unleash a queen attack.",
                "whyThisMove": "Direct attack on White's knight.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-9",
                "san": "O-O",
                "from": "e1",
                "to": "g1",
                "fen": "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 b kq - 1 5",
                "turn": "w",
                "ply": 9,
                "annotation": "5.O-O!! THE MUZIO GAMBIT! White ignores the threat, sacrifices the knight, and opens the f-file!",
                "whyThisMove": "Time is worth more than material. White trades the knight for an immediate, overwhelming kingside assault.",
                "isBookMove": true,
                "isSacrifice": true,
                "sacrificeInfo": {
                    "material": "Knight (3 points)",
                    "compensation": "Triple battery on the open f-file aimed directly at Black's uncastled king."
                },
                "arrows": [
                    [
                        "f1",
                        "f7",
                        "rgba(239, 68, 68, 0.9)"
                    ],
                    [
                        "c4",
                        "f7",
                        "rgba(239, 68, 68, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-muzio-10",
                "san": "gxf3",
                "from": "g4",
                "to": "f3",
                "fen": "rnbqkbnr/pppp1p1p/8/8/2B1Pp2/5p2/PPPP2PP/RNBQ1RK1 w kq - 0 6",
                "turn": "b",
                "ply": 10,
                "annotation": "Black greedily accepts the knight sacrifice, but Black's king is now defenseless.",
                "whyThisMove": "Captures White's piece.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-11",
                "san": "Qxf3",
                "from": "d1",
                "to": "f3",
                "fen": "rnbqkbnr/pppp1p1p/8/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 b kq - 0 6",
                "turn": "w",
                "ply": 11,
                "annotation": "White recaptures with the queen! Queen, rook, and bishop all converge on the f7 square.",
                "whyThisMove": "Forms a lethal three-piece battery aimed at f7.",
                "isBookMove": true,
                "arrows": [
                    [
                        "f3",
                        "f7",
                        "rgba(239, 68, 68, 0.9)"
                    ],
                    [
                        "f1",
                        "f7",
                        "rgba(239, 68, 68, 0.9)"
                    ],
                    [
                        "c4",
                        "f7",
                        "rgba(239, 68, 68, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-muzio-12",
                "san": "Qf6",
                "from": "d8",
                "to": "f6",
                "fen": "rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq - 1 7",
                "turn": "b",
                "ply": 12,
                "annotation": "Black brings the queen to f6 to guard the critical f7 square.",
                "whyThisMove": "Defends f7.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-13",
                "san": "e5",
                "from": "e4",
                "to": "e5",
                "fen": "rnb1kbnr/pppp1p1p/5q2/4P3/2B2p2/5Q2/PPPP2PP/RNB2RK1 b kq - 0 7",
                "turn": "w",
                "ply": 13,
                "annotation": "7.e5! White attacks Black's defending queen with tempo, deflecting it away from f7.",
                "whyThisMove": "Deflects the queen from the defense of f7 with tempo.",
                "isBookMove": true,
                "arrows": [
                    [
                        "e5",
                        "f6",
                        "rgba(239, 68, 68, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-muzio-14",
                "san": "Qxe5",
                "from": "f6",
                "to": "e5",
                "fen": "rnb1kbnr/pppp1p1p/8/4q3/2B2p2/5Q2/PPPP2PP/RNB2RK1 w kq - 0 8",
                "turn": "b",
                "ply": 14,
                "annotation": "Black captures the e5 pawn with the queen.",
                "whyThisMove": "Takes the e5 pawn.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-15",
                "san": "Bxf7+",
                "from": "c4",
                "to": "f7",
                "fen": "rnb1kbnr/pppp1B1p/8/4q3/5p2/5Q2/PPPP2PP/RNB2RK1 b kq - 0 8",
                "turn": "w",
                "ply": 15,
                "annotation": "BOOM! 8.Bxf7+!! The second sacrifice! White rips away the last bodyguard around Black's king!",
                "whyThisMove": "Drags Black's king onto the open board where checkmate nets follow.",
                "isBookMove": true,
                "isSacrifice": true,
                "sacrificeInfo": {
                    "material": "Bishop (3 points)",
                    "compensation": "Permanently drags Black's king into the center of the board with unstoppable mating threats."
                },
                "arrows": [
                    [
                        "f7",
                        "e8",
                        "rgba(239, 68, 68, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-muzio-16",
                "san": "Kxf7",
                "from": "e8",
                "to": "f7",
                "fen": "rnb2bnr/pppp1k1p/8/4q3/5p2/5Q2/PPPP2PP/RNB2RK1 w - - 0 9",
                "turn": "b",
                "ply": 16,
                "annotation": "Forced. Black's king has to capture the bishop and step into the open center.",
                "whyThisMove": "Forced recapture.",
                "isBookMove": true
            },
            {
                "id": "kg-muzio-17",
                "san": "d4",
                "from": "d2",
                "to": "d4",
                "fen": "rnb2bnr/pppp1k1p/8/4q3/3P1p2/5Q2/PPP3PP/RNB2RK1 b - - 0 9",
                "turn": "w",
                "ply": 17,
                "annotation": "9.d4! White strikes with tempo against the queen. With 10.Be3 and 11.Bxf4 coming, White has an unstoppable mating assault!",
                "whyThisMove": "Wins the center, opens the dark-squared bishop, and seals the king hunt.",
                "isBookMove": true,
                "arrows": [
                    [
                        "d4",
                        "e5",
                        "rgba(239, 68, 68, 0.9)"
                    ],
                    [
                        "c1",
                        "f4",
                        "rgba(34, 197, 94, 0.9)"
                    ]
                ]
            }
        ]
    },
    {
        "id": "kings-gambit-kieseritzky",
        "openingId": "kings-gambit",
        "name": "Kieseritzky Attack (4.h4 & 5.Ne5 Outpost)",
        "eco": "C39",
        "description": "White immediately attacks Black's pawn chain with 4.h4 and leaps the knight into 5.Ne5, seizing the center and dominating key squares.",
        "difficulty": "intermediate",
        "moves": [
            {
                "id": "kg-kiez-1",
                "san": "e4",
                "from": "e2",
                "to": "e4",
                "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
                "turn": "w",
                "ply": 1,
                "annotation": "White opens with 1.e4.",
                "whyThisMove": "Central stake.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-2",
                "san": "e5",
                "from": "e7",
                "to": "e5",
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                "turn": "b",
                "ply": 2,
                "annotation": "Black responds with 1...e5.",
                "whyThisMove": "Equalizes space.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-3",
                "san": "f4",
                "from": "f2",
                "to": "f4",
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
                "turn": "w",
                "ply": 3,
                "annotation": "The King's Gambit! White offers the f-pawn.",
                "whyThisMove": "Undermines e5.",
                "isBookMove": true,
                "isSacrifice": true,
                "sacrificeInfo": {
                    "material": "f-pawn (1 point)",
                    "compensation": "Central control and open f-file."
                }
            },
            {
                "id": "kg-kiez-4",
                "san": "exf4",
                "from": "e5",
                "to": "f4",
                "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
                "turn": "b",
                "ply": 4,
                "annotation": "Black accepts the gambit pawn.",
                "whyThisMove": "Material gain.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-5",
                "san": "Nf3",
                "from": "g1",
                "to": "f3",
                "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3",
                "turn": "w",
                "ply": 5,
                "annotation": "White develops the knight to prevent 3...Qh4+.",
                "whyThisMove": "Controls h4.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-6",
                "san": "g5",
                "from": "g7",
                "to": "g5",
                "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
                "turn": "b",
                "ply": 6,
                "annotation": "Black plays 3...g5 to defend the f4 pawn.",
                "whyThisMove": "Holds f4.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-7",
                "san": "h4",
                "from": "h2",
                "to": "h4",
                "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp1P/5N2/PPPP2P1/RNBQKB1R b KQkq - 0 4",
                "turn": "w",
                "ply": 7,
                "annotation": "The Kieseritzky attack begins! White plays 4.h4, immediately challenging Black's pawn chain.",
                "whyThisMove": "Undermines Black's g5-f4 pawn chain.",
                "isBookMove": true,
                "arrows": [
                    [
                        "h4",
                        "g5",
                        "rgba(239, 68, 68, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-kiez-8",
                "san": "g4",
                "from": "g5",
                "to": "g4",
                "fen": "rnbqkbnr/pppp1p1p/8/8/4PppP/5N2/PPPP2P1/RNBQKB1R w KQkq - 0 5",
                "turn": "b",
                "ply": 8,
                "annotation": "Black pushes 4...g4, attacking the f3 knight.",
                "whyThisMove": "Attacks f3 knight.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-9",
                "san": "Ne5",
                "from": "f3",
                "to": "e5",
                "fen": "rnbqkbnr/pppp1p1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R b KQkq - 1 5",
                "turn": "w",
                "ply": 9,
                "annotation": "5.Ne5! The knight leaps into the central outpost, threatening both g4 and f7.",
                "whyThisMove": "Central knight outpost putting pressure on g4 and f7.",
                "isBookMove": true,
                "arrows": [
                    [
                        "e5",
                        "f7",
                        "rgba(239, 68, 68, 0.9)"
                    ],
                    [
                        "e5",
                        "g4",
                        "rgba(234, 179, 8, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-kiez-10",
                "san": "Nf6",
                "from": "g8",
                "to": "f6",
                "fen": "rnbqkb1r/pppp1p1p/5n2/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 2 6",
                "turn": "b",
                "ply": 10,
                "annotation": "Black counterattacks White's e4 pawn with 5...Nf6.",
                "whyThisMove": "Counterattacks e4.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-11",
                "san": "d4",
                "from": "d2",
                "to": "d4",
                "fen": "rnbqkb1r/pppp1p1p/5n2/4N3/3PPppP/8/PPP3P1/RNBQKB1R b KQkq - 0 6",
                "turn": "w",
                "ply": 11,
                "annotation": "White solidifies the center with 6.d4, claiming full central control.",
                "whyThisMove": "Classical pawn center.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-12",
                "san": "d6",
                "from": "d7",
                "to": "d6",
                "fen": "rnbqkb1r/ppp2p1p/3p1n2/4N3/3PPppP/8/PPP3P1/RNBQKB1R w KQkq - 0 7",
                "turn": "b",
                "ply": 12,
                "annotation": "Black kicks White's knight with 6...d6.",
                "whyThisMove": "Attacks the e5 knight.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-13",
                "san": "Nd3",
                "from": "e5",
                "to": "d3",
                "fen": "rnbqkb1r/ppp2p1p/3p1n2/8/3PPppP/3N4/PPP3P1/RNBQKB1R b KQkq - 1 7",
                "turn": "w",
                "ply": 13,
                "annotation": "White retreats the knight to d3, preparing to recapture on f4.",
                "whyThisMove": "Relocates to attack f4.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-14",
                "san": "Nxe4",
                "from": "f6",
                "to": "e4",
                "fen": "rnbqkb1r/ppp2p1p/3p4/8/3PnppP/3N4/PPP3P1/RNBQKB1R w KQkq - 0 8",
                "turn": "b",
                "ply": 14,
                "annotation": "Black captures the e4 pawn.",
                "whyThisMove": "Recaptures central pawn.",
                "isBookMove": true
            },
            {
                "id": "kg-kiez-15",
                "san": "Bxf4",
                "from": "c1",
                "to": "f4",
                "fen": "rnbqkb1r/ppp2p1p/3p4/8/3PnBpP/3N4/PPP3P1/RN1QKB1R b KQkq - 0 8",
                "turn": "w",
                "ply": 15,
                "annotation": "White plays 8.Bxf4! White regains material, dominates the d4/e5 center, and enjoys dynamic piece play!",
                "whyThisMove": "Regains material balance with superior development and open diagonals.",
                "isBookMove": true,
                "arrows": [
                    [
                        "f4",
                        "c7",
                        "rgba(34, 197, 94, 0.9)"
                    ]
                ]
            }
        ]
    },
    {
        "id": "kings-gambit-classical",
        "openingId": "kings-gambit",
        "name": "Classical Hanstein (4.Bc4 Bg7 & 6.d4)",
        "eco": "C38",
        "description": "Black defends solidly with 4...Bg7. White builds an iron pawn center with d4 and c3, castling into king safety with lasting pressure.",
        "difficulty": "intermediate",
        "moves": [
            {
                "id": "kg-hanstein-1",
                "san": "e4",
                "from": "e2",
                "to": "e4",
                "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
                "turn": "w",
                "ply": 1,
                "annotation": "White starts with 1.e4.",
                "whyThisMove": "Center control.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-2",
                "san": "e5",
                "from": "e7",
                "to": "e5",
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                "turn": "b",
                "ply": 2,
                "annotation": "Black mirrors with 1...e5.",
                "whyThisMove": "Equal space.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-3",
                "san": "f4",
                "from": "f2",
                "to": "f4",
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
                "turn": "w",
                "ply": 3,
                "annotation": "The King's Gambit! White offers the f-pawn on move 2.",
                "whyThisMove": "Undermines center.",
                "isBookMove": true,
                "isSacrifice": true,
                "sacrificeInfo": {
                    "material": "f-pawn (1 point)",
                    "compensation": "Central dominance (d4/c3) and semi-open f-file."
                }
            },
            {
                "id": "kg-hanstein-4",
                "san": "exf4",
                "from": "e5",
                "to": "f4",
                "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
                "turn": "b",
                "ply": 4,
                "annotation": "Black accepts the gambit.",
                "whyThisMove": "Takes pawn.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-5",
                "san": "Nf3",
                "from": "g1",
                "to": "f3",
                "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3",
                "turn": "w",
                "ply": 5,
                "annotation": "White develops the knight to block ...Qh4+.",
                "whyThisMove": "Guards h4.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-6",
                "san": "g5",
                "from": "g7",
                "to": "g5",
                "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
                "turn": "b",
                "ply": 6,
                "annotation": "Black defends f4 with ...g5.",
                "whyThisMove": "Secures f4.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-7",
                "san": "Bc4",
                "from": "f1",
                "to": "c4",
                "fen": "rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R b KQkq - 1 4",
                "turn": "w",
                "ply": 7,
                "annotation": "White develops the bishop to c4, taking aim at f7.",
                "whyThisMove": "Pressures f7.",
                "isBookMove": true,
                "arrows": [
                    [
                        "c4",
                        "f7",
                        "rgba(239, 68, 68, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-hanstein-8",
                "san": "Bg7",
                "from": "f8",
                "to": "g7",
                "fen": "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq - 2 5",
                "turn": "b",
                "ply": 8,
                "annotation": "The Hanstein Defense! Black develops the bishop to g7 to solidify the kingside.",
                "whyThisMove": "Solid bishop placement on g7.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-9",
                "san": "h4",
                "from": "h2",
                "to": "h4",
                "fen": "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp1P/5N2/PPPP2P1/RNBQK2R b KQkq - 0 5",
                "turn": "w",
                "ply": 9,
                "annotation": "White plays 5.h4, testing Black's pawn chain.",
                "whyThisMove": "Undermines the g5 bastion.",
                "isBookMove": true,
                "arrows": [
                    [
                        "h4",
                        "g5",
                        "rgba(239, 68, 68, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-hanstein-10",
                "san": "h6",
                "from": "h7",
                "to": "h6",
                "fen": "rnbqk1nr/pppp1pb1/7p/6p1/2B1Pp1P/5N2/PPPP2P1/RNBQK2R w KQkq - 0 6",
                "turn": "b",
                "ply": 10,
                "annotation": "Black defends g5 with 5...h6.",
                "whyThisMove": "Guards g5.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-11",
                "san": "d4",
                "from": "d2",
                "to": "d4",
                "fen": "rnbqk1nr/pppp1pb1/7p/6p1/2BPPp1P/5N2/PPP3P1/RNBQK2R b KQkq - 0 6",
                "turn": "w",
                "ply": 11,
                "annotation": "White seizes full central control with 6.d4!",
                "whyThisMove": "Full pawn center on d4 and e4.",
                "isBookMove": true,
                "arrows": [
                    [
                        "d4",
                        "e5",
                        "rgba(34, 197, 94, 0.9)"
                    ]
                ]
            },
            {
                "id": "kg-hanstein-12",
                "san": "d6",
                "from": "d7",
                "to": "d6",
                "fen": "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/5N2/PPP3P1/RNBQK2R w KQkq - 0 7",
                "turn": "b",
                "ply": 12,
                "annotation": "Black supports the center with 6...d6.",
                "whyThisMove": "Solidifies center.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-13",
                "san": "c3",
                "from": "c2",
                "to": "c3",
                "fen": "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/2P2N2/PP4P1/RNBQK2R b KQkq - 0 7",
                "turn": "w",
                "ply": 13,
                "annotation": "White plays 7.c3, cementing an impenetrable pawn center.",
                "whyThisMove": "Granite pawn center.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-14",
                "san": "Nc6",
                "from": "b8",
                "to": "c6",
                "fen": "r1bqk1nr/ppp2pb1/2np3p/6p1/2BPPp1P/2P2N2/PP4P1/RNBQK2R w KQkq - 1 8",
                "turn": "b",
                "ply": 14,
                "annotation": "Black develops the knight to c6.",
                "whyThisMove": "Natural knight development.",
                "isBookMove": true
            },
            {
                "id": "kg-hanstein-15",
                "san": "O-O",
                "from": "e1",
                "to": "g1",
                "fen": "r1bqk1nr/ppp2pb1/2np3p/6p1/2BPPp1P/2P2N2/PP4P1/RNBQ1RK1 b kq - 2 8",
                "turn": "w",
                "ply": 15,
                "annotation": "White castles into safety! White controls the center, has an active f-file, and commands a lasting positional initiative.",
                "whyThisMove": "King safety with heavy pressure down the semi-open f-file.",
                "isBookMove": true
            }
        ]
    }
]
  },

  // ==========================================
  // 6. QUEEN'S GAMBIT
  {
    id: 'queens-gambit',
    slug: 'queens-gambit',
    name: "Queen's Gambit",
    eco: 'D20',
    category: 'gambit',
    side: 'white',
    difficulty: 'beginner',
    summary: 'The quintessential positional gambit. White offers a flank pawn to acquire an iron grip on the center.',
    philosophy: 'Unlike the King\'s Gambit, White risks zero king safety. White offers the c4 pawn to exchange a flank pawn for Black\'s central d5 pawn, aiming for e4 and rapid central dominance.',
    keyThemes: [
      'Exchanging a flank pawn (c4) for a central pawn (d5)',
      'Effortless recapture of c4 with Bxc4',
      'Pawn center expansion with e4 and Nc3',
      'Queenside initiative and minority attack'
    ],
    pawnStructureInfo: 'White establishes a strong central foundation. If Black captures on c4, trying to cling to the pawn with ...b5 often leads to disastrous structural collapse on the queenside (a4!).',
    famousGame: {
      white: 'Garry Kasparov',
      black: 'Viswanathan Anand',
      year: 1995,
      event: 'PCA World Championship (Game 10)',
      result: '1-0',
      description: 'Kasparov unleashed a blistering novelty in the Queen\'s Gambit structure, executing a decisive rook sacrifice that shook the world championship match.',
      keyMomentFen: 'r1b1qrk1/pp3ppp/2n1p3/1B6/3RP3/2P2N2/P1Q2PPP/4K2R w K - 1 15'
    },
    variations: [
      {
        "id": "qga-central-domination",
        "openingId": "queens-gambit",
        "name": "Queen's Gambit Accepted - Classical Center Domination",
        "eco": "D20",
        "description": "Black captures on c4. White systematically regains the pawn with 5.Bxc4 and establishes an imposing central presence with active queen and rook coordination.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "qga-main-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "White opens with the queen's pawn, taking space in the center.",
            "whyThisMove": "Controls d4, c5, and e5.",
            "isBookMove": true
          },
          {
            "id": "qga-main-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black responds symmetrically with 1...d5.",
            "whyThisMove": "Prevents White from playing an uncontested e4.",
            "isBookMove": true
          },
          {
            "id": "qga-main-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "The Queen's Gambit! White offers the c-pawn to deflect Black's d5 anchor.",
            "whyThisMove": "Attacks Black's central stronghold.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "c-pawn (1 point)",
              "compensation": "Full central expansion with e4 and rapid piece development."
            }
          },
          {
            "id": "qga-main-4",
            "san": "dxc4",
            "from": "d5",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Queen's Gambit Accepted. Black takes the pawn.",
            "whyThisMove": "Tests White's plan to regain the pawn.",
            "isBookMove": true
          },
          {
            "id": "qga-main-5",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/ppp1pppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White prevents Black from playing ...e5.",
            "whyThisMove": "Controls e5 and develops kingside knight.",
            "isBookMove": true
          },
          {
            "id": "qga-main-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black develops naturally toward the center.",
            "whyThisMove": "Controls d5 and e4.",
            "isBookMove": true
          },
          {
            "id": "qga-main-7",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "rnbqkb1r/ppp1pppp/5n2/8/2pP4/4PN2/PP3PPP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White opens the diagonal for the light-squared bishop to recapture on c4.",
            "whyThisMove": "Prepares Bxc4.",
            "isBookMove": true
          },
          {
            "id": "qga-main-8",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black prepares ...c5 to challenge White's center.",
            "whyThisMove": "Frees the dark-squared bishop.",
            "isBookMove": true
          },
          {
            "id": "qga-main-9",
            "san": "Bxc4",
            "from": "f1",
            "to": "c4",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2BP4/4PN2/PP3PPP/RNBQK2R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White recaptures the gambit pawn with an active bishop.",
            "whyThisMove": "Restores material equality with superior center.",
            "isBookMove": true
          },
          {
            "id": "qga-main-10",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQK2R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black strikes at White's d4 center.",
            "whyThisMove": "Counterplay against d4.",
            "isBookMove": true
          },
          {
            "id": "qga-main-11",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 b kq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White castles into safety.",
            "whyThisMove": "Secures king and activates rook.",
            "isBookMove": true
          },
          {
            "id": "qga-main-12",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black prepares ...b5 to expand on the queenside.",
            "whyThisMove": "Prepares b5 and Bb7.",
            "isBookMove": true
          },
          {
            "id": "qga-main-13",
            "san": "Qe2",
            "from": "d1",
            "to": "e2",
            "fen": "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP2QPPP/RNB2RK1 b kq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White connects rooks and prepares e3-e4 central thrust.",
            "whyThisMove": "Prepares central pawn advance.",
            "isBookMove": true
          },
          {
            "id": "qga-main-14",
            "san": "b5",
            "from": "b7",
            "to": "b5",
            "fen": "rnbqkb1r/5ppp/p3pn2/1pp5/2BP4/4PN2/PP2QPPP/RNB2RK1 w kq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black gains space on the queenside.",
            "whyThisMove": "Hits the bishop and frees b7.",
            "isBookMove": true
          },
          {
            "id": "qga-main-15",
            "san": "Bb3",
            "from": "c4",
            "to": "b3",
            "fen": "rnbqkb1r/5ppp/p3pn2/1pp5/3P4/1B2PN2/PP2QPPP/RNB2RK1 b kq - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "The bishop retreats along the optimal a2-g8 diagonal.",
            "whyThisMove": "Maintains pressure toward Black's kingside.",
            "isBookMove": true
          },
          {
            "id": "qga-main-16",
            "san": "Bb7",
            "from": "c8",
            "to": "b7",
            "fen": "rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1B2PN2/PP2QPPP/RNB2RK1 w kq - 2 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black places the bishop on the long diagonal. A rich middlegame awaits!",
            "whyThisMove": "Controls the long diagonal a8-h1.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "qgd-elephant-trap",
        "openingId": "queens-gambit",
        "name": "Queen's Gambit Declined - The Elephant Trap (6...Nxd5!!)",
        "eco": "D30",
        "description": "White believes the f6 knight is pinned and greedily plays 6.Nxd5??. Black shocks White with the legendary 6...Nxd5!! queen sacrifice, winning a piece on the spot!",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "qgd-elep-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4 opens the center.",
            "whyThisMove": "Central stake.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...d5 stakes equal space.",
            "whyThisMove": "Direct defense.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Queen's Gambit.",
            "whyThisMove": "Challenges d5.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-4",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Queen's Gambit Declined. Black solidly anchors d5.",
            "whyThisMove": "Maintains central bastion.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-5",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White adds a second attacker to d5.",
            "whyThisMove": "Pressure on d5.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black defends d5.",
            "whyThisMove": "Develops and defends.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-7",
            "san": "Bg5",
            "from": "c1",
            "to": "g5",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White pins Black's knight against the queen.",
            "whyThisMove": "Pinning the defender of d5.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-8",
            "san": "Nbd7",
            "from": "b8",
            "to": "d7",
            "fen": "r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 4 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops the queen's knight. This sets the legendary Elephant Trap!",
            "whyThisMove": "Protects f6 and prepares counterplay.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-9",
            "san": "cxd5",
            "from": "c4",
            "to": "d5",
            "fen": "r1bqkb1r/pppn1ppp/4pn2/3P2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White trades pawns on d5.",
            "whyThisMove": "Opening the c-file.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-10",
            "san": "exd5",
            "from": "e6",
            "to": "d5",
            "fen": "r1bqkb1r/pppn1ppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black recaptures with the pawn.",
            "whyThisMove": "Restores pawn balance.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-11",
            "san": "Nxd5",
            "from": "c3",
            "to": "d5",
            "fen": "r1bqkb1r/pppn1ppp/5n2/3N2B1/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "BLUNDER! White assumes Black cannot recapture because the knight on f6 is pinned to the queen!",
            "whyThisMove": "Greedily wins what looks like a free pawn.",
            "isBookMove": true,
            "arrows": [
              [
                "c3",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "qgd-elep-12",
            "san": "Nxd5",
            "from": "f6",
            "to": "d5",
            "fen": "r1bqkb1r/pppn1ppp/8/3n2B1/3P4/8/PP2PPPP/R2QKBNR w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "BOOM! 6...Nxd5!! Black sacrifices the queen! The Elephant Trap snaps shut!",
            "whyThisMove": "Disregards the queen to unleash a devastating counter-attack.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "Queen (9 points)",
              "compensation": "Forced win of a full minor piece after check on b4."
            }
          },
          {
            "id": "qgd-elep-13",
            "san": "Bxd8",
            "from": "g5",
            "to": "d8",
            "fen": "r1bBkb1r/pppn1ppp/8/3n4/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White gleefully captures Black's queen, unaware of the impending catastrophe.",
            "whyThisMove": "Takes the queen.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-14",
            "san": "Bb4+",
            "from": "f8",
            "to": "b4",
            "fen": "r1bBk2r/pppn1ppp/8/3n4/1b1P4/8/PP2PPPP/R2QKBNR w KQkq - 1 8",
            "turn": "b",
            "ply": 14,
            "annotation": "7...Bb4+!! Check! White has no way to block except with the queen!",
            "whyThisMove": "Forces White to surrender the queen on d2.",
            "isBookMove": true,
            "arrows": [
              [
                "b4",
                "e1",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "qgd-elep-15",
            "san": "Qd2",
            "from": "d1",
            "to": "d2",
            "fen": "r1bBk2r/pppn1ppp/8/3n4/1b1P4/8/PP1QPPPP/R3KBNR b KQkq - 2 8",
            "turn": "w",
            "ply": 15,
            "annotation": "Forced! White must sacrifice the queen to save the king.",
            "whyThisMove": "Only legal block.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-16",
            "san": "Bxd2+",
            "from": "b4",
            "to": "d2",
            "fen": "r1bBk2r/pppn1ppp/8/3n4/3P4/8/PP1bPPPP/R3KBNR w KQkq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black captures the queen with check.",
            "whyThisMove": "Wins back the queen.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-17",
            "san": "Kxd2",
            "from": "e1",
            "to": "d2",
            "fen": "r1bBk2r/pppn1ppp/8/3n4/3P4/8/PP1KPPPP/R4BNR b kq - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White king must recapture.",
            "whyThisMove": "Recaptures bishop.",
            "isBookMove": true
          },
          {
            "id": "qgd-elep-18",
            "san": "Kxd8",
            "from": "e8",
            "to": "d8",
            "fen": "r1bk3r/pppn1ppp/8/3n4/3P4/8/PP1KPPPP/R4BNR w - - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black recaptures the bishop. Black emerges a FULL MINOR PIECE AHEAD with an easily won game!",
            "whyThisMove": "Black is +3 material and completely winning.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "qgd-exchange-carlsbad",
        "openingId": "queens-gambit",
        "name": "Queen's Gambit Declined - Exchange Variation & Carlsbad Attack",
        "eco": "D35",
        "description": "The master standard favored by Kasparov and Carlsen. White trades on d5 to fix Black with a Carlsbad pawn structure, preparing a deadly minority attack on the queenside.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "qgd-carls-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4 opens the center.",
            "whyThisMove": "Central stake.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black plays 1...d5.",
            "whyThisMove": "Central equality.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White offers the c-pawn.",
            "whyThisMove": "Queen's Gambit.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-4",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "QGD setup.",
            "whyThisMove": "Solid pawn support.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-5",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White develops knight.",
            "whyThisMove": "Pressure on d5.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black develops knight.",
            "whyThisMove": "Defends d5.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-7",
            "san": "cxd5",
            "from": "c4",
            "to": "d5",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "The Exchange Variation! White defines the central pawn structure.",
            "whyThisMove": "Creates the Carlsbad asymmetrical structure.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-8",
            "san": "exd5",
            "from": "e6",
            "to": "d5",
            "fen": "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black recaptures.",
            "whyThisMove": "Keeps central pawn presence.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-9",
            "san": "Bg5",
            "from": "c1",
            "to": "g5",
            "fen": "rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq - 1 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White pins the knight to hinder Black's freed bishop.",
            "whyThisMove": "Pins f6 defender.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-10",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "rnbqk2r/ppp1bppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq - 2 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black unpins the knight.",
            "whyThisMove": "Breaks the pin and prepares castling.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-11",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "rnbqk2r/ppp1bppp/5n2/3p2B1/3P4/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White solidifies the center and frees the light-squared bishop.",
            "whyThisMove": "Prepares Bd3.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-12",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnbqk2r/pp2bppp/2p2n2/3p2B1/3P4/2N1P3/PP3PPP/R2QKBNR w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "The Carlsbad pawn triangle (c6-d5-e6).",
            "whyThisMove": "Solidifies d5.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-13",
            "san": "Bd3",
            "from": "f1",
            "to": "d3",
            "fen": "rnbqk2r/pp2bppp/2p2n2/3p2B1/3P4/2NBP3/PP3PPP/R2QK1NR b KQkq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White points the bishop at Black's kingside (h7).",
            "whyThisMove": "Aims at the black monarch.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-14",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnbq1rk1/pp2bppp/2p2n2/3p2B1/3P4/2NBP3/PP3PPP/R2QK1NR w KQ - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black castles into safety.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-15",
            "san": "Qc2",
            "from": "d1",
            "to": "c2",
            "fen": "rnbq1rk1/pp2bppp/2p2n2/3p2B1/3P4/2NBP3/PPQ2PPP/R3K1NR b KQ - 3 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White forms a battery on h7!",
            "whyThisMove": "Battery on c2-h7 diagonal.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-16",
            "san": "Nbd7",
            "from": "b8",
            "to": "d7",
            "fen": "r1bq1rk1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ2PPP/R3K1NR w KQ - 4 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black develops knight to support f6.",
            "whyThisMove": "Guards f6 and controls e5.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-17",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "r1bq1rk1/pp1nbppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R3K2R b KQ - 5 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White develops the remaining knight toward the kingside.",
            "whyThisMove": "Prepares castling.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-18",
            "san": "Re8",
            "from": "f8",
            "to": "e8",
            "fen": "r1bqr1k1/pp1nbppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R3K2R w KQ - 6 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black places the rook on the open e-file.",
            "whyThisMove": "Rook activity.",
            "isBookMove": true
          },
          {
            "id": "qgd-carls-19",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqr1k1/pp1nbppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R4RK1 b - - 7 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White castles. The stage is set for White's famous b4-b5 Minority Attack!",
            "whyThisMove": "Secures king and initiates the Carlsbad plan.",
            "isBookMove": true
          }
        ]
      }
    ]
  },

  // ==========================================
  // 7. SMITH-MORRA GAMBIT
  // ==========================================
  {
    id: 'smith-morra-gambit',
    slug: 'smith-morra-gambit',
    name: 'Smith-Morra Gambit',
    eco: 'B21',
    category: 'gambit',
    side: 'white',
    difficulty: 'intermediate',
    summary: 'The aggressive anti-Sicilian gambit. White sacrifices a pawn on move 3 to tear open the c- and d-files for relentless attacking waves.',
    philosophy: 'Rather than wading through hundreds of pages of Sicilian Najdorf or Dragon theory, White offers 2.d4 and 3.c3. Black gains a pawn, but White gains explosive development, pinning Black\'s king in the center with rooks on c1 and d1.',
    keyThemes: [
      'Rapid development: White has 3 pieces developed while Black has none',
      'Open c- and d-files for White\'s heavy rooks',
      'Targeting e6 and d6 with Bc4, Ng5, or Nd5 sacrifices',
      'Severe punishment for slow Black development'
    ],
    pawnStructureInfo: 'White converts the c-pawn into pure attacking tempo. White\'s queen controls the d-file after Qe2/Rd1, keeping Black\'s d6 pawn permanently backward.',
    famousGame: {
      white: 'Marc Esserman',
      black: 'Loek van Wely',
      year: 2011,
      event: 'US Open',
      result: '1-0',
      description: 'IM Marc Esserman, the world\'s leading authority on the Morra, dismantled a top Grandmaster with a signature Nd5 piece sacrifice!',
      keyMomentFen: 'r1bq1rk1/pp2bppp/2nppn2/8/2BNP3/2N5/PP2QPPP/R1BR2K1 w - - 0 11'
    },
    variations: [
      {
        "id": "smith-morra-mainline-attack",
        "openingId": "smith-morra-gambit",
        "name": "Morra Mainline Attack - Dual Rook Siege",
        "eco": "B21",
        "description": "The quintessential attacking formation. White places rooks on c1 and d1, aiming straight at Black's queen and uncastled king.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "sm-main-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "White opens 1.e4.",
            "whyThisMove": "Central stake.",
            "isBookMove": true
          },
          {
            "id": "sm-main-2",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "The Sicilian Defense.",
            "whyThisMove": "Asymmetrical counterplay.",
            "isBookMove": true
          },
          {
            "id": "sm-main-3",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White immediately strikes at the center!",
            "whyThisMove": "Challenges Black's c-pawn.",
            "isBookMove": true
          },
          {
            "id": "sm-main-4",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "rnbqkbnr/pp1ppppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black captures the pawn.",
            "whyThisMove": "Accepts central trade.",
            "isBookMove": true
          },
          {
            "id": "sm-main-5",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "THE SMITH-MORRA GAMBIT! White sacrifices a pawn to bypass Sicilian theory and launch an all-out attack.",
            "whyThisMove": "Accelerates piece development at the cost of a pawn.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "c-pawn (1 point)",
              "compensation": "Open c- and d-files for rooks, rapid piece coordination."
            }
          },
          {
            "id": "sm-main-6",
            "san": "dxc3",
            "from": "d4",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/2p5/PP3PPP/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black accepts the gambit.",
            "whyThisMove": "Takes the material.",
            "isBookMove": true
          },
          {
            "id": "sm-main-7",
            "san": "Nxc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White recaptures with the knight, activating a minor piece on move 4.",
            "whyThisMove": "Develops with control over d5 and e4.",
            "isBookMove": true
          },
          {
            "id": "sm-main-8",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pp1ppppp/2n5/8/4P3/2N5/PP3PPP/R1BQKBNR w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight to challenge the center.",
            "whyThisMove": "Controls d4 and e5.",
            "isBookMove": true
          },
          {
            "id": "sm-main-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "r1bqkbnr/pp1ppppp/2n5/8/4P3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White develops kingside knight.",
            "whyThisMove": "Prepares castling and controls e5.",
            "isBookMove": true
          },
          {
            "id": "sm-main-10",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bqkbnr/pp2pppp/2np4/8/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black prevents White's e5 push and frees the c8 bishop.",
            "whyThisMove": "Solidifies central control.",
            "isBookMove": true
          },
          {
            "id": "sm-main-11",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pp2pppp/2np4/8/2B1P3/2N2N2/PP3PPP/R1BQK2R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White places the bishop on the dangerous a2-g8 diagonal eyeing f7.",
            "whyThisMove": "Targets the vulnerable f7 square.",
            "isBookMove": true
          },
          {
            "id": "sm-main-12",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "r1bqkbnr/pp3ppp/2npp3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black blunts the bishop's diagonal.",
            "whyThisMove": "Guards f7 and limits Bc4.",
            "isBookMove": true
          },
          {
            "id": "sm-main-13",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqkbnr/pp3ppp/2npp3/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 b kq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White castles into safety.",
            "whyThisMove": "Activates the king's rook.",
            "isBookMove": true
          },
          {
            "id": "sm-main-14",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "r1bqk1nr/pp2bppp/2npp3/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 w kq - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black prepares kingside castling.",
            "whyThisMove": "Minor piece development.",
            "isBookMove": true
          },
          {
            "id": "sm-main-15",
            "san": "Qe2",
            "from": "d1",
            "to": "e2",
            "fen": "r1bqk1nr/pp2bppp/2npp3/8/2B1P3/2N2N2/PP2QPPP/R1B2RK1 b kq - 3 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White clears the d1 square for the rook!",
            "whyThisMove": "Prepares Rd1 battery down the d-file.",
            "isBookMove": true
          },
          {
            "id": "sm-main-16",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bqk1nr/1p2bppp/p1npp3/8/2B1P3/2N2N2/PP2QPPP/R1B2RK1 w kq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black prepares ...b5 to expand on the queenside.",
            "whyThisMove": "Prepares queenside counterplay.",
            "isBookMove": true
          },
          {
            "id": "sm-main-17",
            "san": "Rd1",
            "from": "f1",
            "to": "d1",
            "fen": "r1bqk1nr/1p2bppp/p1npp3/8/2B1P3/2N2N2/PP2QPPP/R1BR2K1 b kq - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White's rook seizes the open d-file, creating a deadly x-ray through Black's d6 pawn to the queen!",
            "whyThisMove": "Pins the d6 pawn down the d-file.",
            "isBookMove": true,
            "arrows": [
              [
                "d1",
                "d8",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sm-main-18",
            "san": "Qc7",
            "from": "d8",
            "to": "c7",
            "fen": "r1b1k1nr/1pq1bppp/p1npp3/8/2B1P3/2N2N2/PP2QPPP/R1BR2K1 w kq - 2 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black's queen sidesteps the d-file pin.",
            "whyThisMove": "Steps off the line of fire.",
            "isBookMove": true
          },
          {
            "id": "sm-main-19",
            "san": "Bf4",
            "from": "c1",
            "to": "f4",
            "fen": "r1b1k1nr/1pq1bppp/p1npp3/8/2B1PB2/2N2N2/PP2QPPP/R2R2K1 b kq - 3 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White brings the dark-squared bishop into the attack, targeting d6!",
            "whyThisMove": "Piles pressure on d6.",
            "isBookMove": true
          },
          {
            "id": "sm-main-20",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1b1k2r/1pq1bppp/p1nppn2/8/2B1PB2/2N2N2/PP2QPPP/R2R2K1 w kq - 4 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black develops the knight to f6.",
            "whyThisMove": "Prepares to castle.",
            "isBookMove": true
          },
          {
            "id": "sm-main-21",
            "san": "Rac1",
            "from": "a1",
            "to": "c1",
            "fen": "r1b1k2r/1pq1bppp/p1nppn2/8/2B1PB2/2N2N2/PP2QPPP/2RR2K1 b kq - 5 11",
            "turn": "w",
            "ply": 21,
            "annotation": "The iconic Smith-Morra setup! Rooks on c1 and d1, bishops raking the diagonals, ready for the e5 pawn break!",
            "whyThisMove": "Dominates both open files facing Black's queen.",
            "isBookMove": true,
            "arrows": [
              [
                "c1",
                "c7",
                "rgba(239, 68, 68, 0.8)"
              ],
              [
                "d1",
                "d6",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "sm-main-22",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1b2rk1/1pq1bppp/p1nppn2/8/2B1PB2/2N2N2/PP2QPPP/2RR2K1 w - - 6 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black castles, but White holds an overwhelming attacking initiative with Nd5 breaks looming!",
            "whyThisMove": "King safety under heavy pressure.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "smith-morra-chicago-trap",
        "openingId": "smith-morra-gambit",
        "name": "The Chicago Trap & Knight Infiltration (12.Bd2!)",
        "eco": "B21",
        "description": "When Black plays 6...Nf6 carelessly, White explodes with 7.e5!, invading with 9.Nb5! and 11.Nc7+ Ke7 12.Bd2!! with an inescapable mating net.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "sm-trap-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-2",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...c5.",
            "whyThisMove": "Sicilian Defense.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-3",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White strikes central pawn.",
            "whyThisMove": "Center attack.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-4",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "rnbqkbnr/pp1ppppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black takes.",
            "whyThisMove": "Accepts trade.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-5",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Smith-Morra Gambit.",
            "whyThisMove": "Offers pawn.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-6",
            "san": "dxc3",
            "from": "d4",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/2p5/PP3PPP/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black takes.",
            "whyThisMove": "Accepts gambit.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-7",
            "san": "Nxc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White recaptures with knight.",
            "whyThisMove": "Active piece play.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-8",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pp1ppppp/2n5/8/4P3/2N5/PP3PPP/R1BQKBNR w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight.",
            "whyThisMove": "Central support.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "r1bqkbnr/pp1ppppp/2n5/8/4P3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White develops knight.",
            "whyThisMove": "Prepares attack.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-10",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bqkbnr/pp2pppp/2np4/8/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black controls e5.",
            "whyThisMove": "Restricts e5 push.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-11",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pp2pppp/2np4/8/2B1P3/2N2N2/PP3PPP/R1BQK2R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White targets f7.",
            "whyThisMove": "Italian diagonal.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-12",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/pp2pppp/2np1n2/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Careless! Black plays 6...Nf6 before playing ...e6, walking into the Chicago Trap!",
            "whyThisMove": "Attacks e4 prematurely.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-13",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "r1bqkb1r/pp2pppp/2np1n2/4P3/2B5/2N2N2/PP3PPP/R1BQK2R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "BOOM! 7.e5! White strikes immediately, blasting open the center!",
            "whyThisMove": "Exploits Black's uncoordinated piece setup.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "d6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sm-trap-14",
            "san": "dxe5",
            "from": "d6",
            "to": "e5",
            "fen": "r1bqkb1r/pp2pppp/2n2n2/4p3/2B5/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black captures the pawn.",
            "whyThisMove": "Must address the central threat.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-15",
            "san": "Qxd8+",
            "from": "d1",
            "to": "d8",
            "fen": "r1bQkb1r/pp2pppp/2n2n2/4p3/2B5/2N2N2/PP3PPP/R1B1K2R b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White trades queens to strip Black's king of castling rights!",
            "whyThisMove": "Forces Black's king or knight to forfeit position.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-16",
            "san": "Nxd8",
            "from": "c6",
            "to": "d8",
            "fen": "r1bnkb1r/pp2pppp/5n2/4p3/2B5/2N2N2/PP3PPP/R1B1K2R w KQkq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black recaptures with the knight.",
            "whyThisMove": "Retains king mobility.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-17",
            "san": "Nb5",
            "from": "c3",
            "to": "b5",
            "fen": "r1bnkb1r/pp2pppp/5n2/1N2p3/2B5/5N2/PP3PPP/R1B1K2R b KQkq - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White's knight leaps forward, threatening Nc7+ winning the rook on a8!",
            "whyThisMove": "Threatens deadly Nc7+ fork.",
            "isBookMove": true,
            "arrows": [
              [
                "b5",
                "c7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sm-trap-18",
            "san": "Rb8",
            "from": "a8",
            "to": "b8",
            "fen": "1rbnkb1r/pp2pppp/5n2/1N2p3/2B5/5N2/PP3PPP/R1B1K2R w KQk - 2 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black's rook runs to b8 to avoid the fork.",
            "whyThisMove": "Defends c7 fork.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-19",
            "san": "Nxe5",
            "from": "f3",
            "to": "e5",
            "fen": "1rbnkb1r/pp2pppp/5n2/1N2N3/2B5/8/PP3PPP/R1B1K2R b KQk - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White captures on e5 with the other knight! The two white knights dominate the board.",
            "whyThisMove": "Threatens Nc7+ check.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "c7",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "sm-trap-20",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "1rbnkb1r/pp3ppp/4pn2/1N2N3/2B5/8/PP3PPP/R1B1K2R w KQk - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black tries to blunt White's bishop on c4.",
            "whyThisMove": "Blocks the bishop diagonal.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-21",
            "san": "Nc7+",
            "from": "b5",
            "to": "c7",
            "fen": "1rbnkb1r/ppN2ppp/4pn2/4N3/2B5/8/PP3PPP/R1B1K2R b KQk - 1 11",
            "turn": "w",
            "ply": 21,
            "annotation": "Check! White's knight invades Black's camp.",
            "whyThisMove": "Forces Black's king out.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-22",
            "san": "Ke7",
            "from": "e8",
            "to": "e7",
            "fen": "1rbn1b1r/ppN1kppp/4pn2/4N3/2B5/8/PP3PPP/R1B1K2R w KQ - 2 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black's king is forced to e7.",
            "whyThisMove": "Only legal square.",
            "isBookMove": true
          },
          {
            "id": "sm-trap-23",
            "san": "Bd2",
            "from": "c1",
            "to": "d2",
            "fen": "1rbn1b1r/ppN1kppp/4pn2/4N3/2B5/8/PP1B1PPP/R3K2R b KQ - 3 12",
            "turn": "w",
            "ply": 23,
            "annotation": "12.Bd2!! THE TRAP CLOSES! White prepares Bb4# checkmate next move! Black is completely helpless against the mating net!",
            "whyThisMove": "Threatens unstoppable Bb4# delivering checkmate in the center of the board.",
            "isBookMove": true,
            "arrows": [
              [
                "d2",
                "b4",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 8. STAFFORD GAMBIT
  // ==========================================
  {
    id: 'stafford-gambit',
    slug: 'stafford-gambit',
    name: 'Stafford Gambit',
    eco: 'C42',
    category: 'trap',
    side: 'black',
    difficulty: 'beginner',
    summary: 'The ultimate online trap gambit for Black. Black sacrifices a pawn on move 3 to unleash vicious mating traps on White\'s king.',
    philosophy: 'Popularized by Eric Rosen, the Stafford Gambit sacrifices the e5 pawn in the Petrov Defense. In return, Black gets completely unobstructed diagonals for both bishops, open d-file pressure, and immediate tactical shots at f2 and d1.',
    keyThemes: [
      'Rapid bishop placement on c5 eyeing the weak f2 square',
      'The lethal ...Nxe4 sacrifice and ...Bxf2+ checkmate traps',
      'Queen pressure via ...Qh4 or ...Qd4',
      'Exploiting greedy or careless White development'
    ],
    pawnStructureInfo: 'Black doubles pawns on c7/c6, but gains an open highway on the d-file and rapid piece mobility that punishes unprepared opponents.',
    famousGame: {
      white: 'Amateur (2200)',
      black: 'Eric Rosen',
      year: 2020,
      event: 'Online Blitz',
      result: '0-1',
      description: 'IM Eric Rosen demonstrated the iconic trap: White plays 6.Bg5?, Black shocks with 6...Nxe4!!, leading to a forced checkmate in 8 moves.',
      keyMomentFen: 'r1bqk2r/ppp2ppp/2p5/2b3B1/4n3/3P4/PPP2PPP/RN1QKB1R w KQkq - 0 7'
    },
    variations: [
      {
        "id": "stafford-oh-no-my-queen",
        "openingId": "stafford-gambit",
        "name": "Oh-No-My-Queen Checkmate Trap (8...Bg4#)",
        "eco": "C42",
        "description": "The viral Eric Rosen trap! Black offers the queen with 7...Nxe4!!, leading directly to a forced checkmate with two bishops on move 8.",
        "difficulty": "beginner",
        "moves": [
          {
            "id": "st-mate-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "White takes center.",
            "isBookMove": true
          },
          {
            "id": "st-mate-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Black matches center.",
            "isBookMove": true
          },
          {
            "id": "st-mate-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White attacks e5.",
            "whyThisMove": "Standard Italian/Ruy setup.",
            "isBookMove": true
          },
          {
            "id": "st-mate-4",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Petrov's Defense.",
            "whyThisMove": "Counter-attacks e4.",
            "isBookMove": true
          },
          {
            "id": "st-mate-5",
            "san": "Nxe5",
            "from": "f3",
            "to": "e5",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White takes the pawn on e5.",
            "whyThisMove": "Accepts pawn advantage.",
            "isBookMove": true
          },
          {
            "id": "st-mate-6",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
            "turn": "b",
            "ply": 6,
            "annotation": "THE STAFFORD GAMBIT! Black offers the knight instead of playing ...d6.",
            "whyThisMove": "Sacrifices a pawn for blazing piece coordination.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "e-pawn (1 point)",
              "compensation": "Open diagonals, fast castling, deadly tactical traps against f2 and d1."
            }
          },
          {
            "id": "st-mate-7",
            "san": "Nxc6",
            "from": "e5",
            "to": "c6",
            "fen": "r1bqkb1r/pppp1ppp/2N2n2/8/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White accepts the knight trade.",
            "whyThisMove": "Consolidates pawn up.",
            "isBookMove": true
          },
          {
            "id": "st-mate-8",
            "san": "dxc6",
            "from": "d7",
            "to": "c6",
            "fen": "r1bqkb1r/ppp2ppp/2p2n2/8/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black recaptures with the d-pawn, opening lines for both bishops and the queen!",
            "whyThisMove": "Frees both bishops immediately.",
            "isBookMove": true
          },
          {
            "id": "st-mate-9",
            "san": "d3",
            "from": "d2",
            "to": "d3",
            "fen": "r1bqkb1r/ppp2ppp/2p2n2/8/4P3/3P4/PPP2PPP/RNBQKB1R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White plays solidly to guard e4.",
            "whyThisMove": "Reinforces e4 pawn.",
            "isBookMove": true
          },
          {
            "id": "st-mate-10",
            "san": "Bc5",
            "from": "f8",
            "to": "c5",
            "fen": "r1bqk2r/ppp2ppp/2p2n2/2b5/4P3/3P4/PPP2PPP/RNBQKB1R w KQkq - 1 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black takes aim directly at the vulnerable f2 square!",
            "whyThisMove": "Targets f2 weakness.",
            "isBookMove": true
          },
          {
            "id": "st-mate-11",
            "san": "Bg5",
            "from": "c1",
            "to": "g5",
            "fen": "r1bqk2r/ppp2ppp/2p2n2/2b3B1/4P3/3P4/PPP2PPP/RN1QKB1R b KQkq - 2 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White pins Black's knight to the queen, thinking White is completely safe...",
            "whyThisMove": "Pins f6 knight.",
            "isBookMove": true
          },
          {
            "id": "st-mate-12",
            "san": "Nxe4",
            "from": "f6",
            "to": "e4",
            "fen": "r1bqk2r/ppp2ppp/2p5/2b3B1/4n3/3P4/PPP2PPP/RN1QKB1R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "BOOM! 7...Nxe4!! OH NO MY QUEEN! Black leaves the queen completely hanging on d8!",
            "whyThisMove": "Sacrifices queen to deliver unstoppable checkmate.",
            "isBookMove": true,
            "arrows": [
              [
                "e4",
                "f2",
                "rgba(239, 68, 68, 0.9)"
              ]
            ],
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "Queen (9 points)",
              "compensation": "Immediate forced checkmate on White's king."
            }
          },
          {
            "id": "st-mate-13",
            "san": "Bxd8",
            "from": "g5",
            "to": "d8",
            "fen": "r1bBk2r/ppp2ppp/2p5/2b5/4n3/3P4/PPP2PPP/RN1QKB1R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White greedily snaps off Black's queen, falling directly into the trap!",
            "whyThisMove": "White falls into the trap.",
            "isBookMove": true
          },
          {
            "id": "st-mate-14",
            "san": "Bxf2+",
            "from": "c5",
            "to": "f2",
            "fen": "r1bBk2r/ppp2ppp/2p5/8/4n3/3P4/PPP2bPP/RN1QKB1R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "8...Bxf2+!! Check! White's king has only one square to run.",
            "whyThisMove": "Forces the king to e2.",
            "isBookMove": true,
            "arrows": [
              [
                "c5",
                "f2",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "st-mate-15",
            "san": "Ke2",
            "from": "e1",
            "to": "e2",
            "fen": "r1bBk2r/ppp2ppp/2p5/8/4n3/3P4/PPP1KbPP/RN1Q1B1R b kq - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White's king steps to e2.",
            "whyThisMove": "Only legal move.",
            "isBookMove": true
          },
          {
            "id": "st-mate-16",
            "san": "Bg4#",
            "from": "c8",
            "to": "g4",
            "fen": "r2Bk2r/ppp2ppp/2p5/8/4n1b1/3P4/PPP1KbPP/RN1Q1B1R w kq - 2 9",
            "turn": "b",
            "ply": 16,
            "annotation": "CHECKMATE! 8...Bg4#!! Checkmate on move 8 with two bishops after sacrificing the queen! The ultimate Stafford masterpiece!",
            "whyThisMove": "Delivers checkmate with the bishop pair.",
            "isBookMove": true,
            "arrows": [
              [
                "c8",
                "g4",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "stafford-queen-fork-line",
        "openingId": "stafford-gambit",
        "name": "Queen Fork Line & Central Rampage (8...Qe4+)",
        "eco": "C42",
        "description": "White tries to kick the knight with 6.e5 Ne4 7.d4 Qh4!. Black sacrifices a knight on g3 to deliver a devastating royal fork on e4 winning the h1 rook!",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "st-fork-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "st-fork-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center defense.",
            "isBookMove": true
          },
          {
            "id": "st-fork-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White attacks e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "st-fork-4",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Petrov defense.",
            "whyThisMove": "Attacks e4.",
            "isBookMove": true
          },
          {
            "id": "st-fork-5",
            "san": "Nxe5",
            "from": "f3",
            "to": "e5",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Takes e5.",
            "whyThisMove": "Pawn up.",
            "isBookMove": true
          },
          {
            "id": "st-fork-6",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Stafford Gambit.",
            "whyThisMove": "Offers pawn.",
            "isBookMove": true
          },
          {
            "id": "st-fork-7",
            "san": "Nxc6",
            "from": "e5",
            "to": "c6",
            "fen": "r1bqkb1r/pppp1ppp/2N2n2/8/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White trades knights.",
            "whyThisMove": "Keeps material.",
            "isBookMove": true
          },
          {
            "id": "st-fork-8",
            "san": "dxc6",
            "from": "d7",
            "to": "c6",
            "fen": "r1bqkb1r/ppp2ppp/2p2n2/8/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black opens diagonals.",
            "whyThisMove": "Rapid lines.",
            "isBookMove": true
          },
          {
            "id": "st-fork-9",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "r1bqkb1r/ppp2ppp/2p2n2/4P3/8/8/PPPP1PPP/RNBQKB1R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White tries to kick the knight and clamp down on the center.",
            "whyThisMove": "Attacks Black's knight.",
            "isBookMove": true
          },
          {
            "id": "st-fork-10",
            "san": "Ne4",
            "from": "f6",
            "to": "e4",
            "fen": "r1bqkb1r/ppp2ppp/2p5/4P3/4n3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 6",
            "turn": "b",
            "ply": 10,
            "annotation": "The knight leaps into the active e4 outpost!",
            "whyThisMove": "Anchors on e4.",
            "isBookMove": true
          },
          {
            "id": "st-fork-11",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bqkb1r/ppp2ppp/2p5/4P3/3Pn3/8/PPP2PPP/RNBQKB1R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White reinforces e5 and takes central space.",
            "whyThisMove": "Solidifies center.",
            "isBookMove": true
          },
          {
            "id": "st-fork-12",
            "san": "Qh4",
            "from": "d8",
            "to": "h4",
            "fen": "r1b1kb1r/ppp2ppp/2p5/4P3/3Pn2q/8/PPP2PPP/RNBQKB1R w KQkq - 1 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black brings the queen out with venom! Threatens 8...Qxf2# checkmate!",
            "whyThisMove": "Immediate checkmate threat on f2.",
            "isBookMove": true,
            "arrows": [
              [
                "h4",
                "f2",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "st-fork-13",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "r1b1kb1r/ppp2ppp/2p5/4P3/3Pn2q/6P1/PPP2P1P/RNBQKB1R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White plays 8.g3 to block the checkmate threat.",
            "whyThisMove": "Guards f2 and hits queen.",
            "isBookMove": true
          },
          {
            "id": "st-fork-14",
            "san": "Nxg3",
            "from": "e4",
            "to": "g3",
            "fen": "r1b1kb1r/ppp2ppp/2p5/4P3/3P3q/6n1/PPP2P1P/RNBQKB1R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "BOOM! 8...Nxg3!! Black sacrifices the knight, destroying White's kingside pawn barrier!",
            "whyThisMove": "Sacrifices knight to shatter White's kingside.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "Knight (3 points)",
              "compensation": "Forced royal fork winning White's h1 rook."
            }
          },
          {
            "id": "st-fork-15",
            "san": "fxg3",
            "from": "f2",
            "to": "g3",
            "fen": "r1b1kb1r/ppp2ppp/2p5/4P3/3P3q/6P1/PPP4P/RNBQKB1R b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White recaptures the knight.",
            "whyThisMove": "Takes the piece.",
            "isBookMove": true
          },
          {
            "id": "st-fork-16",
            "san": "Qe4+",
            "from": "h4",
            "to": "e4",
            "fen": "r1b1kb1r/ppp2ppp/2p5/4P3/3Pq3/6P1/PPP4P/RNBQKB1R w KQkq - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "9...Qe4+!! ROYAL FORK! Black forks White's king and the undefended h1 rook, winning decisive material!",
            "whyThisMove": "Simultaneous check on e1 and attack on h1 rook.",
            "isBookMove": true,
            "arrows": [
              [
                "e4",
                "e1",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "e4",
                "h1",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 9. DANISH GAMBIT
  // ==========================================
  {
    id: 'danish-gambit',
    slug: 'danish-gambit',
    name: "Danish Gambit",
    eco: 'C21',
    category: 'gambit',
    side: 'white',
    difficulty: 'advanced',
    summary: 'The most ferocious double-pawn sacrifice in chess. White trades two pawns for twin razor-sharp bishops slicing at Black\'s king.',
    philosophy: 'White sacrifices both the c- and b-pawns to post bishops on c4 and b2 pointing directly at f7 and g7. Black\'s king is subjected to blistering crossfire from the very opening.',
    keyThemes: [
      'Sacrifice of two central pawns for supreme diagonal dominance',
      'The "twin laser bishops" on c4 and b2',
      'Devastating attacks against an uncastled or early-castled king',
      'Tactical traps on f7 and g7'
    ],
    pawnStructureInfo: 'White strips away pawns to clear open diagonals. If Black holds the material stubbornly, White gets open c- and d-files for rooks and mating nets.',
    famousGame: {
      white: 'Alexander Alekhine',
      black: 'Amateur',
      year: 1913,
      event: 'Simul Exhibition',
      result: '1-0',
      description: 'Future World Champion Alekhine demonstrated the sheer terrifying power of the Danish bishops, concluding with a queen sacrifice and checkmate in under 15 moves.',
      keyMomentFen: 'r1bqk2r/pppp1ppp/2n5/4P3/1bB5/5N2/PB3PPP/RN1Q1RK1 b kq - 2 9'
    },
    variations: [
      {
        "id": "danish-double-pawn-attack",
        "openingId": "danish-gambit",
        "name": "Double Pawn Attack & Monster Bishops (7.Qb3!)",
        "eco": "C21",
        "description": "White sacrifices TWO pawns on c3 and b2 to place twin bishops aiming straight at g7 and f7, followed by Qb3 pressure.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "dan-atk-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-3",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Center Game! White challenges Black's e5 pawn instantly.",
            "whyThisMove": "Blasts open the center.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-4",
            "san": "exd4",
            "from": "e5",
            "to": "d4",
            "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black captures on d4.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-5",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "The Danish Gambit! White offers the c-pawn.",
            "whyThisMove": "Sacrifices pawn for development.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "c-pawn (1 point)",
              "compensation": "Rapid central mobilization."
            }
          },
          {
            "id": "dan-atk-6",
            "san": "dxc3",
            "from": "d4",
            "to": "c3",
            "fen": "rnbqkbnr/pppp1ppp/8/8/4P3/2p5/PP3PPP/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black accepts the first gambit pawn.",
            "whyThisMove": "Captures on c3.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-7",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/2p5/PP3PPP/RNBQK1NR b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White develops the bishop to c4, offering a SECOND pawn on b2!",
            "whyThisMove": "Prepares lethal twin bishop battery.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "b-pawn (1 point)",
              "compensation": "Twin raking bishops on c4 and b2."
            }
          },
          {
            "id": "dan-atk-8",
            "san": "cxb2",
            "from": "c3",
            "to": "b2",
            "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/8/Pp3PPP/RNBQK1NR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black captures the second pawn on b2.",
            "whyThisMove": "Two pawns up.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-9",
            "san": "Bxb2",
            "from": "c1",
            "to": "b2",
            "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "THE TWIN DANISH BISHOPS! White's bishops slice across the board toward f7 and g7!",
            "whyThisMove": "Bishops dominate the open diagonals.",
            "isBookMove": true,
            "arrows": [
              [
                "b2",
                "g7",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "dan-atk-10",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "rnbqkbnr/ppp2ppp/3p4/8/2B1P3/8/PB3PPP/RN1QK1NR w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black blunts the b2 bishop and frees the c8 bishop.",
            "whyThisMove": "Pawn barrier.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-11",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/ppp2ppp/3p4/8/2B1P3/5N2/PB3PPP/RN1QK2R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White develops the knight toward the center.",
            "whyThisMove": "Prepares castling and controls e5.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-12",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/2B1P3/5N2/PB3PPP/RN1QK2R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops knight and counter-attacks e4.",
            "whyThisMove": "Prepares castling.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-13",
            "san": "Qb3",
            "from": "d1",
            "to": "b3",
            "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/2B1P3/1Q3N2/PB3PPP/RN2K2R b KQkq - 3 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White forms a lethal battery on f7! Black must defend immediately.",
            "whyThisMove": "Attacks f7 and b7.",
            "isBookMove": true,
            "arrows": [
              [
                "b3",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "dan-atk-14",
            "san": "Qe7",
            "from": "d8",
            "to": "e7",
            "fen": "rnb1kb1r/ppp1qppp/3p1n2/8/2B1P3/1Q3N2/PB3PPP/RN2K2R w KQkq - 4 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black guards f7 with the queen.",
            "whyThisMove": "Only active defense for f7.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-15",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rnb1kb1r/ppp1qppp/3p1n2/8/2B1P3/1Q3N2/PB3PPP/RN3RK1 b kq - 5 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White castles. The e1 rook will now join the assault on the uncastled black king!",
            "whyThisMove": "King safety and rook activation down e-file.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-16",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1b1kb1r/ppp1qppp/2np1n2/8/2B1P3/1Q3N2/PB3PPP/RN3RK1 w kq - 6 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black develops knight.",
            "whyThisMove": "Piece development.",
            "isBookMove": true
          },
          {
            "id": "dan-atk-17",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "r1b1kb1r/ppp1qppp/2np1n2/8/2B1P3/1QN2N2/PB3PPP/R4RK1 b kq - 7 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White brings the final minor piece into play. White has full compensation and an overwhelming attack!",
            "whyThisMove": "Total piece mobilization.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "danish-schlechter-defense",
        "openingId": "danish-gambit",
        "name": "Schlechter Defense Refutation & Queen Liquidator (5...d5!)",
        "eco": "C21",
        "description": "Carl Schlechter's masterclass refutation. Black returns the pawn with 5...d5! to strip White's bishops of attacking power and equalize.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "dan-schlech-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center defense.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-3",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Center Game.",
            "whyThisMove": "Challenges e5.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-4",
            "san": "exd4",
            "from": "e5",
            "to": "d4",
            "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black captures.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-5",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Danish Gambit.",
            "whyThisMove": "Offers pawn.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-6",
            "san": "dxc3",
            "from": "d4",
            "to": "c3",
            "fen": "rnbqkbnr/pppp1ppp/8/8/4P3/2p5/PP3PPP/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black accepts.",
            "whyThisMove": "Takes c3.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-7",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/2p5/PP3PPP/RNBQK1NR b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White offers b2.",
            "whyThisMove": "Prepares bishops.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-8",
            "san": "cxb2",
            "from": "c3",
            "to": "b2",
            "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/8/Pp3PPP/RNBQK1NR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black accepts.",
            "whyThisMove": "Takes b2.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-9",
            "san": "Bxb2",
            "from": "c1",
            "to": "b2",
            "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White's bishops rake the board.",
            "whyThisMove": "Double bishop battery.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-10",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PB3PPP/RN1QK1NR w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "THE SCHLECHTER DEFENSE! 5...d5! Black returns a pawn to open the center and blunt White's bishops!",
            "whyThisMove": "Neutralizes White's initiative by returning material.",
            "isBookMove": true,
            "arrows": [
              [
                "d7",
                "d5",
                "rgba(34, 197, 94, 0.9)"
              ]
            ]
          },
          {
            "id": "dan-schlech-11",
            "san": "Bxd5",
            "from": "c4",
            "to": "d5",
            "fen": "rnbqkbnr/ppp2ppp/8/3B4/4P3/8/PB3PPP/RN1QK1NR b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White captures on d5.",
            "whyThisMove": "Recaptures pawn.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-12",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/ppp2ppp/5n2/3B4/4P3/8/PB3PPP/RN1QK1NR w KQkq - 1 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops the knight, attacking the d5 bishop.",
            "whyThisMove": "Attacks White's bishop.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-13",
            "san": "Bxf7+",
            "from": "d5",
            "to": "f7",
            "fen": "rnbqkb1r/ppp2Bpp/5n2/8/4P3/8/PB3PPP/RN1QK1NR b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White sacrifices the bishop to drag Black's king into the center and win Black's queen!",
            "whyThisMove": "Tries to win the queen via discovery.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "Bishop (3 points)",
              "compensation": "Winning Black's queen on d8."
            }
          },
          {
            "id": "dan-schlech-14",
            "san": "Kxf7",
            "from": "e8",
            "to": "f7",
            "fen": "rnbq1b1r/ppp2kpp/5n2/8/4P3/8/PB3PPP/RN1QK1NR w KQ - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black's king captures the bishop.",
            "whyThisMove": "Forced capture.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-15",
            "san": "Qxd8",
            "from": "d1",
            "to": "d8",
            "fen": "rnbQ1b1r/ppp2kpp/5n2/8/4P3/8/PB3PPP/RN2K1NR b KQ - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White captures Black's queen!",
            "whyThisMove": "Takes the queen.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-16",
            "san": "Bb4+",
            "from": "f8",
            "to": "b4",
            "fen": "rnbQ3r/ppp2kpp/5n2/8/1b2P3/8/PB3PPP/RN2K1NR w KQ - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "BOOM! 8...Bb4+!! The sting in the tail! Discovered attack on White's queen!",
            "whyThisMove": "Discovered check winning White's queen right back.",
            "isBookMove": true,
            "arrows": [
              [
                "b4",
                "e1",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "dan-schlech-17",
            "san": "Qd2",
            "from": "d8",
            "to": "d2",
            "fen": "rnb4r/ppp2kpp/5n2/8/1b2P3/8/PB1Q1PPP/RN2K1NR b KQ - 2 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White must block with the queen.",
            "whyThisMove": "Only legal interposition.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-18",
            "san": "Bxd2+",
            "from": "b4",
            "to": "d2",
            "fen": "rnb4r/ppp2kpp/5n2/8/4P3/8/PB1b1PPP/RN2K1NR w KQ - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black trades off the queens.",
            "whyThisMove": "Wins the queen.",
            "isBookMove": true
          },
          {
            "id": "dan-schlech-19",
            "san": "Nxd2",
            "from": "b1",
            "to": "d2",
            "fen": "rnb4r/ppp2kpp/5n2/8/4P3/8/PB1N1PPP/R3K1NR b KQ - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White recaptures. Black is a pawn up in a completely comfortable endgame!",
            "whyThisMove": "Endgame begins with Black slightly better.",
            "isBookMove": true
          }
        ]
      }
    ]
  },

  // ==========================================
  // 10. CARO-KANN DEFENSE
  // ==========================================
  {
    id: 'caro-kann-defense',
    slug: 'caro-kann-defense',
    name: 'Counterattack with the Caro-Kann',
    eco: 'B18',
    category: 'defense',
    side: 'black',
    difficulty: 'beginner',
    summary: 'The impenetrable counterattacking rock. Solidify your center with 1...c6 and strike back against White\'s pawn advances.',
    philosophy: 'Unlike the French Defense (1...e6) which traps the c8 bishop behind e6, the Caro-Kann prepares ...d5 with 1...c6, allowing Black\'s light-squared bishop to freely develop to f5 or g4 before playing ...e6. It leads to rock-solid endgame advantages.',
    keyThemes: [
      'Active development of the c8 bishop before playing ...e6',
      'Solid pawn structure with no weaknesses',
      'Endgame advantage due to clean pawn islands',
      'Testing White\'s aggressive overextensions'
    ],
    pawnStructureInfo: 'Black has an extremely healthy pawn structure. While White often gains space with h4-h5, Black\'s position has zero structural holes.',
    famousGame: {
      white: 'Garry Kasparov',
      black: 'Anatoly Karpov',
      year: 1987,
      event: 'Seville World Championship',
      result: '0-1',
      description: 'Karpov showed why the Caro-Kann was his lifetime fortress, completely absorbing Kasparov\'s energetic attacks to grind out a historic victory.',
      keyMomentFen: 'r2q1rk1/pp1nbppp/2p1pn2/8/3P4/3B1NN1/PPP2PPP/R1BQR1K1 w - - 0 11'
    },
    variations: [
      {
        "id": "caro-kann-advance-shirov",
        "openingId": "caro-kann-defense",
        "name": "Advance Variation - Shirov Attack (4.h4 & 5.c4 Firestorm)",
        "eco": "B12",
        "description": "The modern attacking standard against the Caro-Kann! White plays 3.e5 Bf5 4.h4!, threatening to trap the bishop with g4 and h5, followed by the 5.c4 central explosion.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "ck-shirov-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-2",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "The Caro-Kann Defense! Prepares an unshakeable d5 anchor.",
            "whyThisMove": "Prepares ...d5.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-3",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White takes full pawn center.",
            "whyThisMove": "Center control.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-4",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black strikes at e4.",
            "whyThisMove": "Central challenge.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-5",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "THE ADVANCE VARIATION! White locks the center and gains space.",
            "whyThisMove": "Denies f6 to Black's knight.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-6",
            "san": "Bf5",
            "from": "c8",
            "to": "f5",
            "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black frees the light-squared bishop before playing ...e6.",
            "whyThisMove": "Active bishop development.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-7",
            "san": "h4",
            "from": "h2",
            "to": "h4",
            "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P3P/8/PPP2PP1/RNBQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "4.h4!! THE SHIROV ATTACK! White threatens 5.g4 and 6.h5 to trap Black's bishop!",
            "whyThisMove": "Threatens to win the light-squared bishop.",
            "isBookMove": true,
            "arrows": [
              [
                "h4",
                "h5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "ck-shirov-8",
            "san": "h5",
            "from": "h7",
            "to": "h5",
            "fen": "rn1qkbnr/pp2ppp1/2p5/3pPb1p/3P3P/8/PPP2PP1/RNBQKBNR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black must play 4...h5 to prevent g4 and h5 trapping the bishop.",
            "whyThisMove": "Creates air for bishop.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-9",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rn1qkbnr/pp2ppp1/2p5/3pPb1p/2PP3P/8/PP3PP1/RNBQKBNR b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White strikes at Black's d5 bastion with 5.c4!",
            "whyThisMove": "Undermines Black's central base.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ck-shirov-10",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rn1qkbnr/pp3pp1/2p1p3/3pPb1p/2PP3P/8/PP3PP1/RNBQKBNR w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black solidifies the center.",
            "whyThisMove": "Builds pawn chain.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-11",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rn1qkbnr/pp3pp1/2p1p3/3pPb1p/2PP3P/2N5/PP3PP1/R1BQKBNR b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White adds pressure to d5.",
            "whyThisMove": "Pressure on d5.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-12",
            "san": "Ne7",
            "from": "g8",
            "to": "e7",
            "fen": "rn1qkb1r/pp2npp1/2p1p3/3pPb1p/2PP3P/2N5/PP3PP1/R1BQKBNR w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops knight to e7, heading for f5.",
            "whyThisMove": "Knight heading for f5.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-13",
            "san": "Bg5",
            "from": "c1",
            "to": "g5",
            "fen": "rn1qkb1r/pp2npp1/2p1p3/3pPbBp/2PP3P/2N5/PP3PP1/R2QKBNR b KQkq - 3 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White pins Black's knight against the queen!",
            "whyThisMove": "Pins defender.",
            "isBookMove": true,
            "arrows": [
              [
                "g5",
                "d8",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ck-shirov-14",
            "san": "Qd7",
            "from": "d8",
            "to": "d7",
            "fen": "rn2kb1r/pp1qnpp1/2p1p3/3pPbBp/2PP3P/2N5/PP3PP1/R2QKBNR w KQkq - 4 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black's queen sidesteps the pin.",
            "whyThisMove": "Breaks pin.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-15",
            "san": "Nge2",
            "from": "g1",
            "to": "e2",
            "fen": "rn2kb1r/pp1qnpp1/2p1p3/3pPbBp/2PP3P/2N5/PP2NPP1/R2QKB1R b KQkq - 5 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White develops knight toward g3.",
            "whyThisMove": "Heading for g3.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-16",
            "san": "dxc4",
            "from": "d5",
            "to": "c4",
            "fen": "rn2kb1r/pp1qnpp1/2p1p3/4PbBp/2pP3P/2N5/PP2NPP1/R2QKB1R w KQkq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black captures the c4 pawn.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-17",
            "san": "Ng3",
            "from": "e2",
            "to": "g3",
            "fen": "rn2kb1r/pp1qnpp1/2p1p3/4PbBp/2pP3P/2N3N1/PP3PP1/R2QKB1R b KQkq - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White attacks the f5 bishop!",
            "whyThisMove": "Attacks bishop.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-18",
            "san": "Bg6",
            "from": "f5",
            "to": "g6",
            "fen": "rn2kb1r/pp1qnpp1/2p1p1b1/4P1Bp/2pP3P/2N3N1/PP3PP1/R2QKB1R w KQkq - 2 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Bishop drops back to g6.",
            "whyThisMove": "Safeguards bishop.",
            "isBookMove": true
          },
          {
            "id": "ck-shirov-19",
            "san": "Bxc4",
            "from": "f1",
            "to": "c4",
            "fen": "rn2kb1r/pp1qnpp1/2p1p1b1/4P1Bp/2BP3P/2N3N1/PP3PP1/R2QK2R b KQkq - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White recaptures with an active bishop. White has full central dominance and space!",
            "whyThisMove": "Dominant central control.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "caro-kann-classical-capablanca",
        "openingId": "caro-kann-defense",
        "name": "Classical Variation - Capablanca Mainline (4...Bf5 & 8...Bh7)",
        "eco": "B18",
        "description": "The rock-solid foundation of world champions Capablanca, Karpov, and Anand. Black solves the light-squared bishop problem and preserves complete positional solidity.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "ck-capa-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-2",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...c6.",
            "whyThisMove": "Caro-Kann defense.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-3",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "2.d4.",
            "whyThisMove": "Central space.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-4",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "2...d5.",
            "whyThisMove": "Central strike.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-5",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White defends e4.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-6",
            "san": "dxe4",
            "from": "d5",
            "to": "e4",
            "fen": "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black liquidates the center.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-7",
            "san": "Nxe4",
            "from": "c3",
            "to": "e4",
            "fen": "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White recaptures.",
            "whyThisMove": "Knight centralization.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-8",
            "san": "Bf5",
            "from": "c8",
            "to": "f5",
            "fen": "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "THE CLASSICAL MAINLINE! Black attacks the centralized knight before playing ...e6.",
            "whyThisMove": "Solves the 'bad bishop' problem outside the pawn chain.",
            "isBookMove": true,
            "arrows": [
              [
                "f5",
                "e4",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ck-capa-9",
            "san": "Ng3",
            "from": "e4",
            "to": "g3",
            "fen": "rn1qkbnr/pp2pppp/2p5/5b2/3P4/6N1/PPP2PPP/R1BQKBNR b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White hits the bishop with tempo.",
            "whyThisMove": "Gains tempo on bishop.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-10",
            "san": "Bg6",
            "from": "f5",
            "to": "g6",
            "fen": "rn1qkbnr/pp2pppp/2p3b1/8/3P4/6N1/PPP2PPP/R1BQKBNR w KQkq - 3 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Bishop drops back.",
            "whyThisMove": "Preserves bishop.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-11",
            "san": "h4",
            "from": "h2",
            "to": "h4",
            "fen": "rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White gains space on the kingside.",
            "whyThisMove": "Threatens h5.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-12",
            "san": "h6",
            "from": "h7",
            "to": "h6",
            "fen": "rn1qkbnr/pp2ppp1/2p3bp/8/3P3P/6N1/PPP2PP1/R1BQKBNR w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black provides an escape square on h7.",
            "whyThisMove": "Escape hatch.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-13",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rn1qkbnr/pp2ppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R b KQkq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White develops knight.",
            "whyThisMove": "Prepares kingside castle.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-14",
            "san": "Nd7",
            "from": "b8",
            "to": "d7",
            "fen": "r2qkbnr/pp1nppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R w KQkq - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black controls e5 to stop Ne5 jumps.",
            "whyThisMove": "Denies e5 outpost.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-15",
            "san": "h5",
            "from": "h4",
            "to": "h5",
            "fen": "r2qkbnr/pp1nppp1/2p3bp/7P/3P4/5NN1/PPP2PP1/R1BQKB1R b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White drives the bishop back to h7.",
            "whyThisMove": "Space grab.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-16",
            "san": "Bh7",
            "from": "g6",
            "to": "h7",
            "fen": "r2qkbnr/pp1npppb/2p4p/7P/3P4/5NN1/PPP2PP1/R1BQKB1R w KQkq - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "The bishop rests securely on h7.",
            "whyThisMove": "Safe diagonal.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-17",
            "san": "Bd3",
            "from": "f1",
            "to": "d3",
            "fen": "r2qkbnr/pp1npppb/2p4p/7P/3P4/3B1NN1/PPP2PP1/R1BQK2R b KQkq - 2 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White offers to trade bishops.",
            "whyThisMove": "Challenges light squares.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-18",
            "san": "Bxd3",
            "from": "h7",
            "to": "d3",
            "fen": "r2qkbnr/pp1nppp1/2p4p/7P/3P4/3b1NN1/PPP2PP1/R1BQK2R w KQkq - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black trades off White's active bishop.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-19",
            "san": "Qxd3",
            "from": "d1",
            "to": "d3",
            "fen": "r2qkbnr/pp1nppp1/2p4p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R b KQkq - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White recaptures with the queen.",
            "whyThisMove": "Queen centralization.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-20",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "r2qkbnr/pp1n1pp1/2p1p2p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R w KQkq - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black locks the pawn chain with total solidity.",
            "whyThisMove": "Fortifies center.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-21",
            "san": "Bd2",
            "from": "c1",
            "to": "d2",
            "fen": "r2qkbnr/pp1n1pp1/2p1p2p/7P/3P4/3Q1NN1/PPPB1PP1/R3K2R b KQkq - 1 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White prepares queenside castling.",
            "whyThisMove": "Connects rooks.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-22",
            "san": "Ngf6",
            "from": "g8",
            "to": "f6",
            "fen": "r2qkb1r/pp1n1pp1/2p1pn1p/7P/3P4/3Q1NN1/PPPB1PP1/R3K2R w KQkq - 2 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black develops kingside knight.",
            "whyThisMove": "Piece coordination.",
            "isBookMove": true
          },
          {
            "id": "ck-capa-23",
            "san": "O-O-O",
            "from": "e1",
            "to": "c1",
            "fen": "r2qkb1r/pp1n1pp1/2p1pn1p/7P/3P4/3Q1NN1/PPPB1PP1/2KR3R b kq - 3 12",
            "turn": "w",
            "ply": 23,
            "annotation": "White castles queenside. The classic master battle begins!",
            "whyThisMove": "King safety and rook on open d-file.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "caro-kann-fantasy-variation",
        "openingId": "caro-kann-defense",
        "name": "The Fantasy Variation - Tactical Trap (3.f3 & 9.Nxf7!)",
        "eco": "B12",
        "description": "The aggressive weapon favored by attacking grandmasters. White plays 3.f3 to conquer the center with pawns, leading to a crushing attack on f7 with 11.e5!.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "ck-fant-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-2",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Caro-Kann.",
            "whyThisMove": "Prepares d5.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-3",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Takes center.",
            "whyThisMove": "Pawn center.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-4",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Strikes e4.",
            "whyThisMove": "Central challenge.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-5",
            "san": "f3",
            "from": "f2",
            "to": "f3",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "THE FANTASY VARIATION! White supports e4 with the f-pawn to maintain two central pawns.",
            "whyThisMove": "Keeps a classical pawn center intact.",
            "isBookMove": true,
            "arrows": [
              [
                "f3",
                "e4",
                "rgba(34, 197, 94, 0.9)"
              ]
            ]
          },
          {
            "id": "ck-fant-6",
            "san": "dxe4",
            "from": "d5",
            "to": "e4",
            "fen": "rnbqkbnr/pp2pppp/2p5/8/3Pp3/5P2/PPP3PP/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black captures on e4.",
            "whyThisMove": "Accepts trade.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-7",
            "san": "fxe4",
            "from": "f3",
            "to": "e4",
            "fen": "rnbqkbnr/pp2pppp/2p5/8/3PP3/8/PPP3PP/RNBQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White recaptures with the f-pawn, keeping the duo on d4 and e4.",
            "whyThisMove": "Central dominance.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-8",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pp3ppp/2p5/4p3/3PP3/8/PPP3PP/RNBQKBNR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black counter-strikes at d4!",
            "whyThisMove": "Challenges White's center.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pp3ppp/2p5/4p3/3PP3/5N2/PPP3PP/RNBQKB1R b KQkq - 1 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White develops knight and defends d4.",
            "whyThisMove": "Develops with defense.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-10",
            "san": "exd4",
            "from": "e5",
            "to": "d4",
            "fen": "rnbqkbnr/pp3ppp/2p5/8/3pP3/5N2/PPP3PP/RNBQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black captures the pawn.",
            "whyThisMove": "Liquidation.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-11",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "rnbqkbnr/pp3ppp/2p5/8/2BpP3/5N2/PPP3PP/RNBQK2R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White develops the bishop with venom toward the f7 square!",
            "whyThisMove": "Aims straight at f7.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "ck-fant-12",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pp3ppp/2p2n2/8/2BpP3/5N2/PPP3PP/RNBQK2R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-13",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rnbqkb1r/pp3ppp/2p2n2/8/2BpP3/5N2/PPP3PP/RNBQ1RK1 b kq - 3 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White castles, bringing the rook to the semi-open f-file!",
            "whyThisMove": "Activates f1 rook.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-14",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "rnbqk2r/pp2bppp/2p2n2/8/2BpP3/5N2/PPP3PP/RNBQ1RK1 w kq - 4 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black prepares castling.",
            "whyThisMove": "King safety attempt.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-15",
            "san": "Ng5",
            "from": "f3",
            "to": "g5",
            "fen": "rnbqk2r/pp2bppp/2p2n2/6N1/2BpP3/8/PPP3PP/RNBQ1RK1 b kq - 5 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White leaps forward with 8.Ng5, teaming up with the bishop against f7!",
            "whyThisMove": "Dual threat on f7.",
            "isBookMove": true,
            "arrows": [
              [
                "g5",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "ck-fant-16",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnbq1rk1/pp2bppp/2p2n2/6N1/2BpP3/8/PPP3PP/RNBQ1RK1 w - - 6 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black castles to defend f7.",
            "whyThisMove": "Castles under fire.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-17",
            "san": "Nxf7",
            "from": "g5",
            "to": "f7",
            "fen": "rnbq1rk1/pp2bNpp/2p2n2/8/2BpP3/8/PPP3PP/RNBQ1RK1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "BOOM! 9.Nxf7!! White forks Black's queen and rook!",
            "whyThisMove": "Royal fork on f7.",
            "isBookMove": true,
            "arrows": [
              [
                "f7",
                "d8",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "f7",
                "f8",
                "rgba(239, 68, 68, 0.9)"
              ]
            ],
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "Knight for Rook exchange",
              "compensation": "Decisive material and kingside destruction."
            }
          },
          {
            "id": "ck-fant-18",
            "san": "Rxf7",
            "from": "f8",
            "to": "f7",
            "fen": "rnbq2k1/pp2brpp/2p2n2/8/2BpP3/8/PPP3PP/RNBQ1RK1 w - - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black is forced to give up the rook.",
            "whyThisMove": "Forced capture.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-19",
            "san": "Bxf7+",
            "from": "c4",
            "to": "f7",
            "fen": "rnbq2k1/pp2bBpp/2p2n2/8/3pP3/8/PPP3PP/RNBQ1RK1 b - - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White captures with check!",
            "whyThisMove": "Wins the exchange with check.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-20",
            "san": "Kxf7",
            "from": "g8",
            "to": "f7",
            "fen": "rnbq4/pp2bkpp/2p2n2/8/3pP3/8/PPP3PP/RNBQ1RK1 w - - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black king recaptures.",
            "whyThisMove": "King capture.",
            "isBookMove": true
          },
          {
            "id": "ck-fant-21",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "rnbq4/pp2bkpp/2p2n2/4P3/3p4/8/PPP3PP/RNBQ1RK1 b - - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "11.e5!! White pins and wins the f6 knight! White has completely shattered Black's camp and won decisive material!",
            "whyThisMove": "Pins and wins the knight.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "f6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 11. VIENNA GAMBIT
  // ==========================================
  {
    id: 'vienna-gambit',
    slug: 'vienna-gambit',
    name: 'Vienna Gambit',
    eco: 'C29',
    category: 'gambit',
    side: 'white',
    difficulty: 'intermediate',
    summary: 'The refined King\'s Gambit. White plays 2.Nc3 first to control the d5 square, making the f4 pawn push vastly more dangerous.',
    philosophy: 'In the King\'s Gambit, Black can often counter-punch with an immediate ...d5. The Vienna Game delays f4 until move 3, using 2.Nc3 to lock down d5. When White then unleashes 3.f4!, Black faces extreme central pressure.',
    keyThemes: [
      'Delayed pawn sacrifice with superior piece control',
      'Denying Black free central counterplay with ...d5',
      'The powerful queen lift to f3 putting heat on the e-file',
      'Open f-file attacking lines against Black\'s king'
    ],
    pawnStructureInfo: 'White establishes an advanced e5 pawn wedge that restricts Black\'s knight and suffocates kingside maneuvering.',
    famousGame: {
      white: 'Rudolf Spielmann',
      black: 'Savielly Tartakower',
      year: 1910,
      event: 'Vienna',
      result: '1-0',
      description: 'The "Last Knight of the King\'s Gambit" Spielmann demonstrated why the Vienna Gambit is lethal, ripping open the kingside in 18 moves.',
      keyMomentFen: 'rnbqkb1r/ppp3pp/8/3pPp2/8/2PP1Q2/P1P3PP/R1B1KBNR b KQkq - 0 7'
    },
    variations: [
      {
        "id": "vienna-steinitz-mainline",
        "openingId": "vienna-gambit",
        "name": "Steinitz Counter-Attack Mainline (8.Qg3!)",
        "eco": "C29",
        "description": "The sharpest clash in the Vienna. Black strikes back with 3...d5!, but White maintains an attacking edge with the cunning 8.Qg3! queen maneuver.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "vi-main-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "vi-main-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "vi-main-3",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "The Vienna Game! White controls d5 and keeps options open.",
            "whyThisMove": "Flexible knight development.",
            "isBookMove": true
          },
          {
            "id": "vi-main-4",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black develops the kingside knight.",
            "whyThisMove": "Controls d5 and e4.",
            "isBookMove": true
          },
          {
            "id": "vi-main-5",
            "san": "f4",
            "from": "f2",
            "to": "f4",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "THE VIENNA GAMBIT! White strikes at Black's center on move 3.",
            "whyThisMove": "Undermines e5 while keeping knight on c3.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "f-pawn (1 point)",
              "compensation": "Open f-file and central control."
            }
          },
          {
            "id": "vi-main-6",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "The critical counter-strike! 3...d5! Black strikes right back in the center.",
            "whyThisMove": "Challenges White's center directly.",
            "isBookMove": true,
            "arrows": [
              [
                "d7",
                "d5",
                "rgba(34, 197, 94, 0.9)"
              ]
            ]
          },
          {
            "id": "vi-main-7",
            "san": "fxe5",
            "from": "f4",
            "to": "e5",
            "fen": "rnbqkb1r/ppp2ppp/5n2/3pP3/4P3/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White takes on e5, attacking Black's knight on f6.",
            "whyThisMove": "Pawn capture with attack.",
            "isBookMove": true
          },
          {
            "id": "vi-main-8",
            "san": "Nxe4",
            "from": "f6",
            "to": "e4",
            "fen": "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black's knight hops into e4 with tempo.",
            "whyThisMove": "Occupies central outpost.",
            "isBookMove": true
          },
          {
            "id": "vi-main-9",
            "san": "Qf3",
            "from": "d1",
            "to": "f3",
            "fen": "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N2Q2/PPPP2PP/R1B1KBNR b KQkq - 1 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White attacks the knight and prepares queenside castling.",
            "whyThisMove": "Hits the e4 knight.",
            "isBookMove": true
          },
          {
            "id": "vi-main-10",
            "san": "f5",
            "from": "f7",
            "to": "f5",
            "fen": "rnbqkb1r/ppp3pp/8/3pPp2/4n3/2N2Q2/PPPP2PP/R1B1KBNR w KQkq f6 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black stubbornly reinforces the e4 knight with the f-pawn.",
            "whyThisMove": "Guards the knight outpost.",
            "isBookMove": true
          },
          {
            "id": "vi-main-11",
            "san": "d3",
            "from": "d2",
            "to": "d3",
            "fen": "rnbqkb1r/ppp3pp/8/3pPp2/4n3/2NP1Q2/PPP3PP/R1B1KBNR b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White forces the knight to declare its intentions.",
            "whyThisMove": "Kicks the knight.",
            "isBookMove": true
          },
          {
            "id": "vi-main-12",
            "san": "Nxc3",
            "from": "e4",
            "to": "c3",
            "fen": "rnbqkb1r/ppp3pp/8/3pPp2/8/2nP1Q2/PPP3PP/R1B1KBNR w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black trades knights.",
            "whyThisMove": "Captures piece.",
            "isBookMove": true
          },
          {
            "id": "vi-main-13",
            "san": "bxc3",
            "from": "b2",
            "to": "c3",
            "fen": "rnbqkb1r/ppp3pp/8/3pPp2/8/2PP1Q2/P1P3PP/R1B1KBNR b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White recaptures toward the center.",
            "whyThisMove": "Prepares d4.",
            "isBookMove": true
          },
          {
            "id": "vi-main-14",
            "san": "d4",
            "from": "d5",
            "to": "d4",
            "fen": "rnbqkb1r/ppp3pp/8/4Pp2/3p4/2PP1Q2/P1P3PP/R1B1KBNR w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black attacks White's pawn structure.",
            "whyThisMove": "Challenges c3.",
            "isBookMove": true
          },
          {
            "id": "vi-main-15",
            "san": "Qg3",
            "from": "f3",
            "to": "g3",
            "fen": "rnbqkb1r/ppp3pp/8/4Pp2/3p4/2PP2Q1/P1P3PP/R1B1KBNR b KQkq - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "8.Qg3!! White ignores the d4 pawn, pivoting the queen to pressure g7 and Black's king!",
            "whyThisMove": "Pivots queen to kingside attack.",
            "isBookMove": true,
            "arrows": [
              [
                "g3",
                "g7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "vi-main-16",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkb1r/ppp3pp/2n5/4Pp2/3p4/2PP2Q1/P1P3PP/R1B1KBNR w KQkq - 2 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e5 and d4.",
            "isBookMove": true
          },
          {
            "id": "vi-main-17",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "r1bqkb1r/ppp3pp/2n5/4Pp2/3p4/2PP1NQ1/P1P3PP/R1B1KB1R b KQkq - 3 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White develops knight with control over e5.",
            "whyThisMove": "Piece coordination.",
            "isBookMove": true
          },
          {
            "id": "vi-main-18",
            "san": "Be6",
            "from": "c8",
            "to": "e6",
            "fen": "r2qkb1r/ppp3pp/2n1b3/4Pp2/3p4/2PP1NQ1/P1P3PP/R1B1KB1R w KQkq - 4 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Reinforces d5/d4.",
            "isBookMove": true
          },
          {
            "id": "vi-main-19",
            "san": "Be2",
            "from": "f1",
            "to": "e2",
            "fen": "r2qkb1r/ppp3pp/2n1b3/4Pp2/3p4/2PP1NQ1/P1P1B1PP/R1B1K2R b KQkq - 5 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White prepares kingside castling.",
            "whyThisMove": "Clears way for king.",
            "isBookMove": true
          },
          {
            "id": "vi-main-20",
            "san": "Qd7",
            "from": "d8",
            "to": "d7",
            "fen": "r3kb1r/pppq2pp/2n1b3/4Pp2/3p4/2PP1NQ1/P1P1B1PP/R1B1K2R w KQkq - 6 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black prepares queenside castling.",
            "whyThisMove": "Connects rooks.",
            "isBookMove": true
          },
          {
            "id": "vi-main-21",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r3kb1r/pppq2pp/2n1b3/4Pp2/3p4/2PP1NQ1/P1P1B1PP/R1B2RK1 b kq - 7 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White castles into safety. White controls the open f-file and holds a dangerous kingside initiative!",
            "whyThisMove": "Brings rook to the open f-file.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "vienna-accepted-steinitz",
        "openingId": "vienna-gambit",
        "name": "Vienna Accepted - Steinitz Knight Crush (4.e5!)",
        "eco": "C29",
        "description": "When Black takes the gambit pawn with 3...exf4, White punishes Black with 4.e5! forcing Black's knight all the way back to g8, seizing total dominance.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "vi-acc-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-3",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Vienna Game.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-4",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-5",
            "san": "f4",
            "from": "f2",
            "to": "f4",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "The Vienna Gambit!",
            "whyThisMove": "Strikes at e5.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "f-pawn (1 point)",
              "compensation": "Central dominance."
            }
          },
          {
            "id": "vi-acc-6",
            "san": "exf4",
            "from": "e5",
            "to": "f4",
            "fen": "rnbqkb1r/pppp1ppp/5n2/8/4Pp2/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black accepts the gambit pawn.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-7",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4P3/5p2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "4.e5! White kicks the knight away from the center!",
            "whyThisMove": "Pushes Black's key defender backward.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "f6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "vi-acc-8",
            "san": "Qe7",
            "from": "d8",
            "to": "e7",
            "fen": "rnb1kb1r/ppppqppp/5n2/4P3/5p2/2N5/PPPP2PP/R1BQKBNR w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black pins the pawn to White's king.",
            "whyThisMove": "Pins e5 pawn.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-9",
            "san": "Qe2",
            "from": "d1",
            "to": "e2",
            "fen": "rnb1kb1r/ppppqppp/5n2/4P3/5p2/2N5/PPPPQ1PP/R1B1KBNR b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White unpins the pawn immediately!",
            "whyThisMove": "Breaks pin.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-10",
            "san": "Ng8",
            "from": "f6",
            "to": "g8",
            "fen": "rnb1kbnr/ppppqppp/8/4P3/5p2/2N5/PPPPQ1PP/R1B1KBNR w KQkq - 3 6",
            "turn": "b",
            "ply": 10,
            "annotation": "HUMILIATION! Black's knight is forced to crawl all the way back to its starting square on g8!",
            "whyThisMove": "Only retreat square for the knight.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-11",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnb1kbnr/ppppqppp/8/4P3/5p2/2N2N2/PPPPQ1PP/R1B1KB1R b KQkq - 4 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White develops with tempo.",
            "whyThisMove": "Kingside mobilization.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-12",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "rnb1kbnr/ppp1qppp/3p4/4P3/5p2/2N2N2/PPPPQ1PP/R1B1KB1R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black tries to break White's central bind.",
            "whyThisMove": "Challenging e5.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-13",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnb1kbnr/ppp1qppp/3p4/4P3/3P1p2/2N2N2/PPP1Q1PP/R1B1KB1R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White erects an immovable pawn center!",
            "whyThisMove": "Total central dominance.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-14",
            "san": "dxe5",
            "from": "d6",
            "to": "e5",
            "fen": "rnb1kbnr/ppp1qppp/8/4p3/3P1p2/2N2N2/PPP1Q1PP/R1B1KB1R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black captures on e5.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-15",
            "san": "dxe5",
            "from": "d4",
            "to": "e5",
            "fen": "rnb1kbnr/ppp1qppp/8/4P3/5p2/2N2N2/PPP1Q1PP/R1B1KB1R b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White recaptures with the d-pawn.",
            "whyThisMove": "Maintains central control.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-16",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnb1kbnr/pp2qppp/2p5/4P3/5p2/2N2N2/PPP1Q1PP/R1B1KB1R w KQkq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black attempts to control d5.",
            "whyThisMove": "Restricts Nc3.",
            "isBookMove": true
          },
          {
            "id": "vi-acc-17",
            "san": "Bxf4",
            "from": "c1",
            "to": "f4",
            "fen": "rnb1kbnr/pp2qppp/2p5/4P3/5B2/2N2N2/PPP1Q1PP/R3KB1R b KQkq - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White recaptures the f4 gambit pawn with an active bishop. White has an overwhelming development lead and total control!",
            "whyThisMove": "Regains pawn with dominant piece activity.",
            "isBookMove": true
          }
        ]
      }
    ]
  },

  // ==========================================
  // 12. BUDAPEST GAMBIT
  // ==========================================
  {
    id: 'budapest-gambit',
    slug: 'budapest-gambit',
    name: 'Budapest Gambit',
    eco: 'A52',
    category: 'gambit',
    side: 'black',
    difficulty: 'intermediate',
    summary: 'The dynamic counter-gambit against 1.d4. Black sacrifices the e-pawn on move 2 to provoke weaknesses and unleash smothered mates.',
    philosophy: 'Players who open 1.d4 often expect quiet positional grinds. The Budapest Gambit instantly turns the tables by shocking White with 2...e5!, immediately putting White on the defensive to protect the advanced e5 pawn.',
    keyThemes: [
      'Ganging up on the e5 pawn with ...Ng4, ...Nc6, and ...Qe7',
      'The check on b4 (...Bb4+) disrupting White\'s coordination',
      'Famous smothered checkmate traps with ...Nd3#',
      'Active minor piece play instead of passive defense'
    ],
    pawnStructureInfo: 'Black gives up the e-pawn to dismantle White\'s d4 center. Black usually wins the pawn back or captures on e5 with superior piece activity.',
    famousGame: {
      white: 'Milan Vidmar',
      black: 'Akiba Rubinstein',
      year: 1918,
      event: 'Berlin',
      result: '0-1',
      description: 'Endgame genius Akiba Rubinstein showed the tournament teeth of the Budapest, winning masterfully in 24 moves.',
      keyMomentFen: 'r1b1k2r/ppppqppp/2n5/4n3/1bP2B2/P4N2/1P1NPPPP/R2QKB1R w KQkq - 0 8'
    },
    variations: [
      {
        "id": "budapest-smothered-mate",
        "openingId": "budapest-gambit",
        "name": "Adler Variation & Smothered Mate Trap (8...Nd3#)",
        "eco": "A52",
        "description": "Black lures White into grabbing the b4 bishop with 7.a3, only to deliver the historic 8...Nd3# smothered checkmate with the e2 pawn pinned!",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "bg-smoth-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4 Queen's pawn.",
            "whyThisMove": "Takes center.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-2",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Indian defense setup.",
            "whyThisMove": "Flexible response.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White claims more space.",
            "whyThisMove": "Space expansion.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-4",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "THE BUDAPEST GAMBIT! Black sacrifices the e-pawn on move 2 to dismantle White's center.",
            "whyThisMove": "Shocks White and breaks 1.d4 solidity.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "e-pawn (1 point)",
              "compensation": "Immediate counter-attack against White's advanced pawns."
            }
          },
          {
            "id": "bg-smoth-5",
            "san": "dxe5",
            "from": "d4",
            "to": "e5",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4P3/2P5/8/PP2PPPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White accepts the gambit pawn.",
            "whyThisMove": "Pawn up.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-6",
            "san": "Ng4",
            "from": "f6",
            "to": "g4",
            "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P3n1/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black immediately attacks the advanced e5 pawn.",
            "whyThisMove": "Hits e5.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-7",
            "san": "Bf4",
            "from": "c1",
            "to": "f4",
            "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P2Bn1/8/PP2PPPP/RN1QKBNR b KQkq - 2 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White defends the pawn with the bishop.",
            "whyThisMove": "Guards e5.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-8",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkb1r/pppp1ppp/2n5/4P3/2P2Bn1/8/PP2PPPP/RN1QKBNR w KQkq - 3 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black brings a second attacker to e5.",
            "whyThisMove": "Piles on e5.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "r1bqkb1r/pppp1ppp/2n5/4P3/2P2Bn1/5N2/PP2PPPP/RN1QKB1R b KQkq - 4 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White brings a second defender.",
            "whyThisMove": "Defends e5.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-10",
            "san": "Bb4+",
            "from": "f8",
            "to": "b4",
            "fen": "r1bqk2r/pppp1ppp/2n5/4P3/1bP2Bn1/5N2/PP2PPPP/RN1QKB1R w KQkq - 5 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Check! Black disrupts White's coordination.",
            "whyThisMove": "Forces an uncomfortable block on d2.",
            "isBookMove": true,
            "arrows": [
              [
                "b4",
                "e1",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "bg-smoth-11",
            "san": "Nbd2",
            "from": "b1",
            "to": "d2",
            "fen": "r1bqk2r/pppp1ppp/2n5/4P3/1bP2Bn1/5N2/PP1NPPPP/R2QKB1R b KQkq - 6 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White blocks with the knight, pinning it to the king.",
            "whyThisMove": "Avoids moving the king.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-12",
            "san": "Qe7",
            "from": "d8",
            "to": "e7",
            "fen": "r1b1k2r/ppppqppp/2n5/4P3/1bP2Bn1/5N2/PP1NPPPP/R2QKB1R w KQkq - 7 7",
            "turn": "b",
            "ply": 12,
            "annotation": "A third attacker on e5! Black is ready to reclaim the pawn.",
            "whyThisMove": "Triple pressure on e5.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-13",
            "san": "a3",
            "from": "a2",
            "to": "a3",
            "fen": "r1b1k2r/ppppqppp/2n5/4P3/1bP2Bn1/P4N2/1P1NPPPP/R2QKB1R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White plays 7.a3, expecting Black to retreat the bishop...",
            "whyThisMove": "Attacks b4 bishop.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-14",
            "san": "Ngxe5",
            "from": "g4",
            "to": "e5",
            "fen": "r1b1k2r/ppppqppp/2n5/4n3/1bP2B2/P4N2/1P1NPPPP/R2QKB1R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "BOOM! 7...Ngxe5!! Black leaves the b4 bishop completely hanging! The trap is set!",
            "whyThisMove": "Prepares legendary smothered mate.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "Bishop (3 points)",
              "compensation": "Forced smothered checkmate on the spot."
            }
          },
          {
            "id": "bg-smoth-15",
            "san": "axb4",
            "from": "a3",
            "to": "b4",
            "fen": "r1b1k2r/ppppqppp/2n5/4n3/1PP2B2/5N2/1P1NPPPP/R2QKB1R b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "BLUNDER OF THE CENTURY! White greedily captures the bishop!",
            "whyThisMove": "Takes the free piece.",
            "isBookMove": true
          },
          {
            "id": "bg-smoth-16",
            "san": "Nd3#",
            "from": "e5",
            "to": "d3",
            "fen": "r1b1k2r/ppppqppp/2n5/8/1PP2B2/3n1N2/1P1NPPPP/R2QKB1R w KQkq - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "SMOTHERED CHECKMATE! 8...Nd3#!! The knight jumps to d3, delivering smothered mate! The e2 pawn CANNOT take because it is pinned to the king by the queen on e7!",
            "whyThisMove": "Smothered checkmate exploiting the absolute pin on e2.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "d3",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "budapest-rubinstein-open",
        "openingId": "budapest-gambit",
        "name": "Rubinstein Variation - Open Tactical Clash (6...Bb4+)",
        "eco": "A52",
        "description": "Akiba Rubinstein's master formulation. Black reclaims the pawn, provokes f4, shatters White's queenside structure with ...Bxc3+, and castles into safety.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "bg-rubin-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-2",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...Nf6.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "2.c4.",
            "whyThisMove": "Space grab.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-4",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Budapest Gambit!",
            "whyThisMove": "Disrupts White's center.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "e-pawn (1 point)",
              "compensation": "Active piece play."
            }
          },
          {
            "id": "bg-rubin-5",
            "san": "dxe5",
            "from": "d4",
            "to": "e5",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4P3/2P5/8/PP2PPPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White takes.",
            "whyThisMove": "Pawn capture.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-6",
            "san": "Ng4",
            "from": "f6",
            "to": "g4",
            "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P3n1/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Attacks e5.",
            "whyThisMove": "Immediate pressure.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-7",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White pushes e4 to hold the center.",
            "whyThisMove": "Central space.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-8",
            "san": "Nxe5",
            "from": "g4",
            "to": "e5",
            "fen": "rnbqkb1r/pppp1ppp/8/4n3/2P1P3/8/PP3PPP/RNBQKBNR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black regains the pawn with an active central knight.",
            "whyThisMove": "Restores material parity.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-9",
            "san": "f4",
            "from": "f2",
            "to": "f4",
            "fen": "rnbqkb1r/pppp1ppp/8/4n3/2P1PP2/8/PP4PP/RNBQKBNR b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White tries to kick the knight with f4.",
            "whyThisMove": "Drives the knight away.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-10",
            "san": "Nec6",
            "from": "e5",
            "to": "c6",
            "fen": "rnbqkb1r/pppp1ppp/2n5/8/2P1PP2/8/PP4PP/RNBQKBNR w KQkq - 1 6",
            "turn": "b",
            "ply": 10,
            "annotation": "The knight retreats to c6, controlling key central dark squares.",
            "whyThisMove": "Anchors on c6.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-11",
            "san": "Be3",
            "from": "c1",
            "to": "e3",
            "fen": "rnbqkb1r/pppp1ppp/2n5/8/2P1PP2/4B3/PP4PP/RN1QKBNR b KQkq - 2 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White develops dark-squared bishop.",
            "whyThisMove": "Controls d4.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-12",
            "san": "Bb4+",
            "from": "f8",
            "to": "b4",
            "fen": "rnbqk2r/pppp1ppp/2n5/8/1bP1PP2/4B3/PP4PP/RN1QKBNR w KQkq - 3 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Check! Black pins White's knight to the king.",
            "whyThisMove": "Disrupts White's development.",
            "isBookMove": true,
            "arrows": [
              [
                "b4",
                "e1",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "bg-rubin-13",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqk2r/pppp1ppp/2n5/8/1bP1PP2/2N1B3/PP4PP/R2QKBNR b KQkq - 4 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White blocks with the knight.",
            "whyThisMove": "Interposes piece.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-14",
            "san": "Bxc3+",
            "from": "b4",
            "to": "c3",
            "fen": "rnbqk2r/pppp1ppp/2n5/8/2P1PP2/2b1B3/PP4PP/R2QKBNR w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black shatters White's queenside pawn structure!",
            "whyThisMove": "Inflicts doubled c-pawns on White.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-15",
            "san": "bxc3",
            "from": "b2",
            "to": "c3",
            "fen": "rnbqk2r/pppp1ppp/2n5/8/2P1PP2/2P1B3/P5PP/R2QKBNR b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White recaptures with doubled, isolated c-pawns.",
            "whyThisMove": "Compromised pawn structure.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-16",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "rnbqk2r/ppp2ppp/2np4/8/2P1PP2/2P1B3/P5PP/R2QKBNR w KQkq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black solidifies the pawn structure.",
            "whyThisMove": "Prepares piece development.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-17",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqk2r/ppp2ppp/2np4/8/2P1PP2/2P1BN2/P5PP/R2QKB1R b KQkq - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White develops kingside knight.",
            "whyThisMove": "Piece coordination.",
            "isBookMove": true
          },
          {
            "id": "bg-rubin-18",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnbq1rk1/ppp2ppp/2np4/8/2P1PP2/2P1BN2/P5PP/R2QKB1R w KQ - 2 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black castles into safety. Black has equalized and targets White's crippled pawns!",
            "whyThisMove": "King safety and endgame advantage.",
            "isBookMove": true
          }
        ]
      }
    ]
  }
,
  // ==========================================
  // SHUT DOWN THE QUEEN'S GAMBIT (SLAV DEFENSE)
  // ==========================================
  {
  "id": "slav-defense",
  "slug": "slav-defense",
  "name": "Shut Down the Queen's Gambit (Slav Defense)",
  "eco": "D11",
  "category": "classical",
  "side": "black",
  "difficulty": "intermediate",
  "summary": "Neutralize 1.d4 and shut down the Queen's Gambit without locking your light-squared bishop behind the pawn chain.",
  "philosophy": "The Slav Defense (1.d4 d5 2.c4 c6) solves Black's classic dilemma in the Queen's Gambit: developing the c8 bishop. By supporting d5 with the c-pawn rather than 2...e6, Black keeps the c8-h3 diagonal wide open, allowing the bishop to enter the game actively on f5 or g4 before locking the structure with ...e6.",
  "keyThemes": [
    "Solving the 'Bad Bishop' problem with early ...Bf5 or ...Bg4",
    "Unshakeable pawn bastion on d5 supported by c6",
    "Fluid piece coordination and kingside safety",
    "Queenside expansion with ...dxc4 followed by ...b5 counterplay"
  ],
  "pawnStructureInfo": "The Slav triangle (c6-d5-e6) is one of the most durable structures in chess theory, providing immense resistance against White's c4/d4 pressure.",
  "famousGame": {
    "white": "Garry Kasparov",
    "black": "Viswanathan Anand",
    "year": 1995,
    "event": "World Chess Championship (New York)",
    "result": "1/2-1/2",
    "description": "Anand used the resilient Slav Defense to completely blunt Kasparov's deep home preparation throughout the 1995 title match, demonstrating the fortress-like qualities of the opening.",
    "keyMomentFen": "r2q1rk1/pp1nbppp/2p1pn2/5b2/2BP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 4 9"
  },
  "variations": [
      {
        "id": "slav-czech-mainline",
        "openingId": "slav-defense",
        "name": "Czech Mainline - Active Bishop Outpost (5...Bf5 & 7...Bb4)",
        "eco": "D17",
        "description": "The classical gold standard played in Kasparov-Anand world title matches. Black liquidates on c4 and establishes an active bishop outpost on f5 before playing ...e6.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "slav-main-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4 Queen's pawn.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "slav-main-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black stakes equal central space.",
            "whyThisMove": "Direct defense.",
            "isBookMove": true
          },
          {
            "id": "slav-main-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Queen's Gambit.",
            "whyThisMove": "Challenges d5.",
            "isBookMove": true
          },
          {
            "id": "slav-main-4",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "The Slav Defense! Solves the dilemma of developing the c8 bishop.",
            "whyThisMove": "Supports d5 while keeping c8 open.",
            "isBookMove": true
          },
          {
            "id": "slav-main-5",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White develops knight.",
            "whyThisMove": "Controls e5.",
            "isBookMove": true
          },
          {
            "id": "slav-main-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "slav-main-7",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White adds a second attacker to d5.",
            "whyThisMove": "Pressure on d5.",
            "isBookMove": true
          },
          {
            "id": "slav-main-8",
            "san": "dxc4",
            "from": "d5",
            "to": "c4",
            "fen": "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "The Czech Slav! Black takes on c4, aiming to develop the bishop to f5.",
            "whyThisMove": "Frees the f5 square.",
            "isBookMove": true
          },
          {
            "id": "slav-main-9",
            "san": "a4",
            "from": "a2",
            "to": "a4",
            "fen": "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White plays 5.a4! to permanently prevent Black's ...b5 pawn protection.",
            "whyThisMove": "Prevents ...b5.",
            "isBookMove": true,
            "arrows": [
              [
                "a4",
                "b5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "slav-main-10",
            "san": "Bf5",
            "from": "c8",
            "to": "f5",
            "fen": "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6",
            "turn": "b",
            "ply": 10,
            "annotation": "The key move! Black develops the light-squared bishop actively to f5.",
            "whyThisMove": "Dominates the h7-b1 diagonal outside the pawn chain.",
            "isBookMove": true,
            "keySquares": [
              "f5"
            ]
          },
          {
            "id": "slav-main-11",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White prepares to recapture on c4.",
            "whyThisMove": "Frees f1 bishop.",
            "isBookMove": true
          },
          {
            "id": "slav-main-12",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rn1qkb1r/pp3ppp/2p1pn2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black solidly locks the center.",
            "whyThisMove": "Solid pawn chain.",
            "isBookMove": true
          },
          {
            "id": "slav-main-13",
            "san": "Bxc4",
            "from": "f1",
            "to": "c4",
            "fen": "rn1qkb1r/pp3ppp/2p1pn2/5b2/P1BP4/2N1PN2/1P3PPP/R1BQK2R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White regains the pawn with an active bishop.",
            "whyThisMove": "Reclaims material.",
            "isBookMove": true
          },
          {
            "id": "slav-main-14",
            "san": "Bb4",
            "from": "f8",
            "to": "b4",
            "fen": "rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQK2R w KQkq - 1 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black pins White's knight to the king.",
            "whyThisMove": "Disrupts White's e4 plan.",
            "isBookMove": true
          },
          {
            "id": "slav-main-15",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 b kq - 2 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "slav-main-16",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 w - - 3 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "slav-main-17",
            "san": "Qe2",
            "from": "d1",
            "to": "e2",
            "fen": "rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 b - - 4 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White prepares the e3-e4 central breakthrough.",
            "whyThisMove": "Prepares e4.",
            "isBookMove": true
          },
          {
            "id": "slav-main-18",
            "san": "Nbd7",
            "from": "b8",
            "to": "d7",
            "fen": "r2q1rk1/pp1n1ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 w - - 5 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black connects knights.",
            "whyThisMove": "Guards e5.",
            "isBookMove": true
          },
          {
            "id": "slav-main-19",
            "san": "e4",
            "from": "e3",
            "to": "e4",
            "fen": "r2q1rk1/pp1n1ppp/2p1pn2/5b2/PbBPP3/2N2N2/1P2QPPP/R1B2RK1 b - - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White pushes 10.e4! seizing the center with tempo on Black's bishop!",
            "whyThisMove": "Central breakthrough.",
            "isBookMove": true,
            "arrows": [
              [
                "e4",
                "f5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "slav-main-20",
            "san": "Bg6",
            "from": "f5",
            "to": "g6",
            "fen": "r2q1rk1/pp1n1ppp/2p1pnb1/8/PbBPP3/2N2N2/1P2QPPP/R1B2RK1 w - - 1 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black drops the bishop back safely.",
            "whyThisMove": "Safeguards bishop.",
            "isBookMove": true
          },
          {
            "id": "slav-main-21",
            "san": "Bd3",
            "from": "c4",
            "to": "d3",
            "fen": "r2q1rk1/pp1n1ppp/2p1pnb1/8/Pb1PP3/2NB1N2/1P2QPPP/R1B2RK1 b - - 2 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White coordinates pieces harmoniously. A world-class positional masterclass!",
            "whyThisMove": "Aims toward the kingside.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "semi-slav-meran",
        "openingId": "slav-defense",
        "name": "Semi-Slav - Meran Variation & Tactical Counter-Blow (8...b5 & 9...c5!)",
        "eco": "D47",
        "description": "The sharpest counter-attacking weapon in modern Queen's Gambit theory. Black creates a dynamic pawn explosion on the queenside with 8...b5! and 9...c5!.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "slav-meran-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...d5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Queen's Gambit.",
            "whyThisMove": "Challenges center.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-4",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Slav setup.",
            "whyThisMove": "Pawn support.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-5",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Develops knight.",
            "whyThisMove": "Controls e5.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-7",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
            "turn": "w",
            "ply": 7,
            "annotation": "Develops knight.",
            "whyThisMove": "Pressure on d5.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-8",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "THE SEMI-SLAV TRIANGLE! Black creates the rock-solid c6-d5-e6 pyramid.",
            "whyThisMove": "Immovable center.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-9",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White solidifies d4.",
            "whyThisMove": "Frees bishop.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-10",
            "san": "Nbd7",
            "from": "b8",
            "to": "d7",
            "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 1 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black prepares the Meran counter-strike.",
            "whyThisMove": "Flexible knight.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-11",
            "san": "Bd3",
            "from": "f1",
            "to": "d3",
            "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R b KQkq - 2 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White develops bishop to d3.",
            "whyThisMove": "Aims toward h7.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-12",
            "san": "dxc4",
            "from": "d5",
            "to": "c4",
            "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/8/2pP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "THE MERAN TRIGGER! Black takes on c4 now that White's bishop has already moved!",
            "whyThisMove": "Gains a tempo on White's bishop.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-13",
            "san": "Bxc4",
            "from": "d3",
            "to": "c4",
            "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/8/2BP4/2N1PN2/PP3PPP/R1BQK2R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White bishop takes c4.",
            "whyThisMove": "Recaptures pawn.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-14",
            "san": "b5",
            "from": "b7",
            "to": "b5",
            "fen": "r1bqkb1r/p2n1ppp/2p1pn2/1p6/2BP4/2N1PN2/PP3PPP/R1BQK2R w KQkq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black hits the bishop with tempo and expands on the queenside!",
            "whyThisMove": "Queenside expansion.",
            "isBookMove": true,
            "arrows": [
              [
                "b5",
                "c4",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "slav-meran-15",
            "san": "Bd3",
            "from": "c4",
            "to": "d3",
            "fen": "r1bqkb1r/p2n1ppp/2p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R b KQkq - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "Bishop retreats to d3.",
            "whyThisMove": "Maintains diagonal.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-16",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bqkb1r/3n1ppp/p1p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black anchors the b5 pawn, preparing the explosive ...c5 break!",
            "whyThisMove": "Prepares ...c5.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-17",
            "san": "e4",
            "from": "e3",
            "to": "e4",
            "fen": "r1bqkb1r/3n1ppp/p1p1pn2/1p6/3PP3/2NB1N2/PP3PPP/R1BQK2R b KQkq - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White seizes the center with 9.e4!",
            "whyThisMove": "Central space grab.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-18",
            "san": "c5",
            "from": "c6",
            "to": "c5",
            "fen": "r1bqkb1r/3n1ppp/p3pn2/1pp5/3PP3/2NB1N2/PP3PPP/R1BQK2R w KQkq - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "THE MERAN BREAKTHROUGH! 9...c5! Black tears open White's center!",
            "whyThisMove": "Tactical counter-strike in the center.",
            "isBookMove": true,
            "arrows": [
              [
                "c5",
                "d4",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "slav-meran-19",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "r1bqkb1r/3n1ppp/p3pn2/1pp1P3/3P4/2NB1N2/PP3PPP/R1BQK2R b KQkq - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White attacks the f6 knight!",
            "whyThisMove": "Kicks knight.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-20",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "r1bqkb1r/3n1ppp/p3pn2/1p2P3/3p4/2NB1N2/PP3PPP/R1BQK2R w KQkq - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black counter-attacks White's knight on c3!",
            "whyThisMove": "Desperado counter-attack.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-21",
            "san": "Nxb5",
            "from": "c3",
            "to": "b5",
            "fen": "r1bqkb1r/3n1ppp/p3pn2/1N2P3/3p4/3B1N2/PP3PPP/R1BQK2R b KQkq - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White sacrifices a knight on b5!",
            "whyThisMove": "Tactical piece jump.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-22",
            "san": "axb5",
            "from": "a6",
            "to": "b5",
            "fen": "r1bqkb1r/3n1ppp/4pn2/1p2P3/3p4/3B1N2/PP3PPP/R1BQK2R w KQkq - 0 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black takes the knight.",
            "whyThisMove": "Captures piece.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-23",
            "san": "exf6",
            "from": "e5",
            "to": "f6",
            "fen": "r1bqkb1r/3n1ppp/4pP2/1p6/3p4/3B1N2/PP3PPP/R1BQK2R b KQkq - 0 12",
            "turn": "w",
            "ply": 23,
            "annotation": "White recaptures.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "slav-meran-24",
            "san": "gxf6",
            "from": "g7",
            "to": "f6",
            "fen": "r1bqkb1r/3n1p1p/4pp2/1p6/3p4/3B1N2/PP3PPP/R1BQK2R w KQkq - 0 13",
            "turn": "b",
            "ply": 24,
            "annotation": "Black recaptures. Wild, double-edged tactical fireworks!",
            "whyThisMove": "Dynamic equality.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "slav-exchange-variation",
        "openingId": "slav-defense",
        "name": "Slav Exchange Variation - Symmetrical Positional Squeeze",
        "eco": "D10",
        "description": "White exchanges on d5 (3.cxd5 cxd5) to eliminate Black's sharp counterplay, transitioning into a positional battle for control of the open c-file.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "slav-exch-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...d5.",
            "whyThisMove": "Central parity.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White plays c4.",
            "whyThisMove": "Queen's Gambit.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-4",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Slav setup.",
            "whyThisMove": "Defends d5.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-5",
            "san": "cxd5",
            "from": "c4",
            "to": "d5",
            "fen": "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PP2PPPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "THE EXCHANGE SLAV! White clarifies the central pawn structure immediately.",
            "whyThisMove": "Removes asymmetry.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-6",
            "san": "cxd5",
            "from": "c6",
            "to": "d5",
            "fen": "rnbqkbnr/pp2pppp/8/3p4/3P4/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black recaptures, maintaining central symmetry.",
            "whyThisMove": "Pawn balance.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-7",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/pp2pppp/8/3p4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White develops knight.",
            "whyThisMove": "Pressure on d5.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pp2pppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight.",
            "whyThisMove": "Guards d5.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-9",
            "san": "Bf4",
            "from": "c1",
            "to": "f4",
            "fen": "rnbqkb1r/pp2pppp/5n2/3p4/3P1B2/2N5/PP2PPPP/R2QKBNR b KQkq - 3 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White places the bishop on the active f4 outpost.",
            "whyThisMove": "Active bishop outside chain.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-10",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkb1r/pp2pppp/2n2n2/3p4/3P1B2/2N5/PP2PPPP/R2QKBNR w KQkq - 4 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black develops knight to challenge c-file.",
            "whyThisMove": "Controls c-file.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-11",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "r1bqkb1r/pp2pppp/2n2n2/3p4/3P1B2/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White solidifies the center.",
            "whyThisMove": "Prepares Bd3.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-12",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bqkb1r/1p2pppp/p1n2n2/3p4/3P1B2/2N1P3/PP3PPP/R2QKBNR w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black prevents Nb5.",
            "whyThisMove": "Prophylaxis.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-13",
            "san": "Bd3",
            "from": "f1",
            "to": "d3",
            "fen": "r1bqkb1r/1p2pppp/p1n2n2/3p4/3P1B2/2NBP3/PP3PPP/R2QK1NR b KQkq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White aims toward the kingside.",
            "whyThisMove": "Controls b1-h7 diagonal.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-14",
            "san": "Bg4",
            "from": "c8",
            "to": "g4",
            "fen": "r2qkb1r/1p2pppp/p1n2n2/3p4/3P1Bb1/2NBP3/PP3PPP/R2QK1NR w KQkq - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black pins White's knight.",
            "whyThisMove": "Active pin.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-15",
            "san": "Nge2",
            "from": "g1",
            "to": "e2",
            "fen": "r2qkb1r/1p2pppp/p1n2n2/3p4/3P1Bb1/2NBP3/PP2NPPP/R2QK2R b KQkq - 3 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White breaks the pin smoothly.",
            "whyThisMove": "Flexible knight.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-16",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "r2qkb1r/1p3ppp/p1n1pn2/3p4/3P1Bb1/2NBP3/PP2NPPP/R2QK2R w KQkq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black reinforces the center.",
            "whyThisMove": "Solid structure.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-17",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r2qkb1r/1p3ppp/p1n1pn2/3p4/3P1Bb1/2NBP3/PP2NPPP/R2Q1RK1 b kq - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-18",
            "san": "Bd6",
            "from": "f8",
            "to": "d6",
            "fen": "r2qk2r/1p3ppp/p1nbpn2/3p4/3P1Bb1/2NBP3/PP2NPPP/R2Q1RK1 w kq - 2 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black challenges White's bishop on f4.",
            "whyThisMove": "Offers bishop trade.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-19",
            "san": "f3",
            "from": "f2",
            "to": "f3",
            "fen": "r2qk2r/1p3ppp/p1nbpn2/3p4/3P1Bb1/2NBPP2/PP2N1PP/R2Q1RK1 b kq - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White blunts the pin and prepares e3-e4.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "slav-exch-20",
            "san": "Bh5",
            "from": "g4",
            "to": "h5",
            "fen": "r2qk2r/1p3ppp/p1nbpn2/3p3b/3P1B2/2NBPP2/PP2N1PP/R2Q1RK1 w kq - 1 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Bishop drops back. A deep strategic maneuvering battle begins!",
            "whyThisMove": "Maintains diagonal.",
            "isBookMove": true
          }
        ]
      }
    ]
},
  // ==========================================
  // THE FRIED LIVER ATTACK STRIKES
  // ==========================================
  {
  "id": "fried-liver-attack",
  "slug": "fried-liver-attack",
  "name": "The Fried Liver Attack Strikes",
  "eco": "C57",
  "category": "gambit",
  "side": "white",
  "difficulty": "intermediate",
  "summary": "The most feared tactical sacrifice in open chess. Sacrifice a knight on f7 to drag Black's king into a vicious crossfire.",
  "philosophy": "The Fried Liver (Fegatello Attack) punishes Black's natural but inaccurate 5...Nxd5?! in the Italian Two Knights Defense. White sacrifices a knight on f7 (6.Nxf7!) to rip the black king away from the back rank, bringing the queen to f3 with check and pinning the d5 knight to the king on e6.",
  "keyThemes": [
    "Shock knight sacrifice on f7 (6.Nxf7!)",
    "Dragging Black's monarch into the open on e6",
    "Absolute pin on the d5 knight with Qf3, Nc3, and Bg5",
    "Rapid central breakthrough with d4 and kingside castling"
  ],
  "pawnStructureInfo": "Black's kingside structure is permanently shattered. White trades minor material for overwhelming attacking momentum and total king exposure.",
  "famousGame": {
    "white": "Giulio Cesare Polerio",
    "black": "Domenico",
    "year": 1610,
    "event": "Rome Manuscript Masterpiece",
    "result": "1-0",
    "description": "The earliest recorded game of the Fried Liver Attack. Polerio sacrificed the knight on f7 and systematically demolished Black's stranded king in the center.",
    "keyMomentFen": "r1bq1b1r/ppp3pp/2n1k3/3np1B1/2B5/2NP1Q2/PPP2PPP/R3K2R b KQ - 1 9"
  },
  "variations": [
      {
        "id": "fried-liver-king-hunt",
        "openingId": "fried-liver-attack",
        "name": "The King Hunt & O-O-O Siege (6.Nxf7!)",
        "eco": "C57",
        "description": "White sacrifices the knight on f7 (6.Nxf7!), dragging Black's king into the center. White pins the d5 knight and castles queenside with overwhelming firepower.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "fl-hunt-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White attacks e5.",
            "whyThisMove": "Develops with tempo.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black defends e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-5",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Italian Game, targeting f7.",
            "whyThisMove": "Aims at f7.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Two Knights Defense! Black counter-attacks e4.",
            "whyThisMove": "Attacks White's center.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-7",
            "san": "Ng5",
            "from": "f3",
            "to": "g5",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White leaps forward with 4.Ng5, teaming up with the bishop to attack f7!",
            "whyThisMove": "Dual attack on the weakest square in Black's camp.",
            "isBookMove": true,
            "arrows": [
              [
                "g5",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "c4",
                "f7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "fl-hunt-8",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "The main defense. Black blocks the bishop diagonal.",
            "whyThisMove": "Interposes in the center.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-9",
            "san": "exd5",
            "from": "e4",
            "to": "d5",
            "fen": "r1bqkb1r/ppp2ppp/2n2n2/3Pp1N1/2B5/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White captures on d5.",
            "whyThisMove": "Maintains attack.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-10",
            "san": "Nxd5",
            "from": "f6",
            "to": "d5",
            "fen": "r1bqkb1r/ppp2ppp/2n5/3np1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black recaptures with the knight, walking directly into the Fried Liver!",
            "whyThisMove": "Recaptures pawn.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-11",
            "san": "Nxf7",
            "from": "g5",
            "to": "f7",
            "fen": "r1bqkb1r/ppp2Npp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "BOOM! 6.Nxf7!! THE FRIED LIVER ATTACK! White sacrifices the knight on f7!",
            "whyThisMove": "Forces Black's king into the open board under vicious pins.",
            "isBookMove": true,
            "arrows": [
              [
                "f7",
                "d8",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "f7",
                "h8",
                "rgba(239, 68, 68, 0.9)"
              ]
            ],
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "Knight (3 points)",
              "compensation": "Permanently drags Black's king to e6 with unstoppable attacks."
            }
          },
          {
            "id": "fl-hunt-12",
            "san": "Kxf7",
            "from": "e8",
            "to": "f7",
            "fen": "r1bq1b1r/ppp2kpp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R w KQ - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black's king must capture the knight.",
            "whyThisMove": "Forced capture.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-13",
            "san": "Qf3+",
            "from": "d1",
            "to": "f3",
            "fen": "r1bq1b1r/ppp2kpp/2n5/3np3/2B5/5Q2/PPPP1PPP/RNB1K2R b KQ - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "7.Qf3+!! Double attack on Black's king and the pinned knight on d5!",
            "whyThisMove": "Check on king and attack on d5.",
            "isBookMove": true,
            "arrows": [
              [
                "f3",
                "e6",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "f3",
                "d5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "fl-hunt-14",
            "san": "Ke6",
            "from": "f7",
            "to": "e6",
            "fen": "r1bq1b1r/ppp3pp/2n1k3/3np3/2B5/5Q2/PPPP1PPP/RNB1K2R w KQ - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black's king is forced to march out to e6 to defend the pinned knight!",
            "whyThisMove": "Only way to keep the piece.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-15",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "r1bq1b1r/ppp3pp/2n1k3/3np3/2B5/2N2Q2/PPPP1PPP/R1B1K2R b KQ - 3 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White brings a third attacker to the pinned d5 knight!",
            "whyThisMove": "Piles on the pinned piece.",
            "isBookMove": true,
            "arrows": [
              [
                "c3",
                "d5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "fl-hunt-16",
            "san": "Ne7",
            "from": "c6",
            "to": "e7",
            "fen": "r1bq1b1r/ppp1n1pp/4k3/3np3/2B5/2N2Q2/PPPP1PPP/R1B1K2R w KQ - 4 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black brings a defender to d5.",
            "whyThisMove": "Reinforces d5.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-17",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bq1b1r/ppp1n1pp/4k3/3np3/2BP4/2N2Q2/PPP2PPP/R1B1K2R b KQ - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White blasts open the center right in front of Black's exposed king!",
            "whyThisMove": "Rips open lines against the king.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-18",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "r1bq1b1r/pp2n1pp/2p1k3/3np3/2BP4/2N2Q2/PPP2PPP/R1B1K2R w KQ - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black reinforces the d5 outpost.",
            "whyThisMove": "Solidifies d5.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-19",
            "san": "Bg5",
            "from": "c1",
            "to": "g5",
            "fen": "r1bq1b1r/pp2n1pp/2p1k3/3np1B1/2BP4/2N2Q2/PPP2PPP/R3K2R b KQ - 1 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White pins Black's defending knight on e7!",
            "whyThisMove": "Pins the key defender.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-20",
            "san": "h6",
            "from": "h7",
            "to": "h6",
            "fen": "r1bq1b1r/pp2n1p1/2p1k2p/3np1B1/2BP4/2N2Q2/PPP2PPP/R3K2R w KQ - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black tries to kick White's bishop.",
            "whyThisMove": "Attacks bishop.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-21",
            "san": "Bxe7",
            "from": "g5",
            "to": "e7",
            "fen": "r1bq1b1r/pp2B1p1/2p1k2p/3np3/2BP4/2N2Q2/PPP2PPP/R3K2R b KQ - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White removes the defender.",
            "whyThisMove": "Trades bishop for key defender.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-22",
            "san": "Bxe7",
            "from": "f8",
            "to": "e7",
            "fen": "r1bq3r/pp2b1p1/2p1k2p/3np3/2BP4/2N2Q2/PPP2PPP/R3K2R w KQ - 0 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black recaptures.",
            "whyThisMove": "Must take.",
            "isBookMove": true
          },
          {
            "id": "fl-hunt-23",
            "san": "O-O-O",
            "from": "e1",
            "to": "c1",
            "fen": "r1bq3r/pp2b1p1/2p1k2p/3np3/2BP4/2N2Q2/PPP2PPP/2KR3R b - - 1 12",
            "turn": "w",
            "ply": 23,
            "annotation": "12.O-O-O!! White castles queenside, bringing the d1 rook into the pin with lethal force! Black's king is completely doomed!",
            "whyThisMove": "Activates d1 rook directly against the pinned knight and king.",
            "isBookMove": true,
            "arrows": [
              [
                "d1",
                "d5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "fried-liver-traxler-refutation",
        "openingId": "fried-liver-attack",
        "name": "Traxler Counter-Attack Refutation (5.Bxf7+!)",
        "eco": "C57",
        "description": "Black counters 4.Ng5 with the sharp Traxler Counter-Attack (4...Bc5!?). White clinically refutes it with 5.Bxf7+! Ke7 6.Bb3!, keeping Black's king in the center while pocketing a free pawn.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "fl-trax-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White attacks e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black defends e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-5",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Italian bishop placement.",
            "whyThisMove": "Targets f7.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Two Knights defense.",
            "whyThisMove": "Attacks e4.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-7",
            "san": "Ng5",
            "from": "f3",
            "to": "g5",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White attacks f7 with knight and bishop.",
            "whyThisMove": "Dual attack on f7.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-8",
            "san": "Bc5",
            "from": "f8",
            "to": "c5",
            "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 6 5",
            "turn": "b",
            "ply": 8,
            "annotation": "THE TRAXLER COUNTER-ATTACK! 4...Bc5!? Black ignores the threat on f7 and counter-attacks f2!",
            "whyThisMove": "Hyper-aggressive counter-gambit.",
            "isBookMove": true,
            "arrows": [
              [
                "c5",
                "f2",
                "rgba(249, 115, 22, 0.9)"
              ]
            ]
          },
          {
            "id": "fl-trax-9",
            "san": "Bxf7+",
            "from": "c4",
            "to": "f7",
            "fen": "r1bqk2r/pppp1Bpp/2n2n2/2b1p1N1/4P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "THE COLD-BLOODED REFUTATION! 5.Bxf7+! White captures with the bishop, avoiding Black's tactical minefields!",
            "whyThisMove": "Deprives Black's king of castling without falling into Traxler tricks.",
            "isBookMove": true,
            "arrows": [
              [
                "f7",
                "e8",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "fl-trax-10",
            "san": "Ke7",
            "from": "e8",
            "to": "e7",
            "fen": "r1bq3r/ppppkBpp/2n2n2/2b1p1N1/4P3/8/PPPP1PPP/RNBQK2R w KQ - 1 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black's king is forced to move.",
            "whyThisMove": "Only square.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-11",
            "san": "Bb3",
            "from": "f7",
            "to": "b3",
            "fen": "r1bq3r/ppppk1pp/2n2n2/2b1p1N1/4P3/1B6/PPPP1PPP/RNBQK2R b KQ - 2 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White drops the bishop back safely, retaining control over the a2-g8 diagonal.",
            "whyThisMove": "Safeguards the bishop.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-12",
            "san": "Rf8",
            "from": "h8",
            "to": "f8",
            "fen": "r1bq1r2/ppppk1pp/2n2n2/2b1p1N1/4P3/1B6/PPPP1PPP/RNBQK2R w KQ - 3 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black puts the rook on the semi-open f-file.",
            "whyThisMove": "Rook pressure.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-13",
            "san": "d3",
            "from": "d2",
            "to": "d3",
            "fen": "r1bq1r2/ppppk1pp/2n2n2/2b1p1N1/4P3/1B1P4/PPP2PPP/RNBQK2R b KQ - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White solidly reinforces e4 and opens the c1 bishop.",
            "whyThisMove": "Solidifies center.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-14",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bq1r2/ppp1k1pp/2np1n2/2b1p1N1/4P3/1B1P4/PPP2PPP/RNBQK2R w KQ - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black frees the c8 bishop.",
            "whyThisMove": "Piece development.",
            "isBookMove": true
          },
          {
            "id": "fl-trax-15",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bq1r2/ppp1k1pp/2np1n2/2b1p1N1/4P3/1B1P4/PPP2PPP/RNBQ1RK1 b - - 1 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White castles safely into security. Black has an exposed king on e7 and no compensation for the lost pawn!",
            "whyThisMove": "King safety and +1 material.",
            "isBookMove": true
          }
        ]
      }
    ]
},
  // ==========================================
  // SICILIAN SLAYER: ALAPIN VARIATION
  // ==========================================
  {
  "id": "alapin-sicilian",
  "slug": "alapin-sicilian",
  "name": "Sicilian Slayer: Alapin Variation",
  "eco": "B22",
  "category": "classical",
  "side": "white",
  "difficulty": "beginner",
  "summary": "Slay Black's Sicilian aspirations with an unshakeable 2.c3 pawn center that bypasses 50 volumes of complex theory.",
  "philosophy": "The Sicilian Defense (1...c5) relies on dynamic, sharp counterattacks on the open c-file. The Alapin (2.c3) deflates Black's plans by preparing an immediate classical d4 central duo, controlling key central squares while denying Black early tactical complications.",
  "keyThemes": [
    "Classical pawn center with c3 and d4",
    "Neutralizing Black's aggressive c-file pressure",
    "Active piece play with Bd3, Nf3, and rapid kingside castling",
    "Clear strategic plans against both 2...d5 and 2...Nf6"
  ],
  "pawnStructureInfo": "White builds an active Isolated Queen's Pawn (IQP) or solid pawn duo on d4/e4 that grants superior piece mobility and open avenues toward Black's kingside.",
  "famousGame": {
    "white": "Deep Blue",
    "black": "Garry Kasparov",
    "year": 1996,
    "event": "ACM Computer Chess Challenge, Game 1",
    "result": "1-0",
    "description": "The historic first game ever won by a computer against a reigning classical World Champion. Deep Blue chose the solid Alapin (2.c3) to out-maneuver Kasparov in a masterclass of positional pressure.",
    "keyMomentFen": "r1b1k2r/pp2bppp/2n1pn2/q7/2BP4/2N2N2/PP1B1PPP/R2Q1RK1 b kq - 5 10"
  },
  "variations": [
      {
        "id": "alapin-d5-iqp",
        "openingId": "alapin-sicilian",
        "name": "Classical 2...d5 Mainline - Isolated Queen's Pawn Assault (11.Bf3!)",
        "eco": "B22",
        "description": "The premier test of the Alapin. Black strikes with 2...d5. White accepts an Isolated Queen's Pawn (IQP) on d4 in exchange for rapid piece activity and kingside attack with 11.Bf3!.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "ala-d5-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-2",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Sicilian Defense.",
            "whyThisMove": "Counterplay.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-3",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "THE ALAPIN SICILIAN! White prepares to establish a dominant pawn center with d2-d4.",
            "whyThisMove": "Takes away Sicilian sharp lines and prepares full center.",
            "isBookMove": true,
            "keySquares": [
              "d4"
            ]
          },
          {
            "id": "ala-d5-4",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/pp2pppp/8/2pp4/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black counter-strikes directly in the center with 2...d5!",
            "whyThisMove": "Direct central challenge.",
            "isBookMove": true,
            "arrows": [
              [
                "d7",
                "d5",
                "rgba(34, 197, 94, 0.9)"
              ]
            ]
          },
          {
            "id": "ala-d5-5",
            "san": "exd5",
            "from": "e4",
            "to": "d5",
            "fen": "rnbqkbnr/pp2pppp/8/2pP4/8/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White captures on d5.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-6",
            "san": "Qxd5",
            "from": "d8",
            "to": "d5",
            "fen": "rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black recaptures with the queen.",
            "whyThisMove": "Active queen.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-7",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnb1kbnr/pp2pppp/8/2pq4/3P4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White completes the pawn center strike!",
            "whyThisMove": "Full central challenge.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnb1kb1r/pp2pppp/5n2/2pq4/3P4/2P5/PP3PPP/RNBQKBNR w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight and attacks d4.",
            "whyThisMove": "Pressure on d4.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnb1kb1r/pp2pppp/5n2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White defends d4 with knight development.",
            "whyThisMove": "Controls e5.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-10",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black frees the dark-squared bishop.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-11",
            "san": "Be2",
            "from": "f1",
            "to": "e2",
            "fen": "rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQK2R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White prepares kingside castling.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-12",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "rnb1k2r/pp2bppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQK2R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Solid development.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-13",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rnb1k2r/pp2bppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQ1RK1 b kq - 3 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-14",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnb2rk1/pp2bppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQ1RK1 w - - 4 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-15",
            "san": "c4",
            "from": "c3",
            "to": "c4",
            "fen": "rnb2rk1/pp2bppp/4pn2/2pq4/2PP4/5N2/PP2BPPP/RNBQ1RK1 b - - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White kicks Black's centralized queen with tempo!",
            "whyThisMove": "Attacks queen and takes space.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ala-d5-16",
            "san": "Qd8",
            "from": "d5",
            "to": "d8",
            "fen": "rnbq1rk1/pp2bppp/4pn2/2p5/2PP4/5N2/PP2BPPP/RNBQ1RK1 w - - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black retreats the queen safely.",
            "whyThisMove": "Saves queen.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-17",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbq1rk1/pp2bppp/4pn2/2p5/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 b - - 2 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White develops the remaining knight toward the center.",
            "whyThisMove": "Controls d5.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-18",
            "san": "b6",
            "from": "b7",
            "to": "b6",
            "fen": "rnbq1rk1/p3bppp/1p2pn2/2p5/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black prepares ...Bb7 to challenge the long diagonal.",
            "whyThisMove": "Fianchetto setup.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-19",
            "san": "Ne5",
            "from": "f3",
            "to": "e5",
            "fen": "rnbq1rk1/p3bppp/1p2pn2/2p1N3/2PP4/2N5/PP2BPPP/R1BQ1RK1 b - - 1 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White hops into the e5 outpost, exerting immense pressure!",
            "whyThisMove": "Dominant outpost on e5.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "d7",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ala-d5-20",
            "san": "Bb7",
            "from": "c8",
            "to": "b7",
            "fen": "rn1q1rk1/pb2bppp/1p2pn2/2p1N3/2PP4/2N5/PP2BPPP/R1BQ1RK1 w - - 2 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Controls long diagonal.",
            "isBookMove": true
          },
          {
            "id": "ala-d5-21",
            "san": "Bf3",
            "from": "e2",
            "to": "f3",
            "fen": "rn1q1rk1/pb2bppp/1p2pn2/2p1N3/2PP4/2N2B2/PP3PPP/R1BQ1RK1 b - - 3 11",
            "turn": "w",
            "ply": 21,
            "annotation": "11.Bf3!! White challenges Black's fianchettoed bishop with decisive dark-square domination!",
            "whyThisMove": "Neutralizes Black's best piece and dominates dark squares.",
            "isBookMove": true,
            "arrows": [
              [
                "f3",
                "b7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "alapin-nf6-counter",
        "openingId": "alapin-sicilian",
        "name": "2...Nf6 Counter & Central Wedge (3.e5 & 7.Bc4)",
        "eco": "B22",
        "description": "Black attacks e4 immediately with 2...Nf6. White thrusts forward with 3.e5 Nd5 4.d4, creating an advanced central wedge and dominating the board with 10.Rd1.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "ala-nf6-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-2",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Sicilian.",
            "whyThisMove": "Flank strike.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-3",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Alapin Sicilian.",
            "whyThisMove": "Prepares d4.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-4",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 1 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black hits the undefended e4 pawn immediately!",
            "whyThisMove": "Direct counterplay against e4.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-5",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "rnbqkb1r/pp1ppppp/5n2/2p1P3/8/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White kicks the knight forward!",
            "whyThisMove": "Drives knight into White's territory.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "f6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "ala-nf6-6",
            "san": "Nd5",
            "from": "f6",
            "to": "d5",
            "fen": "rnbqkb1r/pp1ppppp/8/2pnP3/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 1 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black knight hops into d5.",
            "whyThisMove": "Central post.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-7",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkb1r/pp1ppppp/8/2pnP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White establishes the central stronghold.",
            "whyThisMove": "Full pawn center.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-8",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P5/PP3PPP/RNBQKBNR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black trades pawns.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 1 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White develops knight before recapturing.",
            "whyThisMove": "Delays recapture with tempo.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-10",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnbqkb1r/pp1p1ppp/4p3/3nP3/3p4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black supports d5.",
            "whyThisMove": "Pawn chain.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-11",
            "san": "cxd4",
            "from": "c3",
            "to": "d4",
            "fen": "rnbqkb1r/pp1p1ppp/4p3/3nP3/3P4/5N2/PP3PPP/RNBQKB1R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White recaptures with the c-pawn.",
            "whyThisMove": "Restores central duo.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-12",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "rnbqkb1r/pp3ppp/3pp3/3nP3/3P4/5N2/PP3PPP/RNBQKB1R w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black chips away at White's e5 wedge.",
            "whyThisMove": "Challenges e5.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-13",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "rnbqkb1r/pp3ppp/3pp3/3nP3/2BP4/5N2/PP3PPP/RNBQK2R b KQkq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White develops the bishop, attacking the centralized d5 knight!",
            "whyThisMove": "Hits d5 knight with tempo.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ala-nf6-14",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkb1r/pp3ppp/2npp3/3nP3/2BP4/5N2/PP3PPP/RNBQK2R w KQkq - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black adds defender to d5.",
            "whyThisMove": "Reinforces d5.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-15",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqkb1r/pp3ppp/2npp3/3nP3/2BP4/5N2/PP3PPP/RNBQ1RK1 b kq - 3 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-16",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "r1bqk2r/pp2bppp/2npp3/3nP3/2BP4/5N2/PP3PPP/RNBQ1RK1 w kq - 4 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-17",
            "san": "Qe2",
            "from": "d1",
            "to": "e2",
            "fen": "r1bqk2r/pp2bppp/2npp3/3nP3/2BP4/5N2/PP2QPPP/RNB2RK1 b kq - 5 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White clears d1 for the rook.",
            "whyThisMove": "Prepares Rd1.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-18",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/pp2bppp/2npp3/3nP3/2BP4/5N2/PP2QPPP/RNB2RK1 w - - 6 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "ala-nf6-19",
            "san": "Rd1",
            "from": "f1",
            "to": "d1",
            "fen": "r1bq1rk1/pp2bppp/2npp3/3nP3/2BP4/5N2/PP2QPPP/RNBR2K1 b - - 7 10",
            "turn": "w",
            "ply": 19,
            "annotation": "10.Rd1! White's rook commands the d-file, pinning Black's pieces down the center!",
            "whyThisMove": "Overwhelming central pressure.",
            "isBookMove": true,
            "arrows": [
              [
                "d1",
                "d6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      }
    ]
},
  // ==========================================
  // ENGLISH OPENING
  // ==========================================
  {
  "id": "english-opening",
  "slug": "english-opening",
  "name": "English Opening",
  "eco": "A20",
  "category": "classical",
  "side": "white",
  "difficulty": "beginner",
  "summary": "A popular flank opening controlling the central d5 square without committing the central pawns early on.",
  "philosophy": "The English Opening (1.c4) controls the critical d5 square from the wing. It provides White with great strategic flexibility, often transposing into Queen's Gambit or Catalan structures while avoiding heavy early tactical clashes.",
  "keyThemes": [
    "Control of the central d5 square from the c4 wing",
    "Kingside fianchetto with g3 and Bg2",
    "Flexible pawn structures and transpositional potential",
    "Active knight development to c3 and f3"
  ],
  "pawnStructureInfo": "White retains flexibility by withholding the d-pawn or playing d3/d4 depending on Black's setup, keeping central squares under clamp.",
  "famousGame": {
    "white": "Mikhail Botvinnik",
    "black": "Lajos Portisch",
    "year": 1968,
    "event": "Monaco Grandmaster Tournament",
    "result": "1-0",
    "description": "Botvinnik gave an instructive clinic on the English Opening, using the powerful light-squared bishop fianchetto on g2 to dominate the center and dismantle Black's defenses.",
    "keyMomentFen": "r1bq1rk1/ppp1bppp/2n2n2/4p3/1bP5/2N2NP1/PP1PPPBP/R1BQ1RK1 w - - 4 7"
  },
  "variations": [
      {
        "id": "english-four-knights-reversed",
        "openingId": "english-opening",
        "name": "Four Knights - Reversed Sicilian & Queenside Expansion (b4-b5!)",
        "eco": "A28",
        "description": "White plays a Sicilian Defense with an extra tempo! White fianchettoes the bishop on g2 and executes the famous b4-b5 queenside steamroller.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "eng-rev-1",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "THE ENGLISH OPENING! White controls the d5 square from the flank.",
            "whyThisMove": "Controls d5 without committing central pawns.",
            "isBookMove": true,
            "keySquares": [
              "d5"
            ]
          },
          {
            "id": "eng-rev-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Reversed Sicilian! Black takes space in the center.",
            "whyThisMove": "Direct central stake.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-3",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White increases control over d5 and e4.",
            "whyThisMove": "Piece development.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-4",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-5",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White attacks e5.",
            "whyThisMove": "Challenges e5.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-6",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 4 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Four Knights Variation reached!",
            "whyThisMove": "Guards e5.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-7",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White prepares the kingside fianchetto.",
            "whyThisMove": "Prepares Bg2.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-8",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black strikes at the center.",
            "whyThisMove": "Central breakthrough.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-9",
            "san": "cxd5",
            "from": "c4",
            "to": "d5",
            "fen": "r1bqkb1r/ppp2ppp/2n2n2/3Pp3/8/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White trades flank pawn for center pawn.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-10",
            "san": "Nxd5",
            "from": "f6",
            "to": "d5",
            "fen": "r1bqkb1r/ppp2ppp/2n5/3np3/8/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black recaptures with the knight.",
            "whyThisMove": "Central knight.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-11",
            "san": "Bg2",
            "from": "f1",
            "to": "g2",
            "fen": "r1bqkb1r/ppp2ppp/2n5/3np3/8/2N2NP1/PP1PPPBP/R1BQK2R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "The English Bishop exerts laser-like pressure down the long diagonal!",
            "whyThisMove": "Aims at d5 and b7.",
            "isBookMove": true,
            "arrows": [
              [
                "g2",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "eng-rev-12",
            "san": "Nb6",
            "from": "d5",
            "to": "b6",
            "fen": "r1bqkb1r/ppp2ppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black knight steps back.",
            "whyThisMove": "Saves knight.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-13",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqkb1r/ppp2ppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQ1RK1 b kq - 3 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-14",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "r1bqk2r/ppp1bppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq - 4 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-15",
            "san": "a3",
            "from": "a2",
            "to": "a3",
            "fen": "r1bqk2r/ppp1bppp/1nn5/4p3/8/P1N2NP1/1P1PPPBP/R1BQ1RK1 b kq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White prepares the b2-b4 expansion!",
            "whyThisMove": "Queenside pawn storm.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-16",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/ppp1bppp/1nn5/4p3/8/P1N2NP1/1P1PPPBP/R1BQ1RK1 w - - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-17",
            "san": "b4",
            "from": "b2",
            "to": "b4",
            "fen": "r1bq1rk1/ppp1bppp/1nn5/4p3/1P6/P1N2NP1/3PPPBP/R1BQ1RK1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "BOOM! White expands on the queenside, threatening b5 to kick the c6 knight!",
            "whyThisMove": "Threatens b5 winning space.",
            "isBookMove": true,
            "arrows": [
              [
                "b4",
                "b5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "eng-rev-18",
            "san": "Be6",
            "from": "c8",
            "to": "e6",
            "fen": "r2q1rk1/ppp1bppp/1nn1b3/4p3/1P6/P1N2NP1/3PPPBP/R1BQ1RK1 w - - 1 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Piece coordination.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-19",
            "san": "Rb1",
            "from": "a1",
            "to": "b1",
            "fen": "r2q1rk1/ppp1bppp/1nn1b3/4p3/1P6/P1N2NP1/3PPPBP/1RBQ1RK1 b - - 2 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White supports the b4 pawn with the rook.",
            "whyThisMove": "Rook behind passed pawn.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-20",
            "san": "f6",
            "from": "f7",
            "to": "f6",
            "fen": "r2q1rk1/ppp1b1pp/1nn1bp2/4p3/1P6/P1N2NP1/3PPPBP/1RBQ1RK1 w - - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black reinforces e5.",
            "whyThisMove": "Pawn fortress.",
            "isBookMove": true
          },
          {
            "id": "eng-rev-21",
            "san": "d3",
            "from": "d2",
            "to": "d3",
            "fen": "r2q1rk1/ppp1b1pp/1nn1bp2/4p3/1P6/P1NP1NP1/4PPBP/1RBQ1RK1 b - - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White solidifies the center. White has total queenside initiative!",
            "whyThisMove": "Consolidates position.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "english-symmetrical-hedgehog",
        "openingId": "english-opening",
        "name": "Symmetrical English - Central Domination & Queen Battery (10.Qd3)",
        "eco": "A34",
        "description": "Symmetrical warfare where both sides control central space. White opens the center with d4, liquidates knights, and establishes a commanding queen post on d3.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "eng-sym-1",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.c4.",
            "whyThisMove": "Flank opening.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-2",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Symmetrical English! Black mirrors White.",
            "whyThisMove": "Equal space.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-3",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnbqkbnr/pp1ppppp/8/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Develops knight.",
            "whyThisMove": "Controls d5.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Develops knight.",
            "whyThisMove": "Controls d4.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-5",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Prepares fianchetto.",
            "whyThisMove": "Fianchetto setup.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-6",
            "san": "g6",
            "from": "g7",
            "to": "g6",
            "fen": "r1bqkbnr/pp1ppp1p/2n3p1/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black mirrors the fianchetto.",
            "whyThisMove": "Double fianchetto.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-7",
            "san": "Bg2",
            "from": "f1",
            "to": "g2",
            "fen": "r1bqkbnr/pp1ppp1p/2n3p1/2p5/2P5/2N3P1/PP1PPPBP/R1BQK1NR b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White bishop controls long diagonal.",
            "whyThisMove": "Controls a8-h1.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-8",
            "san": "Bg7",
            "from": "f8",
            "to": "g7",
            "fen": "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 2 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black bishop controls long diagonal.",
            "whyThisMove": "Controls h8-a1.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R b KQkq - 3 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White develops knight.",
            "whyThisMove": "Controls d4 and e5.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-10",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqk2r/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 4 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black develops knight.",
            "whyThisMove": "Piece development.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-11",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqk2r/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 b kq - 5 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-12",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 w - - 6 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-13",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bq1rk1/pp1pppbp/2n2np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White breaks open the center with 7.d4!",
            "whyThisMove": "Central challenge.",
            "isBookMove": true,
            "arrows": [
              [
                "d4",
                "c5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "eng-sym-14",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "r1bq1rk1/pp1pppbp/2n2np1/8/2Pp4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black captures.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-15",
            "san": "Nxd4",
            "from": "f3",
            "to": "d4",
            "fen": "r1bq1rk1/pp1pppbp/2n2np1/8/2PN4/2N3P1/PP2PPBP/R1BQ1RK1 b - - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White centralizes knight.",
            "whyThisMove": "Recaptures pawn.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-16",
            "san": "Nxd4",
            "from": "c6",
            "to": "d4",
            "fen": "r1bq1rk1/pp1pppbp/5np1/8/2Pn4/2N3P1/PP2PPBP/R1BQ1RK1 w - - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black trades knights.",
            "whyThisMove": "Piece trade.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-17",
            "san": "Qxd4",
            "from": "d1",
            "to": "d4",
            "fen": "r1bq1rk1/pp1pppbp/5np1/8/2PQ4/2N3P1/PP2PPBP/R1B2RK1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White's queen dominates the center!",
            "whyThisMove": "Queen centralization.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-18",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1bq1rk1/pp2ppbp/3p1np1/8/2PQ4/2N3P1/PP2PPBP/R1B2RK1 w - - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black solidifies the pawn chain.",
            "whyThisMove": "Restricts e5.",
            "isBookMove": true
          },
          {
            "id": "eng-sym-19",
            "san": "Qd3",
            "from": "d4",
            "to": "d3",
            "fen": "r1bq1rk1/pp2ppbp/3p1np1/8/2P5/2NQ2P1/PP2PPBP/R1B2RK1 b - - 1 10",
            "turn": "w",
            "ply": 19,
            "annotation": "10.Qd3! White coordinates queen and bishop, clamping down on Black's counterplay!",
            "whyThisMove": "Dominant queen post controlling key central ranks.",
            "isBookMove": true,
            "arrows": [
              [
                "d3",
                "b7",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          }
        ]
      }
    ]
},
  // ==========================================
  // RETI OPENING
  // ==========================================
  {
  "id": "reti-opening",
  "slug": "reti-opening",
  "name": "Reti Opening",
  "eco": "A09",
  "category": "classical",
  "side": "white",
  "difficulty": "intermediate",
  "summary": "A hypermodern masterpiece. White allows Black to occupy the center and then strikes at it with the c-pawn and fianchettoed bishops.",
  "philosophy": "Pioneered by Richard Reti, 1.Nf3 d5 2.c4 challenges Black's central stronghold without occupying the center with pawns. White relies on piece pressure from the flanks (Bg2 and Bb2) to undermine Black's pawn center.",
  "keyThemes": [
    "Hypermodern piece control of the center before pawn occupation",
    "Attacking the d5 anchor with 2.c4",
    "Double fianchetto potential (Bg2 and Bb2)",
    "Avoiding symmetry and early simplifications"
  ],
  "pawnStructureInfo": "Black often holds an expanded pawn center which White systematically chips away at using wing pawns and long-range diagonals.",
  "famousGame": {
    "white": "Richard Reti",
    "black": "Jose Raul Capablanca",
    "year": 1924,
    "event": "New York International Tournament",
    "result": "1-0",
    "description": "The historic game where Reti used his newly invented opening to hand the legendary Capablanca his first loss in eight years!",
    "keyMomentFen": "rnbq1rk1/pp2bppp/4pn2/2pp4/2P5/1P3NP1/P2PPPBP/RNBQ1RK1 w - - 0 7"
  },
  "variations": [
      {
        "id": "reti-double-fianchetto",
        "openingId": "reti-opening",
        "name": "Hypermodern Reti - Double Fianchetto & Central Chip (8.exd4!)",
        "eco": "A09",
        "description": "Richard Reti's revolutionary hypermodern masterpiece! White attacks Black's d5 pawn from the flank with 2.c4, provoking Black's center forward, then dismantles it with 8.exd4! and 9.Re1.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "ret-fianc-1",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
            "turn": "w",
            "ply": 1,
            "annotation": "THE RETI OPENING! White controls e5 and d4 without committing pawns.",
            "whyThisMove": "Flexible hypermodern start.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black takes classical central space.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "THE RETI GAMBIT! White strikes at Black's d5 pawn from the flank!",
            "whyThisMove": "Undermines Black's central stronghold.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ret-fianc-4",
            "san": "d4",
            "from": "d5",
            "to": "d4",
            "fen": "rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black pushes past, taking space in White's territory.",
            "whyThisMove": "Advanced pawn wedge.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-5",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "rnbqkbnr/ppp1pppp/8/8/2Pp4/5NP1/PP1PPP1P/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White prepares to fianchetto the king's bishop.",
            "whyThisMove": "Prepares Bg2.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-6",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp2pppp/8/2p5/2Pp4/5NP1/PP1PPP1P/RNBQKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black fortifies the d4 wedge.",
            "whyThisMove": "Pawn chain.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-7",
            "san": "Bg2",
            "from": "f1",
            "to": "g2",
            "fen": "rnbqkbnr/pp2pppp/8/2p5/2Pp4/5NP1/PP1PPPBP/RNBQK2R b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "The Reti Bishop aims like a laser at Black's queenside!",
            "whyThisMove": "Long diagonal pressure.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-8",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pp2pppp/2n5/2p5/2Pp4/5NP1/PP1PPPBP/RNBQK2R w KQkq - 2 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight.",
            "whyThisMove": "Guards d4.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-9",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqkbnr/pp2pppp/2n5/2p5/2Pp4/5NP1/PP1PPPBP/RNBQ1RK1 b kq - 3 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-10",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "r1bqkbnr/pp3ppp/2n5/2p1p3/2Pp4/5NP1/PP1PPPBP/RNBQ1RK1 w kq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black builds a classical pawn center.",
            "whyThisMove": "Space grab.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-11",
            "san": "d3",
            "from": "d2",
            "to": "d3",
            "fen": "r1bqkbnr/pp3ppp/2n5/2p1p3/2Pp4/3P1NP1/PP2PPBP/RNBQ1RK1 b kq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White solidifies the kingside and opens the c1 bishop.",
            "whyThisMove": "Frees bishop.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-12",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/pp3ppp/2n2n2/2p1p3/2Pp4/3P1NP1/PP2PPBP/RNBQ1RK1 w kq - 1 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops kingside knight.",
            "whyThisMove": "Piece coordination.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-13",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "r1bqkb1r/pp3ppp/2n2n2/2p1p3/2Pp4/3PPNP1/PP3PBP/RNBQ1RK1 b kq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White strikes at Black's d4 wedge!",
            "whyThisMove": "Undermines the advanced pawn.",
            "isBookMove": true,
            "arrows": [
              [
                "e3",
                "d4",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "ret-fianc-14",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "r1bqk2r/pp2bppp/2n2n2/2p1p3/2Pp4/3PPNP1/PP3PBP/RNBQ1RK1 w kq - 1 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-15",
            "san": "exd4",
            "from": "e3",
            "to": "d4",
            "fen": "r1bqk2r/pp2bppp/2n2n2/2p1p3/2PP4/3P1NP1/PP3PBP/RNBQ1RK1 b kq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White trades central pawns.",
            "whyThisMove": "Opens e-file.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-16",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "r1bqk2r/pp2bppp/2n2n2/4p3/2Pp4/3P1NP1/PP3PBP/RNBQ1RK1 w kq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black recaptures.",
            "whyThisMove": "Maintains d4 pawn.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-17",
            "san": "Re1",
            "from": "f1",
            "to": "e1",
            "fen": "r1bqk2r/pp2bppp/2n2n2/4p3/2Pp4/3P1NP1/PP3PBP/RNBQR1K1 b kq - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White's rook seizes the open e-file, putting pressure on Black's e5 pawn!",
            "whyThisMove": "Rook pressure down e-file.",
            "isBookMove": true,
            "arrows": [
              [
                "e1",
                "e5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "ret-fianc-18",
            "san": "Nd7",
            "from": "f6",
            "to": "d7",
            "fen": "r1bqk2r/pp1nbppp/2n5/4p3/2Pp4/3P1NP1/PP3PBP/RNBQR1K1 w kq - 2 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black defends e5.",
            "whyThisMove": "Guards pawn.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-19",
            "san": "Nbd2",
            "from": "b1",
            "to": "d2",
            "fen": "r1bqk2r/pp1nbppp/2n5/4p3/2Pp4/3P1NP1/PP1N1PBP/R1BQR1K1 b kq - 3 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White develops knight toward c4.",
            "whyThisMove": "Heading for c4.",
            "isBookMove": true
          },
          {
            "id": "ret-fianc-20",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/pp1nbppp/2n5/4p3/2Pp4/3P1NP1/PP1N1PBP/R1BQR1K1 w - - 4 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black castles. The stage is set for White's Nc4 assault!",
            "whyThisMove": "King safety.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "reti-gambit-deflection",
        "openingId": "reti-opening",
        "name": "Reti Gambit - Knight Outpost & Queenside Pressure (4.Nxc4 & 9.Be3)",
        "eco": "A09",
        "description": "When Black accepts the gambit pawn with 2...dxc4, White develops the knight via 3.Na3 and 4.Nxc4, dominating the open diagonals with the bishop pair.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "ret-gamb-1",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.Nf3.",
            "whyThisMove": "Hypermodern start.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...d5.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Reti Gambit.",
            "whyThisMove": "Challenges d5.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-4",
            "san": "dxc4",
            "from": "d5",
            "to": "c4",
            "fen": "rnbqkbnr/ppp1pppp/8/8/2p5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black accepts the gambit pawn.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-5",
            "san": "Na3",
            "from": "b1",
            "to": "a3",
            "fen": "rnbqkbnr/ppp1pppp/8/8/2p5/N4N2/PP1PPPPP/R1BQKB1R b KQkq - 1 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White develops the knight to recapture on c4.",
            "whyThisMove": "Knight heading for c4.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-6",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp2pppp/8/2p5/2p5/N4N2/PP1PPPPP/R1BQKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black claims central space.",
            "whyThisMove": "Fights for d4.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-7",
            "san": "Nxc4",
            "from": "a3",
            "to": "c4",
            "fen": "rnbqkbnr/pp2pppp/8/2p5/2N5/5N2/PP1PPPPP/R1BQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White recaptures the pawn with an active, centralized knight!",
            "whyThisMove": "Active knight post.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-8",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pp2pppp/2n5/2p5/2N5/5N2/PP1PPPPP/R1BQKB1R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls d4.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-9",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "r1bqkbnr/pp2pppp/2n5/2p5/2N5/5NP1/PP1PPP1P/R1BQKB1R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White prepares fianchetto.",
            "whyThisMove": "Prepares Bg2.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-10",
            "san": "g6",
            "from": "g7",
            "to": "g6",
            "fen": "r1bqkbnr/pp2pp1p/2n3p1/2p5/2N5/5NP1/PP1PPP1P/R1BQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black mirrors with a kingside fianchetto.",
            "whyThisMove": "Fianchetto setup.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-11",
            "san": "Bg2",
            "from": "f1",
            "to": "g2",
            "fen": "r1bqkbnr/pp2pp1p/2n3p1/2p5/2N5/5NP1/PP1PPPBP/R1BQK2R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White places the bishop on the long diagonal.",
            "whyThisMove": "Controls long diagonal.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-12",
            "san": "Bg7",
            "from": "f8",
            "to": "g7",
            "fen": "r1bqk1nr/pp2ppbp/2n3p1/2p5/2N5/5NP1/PP1PPPBP/R1BQK2R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Long diagonal.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-13",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1bqk1nr/pp2ppbp/2n3p1/2p5/2N5/5NP1/PP1PPPBP/R1BQ1RK1 b kq - 3 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-14",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqk2r/pp2ppbp/2n2np1/2p5/2N5/5NP1/PP1PPPBP/R1BQ1RK1 w kq - 4 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-15",
            "san": "d3",
            "from": "d2",
            "to": "d3",
            "fen": "r1bqk2r/pp2ppbp/2n2np1/2p5/2N5/3P1NP1/PP2PPBP/R1BQ1RK1 b kq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White solidifies the center.",
            "whyThisMove": "Frees bishop.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-16",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/pp2ppbp/2n2np1/2p5/2N5/3P1NP1/PP2PPBP/R1BQ1RK1 w - - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "ret-gamb-17",
            "san": "Be3",
            "from": "c1",
            "to": "e3",
            "fen": "r1bq1rk1/pp2ppbp/2n2np1/2p5/2N5/3PBNP1/PP2PPBP/R2Q1RK1 b - - 2 9",
            "turn": "w",
            "ply": 17,
            "annotation": "9.Be3! White attacks the vulnerable c5 pawn with tempo! White has a harmonious, dominant position!",
            "whyThisMove": "Attacks c5 with dominant minor piece harmony.",
            "isBookMove": true,
            "arrows": [
              [
                "e3",
                "c5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      }
    ]
},
  // ==========================================
  // BIRD'S OPENING
  // ==========================================
  {
  "id": "birds-opening",
  "slug": "birds-opening",
  "name": "Bird's Opening",
  "eco": "A02",
  "category": "classical",
  "side": "white",
  "difficulty": "intermediate",
  "summary": "A rare and daring option for White. White exposes the king slightly to gain immediate, vice-like control over the e5 square.",
  "philosophy": "With 1.f4, White stakes a claim on the critical e5 square. It can lead to Dutch Defense structures with colors reversed or the deadly Stonewall Attack, preparing an aggressive kingside assault.",
  "keyThemes": [
    "Immediate iron grip on the e5 square with 1.f4",
    "Queenside fianchetto with b3 and Bb2 targeting the kingside",
    "Stonewall pawn formation options with d4, e3, and f4",
    "Aggressive kingside piece transfer (Rf3-h3, Qh5)"
  ],
  "pawnStructureInfo": "White builds a clamp on e5 with pawns on f4, e3, and potentially d4, opening attacking avenues on the f-file.",
  "famousGame": {
    "white": "Henry Edward Bird",
    "black": "James Mason",
    "year": 1876,
    "event": "London Match",
    "result": "1-0",
    "description": "Bird showcased the signature strength of his eponymous opening, dominating the e5 square and launching a victorious kingside blitzkrieg.",
    "keyMomentFen": "rnbq1rk1/ppp1ppbp/5np1/3p4/5P2/1P2PN2/PBPP2PP/RN1QKB1R w KQ - 3 6"
  },
  "variations": [
      {
        "id": "birds-dutch-reversed",
        "openingId": "birds-opening",
        "name": "Dutch Attack Reversed - Kingside Assault & Knight Outpost (8.Ne5!)",
        "eco": "A03",
        "description": "White plays the Dutch Defense with an extra tempo! White places a knight outpost on e5, fianchettoes the dark-squared bishop on b2, and controls the long diagonal with 10.Bf3.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "bird-dutch-1",
            "san": "f4",
            "from": "f2",
            "to": "f4",
            "fen": "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "BIRD'S OPENING! White stakes an aggressive claim on the e5 square with 1.f4.",
            "whyThisMove": "Controls e5 from move 1.",
            "isBookMove": true,
            "keySquares": [
              "e5"
            ]
          },
          {
            "id": "bird-dutch-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black takes central space with 1...d5.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/5P2/5N2/PPPPP1PP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White develops knight, reinforcing control over e5.",
            "whyThisMove": "Controls e5 and d4.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-4",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/5P2/5N2/PPPPP1PP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-5",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/5P2/4PN2/PPPP2PP/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White opens the diagonal for the light-squared bishop.",
            "whyThisMove": "Prepares Be2.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-6",
            "san": "g6",
            "from": "g7",
            "to": "g6",
            "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/5P2/4PN2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black prepares to fianchetto the bishop.",
            "whyThisMove": "Prepares Bg7.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-7",
            "san": "b3",
            "from": "b2",
            "to": "b3",
            "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/5P2/1P2PN2/P1PP2PP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White prepares to fianchetto the queen's bishop on b2.",
            "whyThisMove": "Prepares Bb2.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-8",
            "san": "Bg7",
            "from": "f8",
            "to": "g7",
            "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/5P2/1P2PN2/P1PP2PP/RNBQKB1R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black places the bishop on the long diagonal.",
            "whyThisMove": "Controls h8-a1 diagonal.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-9",
            "san": "Bb2",
            "from": "c1",
            "to": "b2",
            "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/5P2/1P2PN2/PBPP2PP/RN1QKB1R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "The Bird Bishop! Slices across the board toward Black's kingside.",
            "whyThisMove": "Controls the a1-h8 long diagonal.",
            "isBookMove": true,
            "arrows": [
              [
                "b2",
                "g7",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "bird-dutch-10",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/5P2/1P2PN2/PBPP2PP/RN1QKB1R w KQ - 3 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-11",
            "san": "Be2",
            "from": "f1",
            "to": "e2",
            "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/5P2/1P2PN2/PBPPB1PP/RN1QK2R b KQ - 4 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White prepares castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-12",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbq1rk1/pp2ppbp/5np1/2pp4/5P2/1P2PN2/PBPPB1PP/RN1QK2R w KQ - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black strikes at White's d4 square.",
            "whyThisMove": "Queenside space.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-13",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rnbq1rk1/pp2ppbp/5np1/2pp4/5P2/1P2PN2/PBPPB1PP/RN1Q1RK1 b - - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White castles into safety.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-14",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bq1rk1/pp2ppbp/2n2np1/2pp4/5P2/1P2PN2/PBPPB1PP/RN1Q1RK1 w - - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black develops knight.",
            "whyThisMove": "Challenges e5.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-15",
            "san": "Ne5",
            "from": "f3",
            "to": "e5",
            "fen": "r1bq1rk1/pp2ppbp/2n2np1/2ppN3/5P2/1P2P3/PBPPB1PP/RN1Q1RK1 b - - 3 8",
            "turn": "w",
            "ply": 15,
            "annotation": "8.Ne5!! THE PILLSBURY OUTPOST! White plants a monster knight on e5!",
            "whyThisMove": "Dominates the critical central e5 square.",
            "isBookMove": true,
            "arrows": [
              [
                "f3",
                "e5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "bird-dutch-16",
            "san": "Qc7",
            "from": "d8",
            "to": "c7",
            "fen": "r1b2rk1/ppq1ppbp/2n2np1/2ppN3/5P2/1P2P3/PBPPB1PP/RN1Q1RK1 w - - 4 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black connects rooks.",
            "whyThisMove": "Queen mobilization.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-17",
            "san": "Nxc6",
            "from": "e5",
            "to": "c6",
            "fen": "r1b2rk1/ppq1ppbp/2N2np1/2pp4/5P2/1P2P3/PBPPB1PP/RN1Q1RK1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White eliminates Black's key defender.",
            "whyThisMove": "Piece trade.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-18",
            "san": "Qxc6",
            "from": "c7",
            "to": "c6",
            "fen": "r1b2rk1/pp2ppbp/2q2np1/2pp4/5P2/1P2P3/PBPPB1PP/RN1Q1RK1 w - - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black recaptures with the queen.",
            "whyThisMove": "Recaptures piece.",
            "isBookMove": true
          },
          {
            "id": "bird-dutch-19",
            "san": "Bf3",
            "from": "e2",
            "to": "f3",
            "fen": "r1b2rk1/pp2ppbp/2q2np1/2pp4/5P2/1P2PB2/PBPP2PP/RN1Q1RK1 b - - 1 10",
            "turn": "w",
            "ply": 19,
            "annotation": "10.Bf3! White takes aim directly at Black's queen down the long diagonal! White has a powerful kingside clamp!",
            "whyThisMove": "Pins and pressures Black's queen.",
            "isBookMove": true,
            "arrows": [
              [
                "f3",
                "c6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "birds-froms-gambit-refutation",
        "openingId": "birds-opening",
        "name": "From's Gambit Refutation - The Cool Defense (5.g3! & 9.Qd3)",
        "eco": "A02",
        "description": "Black shocks White with the aggressive From's Gambit (1...e5!?). White accepts the pawn and clinically defuses Black's kingside mate traps with 5.g3! and 9.Qd3.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "bird-from-1",
            "san": "f4",
            "from": "f2",
            "to": "f4",
            "fen": "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.f4.",
            "whyThisMove": "Bird's opening.",
            "isBookMove": true
          },
          {
            "id": "bird-from-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "THE FROM'S GAMBIT! Black sacrifices a pawn on move 1 to rip open White's kingside!",
            "whyThisMove": "Immediate counter-attack against White's king.",
            "isBookMove": true,
            "isSacrifice": true,
            "sacrificeInfo": {
              "material": "e-pawn (1 point)",
              "compensation": "Open lines against White's weakened kingside."
            }
          },
          {
            "id": "bird-from-3",
            "san": "fxe5",
            "from": "f4",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4P3/8/8/PPPPP1PP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "White accepts the gambit pawn.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "bird-from-4",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "rnbqkbnr/ppp2ppp/3p4/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black offers another pawn to accelerate development.",
            "whyThisMove": "Gambit continuation.",
            "isBookMove": true
          },
          {
            "id": "bird-from-5",
            "san": "exd6",
            "from": "e5",
            "to": "d6",
            "fen": "rnbqkbnr/ppp2ppp/3P4/8/8/8/PPPPP1PP/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White captures the second pawn.",
            "whyThisMove": "Pawn up.",
            "isBookMove": true
          },
          {
            "id": "bird-from-6",
            "san": "Bxd6",
            "from": "f8",
            "to": "d6",
            "fen": "rnbqk1nr/ppp2ppp/3b4/8/8/8/PPPPP1PP/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black threatens 4...Qh4+ with immediate checkmate nets!",
            "whyThisMove": "Aims at h2.",
            "isBookMove": true,
            "arrows": [
              [
                "d6",
                "h2",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "bird-from-7",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqk1nr/ppp2ppp/3b4/8/8/5N2/PPPPP1PP/RNBQKB1R b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White covers the h4 square, preventing the checkmate threat.",
            "whyThisMove": "Stops ...Qh4+ check.",
            "isBookMove": true
          },
          {
            "id": "bird-from-8",
            "san": "g5",
            "from": "g7",
            "to": "g5",
            "fen": "rnbqk1nr/ppp2p1p/3b4/6p1/8/5N2/PPPPP1PP/RNBQKB1R w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black plays 4...g5, intending ...g4 to kick the knight and force checkmate!",
            "whyThisMove": "Threatens ...g4.",
            "isBookMove": true
          },
          {
            "id": "bird-from-9",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "rnbqk1nr/ppp2p1p/3b4/6p1/8/5NP1/PPPPP2P/RNBQKB1R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "THE COOL REFUTATION! 5.g3! White fortifies the kingside and blunts Black's attack!",
            "whyThisMove": "Closes the dangerous diagonal.",
            "isBookMove": true
          },
          {
            "id": "bird-from-10",
            "san": "g4",
            "from": "g5",
            "to": "g4",
            "fen": "rnbqk1nr/ppp2p1p/3b4/8/6p1/5NP1/PPPPP2P/RNBQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black pushes g4 to kick the knight.",
            "whyThisMove": "Attacks knight.",
            "isBookMove": true
          },
          {
            "id": "bird-from-11",
            "san": "Nh4",
            "from": "f3",
            "to": "h4",
            "fen": "rnbqk1nr/ppp2p1p/3b4/8/6pN/6P1/PPPPP2P/RNBQKB1R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White hops to the h4 outpost, blocking the h-file!",
            "whyThisMove": "Blocks kingside lines.",
            "isBookMove": true
          },
          {
            "id": "bird-from-12",
            "san": "Ne7",
            "from": "g8",
            "to": "e7",
            "fen": "rnbqk2r/ppp1np1p/3b4/8/6pN/6P1/PPPPP2P/RNBQKB1R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops knight, heading for g6.",
            "whyThisMove": "Knight transfer.",
            "isBookMove": true
          },
          {
            "id": "bird-from-13",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqk2r/ppp1np1p/3b4/8/3P2pN/6P1/PPP1P2P/RNBQKB1R b KQkq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White seizes the center with 7.d4!",
            "whyThisMove": "Central space.",
            "isBookMove": true
          },
          {
            "id": "bird-from-14",
            "san": "Ng6",
            "from": "e7",
            "to": "g6",
            "fen": "rnbqk2r/ppp2p1p/3b2n1/8/3P2pN/6P1/PPP1P2P/RNBQKB1R w KQkq - 1 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black attacks the h4 knight.",
            "whyThisMove": "Attacks knight.",
            "isBookMove": true
          },
          {
            "id": "bird-from-15",
            "san": "Nxg6",
            "from": "h4",
            "to": "g6",
            "fen": "rnbqk2r/ppp2p1p/3b2N1/8/3P2p1/6P1/PPP1P2P/RNBQKB1R b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White trades knights.",
            "whyThisMove": "Eliminates attacker.",
            "isBookMove": true
          },
          {
            "id": "bird-from-16",
            "san": "hxg6",
            "from": "h7",
            "to": "g6",
            "fen": "rnbqk2r/ppp2p2/3b2p1/8/3P2p1/6P1/PPP1P2P/RNBQKB1R w KQkq - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black recaptures with the h-pawn.",
            "whyThisMove": "Opens h-file.",
            "isBookMove": true
          },
          {
            "id": "bird-from-17",
            "san": "Qd3",
            "from": "d1",
            "to": "d3",
            "fen": "rnbqk2r/ppp2p2/3b2p1/8/3P2p1/3Q2P1/PPP1P2P/RNB1KB1R b KQkq - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "9.Qd3! White coordinates queen and bishop, defending the kingside while remaining a full pawn ahead!",
            "whyThisMove": "Guards against kingside infiltration with winning advantage.",
            "isBookMove": true,
            "arrows": [
              [
                "d3",
                "g6",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          }
        ]
      }
    ]
},
  // ==========================================
  // NIMZO-LARSEN ATTACK
  // ==========================================
  {
  "id": "nimzo-larsen-attack",
  "slug": "nimzo-larsen-attack",
  "name": "Nimzo-Larsen Attack",
  "eco": "A01",
  "category": "classical",
  "side": "white",
  "difficulty": "beginner",
  "summary": "A flexible, modern flank opening. White fianchettoes the bishop to b2 on move 2 to exert laser-like control over central dark squares.",
  "philosophy": "Popularized by Aaron Nimzowitsch and Bent Larsen, 1.b3 immediately unleashes the queen's bishop along the long h1-a8 diagonal, applying instant pressure to Black's central e5 square from a distance.",
  "keyThemes": [
    "Early fianchetto with 1.b3 and 2.Bb2",
    "Direct pressure on the e5 point and central dark squares",
    "Pinning Black's central defender with Bb5",
    "High degree of flexibility and unorthodox positions"
  ],
  "pawnStructureInfo": "White delays committing central pawns, allowing Black to form a center which White subsequently attacks with f4, c4, or Nf3.",
  "famousGame": {
    "white": "Bent Larsen",
    "black": "Boris Spassky",
    "year": 1970,
    "event": "USSR vs. Rest of the World (Belgrade)",
    "result": "0-1",
    "description": "One of the most famous games in modern history showcasing the razor-sharp tactical dynamics of the Nimzo-Larsen Attack.",
    "keyMomentFen": "r1b1k2r/ppppqppp/2nb1n2/1B2p3/8/1P2PN2/PBPP1PPP/RN1QK2R w KQkq - 5 6"
  },
  "variations": [
      {
        "id": "nimzo-larsen-pin",
        "openingId": "nimzo-larsen-attack",
        "name": "Modern Pin Variation - Central Squeeze & Knight Outpost (7.Nc4!)",
        "eco": "A01",
        "description": "Bent Larsen's signature hypermodern system! White opens 1.b3 and pins Black's knight with 4.Bb5, shattering Black's pawn structure with 6.Bxc6 and dominating e5 with 7.Nc4!.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "nl-pin-1",
            "san": "b3",
            "from": "b2",
            "to": "b3",
            "fen": "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "THE NIMZO-LARSEN ATTACK! White prepares an immediate queenside fianchetto.",
            "whyThisMove": "Controls e5 and d4 from the flank.",
            "isBookMove": true,
            "keySquares": [
              "e5"
            ]
          },
          {
            "id": "nl-pin-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black takes the full center.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-3",
            "san": "Bb2",
            "from": "c1",
            "to": "b2",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/1P6/PBPPPPPP/RN1QKBNR b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "The Larsen Bishop! Attacks Black's undefended e5 pawn on move 2.",
            "whyThisMove": "Immediate pressure on e5.",
            "isBookMove": true,
            "arrows": [
              [
                "b2",
                "e5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "nl-pin-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/8/1P6/PBPPPPPP/RN1QKBNR w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black defends e5.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-5",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/8/1P2P3/PBPP1PPP/RN1QKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White frees the king's bishop.",
            "whyThisMove": "Prepares Bb5.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-6",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/8/1P2P3/PBPP1PPP/RN1QKBNR w KQkq - 1 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black develops kingside knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-7",
            "san": "Bb5",
            "from": "f1",
            "to": "b5",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/8/1P2P3/PBPP1PPP/RN1QK1NR b KQkq - 2 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White pins Black's defending knight against the king!",
            "whyThisMove": "Undermines defender of e5.",
            "isBookMove": true,
            "arrows": [
              [
                "b5",
                "c6",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "nl-pin-8",
            "san": "Bd6",
            "from": "f8",
            "to": "d6",
            "fen": "r1bqk2r/pppp1ppp/2nb1n2/1B2p3/8/1P2P3/PBPP1PPP/RN1QK1NR w KQkq - 3 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black supports e5 with the bishop.",
            "whyThisMove": "Guards e5.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-9",
            "san": "Na3",
            "from": "b1",
            "to": "a3",
            "fen": "r1bqk2r/pppp1ppp/2nb1n2/1B2p3/8/NP2P3/PBPP1PPP/R2QK1NR b KQkq - 4 5",
            "turn": "w",
            "ply": 9,
            "annotation": "Larsen's trademark knight maneuver, heading for c4!",
            "whyThisMove": "Knight heading for c4 outpost.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-10",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "r1bqk2r/1ppp1ppp/p1nb1n2/1B2p3/8/NP2P3/PBPP1PPP/R2QK1NR w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black asks the bishop a question.",
            "whyThisMove": "Kicks bishop.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-11",
            "san": "Bxc6",
            "from": "b5",
            "to": "c6",
            "fen": "r1bqk2r/1ppp1ppp/p1Bb1n2/4p3/8/NP2P3/PBPP1PPP/R2QK1NR b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White captures on c6, inflicting doubled c-pawns on Black!",
            "whyThisMove": "Shatters pawn structure.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-12",
            "san": "dxc6",
            "from": "d7",
            "to": "c6",
            "fen": "r1bqk2r/1pp2ppp/p1pb1n2/4p3/8/NP2P3/PBPP1PPP/R2QK1NR w KQkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black recaptures.",
            "whyThisMove": "Recaptures piece.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-13",
            "san": "Nc4",
            "from": "a3",
            "to": "c4",
            "fen": "r1bqk2r/1pp2ppp/p1pb1n2/4p3/2N5/1P2P3/PBPP1PPP/R2QK1NR b KQkq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "7.Nc4!! White plants the knight on the c4 outpost, attacking e5 and the d6 bishop!",
            "whyThisMove": "Dominant knight attacking e5 and d6.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "e5",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "c4",
                "d6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "nl-pin-14",
            "san": "Qe7",
            "from": "d8",
            "to": "e7",
            "fen": "r1b1k2r/1pp1qppp/p1pb1n2/4p3/2N5/1P2P3/PBPP1PPP/R2QK1NR w KQkq - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black defends e5 with the queen.",
            "whyThisMove": "Guards e5.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-15",
            "san": "Ne2",
            "from": "g1",
            "to": "e2",
            "fen": "r1b1k2r/1pp1qppp/p1pb1n2/4p3/2N5/1P2P3/PBPPNPPP/R2QK2R b KQkq - 3 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White develops the remaining knight toward the center.",
            "whyThisMove": "Prepares castling.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-16",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1b2rk1/1pp1qppp/p1pb1n2/4p3/2N5/1P2P3/PBPPNPPP/R2QK2R w KQ - 4 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "nl-pin-17",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1b2rk1/1pp1qppp/p1pb1n2/4p3/2N5/1P2P3/PBPPNPPP/R2Q1RK1 b - - 5 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White castles into safety. White holds a long-term structural and positional advantage!",
            "whyThisMove": "King safety and superior pawn structure.",
            "isBookMove": true
          }
        ]
      },
      {
        "id": "nimzo-larsen-classical",
        "openingId": "nimzo-larsen-attack",
        "name": "Classical 1...d5 Setup - Harmonious Light-Square Control (7.c4 & 8.d4)",
        "eco": "A01",
        "description": "When Black replies solidly with 1...d5, White coordinates pieces with 2.Bb2, 3.Nf3, and 7.c4 to dismantle Black's center and dominate the light squares.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "nl-class-1",
            "san": "b3",
            "from": "b2",
            "to": "b3",
            "fen": "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.b3.",
            "whyThisMove": "Flank opening.",
            "isBookMove": true
          },
          {
            "id": "nl-class-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black stakes central space.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "nl-class-3",
            "san": "Bb2",
            "from": "c1",
            "to": "b2",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/1P6/PBPPPPPP/RN1QKBNR b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Fianchettoed bishop controls the long diagonal.",
            "whyThisMove": "Long diagonal.",
            "isBookMove": true
          },
          {
            "id": "nl-class-4",
            "san": "Bf5",
            "from": "c8",
            "to": "f5",
            "fen": "rn1qkbnr/ppp1pppp/8/3p1b2/8/1P6/PBPPPPPP/RN1QKBNR w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black develops bishop actively.",
            "whyThisMove": "Active bishop outside chain.",
            "isBookMove": true
          },
          {
            "id": "nl-class-5",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rn1qkbnr/ppp1pppp/8/3p1b2/8/1P3N2/PBPPPPPP/RN1QKB1R b KQkq - 3 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White controls e5 and d4.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "nl-class-6",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rn1qkbnr/ppp2ppp/4p3/3p1b2/8/1P3N2/PBPPPPPP/RN1QKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black solidifies the center.",
            "whyThisMove": "Pawn chain.",
            "isBookMove": true
          },
          {
            "id": "nl-class-7",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "rn1qkbnr/ppp2ppp/4p3/3p1b2/8/1P2PN2/PBPP1PPP/RN1QKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White prepares to develop the light-squared bishop.",
            "whyThisMove": "Prepares Be2.",
            "isBookMove": true
          },
          {
            "id": "nl-class-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rn1qkb1r/ppp2ppp/4pn2/3p1b2/8/1P2PN2/PBPP1PPP/RN1QKB1R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight.",
            "whyThisMove": "Kingside mobilization.",
            "isBookMove": true
          },
          {
            "id": "nl-class-9",
            "san": "Be2",
            "from": "f1",
            "to": "e2",
            "fen": "rn1qkb1r/ppp2ppp/4pn2/3p1b2/8/1P2PN2/PBPPBPPP/RN1QK2R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White prepares castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "nl-class-10",
            "san": "h6",
            "from": "h7",
            "to": "h6",
            "fen": "rn1qkb1r/ppp2pp1/4pn1p/3p1b2/8/1P2PN2/PBPPBPPP/RN1QK2R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black creates an escape square for the bishop on h7.",
            "whyThisMove": "Prophylaxis.",
            "isBookMove": true
          },
          {
            "id": "nl-class-11",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rn1qkb1r/ppp2pp1/4pn1p/3p1b2/8/1P2PN2/PBPPBPPP/RN1Q1RK1 b kq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "nl-class-12",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "rn1qk2r/ppp1bpp1/4pn1p/3p1b2/8/1P2PN2/PBPPBPPP/RN1Q1RK1 w kq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Prepares castling.",
            "isBookMove": true
          },
          {
            "id": "nl-class-13",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rn1qk2r/ppp1bpp1/4pn1p/3p1b2/2P5/1P2PN2/PB1PBPPP/RN1Q1RK1 b kq - 0 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White strikes at Black's d5 center with 7.c4!",
            "whyThisMove": "Undermines d5.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "nl-class-14",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rn1qk2r/pp2bpp1/2p1pn1p/3p1b2/2P5/1P2PN2/PB1PBPPP/RN1Q1RK1 w kq - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black reinforces the center.",
            "whyThisMove": "Slav-like pawn pyramid.",
            "isBookMove": true
          },
          {
            "id": "nl-class-15",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rn1qk2r/pp2bpp1/2p1pn1p/3p1b2/2PP4/1P2PN2/PB2BPPP/RN1Q1RK1 b kq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White erects an imposing pawn center with 8.d4!",
            "whyThisMove": "Full central expansion.",
            "isBookMove": true
          },
          {
            "id": "nl-class-16",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rn1q1rk1/pp2bpp1/2p1pn1p/3p1b2/2PP4/1P2PN2/PB2BPPP/RN1Q1RK1 w - - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "nl-class-17",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rn1q1rk1/pp2bpp1/2p1pn1p/3p1b2/2PP4/1PN1PN2/PB2BPPP/R2Q1RK1 b - - 2 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "nl-class-18",
            "san": "Nbd7",
            "from": "b8",
            "to": "d7",
            "fen": "r2q1rk1/pp1nbpp1/2p1pn1p/3p1b2/2PP4/1PN1PN2/PB2BPPP/R2Q1RK1 w - - 3 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black connects knights. White has achieved total piece harmony!",
            "whyThisMove": "Harmonious coordination.",
            "isBookMove": true
          }
        ]
      }
    ]
}
,
  // ==========================================
  // SCOTCH GAME
  // ==========================================
  {
  "id": "scotch-game",
  "slug": "scotch-game",
  "name": "Scotch Game",
  "eco": "C45",
  "category": "classical",
  "side": "white",
  "difficulty": "beginner",
  "summary": "An immediate central strike on move 3. White plays 3.d4 to blow open the center and seize rapid piece activity.",
  "philosophy": "Unlike the Italian or Ruy Lopez which build up gradually, the Scotch Game (1.e4 e5 2.Nf3 Nc6 3.d4) immediately liquidates Black's central e5 pawn on move 3. White gains space, frees the queen's bishop, and creates an open game with straightforward, active piece placement.",
  "keyThemes": [
    "Immediate central liquidation with 3.d4",
    "Central knight dominance on d4",
    "Active piece play with Bc4 or Be3",
    "Rapid queenside or kingside castling"
  ],
  "pawnStructureInfo": "Black trades the central e-pawn (3...exd4), leaving White with a central space advantage (e4 pawn) and open central files for the major pieces.",
  "famousGame": {
    "white": "Garry Kasparov",
    "black": "Anatoly Karpov",
    "year": 1990,
    "event": "World Chess Championship (Lyon), Game 14",
    "result": "1-0",
    "description": "Kasparov famously revived the Scotch Game at the highest level, surprising Karpov with 3.d4! and scoring crucial World Championship victories.",
    "keyMomentFen": "r1b1k2r/pppp1ppp/2n5/1B6/3NP3/2b5/PPP2PPP/R1BQ1RK1 w kq - 0 9"
  },
  "variations": [
      {
        "id": "scotch-classical-kasparov",
        "openingId": "scotch-game",
        "name": "Classical 4...Bc5 Line - Kasparov Revival (10.f4 & 11.Bf2!)",
        "eco": "C45",
        "description": "Garry Kasparov's legendary revival of the Scotch in his World Championship match against Karpov! White invites tactical chaos, sacrificing the e4 pawn to dominate with 10.f4 and 11.Bf2!.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "sco-kasp-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Attacks e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Defends e5.",
            "whyThisMove": "Defends pawn.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-5",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "THE SCOTCH GAME! White strikes right in the center on move 3!",
            "whyThisMove": "Forces Black to surrender central control.",
            "isBookMove": true,
            "arrows": [
              [
                "d4",
                "e5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sco-kasp-6",
            "san": "exd4",
            "from": "e5",
            "to": "d4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black captures the pawn.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-7",
            "san": "Nxd4",
            "from": "f3",
            "to": "d4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "White recaptures with the knight.",
            "whyThisMove": "Centralized knight.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-8",
            "san": "Bc5",
            "from": "f8",
            "to": "c5",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "The Classical Variation! Black attacks the centralized d4 knight.",
            "whyThisMove": "Piles pressure on d4.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-9",
            "san": "Be3",
            "from": "c1",
            "to": "e3",
            "fen": "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White reinforces d4 with the bishop.",
            "whyThisMove": "Guards knight.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-10",
            "san": "Qf6",
            "from": "d8",
            "to": "f6",
            "fen": "r1b1k1nr/pppp1ppp/2n2q2/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R w KQkq - 3 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black brings the queen out, adding a third attacker to d4!",
            "whyThisMove": "Triple pressure on d4.",
            "isBookMove": true,
            "arrows": [
              [
                "f6",
                "d4",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "sco-kasp-11",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "r1b1k1nr/pppp1ppp/2n2q2/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White cements the d4 knight with the c-pawn.",
            "whyThisMove": "Solidifies d4.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-12",
            "san": "Nge7",
            "from": "g8",
            "to": "e7",
            "fen": "r1b1k2r/ppppnppp/2n2q2/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R w KQkq - 1 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black develops knight to e7.",
            "whyThisMove": "Heading for d5 or e5.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-13",
            "san": "Bc4",
            "from": "f1",
            "to": "c4",
            "fen": "r1b1k2r/ppppnppp/2n2q2/2b5/2BNP3/2P1B3/PP3PPP/RN1QK2R b KQkq - 2 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White takes aim at f7.",
            "whyThisMove": "Italian diagonal.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-14",
            "san": "Ne5",
            "from": "c6",
            "to": "e5",
            "fen": "r1b1k2r/ppppnppp/5q2/2b1n3/2BNP3/2P1B3/PP3PPP/RN1QK2R w KQkq - 3 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black attacks White's bishop on c4.",
            "whyThisMove": "Hits bishop.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-15",
            "san": "Be2",
            "from": "c4",
            "to": "e2",
            "fen": "r1b1k2r/ppppnppp/5q2/2b1n3/3NP3/2P1B3/PP2BPPP/RN1QK2R b KQkq - 4 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White retreats the bishop safely.",
            "whyThisMove": "Saves bishop.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-16",
            "san": "Qg6",
            "from": "f6",
            "to": "g6",
            "fen": "r1b1k2r/ppppnppp/6q1/2b1n3/3NP3/2P1B3/PP2BPPP/RN1QK2R w KQkq - 5 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black attacks both e4 and g2!",
            "whyThisMove": "Dual attack on e4 and g2.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-17",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1b1k2r/ppppnppp/6q1/2b1n3/3NP3/2P1B3/PP2BPPP/RN1Q1RK1 b kq - 6 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White castles, offering the e4 pawn as poison bait!",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-18",
            "san": "d6",
            "from": "d7",
            "to": "d6",
            "fen": "r1b1k2r/ppp1nppp/3p2q1/2b1n3/3NP3/2P1B3/PP2BPPP/RN1Q1RK1 w kq - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black solidifies the center.",
            "whyThisMove": "Frees bishop.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-19",
            "san": "f4",
            "from": "f2",
            "to": "f4",
            "fen": "r1b1k2r/ppp1nppp/3p2q1/2b1n3/3NPP2/2P1B3/PP2B1PP/RN1Q1RK1 b kq - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "10.f4!! White charges forward, attacking Black's e5 knight!",
            "whyThisMove": "Aggressive pawn thrust.",
            "isBookMove": true,
            "arrows": [
              [
                "f4",
                "e5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sco-kasp-20",
            "san": "Qxe4",
            "from": "g6",
            "to": "e4",
            "fen": "r1b1k2r/ppp1nppp/3p4/2b1n3/3NqP2/2P1B3/PP2B1PP/RN1Q1RK1 w kq - 0 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black captures the e4 pawn with the queen.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "sco-kasp-21",
            "san": "Bf2",
            "from": "e3",
            "to": "f2",
            "fen": "r1b1k2r/ppp1nppp/3p4/2b1n3/3NqP2/2P5/PP2BBPP/RN1Q1RK1 b kq - 1 11",
            "turn": "w",
            "ply": 21,
            "annotation": "11.Bf2!! Kasparov's masterstroke! White traps the queen in the crosshairs of rooks and minor pieces!",
            "whyThisMove": "Discovered attack and devastating tactical domination.",
            "isBookMove": true,
            "arrows": [
              [
                "f2",
                "e4",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "scotch-mieses-variation",
        "openingId": "scotch-game",
        "name": "Mieses Variation - Central Explosion (4...Nf6 & 8.c4 Ba6)",
        "eco": "C45",
        "description": "The sharpest modern battlefield. Black counter-attacks with 4...Nf6. White thrusts 5.Nxc6 bxc6 6.e5!, forcing Black's queen out and pinning down the long diagonal with 12.Ba3.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "sco-mies-1",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.e4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-2",
            "san": "e5",
            "from": "e7",
            "to": "e5",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...e5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-3",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Attacks e5.",
            "whyThisMove": "Develops knight.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-4",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Defends e5.",
            "whyThisMove": "Defends pawn.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-5",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Scotch Game.",
            "whyThisMove": "Central strike.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-6",
            "san": "exd4",
            "from": "e5",
            "to": "d4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Takes pawn.",
            "whyThisMove": "Trade pawn.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-7",
            "san": "Nxd4",
            "from": "f3",
            "to": "d4",
            "fen": "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "Recaptures.",
            "whyThisMove": "Knight center.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-8",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "THE MIESES VARIATION! Black counter-attacks e4 immediately.",
            "whyThisMove": "Hits e4.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-9",
            "san": "Nxc6",
            "from": "d4",
            "to": "c6",
            "fen": "r1bqkb1r/pppp1ppp/2N2n2/8/4P3/8/PPP2PPP/RNBQKB1R b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White trades knights on c6.",
            "whyThisMove": "Trades piece.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-10",
            "san": "bxc6",
            "from": "b7",
            "to": "c6",
            "fen": "r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black recaptures toward the center.",
            "whyThisMove": "Opens b-file.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-11",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "r1bqkb1r/p1pp1ppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R b KQkq - 0 6",
            "turn": "w",
            "ply": 11,
            "annotation": "6.e5! White attacks the f6 knight!",
            "whyThisMove": "Drives the knight away.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "f6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "sco-mies-12",
            "san": "Qe7",
            "from": "d8",
            "to": "e7",
            "fen": "r1b1kb1r/p1ppqppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R w KQkq - 1 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black pins the e5 pawn to White's king.",
            "whyThisMove": "Pins e5 pawn.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-13",
            "san": "Qe2",
            "from": "d1",
            "to": "e2",
            "fen": "r1b1kb1r/p1ppqppp/2p2n2/4P3/8/8/PPP1QPPP/RNB1KB1R b KQkq - 2 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White unpins the pawn immediately.",
            "whyThisMove": "Breaks pin.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-14",
            "san": "Nd5",
            "from": "f6",
            "to": "d5",
            "fen": "r1b1kb1r/p1ppqppp/2p5/3nP3/8/8/PPP1QPPP/RNB1KB1R w KQkq - 3 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black knight lands on d5.",
            "whyThisMove": "Central outpost.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-15",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "r1b1kb1r/p1ppqppp/2p5/3nP3/2P5/8/PP2QPPP/RNB1KB1R b KQkq - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White kicks the knight with 8.c4!",
            "whyThisMove": "Attacks knight.",
            "isBookMove": true,
            "arrows": [
              [
                "c4",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "sco-mies-16",
            "san": "Ba6",
            "from": "c8",
            "to": "a6",
            "fen": "r3kb1r/p1ppqppp/b1p5/3nP3/2P5/8/PP2QPPP/RNB1KB1R w KQkq - 1 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black pins the c4 pawn against White's queen!",
            "whyThisMove": "Pins c4 pawn.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-17",
            "san": "b3",
            "from": "b2",
            "to": "b3",
            "fen": "r3kb1r/p1ppqppp/b1p5/3nP3/2P5/1P6/P3QPPP/RNB1KB1R b KQkq - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White solidifies c4.",
            "whyThisMove": "Guards pawn.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-18",
            "san": "g6",
            "from": "g7",
            "to": "g6",
            "fen": "r3kb1r/p1ppqp1p/b1p3p1/3nP3/2P5/1P6/P3QPPP/RNB1KB1R w KQkq - 0 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black prepares ...Bg7 to pile on e5.",
            "whyThisMove": "Fianchetto plan.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-19",
            "san": "f4",
            "from": "f2",
            "to": "f4",
            "fen": "r3kb1r/p1ppqp1p/b1p3p1/3nP3/2P2P2/1P6/P3Q1PP/RNB1KB1R b KQkq - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White reinforces the e5 wedge!",
            "whyThisMove": "Fortifies e5.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-20",
            "san": "Bg7",
            "from": "f8",
            "to": "g7",
            "fen": "r3k2r/p1ppqpbp/b1p3p1/3nP3/2P2P2/1P6/P3Q1PP/RNB1KB1R w KQkq - 1 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black attacks e5.",
            "whyThisMove": "Piles on e5.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-21",
            "san": "Qf2",
            "from": "e2",
            "to": "f2",
            "fen": "r3k2r/p1ppqpbp/b1p3p1/3nP3/2P2P2/1P6/P4QPP/RNB1KB1R b KQkq - 2 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White unpins the c4 pawn.",
            "whyThisMove": "Clears pin.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-22",
            "san": "Nb6",
            "from": "d5",
            "to": "b6",
            "fen": "r3k2r/p1ppqpbp/bnp3p1/4P3/2P2P2/1P6/P4QPP/RNB1KB1R w KQkq - 3 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black retreats knight.",
            "whyThisMove": "Saves knight.",
            "isBookMove": true
          },
          {
            "id": "sco-mies-23",
            "san": "Ba3",
            "from": "c1",
            "to": "a3",
            "fen": "r3k2r/p1ppqpbp/bnp3p1/4P3/2P2P2/BP6/P4QPP/RN2KB1R b KQkq - 4 12",
            "turn": "w",
            "ply": 23,
            "annotation": "12.Ba3!! White pins Black's queen down the diagonal! A thrilling tactical battlefield!",
            "whyThisMove": "Absolute pin on the black queen.",
            "isBookMove": true,
            "arrows": [
              [
                "a3",
                "e7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      }
    ]
},
  // ==========================================
  // LONDON SYSTEM
  // ==========================================
  {
  "id": "london-system",
  "slug": "london-system",
  "name": "London System",
  "eco": "D02",
  "category": "classical",
  "side": "white",
  "difficulty": "beginner",
  "summary": "The ultimate reliable setup for 1.d4. Develop the dark-squared bishop to f4 before building an unshakeable pawn pyramid.",
  "philosophy": "The London System (1.d4 followed by 2.Bf4, 3.e3, 4.c3, 5.Nf3, 6.Nbd2) avoids heavy theoretical traps by establishing an impenetrable pawn pyramid (c3-d4-e3). The dark-squared bishop sits actively on f4 outside the pawn chain, controlling the critical e5 outpost.",
  "keyThemes": [
    "Solid pawn pyramid on c3-d4-e3",
    "Developing the dark-squared bishop to f4 before playing e3",
    "The e5 knight outpost (Ne5 backed by f4)",
    "Resilient, harmonized king safety"
  ],
  "pawnStructureInfo": "The c3-d4-e3 granite pyramid leaves White with zero structural weaknesses, allowing piece maneuvering without fear of central collapse.",
  "famousGame": {
    "white": "Magnus Carlsen",
    "black": "Ding Liren",
    "year": 2019,
    "event": "Sinquefield Cup (Saint Louis)",
    "result": "1-0",
    "description": "Carlsen demonstrated how the modern London System can be used as a potent attacking weapon against the world's elite, utilizing the e5 outpost to launch a crushing kingside attack.",
    "keyMomentFen": "r1bq1rk1/pp1nbppp/4pn2/2ppN3/3P1B2/2P1P3/PP1NBPPP/R2QK2R b KQ - 3 8"
  },
  "variations": [
      {
        "id": "london-pillsbury-attack",
        "openingId": "london-system",
        "name": "Mainline Classical Pyramid - Pillsbury Kingside Attack (Ne5 & f4!)",
        "eco": "D02",
        "description": "The ultimate aggressive formation in the London System! White builds the solid c3-d4-e3 pyramid, anchors a monstrous knight on e5, and charges with f4 and Qf3 for a kingside knockout.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "lon-pills-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4 Queen's pawn.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Black matches center.",
            "whyThisMove": "Direct defense.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-3",
            "san": "Bf4",
            "from": "c1",
            "to": "f4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "THE LONDON SYSTEM! White develops the dark-squared bishop outside the pawn chain.",
            "whyThisMove": "Active bishop before playing e3.",
            "isBookMove": true,
            "keySquares": [
              "f4"
            ]
          },
          {
            "id": "lon-pills-4",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq - 2 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-5",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/4P3/PPP2PPP/RN1QKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White solidifies the center.",
            "whyThisMove": "Builds pawn chain.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-6",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkb1r/pp2pppp/5n2/2pp4/3P1B2/4P3/PPP2PPP/RN1QKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black strikes at d4.",
            "whyThisMove": "Challenges White's center.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-7",
            "san": "c3",
            "from": "c2",
            "to": "c3",
            "fen": "rnbqkb1r/pp2pppp/5n2/2pp4/3P1B2/2P1P3/PP3PPP/RN1QKBNR b KQkq - 0 4",
            "turn": "w",
            "ply": 7,
            "annotation": "The famous London Pyramid! White creates the unbreakable c3-d4-e3 chain.",
            "whyThisMove": "Fortified center.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-8",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1B2/2P1P3/PP3PPP/RN1QKBNR w KQkq - 1 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black develops knight.",
            "whyThisMove": "Pressure on d4.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-9",
            "san": "Nd2",
            "from": "b1",
            "to": "d2",
            "fen": "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1B2/2P1P3/PP1N1PPP/R2QKBNR b KQkq - 2 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White coordinates knights.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-10",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "r1bqkb1r/pp3ppp/2n1pn2/2pp4/3P1B2/2P1P3/PP1N1PPP/R2QKBNR w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black prepares bishop development.",
            "whyThisMove": "Frees f8 bishop.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-11",
            "san": "Ngf3",
            "from": "g1",
            "to": "f3",
            "fen": "r1bqkb1r/pp3ppp/2n1pn2/2pp4/3P1B2/2P1PN2/PP1N1PPP/R2QKB1R b KQkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White develops remaining knight.",
            "whyThisMove": "Piece development.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-12",
            "san": "Bd6",
            "from": "f8",
            "to": "d6",
            "fen": "r1bqk2r/pp3ppp/2nbpn2/2pp4/3P1B2/2P1PN2/PP1N1PPP/R2QKB1R w KQkq - 2 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black challenges White's bishop on f4.",
            "whyThisMove": "Offers bishop trade.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-13",
            "san": "Bg3",
            "from": "f4",
            "to": "g3",
            "fen": "r1bqk2r/pp3ppp/2nbpn2/2pp4/3P4/2P1PNB1/PP1N1PPP/R2QKB1R b KQkq - 3 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White drops the bishop back, welcoming an open h-file if taken.",
            "whyThisMove": "Preserves bishop.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-14",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/2P1PNB1/PP1N1PPP/R2QKB1R w KQ - 4 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-15",
            "san": "Bd3",
            "from": "f1",
            "to": "d3",
            "fen": "r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/2PBPNB1/PP1N1PPP/R2QK2R b KQ - 5 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White points the bishop directly at Black's kingside (h7).",
            "whyThisMove": "Aims at h7.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-16",
            "san": "b6",
            "from": "b7",
            "to": "b6",
            "fen": "r1bq1rk1/p4ppp/1pnbpn2/2pp4/3P4/2PBPNB1/PP1N1PPP/R2QK2R w KQ - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black prepares queenside fianchetto.",
            "whyThisMove": "Prepares Bb7.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-17",
            "san": "Ne5",
            "from": "f3",
            "to": "e5",
            "fen": "r1bq1rk1/p4ppp/1pnbpn2/2ppN3/3P4/2PBP1B1/PP1N1PPP/R2QK2R b KQ - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "9.Ne5!! THE PILLSBURY KNIGHT! White anchors a monster piece in the heart of Black's camp!",
            "whyThisMove": "Dominates e5 and prepares the kingside attack.",
            "isBookMove": true,
            "arrows": [
              [
                "f3",
                "e5",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "lon-pills-18",
            "san": "Bb7",
            "from": "c8",
            "to": "b7",
            "fen": "r2q1rk1/pb3ppp/1pnbpn2/2ppN3/3P4/2PBP1B1/PP1N1PPP/R2QK2R w KQ - 2 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Guards d5.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-19",
            "san": "f4",
            "from": "f2",
            "to": "f4",
            "fen": "r2q1rk1/pb3ppp/1pnbpn2/2ppN3/3P1P2/2PBP1B1/PP1N2PP/R2QK2R b KQ - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "10.f4!! The Stonewall / Pillsbury clamp! The e5 knight is cemented forever!",
            "whyThisMove": "Locks e5 and prepares kingside pawn rush.",
            "isBookMove": true,
            "arrows": [
              [
                "f4",
                "e5",
                "rgba(34, 197, 94, 0.9)"
              ]
            ]
          },
          {
            "id": "lon-pills-20",
            "san": "Ne7",
            "from": "c6",
            "to": "e7",
            "fen": "r2q1rk1/pb2nppp/1p1bpn2/2ppN3/3P1P2/2PBP1B1/PP1N2PP/R2QK2R w KQ - 1 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black tries to redirect knight to f5.",
            "whyThisMove": "Knight transfer.",
            "isBookMove": true
          },
          {
            "id": "lon-pills-21",
            "san": "Qf3",
            "from": "d1",
            "to": "f3",
            "fen": "r2q1rk1/pb2nppp/1p1bpn2/2ppN3/3P1P2/2PBPQB1/PP1N2PP/R3K2R b KQ - 2 11",
            "turn": "w",
            "ply": 21,
            "annotation": "11.Qf3! White brings the queen into the attacking battery! Lethal kingside sacrifices are primed!",
            "whyThisMove": "Coordinates queen for the final kingside assault.",
            "isBookMove": true,
            "arrows": [
              [
                "f3",
                "h3",
                "rgba(239, 68, 68, 0.9)"
              ],
              [
                "f3",
                "h7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "london-anti-london-counter",
        "openingId": "london-system",
        "name": "Anti-London Counter - Queen Infiltration & Defense (3...Qb6 & 4.Nc3)",
        "eco": "D02",
        "description": "Black challenges the early bishop move by targeting the undefended b2 pawn with 3...Qb6. White plays 4.Nc3! and 6.Rb1, maintaining superior central activity.",
        "difficulty": "intermediate",
        "moves": [
          {
            "id": "lon-anti-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-2",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...d5.",
            "whyThisMove": "Central defense.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-3",
            "san": "Bf4",
            "from": "c1",
            "to": "f4",
            "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
            "turn": "w",
            "ply": 3,
            "annotation": "London System.",
            "whyThisMove": "Develops bishop.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-4",
            "san": "c5",
            "from": "c7",
            "to": "c5",
            "fen": "rnbqkbnr/pp2pppp/8/2pp4/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Black immediately challenges d4.",
            "whyThisMove": "Strikes at d4.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-5",
            "san": "e3",
            "from": "e2",
            "to": "e3",
            "fen": "rnbqkbnr/pp2pppp/8/2pp4/3P1B2/4P3/PPP2PPP/RN1QKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "White reinforces d4.",
            "whyThisMove": "Pawn chain.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-6",
            "san": "Qb6",
            "from": "d8",
            "to": "b6",
            "fen": "rnb1kbnr/pp2pppp/1q6/2pp4/3P1B2/4P3/PPP2PPP/RN1QKBNR w KQkq - 1 4",
            "turn": "b",
            "ply": 6,
            "annotation": "THE ANTI-LONDON TEST! Black targets the unprotected b2 pawn!",
            "whyThisMove": "Attacks b2.",
            "isBookMove": true,
            "arrows": [
              [
                "b6",
                "b2",
                "rgba(249, 115, 22, 0.9)"
              ]
            ]
          },
          {
            "id": "lon-anti-7",
            "san": "Nc3",
            "from": "b1",
            "to": "c3",
            "fen": "rnb1kbnr/pp2pppp/1q6/2pp4/3P1B2/2N1P3/PPP2PPP/R2QKBNR b KQkq - 2 4",
            "turn": "w",
            "ply": 7,
            "annotation": "4.Nc3! White develops with a counter-threat on d5 and b5!",
            "whyThisMove": "Active piece defense.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-8",
            "san": "cxd4",
            "from": "c5",
            "to": "d4",
            "fen": "rnb1kbnr/pp2pppp/1q6/3p4/3p1B2/2N1P3/PPP2PPP/R2QKBNR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Black captures the central pawn.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-9",
            "san": "exd4",
            "from": "e3",
            "to": "d4",
            "fen": "rnb1kbnr/pp2pppp/1q6/3p4/3P1B2/2N5/PPP2PPP/R2QKBNR b KQkq - 0 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White recaptures.",
            "whyThisMove": "Maintains d4 pawn.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-10",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "rnb1kbnr/1p2pppp/pq6/3p4/3P1B2/2N5/PPP2PPP/R2QKBNR w KQkq - 0 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black stops Nb5 tricks.",
            "whyThisMove": "Prevents knight fork on c7.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-11",
            "san": "Rb1",
            "from": "a1",
            "to": "b1",
            "fen": "rnb1kbnr/1p2pppp/pq6/3p4/3P1B2/2N5/PPP2PPP/1R1QKBNR b Kkq - 1 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White defends b2 solidly with the rook.",
            "whyThisMove": "Guards b2.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-12",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnb1kbnr/1p3ppp/pq2p3/3p4/3P1B2/2N5/PPP2PPP/1R1QKBNR w Kkq - 0 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black solidifies the center.",
            "whyThisMove": "Pawn chain.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-13",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnb1kbnr/1p3ppp/pq2p3/3p4/3P1B2/2N2N2/PPP2PPP/1R1QKB1R b Kkq - 1 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White develops knight.",
            "whyThisMove": "Controls e5.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-14",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnb1kb1r/1p3ppp/pq2pn2/3p4/3P1B2/2N2N2/PPP2PPP/1R1QKB1R w Kkq - 2 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black develops knight.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-15",
            "san": "Bd3",
            "from": "f1",
            "to": "d3",
            "fen": "rnb1kb1r/1p3ppp/pq2pn2/3p4/3P1B2/2NB1N2/PPP2PPP/1R1QK2R b Kkq - 3 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White aims toward the kingside.",
            "whyThisMove": "Aims at h7.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-16",
            "san": "Nc6",
            "from": "b8",
            "to": "c6",
            "fen": "r1b1kb1r/1p3ppp/pqn1pn2/3p4/3P1B2/2NB1N2/PPP2PPP/1R1QK2R w Kkq - 4 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black adds pressure to d4.",
            "whyThisMove": "Pressure on d4.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-17",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "r1b1kb1r/1p3ppp/pqn1pn2/3p4/3P1B2/2NB1N2/PPP2PPP/1R1Q1RK1 b kq - 5 9",
            "turn": "w",
            "ply": 17,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-18",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "r1b1k2r/1p2bppp/pqn1pn2/3p4/3P1B2/2NB1N2/PPP2PPP/1R1Q1RK1 w kq - 6 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-19",
            "san": "Re1",
            "from": "f1",
            "to": "e1",
            "fen": "r1b1k2r/1p2bppp/pqn1pn2/3p4/3P1B2/2NB1N2/PPP2PPP/1R1QR1K1 b kq - 7 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White seizes the e-file.",
            "whyThisMove": "Rook centralization.",
            "isBookMove": true
          },
          {
            "id": "lon-anti-20",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "r1b2rk1/1p2bppp/pqn1pn2/3p4/3P1B2/2NB1N2/PPP2PPP/1R1QR1K1 w - - 8 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black castles. White has full central command and an active initiative!",
            "whyThisMove": "King safety.",
            "isBookMove": true
          }
        ]
      }
    ]
},
  // ==========================================
  // CATALAN OPENING
  // ==========================================
  {
  "id": "catalan-opening",
  "slug": "catalan-opening",
  "name": "Catalan Opening",
  "eco": "E06",
  "category": "classical",
  "side": "white",
  "difficulty": "advanced",
  "summary": "A sophisticated grandmaster weapon. Combines Queen's Gambit central control with a Catalan bishop on g2 that breathes fire down the board.",
  "philosophy": "The Catalan (1.d4 Nf6 2.c4 e6 3.g3 d5 4.Bg2) combines classical central pressure (c4 and d4) with the hypermodern fianchetto of the light-squared bishop on g2. The Catalan bishop breathes fire down the h1-a8 diagonal, constantly probing Black's queenside and b7 square.",
  "keyThemes": [
    "The Catalan bishop on g2 dominating the h1-a8 diagonal",
    "Regaining the c4 pawn with Qc2, a4, or Ne5",
    "Suffocating queenside pressure against b7 and c6",
    "Flexible transition between open tactical lines and deep endgame squeezes"
  ],
  "pawnStructureInfo": "If Black plays ...dxc4, White uses superior central coordination to regain the pawn or sacrifice it permanently for overwhelming open-diagonal control.",
  "famousGame": {
    "white": "Vladimir Kramnik",
    "black": "Viswanathan Anand",
    "year": 2007,
    "event": "World Championship Tournament (Mexico City)",
    "result": "1/2-1/2",
    "description": "Kramnik, the modern godfather of the Catalan, applied masterclass diagonal pressure that shaped top-level grandmaster understanding of the opening for decades.",
    "keyMomentFen": "rn1q1rk1/1bp1bppp/p3pn2/1p6/2pPP3/5NP1/PPQN1PBP/R1B2RK1 w - - 1 11"
  },
  "variations": [
      {
        "id": "catalan-open-mainline",
        "openingId": "catalan-opening",
        "name": "Open Catalan Mainline - Kramnik Masterclass (6...dxc4 & 12.Bf4!)",
        "eco": "E06",
        "description": "The favorite weapon of Vladimir Kramnik and Magnus Carlsen. White fianchettoes the Catalan bishop on g2. Black takes on c4, and White regains the pawn with complete board control.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "cat-open-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4 Queen's pawn.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "cat-open-2",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
            "turn": "b",
            "ply": 2,
            "annotation": "Indian setup.",
            "whyThisMove": "Controls e4.",
            "isBookMove": true
          },
          {
            "id": "cat-open-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "Space grab.",
            "whyThisMove": "Queen's gambit space.",
            "isBookMove": true
          },
          {
            "id": "cat-open-4",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "Frees dark-squared bishop.",
            "whyThisMove": "Prepares d5.",
            "isBookMove": true
          },
          {
            "id": "cat-open-5",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "THE CATALAN OPENING! White prepares to fianchetto the bishop on g2.",
            "whyThisMove": "Aims the bishop at Black's queenside down the long diagonal.",
            "isBookMove": true,
            "keySquares": [
              "g2"
            ]
          },
          {
            "id": "cat-open-6",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black claims central space.",
            "whyThisMove": "Center challenge.",
            "isBookMove": true
          },
          {
            "id": "cat-open-7",
            "san": "Bg2",
            "from": "f1",
            "to": "g2",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "THE CATALAN BISHOP! The pride of White's position, raking the long diagonal.",
            "whyThisMove": "Monstrous pressure on a8-h1.",
            "isBookMove": true,
            "arrows": [
              [
                "g2",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "cat-open-8",
            "san": "dxc4",
            "from": "d5",
            "to": "c4",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "The Open Catalan! Black captures the pawn to challenge White's compensation.",
            "whyThisMove": "Takes pawn.",
            "isBookMove": true
          },
          {
            "id": "cat-open-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R b KQkq - 1 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White develops knight.",
            "whyThisMove": "Controls e5.",
            "isBookMove": true
          },
          {
            "id": "cat-open-10",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "rnbqk2r/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R w KQkq - 2 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "cat-open-11",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rnbqk2r/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 b kq - 3 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "cat-open-12",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnbq1rk1/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 4 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "cat-open-13",
            "san": "Qc2",
            "from": "d1",
            "to": "c2",
            "fen": "rnbq1rk1/ppp1bppp/4pn2/8/2pP4/5NP1/PPQ1PPBP/RNB2RK1 b - - 5 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White's queen targets the c4 pawn and connects rooks.",
            "whyThisMove": "Prepares Qxc4.",
            "isBookMove": true
          },
          {
            "id": "cat-open-14",
            "san": "a6",
            "from": "a7",
            "to": "a6",
            "fen": "rnbq1rk1/1pp1bppp/p3pn2/8/2pP4/5NP1/PPQ1PPBP/RNB2RK1 w - - 0 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black prepares ...b5 to expand.",
            "whyThisMove": "Prepares queenside counterplay.",
            "isBookMove": true
          },
          {
            "id": "cat-open-15",
            "san": "Qxc4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbq1rk1/1pp1bppp/p3pn2/8/2QP4/5NP1/PP2PPBP/RNB2RK1 b - - 0 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White regains the pawn with an active queen.",
            "whyThisMove": "Reclaims material.",
            "isBookMove": true
          },
          {
            "id": "cat-open-16",
            "san": "b5",
            "from": "b7",
            "to": "b5",
            "fen": "rnbq1rk1/2p1bppp/p3pn2/1p6/2QP4/5NP1/PP2PPBP/RNB2RK1 w - - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black kicks the queen.",
            "whyThisMove": "Queenside space.",
            "isBookMove": true
          },
          {
            "id": "cat-open-17",
            "san": "Qc2",
            "from": "c4",
            "to": "c2",
            "fen": "rnbq1rk1/2p1bppp/p3pn2/1p6/3P4/5NP1/PPQ1PPBP/RNB2RK1 b - - 1 9",
            "turn": "w",
            "ply": 17,
            "annotation": "Queen steps back safely.",
            "whyThisMove": "Maintains c-file contact.",
            "isBookMove": true
          },
          {
            "id": "cat-open-18",
            "san": "Bb7",
            "from": "c8",
            "to": "b7",
            "fen": "rn1q1rk1/1bp1bppp/p3pn2/1p6/3P4/5NP1/PPQ1PPBP/RNB2RK1 w - - 2 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Long diagonal.",
            "isBookMove": true
          },
          {
            "id": "cat-open-19",
            "san": "Bd2",
            "from": "c1",
            "to": "d2",
            "fen": "rn1q1rk1/1bp1bppp/p3pn2/1p6/3P4/5NP1/PPQBPPBP/RN3RK1 b - - 3 10",
            "turn": "w",
            "ply": 19,
            "annotation": "White prepares to contest the long diagonal.",
            "whyThisMove": "Frees c1.",
            "isBookMove": true
          },
          {
            "id": "cat-open-20",
            "san": "Be4",
            "from": "b7",
            "to": "e4",
            "fen": "rn1q1rk1/2p1bppp/p3pn2/1p6/3Pb3/5NP1/PPQBPPBP/RN3RK1 w - - 4 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black bishop invades e4.",
            "whyThisMove": "Attacks queen.",
            "isBookMove": true
          },
          {
            "id": "cat-open-21",
            "san": "Qc1",
            "from": "c2",
            "to": "c1",
            "fen": "rn1q1rk1/2p1bppp/p3pn2/1p6/3Pb3/5NP1/PP1BPPBP/RNQ2RK1 b - - 5 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White queen steps to c1.",
            "whyThisMove": "Saves queen.",
            "isBookMove": true
          },
          {
            "id": "cat-open-22",
            "san": "Bb7",
            "from": "e4",
            "to": "b7",
            "fen": "rn1q1rk1/1bp1bppp/p3pn2/1p6/3P4/5NP1/PP1BPPBP/RNQ2RK1 w - - 6 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black bishop steps back.",
            "whyThisMove": "Maintains position.",
            "isBookMove": true
          },
          {
            "id": "cat-open-23",
            "san": "Bf4",
            "from": "d2",
            "to": "f4",
            "fen": "rn1q1rk1/1bp1bppp/p3pn2/1p6/3P1B2/5NP1/PP2PPBP/RNQ2RK1 b - - 7 12",
            "turn": "w",
            "ply": 23,
            "annotation": "12.Bf4!! White attacks the weak c7 pawn! White's Catalan bishop and heavy pieces completely dominate the board!",
            "whyThisMove": "Exploits the c-file weakness.",
            "isBookMove": true,
            "arrows": [
              [
                "f4",
                "c7",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          }
        ]
      },
      {
        "id": "catalan-closed-squeeze",
        "openingId": "catalan-opening",
        "name": "Closed Catalan - Central Clamp & Kingside Breakthrough (10.e5!)",
        "eco": "E06",
        "description": "Black declines to capture on c4, creating a solid pawn barrier with 4...c6. White builds an unstoppable central wedge with 9.e4! and 10.e5!, locking Black in a strategic vise.",
        "difficulty": "advanced",
        "moves": [
          {
            "id": "cat-close-1",
            "san": "d4",
            "from": "d2",
            "to": "d4",
            "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            "turn": "w",
            "ply": 1,
            "annotation": "1.d4.",
            "whyThisMove": "Center stake.",
            "isBookMove": true
          },
          {
            "id": "cat-close-2",
            "san": "Nf6",
            "from": "g8",
            "to": "f6",
            "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
            "turn": "b",
            "ply": 2,
            "annotation": "1...Nf6.",
            "whyThisMove": "Knight development.",
            "isBookMove": true
          },
          {
            "id": "cat-close-3",
            "san": "c4",
            "from": "c2",
            "to": "c4",
            "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            "turn": "w",
            "ply": 3,
            "annotation": "2.c4.",
            "whyThisMove": "Space grab.",
            "isBookMove": true
          },
          {
            "id": "cat-close-4",
            "san": "e6",
            "from": "e7",
            "to": "e6",
            "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            "turn": "b",
            "ply": 4,
            "annotation": "2...e6.",
            "whyThisMove": "Prepares d5.",
            "isBookMove": true
          },
          {
            "id": "cat-close-5",
            "san": "g3",
            "from": "g2",
            "to": "g3",
            "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
            "turn": "w",
            "ply": 5,
            "annotation": "Catalan setup.",
            "whyThisMove": "Prepares Bg2.",
            "isBookMove": true
          },
          {
            "id": "cat-close-6",
            "san": "d5",
            "from": "d7",
            "to": "d5",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq - 0 4",
            "turn": "b",
            "ply": 6,
            "annotation": "Black plays d5.",
            "whyThisMove": "Center match.",
            "isBookMove": true
          },
          {
            "id": "cat-close-7",
            "san": "Bg2",
            "from": "f1",
            "to": "g2",
            "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq - 1 4",
            "turn": "w",
            "ply": 7,
            "annotation": "Catalan bishop on the long diagonal.",
            "whyThisMove": "Raking diagonal.",
            "isBookMove": true
          },
          {
            "id": "cat-close-8",
            "san": "c6",
            "from": "c7",
            "to": "c6",
            "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 0 5",
            "turn": "b",
            "ply": 8,
            "annotation": "Closed Catalan. Black cements the center with a pawn triangle.",
            "whyThisMove": "Fortifies d5.",
            "isBookMove": true
          },
          {
            "id": "cat-close-9",
            "san": "Nf3",
            "from": "g1",
            "to": "f3",
            "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq - 1 5",
            "turn": "w",
            "ply": 9,
            "annotation": "White develops knight.",
            "whyThisMove": "Controls e5.",
            "isBookMove": true
          },
          {
            "id": "cat-close-10",
            "san": "Be7",
            "from": "f8",
            "to": "e7",
            "fen": "rnbqk2r/pp2bppp/2p1pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq - 2 6",
            "turn": "b",
            "ply": 10,
            "annotation": "Black prepares castling.",
            "whyThisMove": "Bishop development.",
            "isBookMove": true
          },
          {
            "id": "cat-close-11",
            "san": "O-O",
            "from": "e1",
            "to": "g1",
            "fen": "rnbqk2r/pp2bppp/2p1pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b kq - 3 6",
            "turn": "w",
            "ply": 11,
            "annotation": "White castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "cat-close-12",
            "san": "O-O",
            "from": "e8",
            "to": "g8",
            "fen": "rnbq1rk1/pp2bppp/2p1pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 4 7",
            "turn": "b",
            "ply": 12,
            "annotation": "Black castles.",
            "whyThisMove": "King safety.",
            "isBookMove": true
          },
          {
            "id": "cat-close-13",
            "san": "Qc2",
            "from": "d1",
            "to": "c2",
            "fen": "rnbq1rk1/pp2bppp/2p1pn2/3p4/2PP4/5NP1/PPQ1PPBP/RNB2RK1 b - - 5 7",
            "turn": "w",
            "ply": 13,
            "annotation": "White coordinates queen and prepares e4.",
            "whyThisMove": "Prepares e4.",
            "isBookMove": true
          },
          {
            "id": "cat-close-14",
            "san": "Nbd7",
            "from": "b8",
            "to": "d7",
            "fen": "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/5NP1/PPQ1PPBP/RNB2RK1 w - - 6 8",
            "turn": "b",
            "ply": 14,
            "annotation": "Black connects knights.",
            "whyThisMove": "Guards e5.",
            "isBookMove": true
          },
          {
            "id": "cat-close-15",
            "san": "Nbd2",
            "from": "b1",
            "to": "d2",
            "fen": "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 b - - 7 8",
            "turn": "w",
            "ply": 15,
            "annotation": "White prepares the central pawn advance.",
            "whyThisMove": "Supports e4.",
            "isBookMove": true
          },
          {
            "id": "cat-close-16",
            "san": "b6",
            "from": "b7",
            "to": "b6",
            "fen": "r1bq1rk1/p2nbppp/1pp1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 w - - 0 9",
            "turn": "b",
            "ply": 16,
            "annotation": "Black prepares ...Bb7.",
            "whyThisMove": "Prepares fianchetto.",
            "isBookMove": true
          },
          {
            "id": "cat-close-17",
            "san": "e4",
            "from": "e2",
            "to": "e4",
            "fen": "r1bq1rk1/p2nbppp/1pp1pn2/3p4/2PPP3/5NP1/PPQN1PBP/R1B2RK1 b - - 0 9",
            "turn": "w",
            "ply": 17,
            "annotation": "9.e4! White blasts open the center!",
            "whyThisMove": "Central breakthrough.",
            "isBookMove": true,
            "arrows": [
              [
                "e4",
                "d5",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          },
          {
            "id": "cat-close-18",
            "san": "Bb7",
            "from": "c8",
            "to": "b7",
            "fen": "r2q1rk1/pb1nbppp/1pp1pn2/3p4/2PPP3/5NP1/PPQN1PBP/R1B2RK1 w - - 1 10",
            "turn": "b",
            "ply": 18,
            "annotation": "Black develops bishop.",
            "whyThisMove": "Long diagonal.",
            "isBookMove": true
          },
          {
            "id": "cat-close-19",
            "san": "e5",
            "from": "e4",
            "to": "e5",
            "fen": "r2q1rk1/pb1nbppp/1pp1pn2/3pP3/2PP4/5NP1/PPQN1PBP/R1B2RK1 b - - 0 10",
            "turn": "w",
            "ply": 19,
            "annotation": "10.e5!! White locks Black's knight away from the kingside!",
            "whyThisMove": "Kicks the key defender of Black's king.",
            "isBookMove": true,
            "arrows": [
              [
                "e5",
                "f6",
                "rgba(239, 68, 68, 0.9)"
              ]
            ]
          },
          {
            "id": "cat-close-20",
            "san": "Ne8",
            "from": "f6",
            "to": "e8",
            "fen": "r2qnrk1/pb1nbppp/1pp1p3/3pP3/2PP4/5NP1/PPQN1PBP/R1B2RK1 w - - 1 11",
            "turn": "b",
            "ply": 20,
            "annotation": "Black knight is forced to retreat to e8.",
            "whyThisMove": "Only retreat.",
            "isBookMove": true
          },
          {
            "id": "cat-close-21",
            "san": "cxd5",
            "from": "c4",
            "to": "d5",
            "fen": "r2qnrk1/pb1nbppp/1pp1p3/3PP3/3P4/5NP1/PPQN1PBP/R1B2RK1 b - - 0 11",
            "turn": "w",
            "ply": 21,
            "annotation": "White opens the c-file.",
            "whyThisMove": "Pawn trade.",
            "isBookMove": true
          },
          {
            "id": "cat-close-22",
            "san": "cxd5",
            "from": "c6",
            "to": "d5",
            "fen": "r2qnrk1/pb1nbppp/1p2p3/3pP3/3P4/5NP1/PPQN1PBP/R1B2RK1 w - - 0 12",
            "turn": "b",
            "ply": 22,
            "annotation": "Black recaptures.",
            "whyThisMove": "Pawn balance.",
            "isBookMove": true
          },
          {
            "id": "cat-close-23",
            "san": "Re1",
            "from": "f1",
            "to": "e1",
            "fen": "r2qnrk1/pb1nbppp/1p2p3/3pP3/3P4/5NP1/PPQN1PBP/R1B1R1K1 b - - 1 12",
            "turn": "w",
            "ply": 23,
            "annotation": "12.Re1! White controls the e-file and commands total spatial superiority across the board!",
            "whyThisMove": "Rook centralization and overwhelming bind.",
            "isBookMove": true,
            "arrows": [
              [
                "e1",
                "e8",
                "rgba(239, 68, 68, 0.8)"
              ]
            ]
          }
        ]
      }
    ]
}
];
