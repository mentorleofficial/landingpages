import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="start-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
          Start here
        </p>
        <h2
          id="start-heading"
          className="mt-4 font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.35rem] md:text-[2.75rem]"
        >
          One conversation can change your{" "}
          <em className="italic">direction</em>. Start with Mentorle.
        </h2>
        <p className="mx-auto mt-5 max-w-[32rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
          You don&apos;t need to have it all figured out. You just need to talk
          to someone who&apos;s been where you are. Start there.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href="https://platform.mentorle.in/signup"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="3.25" />
              <path
                d="M5.5 19.5c1.2-3.2 3.5-4.75 6.5-4.75s5.3 1.55 6.5 4.75"
                strokeLinecap="round"
              />
            </svg>
            Join Free
          </a>
          <Link
            href="/plus"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-white px-6 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
          >
            <span aria-hidden="true">✦</span>
            Explore Mentorle Plus
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="mt-5 text-[0.8125rem] text-muted">
          No credit card. No commitment. Just a conversation.
        </p>
      </div>
    </section>
  );
}
