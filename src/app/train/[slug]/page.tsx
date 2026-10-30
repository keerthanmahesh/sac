import React, { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ChessTrainer from '../../../components/ChessTrainer';
import { OPENINGS_DATA } from '../../../data/openings';
import { Swords, ArrowLeft } from 'lucide-react';

interface TrainPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return OPENINGS_DATA.map((opening) => ({
    slug: opening.slug,
  }));
}

async function TrainContent({ params }: TrainPageProps) {
  const { slug } = await params;
  const opening = OPENINGS_DATA.find((o) => o.slug === slug);

  if (!opening) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="border-b border-rule bg-paper-2 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3 py-1.5 border border-rule bg-paper hover:bg-paper-3 active:opacity-80 disabled:opacity-50 text-ink hover:text-primary transition-colors duration-150 text-xs font-medium flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-muted" />
              <span>Catalog</span>
            </Link>

            <div className="h-5 w-px bg-rule" />

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none border border-rule bg-paper-3 flex items-center justify-center">
                <Swords className="w-4 h-4 text-primary stroke-[2.2]" />
              </div>
              <span className="font-serif text-2xl text-primary font-normal tracking-tight">
                Sac
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs">
            <span className="px-2 py-0.5 bg-paper-3 border border-rule font-mono font-bold text-primary">
              {opening.eco}
            </span>
            <span className="hidden sm:inline-block font-serif text-sm font-medium text-ink truncate max-w-xs">
              {opening.name}
            </span>
          </div>
        </div>
      </header>

      {/* Main Interactive Board & Trainer Area */}
      <main className="flex-1 bg-paper">
        <ChessTrainer initialOpening={opening} allOpenings={OPENINGS_DATA} />
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-rule bg-paper-2 py-5 text-xs text-muted">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/"
            className="text-primary hover:underline transition-colors font-medium"
          >
            Return to compendium catalog
          </Link>
          <div className="flex items-center gap-3 text-muted text-xs">
            <span>Drag pieces or click squares to move</span>
            <span className="text-rule">/</span>
            <span>Master book validation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TrainSkeleton() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans">
      <header className="border-b border-rule bg-paper-2 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-20 h-7 bg-paper-3 motion-reduce:animate-none motion-safe:animate-pulse border border-rule" />
          </div>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-3 text-muted text-xs">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full motion-reduce:animate-none motion-safe:animate-spin" />
          <span>Opening study board…</span>
        </div>
      </div>
    </div>
  );
}

export default async function TrainPage({ params }: TrainPageProps) {
  return (
    <Suspense fallback={<TrainSkeleton />}>
      <TrainContent params={params} />
    </Suspense>
  );
}
