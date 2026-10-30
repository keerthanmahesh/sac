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
      <div className="flex items-center justify-center min-h-[500px] text-muted">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 text-ink">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-rule">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 text-xs font-mono font-medium rounded border border-rule bg-paper-3 text-ink">
              {selectedOpening.eco}
            </span>
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">
              {selectedOpening.name}
            </h1>
            <span className={`px-2 py-0.5 text-xs font-normal rounded border ${
              selectedOpening.category === 'gambit' 
                ? 'border-bad/40 bg-bad-subtle text-bad' 
                : 'border-cool/40 bg-cool-subtle text-cool'
            }`}>
              {selectedOpening.category}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted max-w-2xl leading-relaxed">
            {selectedOpening.summary}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 rounded border border-rule bg-paper-2 hover:bg-paper-3 active:opacity-80 disabled:opacity-50 transition-colors duration-150 text-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-bad" /> : <Volume2 className="w-4 h-4 text-ok" />}
          </button>
          <button
            onClick={flipBoard}
            className="px-3 py-1.5 text-xs font-medium rounded border border-rule bg-paper-2 hover:bg-paper-3 active:opacity-80 disabled:opacity-50 transition-colors duration-150 text-ink flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-accent"
          >
            <RotateCcw className="w-3.5 h-3.5 text-muted" />
            <span>Flip ({boardOrientation === 'white' ? 'White' : 'Black'})</span>
          </button>
          <button
            onClick={() => resetLine(selectedVariation)}
            className="px-3 py-1.5 text-xs font-medium rounded border border-accent bg-accent text-paper hover:opacity-90 active:opacity-80 disabled:opacity-50 transition-colors duration-150 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-accent"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart line</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Chessboard & Trainer, Right Contextual Lesson Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Board & Interactive Controls (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Variation Tabs */}
          <div className="w-full flex items-center gap-2 mb-3 overflow-x-auto pb-1">
            <span className="text-xs font-medium text-muted whitespace-nowrap">Lines:</span>
            {selectedOpening.variations.map((v) => {
              const isMastered = !!masteredVariations[v.id];
              const isCurrent = v.id === selectedVariation.id;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    setSelectedVariation(v);
                  }}
                  className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap transition-colors duration-150 border active:opacity-80 disabled:opacity-50 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-accent ${
                    isCurrent
                      ? 'border-ink bg-ink text-paper font-semibold'
                      : 'border-rule bg-paper-2 text-muted hover:text-ink hover:bg-paper-3'
                  }`}
                >
                  {isMastered && <CheckCircle2 className="w-3.5 h-3.5 text-ok" />}
                  <span>{v.name}</span>
                </button>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="w-full mb-3">
            <div className="flex justify-between items-center text-xs text-muted mb-1">
              <span>Progress: move {currentPlyIndex} of {totalMovesInLine}</span>
              <span className="font-mono text-accent">{progressPercent}%</span>
            </div>
            <div className="w-full h-1 bg-paper-3 border border-rule rounded overflow-hidden">
              <div 
                className="h-full w-full bg-accent origin-left transition-transform duration-200 motion-reduce:transition-none"
                style={{ transform: `scaleX(${progressPercent / 100})` }}
              />
            </div>
          </div>

          {/* Past Move Inspection Banner */}
          {isInspectingPast && (
            <div className="w-full max-w-[500px] mb-3 px-3 py-2 rounded border border-accent/40 bg-accent-subtle flex items-center justify-between text-xs text-accent">
              <div className="flex items-center gap-2">
                <History className="w-3.5 h-3.5 text-accent" />
                <span>
                  Viewing move {Math.ceil((inspectedPlyIndex! + 1) / 2)}. {selectedVariation.moves[inspectedPlyIndex!].turn === 'b' ? '…' : ''}{selectedVariation.moves[inspectedPlyIndex!].san}
                </span>
              </div>
              <button
                onClick={() => setInspectedPlyIndex(currentPlyIndex - 1)}
                className="px-2 py-0.5 rounded border border-accent/50 bg-paper-2 hover:bg-paper-3 active:opacity-80 disabled:opacity-50 text-accent font-medium transition-colors duration-150"
              >
                Resume live board
              </button>
            </div>
          )}

          {/* Interactive Chessboard Container */}
          <div 
            className={`w-full max-w-[500px] aspect-square rounded overflow-hidden border border-rule transition-colors duration-150 ${
              shakeBoard ? 'animate-shake border-bad' : ''
            } ${feedback.status === 'correct' ? 'border-ok' : ''}`}
          >
            <Chessboard
              options={{
                position: displayedFen,
                boardOrientation: boardOrientation,
                squareStyles: customSquareStyles,
                arrows: customArrows,
                darkSquareStyle: { backgroundColor: '#38463c' },
                lightSquareStyle: { backgroundColor: '#a8b09d' },
                animationDurationInMs: 200,
                allowDragging: !isLineComplete && !isInspectingPast,
                onPieceDrop: onDrop
              }}
            />
          </div>

          {/* Trainer Interactive Feedback Box */}
          <div className="w-full max-w-[500px] mt-4">
            <div className={`p-4 rounded border transition-colors duration-150 ${
              feedback.status === 'correct'
                ? 'bg-ok-subtle border-ok/40 text-ok'
                : feedback.status === 'incorrect'
                ? 'bg-bad-subtle border-bad/40 text-bad'
                : feedback.status === 'hint'
                ? 'bg-accent-subtle border-accent/40 text-accent'
                : feedback.status === 'complete'
                ? 'bg-cool-subtle border-cool/40 text-cool'
                : 'bg-paper-2 border-rule text-ink'
            }`}>
              <div className="flex items-start gap-3">
                {feedback.status === 'correct' && <CheckCircle2 className="w-4 h-4 text-ok mt-0.5 shrink-0" />}
                {feedback.status === 'incorrect' && <AlertTriangle className="w-4 h-4 text-bad mt-0.5 shrink-0" />}
                {feedback.status === 'hint' && <Lightbulb className="w-4 h-4 text-accent mt-0.5 shrink-0" />}
                {feedback.status === 'complete' && <Award className="w-4 h-4 text-cool mt-0.5 shrink-0" />}
                {feedback.status === 'idle' && <Sparkles className="w-4 h-4 text-accent mt-0.5 shrink-0" />}
                
                <div className="flex-1">
                  <div className="font-semibold text-xs">
                    {feedback.status === 'correct' && 'Great move'}
                    {feedback.status === 'incorrect' && 'Wrong move'}
                    {feedback.status === 'hint' && 'Move guidance'}
                    {feedback.status === 'complete' && 'Variation completed'}
                    {feedback.status === 'idle' && 'Your objective'}
                  </div>
                  <div className="text-xs mt-1 leading-relaxed text-ink">
                    {feedback.message}
                  </div>
                </div>

                {!isLineComplete && (
                  <button
                    onClick={handleRequestHint}
                    className="px-2 py-1 text-xs font-medium rounded border border-rule bg-paper-3 text-ink hover:bg-paper active:opacity-80 disabled:opacity-50 transition-colors duration-150 flex items-center gap-1 shrink-0"
                    title="Get a hint for the next move"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-accent" />
                    <span>Hint</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contextual Lesson Content & Opening Theory (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Card 1: Move History & Annotations */}
          <div className="bg-paper-2 rounded-md p-4 border border-rule">
            {/* Header: Title and View Mode Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-ink text-xs font-medium">
                <History className="w-3.5 h-3.5 text-muted" />
                <span>Move history and annotations</span>
                {playedMoves.length > 0 && (
                  <span className="text-xs text-muted font-mono">
                    ({playedMoves.length}/{totalMovesInLine})
                  </span>
                )}
              </div>

              {playedMoves.length > 0 && (
                <div className="flex items-center gap-1 bg-paper-3 p-0.5 rounded border border-rule text-xs">
                  <button
                    onClick={() => setHistoryViewMode('timeline')}
                    className={`px-2 py-0.5 rounded transition-colors duration-150 text-xs font-medium flex items-center gap-1 active:opacity-80 disabled:opacity-50 ${
                      historyViewMode === 'timeline'
                        ? 'bg-paper border border-rule text-ink'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    <ListOrdered className="w-3 h-3" />
                    <span>All moves</span>
                  </button>
                  <button
                    onClick={() => setHistoryViewMode('focus')}
                    className={`px-2 py-0.5 rounded transition-colors duration-150 text-xs font-medium flex items-center gap-1 active:opacity-80 disabled:opacity-50 ${
                      historyViewMode === 'focus'
                        ? 'bg-paper border border-rule text-ink'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Focus</span>
                  </button>
                </div>
              )}
            </div>

            {playedMoves.length === 0 ? (
              <div className="p-3 rounded border border-rule bg-paper-3 text-center text-xs text-muted">
                Make your first move on the board to view step-by-step master annotations and move history.
              </div>
            ) : (
              <div className="space-y-3">
                {/* Move notation ribbon with navigation stepping buttons */}
                <div className="flex items-center justify-between gap-2 p-1.5 bg-paper-3 rounded border border-rule">
                  <div className="flex items-center gap-1 overflow-x-auto py-0.5 text-xs font-mono">
                    {movePairs.map((pair) => (
                      <div key={pair.moveNumber} className="flex items-center gap-1 bg-paper-2 px-1.5 py-0.5 rounded border border-rule shrink-0">
                        <span className="text-muted text-xs select-none">{pair.moveNumber}.</span>
                        
                        {pair.white && (
                          <button
                            onClick={() => setInspectedPlyIndex(pair.whitePlyIndex!)}
                            className={`px-1 py-0.5 rounded transition-colors duration-150 active:opacity-80 disabled:opacity-50 font-mono text-xs flex items-center gap-0.5 ${
                              inspectedPlyIndex === pair.whitePlyIndex
                                ? 'bg-accent text-paper font-semibold'
                                : 'text-ink hover:bg-paper-3'
                            }`}
                            title={`Inspect ${pair.moveNumber}. ${pair.white.san}`}
                          >
                            <span>{pair.white.san}</span>
                            {pair.white.isSacrifice && (
                              <Flame className="w-2.5 h-2.5 text-bad inline shrink-0" />
                            )}
                          </button>
                        )}

                        {pair.black && (
                          <button
                            onClick={() => setInspectedPlyIndex(pair.blackPlyIndex!)}
                            className={`px-1 py-0.5 rounded transition-colors duration-150 active:opacity-80 disabled:opacity-50 font-mono text-xs flex items-center gap-0.5 ${
                              inspectedPlyIndex === pair.blackPlyIndex
                                ? 'bg-accent text-paper font-semibold'
                                : 'text-muted hover:text-ink hover:bg-paper-3'
                            }`}
                            title={`Inspect ${pair.moveNumber}... ${pair.black.san}`}
                          >
                            <span>{pair.black.san}</span>
                            {pair.black.isSacrifice && (
                              <Flame className="w-2.5 h-2.5 text-bad inline shrink-0" />
                            )}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Navigation step buttons */}
                  <div className="flex items-center gap-0.5 shrink-0 text-muted">
                    <button
                      onClick={handleFirstMove}
                      disabled={inspectedPlyIndex === 0}
                      className="p-1 rounded hover:text-ink active:opacity-80 disabled:opacity-30 transition-colors duration-150"
                      title="First move"
                    >
                      <ChevronsLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handlePrevMove}
                      disabled={inspectedPlyIndex === 0}
                      className="p-1 rounded hover:text-ink active:opacity-80 disabled:opacity-30 transition-colors duration-150"
                      title="Previous move"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNextMove}
                      disabled={inspectedPlyIndex === currentPlyIndex - 1}
                      className="p-1 rounded hover:text-ink active:opacity-80 disabled:opacity-30 transition-colors duration-150"
                      title="Next move"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleLatestMove}
                      disabled={inspectedPlyIndex === currentPlyIndex - 1}
                      className="p-1 rounded hover:text-ink active:opacity-80 disabled:opacity-30 transition-colors duration-150"
                      title="Latest move"
                    >
                      <ChevronsRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* View 1: Timeline of All Moves Done */}
                {historyViewMode === 'timeline' ? (
                  <div ref={historyContainerRef} className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
                    {playedMoves.map((m, idx) => {
                      const isSelected = inspectedPlyIndex === idx;
                      const moveNum = Math.ceil(m.ply / 2);
                      const isWhite = m.turn === 'w';

                      return (
                        <div
                          key={idx}
                          onClick={() => setInspectedPlyIndex(idx)}
                          className={`p-3 rounded border text-xs cursor-pointer transition-colors duration-150 ${
                            isSelected
                              ? 'border-rule-2 bg-paper-3'
                              : 'border-rule bg-paper-2 hover:bg-paper-3'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-medium text-xs text-ink">
                                {moveNum}. {isWhite ? '' : '…'}{m.san}
                              </span>
                              <span className="px-1.5 py-0.2 rounded border border-rule bg-paper-3 text-[11px] text-muted">
                                {isWhite ? 'White' : 'Black'}
                              </span>
                              {m.isSacrifice && (
                                <span className="px-1.5 py-0.2 rounded border border-bad/40 bg-bad-subtle text-bad text-[11px] flex items-center gap-1">
                                  <Flame className="w-2.5 h-2.5 text-bad shrink-0" />
                                  <span>Sacrifice</span>
                                </span>
                              )}
                            </div>
                            {isSelected && (
                              <span className="text-[11px] text-accent flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-accent" />
                                <span>Inspecting</span>
                              </span>
                            )}
                          </div>

                          <p className="text-muted leading-relaxed text-xs">
                            {m.annotation}
                          </p>

                          {m.whyThisMove && (
                            <div className="mt-2 p-2 rounded border border-rule bg-paper-3 text-xs text-ink">
                              <span className="font-medium text-accent mr-1">Strategic rationale:</span>
                              <span className="text-muted">{m.whyThisMove}</span>
                            </div>
                          )}

                          {m.sacrificeInfo && (
                            <div className="mt-2 p-2 rounded border border-bad/30 bg-bad-subtle text-xs text-ink">
                              <span className="font-medium text-bad mr-1">Material:</span>
                              <span className="text-muted">{m.sacrificeInfo.material}</span>
                              <span className="text-muted mx-1">/</span>
                              <span className="font-medium text-bad mr-1">Compensation:</span>
                              <span className="text-muted">{m.sacrificeInfo.compensation}</span>
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
                        <span className="text-lg font-semibold text-ink font-mono">
                          {Math.ceil(inspectedMove.ply / 2)}. {inspectedMove.turn === 'b' ? '…' : ''}{inspectedMove.san}
                        </span>
                        <span className="px-1.5 py-0.5 text-xs rounded border border-rule bg-paper-3 text-muted">
                          {inspectedMove.turn === 'w' ? 'White' : 'Black'}
                        </span>
                        {inspectedMove.isSacrifice && (
                          <span className="px-1.5 py-0.5 text-xs rounded border border-bad/40 bg-bad-subtle text-bad flex items-center gap-1">
                            <Flame className="w-3 h-3 text-bad shrink-0" />
                            <span>Sacrifice</span>
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-muted leading-relaxed">
                        {inspectedMove.annotation}
                      </p>

                      {inspectedMove.whyThisMove && (
                        <div className="p-3 rounded border border-rule bg-paper-3 text-xs text-ink">
                          <span className="font-medium text-accent block mb-1">Strategic rationale</span>
                          <p className="text-muted leading-relaxed">{inspectedMove.whyThisMove}</p>
                        </div>
                      )}

                      {inspectedMove.sacrificeInfo && (
                        <div className="p-3 rounded border border-bad/30 bg-bad-subtle text-xs">
                          <div className="font-medium text-bad flex items-center gap-1 mb-1">
                            <Flame className="w-3.5 h-3.5 text-bad shrink-0" />
                            <span>Sacrifice anatomy</span>
                          </div>
                          <div className="text-ink">
                            <span className="text-muted">Material: </span>
                            {inspectedMove.sacrificeInfo.material}
                          </div>
                          <div className="text-ink mt-1">
                            <span className="text-muted">Compensation: </span>
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
          <div className="bg-paper-2 rounded-md p-4 border border-rule space-y-4">
            <div>
              <div className="flex items-center gap-2 text-accent text-xs font-medium mb-1.5">
                <Swords className="w-3.5 h-3.5 text-accent" />
                <span>The philosophy</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {selectedOpening.philosophy}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-cool text-xs font-medium mb-2">
                <Layers className="w-3.5 h-3.5 text-cool" />
                <span>Key strategic themes</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedOpening.keyThemes.map((theme, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs rounded border border-rule bg-paper-3 text-muted"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {selectedOpening.pawnStructureInfo && (
              <div>
                <div className="flex items-center gap-2 text-ok text-xs font-medium mb-1">
                  <Shield className="w-3.5 h-3.5 text-ok" />
                  <span>Pawn structure and compensation</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {selectedOpening.pawnStructureInfo}
                </p>
              </div>
            )}
          </div>

          {/* Card 3: Famous Historical Master Game */}
          {selectedOpening.famousGame && (
            <div className="bg-paper-2 rounded-md p-4 border border-rule">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-cool text-xs font-medium">
                  <Award className="w-3.5 h-3.5 text-cool" />
                  <span>Historic game reference</span>
                </div>
                <span className="text-xs text-muted font-mono">
                  {selectedOpening.famousGame.year}
                </span>
              </div>

              <div className="font-semibold text-xs text-ink">
                {selectedOpening.famousGame.white} vs {selectedOpening.famousGame.black}
              </div>
              <div className="text-xs text-muted mt-0.5">
                {selectedOpening.famousGame.event} / Result: {selectedOpening.famousGame.result}
              </div>

              <p className="text-xs text-muted mt-2 leading-relaxed">
                {selectedOpening.famousGame.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
