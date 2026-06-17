import { useEffect, useState } from 'react';
import SectionWrapper from './SectionWrapper';

export default function Now() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const activeProjects = [
    {
      name: 'Cloud Resource Manager',
      badge: 'ACTIVE',
      badgeColor: 'text-[var(--accent)] border-[var(--accent)] bg-[rgba(0,255,136,0.03)]',
      description: 'Understanding cloud hierarchies by building subscription/resource structures with RBAC.',
      progress: 100,
      barColor: 'bg-[var(--accent)]',
    },
    {
      name: 'Construction Connect',
      badge: 'MOBILE WIP',
      badgeColor: 'text-[var(--accent2)] border-[var(--accent2)] bg-[rgba(0,153,255,0.03)]',
      description: 'B2B procurement pipeline. Transitioning web logic to React Native endpoints.',
      progress: 78,
      barColor: 'bg-[var(--accent2)]',
    },
    {
      name: 'Headless E-Commerce',
      badge: 'COMPLETED',
      badgeColor: 'text-[var(--text2)] border-[var(--border2)] bg-[rgba(255,255,255,0.02)]',
      description: 'Static hosting experiments utilizing Astro Islands and Medusa.js backend.',
      progress: 100,
      barColor: 'bg-[var(--text3)]',
    },
  ];

  const challenges = [
    {
      title: 'Hierarchical RBAC',
      desc: 'Recursive CTE for permission inheritance. Owner at Subscription level → implicit owner below. Active problem.',
    },
    {
      title: 'Mobile Offline Sync',
      desc: 'SQLite manual sync vs. WatermelonDB. Conflict resolution strategy not committed. Blocked on architecture decision.',
    },
    {
      title: 'Internship Search',
      desc: 'Actively applying. Frontend-strong, deliberately building backend depth. Post-Vodafone VOIS process.',
    },
  ];

  const roadmap = [
    { area: 'Backend Architecture', focus: 'ASP.NET Core internals, middleware pipeline, DI container', priority: 'HIGH', priorityColor: 'text-[var(--accent)]' },
    { area: 'Cloud Fundamentals', focus: 'Azure resource model, IAM concepts, deployment ops', priority: 'HIGH', priorityColor: 'text-[var(--accent)]' },
    { area: 'System Design', focus: 'DB normalization, API design at scale, caching patterns', priority: 'MEDIUM', priorityColor: 'text-[var(--accent2)]' },
    { area: 'Algorithms', focus: 'Graph problems, DP — competitive programming cadence', priority: 'LOW', priorityColor: 'text-[var(--text3)]' },
  ];

  return (
    <SectionWrapper
      number="02"
      title="Now"
      subtitle="// live engineering dashboard · June 2025"
    >
      <div className="flex flex-col gap-6">

        {/* Two-Column Grid — stacks to single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          {/* Card 1: Active Projects */}
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 flex flex-col gap-5">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase">
              // Active Projects
            </h3>

            <div className="space-y-4">
              {activeProjects.map((proj, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-[var(--text)] leading-tight">{proj.name}</span>
                    <span className={`text-[9px] font-mono border px-1.5 py-0.5 rounded shrink-0 ${proj.badgeColor}`}>
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-[12px] md:text-xs text-[var(--text2)] leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-[2px] bg-[var(--bg4)] rounded-[1px] overflow-hidden mt-1">
                    <div
                      className={`h-full ${proj.barColor} transition-all duration-1000 ease-out`}
                      style={{ width: animate ? `${proj.progress}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Open Challenges */}
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 flex flex-col gap-5">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase">
              // Open Challenges
            </h3>

            <div className="space-y-4">
              {challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="pl-3 border-l-2 border-[var(--border)] hover:border-[var(--accent)] transition-colors py-0.5"
                >
                  <h4 className="font-mono text-xs font-semibold text-[var(--text)] mb-1">
                    {challenge.title}
                  </h4>
                  <p className="text-[12px] md:text-xs text-[var(--text2)] leading-relaxed">
                    {challenge.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Learning Roadmap — mobile-friendly card list instead of table on small screens */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase mb-4">
            // Learning Roadmap
          </h3>

          {/* Table — only on md+ */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)] text-[10px] text-[var(--text3)] uppercase tracking-wider">
                  <th className="pb-2.5 font-semibold">Area</th>
                  <th className="pb-2.5 font-semibold">Focus</th>
                  <th className="pb-2.5 font-semibold text-right">Priority</th>
                </tr>
              </thead>
              <tbody>
                {roadmap.map((item, idx) => (
                  <tr key={idx} className="border-b border-[var(--border)] last:border-0 hover:bg-[rgba(255,255,255,0.01)] transition-colors">
                    <td className="py-3 text-[var(--text)] font-semibold">{item.area}</td>
                    <td className="py-3 text-[var(--text2)] pr-4 font-sans text-xs">{item.focus}</td>
                    <td className={`py-3 text-right font-semibold ${item.priorityColor}`}>{item.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card list — replaces table */}
          <div className="md:hidden space-y-3">
            {roadmap.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 border-b border-[var(--border)] last:border-0 pb-3 last:pb-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-[var(--text)]">{item.area}</span>
                  <span className={`font-mono text-[10px] font-semibold shrink-0 ${item.priorityColor}`}>{item.priority}</span>
                </div>
                <p className="text-[12px] text-[var(--text2)] leading-relaxed">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Not Doing */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 flex flex-col gap-3">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // What I'm Not Doing
          </h3>
          <div className="space-y-2 font-sans text-[12px] md:text-sm text-[var(--text2)] leading-relaxed">
            {[
              "Not learning five new frameworks at once. That mistake produces shallow knowledge that evaporates fast.",
              "Not \"grinding LeetCode\" without context. Solving algorithmic problems selectively — problems that come up in system design and real engineering.",
              "Not polishing finished projects. Over-refining things that are done when I should be starting things that aren't.",
            ].map((line, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <span className="text-[var(--accent3)] font-mono shrink-0 select-none">✗</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Decisions */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Recent Decisions
          </h3>
          <div className="space-y-4">
            {[
              {
                decision: 'Chose NestJS over Express for Construction Connect backend.',
                reason: 'The project scope required dependency injection, modular architecture, and built-in validation. NestJS gave that structure without building it manually. Tradeoff: steeper learning curve early, faster iteration later.',
              },
              {
                decision: 'Chose SQL Server + EF Core over PostgreSQL for Cloud Manager.',
                reason: "Matching the target environment. When building a system that mimics Azure, using Microsoft's own stack for the academic implementation makes sense. There's something to learn in the ecosystem's design decisions.",
              },
              {
                decision: 'Started keeping an engineering decisions log.',
                reason: "Writing down why I make technical choices, not just what I built. Three months in, it's already been useful twice when coming back to parts of a project I'd forgotten about.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-xs leading-relaxed border-b border-[var(--border)] last:border-0 pb-3 last:pb-0">
                <span className="font-mono font-semibold text-[var(--text)] text-[12px] md:text-xs">{item.decision}</span>
                <span className="text-[var(--text2)] font-sans text-[12px] md:text-xs">{item.reason}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
