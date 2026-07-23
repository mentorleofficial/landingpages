import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import ContactForm from "@/components/ContactForm";
import { createStubMetadata } from "@/components/StubPage";
import { SOCIAL_LINKS } from "@/lib/social";

export const metadata: Metadata = createStubMetadata(
  "Contact Us",
  "Get in touch with Mentorle and AltioraEdtech Learning (OPC) Pvt. Ltd. for mentorship, partnerships, and support.",
  "/contact",
);

const contactDetails = [
  {
    label: "Email",
    value: "hello@mentorle.in",
    href: "mailto:hello@mentorle.in",
  },
  {
    label: "Location",
    value: "Punjab, India",
    href: null,
  },
  {
    label: "Company",
    value: "AltioraEdtech Learning (OPC) Pvt. Ltd.",
    href: null,
  },
  {
    label: "CIN",
    value: "U85500PB2025OPC064679",
    href: null,
  },
] as const;

const communityChannels = [
  {
    ...SOCIAL_LINKS.discord,
    description: "Chat with mentors and learners live",
  },
  {
    ...SOCIAL_LINKS.whatsapp,
    description: "Join the Mentorle India community group",
  },
  {
    ...SOCIAL_LINKS.linkedin,
    description: "Follow company updates and news",
  },
  {
    ...SOCIAL_LINKS.instagram,
    description: "See sessions, events, and stories",
  },
] as const;

export default function ContactPage() {
  return (
    <LegalLayout>
      <div className="mx-auto w-full max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="max-w-[40rem]">
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Talk to us
          </h1>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">
            Questions about mentorship, Mentorle Plus, university partnerships,
            or becoming a mentor? Send us a message — we&apos;re here to help.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <aside className="space-y-4">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/70 bg-white p-5"
              >
                <p className="text-[0.75rem] font-medium tracking-[0.1em] text-muted uppercase">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-[1rem] font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-[1rem] font-medium text-foreground">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
            <div className="rounded-2xl bg-[#243044] p-5 text-white">
              <p className="font-display text-xl tracking-tight">
                Prefer community channels?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Reach us on Discord, WhatsApp, LinkedIn, or Instagram for
                updates and quick questions.
              </p>
              <ul className="mt-4 space-y-2">
                {communityChannels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-3 text-sm"
                    >
                      <span>
                        <span className="font-medium text-white underline-offset-4 group-hover:underline">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block text-white/60">
                          {channel.description}
                        </span>
                      </span>
                      <span aria-hidden="true" className="text-white/50">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </LegalLayout>
  );
}
