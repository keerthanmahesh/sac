import OpeningCatalog from '../components/OpeningCatalog';
import { OPENINGS_DATA } from '../data/openings';
import { Swords } from 'lucide-react';

export default function Home() {
  const totalVariations = OPENINGS_DATA.reduce((acc, o) => acc + o.variations.length, 0);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans">
      {/* Editorial Header */}
      <header className="border-b border-rule bg-paper-2 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-none border border-rule bg-paper-3 flex items-center justify-center">
              <Swords className="w-4 h-4 text-primary stroke-[2.2]" />
            </div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-primary font-normal tracking-tight">
                Sac
              </span>
              <span className="hidden sm:inline-block text-xs text-muted pl-3 border-l border-rule">
                Compendium of openings and gambits
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted bg-paper-3 px-3 py-1 border border-rule">
              <span className="font-mono font-semibold text-primary">{OPENINGS_DATA.length}</span>
              <span>openings</span>
              <span className="text-rule">/</span>
              <span className="font-mono font-semibold text-secondary">{totalVariations}</span>
              <span>lines</span>
            </div>
          </div>
        </div>
      </header>

      {/* Editorial Hero & Archival Lede */}
      <section className="border-b border-rule bg-paper">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2 text-xs text-muted">
              <span className="text-primary bg-paper-3 px-2 py-0.5 border border-rule">
                Volume IV: Compendium
              </span>
              <span className="w-6 h-px bg-rule"></span>
              <span>
                Archival repertoire index
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-primary font-normal tracking-tight">
              Master chess openings through tactical lines
            </h1>
            <p className="mt-2 font-serif text-base sm:text-lg italic text-ink-2 max-w-2xl leading-relaxed">
              Study classical systems and gambits with master continuations and tactile breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog */}
      <main className="flex-1 bg-paper">
        <OpeningCatalog openings={OPENINGS_DATA} />
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-rule bg-paper-2 py-6 text-xs text-muted">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <span className="font-serif font-medium text-primary text-sm">Sac</span>: Interactive chess opening compendium with verified master lines.
          </p>
          <div className="flex items-center gap-4 text-muted text-xs">
            <span>Archival edition</span>
            <span className="text-rule">/</span>
            <span>All 22 systems active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
