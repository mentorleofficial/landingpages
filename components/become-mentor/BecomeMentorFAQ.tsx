"use client";

import { useId, useState } from "react";

const faqs = [
  {
    question: "What is Mentorle?",
    answer:
      "Mentorle is providing one-on-one mentoring and guidance from our experienced mentors in the field of IT And Electronic or Developing a platform that would enable graduates and students to network with organizations and entrepreneurs while providing them with access to all the support they might require, including assistance in coding problems or contests.",
  },
  {
    question: "Who are the mentors on Mentorle?",
    answer:
      "Our mentors are experienced professionals from various IT And Electronic fields, including software development, data science, cybersecurity, and more. They are passionate about helping others and committed to sharing their knowledge and expertise.",
  },
  {
    question: "What kind of support can I expect from my mentor?",
    answer:
      "You can expect career guidance, technical problem-solving help, interview preparation, project feedback, and practical advice tailored to your goals — including support with coding challenges, contests, and navigating opportunities in IT and electronics.",
  },
  {
    question: "Is Mentorle secure?",
    answer:
      "Yes, Mentorle takes data security very seriously. We use industry-standard security measures to protect your personal information.",
  },
  {
    question: "How much does it cost to use Mentorle?",
    answer:
      "It is cost-effective, so you don't have to worry about authenticity or legitimacy— we offer you reliable services.",
  },
] as const;

export default function BecomeMentorFAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="become-faq-heading"
      className="border-t border-border/60 bg-white"
    >
      <div className="mx-auto max-w-[800px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
          FAQ
        </p>
        <h2
          id="become-faq-heading"
          className="mt-3 text-center font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem]"
        >
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-[36rem] text-center text-[1rem] leading-relaxed text-muted">
          Explore our FAQ section to find answers to commonly asked questions
          about our products/services. If you can&apos;t find what you&apos;re
          looking for, feel free to reach out to join our Telegram Discussion
          Forum.
        </p>
        <p className="mt-5 text-center">
          <a
            href="https://t.me/mentorle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-foreground underline-offset-4 hover:underline"
          >
            Join our Discussion Forum
            <span aria-hidden="true">↗</span>
          </a>
        </p>

        <div className="mt-10 divide-y divide-border/80 border-y border-border/80">
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
                        : "hover:bg-background"
                    }`}
                  >
                    <span className="text-[1rem] font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-lg text-muted" aria-hidden="true">
                      {isOpen ? "−" : "+"}
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
                    <p className="text-[0.9375rem] leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
