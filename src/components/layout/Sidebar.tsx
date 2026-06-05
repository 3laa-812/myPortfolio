import { SectionId } from '../../types';

interface SidebarProps {
  currentSection: SectionId;
  showSection: (id: SectionId) => void;
  visitCount: number;
}

export default function Sidebar({ currentSection, showSection, visitCount }: SidebarProps) {
  const navItems: { id: SectionId; label: string; icon: string; keyHint: string }[] = [
    { id: 'home', label: 'Home', icon: '⌂', keyHint: 'H' },
    { id: 'identity', label: 'Identity', icon: '◉', keyHint: 'I' },
    { id: 'now', label: 'Now', icon: '▣', keyHint: 'N' },
    { id: 'projects', label: 'Projects', icon: '◈', keyHint: 'P' },
    { id: 'systems', label: 'Systems', icon: '◎', keyHint: 'S' },
    { id: 'lab', label: 'Lab', icon: '⬡', keyHint: 'L' },
    { id: 'journey', label: 'Journey', icon: '◷', keyHint: 'J' },
    { id: 'playbook', label: 'Playbook', icon: '▤', keyHint: 'B' },
    { id: 'manifesto', label: 'Manifesto', icon: '◈', keyHint: 'M' },
    { id: 'metrics', label: 'Metrics', icon: '▦', keyHint: 'X' },
    { id: 'future', label: 'Future', icon: '▷', keyHint: 'F' },
  ];

  // Track if they have ever visited secret during this session
  // If they are currently in secret, it counts. If they've visited it, it counts.
  const hasVisitedSecret = currentSection === 'secret' || sessionStorage.getItem('visitedSecret') === 'true';
  if (currentSection === 'secret') {
    sessionStorage.setItem('visitedSecret', 'true');
  }

  let hiddenLabel = "HIDDEN";
  if (hasVisitedSecret) {
    hiddenLabel = "↳ Inside The Engineer";
  } else if (visitCount >= 4) {
    hiddenLabel = "press / to explore";
  }

  let hiddenText = "???";
  if (hasVisitedSecret) {
    hiddenText = "Inside The Engineer";
  }

  let hiddenClass = "";
  if (currentSection === 'secret') {
    hiddenClass = "bg-[rgba(255,107,53,0.05)] text-[var(--accent3)] border-[var(--accent3)]";
  } else if (hasVisitedSecret) {
    hiddenClass = "text-[var(--accent3)] border-transparent hover:bg-[rgba(255,107,53,0.02)]";
  } else if (visitCount >= 4) {
    hiddenClass = "text-[var(--accent3)] opacity-50 border-transparent hover:opacity-100 hover:bg-[rgba(255,107,53,0.02)]";
  } else {
    hiddenClass = "text-[var(--text3)] border-transparent cursor-not-allowed";
  }

  return (
    <aside className="hidden md:flex fixed left-0 top-[36px] bottom-0 w-[220px] bg-[var(--bg2)] border-r border-[var(--border)] flex-col justify-between select-none z-40">
      <div className="py-6 overflow-y-auto flex-1">
        <div className="px-6 mb-4 text-[10px] font-mono font-semibold tracking-[0.12em] text-[var(--text3)] uppercase">
          NAVIGATION
        </div>
        <nav className="flex flex-col">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => showSection(item.id)}
                className={`flex items-center justify-between px-6 py-2.5 text-left font-mono text-xs transition-all border-l-2 ${
                  isActive
                    ? 'bg-[rgba(0,255,136,0.05)] text-[var(--accent)] border-[var(--accent)] font-medium'
                    : 'text-[var(--text2)] border-transparent hover:text-[var(--text)] hover:bg-[rgba(255,255,255,0.01)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isActive ? 'text-[var(--accent)]' : 'text-[var(--text3)]'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] text-[var(--text3)] opacity-60">[{item.keyHint}]</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-[var(--border)] py-6">
        <div className="px-6 mb-3 text-[10px] font-mono font-semibold tracking-[0.12em] text-[var(--text3)] uppercase">
          {hiddenLabel}
        </div>
        
        <button
          onClick={() => (visitCount >= 4 || hasVisitedSecret) && showSection('secret')}
          className={`flex items-center justify-between px-6 py-2.5 w-full text-left font-mono text-xs transition-all border-l-2 ${hiddenClass}`}
          disabled={visitCount < 4 && !hasVisitedSecret}
        >
          <div className="flex items-center gap-2.5">
            <span>{hasVisitedSecret ? '↳' : '⬡'}</span>
            <span>{hiddenText}</span>
          </div>
          <span className="text-[10px] opacity-60">[?]</span>
        </button>
      </div>
    </aside>
  );
}
