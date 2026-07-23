import Link from "next/link";
import type { ReactNode } from "react";

const offerings = [
  {
    title: "1:1 Mentorship Sessions",
    description:
      "Direct conversations with verified mentors who've navigated the path you're on. Bring your questions, leave with answers.",
    href: "https://platform.mentorle.in/signup",
    badge: "Most booked",
    icon: "person",
  },
  {
    title: "Live Expert Sessions",
    description:
      "Group sessions with industry experts on trending topics, career paths, and real-world skills. Join live, ask questions.",
    href: "/community",
    badge: null,
    icon: "broadcast",
  },
  {
    title: "Community Access",
    description:
      "Join a community of learners, founders, and mentors across Punjab. Ask questions, share progress, find your people.",
    href: "/community",
    badge: null,
    icon: "group",
  },
  {
    title: "Mock Interviews",
    description:
      "Practice interviews with mentors who actually hire. Get honest feedback on what to fix before the real thing.",
    href: "https://platform.mentorle.in/signup",
    badge: null,
    icon: "chat",
  },
  {
    title: "Resume Reviews",
    description:
      "Get your resume reviewed by people who read them. Specific, actionable feedback — not templates.",
    href: "https://platform.mentorle.in/signup",
    badge: null,
    icon: "doc",
  },
  {
    title: "Career Roadmaps",
    description:
      "Practical, curated roadmaps for skills and career transitions. Built by mentors, not scraped from the internet.",
    href: "/plus",
    badge: null,
    icon: "map",
  },
  {
    title: "Startup Guidance",
    description:
      "Talk to founders who've built and failed. Get help with validation, go-to-market, and avoiding expensive mistakes.",
    href: "https://platform.mentorle.in/signup",
    badge: null,
    icon: "rocket",
  },
  {
    title: "AI Workflows & Resources",
    description:
      "Practical AI workflows, cheatsheets, and resources that help you work smarter — curated by mentors who use them.",
    href: "/plus",
    badge: null,
    icon: "link",
  },
] as const;

type OfferingIconType = (typeof offerings)[number]["icon"];

function OfferingIcon({ type }: { type: OfferingIconType }) {
  const props = {
    className: "size-5 text-foreground",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  const icons: Record<OfferingIconType, ReactNode> = {
    person: (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.25" />
        <path
          d="M5.5 19.5c1.2-3.2 3.5-4.75 6.5-4.75s5.3 1.55 6.5 4.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    broadcast: (
      <svg {...props}>
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6" strokeLinecap="round" />
        <path d="M15.8 8.2a5.4 5.4 0 0 1 0 7.6" strokeLinecap="round" />
        <path d="M5.5 5.5a9.3 9.3 0 0 0 0 13" strokeLinecap="round" />
        <path d="M18.5 5.5a9.3 9.3 0 0 1 0 13" strokeLinecap="round" />
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
    chat: (
      <svg {...props}>
        <path
          d="M5 6.5h14a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H10l-4 3v-3H5A1.5 1.5 0 0 1 3.5 15V8A1.5 1.5 0 0 1 5 6.5Z"
          strokeLinejoin="round"
        />
        <path d="M9 11.5h.01M12 11.5h.01M15 11.5h.01" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
    doc: (
      <svg {...props}>
        <path
          d="M7 4.5h7.5L18.5 8.5V19a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V6A1.5 1.5 0 0 1 7 4.5Z"
          strokeLinejoin="round"
        />
        <path d="M14.5 4.5V8h3.5" strokeLinejoin="round" />
        <path d="M9 12h6M9 15.5h4.5" strokeLinecap="round" />
      </svg>
    ),
    map: (
      <svg {...props}>
        <path
          d="M9.5 5.5 3.5 7.5v11l6-2 5 2 6-2v-11l-6 2-5-2Z"
          strokeLinejoin="round"
        />
        <path d="M9.5 5.5v11M14.5 7.5v11" strokeLinecap="round" />
      </svg>
    ),
    rocket: (
      <svg {...props}>
        <path
          d="M5.5 15.5c2.2-1 4.2-3.8 5-6.8.4-1.5.5-3 .2-4.5 2.2.8 4 2.4 5.2 4.4 1.4 2.3 1.8 4.5 1.3 6.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 14.5 7 19.5h4l1.2-3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.2 10.2h.01" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
    ),
    link: (
      <svg {...props}>
        <path
          d="M9.5 13.5a3.5 3.5 0 0 0 5 0l2.5-2.5a3.5 3.5 0 0 0-5-5L11 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 10.5a3.5 3.5 0 0 0-5 0L7 13a3.5 3.5 0 0 0 5 5l1-1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return icons[type];
}

export default function WhatYouCanDoHere() {
  return (
    <section
      aria-labelledby="offerings-heading"
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
          What you can do here
        </p>
        <h2
          id="offerings-heading"
          className="mt-3 max-w-[28rem] font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
        >
          Practical support, not abstract features.
        </h2>
        <p className="mt-4 max-w-[36rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
          Every offering is designed around a real moment — the interview
          you&apos;re nervous about, the idea you can&apos;t validate, the
          decision you keep putting off.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          {offerings.map((item) => (
            <li key={item.title} className="min-w-0">
              <Link
                href={item.href}
                className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:p-6"
              >
                {item.badge ? (
                  <span className="absolute top-4 right-4 rounded-full bg-foreground px-2.5 py-1 text-[0.625rem] font-medium tracking-[0.06em] text-white uppercase">
                    {item.badge}
                  </span>
                ) : null}

                <OfferingIcon type={item.icon} />

                <h3 className="mt-4 pr-16 text-[1rem] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-muted">
                  {item.description}
                </p>
                <span
                  className="mt-5 text-[0.9375rem] text-muted transition-colors group-hover:text-foreground"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
