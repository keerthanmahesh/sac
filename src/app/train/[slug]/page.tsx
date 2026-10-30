import React, { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ChessTrainer from '../../../components/ChessTrainer';
import { OPENINGS_DATA } from '../../../data/openings';
import { Swords } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-2.5 py-1 rounded border border-rule bg-paper hover:bg-paper-3 text-ink-2 hover:text-ink transition-colors text-xs font-medium"
            >
              Catalog
            </Link>

            <div className="h-4 w-px bg-rule" />

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded border border-rule bg-paper-3 flex items-center justify-center">
                <Swords className="w-3.5 h-3.5 text-ink stroke-[2.2]" />
              </div>
              <span className="font-semibold text-sm tracking-tight text-ink hidden sm:inline-block">
                Sac
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-muted">
            <span className="px-2 py-0.5 rounded bg-paper-3 border border-rule font-mono text-accent">
              {opening.eco}
            </span>
            <span className="hidden sm:inline-block text-ink-2 font-medium truncate max-w-xs">
              {opening.name}
            </span>
          </div>
        </div>
      </header>

      {/* Main Interactive Board & Trainer Area */}
      <main className="flex-1 bg-paper">
        <ChessTrainer initialOpening={opening} allOpenings={OPENINGS_DATA} />
      </main>

      {/* Footer */}
      <footer className="border-t border-rule bg-paper-2 py-5 text-xs text-muted">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/"
            className="text-ink-2 hover:text-ink transition-colors font-medium"
          >
            Return to catalog
          </Link>
          <div className="flex items-center gap-3 text-muted">
            <span>Drag pieces or click squares to move</span>
            <span className="text-rule">/</span>
            <span>Audio enabled</span>
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
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-20 h-7 rounded bg-paper-3 animate-pulse border border-rule" />
          </div>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-3 text-muted text-xs">
          <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <span>Loading trainer…</span>
        </div>
      </div>
    </div>
  );
}

export default function TrainPage({ params }: TrainPageProps) {
  return (
    <Suspense fallback={<TrainSkeleton />}>
      <TrainContent params={params} />
    </Suspense>
  );
}
