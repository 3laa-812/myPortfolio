import SectionWrapper from './SectionWrapper';

export default function Identity() {
  const cards = [
    {
      label: 'WHO I AM',
      content: (
        <>
          CS student at Sinai University (Class of 2027). Junior frontend developer by title. <strong className="text-[var(--accent)] font-semibold">Software engineer by practice.</strong> Production code at SustainGRC, three full-stack products from scratch. None were assignments.
        </>
      ),
    },
    {
      label: 'HOW I THINK',
      content: (
        <>
          Don't start with code. Start with: <strong className="text-[var(--accent2)] font-semibold">what does this system need to be true about the world?</strong> Before writing a component: who owns this state? What happens when the network fails?
        </>
      ),
    },
    {
      label: 'PRODUCT INSTINCT',
      content: (
        <>
          Ask questions in design reviews that belong in product meetings. Notice when a flow has one too many steps. Writing good software without understanding the product is writing <strong className="text-[var(--accent3)] font-semibold">correct nonsense.</strong>
        </>
      ),
    },
    {
      label: 'OPERATING SYSTEM',
      content: (
        <>
          Deep focus blocks. Bad at shallow multitasking. Learn by building. Treat confusion as a signal to stop. <strong className="text-[var(--accent)] font-semibold">Ship early, get feedback, iterate.</strong>
        </>
      ),
    },
  ];

  const philosophies = [
    {
      title: 'Correctness over cleverness.',
      desc: 'The smartest code is code the next engineer can read, change, and trust.',
    },
    {
      title: 'The boundary is more important than the implementation.',
      desc: 'Get the interface right first. The implementation is replaceable. A bad interface haunts you forever.',
    },
    {
      title: 'Build for failure, not for success.',
      desc: "What happens when the API returns nothing? These aren't edge cases — they're just the cases no one bothered to think about.",
    },
    {
      title: 'Understand before you abstract.',
      desc: "Write the concrete version twice. If you've written it twice, you understand the pattern. If once, you're guessing.",
    },
    {
      title: 'Performance is a product decision.',
      desc: "A slow interface isn't a technical failure. It's a product failure.",
    },
    {
      title: 'Document decisions, not just code.',
      desc: 'The hardest thing to reconstruct is why something was built a certain way. Write that down.',
    },
    {
      title: 'Own the whole problem.',
      desc: "When something breaks, don't look for whose responsibility it is. Look for what broke and why.",
    },
  ];

  return (
    <SectionWrapper
      number="01"
      title="Identity"
      subtitle="// how I think, not what I've done"
    >
      <div className="flex flex-col gap-10">
        
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[var(--border)] border border-[var(--border)] overflow-hidden rounded-lg">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[var(--bg2)] p-4 md:p-6 flex flex-col gap-2 md:gap-3">
              <div className="font-mono text-[10px] text-[var(--text3)] tracking-widest font-semibold uppercase">
                {card.label}
              </div>
              <p className="text-[12px] md:text-sm text-[var(--text2)] leading-relaxed font-sans">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy List */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase">
            // Core Philosophy
          </h3>
          
          <div className="space-y-3 md:space-y-4 font-mono text-[11px] md:text-sm">
            {philosophies.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start leading-relaxed">
                <span className="text-[var(--text3)] select-none shrink-0">//</span>
                <span className="text-[var(--text2)]">
                  <strong className="text-[var(--text)] font-medium">{item.title}</strong>{' '}
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
