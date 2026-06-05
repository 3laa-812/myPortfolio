import SectionWrapper from './SectionWrapper';

export default function Journey() {
  const timeline = [
    {
      version: 'v0.1 — First Contact',
      subtitle: 'Something on the screen was made by someone',
      body: 'Understood that websites were instructions a person wrote for a machine to follow — and that I could write those instructions too. First code was broken HTML. The alignment was wrong, the colors were wrong. But the page existed. I made it exist. That feeling hasn\'t changed.',
      tags: [],
      isCurrent: false,
    },
    {
      version: 'v1.0 — Web Foundations',
      subtitle: 'HTML · CSS · JavaScript',
      body: 'Tutorial-by-tutorial. The shift: built a weather app no tutorial told me to build. Every problem was mine to solve. Steep drop in learning speed when you leave guided paths — but the learning is different in kind, not just degree.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      isCurrent: false,
    },
    {
      version: 'v2.0 — React Clicks',
      subtitle: 'The component model changed how I thought about interfaces',
      body: 'React not as "weird syntax" but as a mental model — composable pieces with explicit data flow. State has a location. Props create contracts. Started TypeScript. The early friction was real. The later cost of working without it in large codebases is much worse.',
      tags: ['React', 'TypeScript', 'Component thinking'],
      isCurrent: false,
    },
    {
      version: 'v3.0 — First Production Code',
      subtitle: 'SustainGRC · Real codebase · Real consequences',
      body: 'Before: code existed until I closed the tab. After: code in production, serving users, being changed by other developers. The gap between "code that works" and "code that belongs in a shared codebase" is wider than any tutorial mentions. Stopped thinking about code as something I write. Started thinking about it as something a team maintains.',
      tags: ['Next.js', 'Zustand', 'Code review', 'Production'],
      isCurrent: false,
    },
    {
      version: 'v4.0 — Building Products',
      subtitle: 'Construction Connect · Features → Product thinking',
      body: 'A feature solves a technical sub-problem. A product solves a business problem with many technical sub-problems inside it. Building all three layers (web, API, mobile) simultaneously meant making decisions that weren\'t in any course: what problem are we actually solving? What\'s the minimum version that could be useful?',
      tags: ['NestJS', 'PostgreSQL', 'React Native', 'Full-stack'],
      isCurrent: false,
    },
    {
      version: 'v5.0 — Architecture Thinking',
      subtitle: 'The problems have become interesting',
      body: 'At v4, thinking about features. At v5, thinking about systems. What does it mean to design a permission model that scales? How do you structure a codebase so features are additions, not rewrites? Working on a system that intentionally replicates cloud provider structural complexity — not to build AWS, but because those problems reveal the things I want to understand.',
      tags: ['ASP.NET Core', 'RBAC', 'System design', 'Architecture'],
      isCurrent: true,
    },
  ];

  return (
    <SectionWrapper
      number="06"
      title="Journey"
      subtitle="// versioned like software, honest like a log"
    >
      <div className="relative pl-10 md:pl-12 select-none">

        {/* Vertical line with gradient fade */}
        <div
          className="absolute left-[3px] md:left-[7px] top-2 bottom-2 w-[1px]"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--border2) 15%, var(--border2) 85%, transparent)'
          }}
        />

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-10">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">

              {/* Dot marker */}
              <div
                className={`absolute -left-[41px] md:-left-[49px] top-1.5 w-2 h-2 rounded-full border transition-all duration-300 ${
                  item.isCurrent
                    ? 'bg-[var(--accent)] border-[var(--accent)] timeline-dot-active scale-125'
                    : 'bg-[var(--bg3)] border-[var(--border2)] group-hover:border-[var(--text2)]'
                }`}
              />

              {/* Box */}
              <div className="flex flex-col gap-2">
                {/* Version + NOW badge */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="font-mono text-sm font-semibold text-[var(--text)]">
                    {item.version}
                  </h3>
                  {item.isCurrent && (
                    <span className="text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider bg-[rgba(0,255,136,0.05)] border border-[var(--accent)] px-1 py-0.5 rounded leading-none">
                      NOW
                    </span>
                  )}
                </div>

                <div className="font-mono text-[10px] md:text-[11px] text-[var(--text3)] uppercase tracking-wide">
                  {item.subtitle}
                </div>

                <p className="text-[13px] md:text-sm text-[var(--text2)] leading-relaxed font-sans mt-0.5">
                  {item.body}
                </p>

                {/* Tags */}
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="px-1.5 py-0.5 bg-[var(--bg3)] border border-[var(--border)] rounded text-[9px] text-[var(--text3)] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* v6.0 — Planned */}
        <div className="relative group mt-2">
          <div
            className="absolute -left-[41px] md:-left-[49px] top-1.5 w-2 h-2 rounded-full border border-dashed border-[var(--border2)] bg-transparent"
          />
          <div className="flex flex-col gap-2 opacity-60">
            <h3 className="font-mono text-sm font-semibold text-[var(--text3)]">
              v6.0 — (Planned)
            </h3>
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--text3)] uppercase tracking-wide">
              Not written yet
            </div>
            <p className="text-[13px] md:text-sm text-[var(--text3)] leading-relaxed font-sans mt-0.5">
              A software engineering role where I work on problems at a scale I can't create alone. Where I'm surrounded by engineers better than me at specific things, and where I have to grow to keep up. The technical targets are clear: deeper backend engineering, cloud infrastructure, system design at real scale. v6 starts when I get that role.
            </p>
          </div>
        </div>

      </div>

      {/* Closing reflection */}
      <div className="mt-10 pt-6 border-t border-[var(--border)] font-sans text-[13px] md:text-sm text-[var(--text3)] leading-relaxed italic select-none">
        Every version above had versions within it. Nights where nothing compiled. Weeks where I felt like I was falling behind. Projects abandoned when they got hard in the wrong way.
        <br className="my-1" />
        The timeline looks clean because I wrote it looking backward. Looking forward, it never felt clean. The honest summary: I've been building long enough to know I'll figure it out — not because I'm exceptional, but because I've figured things out before when I didn't think I could.
      </div>

    </SectionWrapper>
  );
}
