import Link from "next/link";

const freeFeatures = [
  "Join the Mentorle community",
  "Explore verified mentors and experts",
  "Access selected expert sessions",
  "Discover opportunities and updates",
  "Get basic discounts on selected products or services",
] as const;

const plusFeatures = [
  "2 live expert sessions every month",
  "Better discounts on 1:1 mentorship sessions",
  "Exclusive offline meetups or industry visits",
  "Special discounts on Mentorle events",
  "Merch and partner discounts",
  "Premium resources: roadmaps, cheatsheets, AI workflows",
  "Add-on support: mock interviews, resume reviews, startup guidance",
] as const;

function CheckIcon({ filled }: { filled: boolean }) {
  return (
    <span
      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
        filled
          ? "bg-foreground text-white"
          : "border border-border bg-badge text-muted"
      }`}
      aria-hidden="true"
    >
      <svg
        className="size-3"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M2.5 6.2 4.8 8.5 9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Membership() {
  return (
    <section
      aria-labelledby="membership-heading"
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
          Membership
        </p>
        <h2
          id="membership-heading"
          className="mt-3 max-w-[36rem] font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
        >
          Start free. Go deeper with{" "}
          <em className="italic">Mentorle Plus</em>.
        </h2>
        <p className="mt-4 max-w-[40rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
          Join Mentorle for free to explore community, mentorship, and expert
          sessions. Upgrade to Mentorle Plus for stronger discounts, exclusive
          experiences, and deeper personal growth support.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6 lg:items-stretch">
          {/* Free */}
          <article className="flex flex-col rounded-[1.5rem] border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-8">
            <h3 className="font-display text-[1.75rem] tracking-tight text-foreground sm:text-[2rem]">
              Free
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
              For curious students, learners, founders, and first-time members.
            </p>
            <p className="mt-6 flex flex-wrap items-baseline gap-1.5">
              <span className="font-display text-[2.5rem] leading-none tracking-tight text-foreground sm:text-[2.75rem]">
                ₹0
              </span>
              <span className="text-[0.9375rem] text-muted">/ forever</span>
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon filled={false} />
                  <span className="text-[0.9375rem] leading-snug text-foreground/85">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="https://platform.mentorle.in/signup"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-border bg-white px-6 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-neutral-400 hover:bg-neutral-50 sm:w-auto"
              >
                Join Free
              </a>
            </div>
          </article>

          {/* Plus */}
          <article className="relative flex flex-col rounded-[1.5rem] border-2 border-foreground bg-white p-6 pt-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-8 sm:pt-12">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-3.5 py-1.5 text-[0.6875rem] font-medium tracking-[0.08em] text-white uppercase">
              ★ Most popular
            </span>

            <h3 className="flex items-center gap-2 font-display text-[1.75rem] tracking-tight text-foreground sm:text-[2rem]">
              <span aria-hidden="true" className="text-[1.25rem]">
                ✦
              </span>
              Mentorle Plus
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
              For serious individuals who want more access, better value, and
              faster growth.
            </p>

            <p className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="font-display text-[2.5rem] leading-none tracking-tight text-foreground sm:text-[2.75rem]">
                Plus
              </span>
              <span className="text-[1.0625rem] text-muted">membership</span>
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {plusFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon filled />
                  <span className="text-[0.9375rem] leading-snug text-foreground/85">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href="/plus"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto"
              >
                Explore Mentorle Plus →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
