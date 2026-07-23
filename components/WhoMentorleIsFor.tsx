import type { ReactNode } from "react";

const audiences = [
  {
    title: "Students",
    description:
      "Career clarity, project guidance, and industry exposure before you graduate.",
    tags: ["Career clarity", "Project guidance", "Industry exposure"],
    icon: "students" as const,
    iconFilled: true,
  },
  {
    title: "Founders",
    description:
      "Startup support, execution feedback, and access to mentors who've built before.",
    tags: ["Startup support", "Execution feedback", "Mentor access"],
    icon: "founders" as const,
    iconFilled: false,
  },
  {
    title: "Learners",
    description:
      "Practical sessions, roadmaps, and expert insights to learn faster and deeper.",
    tags: ["Practical sessions", "Roadmaps", "Expert insights"],
    icon: "learners" as const,
    iconFilled: false,
  },
  {
    title: "Young Professionals",
    description:
      "Growth support, direction, and help navigating transitions in your career.",
    tags: ["Growth support", "Direction", "Transitions"],
    icon: "professionals" as const,
    iconFilled: false,
  },
  {
    title: "Experts",
    description:
      "Give back, build credibility, and support the next generation of doers.",
    tags: ["Give back", "Build credibility", "Support the next gen"],
    icon: "experts" as const,
    iconFilled: false,
  },
] as const;

function AudienceIcon({
  type,
  filled,
}: {
  type: (typeof audiences)[number]["icon"];
  filled: boolean;
}) {
  const stroke = {
    className: "size-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  let glyph: ReactNode;

  switch (type) {
    case "students":
      glyph = (
        <svg {...stroke} stroke={filled ? "white" : "currentColor"}>
          <path
            d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 11.5v4.2c0 .3 2.4 2.3 5.5 2.3s5.5-2 5.5-2.3v-4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M21 10v5.5" strokeLinecap="round" />
        </svg>
      );
      break;
    case "founders":
      glyph = (
        <svg {...stroke}>
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
      );
      break;
    case "learners":
      glyph = (
        <svg {...stroke}>
          <path
            d="M4 5.5h6.5A3.5 3.5 0 0 1 14 9v10.5a2.5 2.5 0 0 0-2.5-2.5H4V5.5Z"
            strokeLinejoin="round"
          />
          <path
            d="M20 5.5h-6.5A3.5 3.5 0 0 0 10 9v10.5a2.5 2.5 0 0 1 2.5-2.5H20V5.5Z"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case "professionals":
      glyph = (
        <svg {...stroke}>
          <rect x="3.5" y="8" width="17" height="11.5" rx="1.5" />
          <path
            d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8"
            strokeLinejoin="round"
          />
          <path d="M3.5 12.5h17" strokeLinecap="round" />
        </svg>
      );
      break;
    case "experts":
      glyph = (
        <svg {...stroke}>
          <path
            d="M12 19.5s-6.5-4.1-6.5-9A3.8 3.8 0 0 1 12 7.2 3.8 3.8 0 0 1 18.5 10.5c0 4.9-6.5 9-6.5 9Z"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
  }

  if (filled) {
    return (
      <span className="flex size-10 items-center justify-center rounded-xl bg-foreground text-white">
        {glyph}
      </span>
    );
  }

  return (
    <span className="flex size-10 items-center justify-center text-foreground">
      {glyph}
    </span>
  );
}

export default function WhoMentorleIsFor() {
  return (
    <section
      aria-labelledby="who-for-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
          Who Mentorle is for
        </p>
        <h2
          id="who-for-heading"
          className="mt-3 max-w-[34rem] font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
        >
          Whoever you are, if you&apos;re serious about moving forward.
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {audiences.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl border border-border/70 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-6"
            >
              <AudienceIcon type={item.icon} filled={item.iconFilled} />
              <h3 className="mt-4 text-[1.0625rem] font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    <span className="inline-flex rounded-full bg-badge px-2.5 py-1 text-[0.75rem] text-muted">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="flex min-h-[14rem] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-transparent px-5 py-8 text-center sm:min-h-0 sm:p-6">
            <p className="text-[0.9375rem] text-muted">
              Not sure where you fit?
            </p>
            <a
              href="https://platform.mentorle.in/signup"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-[0.875rem] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Join free and explore
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
