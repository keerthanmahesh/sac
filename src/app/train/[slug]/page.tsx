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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Navigation Bar with Back Button */}
      <header className="border-b border-zinc-800/80 bg-zinc-900/50 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 hover:text-white transition text-xs font-semibold border border-zinc-700/50 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Catalog</span>
            </Link>

            <div className="h-5 w-px bg-zinc-800" />

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-900/40">
                <Swords className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white hidden sm:inline-block">
                Sac
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-medium text-zinc-400">
            <span className="hidden md:inline-block px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 font-mono text-zinc-300">
              {opening.eco}
            </span>
            <span className="hidden sm:inline-block text-zinc-300 font-semibold truncate max-w-[200px]">
              {opening.name}
            </span>
          </div>
        </div>
      </header>

      {/* Main Interactive Board & Trainer Area */}
      <main className="flex-1">
        <ChessTrainer initialOpening={opening} allOpenings={OPENINGS_DATA} />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950/80 py-6 text-center text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/"
            className="text-emerald-400 hover:text-emerald-300 transition font-medium flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Catalog</span>
          </Link>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Drag pieces or click to play • Audio enabled</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TrainSkeleton() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      <header className="border-b border-zinc-800/80 bg-zinc-900/50 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-32 h-8 rounded-xl bg-zinc-800/50 animate-pulse" />
          </div>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-3 text-zinc-500 text-sm">
          <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <span>Loading trainer...</span>
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
