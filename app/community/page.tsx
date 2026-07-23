import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunityLife from "@/components/CommunityLife";
import { createStubMetadata } from "@/components/StubPage";
import { SOCIAL_LINKS } from "@/lib/social";

export const metadata: Metadata = createStubMetadata(
  "Community",
  "Join the Mentorle community on Discord, WhatsApp, LinkedIn, and Instagram — peer learning, sessions, and real mentorship.",
  "/community",
);

const channels = [
  {
    ...SOCIAL_LINKS.discord,
    title: "Discord",
    description:
      "Live chat with learners and mentors — ask questions, share wins, stay close to sessions.",
    cta: "Join Discord",
  },
  {
    ...SOCIAL_LINKS.whatsapp,
    title: "WhatsApp",
    description:
      "Join Mentorle India for quick updates, community announcements, and peer support.",
    cta: "Join WhatsApp",
  },
  {
    ...SOCIAL_LINKS.linkedin,
    title: "LinkedIn",
    description:
      "Follow Mentorle for company news, mentor stories, and ecosystem partnerships.",
    cta: "Follow on LinkedIn",
  },
  {
    ...SOCIAL_LINKS.instagram,
    title: "Instagram",
    description:
      "See sessions, events, and behind-the-scenes from the Mentorle community.",
    cta: "Follow on Instagram",
  },
] as const;

export default function CommunityPage() {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="page-enter flex flex-1 flex-col">
        <section
          aria-labelledby="community-hero-heading"
          className="relative overflow-hidden"
        >
          <div className="mx-auto max-w-[800px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
              Community
            </p>
            <h1
              id="community-hero-heading"
              className="mt-4 font-display text-[2.25rem] leading-[1.12] tracking-tight text-foreground sm:text-[3rem] md:text-[3.25rem]"
            >
              Find your people on Mentorle
            </h1>
            <p className="mx-auto mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted sm:text-[1.125rem]">
              A community-led space for students, founders, and learners to grow
              together through sessions, peer support, and real mentorship.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={SOCIAL_LINKS.discord.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Join Discord
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-white px-7 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
              >
                Join WhatsApp
              </a>
            </div>
          </div>
        </section>

        <CommunityLife />

        <section
          aria-labelledby="community-channels-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <h2
              id="community-channels-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Where the community lives
            </h2>
            <p className="mx-auto mt-4 max-w-[36rem] text-center text-[1rem] leading-relaxed text-muted">
              Pick the channel that fits how you like to stay connected.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="hover-lift flex flex-col rounded-2xl border border-border/70 bg-background p-6"
                >
                  <h3 className="text-[1.125rem] font-semibold text-foreground">
                    {channel.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                    {channel.description}
                  </p>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex h-11 w-fit items-center justify-center rounded-full border border-border bg-white px-5 text-[0.875rem] font-medium text-foreground transition-colors hover:border-neutral-400"
                  >
                    {channel.cta} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="community-cta-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-20">
            <h2
              id="community-cta-heading"
              className="font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Ready to grow with mentors?
            </h2>
            <p className="mx-auto mt-4 max-w-[30rem] text-[1rem] leading-relaxed text-muted">
              Join free on the platform, then plug into Discord and WhatsApp so
              you never miss sessions and community moments.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="https://platform.mentorle.in/signup"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Join Free
              </a>
              <Link
                href="/plus"
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-white px-7 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
              >
                Explore Mentorle Plus
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
