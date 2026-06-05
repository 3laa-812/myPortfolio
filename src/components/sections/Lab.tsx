import SectionWrapper from './SectionWrapper';

export default function Lab() {
  const items = [
    {
      name: 'Headless E-Commerce Architecture',
      badge: 'IN PROGRESS',
      badgeClass: 'text-[var(--accent2)] border-[var(--accent2)] bg-[rgba(0,153,255,0.03)]',
      body: 'Constraint: sub-60KB JS budget on a fully dynamic storefront. Astro Islands + Medusa.js + Cloudflare Pages. Most of what people call "interactive" on an e-commerce site isn\'t. Product listings don\'t need hydration. Cart does. Search does. The boundary between static and interactive is almost never where developers put it by default.',
      insightLabel: 'INSIGHT //',
      insightColor: 'border-[var(--accent)] text-[var(--accent)]',
      insightBg: 'bg-[rgba(0,255,136,0.02)]',
      insight: 'Thinking about JS budget as a product constraint changes how you architect the entire frontend.',
    },
    {
      name: 'Raspberry Pi Face Recognition + Emotion Detection',
      badge: 'BUILT',
      badgeClass: 'text-[var(--accent)] border-[var(--accent)] bg-[rgba(0,255,136,0.03)]',
      body: 'Python, face_recognition, DeepFace, SH1106 OLED, servo motor. Non-obvious problem: DeepFace on a Pi is slow. 3 seconds per frame slow. Solution: thread the recognition pipeline so capture and inference run independently. Emotion result lags by a few frames — acceptable for ambient detection. Also built Windows mock stubs for all hardware so development could happen on laptop before touching the Pi.',
      insightLabel: 'INSIGHT //',
      insightColor: 'border-[var(--accent)] text-[var(--accent)]',
      insightBg: 'bg-[rgba(0,255,136,0.02)]',
      insight: 'Always build the abstraction layer that lets you work without the hardware. Applies to APIs, databases, and physical hardware equally.',
    },
    {
      name: 'Custom Binary Protocol Chat App',
      badge: 'COMPLETE',
      badgeClass: 'text-[var(--accent)] border-[var(--accent)] bg-[rgba(0,255,136,0.03)]',
      body: 'Python sockets + threading + custom binary protocol. Why not just use JSON over TCP? Because designing the protocol forced thinking about framing, partial reads, and what happens when a packet arrives in two pieces. These problems don\'t exist when you use HTTP. They matter a lot one layer below it.',
      insightLabel: 'INSIGHT //',
      insightColor: 'border-[var(--accent)] text-[var(--accent)]',
      insightBg: 'bg-[rgba(0,255,136,0.02)]',
      insight: 'Go one layer below the tool you\'re using. That\'s where the actual understanding lives.',
    },
    {
      name: 'Real-Time Collaborative Whiteboard',
      badge: 'ABANDONED',
      badgeClass: 'text-[var(--accent3)] border-[var(--accent3)] bg-[rgba(255,107,53,0.03)]',
      body: 'Stopped after two weeks. Underestimated operational transform. Real-time collaborative editing where two users can edit simultaneously and converge to the same state is a genuinely hard distributed systems problem. Not the right time. Filed under "come back when I understand CRDTs."',
      insightLabel: 'STOPPED BECAUSE //',
      insightColor: 'border-[var(--accent3)] text-[var(--accent3)]',
      insightBg: 'bg-[rgba(255,107,53,0.02)]',
      insight: 'Rebuilding something that took Google years is not a weekend project. Some problems deserve respect.',
    },
    {
      name: '"Salam" Brand Web Store v1',
      badge: 'ABANDONED',
      badgeClass: 'text-[var(--accent3)] border-[var(--accent3)] bg-[rgba(255,107,53,0.03)]',
      body: 'Built the storefront before having a clear inventory strategy. The store was ready before the product was. A beautiful frontend is worthless without backend operations — meaning, in this case, not code but actual products, sizing, pricing, and fulfillment. What I kept: deep experience with conversion-focused UI design, checkout flow optimization, and the realization that an e-commerce product is mostly a logistics product with a web interface on top.',
      insightLabel: 'STOPPED BECAUSE //',
      insightColor: 'border-[var(--accent3)] text-[var(--accent3)]',
      insightBg: 'bg-[rgba(255,107,53,0.02)]',
      insight: 'Technology is never the hard part of a product. The hard part is always the operations, the market, and the user.',
    },
  ];

  const ideas = [
    {
      title: 'RTL-aware design system starter',
      desc: 'logical CSS properties as default. RTL/LTR as a config switch, not a parallel stylesheet. Immediately useful for Egyptian startups.',
    },
    {
      title: 'Construction price index',
      desc: "Construction Connect's anonymized pricing data as a public market benchmark. Contractors could know if a supplier's price is above market before negotiating.",
    },
    {
      title: 'Engineering decision log as product',
      desc: 'personal ADR system. The internal decision context gets lost. Is this a tool gap or a discipline gap?',
    },
  ];

  return (
    <SectionWrapper
      number="05"
      title="Lab"
      subtitle="// experiments, ideas, things that didn't ship"
    >
      <div className="flex flex-col gap-6">
        
        {/* Lab Items List */}
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--border2)] transition-colors flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex justify-between items-start gap-2 select-none">
                <h3 className="font-mono text-sm font-semibold text-[var(--text)] min-w-0 leading-snug">{item.name}</h3>
                <span className={`text-[9px] font-mono border px-1.5 py-0.5 rounded shrink-0 ${item.badgeClass}`}>
                  {item.badge}
                </span>
              </div>

              {/* Body */}
              <p className="text-[12px] md:text-sm text-[var(--text2)] leading-relaxed font-sans">
                {item.body}
              </p>

              {/* Insight block */}
              <div className={`pl-3 border-l-2 ${item.insightColor} ${item.insightBg} py-2.5 font-mono text-[11px] md:text-xs leading-relaxed`}>
                <div className={`${item.insightColor} font-semibold mb-1 select-none`}>
                  {item.insightLabel}
                </div>
                <div className="text-[var(--text)]">
                  {item.insight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ideas on deck block */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-6">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase mb-4 select-none">
            // Ideas on Deck
          </h3>
          
          <ul className="space-y-4 font-mono text-xs md:text-sm">
            {ideas.map((idea, idx) => (
              <li key={idx} className="flex gap-3 items-start leading-relaxed">
                <span className="text-[var(--accent2)] select-none">→</span>
                <span className="text-[var(--text2)]">
                  <strong className="text-[var(--text)] font-medium">{idea.title}</strong> — {idea.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </SectionWrapper>
  );
}
