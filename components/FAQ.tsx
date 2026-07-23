import Link from "next/link";
import FaqSection from "./FaqSection";

const faqs = [
  {
    q: "What is Mentorle?",
    a: "Mentorle is a community-first mentorship platform that connects students, founders, learners, and young professionals with verified mentors who've already done what they're trying to do. You can book 1:1 sessions, join live expert sessions, access practical resources, and be part of a real community.",
  },
  {
    q: "Is Mentorle free?",
    a: "Yes. You can join Mentorle for free and get community access, explore verified mentors, attend selected expert sessions, and receive ecosystem updates. If you want deeper access — more sessions, bigger discounts, exclusive meetups, and premium resources — you can upgrade to Mentorle Plus.",
  },
  {
    q: "What do I get in Mentorle Plus?",
    a: "Mentorle Plus includes 2 live expert sessions every month, better discounts on 1:1 mentorship, exclusive offline meetups and industry visits, event and merch discounts, premium resources (roadmaps, cheatsheets, AI workflows), and add-on support like mock interviews and resume reviews.",
  },
  {
    q: "Who can join Mentorle?",
    a: "Anyone serious about moving forward — students looking for career clarity, founders building startups, learners picking up new skills, young professionals navigating transitions, and experts who want to give back and mentor the next generation.",
  },
  {
    q: "How do mentorship sessions work?",
    a: "Browse mentors by expertise, pick someone who fits your goals, and book a 1:1 session. Sessions are real conversations — you bring your questions, your challenges, or your work, and the mentor gives you specific, actionable direction. No fluff, no generic advice.",
  },
  {
    q: "Can I become a mentor?",
    a: "Absolutely. If you've built something, hired people, navigated a career path, or have expertise that can help others move forward, we'd love to have you. Reach out through the 'Partner with us' link in the footer or join free and let us know you want to mentor.",
  },
] as const;

export default function FAQ() {
  return (
    <FaqSection
      id="faq"
      headingId="faq-heading"
      title="Questions, answered."
      items={faqs}
      footer={
        <p>
          Still have questions?{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Talk to us
          </Link>
        </p>
      }
    />
  );
}
