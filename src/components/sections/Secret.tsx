import SectionWrapper from './SectionWrapper';

export default function Secret() {
  const cards = [
    {
      title: 'The Overconfidence Tax',
      badge: 'EXPENSIVE LESSON',
      content: 'There\'s a project I started that I was certain would take two weeks. It took eight. Not because of technical complexity — because I had massively underestimated how much I didn\'t know about the problem domain. I thought I understood what the user needed. I had never talked to a single user. My understanding was entirely imagined. When I finally showed the first version to someone who would actually use it, they didn\'t understand half the UI. Not because it was badly designed technically — because I\'d been designing it against a mental model of the problem that didn\'t match theirs.',
      lesson: 'Your understanding of the user\'s problem is always a hypothesis. Treat it like one.',
    },
    {
      title: 'The Rewrite I Regret',
      badge: 'PRODUCTION BUG',
      content: 'At SustainGRC, I inherited a component I immediately decided was wrong. Messy, too many props, mixed concerns. I rewrote it. The rewrite was cleaner. It was also wrong in a way the original was accidentally right. The original had defensive behavior in an edge case that I didn\'t recognize as intentional because it wasn\'t documented. My rewrite removed it because it looked like accidental complexity. Two weeks later, a user hit that edge case. The bug went to production. I spent an afternoon tracing it back to my rewrite.',
      lesson: 'Don\'t assume code is wrong because it\'s messy. Understand what it\'s doing before you replace it. There might be a decade of bug fixes encoded in the mess.',
    },
    {
      title: 'The Architecture I Was Proud Of',
      badge: 'PREMATURE SOPHISTICATION',
      content: 'I designed an architecture I thought was elegant. Multiple service layers, carefully abstracted interfaces, generics that made the code feel sophisticated. A senior engineer asked me one question: "What problem is this solving that you don\'t have yet?" I explained the future problems it was designed to handle. Their response: "So you\'re paying complexity costs now for problems you might have in six months, in a product that might not exist in six months." I defended it. They were right. The architecture slowed down the project without adding any value to users. I simplified it. The simplified version shipped. The elaborate version would still be in development.',
      lesson: 'Premature sophistication is a real form of procrastination.',
    },
    {
      title: 'Eight Hours. One Missing await.',
      badge: 'DEBUGGING STORY',
      content: 'I was eight hours into a bug causing intermittent test failures. The bug was a missing await on an async function call. One word. Four characters. Eight hours. The reason it took that long: I was looking in the wrong abstraction layer. Looking at the database query, the API response, the state management. The bug was in none of those places. It was in how I was calling a function that returned a Promise I was treating as a value. I found it by starting over. Removed all my assumptions and read the code exactly as written, not as I expected it to work.',
      lesson: 'When stuck debugging, the bug is usually in the gap between what you think the code does and what it actually does. Those are different things.',
    },
    {
      title: 'The Period I Almost Stopped',
      badge: 'REAL',
      content: 'About 18 months ago, I went through a period where nothing I was building worked the way I expected. Every project had more complexity than planned. Every solution created new problems. I felt like I was getting worse, not better. I talked to someone who\'d been writing software for 15 years. They told me this feeling usually means you\'re right at the edge of a level transition — you\'ve gotten good enough to see the problems with what you\'re doing, but not yet good enough to solve them automatically. The skill growth is invisible from inside. They were right. Three months later, I shipped Construction Connect\'s first working version and the architecture made sense in a way that previous architectures hadn\'t.',
      lesson: 'Every engineer I respect has a version of this story. The ones who don\'t either never got to that level or aren\'t being honest.',
    },
  ];

  return (
    <SectionWrapper
      number="∞"
      title="Inside The Engineer"
      subtitle="// the logs of what went wrong"
      className="border-l-2 border-[var(--accent3)]"
      accentClass="text-[var(--accent3)]"
      titleClass="text-[var(--accent3)]"
    >
      <div className="flex flex-col gap-6 select-none">
        
        {/* Warning Bar */}
        <div className="bg-[rgba(255,107,53,0.08)] border border-[rgba(255,107,53,0.2)] text-[var(--accent3)] rounded p-4 font-mono text-[12px] leading-relaxed">
          ⚠ This section doesn't exist in the navigation. It's here for the people who explore rather than scroll.
        </div>

        {/* Failure Cards */}
        <div className="space-y-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-[var(--bg2)] border border-[var(--border)] border-l-[3px] border-l-[var(--accent3)] rounded-lg p-6 flex flex-col gap-4"
            >
              {/* Header Title Row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h3 className="font-mono text-sm font-semibold text-[var(--text)]">{card.title}</h3>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[rgba(255,107,53,0.1)] text-[var(--accent3)] self-start sm:self-auto shrink-0">
                  {card.badge}
                </span>
              </div>

              {/* Body */}
              <p className="text-[12px] md:text-sm text-[var(--text2)] leading-[1.7] font-sans">
                {card.content}
              </p>

              {/* Lesson block */}
              <div className="pl-3 border-l-2 border-[var(--accent3)] bg-[rgba(255,107,53,0.04)] py-2.5 font-mono text-[11px] md:text-xs leading-relaxed">
                <div className="text-[var(--accent3)] font-semibold mb-1 uppercase tracking-wider">
                  LESSON //
                </div>
                <div className="text-[var(--text)]">
                  {card.lesson}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ideas That Never Made It */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-6 flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Ideas That Never Made It
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Real-time code collaboration tool', reason: 'Stopped — the core problem (operational transforms) is genuinely hard CS, not just implementation work. Not ready. Will revisit.' },
              { name: 'Construction price index scraper', reason: 'Egyptian supplier websites are mostly not machine-readable. Scraping maintenance cost would exceed the value. The idea is valid. The execution was wrong.' },
              { name: 'Arabic programming tutorial series', reason: 'Underestimated the writing workload. Technical writing is harder than technical coding. I still think this should exist.' },
              { name: 'Personal finance tracker', reason: "Stopped after two weeks. I didn't have a problem with personal finance tracking. I was building it because it felt like a good portfolio project. Stopped building things I don't need." },
              { name: 'Open source UI component library', reason: "Stopped because the space is saturated and I couldn't articulate what would make mine worth maintaining. A component library with no distinct reason to exist is noise." },
            ].map((idea, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs leading-relaxed border-b border-[var(--border)] last:border-0 pb-3 last:pb-0">
                <span className="text-[var(--accent3)] font-mono shrink-0 select-none">✗</span>
                <span>
                  <strong className="font-mono font-semibold text-[var(--text)]">{idea.name}</strong>
                  {' — '}
                  <span className="text-[var(--text2)] font-sans">{idea.reason}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Actually Insecure About */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] border-l-[3px] border-l-[var(--accent3)] rounded-lg p-6 flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--accent3)] uppercase select-none">
            // What I'm Actually Insecure About
          </h3>
          <div className="space-y-4">
            {[
              {
                label: 'Depth vs. breadth.',
                text: "I've touched a lot of technologies. I sometimes wonder if I've gone deep enough in any of them. The honest answer: probably not in all of them. Deep enough in the ones that matter for the problems I'm solving? Getting there.",
              },
              {
                label: 'The CS degree gap.',
                text: "I'm in university but I've been building professionally since before I'd taken most core courses. Sometimes I hit a theoretical concept in a course and realize I've been using it without knowing what it was called. Other times I realize I've been doing something wrong in production because I didn't have the theoretical foundation.",
              },
              {
                label: 'Speed.',
                text: "I'm not the fastest developer. I think before I type. Sometimes this is a strength — fewer rewrites, fewer bugs. Sometimes it's a bottleneck when the situation calls for moving fast. I'm working on calibrating when to slow down and when to just ship the draft.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-xs leading-relaxed">
                <strong className="font-mono font-semibold text-[var(--text)]">{item.label}</strong>
                <p className="text-[var(--text2)] font-sans">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing paragraph */}
        <div className="space-y-3 font-sans text-xs md:text-sm text-[var(--text2)] leading-relaxed mt-4 border-t border-[var(--border)] pt-6">
          <p>
            If you read this far, you understand something about how I work that most people who look at portfolios don't see: I think the failures are as important as the wins, and I'm not embarrassed to show them.
          </p>
          <p className="italic text-[var(--text)] font-medium">
            That's not humility. It's epistemics. You learn more from examining what went wrong than from cataloging what went right.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
}
