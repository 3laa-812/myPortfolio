import { useEffect, useRef, useState } from 'react';
import SectionWrapper from './SectionWrapper';

function useCountUp(target: number, duration = 800, started: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!started) return;
    // If target is not a pure number (e.g. "v5.0", "~55"), skip animation
    if (isNaN(Number(String(target).replace(/[~+%]/g, '')))) {
      setCount(target);
      return;
    }
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [target, duration, started]);

  return count;
}

function MetricCard({ val, color, label, delay }: { val: string; color: string; label: string; delay: number }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Extract numeric value for animation
  const prefix = val.startsWith('~') ? '~' : '';
  const suffix = val.endsWith('+') ? '+' : val.endsWith('%') ? '%' : val.startsWith('v') ? val.slice(1) : '';
  const numeric = Number(val.replace(/[~+%v]/g, ''));
  const isAnimatable = !isNaN(numeric) && numeric > 0;

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const count = useCountUp(isAnimatable ? numeric : 0, 700, started);
  const displayVal = isAnimatable
    ? `${prefix}${count}${suffix}`
    : val;

  return (
    <div
      ref={ref}
      className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-4 md:p-5 flex flex-col items-center justify-center text-center gap-1.5 active:scale-[0.97] transition-transform duration-100"
    >
      <div className={`text-2xl md:text-3xl font-mono font-semibold ${color} animate-count-in`}>
        {displayVal}
      </div>
      <div className="text-[9px] md:text-[10px] font-mono font-semibold text-[var(--text3)] uppercase tracking-wider leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function Metrics() {
  const cards = [
    { val: '2', color: 'text-[var(--accent)]', label: 'Production Codebases' },
    { val: '4', color: 'text-[var(--accent2)]', label: 'Personal Projects Shipped' },
    { val: '12+', color: 'text-[var(--accent3)]', label: 'Technologies Used' },
    { val: '~55', color: 'text-[#aa77ff]', label: 'API Endpoints Built' },
    { val: '4', color: 'text-[var(--accent)]', label: 'DB Schemas Designed' },
    { val: '~8', color: 'text-[var(--accent2)]', label: 'Projects Abandoned' },
    { val: '80%', color: 'text-[var(--accent3)]', label: 'Learning Consistency' },
    { val: 'v5.0', color: 'text-[#aa77ff]', label: 'Engineer Version' },
  ];

  return (
    <SectionWrapper
      number="08"
      title="Metrics"
      subtitle="// honest numbers, no padding"
    >
      <div className="flex flex-col gap-6 select-none">

        {/* 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {cards.map((card, idx) => (
            <MetricCard
              key={idx}
              val={card.val}
              color={card.color}
              label={card.label}
              delay={idx * 80}
            />
          ))}
        </div>

        {/* Scope Growth Timeline Block */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 md:p-6 flex flex-col gap-4 font-mono text-xs md:text-sm">
          <h3 className="text-xs font-semibold tracking-wider text-[var(--text3)] uppercase">
            // Scope Growth Timeline
          </h3>

          <div className="space-y-3 leading-relaxed text-[var(--text2)]">
            <div className="flex items-start gap-3 md:gap-4">
              <span className="text-[var(--text3)] shrink-0 select-none text-[11px] md:text-xs">2023 ─</span>
              <span>Static HTML · Tutorial clones · Single files · No state</span>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <span className="text-[var(--text3)] shrink-0 select-none text-[11px] md:text-xs">2024 ─</span>
              <span>React projects · JS CRUD · Client-side · Mocked API</span>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <span className="text-[var(--text3)] shrink-0 select-none text-[11px] md:text-xs">2025 ─</span>
              <span>Full-stack begins · Custom API + DB + Auth · SustainGRC production</span>
            </div>

            <div className="flex items-start gap-3 md:gap-4 text-[var(--text)]">
              <span className="text-[var(--accent)] shrink-0 select-none text-[11px] md:text-xs">2026 ─</span>
              <span className="flex flex-wrap items-center gap-2">
                Multi-surface products · Web + API + Mobile + RBAC · Architecture-first
                <span className="text-[var(--accent)] text-[10px]">← active</span>
              </span>
            </div>
          </div>
        </div>

        {/* What I Don't Measure block */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 md:p-6 flex flex-col gap-3 font-sans">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // What I Don't Measure
          </h3>
          <div className="flex flex-col gap-2 text-xs md:text-sm text-[var(--text2)] leading-relaxed">
            <div>
              <strong className="text-[var(--text)] font-semibold font-mono text-[11px]">Lines of code</strong>
              {' — '}the worst possible proxy for output. The best code I've written was usually deletions.
            </div>
            <div>
              <strong className="text-[var(--text)] font-semibold font-mono text-[11px]">Hours worked</strong>
              {' — '}deep work hours matter, clock hours are noise.
            </div>
            <div>
              <strong className="text-[var(--text)] font-semibold font-mono text-[11px]">Tutorials completed</strong>
              {' — '}those are inputs, not outputs.
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
