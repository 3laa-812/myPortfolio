import SectionWrapper from './SectionWrapper';

export default function Playbook() {
  const projectSteps = [
    {
      n: '01',
      title: 'Write the problem statement in one paragraph.',
      detail:
        "If I can't explain what problem the project solves in one paragraph without technical terms, I don't understand it well enough to start building.",
    },
    {
      n: '02',
      title: 'Identify the hardest unknown.',
      detail:
        'Every project has one thing that might not work — a technical assumption, a business assumption, an architectural choice. Find it first and resolve it before building anything around it. Building around an unvalidated assumption is how you end up rewriting everything.',
    },
    {
      n: '03',
      title: 'Define the data model before the API, and the API before the UI.',
      detail:
        "Data is the foundation. The API is a contract over that data. The UI is a client of that contract. Getting the order wrong means the UI shapes the API which shapes the data — and data shaped by UI requirements is usually wrong.",
    },
    {
      n: '04',
      title: "Decide what \"done\" means for v1.",
      detail:
        'Not done eventually. Done as a first deployable thing. The v1 scope should be aggressive (small). Everything you want to add to v1 goes on a v2 list. The v2 list usually stays a list.',
    },
  ];

  const systemQuestions = [
    'What is the source of truth? Where does authoritative data live?',
    'Who can read it, who can write it, under what conditions?',
    'What happens when the system is partially down?',
    'What happens when two users do the same thing simultaneously?',
    'What does a read from this system cost? What does a write cost?',
    'How does this system behave under 10x the expected load?',
  ];

  const debugSteps = [
    {
      n: '01',
      title: 'Reproduce it reliably.',
      detail:
        "A bug I can't reproduce consistently is a bug I can't fix confidently. Make it deterministic before trying to fix it.",
    },
    {
      n: '02',
      title: 'Understand what should be happening.',
      detail:
        'Before reading the error, describe the correct behavior. This tells me what I\'m looking for.',
    },
    {
      n: '03',
      title: 'Narrow the scope.',
      detail:
        'The bug lives somewhere. Bisect: frontend or backend? Query or serialization? This function or its caller? Each question cuts the search space in half.',
    },
    {
      n: '04',
      title: 'Read the error message fully.',
      detail:
        "Stack traces often point exactly at the problem. I've wasted hours not reading the full error.",
    },
    {
      n: '05',
      title: 'Question my assumptions.',
      detail:
        'The most dangerous thing in debugging is an assumption I didn\'t know I was making. When stuck, list everything assumed to be true and check each one.',
    },
    {
      n: '06',
      title: 'Write down what I found.',
      detail:
        'After fixing a non-trivial bug, write a one-paragraph note about what it was and why it happened. These notes have caught similar bugs faster later.',
    },
  ];

  const reviewChecklist = [
    {
      label: 'CORRECTNESS',
      items: [
        'Does this code do what it says it does?',
        'Are there inputs that would cause incorrect behavior?',
        'Are error cases handled?',
        'Are there race conditions or concurrency issues?',
      ],
    },
    {
      label: 'MAINTAINABILITY',
      items: [
        'Can I understand this code without the author explaining it?',
        'Are the names accurate?',
        'Is there behavior happening that isn\'t obvious from the name or signature?',
        'Is there duplication that will need to be maintained in two places?',
      ],
    },
    {
      label: 'ARCHITECTURE',
      items: [
        "Does this change fit the existing system's structure?",
        'Does this introduce a new pattern that now needs to be applied consistently?',
        'Are dependencies flowing in the right direction?',
      ],
    },
  ];

  return (
    <SectionWrapper
      number="07"
      title="Playbook"
      subtitle="// how I work · documented like internal engineering notes"
    >
      <div className="flex flex-col gap-8">

        {/* Starting a New Project */}
        <section className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Starting a New Project
          </h3>
          <div className="space-y-3">
            {projectSteps.map((step) => (
              <div
                key={step.n}
                className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-4 flex gap-4 items-start hover:border-[var(--border2)] transition-colors"
              >
                <span className="font-mono text-[10px] text-[var(--accent)] font-semibold shrink-0 pt-0.5 select-none">
                  {step.n}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-semibold text-[var(--text)]">{step.title}</span>
                  <p className="text-xs text-[var(--text2)] leading-relaxed font-sans">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Designing Systems */}
        <section className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Designing Systems
          </h3>
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 flex flex-col gap-4">
            <p className="text-xs text-[var(--text2)] font-sans leading-relaxed">
              When designing a new system or significant feature, start with a whiteboard (or a{' '}
              <code className="text-[var(--accent)] font-mono">.md</code> file) and describe the data,
              flows, and failure cases before thinking about implementation.
            </p>
            <div className="space-y-2">
              <div className="font-mono text-[10px] text-[var(--text3)] uppercase tracking-wider font-semibold select-none">
                Questions I ask about every system
              </div>
              {systemQuestions.map((q, idx) => (
                <div key={idx} className="flex gap-2 items-start font-mono text-xs text-[var(--text2)] leading-relaxed">
                  <span className="text-[var(--accent2)] select-none shrink-0">?</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
            <div className="pl-3 border-l-2 border-[var(--accent2)] bg-[rgba(0,153,255,0.03)] py-2 font-mono text-[11px] text-[var(--text)] leading-relaxed">
              I don't answer all of these for every feature. But I <em>ask</em> them, so I know which ones I'm consciously deferring.
            </div>
          </div>
        </section>

        {/* Debugging Issues */}
        <section className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Debugging Issues
          </h3>
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-xs text-[var(--accent3)] font-mono font-semibold">
              The first explanation is almost always wrong.
            </p>
            <div className="space-y-3 mt-1">
              {debugSteps.map((step) => (
                <div key={step.n} className="flex gap-4 items-start">
                  <span className="font-mono text-[10px] text-[var(--accent3)] font-semibold shrink-0 pt-0.5 select-none">
                    {step.n}
                  </span>
                  <div>
                    <span className="font-mono text-xs font-semibold text-[var(--text)]">{step.title}</span>{' '}
                    <span className="text-xs text-[var(--text2)] font-sans leading-relaxed">{step.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning New Technologies */}
        <section className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Learning New Technologies
          </h3>
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 flex flex-col gap-3">
            <p className="font-mono text-xs font-semibold text-[var(--accent)]">
              Learn the mental model, not the API.
            </p>
            <p className="text-xs text-[var(--text2)] leading-relaxed font-sans">
              Every technology has a mental model underneath the API.{' '}
              <span className="text-[var(--text)] font-medium">React:</span> UI as a function of state.{' '}
              <span className="text-[var(--text)] font-medium">SQL:</span> set operations on relations.{' '}
              <span className="text-[var(--text)] font-medium">Git:</span> directed acyclic graph of snapshots.
              The specific API surface — function names, parameter orders — I look up when I need it. The mental model can't be looked up. You have to understand it.
            </p>
            <div className="space-y-2 mt-1">
              {[
                "Read the getting-started guide once, quickly. Not to retain — to get oriented.",
                "Build something real with it. Not a tutorial project. Something I actually want to exist.",
                "Read the core concepts documentation carefully after hitting some problems. The problems give context to why the concepts exist.",
                "Find the most common mistakes people make with this technology. Forums and issue trackers are full of these.",
              ].map((step, idx) => (
                <div key={idx} className="flex gap-2 items-start font-mono text-xs text-[var(--text2)] leading-relaxed">
                  <span className="text-[var(--text3)] select-none shrink-0">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Review Checklist */}
        <section className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Code Review Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviewChecklist.map((group) => (
              <div
                key={group.label}
                className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-4 flex flex-col gap-3"
              >
                <div className="font-mono text-[10px] text-[var(--text3)] uppercase tracking-wider font-semibold select-none">
                  {group.label}
                </div>
                <ul className="space-y-2">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start font-mono text-[11px] text-[var(--text2)] leading-relaxed">
                      <span className="text-[var(--accent)] select-none shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="font-mono text-[11px] text-[var(--text3)] italic pl-2">
            Not checking in code review: formatting, import order, whitespace — that's what automated tooling is for.
          </div>
        </section>

        {/* Collaborating */}
        <section className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text3)] uppercase select-none">
            // Collaborating with Teams
          </h3>
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-5 flex flex-col gap-4 text-xs font-sans leading-relaxed text-[var(--text2)]">
            <p>
              <span className="font-mono font-semibold text-[var(--text)]">Async by default, sync when the problem is ambiguous.</span>{' '}
              Documentation &gt; meetings for information that doesn't change fast. Meetings &gt; documentation for problems that require real-time negotiation.
            </p>
            <p>
              <span className="font-mono font-semibold text-[var(--text)]">On disagreements:</span>{' '}
              State my position once, clearly, with reasons. Engage with the other person's reasons, not just re-state mine louder. If we can't resolve it, identify the cheapest way to test who's right. Technical disagreements should be resolved by evidence when evidence is possible.
            </p>
          </div>
        </section>

      </div>
    </SectionWrapper>
  );
}
