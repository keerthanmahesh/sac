'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Flame,
  Shield,
  Search,
  CheckCircle2,
  ArrowRight,
  ArrowUpDown,
  Check,
  BookOpen
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

type SortOption = 'level-asc' | 'level-desc' | 'name' | 'eco' | 'lines';

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
      if (sortBy === 'lines') {
        const diff = b.variations.length - a.variations.length;
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
        className="rounded-none border border-rule bg-paper-lowest hover:border-rule-2 active:bg-paper-2 transition-colors duration-150 flex flex-col justify-between group p-0"
      >
        <div>
          {/* Header Bar */}
          <div className="bg-paper-2 px-4 py-2 border-b border-rule flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-mono font-bold border border-rule bg-paper-3 text-primary">
                {op.eco}
              </span>
              <span className="text-rule">/</span>
              <span className={`text-xs font-medium ${isGambit ? 'text-secondary' : 'text-primary'}`}>
                {op.category}
              </span>
              <span className="text-rule">/</span>
              <span className="text-muted text-xs">
                {op.side === 'white' ? 'White repertoire' : 'Black defense'}
              </span>
            </div>

            <span className="text-muted">
              {isGambit ? <Flame className="w-3.5 h-3.5 text-secondary" /> : <Shield className="w-3.5 h-3.5 text-primary" />}
            </span>
          </div>

          {/* Card Body */}
          <div className="p-4 space-y-3">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-serif text-xl text-primary group-hover:text-primary-container transition-colors duration-150">
                {op.name}
              </h3>
              {isFullyMastered && (
                <span className="text-xs text-ok flex items-center gap-1 shrink-0 font-medium px-2 py-0.5 border border-ok/30 bg-ok-soft">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Mastered
                </span>
              )}
            </div>

            <p className="text-xs text-ink-2 leading-relaxed line-clamp-2">
              {op.summary}
            </p>

            {/* Key Motifs List */}
            <div className="pt-1 space-y-1.5">
              <span className="text-xs text-muted block">Key motifs</span>
              <div className="space-y-1">
                {op.keyThemes.slice(0, 2).map((theme, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1.5 bg-paper-2 px-2.5 py-1 text-xs text-ink border border-rule-fine"
                  >
                    <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    <span className="truncate">{theme}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Folio */}
        <div className="bg-paper-2 px-4 py-2.5 border-t border-rule flex items-center justify-between text-xs mt-4">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${
              op.difficulty === 'beginner' ? 'bg-primary' : op.difficulty === 'intermediate' ? 'bg-secondary' : 'bg-cool'
            }`} />
            <span className="font-medium text-ink capitalize">{op.difficulty}</span>
            <span className="text-rule">/</span>
            <span className="text-muted font-mono">{op.variations.length} {op.variations.length === 1 ? 'line' : 'lines'}</span>
          </div>

          <div className="text-primary font-medium flex items-center gap-1 group-hover:text-primary-container">
            <span>Practice line</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 motion-reduce:transform-none motion-safe:group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-ink">
      {/* Editorial Filter Strip & Controls */}
      <div className="flex flex-col gap-3 mb-8">
        {/* Row 1: Category Filter Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 font-medium whitespace-nowrap transition-colors duration-150 border active:opacity-80 disabled:opacity-50 flex items-center gap-2 ${
              filterCategory === 'all'
                ? 'bg-primary text-paper-lowest border-primary'
                : 'bg-paper-3 text-muted hover:text-ink border-rule'
            }`}
          >
            <span>All folios</span>
            <span className={`px-1.5 py-0.2 font-mono text-xs ${
              filterCategory === 'all' ? 'bg-primary-container text-ok-soft' : 'bg-paper-2 text-ink'
            }`}>
              {counts.all}
            </span>
          </button>

          <button
            onClick={() => setFilterCategory('classical')}
            className={`px-3 py-1.5 font-medium whitespace-nowrap transition-colors duration-150 border active:opacity-80 disabled:opacity-50 flex items-center gap-2 ${
              filterCategory === 'classical'
                ? 'bg-primary text-paper-lowest border-primary'
                : 'bg-paper-3 text-muted hover:text-ink border-rule'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Classical openings</span>
            <span className={`px-1.5 py-0.2 font-mono text-xs ${
              filterCategory === 'classical' ? 'bg-primary-container text-ok-soft' : 'bg-paper-2 text-ink'
            }`}>
              {counts.classical}
            </span>
          </button>

          <button
            onClick={() => setFilterCategory('gambit')}
            className={`px-3 py-1.5 font-medium whitespace-nowrap transition-colors duration-150 border active:opacity-80 disabled:opacity-50 flex items-center gap-2 ${
              filterCategory === 'gambit'
                ? 'bg-secondary text-paper-lowest border-secondary'
                : 'bg-paper-3 text-muted hover:text-ink border-rule'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Aggressive gambits</span>
            <span className={`px-1.5 py-0.2 font-mono text-xs ${
              filterCategory === 'gambit' ? 'bg-secondary-container text-bad-soft' : 'bg-paper-2 text-ink'
            }`}>
              {counts.gambit}
            </span>
          </button>
        </div>

        {/* Row 2: Sort Control & Search Input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* Sort Selector */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-paper-2 border border-rule rounded-none text-xs text-ink">
              <ArrowUpDown className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-muted">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort openings catalog"
                className="bg-transparent text-primary font-medium focus:outline-none cursor-pointer pr-1"
              >
                <option value="level-asc">Level: beginner to advanced</option>
                <option value="level-desc">Level: advanced to beginner</option>
                <option value="lines">Volume of continuation lines</option>
                <option value="name">Name: A to Z</option>
                <option value="eco">ECO code</option>
              </select>
            </div>
            
            <span className="text-xs text-muted hidden md:inline-block">
              {sortedAndFilteredOpenings.length} of {openings.length} folios indexed
            </span>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, ECO, motive..."
              className="w-full bg-paper-2 border border-rule rounded-none pl-9 pr-3 py-1.5 text-xs text-ink placeholder-muted focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Archival Interstitial: The Anatomy of the Sacrifice */}
      <section className="bg-paper-2 p-5 border border-rule mb-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-bad-soft text-secondary px-2 py-0.5 text-xs font-medium">
              <Flame className="w-3.5 h-3.5 text-secondary" />
              <span>Tactical spotlight</span>
            </div>
            <h2 className="font-serif text-2xl text-primary font-normal tracking-tight">
              The anatomy of the sacrifice
            </h2>
            <p className="text-xs text-ink-2 leading-relaxed">
              Modern engine analysis validates romantic instinct: pawn sacs that concede early structure yield decisive space and king-hunting initiative. Examine the master continuations indexed below.
            </p>
            <div className="flex items-center gap-4 pt-1 text-xs text-muted">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Verified ECO lines
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Master continuation notes
              </span>
            </div>
          </div>

          <div className="bg-paper-lowest p-3 border border-rule flex items-center gap-3 shrink-0 max-w-sm">
            <div className="w-10 h-10 bg-paper-3 border border-rule flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs text-secondary font-medium block">Historical record</span>
              <span className="font-serif text-sm font-semibold text-primary">Greco to Tal</span>
              <p className="text-xs text-muted leading-tight mt-0.5">
                From 1619 counter-thrusts to 1960 fireworks, tactical lines dictate the tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                      ? 'bg-primary'
                      : group.level === 'intermediate'
                      ? 'bg-secondary'
                      : 'bg-cool'
                  }`}
                />
                <h2 className="font-serif text-xl font-normal text-primary tracking-tight flex items-center gap-2">
                  <span>{group.title}</span>
                  <span className="text-xs px-2 py-0.5 border border-rule bg-paper-3 text-muted font-mono">
                    {group.items.length}
                  </span>
                </h2>
                <span className="hidden sm:inline-block text-xs text-muted ml-1">
                  : {group.subtitle}
                </span>
              </div>

              {/* Cards Grid */}
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
        <div className="py-16 text-center text-muted text-xs bg-paper-2 border border-rule">
          No openings or gambits found matching &ldquo;{searchQuery}&rdquo;.
        </div>
      )}
    </div>
  );
}
