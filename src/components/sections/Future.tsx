import SectionWrapper from './SectionWrapper';

export default function Future() {
  const columns = [
    {
      horizon: '12 Months',
      goal: 'Land a role where the work is harder than anything I\'ve built alone',
      items: [
        'Backend or full-stack (not exclusively frontend)',
        'Cloud fundamentals — deploy and operate, not just read',
        'System design literacy across unfamiliar domains',
        'First open source contribution (code, not docs)',
        'Start publishing engineering notes publicly',
      ],
    },
    {
      horizon: '3 Years',
      goal: 'Genuinely strong at backend engineering and system design',
      items: [
        'Degree complete (CS, 2027)',
        'Shipped systems at a scale I can\'t create solo',
        'Distributed systems problems through experience',
        'Led a non-trivial technical project end-to-end',
        'Net positive technical influence on team, not just self',
      ],
    },
    {
      horizon: '5 Years',
      goal: 'Problem size matches capability',
      items: [
        'Technical depth that compounds across domains',
        'Product judgment alongside engineering judgment',
        'Something I built at scale that real people depend on',
        'Open possibility: Construction Connect as a real business',
        'Stack agnostic — principles transfer to new tools',
      ],
    },
  ];

  return (
    <SectionWrapper
      number="09"
      title="Future"
      subtitle="// roadmap as hypotheses, not promises"
    >
      <div className="flex flex-col gap-6 select-none">
        
        {/* 3-Column Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map((col, idx) => (
            <div 
              key={idx}
              className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-6 flex flex-col gap-4"
            >
              {/* Horizon Label */}
              <div className="font-mono text-[11px] text-[var(--text3)] uppercase tracking-wider font-semibold">
                {col.horizon}
              </div>

              {/* Goal Title */}
              <h3 className="text-sm font-medium text-[var(--text)] leading-snug">
                {col.goal}
              </h3>

              {/* Items List */}
              <div className="flex flex-col mt-2">
                {col.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="py-2.5 border-b border-[var(--border)] last:border-0 text-xs md:text-[13px] text-[var(--text2)] leading-relaxed flex gap-2 items-start"
                  >
                    <span className="text-[var(--accent2)] font-mono shrink-0 select-none">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What I'm Not Chasing Block */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-6 flex flex-col gap-3 font-sans">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // What I'm Not Chasing
          </h3>
          <p className="text-xs md:text-sm text-[var(--text2)] leading-relaxed">
            Not optimizing for titles. <strong className="text-[var(--text)] font-medium">"Senior Software Engineer" in five years</strong> is the expected path — it may happen, but it's not the target.
            <br className="mb-2" />
            Not chasing companies for prestige. The right problem at the right stage of a company teaches more than the right logo.
            <br className="mb-2" />
            Not betting on a fixed stack. The tools I'll use in five years probably include things that aren't mainstream yet.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
}
