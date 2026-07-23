import Link from "next/link";
import LiveMentorPanel from "./LiveMentorPanel";
import type { Mentor, MentorSummary } from "@/lib/mentors";

type HeroProps = {
  mentors: Mentor[];
  summary: MentorSummary;
};

export default function Hero({ mentors, summary }: HeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="relative flex-1">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pt-6 pb-12 sm:px-8 sm:pt-10 sm:pb-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10 lg:pt-12 lg:pb-20">
        <div className="flex max-w-xl flex-col">
          <p className="mb-5 inline-flex w-fit max-w-full items-center gap-1.5 rounded-full bg-badge px-3.5 py-1.5 text-[0.75rem] text-muted sm:mb-6 sm:text-[0.8125rem]">
            <span aria-hidden="true">✨</span>
            <span className="truncate">
              {summary.count > 0
                ? `${summary.count}+ mentors ready to talk`
                : "Community-led mentorship"}
            </span>
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[2.35rem] leading-[1.08] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[3.75rem]"
          >
            Talk to people who&apos;ve already done it.
          </h1>

          <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-muted sm:mt-5 sm:text-[1.125rem]">
            Mentorle helps students, founders, and learners connect with
            verified mentors, attend expert-led sessions, and grow through
            practical support and real community.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
            <a
              href="https://platform.mentorle.in/signup"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Join Free →
            </a>
            <Link
              href="/become-mentor"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-neutral-400 hover:bg-neutral-50"
            >
              Become a Mentor
            </Link>
            <Link
              href="/plus"
              className="inline-flex h-11 items-center justify-center gap-1 px-1 text-[0.9375rem] text-muted transition-colors hover:text-foreground sm:justify-start"
            >
              Explore Mentorle Plus
              <span aria-hidden="true" className="text-sm">
                →
              </span>
            </Link>
          </div>

          {summary.count > 0 ? (
            <p className="mt-8 text-[0.8125rem] leading-relaxed text-muted sm:mt-12">
              Trusted by learners, mentors, and ecosystem partners including EduBridge India.
            </p>
          ) : null}
        </div>

        <div className="w-full min-w-0 lg:min-h-[32rem]">
          <LiveMentorPanel mentors={mentors} />
        </div>
      </div>
    </section>
  );
}
