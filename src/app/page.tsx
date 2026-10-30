import OpeningCatalog from '../components/OpeningCatalog';
import { OPENINGS_DATA } from '../data/openings';
import { Swords } from 'lucide-react';

export default function Home() {
  const totalVariations = OPENINGS_DATA.reduce((acc, o) => acc + o.variations.length, 0);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans">
      {/* Navigation */}
      <header className="border-b border-rule bg-paper-2 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-rule bg-paper-3 flex items-center justify-center">
              <Swords className="w-4 h-4 text-ink stroke-[2.2]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-base tracking-tight text-ink">
                Sac
              </span>
              <span className="hidden sm:inline-block text-xs text-muted">
                Chess openings and gambits
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-muted">
            <span><span className="font-mono text-ink">{OPENINGS_DATA.length}</span> openings</span>
            <span className="text-rule">/</span>
            <span><span className="font-mono text-ink">{totalVariations}</span> lines</span>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="border-b border-rule bg-paper">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              Master chess openings through tactical lines
            </h1>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Study classical systems and gambits with master continuations and tactical breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog */}
      <main className="flex-1 bg-paper">
        <OpeningCatalog openings={OPENINGS_DATA} />
      </main>

      {/* Footer */}
      <footer className="border-t border-rule bg-paper-2 py-6 text-xs text-muted">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <span className="font-medium text-ink">Sac</span>: Interactive chess opening trainer with complete move trees.
          </p>
          <div className="flex items-center gap-4 text-muted">
            <span>Select an opening to begin line practice</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
