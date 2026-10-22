'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Flame,
  Shield,
  Search,
  CheckCircle2,
  ArrowRight,
  ArrowUpDown
} from 'lucide-react';
import { Opening, DifficultyLevel } from '../types/chess';

interface OpeningCatalogProps {
  openings: Opening[];
}

const LEVEL_WEIGHT: Record<DifficultyLevel, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

type FilterCategory = 
  | 'all' 
  | 'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'gambit' 
  | 'classical' 
  | 'white' 
  | 'black';

type SortOption = 'level-asc' | 'level-desc' | 'name' | 'eco';

export default function OpeningCatalog({ openings }: OpeningCatalogProps) {
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('level-asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [masteredVariations, setMasteredVariations] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sac_mastery') || localStorage.getItem('gambitlab_mastery');
      if (saved) {
        setMasteredVariations(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Filter and Sort openings
  const sortedAndFilteredOpenings = useMemo(() => {
    const list = openings.filter((op) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        op.name.toLowerCase().includes(q) ||
        op.eco.toLowerCase().includes(q) ||
        op.summary.toLowerCase().includes(q) ||
        op.category.toLowerCase().includes(q) ||
        op.difficulty.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      if (filterCategory === 'beginner') {
        return op.difficulty === 'beginner';
      }
      if (filterCategory === 'intermediate') {
        return op.difficulty === 'intermediate';
      }
      if (filterCategory === 'advanced') {
        return op.difficulty === 'advanced';
      }
      if (filterCategory === 'gambit') {
        return op.category === 'gambit' || op.category === 'trap';
      }
      if (filterCategory === 'classical') {
        return op.category === 'classical' || op.category === 'defense';
      }
      if (filterCategory === 'white') {
        return op.side === 'white';
      }
      if (filterCategory === 'black') {
        return op.side === 'black';
      }
      return true;
    });

    return list.sort((a, b) => {
      if (sortBy === 'level-asc') {
        const diff = (LEVEL_WEIGHT[a.difficulty] || 2) - (LEVEL_WEIGHT[b.difficulty] || 2);
        if (diff !== 0) return diff;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'level-desc') {
        const diff = (LEVEL_WEIGHT[b.difficulty] || 2) - (LEVEL_WEIGHT[a.difficulty] || 2);
        if (diff !== 0) return diff;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'eco') {
        return a.eco.localeCompare(b.eco);
      }
      return 0;
    });
  }, [openings, searchQuery, filterCategory, sortBy]);

  // Counts for pills
  const counts = useMemo(() => {
    return {
      all: openings.length,
      beginner: openings.filter((o) => o.difficulty === 'beginner').length,
      intermediate: openings.filter((o) => o.difficulty === 'intermediate').length,
      advanced: openings.filter((o) => o.difficulty === 'advanced').length,
      gambit: openings.filter((o) => o.category === 'gambit' || o.category === 'trap').length,
      classical: openings.filter((o) => o.category === 'classical' || o.category === 'defense').length,
      white: openings.filter((o) => o.side === 'white').length,
      black: openings.filter((o) => o.side === 'black').length,
    };
  }, [openings]);

  // Group by level when sorted by level-asc or level-desc without specific level filter
  const isLevelGrouped = 
    (sortBy === 'level-asc' || sortBy === 'level-desc') &&
    filterCategory === 'all' &&
    !searchQuery.trim();

  const groupedByLevel = useMemo(() => {
    if (!isLevelGrouped) return null;

    const beginnerList = sortedAndFilteredOpenings.filter((o) => o.difficulty === 'beginner');
    const intermediateList = sortedAndFilteredOpenings.filter((o) => o.difficulty === 'intermediate');
    const advancedList = sortedAndFilteredOpenings.filter((o) => o.difficulty === 'advanced');

    if (sortBy === 'level-desc') {
      return [
        { level: 'advanced' as DifficultyLevel, title: 'Advanced Systems', subtitle: 'Complex theoretical labyrinths requiring precise tactical calculation.', items: advancedList },
        { level: 'intermediate' as DifficultyLevel, title: 'Intermediate Repertoire', subtitle: 'Sharp complications, active pawn breaks, and dynamic piece play.', items: intermediateList },
        { level: 'beginner' as DifficultyLevel, title: 'Beginner Foundations', subtitle: 'Straightforward central plans, solid structures, and essential traps.', items: beginnerList },
      ].filter((g) => g.items.length > 0);
    }

    return [
      { level: 'beginner' as DifficultyLevel, title: 'Beginner Foundations', subtitle: 'Straightforward central plans, solid structures, and essential traps.', items: beginnerList },
      { level: 'intermediate' as DifficultyLevel, title: 'Intermediate Repertoire', subtitle: 'Sharp complications, active pawn breaks, and dynamic piece play.', items: intermediateList },
      { level: 'advanced' as DifficultyLevel, title: 'Advanced Systems', subtitle: 'Complex theoretical labyrinths requiring precise tactical calculation.', items: advancedList },
    ].filter((g) => g.items.length > 0);
  }, [isLevelGrouped, sortedAndFilteredOpenings, sortBy]);

  const renderCard = (op: Opening) => {
    const isGambit = op.category === 'gambit' || op.category === 'trap';
    const masteredCount = op.variations.filter((v) => !!masteredVariations[v.id]).length;
    const isFullyMastered = masteredCount === op.variations.length && op.variations.length > 0;

    return (
      <Link
        key={op.id}
        href={`/train/${op.slug}`}
        className="p-5 rounded-2xl border bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/90 hover:border-emerald-500/60 transition-all duration-200 flex flex-col justify-between group shadow-lg hover:shadow-emerald-950/20 hover:-translate-y-0.5"
      >
        <div>
          {/* Badges Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/25">
                {op.eco}
              </span>
              <span
                className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full uppercase flex items-center gap-1 ${
                  isGambit
                    ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                    : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                }`}
              >
                {isGambit ? <Flame className="w-3 h-3 text-rose-400" /> : <Shield className="w-3 h-3 text-blue-400" />}
                {op.category}
              </span>
            </div>

            <span className="text-[11px] font-medium text-zinc-400">
              {op.side === 'white' ? '⚪ Play as White' : '⚫ Play as Black'}
            </span>
          </div>

          {/* Title & Summary */}
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="font-bold text-lg text-white group-hover:text-emerald-400 transition">
              {op.name}
            </h2>
            {isFullyMastered && (
              <span className="text-xs text-emerald-400 flex items-center gap-1 shrink-0 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Mastered
              </span>
            )}
          </div>

          <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2">
            {op.summary}
          </p>

          {/* Key themes tag preview */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {op.keyThemes.slice(0, 2).map((theme, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
              >
                {theme}
              </span>
            ))}
            {op.keyThemes.length > 2 && (
              <span className="text-[10px] text-zinc-500 self-center">
                +{op.keyThemes.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Bottom Card Footer with Color-Coded Level Badge */}
        <div className="mt-5 pt-3.5 border-t border-zinc-800/70 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs">Level:</span>
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-semibold capitalize ${
                op.difficulty === 'beginner'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : op.difficulty === 'intermediate'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
              }`}
            >
              {op.difficulty}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">{op.variations.length} {op.variations.length === 1 ? 'line' : 'lines'}</span>
          </div>

          <div className="text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            <span>Practice Line</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-zinc-100">
      {/* Filter Tabs & Search / Sort Controls */}
      <div className="flex flex-col gap-3 mb-8">
        {/* Row 1: Category & Level Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition ${
              filterCategory === 'all'
                ? 'bg-zinc-100 text-zinc-950 font-bold shadow'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            All ({counts.all})
          </button>

          {/* Openings (Classical) before Gambits */}
          <button
            onClick={() => setFilterCategory('classical')}
            className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition flex items-center gap-1.5 ${
              filterCategory === 'classical'
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-950/40'
                : 'bg-zinc-900 text-blue-400 hover:text-blue-300 border border-zinc-800'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            Openings ({counts.classical})
          </button>

          {/* Gambits */}
          <button
            onClick={() => setFilterCategory('gambit')}
            className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition flex items-center gap-1.5 ${
              filterCategory === 'gambit'
                ? 'bg-rose-500 text-white font-bold shadow-lg shadow-rose-950/40'
                : 'bg-zinc-900 text-rose-400 hover:text-rose-300 border border-zinc-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            Gambits ({counts.gambit})
          </button>
        </div>

        {/* Row 2: Sort Control & Search Input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* Sort Selector Dropdown */}
            <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-300 shadow-sm">
              <ArrowUpDown className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-zinc-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort openings catalog"
                className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer pr-1"
              >
                <option value="level-asc" className="bg-zinc-900 text-white">Level: Beginner → Advanced</option>
                <option value="level-desc" className="bg-zinc-900 text-white">Level: Advanced → Beginner</option>
                <option value="name" className="bg-zinc-900 text-white">Name: A to Z</option>
                <option value="eco" className="bg-zinc-900 text-white">ECO Code (A → E)</option>
              </select>
            </div>
            
            <span className="text-xs text-zinc-500 hidden md:inline-block">
              Showing {sortedAndFilteredOpenings.length} of {openings.length}
            </span>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search openings, ECO codes, themes..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/70 shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          OPENINGS CARDS DISPLAY (Grouped by Level or Unified Grid)
          ======================================================== */}
      {groupedByLevel ? (
        <div className="space-y-10">
          {groupedByLevel.map((group) => (
            <div key={group.level}>
              {/* Group Section Header */}
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-zinc-800/80">
                <div
                  className={`w-3 h-3 rounded-full ${
                    group.level === 'beginner'
                      ? 'bg-emerald-400 shadow-md shadow-emerald-500/50'
                      : group.level === 'intermediate'
                      ? 'bg-amber-400 shadow-md shadow-amber-500/50'
                      : 'bg-purple-400 shadow-md shadow-purple-500/50'
                  }`}
                />
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{group.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-mono font-normal">
                    {group.items.length}
                  </span>
                </h2>
                <span className="hidden sm:inline-block text-xs text-zinc-400 ml-2">
                  — {group.subtitle}
                </span>
              </div>

              {/* Cards Grid for this Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map(renderCard)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedAndFilteredOpenings.map(renderCard)}
        </div>
      )}

      {/* Empty State */}
      {sortedAndFilteredOpenings.length === 0 && (
        <div className="py-16 text-center text-zinc-500 text-sm bg-zinc-900/30 rounded-2xl border border-zinc-850">
          No openings or gambits found matching &ldquo;{searchQuery}&rdquo;.
        </div>
      )}
    </div>
  );
}
