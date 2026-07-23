import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Terms & Conditions",
  "Read the terms and conditions for using Mentorle, operated by AltioraEdtech Learning (OPC) Pvt. Ltd.",
  "/terms",
);

const sections = [
  {
    title: "1. Agreement to terms",
    body: [
      "By accessing or using Mentorle (the website, platform, community features, and related services), you agree to these Terms & Conditions.",
      "If you do not agree, do not use Mentorle.",
      "Mentorle is operated by AltioraEdtech Learning (OPC) Pvt. Ltd. (CIN: U85500PB2025OPC064679).",
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      "You must provide accurate information when creating an account or applying as a mentor.",
      "Mentors must meet Mentorle’s eligibility criteria, including relevant professional experience or advanced qualifications and a commitment to mentoring.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
    ],
  },
  {
    title: "3. Our services",
    body: [
      "Mentorle provides community-led mentorship connections, expert sessions, resources, and related educational support.",
      "Free membership includes community access and selected features. Mentorle Plus and paid sessions may include additional benefits as described on our Pricing page.",
      "Mentorle does not guarantee specific academic, career, or business outcomes from mentorship conversations.",
    ],
  },
  {
    title: "4. Mentorship conduct",
    body: [
      "Learners and mentors must treat each other respectfully and professionally.",
      "Mentorship sessions are intended for guidance, feedback, and learning — not for harassment, spam, illegal activity, or sharing confidential third-party information without permission.",
      "Mentorle may suspend or remove accounts that violate these standards.",
    ],
  },
  {
    title: "5. Payments and memberships",
    body: [
      "Some features, sessions, or Mentorle Plus benefits may require payment.",
      "Fees, discounts, and inclusions are shown at checkout or on the Pricing page and may change over time.",
      "Unless otherwise stated, fees paid for completed sessions or membership periods are non-refundable.",
    ],
  },
  {
    title: "6. Intellectual property",
    body: [
      "Mentorle’s brand, website design, platform software, and original content are owned by AltioraEdtech Learning (OPC) Pvt. Ltd. or its licensors.",
      "You may not copy, redistribute, or commercially exploit Mentorle content without prior written permission.",
      "Content you submit remains yours, but you grant Mentorle a license to use it as needed to operate and improve the service.",
    ],
  },
  {
    title: "7. Third-party links and tools",
    body: [
      "Mentorle may link to third-party platforms (for example login, signup, community forums, or partner sites). We are not responsible for third-party content, policies, or practices.",
    ],
  },
  {
    title: "8. Disclaimers",
    body: [
      "Mentorle is provided on an “as is” and “as available” basis.",
      "We do not warrant uninterrupted access, error-free operation, or that mentorship advice will produce particular results.",
      "Advice shared by mentors reflects their own experience and is not a substitute for professional legal, financial, medical, or regulated advice unless explicitly stated.",
    ],
  },
  {
    title: "9. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, AltioraEdtech Learning (OPC) Pvt. Ltd. and Mentorle shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.",
      "Our total liability for any claim related to the service is limited to the amount you paid to Mentorle in the three months preceding the claim, if any.",
    ],
  },
  {
    title: "10. Termination",
    body: [
      "You may stop using Mentorle at any time.",
      "We may suspend or terminate access if you breach these Terms, misuse the platform, or create risk for other users.",
    ],
  },
  {
    title: "11. Governing law",
    body: [
      "These Terms are governed by the laws of India. Courts in Punjab, India shall have jurisdiction over disputes arising from these Terms, subject to applicable law.",
    ],
  },
  {
    title: "12. Changes",
    body: [
      "We may update these Terms & Conditions periodically. Continued use of Mentorle after updates constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "13. Contact",
    body: [
      "Questions about these Terms? Contact AltioraEdtech Learning (OPC) Pvt. Ltd. at hello@mentorle.in or visit our Contact page.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <LegalLayout>
      <article className="mx-auto w-full max-w-[760px] px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-[0.9375rem] text-muted">
          Last updated: July 23, 2026
        </p>
        <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted">
          These Terms &amp; Conditions govern your use of Mentorle. Please read
          them carefully before using our services.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.title}>
              <h2
                id={section.title}
                className="font-display text-[1.375rem] tracking-tight text-foreground"
              >
                {section.title}
              </h2>
              <ul className="mt-3 space-y-2.5">
                {section.body.map((paragraph) => (
                  <li
                    key={paragraph}
                    className="text-[0.9875rem] leading-relaxed text-foreground/80"
                  >
                    {paragraph}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted">
          Also see our{" "}
          <Link
            href="/privacy"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Contact
          </Link>{" "}
          page.
        </p>
      </article>
    </LegalLayout>
  );
}
