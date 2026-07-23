import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import Membership from "@/components/Membership";
import FaqSection, { FaqContactFooter } from "@/components/FaqSection";
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

      <FaqSection
        headingId="pricing-faq-heading"
        title="Pricing FAQ"
        items={faqs}
        footer={<FaqContactFooter fullFaqHref="/#faq" />}
      />
    </LegalLayout>
  );
}
