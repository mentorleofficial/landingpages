import Link from "next/link";

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
    href: "/#community",
    external: false,
  },
  {
    title: "Community Access",
    description:
      "Join learners, founders, and mentors across Punjab — ask questions, share progress.",
    href: "/#community",
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
  const lastIndex = offerings.length - 1;

  return (
    <section
      aria-labelledby="offerings-heading"
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14 lg:px-10 lg:py-24">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
            What you can do here
          </p>
          <h2
            id="offerings-heading"
            className="mt-3 max-w-[22rem] font-display text-[2.25rem] leading-[1.12] tracking-tight text-foreground sm:text-[2.75rem] md:text-[3.15rem]"
          >
            Practical support, not abstract{" "}
            <em className="italic">features</em>.
          </h2>
          <p className="mt-4 max-w-[28rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
            Every offering is built around a real moment — the interview
            you&apos;re nervous about, the idea you can&apos;t validate, the
            decision you keep putting off.
          </p>
        </header>

        <ul className="relative">
          {offerings.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isLast = index === lastIndex;

            const card = (
              <article className="rounded-[1.35rem] border border-border/70 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-[box-shadow,transform] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-[1.25rem] leading-none tracking-tight text-muted/55 tabular-nums sm:text-[1.375rem]">
                    {number}
                  </span>
                  <span
                    className="text-[1rem] text-muted transition-colors group-hover:text-foreground"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
                <h3 className="mt-5 text-[1.125rem] font-semibold tracking-tight text-foreground sm:text-[1.1875rem]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[34rem] text-[0.9375rem] leading-relaxed text-muted sm:text-[1rem]">
                  {item.description}
                </p>
              </article>
            );

            const linkClassName =
              "group block outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2";

            return (
              <li
                key={item.title}
                className={`relative motion-reduce:h-auto motion-reduce:mb-4 ${
                  isLast ? "min-h-0 pb-2" : "h-[min(52vh,28rem)]"
                }`}
              >
                <div
                  className="sticky top-24 motion-reduce:static sm:top-28"
                  style={{ zIndex: index + 1 }}
                >
                  {item.external ? (
                    <a href={item.href} className={linkClassName}>
                      {card}
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClassName}>
                      {card}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
