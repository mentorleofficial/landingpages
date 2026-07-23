import Link from "next/link";
import MentorAvatar from "./MentorAvatar";
import Reveal from "./Reveal";
import type { Mentor, MentorSummary } from "@/lib/mentors";
import { SOCIAL_LINKS } from "@/lib/social";

const features = [
  {
    title: "Live sessions",
    description: "Real-time conversations with experts",
  },
  {
    title: "Community events",
    description: "Meetups, workshops, and AMAs",
  },
  {
    title: "Active mentors",
    description: "People who've actually done it",
  },
  {
    title: "Local context",
    description: "Mentors who understand your path",
  },
] as const;

type CommunityEventsProps = {
  mentors: Mentor[];
  summary: MentorSummary;
};

export default function CommunityEvents({
  mentors,
  summary,
}: CommunityEventsProps) {
  const faces = mentors.filter((m) => m.image.startsWith("http")).slice(0, 8);
  const gallery = faces.length >= 4 ? faces : mentors.slice(0, 8);

  return (
    <section
      aria-labelledby="community-heading"
      className="border-t border-border/60 bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                Community &amp; mentors
              </p>
              <h2
                id="community-heading"
                className="mt-3 max-w-[22rem] font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
              >
                Built on conversations with real mentors.
              </h2>
              <p className="mt-4 max-w-[32rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
                Mentorle isn&apos;t a faceless platform. It&apos;s a living
                network of mentors and learners who show up for each other —
                with practical guidance and real context.
              </p>
            </Reveal>

            {gallery.length > 0 ? (
              <Reveal delay={100}>
                <ul className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-3">
                  {gallery.map((mentor) => (
                    <li
                      key={mentor.id}
                      className="overflow-hidden rounded-2xl border border-border/60 bg-background"
                    >
                      <MentorAvatar
                        src={mentor.image}
                        alt={mentor.name}
                        size={160}
                        className="aspect-square size-full object-cover"
                      />
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {summary.count > 0 ? (
              <Reveal delay={140}>
                <p className="mt-5 text-[0.9375rem] text-muted">
                  <span className="font-display text-[1.5rem] tracking-tight text-foreground">
                    {summary.count}+
                  </span>{" "}
                  mentors live on Mentorle
                  {summary.topLocation ? ` · ${summary.topLocation}` : ""}
                </p>
              </Reveal>
            ) : null}

            <Reveal delay={180}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={SOCIAL_LINKS.discord.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-border bg-white px-4 text-[0.8125rem] font-medium text-foreground transition-colors hover:border-neutral-400"
                >
                  Discord
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-border bg-white px-4 text-[0.8125rem] font-medium text-foreground transition-colors hover:border-neutral-400"
                >
                  WhatsApp
                </a>
                <Link
                  href="/community"
                  className="inline-flex h-10 items-center rounded-full border border-border bg-white px-4 text-[0.8125rem] font-medium text-foreground transition-colors hover:border-neutral-400"
                >
                  All channels →
                </Link>
              </div>
            </Reveal>
          </div>

          <ol className="divide-y divide-border/70 border-y border-border/70">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 70} as="li">
                <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:py-7">
                  <span className="font-display text-[1.125rem] text-muted tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
