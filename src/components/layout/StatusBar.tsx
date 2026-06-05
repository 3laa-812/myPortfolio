import { useClock } from '../../hooks/useClock';

export default function StatusBar() {
  const time = useClock();

  return (
    <div className="hidden md:flex fixed top-0 left-0 right-0 h-[36px] bg-[var(--bg2)] border-b border-[var(--border)] z-[100] items-center justify-between px-4 font-mono text-[11px] select-none">
      <div className="flex items-center gap-3">
        <span className="text-[var(--accent)] font-semibold tracking-wider">ALAA.DEV</span>
        <span className="text-[var(--text3)]">|</span>
        
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse-dot"></span>
          <span className="text-[var(--text2)]">Engineering Command Center</span>
        </div>
        
        <span className="text-[var(--text3)]">|</span>
        
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--accent3)]"></span>
          <span className="text-[var(--text2)]">Actively building</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-[var(--accent)] font-medium">
        <span>EGY</span>
        <span>{time}</span>
      </div>
    </div>
  );
}
