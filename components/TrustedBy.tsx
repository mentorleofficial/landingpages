import type { MentorSummary } from "@/lib/mentors";

type TrustItem = {
  title: string;
  subtitle: string;
  icon: "group" | "building" | "pin" | "spark";
};

type TrustedByProps = {
  summary: MentorSummary;
};

function buildTrustItems(summary: MentorSummary): TrustItem[] {
  if (summary.count === 0) return [];

  const items: TrustItem[] = [
    {
      title: `${summary.count}+ mentors`,
      subtitle: "Verified on Mentorle",
      icon: "group",
    },
  ];

  if (summary.industryCount > 0) {
    items.push({
      title: `${summary.industryCount}+ fields`,
      subtitle: summary.topIndustry
        ? `Including ${summary.topIndustry}`
        : "Across industries",
      icon: "building",
    });
  }

  if (summary.locationCount > 0) {
    items.push({
      title: `${summary.locationCount}+ locations`,
      subtitle: summary.topLocation
        ? `Active in ${summary.topLocation}`
        : "Mentors nearby and remote",
      icon: "pin",
    });
  }

  if (summary.topTags[0]) {
    items.push({
      title: summary.topTags[0],
      subtitle: "Most requested expertise",
      icon: "spark",
    });
  }

  return items;
}

function TrustIcon({ type }: { type: TrustItem["icon"] }) {
  const common = {
    className: "size-[1.125rem] text-foreground",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "group":
      return (
        <svg {...common}>
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
      );
    case "building":
      return (
        <svg {...common}>
          <path
            d="M4 20h16M6 20V7.5L12 4l6 3.5V20M10 20v-4h4v4M9.5 10h1M13.5 10h1M9.5 13.5h1M13.5 13.5h1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path
            d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.1" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path
            d="M12 3.5 13.6 9l5.4.4-4.2 3.6 1.3 5.2L12 15.6 6.9 18.2l1.3-5.2L4 9.4 9.4 9 12 3.5Z"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function TrustedBy({ summary }: TrustedByProps) {
  const trustItems = buildTrustItems(summary);
  if (trustItems.length === 0) return null;

  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="border-y border-border/70 bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <h2
          id="trusted-by-heading"
          className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase"
        >
          Live from the Mentorle mentor network
        </h2>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-10 lg:justify-between lg:gap-x-4">
          {trustItems.map((item) => (
            <li
              key={item.title}
              className="flex w-full max-w-[16rem] items-start gap-3 min-[480px]:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.75rem)] lg:w-auto lg:max-w-[12.5rem] lg:flex-1"
            >
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-white">
                <TrustIcon type={item.icon} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.9375rem] leading-tight font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[0.8125rem] leading-snug text-muted">
                  {item.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
