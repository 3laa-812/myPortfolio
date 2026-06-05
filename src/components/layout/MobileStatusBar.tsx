import { useRef, useState } from 'react';
import { useClock } from '../../hooks/useClock';
import { SectionId } from '../../types';

interface MobileStatusBarProps {
  onSecretUnlock: () => void;
  visitCount: number;
}

export default function MobileStatusBar({ onSecretUnlock, visitCount }: MobileStatusBarProps) {
  const time = useClock();
  const [tapCount, setTapCount] = useState(0);
  const [flashActive, setFlashActive] = useState(false);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasVisitedSecret = sessionStorage.getItem('visitedSecret') === 'true';
  const secretUnlockable = visitCount >= 4 || hasVisitedSecret;
  const requiredTaps = secretUnlockable ? 5 : 7;

  const handleLogoTap = () => {
    const next = tapCount + 1;

    if (tapTimer.current) clearTimeout(tapTimer.current);

    if (next >= requiredTaps) {
      setTapCount(0);
      setFlashActive(true);
      setTimeout(() => setFlashActive(false), 600);
      onSecretUnlock();
      return;
    }

    setTapCount(next);
    tapTimer.current = setTimeout(() => setTapCount(0), 1500);
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-[44px] bg-[var(--bg2)] border-b border-[var(--border)] z-[100] flex items-center justify-between px-4 font-mono text-[11px] select-none md:hidden">
      {/* Left — Logo (easter egg trigger) */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={handleLogoTap}
          className={`font-semibold tracking-wider transition-colors duration-150 ${
            flashActive
              ? 'text-[var(--accent3)]'
              : tapCount > 0
              ? 'text-[var(--accent)]'
              : 'text-[var(--accent)]'
          }`}
          style={{ WebkitTapHighlightColor: 'transparent' }}
          aria-label="Engineering Command Center"
        >
          ALAA.DEV
        </button>

        {/* Tap progress indicator */}
        {tapCount > 0 && tapCount < requiredTaps && (
          <div className="flex gap-[3px] items-center">
            {Array.from({ length: requiredTaps }).map((_, i) => (
              <div
                key={i}
                className={`w-[3px] h-[3px] rounded-full transition-colors duration-100 ${
                  i < tapCount ? 'bg-[var(--accent)]' : 'bg-[var(--border2)]'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right — Status + Clock */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--accent)] animate-pulse-dot" />
          <span className="text-[var(--text3)] text-[10px]">active</span>
        </div>
        <span className="text-[var(--text3)]">|</span>
        <span className="text-[var(--accent)] font-medium">{time}</span>
      </div>
    </div>
  );
}
