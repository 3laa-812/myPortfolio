import React from 'react';

interface SectionWrapperProps {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  accentClass?: string;
  titleClass?: string;
}

export default function SectionWrapper({
  number,
  title,
  subtitle,
  children,
  className = '',
  accentClass = 'text-[var(--accent)]',
  titleClass = 'text-[var(--text)]',
}: SectionWrapperProps) {
  return (
    <section className={`animate-section-fade max-w-[900px] mx-auto px-4 sm:px-8 md:px-14 py-8 md:py-[48px] ${className}`}>
      <header className="mb-8 font-mono">
        <div className="flex items-baseline gap-3 mb-2">
          <span className={`${accentClass} text-sm font-semibold`}>{number}</span>
          <h2 className={`text-lg font-semibold uppercase tracking-wider ${titleClass}`}>{title}</h2>
        </div>
        <div className="text-xs text-[var(--text3)]">{subtitle}</div>
        <div className="h-[1px] bg-[var(--border)] mt-4 w-full"></div>
      </header>
      <div className="text-[var(--text)]">
        {children}
      </div>
    </section>
  );
}
