import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      "Access offline community moments and visits that free members don’t get by default.",
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
      "Move faster with mentors who’ve already navigated switches, promotions, and new domains.",
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
    description: "Attend sessions, book mentors, and use the resources that fit your goal.",
  },
] as const;

const faqs = [
  {
    q: "What’s included in Mentorle Plus?",
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
      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section
          aria-labelledby="plus-hero-heading"
          className="relative overflow-hidden"
        >
          <div className="mx-auto max-w-[800px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
              Mentorle Plus
            </p>
            <h1
              id="plus-hero-heading"
              className="mt-4 font-display text-[2.25rem] leading-[1.12] tracking-tight text-foreground sm:text-[3rem] md:text-[3.25rem]"
            >
              Go deeper with{" "}
              <em className="italic">Mentorle Plus</em>
            </h1>
            <p className="mx-auto mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted sm:text-[1.125rem]">
              Priority sessions, stronger discounts, exclusive community moments,
              and premium resources — built for people serious about moving
              forward.
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
          </div>
        </section>

        {/* Benefits */}
        <section
          aria-labelledby="plus-benefits-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
              What’s included
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
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="rounded-2xl border border-border/70 bg-background p-6"
                >
                  <span
                    className="flex size-8 items-center justify-center rounded-full bg-foreground text-xs text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {benefit.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who it's for */}
        <section
          aria-labelledby="plus-for-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <h2
              id="plus-for-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Built for serious movers
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {audiences.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-white p-6"
                >
                  <h3 className="text-[1.0625rem] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="plus-steps-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <h2
              id="plus-steps-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              How Plus works
            </h2>
            <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {steps.map((item, index) => (
                <li
                  key={item.title}
                  className="relative rounded-2xl border border-border/70 bg-background p-6"
                >
                  <p className="font-display text-[2rem] leading-none text-muted/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-[1.0625rem] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Free vs Plus strip */}
        <section
          aria-labelledby="plus-compare-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[800px] px-5 py-16 text-center sm:px-8 sm:py-20">
            <h2
              id="plus-compare-heading"
              className="font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Start free. Upgrade when you’re ready.
            </h2>
            <p className="mx-auto mt-4 max-w-[34rem] text-[1rem] leading-relaxed text-muted">
              Explore mentors and community at ₹0. Move to Plus when you want
              monthly sessions, stronger discounts, and deeper support.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={PLATFORM_SIGNUP}
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-6 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-neutral-400"
              >
                Join Free
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
              >
                See pricing →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="plus-faq-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[800px] px-5 py-16 sm:px-8 sm:py-20">
            <h2
              id="plus-faq-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Plus FAQ
            </h2>
            <ul className="mt-10 space-y-4">
              {faqs.map((item) => (
                <li
                  key={item.q}
                  className="rounded-2xl border border-border/70 bg-background p-5 sm:p-6"
                >
                  <h3 className="text-[1rem] font-semibold text-foreground">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {item.a}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm text-muted">
              Still deciding?{" "}
              <Link
                href="/contact"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                Contact us
              </Link>{" "}
              or{" "}
              <Link
                href="/#faq"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                read the full FAQ
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section
          aria-labelledby="plus-cta-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <h2
              id="plus-cta-heading"
              className="font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Ready for deeper mentorship?
            </h2>
            <p className="mx-auto mt-4 max-w-[30rem] text-[1rem] leading-relaxed text-muted">
              Upgrade to Mentorle Plus and get the sessions, discounts, and
              resources that help you move with intent.
            </p>
            <a
              href={PLATFORM_SIGNUP}
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <span aria-hidden="true">✦</span>
              Get Mentorle Plus
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
