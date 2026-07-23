"use client";

import Link from "next/link";
import { useId, useState } from "react";

const faqs = [
  {
    question: "What is Mentorle?",
    answer:
      "Mentorle is a community-first mentorship platform that connects students, founders, learners, and young professionals with verified mentors who've already done what they're trying to do. You can book 1:1 sessions, join live expert sessions, access practical resources, and be part of a real community.",
  },
  {
    question: "Is Mentorle free?",
    answer:
      "Yes. You can join Mentorle for free and get community access, explore verified mentors, attend selected expert sessions, and receive ecosystem updates. If you want deeper access — more sessions, bigger discounts, exclusive meetups, and premium resources — you can upgrade to Mentorle Plus.",
  },
  {
    question: "What do I get in Mentorle Plus?",
    answer:
      "Mentorle Plus includes 2 live expert sessions every month, better discounts on 1:1 mentorship, exclusive offline meetups and industry visits, event and merch discounts, premium resources (roadmaps, cheatsheets, AI workflows), and add-on support like mock interviews and resume reviews.",
  },
  {
    question: "Who can join Mentorle?",
    answer:
      "Anyone serious about moving forward — students looking for career clarity, founders building startups, learners picking up new skills, young professionals navigating transitions, and experts who want to give back and mentor the next generation.",
  },
  {
    question: "How do mentorship sessions work?",
    answer:
      "Browse mentors by expertise, pick someone who fits your goals, and book a 1:1 session. Sessions are real conversations — you bring your questions, your challenges, or your work, and the mentor gives you specific, actionable direction. No fluff, no generic advice.",
  },
  {
    question: "Can I become a mentor?",
    answer:
      "Absolutely. If you've built something, hired people, navigated a career path, or have expertise that can help others move forward, we'd love to have you. Reach out through the 'Partner with us' link in the footer or join free and let us know you want to mentor.",
  },
] as const;

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="text-center">
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
          >
            Questions, answered.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border/80 border-y border-border/80 sm:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div key={faq.question} className="py-1">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-4 text-left transition-colors sm:px-4 ${
                      isOpen
                        ? "bg-[#FFF7F0] ring-1 ring-[#F0D7C2]"
                        : "hover:bg-white/60"
                    }`}
                  >
                    <span className="text-[1rem] font-semibold text-foreground sm:text-[1.0625rem]">
                      {faq.question}
                    </span>
                    <span
                      className="shrink-0 text-muted"
                      aria-hidden="true"
                    >
                      {isOpen ? "▴" : "▾"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-3 pb-4 sm:px-4"
                >
                  {isOpen ? (
                    <p className="max-w-[40rem] text-[0.9375rem] leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[0.9375rem] text-muted">
          Still have questions?{" "}
          <Link
            href="mailto:hello@mentorle.in"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Talk to us
          </Link>
        </p>
      </div>
    </section>
  );
}
