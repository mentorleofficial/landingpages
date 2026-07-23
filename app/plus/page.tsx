import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FaqSection, { FaqContactFooter } from "@/components/FaqSection";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Mentorle Plus",
  "Upgrade to Mentorle Plus for monthly expert sessions, better mentorship discounts, exclusive meetups, and premium resources.",
  "/plus",
);

const benefits = [
  {
    title: "2 live expert sessions every month",
    description:
      "Join curated group sessions with industry mentors — bring questions, leave with direction.",
  },
  {
    title: "Better discounts on 1:1 mentorship",
    description:
      "Save more when you book verified mentors for career, skills, or startup conversations.",
  },
  {
    title: "Exclusive meetups & industry visits",
    description:
      "Access offline community moments and visits that free members don't get by default.",
  },
  {
    title: "Event & merch discounts",
    description:
      "Special pricing on Mentorle events, partner offers, and selected merch.",
  },
  {
    title: "Premium resources",
    description:
      "Roadmaps, cheatsheets, and AI workflows curated by mentors who actually use them.",
  },
  {
    title: "Add-on growth support",
    description:
      "Unlock mock interviews, resume reviews, and startup guidance when you need them.",
  },
] as const;

const audiences = [
  {
    title: "Students & early career",
    description:
      "Get clarity on roles, portfolios, interviews, and the next skill that actually matters.",
  },
  {
    title: "Founders & builders",
    description:
      "Talk through validation, hiring, go-to-market, and decisions that are expensive to get wrong.",
  },
  {
    title: "Professionals in transition",
    description:
      "Move faster with mentors who've already navigated switches, promotions, and new domains.",
  },
] as const;

const steps = [
  {
    title: "Join Mentorle",
    description: "Create your free account on the Mentorle platform.",
  },
  {
    title: "Upgrade to Plus",
    description: "Unlock monthly sessions, discounts, and premium resources.",
  },
  {
    title: "Show up every month",
    description:
      "Attend sessions, book mentors, and use the resources that fit your goal.",
  },
] as const;

const faqs = [
  {
    q: "What's included in Mentorle Plus?",
    a: "Plus includes 2 live expert sessions every month, better discounts on 1:1 mentorship, exclusive meetups or industry visits, event and merch discounts, premium resources, and add-on support like mock interviews and resume reviews.",
  },
  {
    q: "Do I need Plus to join Mentorle?",
    a: "No. Free membership covers community access, mentor discovery, selected expert sessions, and updates. Upgrade when you want deeper access and stronger value.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Manage or cancel Mentorle Plus from your account on the Mentorle platform. Access continues through the end of your current billing period.",
  },
  {
    q: "How do the monthly expert sessions work?",
    a: "Plus members get access to 2 live expert sessions each month. Join live, ask questions, and leave with practical next steps — not generic advice.",
  },
] as const;

const PLATFORM_SIGNUP = "https://platform.mentorle.in/signup";

export default function PlusPage() {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="page-enter flex flex-1 flex-col">
        {/* Hero */}
        <section
          aria-labelledby="plus-hero-heading"
          className="relative overflow-hidden"
        >
          <div className="mx-auto max-w-[800px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <Reveal>
              <p className="font-display text-[2.75rem] leading-none tracking-tight text-foreground sm:text-[3.5rem] md:text-[4rem]">
                Plus
              </p>
              <h1
                id="plus-hero-heading"
                className="mt-5 font-display text-[1.75rem] leading-[1.2] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
              >
                Go deeper with mentorship that{" "}
                <em className="italic">moves you forward</em>.
              </h1>
              <p className="mx-auto mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted sm:text-[1.125rem]">
                Priority sessions, stronger discounts, exclusive community
                moments, and premium resources — built for people serious about
                growing.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={PLATFORM_SIGNUP}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  <span aria-hidden="true">✦</span>
                  Get Mentorle Plus
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-white px-7 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
                >
                  Compare plans
                </Link>
              </div>
              <p className="mt-5 text-[0.8125rem] text-muted">
                Cancel anytime. Access through your billing period.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What's included */}
        <section
          aria-labelledby="plus-benefits-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                What&apos;s included
              </p>
              <h2
                id="plus-benefits-heading"
                className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
              >
                Everything you need to grow faster
              </h2>
              <p className="mx-auto mt-4 max-w-[36rem] text-center text-[1rem] leading-relaxed text-muted">
                Plus is for members who want more access, better value, and a
                clearer path — every month.
              </p>
            </Reveal>

            <ol className="mt-10 divide-y divide-border/70 border-y border-border/70">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 60} as="li">
                  <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5 sm:py-7">
                    <span className="font-display text-[1.125rem] text-muted tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.0625rem] font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Who it's for */}
        <section
          aria-labelledby="plus-for-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[960px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <Reveal>
              <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                Who it&apos;s for
              </p>
              <h2
                id="plus-for-heading"
                className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
              >
                Built for serious movers
              </h2>
            </Reveal>

            <ul className="mt-10 divide-y divide-border/70 border-y border-border/70 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-y-0">
              {audiences.map((item, index) => (
                <Reveal key={item.title} delay={index * 80} as="li">
                  <div className="px-1 py-7 sm:px-6 sm:py-8 lg:px-8">
                    <h3 className="text-[1.0625rem] font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="plus-steps-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                How it works
              </p>
              <h2
                id="plus-steps-heading"
                className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
              >
                Three steps to deeper mentorship
              </h2>
            </Reveal>

            <ol className="relative mt-12 space-y-0 before:absolute before:top-2 before:bottom-2 before:left-[0.4rem] before:w-px before:bg-border sm:before:left-[0.45rem]">
              {steps.map((item, index) => (
                <Reveal key={item.title} delay={index * 90} as="li">
                  <div className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-5 py-5 sm:gap-6 sm:py-6">
                    <span
                      className="relative z-10 mt-1.5 size-3.5 rounded-full border-2 border-foreground bg-white"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 font-display text-[1.25rem] tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.975rem] leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Free vs Plus */}
        <section
          aria-labelledby="plus-compare-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[960px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <Reveal>
              <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                Free vs Plus
              </p>
              <h2
                id="plus-compare-heading"
                className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
              >
                Start free. Upgrade when you&apos;re ready.
              </h2>
              <p className="mx-auto mt-4 max-w-[34rem] text-center text-[1rem] leading-relaxed text-muted">
                Explore mentors and community at ₹0. Move to Plus when you want
                monthly sessions, stronger discounts, and deeper support.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-0 border-y border-border/70 sm:grid-cols-2 sm:divide-x sm:divide-border/70">
              <Reveal delay={60}>
                <div className="border-b border-border/70 px-1 py-8 sm:border-b-0 sm:pr-8 sm:pl-0 lg:pr-10">
                  <h3 className="font-display text-[1.375rem] tracking-tight text-foreground">
                    Free
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">
                    Community access, mentor discovery, selected expert
                    sessions, and updates — enough to explore and get started.
                  </p>
                  <a
                    href={PLATFORM_SIGNUP}
                    className="mt-5 inline-flex text-[0.9375rem] font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Join Free →
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="px-1 py-8 sm:pr-0 sm:pl-8 lg:pl-10">
                  <h3 className="font-display text-[1.375rem] tracking-tight text-foreground">
                    Mentorle Plus
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">
                    Monthly live sessions, stronger mentorship discounts,
                    exclusive meetups, premium resources, and add-on growth
                    support.
                  </p>
                  <Link
                    href="/pricing"
                    className="mt-5 inline-flex text-[0.9375rem] font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    See pricing →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <FaqSection
          headingId="plus-faq-heading"
          title="Plus FAQ"
          items={faqs}
          footer={<FaqContactFooter fullFaqHref="/#faq" />}
        />

        {/* Final CTA */}
        <section
          aria-labelledby="plus-cta-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <Reveal>
              <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                Start here
              </p>
              <h2
                id="plus-cta-heading"
                className="mt-4 font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.35rem] md:text-[2.75rem]"
              >
                Ready for deeper{" "}
                <em className="italic">mentorship</em>?
              </h2>
              <p className="mx-auto mt-5 max-w-[32rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
                Upgrade to Mentorle Plus and get the sessions, discounts, and
                resources that help you move with intent.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={PLATFORM_SIGNUP}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  <span aria-hidden="true">✦</span>
                  Get Mentorle Plus
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-white px-6 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
                >
                  Compare plans
                </Link>
              </div>

              <p className="mt-5 text-[0.8125rem] text-muted">
                No long lock-in. Cancel anytime from your account.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
