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

  // Counts for filters
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
        { level: 'advanced' as DifficultyLevel, title: 'Advanced systems', subtitle: 'Complex theoretical labyrinths requiring precise tactical calculation.', items: advancedList },
        { level: 'intermediate' as DifficultyLevel, title: 'Intermediate repertoire', subtitle: 'Sharp complications, active pawn breaks, and dynamic piece play.', items: intermediateList },
        { level: 'beginner' as DifficultyLevel, title: 'Beginner foundations', subtitle: 'Straightforward central plans, solid structures, and essential traps.', items: beginnerList },
      ].filter((g) => g.items.length > 0);
    }

    return [
      { level: 'beginner' as DifficultyLevel, title: 'Beginner foundations', subtitle: 'Straightforward central plans, solid structures, and essential traps.', items: beginnerList },
      { level: 'intermediate' as DifficultyLevel, title: 'Intermediate repertoire', subtitle: 'Sharp complications, active pawn breaks, and dynamic piece play.', items: intermediateList },
      { level: 'advanced' as DifficultyLevel, title: 'Advanced systems', subtitle: 'Complex theoretical labyrinths requiring precise tactical calculation.', items: advancedList },
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
        className="p-5 rounded-md border border-rule bg-paper-2 hover:bg-paper-3 hover:border-rule-2 active:bg-paper-3 transition-colors duration-150 flex flex-col justify-between group"
      >
        <div>
          {/* Badges Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-mono font-medium rounded border border-rule bg-paper-3 text-ink">
                {op.eco}
              </span>
              <span
                className={`px-2 py-0.5 text-xs font-normal rounded flex items-center gap-1 border ${
                  isGambit
                    ? 'border-bad/40 bg-bad-subtle text-bad'
                    : 'border-cool/40 bg-cool-subtle text-cool'
                }`}
              >
                {isGambit ? <Flame className="w-3 h-3 text-bad" /> : <Shield className="w-3 h-3 text-cool" />}
                <span>{op.category}</span>
              </span>
            </div>

            <span className="text-xs text-muted">
              {op.side === 'white' ? 'White repertoire' : 'Black defense'}
            </span>
          </div>

          {/* Title & Summary */}
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="font-semibold text-base text-ink group-hover:text-accent transition-colors duration-150">
              {op.name}
            </h2>
            {isFullyMastered && (
              <span className="text-xs text-ok flex items-center gap-1 shrink-0 font-normal px-1.5 py-0.5 rounded border border-ok/30 bg-ok-subtle">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Mastered
              </span>
            )}
          </div>

          <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-2">
            {op.summary}
          </p>

          {/* Key themes tag preview */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {op.keyThemes.slice(0, 2).map((theme, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded border border-rule bg-paper-3 text-muted"
              >
                {theme}
              </span>
            ))}
            {op.keyThemes.length > 2 && (
              <span className="text-[11px] text-muted self-center">
                +{op.keyThemes.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Bottom Card Footer with Level Badge */}
        <div className="mt-5 pt-3 border-t border-rule flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-muted">Level</span>
            <span
              className={`px-2 py-0.5 rounded text-xs font-medium border ${
                op.difficulty === 'beginner'
                  ? 'border-ok/30 bg-ok-subtle text-ok'
                  : op.difficulty === 'intermediate'
                  ? 'border-accent/30 bg-accent-subtle text-accent'
                  : 'border-rule-2 bg-paper-3 text-ink'
              }`}
            >
              {op.difficulty}
            </span>
            <span className="text-muted">/</span>
            <span className="text-muted">{op.variations.length} {op.variations.length === 1 ? 'line' : 'lines'}</span>
          </div>

          <div className="text-accent font-medium flex items-center gap-1">
            <span>Practice line</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 motion-reduce:transform-none motion-safe:group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 text-ink">
      {/* Filter Tabs & Search / Sort Controls */}
      <div className="flex flex-col gap-3 mb-8">
        {/* Row 1: Category & Level Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors duration-150 border active:opacity-80 disabled:opacity-50 ${
              filterCategory === 'all'
                ? 'bg-ink text-paper border-ink'
                : 'bg-paper-2 text-muted hover:text-ink border-rule'
            }`}
          >
            All ({counts.all})
          </button>

          {/* Openings (Classical) before Gambits */}
          <button
            onClick={() => setFilterCategory('classical')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors duration-150 border active:opacity-80 disabled:opacity-50 flex items-center gap-1.5 ${
              filterCategory === 'classical'
                ? 'bg-cool-subtle text-cool border-cool/40'
                : 'bg-paper-2 text-muted hover:text-ink border-rule'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            Openings ({counts.classical})
          </button>

          {/* Gambits */}
          <button
            onClick={() => setFilterCategory('gambit')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors duration-150 border active:opacity-80 disabled:opacity-50 flex items-center gap-1.5 ${
              filterCategory === 'gambit'
                ? 'bg-bad-subtle text-bad border-bad/40'
                : 'bg-paper-2 text-muted hover:text-ink border-rule'
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
            <div className="flex items-center gap-2 px-3 py-1.5 bg-paper-2 border border-rule rounded text-xs text-ink">
              <ArrowUpDown className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="text-muted">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort openings catalog"
                className="bg-transparent text-ink font-medium focus:outline-none cursor-pointer pr-1"
              >
                <option value="level-asc" className="bg-paper-2 text-ink">Level: beginner to advanced</option>
                <option value="level-desc" className="bg-paper-2 text-ink">Level: advanced to beginner</option>
                <option value="name" className="bg-paper-2 text-ink">Name: A to Z</option>
                <option value="eco" className="bg-paper-2 text-ink">ECO code</option>
              </select>
            </div>
            
            <span className="text-xs text-muted hidden md:inline-block">
              {sortedAndFilteredOpenings.length} of {openings.length} available
            </span>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search openings, ECO codes, themes..."
              className="w-full bg-paper-2 border border-rule rounded pl-9 pr-3 py-1.5 text-xs text-ink placeholder-muted focus:outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      {/* OPENINGS CARDS DISPLAY */}
      {groupedByLevel ? (
        <div className="space-y-10">
          {groupedByLevel.map((group) => (
            <div key={group.level}>
              {/* Group Section Header */}
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-rule">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    group.level === 'beginner'
                      ? 'bg-ok'
                      : group.level === 'intermediate'
                      ? 'bg-accent'
                      : 'bg-cool'
                  }`}
                />
                <h2 className="text-base font-semibold text-ink tracking-tight flex items-center gap-2">
                  <span>{group.title}</span>
                  <span className="text-xs px-1.5 py-0.2 rounded border border-rule bg-paper-3 text-muted font-mono">
                    {group.items.length}
                  </span>
                </h2>
                <span className="hidden sm:inline-block text-xs text-muted ml-1">
                  : {group.subtitle}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map(renderCard)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedAndFilteredOpenings.map(renderCard)}
        </div>
      )}

      {/* Empty State */}
      {sortedAndFilteredOpenings.length === 0 && (
        <div className="py-16 text-center text-muted text-xs bg-paper-2 rounded border border-rule">
          No openings or gambits found matching &ldquo;{searchQuery}&rdquo;.
        </div>
      )}
    </div>
  );
}
