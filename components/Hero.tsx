import Link from "next/link";
import LiveMentorPanel from "./LiveMentorPanel";
import Reveal from "./Reveal";
import type { Mentor, MentorSummary } from "@/lib/mentors";

type HeroProps = {
  mentors: Mentor[];
  summary: MentorSummary;
};

export default function Hero({ mentors, summary }: HeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="relative flex-1">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pt-6 pb-12 sm:px-8 sm:pt-10 sm:pb-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10 lg:pt-12 lg:pb-20">
        <Reveal className="flex max-w-xl flex-col">
          <p className="font-display text-[2.5rem] leading-none tracking-tight text-foreground sm:text-[3rem]">
            Mentorle
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-[2rem] leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            Talk to people who&apos;ve already{" "}
            <em className="italic">done it</em>.
          </h1>

          <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-muted sm:mt-5 sm:text-[1.125rem]">
            Connect with verified mentors, join expert sessions, and grow
            through practical support — not more content.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-3.5">
            <a
              href="https://platform.mentorle.in/signup"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Join Free
            </a>
            <Link
              href="/plus"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-foreground/20 bg-white px-6 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
            >
              <span aria-hidden="true">✦</span>
              Explore Plus
            </Link>
          </div>

          <p className="mt-8 text-[0.8125rem] leading-relaxed text-muted sm:mt-10">
            {summary.count > 0
              ? `${summary.count}+ mentors · 3+ years · Punjab`
              : "3+ years · Built in Punjab · Growing outward"}
          </p>
        </Reveal>

        <Reveal
          delay={120}
          variant="scale"
          className="w-full min-w-0 lg:min-h-[32rem]"
        >
          <LiveMentorPanel mentors={mentors} />
        </Reveal>
      </div>
    </section>
  );
}
