import OpeningCatalog from '../components/OpeningCatalog';
import { OPENINGS_DATA } from '../data/openings';
import { Swords, Flame, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Navigation */}
      <header className="border-b border-zinc-800/80 bg-zinc-900/50 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-900/40">
              <Swords className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Sac
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Chess Openings & Gambits
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/50">
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>Sacrifice Theory</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/50">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Spaced Practice</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area: Openings & Gambits Catalog Explorer */}
      <main className="flex-1">
        <OpeningCatalog openings={OPENINGS_DATA} />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950/80 py-6 text-center text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <span className="font-semibold text-zinc-300">Sac</span> — Master chess openings and gambits through interactive muscle memory.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Select any opening or gambit to launch the interactive trainer</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
