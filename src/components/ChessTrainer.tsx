'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  RotateCcw,
  Lightbulb,
  Volume2,
  VolumeX,
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
  Swords,
  Shield,
  Layers,
  Flame,
  History,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ListOrdered
} from 'lucide-react';
import { Opening, Variation, MoveNode } from '../types/chess';
import { soundManager } from '../utils/sound';

interface ChessTrainerProps {
  initialOpening: Opening;
  allOpenings?: Opening[];
}

export default function ChessTrainer({ initialOpening }: ChessTrainerProps) {
  const [mounted, setMounted] = useState(false);
  const selectedOpening = initialOpening;
  const [selectedVariation, setSelectedVariation] = useState<Variation>(initialOpening.variations[0]);
  
  // Game state
  const [game, setGame] = useState<Chess>(new Chess());
  const [gameFen, setGameFen] = useState<string>('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1');
  const [currentPlyIndex, setCurrentPlyIndex] = useState<number>(0);
  const [inspectedPlyIndex, setInspectedPlyIndex] = useState<number | null>(null);
  const [historyViewMode, setHistoryViewMode] = useState<'timeline' | 'focus'>('timeline');
  const historyContainerRef = useRef<HTMLDivElement>(null);
  const [boardOrientation, setBoardOrientation] = useState<'white' | 'black'>(selectedOpening.side);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  
  // Feedback & UI State
  const [feedback, setFeedback] = useState<{
    status: 'idle' | 'correct' | 'incorrect' | 'hint' | 'complete';
    message: string;
  }>({
    status: 'idle',
    message: 'Play the first book move to begin training.'
  });
  const [shakeBoard, setShakeBoard] = useState(false);
  const [showHintArrow, setShowHintArrow] = useState(false);
  const [masteredVariations, setMasteredVariations] = useState<Record<string, boolean>>({});

  // Ensure client-side only mount for react-chessboard
  useEffect(() => {
    setMounted(true);
    // Load local storage mastery records
    try {
      const saved = localStorage.getItem('sac_mastery') || localStorage.getItem('gambitlab_mastery');
      if (saved) {
        setMasteredVariations(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Initialize line when variation changes
  const resetLine = useCallback((variation: Variation) => {
    const newGame = new Chess();
    setGame(newGame);
    setGameFen(newGame.fen());
    setCurrentPlyIndex(0);
    setInspectedPlyIndex(null);
    setShowHintArrow(false);
    setFeedback({
      status: 'idle',
      message: `Training ${variation.name}. Play the book move!`
    });
  }, []);

  useEffect(() => {
    resetLine(selectedVariation);
  }, [selectedVariation, resetLine]);

  // Synchronize inspected move when new moves are played
  useEffect(() => {
    if (currentPlyIndex > 0) {
      setInspectedPlyIndex(currentPlyIndex - 1);
      // Ensure all-moves timeline is active so user sees full move history
      setHistoryViewMode('timeline');
      // Smoothly scroll to the latest move
      setTimeout(() => {
        if (historyContainerRef.current) {
          historyContainerRef.current.scrollTo({
            top: historyContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 60);
    } else {
      setInspectedPlyIndex(null);
    }
  }, [currentPlyIndex]);

  const currentExpectedMove: MoveNode | undefined = selectedVariation.moves[currentPlyIndex];
  const lastPlayedMove: MoveNode | undefined = currentPlyIndex > 0 ? selectedVariation.moves[currentPlyIndex - 1] : undefined;
  const isLineComplete = currentPlyIndex >= selectedVariation.moves.length;

  // Moves completed so far in this session
  const playedMoves = useMemo(() => {
    return selectedVariation.moves.slice(0, currentPlyIndex);
  }, [selectedVariation, currentPlyIndex]);

  // Group moves into standard chess full-move pairs (1. White Black, 2. White Black...)
  const movePairs = useMemo(() => {
    const pairs: Array<{
      moveNumber: number;
      white?: MoveNode;
      whitePlyIndex?: number;
      black?: MoveNode;
      blackPlyIndex?: number;
    }> = [];

    for (let i = 0; i < currentPlyIndex; i += 2) {
      pairs.push({
        moveNumber: Math.floor(i / 2) + 1,
        white: selectedVariation.moves[i],
        whitePlyIndex: i,
        black: i + 1 < currentPlyIndex ? selectedVariation.moves[i + 1] : undefined,
        blackPlyIndex: i + 1 < currentPlyIndex ? i + 1 : undefined,
      });
    }
    return pairs;
  }, [currentPlyIndex, selectedVariation]);

  // The active move being inspected in annotations / board
  const inspectedMove: MoveNode | undefined = 
    inspectedPlyIndex !== null && inspectedPlyIndex >= 0 && inspectedPlyIndex < selectedVariation.moves.length
      ? selectedVariation.moves[inspectedPlyIndex]
      : lastPlayedMove;

  const isInspectingPast = inspectedPlyIndex !== null && inspectedPlyIndex < currentPlyIndex - 1;

  // Board FEN (shows past move position if clicked, else live board FEN)
  const displayedFen = useMemo(() => {
    if (isInspectingPast && inspectedPlyIndex !== null) {
      const tempGame = new Chess();
      for (let i = 0; i <= inspectedPlyIndex; i++) {
        const m = selectedVariation.moves[i];
        tempGame.move({ from: m.from, to: m.to, promotion: m.promotion || 'q' });
      }
      return tempGame.fen();
    }
    return gameFen;
  }, [isInspectingPast, inspectedPlyIndex, gameFen, selectedVariation]);

  // Navigation handlers
  const handlePrevMove = () => {
    if (inspectedPlyIndex === null || inspectedPlyIndex <= 0) return;
    setInspectedPlyIndex(inspectedPlyIndex - 1);
  };

  const handleNextMove = () => {
    if (inspectedPlyIndex === null || inspectedPlyIndex >= currentPlyIndex - 1) return;
    setInspectedPlyIndex(inspectedPlyIndex + 1);
  };

  const handleFirstMove = () => {
    if (currentPlyIndex > 0) {
      setInspectedPlyIndex(0);
    }
  };

  const handleLatestMove = () => {
    if (currentPlyIndex > 0) {
      setInspectedPlyIndex(currentPlyIndex - 1);
    }
  };

  // Visual cues (arrows & highlighted squares)
  const customSquareStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};

    // Highlight key squares of the inspected move or current expected move
    const activeNode = inspectedMove || currentExpectedMove;
    if (activeNode?.keySquares) {
      activeNode.keySquares.forEach((sq) => {
        styles[sq] = {
          backgroundColor: 'rgba(59, 130, 246, 0.35)',
          borderRadius: '4px'
        };
      });
    }

    // Feedback highlight on target square
    if (feedback.status === 'correct' && lastPlayedMove && !isInspectingPast) {
      styles[lastPlayedMove.to] = {
        backgroundColor: 'rgba(34, 197, 94, 0.55)',
        boxShadow: 'inset 0 0 10px rgba(34, 197, 94, 0.8)'
      };
    } else if (feedback.status === 'hint' && currentExpectedMove && !isInspectingPast) {
      styles[currentExpectedMove.from] = {
        backgroundColor: 'rgba(234, 179, 8, 0.5)',
        boxShadow: 'inset 0 0 8px rgba(234, 179, 8, 0.8)'
      };
      styles[currentExpectedMove.to] = {
        backgroundColor: 'rgba(234, 179, 8, 0.35)'
      };
    }

    return styles;
  }, [currentExpectedMove, lastPlayedMove, inspectedMove, feedback, isInspectingPast]);

  const customArrows = useMemo(() => {
    const arrows: Array<{ startSquare: string; endSquare: string; color: string }> = [];

    // Hint arrow if user asked for a hint and not inspecting past
    if (showHintArrow && currentExpectedMove && !isInspectingPast) {
      arrows.push({
        startSquare: currentExpectedMove.from,
        endSquare: currentExpectedMove.to,
        color: 'rgba(234, 179, 8, 0.9)'
      });
    } else if (feedback.status !== 'incorrect') {
      // Instructional pedagogical arrows defined on the active node
      const activeNode = inspectedMove || currentExpectedMove;
      if (activeNode?.arrows) {
        activeNode.arrows.forEach(([from, to, color]) => {
          arrows.push({
            startSquare: from,
            endSquare: to,
            color: color || 'rgba(59, 130, 246, 0.75)'
          });
        });
      }
    }

    return arrows;
  }, [showHintArrow, currentExpectedMove, inspectedMove, feedback, isInspectingPast]);

  const handleLineMastered = useCallback(() => {
    setFeedback({
      status: 'complete',
      message: `Mastered! You completed the ${selectedVariation.name}!`
    });
    soundManager.playComplete();
    
    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    // Save mastery to localStorage
    setMasteredVariations((prev) => {
      const updated = { ...prev, [selectedVariation.id]: true };
      try {
        localStorage.setItem('sac_mastery', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, [selectedVariation]);

  // Handle bot reply after player move
  const triggerOpponentReply = useCallback((nextPly: number) => {
    if (nextPly >= selectedVariation.moves.length) {
      return;
    }
    const botMoveNode = selectedVariation.moves[nextPly];
    if (botMoveNode) {
      setTimeout(() => {
        setGame((prevGame) => {
          const gameClone = new Chess(prevGame.fen());
          try {
            const result = gameClone.move({
              from: botMoveNode.from,
              to: botMoveNode.to,
              promotion: botMoveNode.promotion || 'q'
            });

            if (result) {
              setGameFen(gameClone.fen());
              setCurrentPlyIndex(nextPly + 1);
              setShowHintArrow(false);
              
              if (result.captured) {
                soundManager.playCapture();
              } else {
                soundManager.playMove();
              }

              // Check if that concluded the line
              if (nextPly + 1 >= selectedVariation.moves.length) {
                handleLineMastered();
              } else {
                setFeedback({
                  status: 'idle',
                  message: `Opponent played ${botMoveNode.san}. Your turn!`
                });
              }
            }
          } catch {
            // fallback
          }
          return gameClone;
        });
      }, 500);
    }
  }, [selectedVariation, handleLineMastered]);

  // Move validation on piece drop
  const onDrop = ({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string | null }): boolean => {
    if (!targetSquare || isLineComplete || !currentExpectedMove || isInspectingPast) {
      return false;
    }

    // Attempt the move on a chess clone to check chess legality first
    const testGame = new Chess(game.fen());
    let legalMove = null;
    try {
      legalMove = testGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });
    } catch {
      return false;
    }

    if (!legalMove) {
      return false;
    }

    // Check if this move matches the expected book line
    const isBookMove = 
      sourceSquare.toLowerCase() === currentExpectedMove.from.toLowerCase() &&
      targetSquare.toLowerCase() === currentExpectedMove.to.toLowerCase();

    if (isBookMove) {
      // Apply move to actual board
      game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });
      setGameFen(game.fen());
      setShowHintArrow(false);

      if (legalMove.captured) {
        soundManager.playCapture();
      } else {
        soundManager.playCorrect();
      }

      const nextPly = currentPlyIndex + 1;
      setCurrentPlyIndex(nextPly);

      if (nextPly >= selectedVariation.moves.length) {
        handleLineMastered();
      } else {
        setFeedback({
          status: 'correct',
          message: `Book Move! ${currentExpectedMove.san} - ${currentExpectedMove.annotation}`
        });

        // If the player's training perspective matches, let opponent make their book move
        triggerOpponentReply(nextPly);
      }
      return true;
    } else {
      // Incorrect move: play reject buzz, trigger shake, show informative correction
      soundManager.playIncorrect();
      setShakeBoard(true);
      setTimeout(() => setShakeBoard(false), 500);

      // Check if there is a known blunder note
      const knownBlunder = currentExpectedMove.blunders?.find(
        (b) => b.from.toLowerCase() === sourceSquare.toLowerCase() && b.to.toLowerCase() === targetSquare.toLowerCase()
      );

      const errorMessage = knownBlunder 
        ? `Mistake: ${knownBlunder.blunderExplanation} (${knownBlunder.refutation})`
        : `Incorrect move. Book move is ${currentExpectedMove.san} (${currentExpectedMove.from} -> ${currentExpectedMove.to}).`;

      setFeedback({
        status: 'incorrect',
        message: errorMessage
      });
      return false;
    }
  };

  const handleRequestHint = () => {
    if (isInspectingPast && currentPlyIndex > 0) {
      setInspectedPlyIndex(currentPlyIndex - 1);
    }
    if (!currentExpectedMove) return;
    setShowHintArrow(true);
    soundManager.playMove();
    setFeedback({
      status: 'hint',
      message: currentExpectedMove.whyThisMove 
        ? `Hint: ${currentExpectedMove.whyThisMove}`
        : `Hint: Move piece from ${currentExpectedMove.from.toUpperCase()} to ${currentExpectedMove.to.toUpperCase()}.`
    });
  };

  const toggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const flipBoard = () => {
    setBoardOrientation((prev) => (prev === 'white' ? 'black' : 'white'));
  };

  // Progress metrics
  const totalMovesInLine = selectedVariation.moves.length;
  const progressPercent = Math.min(100, Math.round((currentPlyIndex / totalMovesInLine) * 100));

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[500px] text-zinc-400">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 text-zinc-100">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              {selectedOpening.eco}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              {selectedOpening.name}
            </h1>
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full uppercase ${
              selectedOpening.category === 'gambit' 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}>
              {selectedOpening.category}
            </span>
          </div>
          <p className="mt-1 text-sm text-zinc-400 max-w-2xl">
            {selectedOpening.summary}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition text-zinc-300 hover:text-white"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
          </button>
          <button
            onClick={flipBoard}
            className="px-3 py-2 text-sm font-medium rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition text-zinc-300 hover:text-white flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Flip ({boardOrientation === 'white' ? 'White' : 'Black'})
          </button>
          <button
            onClick={() => resetLine(selectedVariation)}
            className="px-3.5 py-2 text-sm font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 transition text-white flex items-center gap-2 shadow-lg shadow-emerald-950/40"
          >
            <RotateCcw className="w-4 h-4" />
            Restart Line
          </button>
        </div>
      </div>

      {/* Main Grid: Left Chessboard & Trainer, Right Contextual Lesson Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Board & Interactive Controls (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Variation Tabs */}
          <div className="w-full flex items-center gap-2 mb-4 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">Lines:</span>
            {selectedOpening.variations.map((v) => {
              const isMastered = !!masteredVariations[v.id];
              const isCurrent = v.id === selectedVariation.id;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    setSelectedVariation(v);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-emerald-500 text-zinc-950 font-bold shadow'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {isMastered && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
                  {v.name}
                </button>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="w-full mb-3">
            <div className="flex justify-between items-center text-xs text-zinc-400 mb-1">
              <span>Progress: Move {currentPlyIndex} of {totalMovesInLine}</span>
              <span className="font-semibold text-emerald-400">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Past Move Inspection Banner */}
          {isInspectingPast && (
            <div className="w-full max-w-[500px] mb-3 px-3.5 py-2 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-between text-xs text-amber-300 shadow-md">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-amber-400" />
                <span>
                  Viewing Move {Math.ceil((inspectedPlyIndex! + 1) / 2)}. {selectedVariation.moves[inspectedPlyIndex!].turn === 'b' ? '...' : ''}{selectedVariation.moves[inspectedPlyIndex!].san}
                </span>
              </div>
              <button
                onClick={() => setInspectedPlyIndex(currentPlyIndex - 1)}
                className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-semibold transition"
              >
                Resume Live Board →
              </button>
            </div>
          )}

          {/* Interactive Chessboard Container */}
          <div 
            className={`w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-zinc-800/90 transition-transform ${
              shakeBoard ? 'animate-shake border-rose-500/80 shadow-rose-950/50' : ''
            } ${feedback.status === 'correct' ? 'border-emerald-500/70 shadow-emerald-950/40' : ''}`}
          >
            <Chessboard
              options={{
                position: displayedFen,
                boardOrientation: boardOrientation,
                squareStyles: customSquareStyles,
                arrows: customArrows,
                darkSquareStyle: { backgroundColor: '#4a6b47' },
                lightSquareStyle: { backgroundColor: '#cad2b8' },
                animationDurationInMs: 220,
                allowDragging: !isLineComplete && !isInspectingPast,
                onPieceDrop: onDrop
              }}
            />
          </div>

          {/* Trainer Interactive Feedback Box */}
          <div className="w-full max-w-[500px] mt-4">
            <div className={`p-4 rounded-xl border transition-all ${
              feedback.status === 'correct'
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                : feedback.status === 'incorrect'
                ? 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                : feedback.status === 'hint'
                ? 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                : feedback.status === 'complete'
                ? 'bg-teal-950/40 border-teal-400/50 text-teal-200'
                : 'bg-zinc-900 border-zinc-800 text-zinc-300'
            }`}>
              <div className="flex items-start gap-3">
                {feedback.status === 'correct' && <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />}
                {feedback.status === 'incorrect' && <AlertTriangle className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />}
                {feedback.status === 'hint' && <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />}
                {feedback.status === 'complete' && <Award className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />}
                {feedback.status === 'idle' && <Sparkles className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />}
                
                <div className="flex-1">
                  <div className="font-semibold text-sm">
                    {feedback.status === 'correct' && 'Great Move!'}
                    {feedback.status === 'incorrect' && 'Wrong Move!'}
                    {feedback.status === 'hint' && 'Move Guidance'}
                    {feedback.status === 'complete' && 'Variation Completed!'}
                    {feedback.status === 'idle' && 'Your Objective:'}
                  </div>
                  <div className="text-xs md:text-sm mt-0.5 leading-relaxed">
                    {feedback.message}
                  </div>
                </div>

                {!isLineComplete && (
                  <button
                    onClick={handleRequestHint}
                    className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition flex items-center gap-1 shrink-0"
                    title="Get a hint for the next move"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    Hint
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contextual Lesson Content & Opening Theory (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Card 1: Move History & Annotations */}
          <div className="bg-zinc-900/90 rounded-xl p-5 border border-zinc-800 shadow-xl">
            {/* Header: Title and View Mode Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <History className="w-4 h-4" />
                <span>Move History & Annotations</span>
                {playedMoves.length > 0 && (
                  <span className="text-[11px] font-normal text-zinc-400 font-mono">
                    ({playedMoves.length}/{totalMovesInLine})
                  </span>
                )}
              </div>

              {playedMoves.length > 0 && (
                <div className="flex items-center gap-1 bg-zinc-950/80 p-0.5 rounded-lg border border-zinc-800 text-xs">
                  <button
                    onClick={() => setHistoryViewMode('timeline')}
                    className={`px-2.5 py-1 rounded-md transition font-medium flex items-center gap-1.5 ${
                      historyViewMode === 'timeline'
                        ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <ListOrdered className="w-3.5 h-3.5" />
                    <span>All Moves</span>
                  </button>
                  <button
                    onClick={() => setHistoryViewMode('focus')}
                    className={`px-2.5 py-1 rounded-md transition font-medium flex items-center gap-1.5 ${
                      historyViewMode === 'focus'
                        ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Focus</span>
                  </button>
                </div>
              )}
            </div>

            {playedMoves.length === 0 ? (
              <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/80 text-center text-xs text-zinc-400 italic">
                Make your first move on the board to view step-by-step master annotations and move history.
              </div>
            ) : (
              <div className="space-y-3">
                {/* Move notation ribbon with navigation stepping buttons */}
                <div className="flex items-center justify-between gap-2 p-2 bg-zinc-950/70 rounded-xl border border-zinc-800/80">
                  <div className="flex items-center gap-1 overflow-x-auto py-0.5 text-xs font-mono">
                    {movePairs.map((pair) => (
                      <div key={pair.moveNumber} className="flex items-center gap-1 bg-zinc-900/90 px-2 py-1 rounded-lg border border-zinc-800/80 shrink-0">
                        <span className="text-zinc-500 text-[11px] select-none">{pair.moveNumber}.</span>
                        
                        {pair.white && (
                          <button
                            onClick={() => setInspectedPlyIndex(pair.whitePlyIndex!)}
                            className={`px-1.5 py-0.5 rounded transition font-medium ${
                              inspectedPlyIndex === pair.whitePlyIndex
                                ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
                                : 'text-zinc-200 hover:text-white hover:bg-zinc-800'
                            }`}
                            title={`Inspect ${pair.moveNumber}. ${pair.white.san}`}
                          >
                            {pair.white.san}
                            {pair.white.isSacrifice && ' 🔥'}
                          </button>
                        )}

                        {pair.black && (
                          <button
                            onClick={() => setInspectedPlyIndex(pair.blackPlyIndex!)}
                            className={`px-1.5 py-0.5 rounded transition font-medium ${
                              inspectedPlyIndex === pair.blackPlyIndex
                                ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
                                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                            }`}
                            title={`Inspect ${pair.moveNumber}... ${pair.black.san}`}
                          >
                            {pair.black.san}
                            {pair.black.isSacrifice && ' 🔥'}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Navigation step buttons */}
                  <div className="flex items-center gap-0.5 shrink-0 text-zinc-400">
                    <button
                      onClick={handleFirstMove}
                      disabled={inspectedPlyIndex === 0}
                      className="p-1 rounded hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition"
                      title="First move"
                    >
                      <ChevronsLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handlePrevMove}
                      disabled={inspectedPlyIndex === 0}
                      className="p-1 rounded hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition"
                      title="Previous move"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNextMove}
                      disabled={inspectedPlyIndex === currentPlyIndex - 1}
                      className="p-1 rounded hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition"
                      title="Next move"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleLatestMove}
                      disabled={inspectedPlyIndex === currentPlyIndex - 1}
                      className="p-1 rounded hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition"
                      title="Latest move"
                    >
                      <ChevronsRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* View 1: Timeline of All Moves Done */}
                {historyViewMode === 'timeline' ? (
                  <div ref={historyContainerRef} className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                    {playedMoves.map((m, idx) => {
                      const isSelected = inspectedPlyIndex === idx;
                      const moveNum = Math.ceil(m.ply / 2);
                      const isWhite = m.turn === 'w';

                      return (
                        <div
                          key={idx}
                          onClick={() => setInspectedPlyIndex(idx)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer transition ${
                            isSelected
                              ? 'bg-emerald-950/30 border-emerald-500/60 shadow-md shadow-emerald-950/20'
                              : 'bg-zinc-950/50 hover:bg-zinc-800/50 border-zinc-800/80'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-sm text-white">
                                {moveNum}. {isWhite ? '' : '...'}{m.san}
                              </span>
                              <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase ${
                                isWhite ? 'bg-zinc-700 text-zinc-200' : 'bg-zinc-900 text-zinc-400 border border-zinc-700'
                              }`}>
                                {isWhite ? 'White' : 'Black'}
                              </span>
                              {m.isSacrifice && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                                  <Flame className="w-2.5 h-2.5 text-rose-400" />
                                  Sacrifice
                                </span>
                              )}
                            </div>
                            {isSelected && (
                              <span className="text-[10px] font-medium text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                Inspecting
                              </span>
                            )}
                          </div>

                          <p className="text-zinc-300 leading-relaxed text-xs">
                            {m.annotation}
                          </p>

                          {m.whyThisMove && (
                            <div className="mt-2 p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/90 text-[11px] text-zinc-300">
                              <span className="font-semibold text-amber-400 mr-1">Strategic Rationale:</span>
                              {m.whyThisMove}
                            </div>
                          )}

                          {m.sacrificeInfo && (
                            <div className="mt-2 p-2 rounded-lg bg-rose-950/20 border border-rose-900/40 text-[11px] text-rose-200">
                              <span className="font-semibold text-rose-400 mr-1">Material:</span> {m.sacrificeInfo.material} • <span className="font-semibold text-rose-400 mr-1">Compensation:</span> {m.sacrificeInfo.compensation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* View 2: Single Focus on Active Inspected Move */
                  inspectedMove ? (
                    <div className="space-y-3 p-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-white tracking-wide">
                          {Math.ceil(inspectedMove.ply / 2)}. {inspectedMove.turn === 'b' ? '...' : ''}{inspectedMove.san}
                        </span>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded uppercase ${
                          inspectedMove.turn === 'w' ? 'bg-zinc-700 text-zinc-200' : 'bg-zinc-900 text-zinc-400 border border-zinc-700'
                        }`}>
                          {inspectedMove.turn === 'w' ? 'White' : 'Black'}
                        </span>
                        {inspectedMove.isSacrifice && (
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                            <Flame className="w-3 h-3 text-rose-400" />
                            Sacrifice
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {inspectedMove.annotation}
                      </p>

                      {inspectedMove.whyThisMove && (
                        <div className="p-3 rounded-lg bg-zinc-800/60 border border-zinc-700/50 text-xs text-zinc-300">
                          <span className="font-semibold text-amber-400 block mb-1">Strategic Rationale:</span>
                          {inspectedMove.whyThisMove}
                        </div>
                      )}

                      {inspectedMove.sacrificeInfo && (
                        <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs">
                          <div className="font-semibold text-rose-400 flex items-center gap-1 mb-1">
                            <Flame className="w-3.5 h-3.5" />
                            Sacrifice Anatomy:
                          </div>
                          <div className="text-zinc-300">
                            <span className="font-medium text-zinc-200">Material: </span>
                            {inspectedMove.sacrificeInfo.material}
                          </div>
                          <div className="text-zinc-300 mt-1">
                            <span className="font-medium text-zinc-200">Compensation: </span>
                            {inspectedMove.sacrificeInfo.compensation}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            )}
          </div>

          {/* Card 2: The Philosophy & Key Strategic Themes */}
          <div className="bg-zinc-900/90 rounded-xl p-5 border border-zinc-800 shadow-xl space-y-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-2">
                <Swords className="w-4 h-4" />
                <span>The Philosophy: Why Play It?</span>
              </div>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                {selectedOpening.philosophy}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-2">
                <Layers className="w-4 h-4" />
                <span>Key Strategic Themes</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedOpening.keyThemes.map((theme, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-200 border border-zinc-700/60"
                  >
                    • {theme}
                  </span>
                ))}
              </div>
            </div>

            {selectedOpening.pawnStructureInfo && (
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-1">
                  <Shield className="w-4 h-4" />
                  <span>Pawn Structure & Compensation</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {selectedOpening.pawnStructureInfo}
                </p>
              </div>
            )}
          </div>

          {/* Card 3: Famous Historical Master Game */}
          {selectedOpening.famousGame && (
            <div className="bg-zinc-900/90 rounded-xl p-5 border border-zinc-800 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Historic Game Reference</span>
                </div>
                <span className="text-xs text-zinc-400">
                  {selectedOpening.famousGame.year}
                </span>
              </div>

              <div className="font-bold text-sm text-white">
                {selectedOpening.famousGame.white} vs {selectedOpening.famousGame.black}
              </div>
              <div className="text-xs text-emerald-400 font-mono mt-0.5">
                {selectedOpening.famousGame.event} • Result: {selectedOpening.famousGame.result}
              </div>

              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                {selectedOpening.famousGame.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
