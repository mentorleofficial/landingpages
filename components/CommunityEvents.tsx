import type { ReactNode } from "react";
import MentorAvatar from "./MentorAvatar";
import type { Mentor, MentorSummary } from "@/lib/mentors";

const features = [
  {
    title: "Live sessions",
    description: "Real-time conversations with experts",
    icon: "broadcast",
  },
  {
    title: "Community events",
    description: "Meetups, workshops, and AMAs",
    icon: "calendar",
  },
  {
    title: "Active mentors",
    description: "People who've actually done it",
    icon: "group",
  },
  {
    title: "Learner journeys",
    description: "Track real progress, not promises",
    icon: "path",
  },
  {
    title: "Expert support",
    description: "Guidance when you're stuck",
    icon: "headset",
  },
  {
    title: "Local context",
    description: "Mentors who understand your path",
    icon: "pin",
  },
] as const;

type FeatureIcon = (typeof features)[number]["icon"];

type CommunityEventsProps = {
  mentors: Mentor[];
  summary: MentorSummary;
};

function FeatureIcon({ type }: { type: FeatureIcon }) {
  const props = {
    className: "size-5 text-foreground",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  const icons: Record<FeatureIcon, ReactNode> = {
    broadcast: (
      <svg {...props}>
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <path
          d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6"
          strokeLinecap="round"
        />
        <path
          d="M5.5 5.5a9.3 9.3 0 0 0 0 13M18.5 5.5a9.3 9.3 0 0 1 0 13"
          strokeLinecap="round"
        />
      </svg>
    ),
    calendar: (
      <svg {...props}>
        <rect x="4" y="5.5" width="16" height="14" rx="2" />
        <path d="M8 3.5v4M16 3.5v4M4 10h16" strokeLinecap="round" />
      </svg>
    ),
    group: (
      <svg {...props}>
        <circle cx="9" cy="8.5" r="2.5" />
        <circle cx="16" cy="9.5" r="2" />
        <path
          d="M3.5 18.5c.9-2.6 2.7-4 5.5-4s4.6 1.4 5.5 4"
          strokeLinecap="round"
        />
        <path
          d="M13.5 14.8c1.3-.4 2.7-.3 4.2.7 1.2.8 2 2 2.3 3"
          strokeLinecap="round"
        />
      </svg>
    ),
    path: (
      <svg {...props}>
        <circle cx="6" cy="17" r="2" />
        <circle cx="12" cy="7" r="2" />
        <circle cx="18" cy="14" r="2" />
        <path
          d="M7.7 15.4 10.3 8.6M13.7 8.2 16.4 12.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    headset: (
      <svg {...props}>
        <path d="M5 13.5v-2a7 7 0 0 1 14 0v2" strokeLinecap="round" />
        <path
          d="M5 13.5v3a1.5 1.5 0 0 0 1.5 1.5H8M19 13.5v3a1.5 1.5 0 0 1-1.5 1.5H16"
          strokeLinecap="round"
        />
        <path d="M10 19.5h4" strokeLinecap="round" />
      </svg>
    ),
    pin: (
      <svg {...props}>
        <path
          d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2.1" />
      </svg>
    ),
  };

  return icons[type];
}

export default function CommunityEvents({
  mentors,
  summary,
}: CommunityEventsProps) {
  const faces = mentors.filter((m) => m.image.startsWith("http")).slice(0, 8);
  const gallery = faces.length >= 4 ? faces : mentors.slice(0, 8);

  return (
    <section
      aria-labelledby="community-heading"
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
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
              Mentorle isn&apos;t a faceless platform. It&apos;s a living network
              of mentors and learners who show up for each other — with practical
              guidance and real context.
            </p>

            {gallery.length > 0 ? (
              <ul className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-3">
                {gallery.map((mentor) => (
                  <li
                    key={mentor.id}
                    className="overflow-hidden rounded-2xl border border-border/60 bg-white"
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
            ) : null}

            {summary.count > 0 ? (
              <a
                href="https://platform.mentorle.in/signup"
                className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-white px-4 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors hover:border-neutral-400"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-badge text-foreground"
                    aria-hidden="true"
                  >
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M4 8.5h16v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-9Z"
                        strokeLinejoin="round"
                      />
                      <path d="M4 8.5 12 13l8-4.5" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[1.375rem] leading-none tracking-tight text-foreground">
                      {summary.count}+
                    </span>
                    <span className="mt-1 block truncate text-[0.8125rem] text-muted">
                      Mentors live on Mentorle
                      {summary.topLocation ? ` · ${summary.topLocation}` : ""}
                    </span>
                  </span>
                </span>
                <span className="shrink-0 text-[0.9375rem] text-muted">
                  Join ↗
                </span>
              </a>
            ) : null}
          </div>

          <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-2xl border border-border/70 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <FeatureIcon type={feature.icon} />
                <h3 className="mt-3 text-[1rem] font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-muted">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
