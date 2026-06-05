import { useState } from 'react';
import { SectionId } from '../../types';

interface MobileBottomNavProps {
  currentSection: SectionId;
  showSection: (id: SectionId) => void;
  visitCount: number;
}

interface Tab {
  id: string;
  icon: string;
  label: string;
  sections: { id: SectionId; label: string; icon: string }[];
}

export default function MobileBottomNav({ currentSection, showSection, visitCount }: MobileBottomNavProps) {
  const [openSheet, setOpenSheet] = useState<string | null>(null);

  const hasVisitedSecret = currentSection === 'secret' || sessionStorage.getItem('visitedSecret') === 'true';
  if (currentSection === 'secret') sessionStorage.setItem('visitedSecret', 'true');
  const secretUnlocked = visitCount >= 4 || hasVisitedSecret;

  const tabs: Tab[] = [
    {
      id: 'home',
      icon: '⌂',
      label: 'Home',
      sections: [{ id: 'home', label: 'Home', icon: '⌂' }],
    },
    {
      id: 'projects-tab',
      icon: '◈',
      label: 'Projects',
      sections: [
        { id: 'projects', label: 'Projects', icon: '◈' },
        { id: 'now', label: 'Now', icon: '▣' },
      ],
    },
    {
      id: 'systems-tab',
      icon: '◎',
      label: 'Systems',
      sections: [
        { id: 'systems', label: 'Systems', icon: '◎' },
        { id: 'lab', label: 'Lab', icon: '⬡' },
      ],
    },
    {
      id: 'journey-tab',
      icon: '◷',
      label: 'Journey',
      sections: [
        { id: 'journey', label: 'Journey', icon: '◷' },
        { id: 'identity', label: 'Identity', icon: '◉' },
        { id: 'metrics', label: 'Metrics', icon: '▦' },
      ],
    },
    {
      id: 'more-tab',
      icon: '≡',
      label: 'More',
      sections: [
        { id: 'playbook', label: 'Playbook', icon: '▤' },
        { id: 'manifesto', label: 'Manifesto', icon: '◈' },
        { id: 'future', label: 'Future', icon: '▷' },
        ...(secretUnlocked
          ? [{ id: 'secret' as SectionId, label: 'Inside The Engineer', icon: '↳' }]
          : []),
      ],
    },
  ];

  const getTabActive = (tab: Tab) =>
    tab.sections.some((s) => s.id === currentSection);

  const handleTabPress = (tab: Tab) => {
    if (tab.sections.length === 1) {
      setOpenSheet(null);
      showSection(tab.sections[0].id);
      return;
    }
    // Toggle sheet
    setOpenSheet(openSheet === tab.id ? null : tab.id);
  };

  const handleSheetItemPress = (id: SectionId) => {
    setOpenSheet(null);
    showSection(id);
  };

  const sheetTab = tabs.find((t) => t.id === openSheet);

  return (
    <>
      {/* Sheet overlay */}
      {openSheet && (
        <div
          className="fixed inset-0 z-[49]"
          onClick={() => setOpenSheet(null)}
          aria-hidden="true"
        />
      )}

      {/* Slide-up sheet */}
      {sheetTab && (
        <div
          className="fixed left-0 right-0 bottom-[68px] z-[50] bg-[var(--bg2)] border-t border-[var(--border)] rounded-t-xl overflow-hidden"
          style={{
            animation: 'sheetSlideUp 0.22s cubic-bezier(0.22, 1, 0.36, 1) forwards',
          }}
        >
          <div className="px-1 pt-3 pb-2">
            <div className="w-8 h-[3px] bg-[var(--border2)] rounded-full mx-auto mb-3" />
            {sheetTab.sections.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSheetItemPress(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 font-mono text-sm text-left transition-colors rounded-lg ${
                    isActive
                      ? 'bg-[rgba(0,255,136,0.06)] text-[var(--accent)]'
                      : 'text-[var(--text2)] hover:bg-[rgba(255,255,255,0.02)] active:bg-[rgba(255,255,255,0.04)]'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span className={`text-base ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text3)]'}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <span className="ml-auto text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider">
                      active
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom tab bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 h-[68px] bg-[var(--bg2)] border-t border-[var(--border)] z-[50] flex items-stretch md:hidden mobile-nav-shadow"
        role="tablist"
        aria-label="Main navigation"
      >
        {tabs.map((tab) => {
          const isActive = getTabActive(tab);
          const isSheetOpen = openSheet === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-label={tab.label}
              onClick={() => handleTabPress(tab)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all duration-150 relative ${
                isActive || isSheetOpen ? 'text-[var(--accent)]' : 'text-[var(--text3)]'
              } active:scale-95`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Active indicator line */}
              {(isActive || isSheetOpen) && (
                <div className="absolute top-0 left-[20%] right-[20%] h-[2px] bg-[var(--accent)] rounded-b-full" />
              )}

              <span
                className={`text-[17px] transition-transform duration-150 ${
                  isActive || isSheetOpen ? 'scale-110' : 'scale-100'
                }`}
              >
                {tab.icon}
              </span>
              <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.06em] leading-none">
                {tab.label}
              </span>

              {/* Multi-section indicator dot */}
              {tab.sections.length > 1 && (
                <div
                  className={`absolute top-2 right-[18%] w-[4px] h-[4px] rounded-full transition-colors ${
                    isActive ? 'bg-[var(--accent)]' : 'bg-[var(--text3)] opacity-50'
                  }`}
                />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
}
