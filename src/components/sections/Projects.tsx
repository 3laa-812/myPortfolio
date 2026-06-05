import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const cases = [
    {
      title: 'Construction Connect',
      meta: 'B2B Procurement SaaS · Web + API + Mobile · Solo build · 2025–present',
      problem: 'Construction procurement in Egypt runs on phone calls, WhatsApp groups, and word of mouth. Contractors call five suppliers. Three don\'t pick up. One sends a PDF. Nothing is tracked. The workflow is broken — the market exists.',
      decisions: [
        'Multi-tenant with row-level isolation, not separate databases. Customer count for MVP doesn\'t justify separate instances. When the scale problem is real, that\'s a problem worth having.',
        'Domain-based module separation, not layer-based. /auth, /rfq, /catalog, /orders. Each module owns its full stack. Made parallel development easier and kept boundaries obvious.',
        'Zustand for client state, React Query pattern for server state. The mixing creates complexity that isn\'t worth it. Server state in fetch-and-cache hooks. Client state in Zustand. The boundary is maintained.'
      ],
      failures: [
        'API contract problem: Built frontend against placeholder shapes before backend was stable. Three days fixing mismatches that 30 minutes of upfront API design would have prevented.',
        'Mobile was an afterthought: API designed for web client. Hit multiple places where payloads were too heavy for mobile. Had to add lightweight endpoints retroactively.'
      ],
      stack: ['NestJS', 'PostgreSQL', 'TypeScript', 'React + Vite', 'React Native', 'Expo', 'Zustand', 'JWT Auth']
    },
    {
      title: 'Cloud Resource Manager',
      meta: 'Architecture study · Azure resource model · ASP.NET Core MVC · Solo · 2026',
      problem: 'Understand cloud resource hierarchies by building one. Not reading about it — actually implementing the structural properties: subscriptions own resource groups, resource groups own resources, roles are scoped at any level, permissions propagate down but not up.',
      decisions: [
        'Hierarchical RBAC with inheritance. A user can be Owner at Subscription level (implicitly Owner of everything below), or Contributor at a specific Resource Group (no effect on siblings), or Reader on a single Resource.',
        'Permission check must walk up the hierarchy and collect the effective role. Implementing as a recursive CTE query rather than denormalizing permissions at every level.',
        'Module-by-module discipline: Auth → Subscriptions → Resource Groups → RBAC. Each ships complete before the next starts.',
        'Razor Views over SPA. The point is backend architecture, not another React app.'
      ],
      failures: [
        'CTE optimization delay: Initially loaded full hierarchy trees into application memory to calculate permissions. Switched to recursive database query after initial benchmarks showed 150ms checks on small structures.'
      ],
      stack: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'Razor Views', 'Bootstrap 5']
    },
    {
      title: 'SustainGRC — Enterprise Portal',
      meta: 'Professional · Production code · Real users · Real consequences · 2026',
      problem: 'Governance, risk, and compliance platform serving enterprises. Joined as a junior frontend developer into an existing production codebase with real customers.',
      decisions: [
        'Code review feedback trended from correctness fixes to architectural discussions. That shift is a signal.',
        'Real users are surprising. The confusions were never what I expected. The loves were never what I spent the most time on.',
        'Don\'t assume code is wrong because it\'s messy. Understand what it does first. There might be a decade of bug fixes encoded in the mess.'
      ],
      failures: [
        'Was too passive in the first weeks — waited to be assigned tasks rather than identifying problems and proposing solutions. When I started doing the latter, the quality of contributions improved and the feedback improved with it. Ownership has to be chosen, not assigned.',
      ],
      stack: ['React', 'Next.js', 'TypeScript', 'Zustand', 'TailwindCSS']
    },
    {
      title: 'YES E-Commerce Storefront',
      meta: 'Personal project → real business · Full-stack · Conversion-focused UI · 2024–present',
      problem: "I wanted a storefront for YES, a youth clothing brand. Most e-commerce solutions are either Shopify (expensive, not mine) or roll-your-own complexity. I wanted something in between: a custom storefront I controlled, built on tools I understood.",
      decisions: [
        'The checkout flow isn\'t about technology — it\'s about reducing friction at the exact moment a user is deciding. Every extra step is a percentage of abandoned orders. Started reading about UX patterns I\'d never considered as a frontend developer.',
        'First exposure to handling money and inventory as a real engineering constraint. Overselling because two users hit "add to cart" simultaneously is a real problem. Implemented the simple version (optimistic locking with a stock reservation TTL). I know what the production version looks like.',
        'Salam brand store v1 was a lesson: built the storefront before having a clear inventory strategy. A beautiful frontend is worthless without backend operations — products, sizing, pricing, fulfillment. Being rebuilt with operations designed first.',
      ],
      failures: [
        'Built the store before the product was ready. The frontend was complete before inventory strategy, pricing, or fulfillment were figured out. The store was the easy part.',
      ],
      stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Stripe'],
    }
  ];

  return (
    <SectionWrapper
      number="03"
      title="Projects"
      subtitle="// engineering decisions, tradeoffs, failures"
    >
      <div className="flex flex-col gap-3 md:gap-4">
        {cases.map((c, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg overflow-hidden transition-all duration-200"
            >
              {/* Header */}
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-4 md:px-5 py-4 flex items-center justify-between gap-3 select-none hover:bg-[rgba(255,255,255,0.01)] active:bg-[rgba(255,255,255,0.02)] transition-colors"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[var(--text3)] shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-mono text-sm font-semibold text-[var(--text)] truncate">{c.title}</h3>
                  </div>
                  <div className="font-mono text-[9px] text-[var(--text3)] uppercase tracking-wide leading-tight">
                    {c.meta}
                  </div>
                </div>

                {/* Toggle Icon */}
                <div
                  className={`w-6 h-6 flex items-center justify-center font-mono text-base shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-[45deg] text-[var(--accent)]' : 'text-[var(--text3)]'
                  }`}
                >
                  +
                </div>
              </button>

              {/* Body */}
              {isOpen && (
                <div className="px-4 md:px-5 pb-5 pt-1 border-t border-[var(--border)] flex flex-col gap-4">
                  {/* Problem */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <span className="font-mono text-[9px] text-[var(--text3)] uppercase tracking-wider font-semibold border-l-2 border-[var(--border2)] pl-2">
                      The Problem
                    </span>
                    <p className="text-[12px] md:text-sm text-[var(--text2)] leading-relaxed">
                      {c.problem}
                    </p>
                  </div>

                  {/* Architecture Decisions */}
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-[var(--text3)] uppercase tracking-wider font-semibold border-l-2 border-[var(--accent2)] pl-2">
                      Architecture Decisions
                    </span>
                    <ul className="space-y-2 font-mono text-[11px] md:text-xs">
                      {c.decisions.map((dec, didx) => (
                        <li key={didx} className="flex gap-2 items-start leading-relaxed">
                          <span className="text-[var(--accent2)] select-none shrink-0">→</span>
                          <span className="text-[var(--text2)]">{dec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Failures */}
                  {c.failures && c.failures.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[9px] text-[var(--text3)] uppercase tracking-wider font-semibold border-l-2 border-[var(--accent3)] pl-2">
                        Failures / Tradeoffs
                      </span>
                      <ul className="space-y-2 font-mono text-[11px] md:text-xs">
                        {c.failures.map((fail, fidx) => (
                          <li key={fidx} className="flex gap-2 items-start leading-relaxed">
                            <span className="text-[var(--accent3)] select-none shrink-0">!</span>
                            <span className="text-[var(--text2)]">{fail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {c.stack.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="px-2 py-0.5 bg-[var(--bg3)] border border-[var(--border2)] rounded text-[9px] md:text-[10px] text-[var(--text2)] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
