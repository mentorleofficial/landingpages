import Link from "next/link";
import Reveal from "./Reveal";

const offerings = [
  {
    title: "1:1 Mentorship Sessions",
    description:
      "Direct conversations with verified mentors who've navigated the path you're on.",
    href: "https://platform.mentorle.in/signup",
    external: true,
  },
  {
    title: "Live Expert Sessions",
    description:
      "Group sessions with industry experts on careers, skills, and real-world topics.",
    href: "/community",
    external: false,
  },
  {
    title: "Community Access",
    description:
      "Join learners, founders, and mentors across Punjab — ask questions, share progress.",
    href: "/community",
    external: false,
  },
  {
    title: "Mock Interviews",
    description:
      "Practice with mentors who hire. Honest feedback before the real thing.",
    href: "https://platform.mentorle.in/signup",
    external: true,
  },
  {
    title: "Resume Reviews",
    description:
      "Specific, actionable feedback from people who actually read resumes.",
    href: "https://platform.mentorle.in/signup",
    external: true,
  },
  {
    title: "Career Roadmaps",
    description:
      "Practical roadmaps for skills and transitions — built by mentors, not scraped.",
    href: "/plus",
    external: false,
  },
  {
    title: "Startup Guidance",
    description:
      "Talk validation, go-to-market, and expensive mistakes with founders who've built.",
    href: "https://platform.mentorle.in/signup",
    external: true,
  },
  {
    title: "AI Workflows & Resources",
    description:
      "Cheatsheets and workflows curated by mentors who use them every day.",
    href: "/plus",
    external: false,
  },
] as const;

export default function WhatYouCanDoHere() {
  return (
    <section
      aria-labelledby="offerings-heading"
      className="border-t border-border/60 bg-white"
    >
      <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <Reveal>
          <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
            What you can do here
          </p>
          <h2
            id="offerings-heading"
            className="mt-3 text-center font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
          >
            Practical support, not abstract{" "}
            <em className="italic">features</em>.
          </h2>
          <p className="mx-auto mt-4 max-w-[36rem] text-center text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
            Every offering is built around a real moment — the interview
            you&apos;re nervous about, the idea you can&apos;t validate, the
            decision you keep putting off.
          </p>
        </Reveal>

        <ul className="mt-10 divide-y divide-border/70 border-y border-border/70">
          {offerings.map((item, index) => {
            const content = (
              <div className="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-4 py-5 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-5 sm:py-6">
                <span className="font-display text-[1.125rem] text-muted tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[1.0625rem] font-semibold text-foreground transition-colors group-hover:text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                <span
                  className="mt-1 text-[0.9375rem] text-muted transition-colors group-hover:text-foreground"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            );

            return (
              <Reveal key={item.title} delay={index * 50} as="li">
                {item.external ? (
                  <a
                    href={item.href}
                    className="group block outline-none focus-visible:bg-background/80"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="group block outline-none focus-visible:bg-background/80"
                  >
                    {content}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
