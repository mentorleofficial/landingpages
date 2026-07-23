type TrustItem = {
  title: string;
  subtitle: string;
  icon: "clock" | "building" | "grad" | "pin";
};

const trustItems: TrustItem[] = [
  {
    title: "3+ Years",
    subtitle: "Built with intention",
    icon: "clock",
  },
  {
    title: "EduBridge India",
    subtitle: "Trusted partner",
    icon: "building",
  },
  {
    title: "CGC",
    subtitle: "MoU partnership",
    icon: "grad",
  },
  {
    title: "CT University",
    subtitle: "MoU partnership",
    icon: "grad",
  },
  {
    title: "Punjab & Beyond",
    subtitle: "Built locally, growing outward",
    icon: "pin",
  },
];

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
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4.5l3 1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    case "grad":
      return (
        <svg {...common}>
          <path
            d="M3 10.5 12 5l9 5.5-9 5.5-9-5.5Z"
            strokeLinejoin="round"
          />
          <path
            d="M7 12.8v3.7c0 .8 2.2 2 5 2s5-1.2 5-2v-3.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M21 10.5v5" strokeLinecap="round" />
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
  }
}

export default function TrustedBy() {
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
          Trusted by institutions, founders, and learners
        </h2>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-10 lg:justify-between lg:gap-x-4">
          {trustItems.map((item) => (
            <li
              key={item.title}
              className="flex w-full max-w-[16rem] items-start gap-3 min-[480px]:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.75rem)] lg:w-auto lg:max-w-[12.5rem] lg:flex-1"
            >
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[0.7rem] border border-border bg-white">
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
