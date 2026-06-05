import { SectionId } from '../../types';

interface HomeProps {
  showSection: (id: SectionId) => void;
}

export default function Home({ showSection }: HomeProps) {
  return (
    <div className="relative min-h-[calc(100vh-36px)] md:min-h-[calc(100vh-36px)] w-full flex flex-col justify-center px-5 sm:px-8 md:px-20 overflow-hidden animate-section-fade select-none">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[900px] w-full py-8 md:py-12 flex flex-col gap-6 md:gap-8">

        {/* Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-6 md:w-8 h-[1px] bg-[var(--accent)]" />
          <span className="font-mono text-[10px] md:text-xs text-[var(--accent)] tracking-widest font-medium uppercase">
            ENGINEERING COMMAND CENTER — v5.0
          </span>
        </div>

        {/* Name Header */}
        <h1 className="text-[42px] sm:text-[52px] md:text-[72px] font-bold leading-[1.05] tracking-tighter text-[var(--text)]">
          Alaa<br />
          <span className="text-[var(--accent)]">Ragab</span>
        </h1>

        {/* Role Subtitle */}
        <div className="font-mono text-xs md:text-base text-[var(--text2)]">
          Software Engineer <span className="text-[var(--text3)]">·</span> CS Student <span className="text-[var(--text3)]">·</span> Builder
        </div>

        {/* Terminal Block */}
        <div className="w-full max-w-[560px] bg-[var(--bg3)] border border-[var(--border2)] rounded-lg p-4 md:p-5 font-mono text-[12px] md:text-[13px] leading-relaxed">
          <div className="flex items-center gap-1.5 mb-3 md:mb-4 border-b border-[var(--border)] pb-2 md:pb-2.5">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[var(--accent3)] opacity-60"></span>
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500 opacity-60"></span>
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[var(--accent)] opacity-60"></span>
            <span className="text-[9px] md:text-[10px] text-[var(--text3)] ml-2 font-mono">session: alaar@host</span>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div>
              <div className="text-[var(--text3)]">$ whoami</div>
              <div className="text-[var(--accent)] font-medium">alaa_ragab</div>
            </div>

            <div>
              <div className="text-[var(--text3)]">$ cat ./stack.txt</div>
              <div className="text-[var(--accent2)] font-medium leading-snug">React · Next.js · TypeScript · NestJS · ASP.NET</div>
            </div>

            {/* On mobile, show fewer git log lines to save space */}
            <div>
              <div className="text-[var(--text3)]">$ git log --oneline -2</div>
              <div className="text-[var(--text2)] space-y-1">
                <div><span className="text-[var(--text3)]">a3f1c2b</span> <span className="text-[var(--text)]">Cloud Manager: RBAC module</span></div>
                <div className="hidden sm:block"><span className="text-[var(--text3)]">e7d90a1</span> <span className="text-[var(--text)]">Construction Connect: mobile API</span></div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[var(--text3)]">$</span>
              <span className="w-[7px] h-[13px] bg-[var(--accent)] animate-cursor-blink"></span>
            </div>
          </div>
        </div>

        {/* CTA Buttons — stacked on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-1">
          <button
            onClick={() => showSection('projects')}
            className="px-5 py-3 sm:py-2.5 bg-[var(--accent)] hover:bg-[#00e67a] text-black font-semibold rounded font-mono text-xs transition-colors active:scale-[0.97] text-center"
          >
            View Case Studies →
          </button>

          <button
            onClick={() => showSection('identity')}
            className="px-5 py-3 sm:py-2.5 border border-[var(--border2)] hover:border-[var(--text2)] hover:bg-[rgba(255,255,255,0.02)] rounded font-mono text-xs transition-colors active:scale-[0.97] text-center"
          >
            Engineering Identity
          </button>

          <button
            onClick={() => showSection('now')}
            className="px-5 py-3 sm:py-2.5 border border-[var(--border2)] hover:border-[var(--text2)] hover:bg-[rgba(255,255,255,0.02)] rounded font-mono text-xs transition-colors active:scale-[0.97] text-center"
          >
            What I'm Building Now
          </button>
        </div>

        {/* Stats — inline row on mobile (moved from absolute position) */}
        <div className="flex gap-6 sm:gap-8 md:gap-12 font-mono mt-2 md:hidden">
          <div>
            <div className="text-xl font-medium tracking-tight text-[var(--text)]">2+</div>
            <div className="text-[9px] text-[var(--text3)] tracking-wider mt-0.5 uppercase leading-snug">Production<br />Apps</div>
          </div>
          <div>
            <div className="text-xl font-medium tracking-tight text-[var(--text)]">12+</div>
            <div className="text-[9px] text-[var(--text3)] tracking-wider mt-0.5 uppercase leading-snug">Technologies<br />Used</div>
          </div>
          <div>
            <div className="text-xl font-medium tracking-tight text-[var(--text)]">v5.0</div>
            <div className="text-[9px] text-[var(--text3)] tracking-wider mt-0.5 uppercase leading-snug">Current<br />Version</div>
          </div>
        </div>

      </div>

      {/* Stats Bottom Right — desktop only */}
      <div className="hidden md:flex absolute bottom-10 right-10 z-10 gap-8 md:gap-12 text-right font-mono">
        <div>
          <div className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text)]">2+</div>
          <div className="text-[10px] text-[var(--text3)] tracking-wider mt-1 uppercase leading-snug">
            Production<br />Apps
          </div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text)]">12+</div>
          <div className="text-[10px] text-[var(--text3)] tracking-wider mt-1 uppercase leading-snug">
            Technologies<br />Used
          </div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text)]">v5.0</div>
          <div className="text-[10px] text-[var(--text3)] tracking-wider mt-1 uppercase leading-snug">
            Current<br />Version
          </div>
        </div>
      </div>
    </div>
  );
}
