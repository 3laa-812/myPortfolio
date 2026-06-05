import { useEffect, useRef, useState } from 'react';
import SectionWrapper from './SectionWrapper';

export default function Systems() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const nodes = [
    {
      name: 'Frontend',
      color: 'bg-[var(--accent)]',
      dotColor: 'bg-[var(--accent)]',
      skills: [
        { name: 'React', val: 85 },
        { name: 'Next.js', val: 80 },
        { name: 'TypeScript', val: 78 },
        { name: 'TailwindCSS', val: 85 },
        { name: 'State mgmt', val: 75 },
      ],
    },
    {
      name: 'Backend',
      color: 'bg-[var(--accent2)]',
      dotColor: 'bg-[var(--accent2)]',
      skills: [
        { name: 'NestJS', val: 70 },
        { name: 'ASP.NET Core', val: 55 },
        { name: 'REST API design', val: 72 },
        { name: 'Auth/RBAC', val: 65 },
        { name: 'C#', val: 50 },
      ],
    },
    {
      name: 'Data',
      color: 'bg-[var(--accent3)]',
      dotColor: 'bg-[var(--accent3)]',
      skills: [
        { name: 'PostgreSQL', val: 68 },
        { name: 'SQL Server', val: 55 },
        { name: 'EF Core / ORM', val: 60 },
        { name: 'Schema design', val: 65 },
        { name: 'Multi-tenancy', val: 58 },
      ],
    },
    {
      name: 'Mobile',
      color: 'bg-[#aa77ff]',
      dotColor: 'bg-[#aa77ff]',
      skills: [
        { name: 'React Native', val: 62 },
        { name: 'Expo', val: 60 },
        { name: 'Navigation', val: 65 },
        { name: 'Offline patterns', val: 40 },
        { name: 'Native modules', val: 35 },
      ],
    },
    {
      name: 'CS Fundamentals',
      color: 'bg-[#ffcc00]',
      dotColor: 'bg-[#ffcc00]',
      skills: [
        { name: 'Data structures', val: 75 },
        { name: 'Algorithms', val: 65 },
        { name: 'Networking', val: 60 },
        { name: 'System design', val: 50 },
        { name: 'Concurrency', val: 45 },
      ],
    },
    {
      name: 'DevOps / Tooling',
      color: 'bg-[var(--accent)]',
      dotColor: 'bg-[var(--accent)]',
      skills: [
        { name: 'Git', val: 80 },
        { name: 'Linux / CLI', val: 65 },
        { name: 'Docker (basics)', val: 40 },
        { name: 'CI/CD concepts', val: 45 },
        { name: 'Cloud infra', val: 30 },
      ],
    },
  ];

  // Track scroll position for dot indicator
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cardWidth = el.scrollWidth / nodes.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveCard(Math.min(Math.max(idx, 0), nodes.length - 1));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [nodes.length]);

  const NodeCard = ({ node, idx }: { node: typeof nodes[0]; idx: number }) => (
    <div
      key={idx}
      className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--border2)] transition-colors flex flex-col gap-4
        /* Mobile: fixed-width snap card */ shrink-0 w-[80vw] max-w-[300px] snap-start
        /* Desktop: auto width in grid */ md:w-auto md:max-w-none"
    >
      {/* Header */}
      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--text)]">
        <span className={`w-2 h-2 rounded-full ${node.dotColor}`} />
        <span>{node.name}</span>
      </div>

      {/* Skills list */}
      <div className="space-y-2.5">
        {node.skills.map((s, sidx) => (
          <div key={sidx} className="flex justify-between items-center gap-2 text-xs font-mono">
            <span className="text-[var(--text2)] text-[11px]">{s.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[var(--text3)]">{s.val}%</span>
              <div className="w-12 h-[3px] bg-[var(--bg4)] rounded-sm overflow-hidden">
                <div
                  className={`h-full ${node.color}`}
                  style={{ width: `${s.val}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <SectionWrapper
      number="04"
      title="Systems"
      subtitle="// knowledge map with honest edges"
    >
      <div className="flex flex-col gap-6">

        {/* Mobile: horizontal snap scroll — Desktop: 3-column grid */}
        <div
          ref={scrollRef}
          className="
            flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth
            md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:snap-none
          "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {nodes.map((node, idx) => (
            <NodeCard key={idx} node={node} idx={idx} />
          ))}
        </div>

        {/* Scroll dot indicator — mobile only */}
        <div className="flex justify-center gap-1.5 md:hidden">
          {nodes.map((_, idx) => (
            <div
              key={idx}
              className={`rounded-full transition-all duration-200 ${
                idx === activeCard
                  ? 'w-4 h-[3px] bg-[var(--accent)]'
                  : 'w-[3px] h-[3px] bg-[var(--border2)]'
              }`}
            />
          ))}
        </div>

        {/* Domain Connections */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 md:p-6 flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Domain Connections
          </h3>
          <p className="text-xs text-[var(--text3)] font-mono select-none">
            The map above looks like separate silos. It isn't.
          </p>
          <div className="space-y-3">
            {[
              {
                link: 'Frontend ↔ Backend',
                detail: 'The React rendering model directly informs how API responses are designed. An endpoint that returns a deeply nested object for a component that needs only three fields is a frontend performance problem disguised as a backend problem.',
              },
              {
                link: 'Backend ↔ Data',
                detail: 'N+1 query bugs are backend bugs that come from not understanding the ORM\'s query generation. Designing a schema without thinking about the query patterns that will run against it is building for pain later.',
              },
              {
                link: 'CS Fundamentals ↔ Everything',
                detail: 'The hash table isn\'t just a data structure — it\'s why JavaScript object lookup is O(1), why database indexes work, why cache keys need to be designed carefully. Fundamentals are pattern recognition across domains.',
              },
              {
                link: 'Mobile ↔ API',
                detail: 'A mobile API is a different contract than a web API. Mobile clients are on unreliable networks. They paginate more aggressively. They need to handle partial failures gracefully. This changed how I think about API design.',
              },
            ].map((conn, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-1.5 sm:gap-3 items-start text-xs leading-relaxed">
                <span className="font-mono font-semibold text-[var(--accent2)] shrink-0">{conn.link}</span>
                <span className="text-[var(--text2)] font-sans">{conn.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Honest Edges Log block */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 font-mono text-xs md:text-sm leading-relaxed text-[var(--text2)] flex flex-col gap-3">
          <div className="text-[var(--text3)] border-b border-[var(--border)] pb-2 select-none">
            // honest_edges.md
          </div>
          <div className="space-y-1.5 bg-transparent border-0">
            <div><span className="text-[var(--accent)] font-semibold">Strongest:</span> Frontend architecture, React ecosystem, REST design, relational DB modeling.</div>
            <div><span className="text-[var(--accent2)] font-semibold">Developing:</span> Cloud infrastructure, distributed systems, performance at scale.</div>
            <div><span className="text-[var(--accent3)] font-semibold">Concept-level:</span> Message queues, microservices, container orchestration.</div>
            <div><span className="text-[var(--text3)] font-semibold">Not touched:</span> ML pipelines, low-level systems, real-time distributed data.</div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
