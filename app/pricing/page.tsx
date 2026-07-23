import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import Membership from "@/components/Membership";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Pricing",
  "Start free on Mentorle or upgrade to Mentorle Plus for deeper mentorship, sessions, and exclusive benefits.",
  "/pricing",
);

const faqs = [
  {
    q: "Is Mentorle free?",
    a: "Yes. You can join free for community access, mentor discovery, selected expert sessions, and updates. Upgrade to Mentorle Plus for deeper benefits.",
  },
  {
    q: "What do I get with Mentorle Plus?",
    a: "Plus includes 2 live expert sessions every month, better discounts on 1:1 mentorship, exclusive meetups, event and merch discounts, premium resources, and add-on support.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can manage or cancel Mentorle Plus through your account on the Mentorle platform. Access continues through the end of your current billing period.",
  },
] as const;

export default function PricingPage() {
  return (
    <LegalLayout>
      <section className="mx-auto max-w-[1200px] px-5 pt-14 pb-4 sm:px-8 sm:pt-20 lg:px-10">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
          Pricing
        </p>
        <h1 className="mt-3 max-w-[36rem] font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          Simple plans for serious growth
        </h1>
        <p className="mt-4 max-w-[40rem] text-[1.0625rem] leading-relaxed text-muted">
          Start free to explore Mentors and community. Upgrade to Mentorle Plus
          when you want more sessions, stronger discounts, and deeper support.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://platform.mentorle.in/signup"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Join Free
          </a>
          <a
            href="https://platform.mentorle.in/signup"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-6 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-neutral-400"
          >
            Explore Mentorle Plus
          </a>
        </div>
      </section>

      <Membership />

      <section className="border-t border-border/60 bg-white">
        <div className="mx-auto max-w-[800px] px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]">
            Pricing FAQ
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
    </LegalLayout>
  );
}
