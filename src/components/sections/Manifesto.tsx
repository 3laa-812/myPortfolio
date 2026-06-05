import SectionWrapper from './SectionWrapper';

export default function Manifesto() {
  const items = [
    {
      label: 'ON SOFTWARE',
      body: (
        <>
          Software is the only engineering discipline where the material is infinitely malleable and costs nothing to reshape. The cost of software is not the code.{' '}
          <span className="text-[var(--text)] font-medium">The cost is the thinking.</span> The code is just the thinking, crystallized. When you rewrite code because it's "messy," you're often just rewriting thinking you didn't do the first time.
        </>
      ),
    },
    {
      label: 'ON CRAFTSMANSHIP',
      body: (
        <>
          Code that is hard to read is hard to change. Code that is hard to change accumulates bugs. Code that accumulates bugs becomes legacy.{' '}
          <span className="text-[var(--text)] font-medium">The craft of writing clear, well-structured code is not a nice-to-have. It's economics.</span> But craftsmanship is not perfectionism. Perfect is the enemy of shipped. Unshipped beautiful code serves no one.
        </>
      ),
    },
    {
      label: 'ON ABSTRACTION',
      body: (
        <>
          Abstraction is borrowing complexity from the future. Good abstractions pay off the debt many times over. Bad abstractions compound. The problem with premature abstraction: you're borrowing against a future you don't understand yet.{' '}
          <span className="text-[var(--text)] font-medium">Write the concrete version twice before you abstract it.</span> If you've written it twice, you understand the pattern. If once, you're guessing.
        </>
      ),
    },
    {
      label: 'ON LEARNING',
      body: (
        <>
          The best engineers never stopped being students — not because they're humble, but because they're genuinely curious. The failure mode for most self-taught developers: stopping at the syntax.{' '}
          <span className="text-[var(--text)] font-medium">The "why" is what transfers to the next problem. The "how" has to be relearned every time.</span>
        </>
      ),
    },
    {
      label: 'ON PRODUCTS',
      body: (
        <>
          A product is a hypothesis that a solution exists for a real problem. Most software projects fail not because of technology but because the hypothesis was wrong.{' '}
          <span className="text-[var(--text)] font-medium">Technology is downstream of product.</span> I want to build software that matters to the people using it. Not software that's technically impressive to other engineers.
        </>
      ),
    },
    {
      label: 'ON COMPLEXITY',
      body: (
        <>
          Complexity is the enemy. Not complexity that comes from the problem — that complexity is real and must be handled. Complexity that comes from the solution being over-engineered.
          The most common form: adding layers because layers <em>feel</em> like architecture.{' '}
          <span className="text-[var(--text)] font-medium">Real architecture isn't about adding layers. It's about finding the right boundaries so each piece can change without breaking the others.</span> Sometimes that means more abstraction. Often it means less.
        </>
      ),
    },
    {
      label: 'ON BEING WRONG',
      body: (
        <>
          I have been wrong about technical choices many times. Being wrong is not a failure state.{' '}
          <span className="text-[var(--text)] font-medium">Being unable to detect that you're wrong is a failure state.</span> The only engineering judgment I trust fully is judgment that has been tested against reality.
        </>
      ),
    },
  ];

  return (
    <SectionWrapper
      number="10"
      title="Manifesto"
      subtitle="// real beliefs, not motivational quotes"
    >
      <div className="flex flex-col select-none">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="border-b border-[var(--border)] py-6 md:py-8 first:pt-2 last:border-b-0 flex flex-col md:flex-row gap-3 md:gap-8 items-start"
          >
            {/* Label column */}
            <div className="font-mono text-[10px] text-[var(--text3)] uppercase tracking-[0.12em] font-semibold md:w-[150px] shrink-0">
              {item.label}
            </div>

            {/* Body content column */}
            <p className="text-[13px] md:text-[15px] text-[var(--text2)] leading-[1.8] font-sans">
              {item.body}
            </p>
          </div>
        ))}

        {/* What I'm Building Toward */}
        <div className="border-t border-[var(--border)] pt-6 md:pt-8 flex flex-col md:flex-row gap-3 md:gap-8 items-start">
          <div className="font-mono text-[10px] text-[var(--text3)] uppercase tracking-[0.12em] font-semibold md:w-[150px] shrink-0">
            BUILDING TOWARD
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[13px] md:text-[15px] text-[var(--text2)] leading-[1.8] font-sans">An engineering practice where:</p>
            <ul className="space-y-2">
              {[
                'The code I write can be understood and changed by someone who isn\'t me',
                'The systems I design can survive the requirements that weren\'t written in the spec',
                'The products I build solve real problems for real people',
                'The teams I work on are better because I\'m on them',
              ].map((point, idx) => (
                <li key={idx} className="flex gap-2 items-start font-sans text-[14px] text-[var(--text2)] leading-relaxed">
                  <span className="text-[var(--accent)] font-mono shrink-0">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--text3)] font-mono italic mt-1">
              These are not goals I've achieved fully. They're the direction I'm building in.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
