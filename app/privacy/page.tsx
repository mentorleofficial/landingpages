import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Privacy Policy",
  "Learn how Mentorle and AltioraEdtech Learning (OPC) Pvt. Ltd. collect, use, and protect your personal information.",
  "/privacy",
);

const sections = [
  {
    title: "1. Who we are",
    body: [
      "Mentorle is operated by AltioraEdtech Learning (OPC) Pvt. Ltd. (CIN: U85500PB2025OPC064679), based in Punjab, India.",
      "If you have questions about this Privacy Policy or how we handle your data, contact us at hello@mentorle.in.",
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "Account information: name, email address, phone number, and profile details you provide when you sign up or apply as a mentor.",
      "Usage information: how you interact with Mentorle, including pages visited, sessions booked, and community activity.",
      "Communications: messages you send to us, mentors, or through support channels.",
      "Technical data: device type, browser, IP address, and approximate location collected for security and performance.",
    ],
  },
  {
    title: "3. How we use your information",
    body: [
      "To create and manage your Mentorle account.",
      "To connect learners with mentors and enable mentorship sessions, community features, and resources.",
      "To improve our platform, personalize experiences, and communicate product updates.",
      "To process applications for Mentorle Plus, mentor onboarding, and institutional partnerships.",
      "To protect the security of our users and comply with applicable laws.",
    ],
  },
  {
    title: "4. How we share information",
    body: [
      "We do not sell your personal information.",
      "We may share limited information with mentors or learners as needed to facilitate booked sessions.",
      "We may use trusted service providers (hosting, analytics, communications) who process data on our behalf under confidentiality obligations.",
      "We may disclose information if required by law or to protect the rights, safety, and integrity of Mentorle and its users.",
    ],
  },
  {
    title: "5. Data security",
    body: [
      "Mentorle takes data security seriously and uses industry-standard measures to protect personal information.",
      "No method of transmission or storage is completely secure. We continuously work to improve our safeguards.",
    ],
  },
  {
    title: "6. Data retention",
    body: [
      "We retain personal information only as long as needed for the purposes described in this policy, including legal, accounting, and security requirements.",
      "You may request deletion of your account data by contacting hello@mentorle.in, subject to lawful retention needs.",
    ],
  },
  {
    title: "7. Your choices and rights",
    body: [
      "You may access, update, or correct your account information through the Mentorle platform.",
      "You may opt out of non-essential marketing communications at any time.",
      "Depending on applicable law, you may request access, correction, or deletion of your personal data by emailing hello@mentorle.in.",
    ],
  },
  {
    title: "8. Children's privacy",
    body: [
      "Mentorle is intended for students, founders, learners, and professionals. If you believe a child has provided personal information without appropriate consent, contact us and we will take appropriate action.",
    ],
  },
  {
    title: "9. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will reflect the latest revision.",
      "Continued use of Mentorle after changes means you acknowledge the updated policy.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "AltioraEdtech Learning (OPC) Pvt. Ltd.",
      "Email: hello@mentorle.in",
      "Location: Punjab, India",
      "CIN: U85500PB2025OPC064679",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <article className="mx-auto w-full max-w-[760px] px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[0.9375rem] text-muted">
          Last updated: July 23, 2026
        </p>
        <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted">
          This Privacy Policy explains how Mentorle collects, uses, shares, and
          protects your information when you use our website, platform, and
          related services.
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
          Need help?{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Contact us
          </Link>{" "}
          or email{" "}
          <a
            href="mailto:hello@mentorle.in"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            hello@mentorle.in
          </a>
          .
        </p>
      </article>
    </LegalLayout>
  );
}
