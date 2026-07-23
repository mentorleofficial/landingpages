import type { Metadata } from "next";
import Header from "@/components/Header";
import BecomeMentorFAQ from "@/components/become-mentor/BecomeMentorFAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Become a Mentor",
  description:
    "Share your knowledge, inspire the next generation, and grow your leadership skills. Apply to become a Mentorle mentor.",
  alternates: { canonical: "/become-mentor" },
  openGraph: {
    title: "Become a Mentor | Mentorle",
    description:
      "Make a difference — become a Mentorle mentor and help students achieve their academic and career goals.",
    url: "/become-mentor",
  },
};

const reasons = [
  {
    title: "Impact Lives",
    description: "Help students achieve their academic and career goals.",
    icon: "impact",
  },
  {
    title: "Professional Growth",
    description: "Develop coaching and communication skills.",
    icon: "growth",
  },
  {
    title: "Community Building",
    description:
      "Connect with like-minded individuals passionate about education.",
    icon: "community",
  },
] as const;

const steps = [
  {
    step: "Step 1",
    title: "Fill out the application form.",
  },
  {
    step: "Step 2",
    title: "Attend a brief orientation session.",
  },
  {
    step: "Step 3",
    title: "Get matched with students and start mentoring!",
  },
] as const;

function ReasonIcon({ type }: { type: (typeof reasons)[number]["icon"] }) {
  const props = {
    className: "size-5 text-white",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  if (type === "impact") {
    return (
      <svg {...props}>
        <path
          d="M12 19.5s-6.5-4.1-6.5-9A3.8 3.8 0 0 1 12 7.2 3.8 3.8 0 0 1 18.5 10.5c0 4.9-6.5 9-6.5 9Z"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "growth") {
    return (
      <svg {...props}>
        <path d="M4 16.5 9.5 11l3.5 3.5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <circle cx="9" cy="8.5" r="2.5" />
      <circle cx="16" cy="9.5" r="2" />
      <path d="M3.5 18.5c.9-2.6 2.7-4 5.5-4s4.6 1.4 5.5 4" strokeLinecap="round" />
      <path d="M13.5 14.8c1.3-.4 2.7-.3 4.2.7 1.2.8 2 2 2.3 3" strokeLinecap="round" />
    </svg>
  );
}

export default function BecomeMentorPage() {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section
          aria-labelledby="become-hero-heading"
          className="relative overflow-hidden"
        >
          <div className="mx-auto max-w-[800px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
              Mentors
            </p>
            <h1
              id="become-hero-heading"
              className="mt-4 font-display text-[2.25rem] leading-[1.12] tracking-tight text-foreground sm:text-[3rem] md:text-[3.25rem]"
            >
              Make a Difference – Become a Mentor
            </h1>
            <p className="mx-auto mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted sm:text-[1.125rem]">
              Share your knowledge, inspire the next generation, and grow your
              leadership skills.
            </p>
            <a
              href="https://platform.mentorle.in/become-a-mentor"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Apply Now
            </a>
          </div>
        </section>

        {/* Why Be a Mentor */}
        <section
          aria-labelledby="why-mentor-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <h2
              id="why-mentor-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Why Be a Mentor?
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {reasons.map((reason) => (
                <li
                  key={reason.title}
                  className="rounded-2xl border border-border/70 bg-background p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-foreground">
                    <ReasonIcon type={reason.icon} />
                  </span>
                  <h3 className="mt-4 text-[1.0625rem] font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Eligibility */}
        <section
          aria-labelledby="eligibility-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20">
            <h2
              id="eligibility-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Eligibility Criteria
            </h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white p-5">
                <span
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <p className="text-[0.9875rem] leading-relaxed text-foreground/85">
                  Minimum 2 years of professional experience or advanced degree
                  holders.
                </p>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white p-5">
                <span
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <p className="text-[0.9875rem] leading-relaxed text-foreground/85">
                  Passion for mentoring and guiding young minds.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Application Process */}
        <section
          aria-labelledby="process-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <h2
              id="process-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Application Process
            </h2>
            <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {steps.map((item, index) => (
                <li
                  key={item.step}
                  className="relative rounded-2xl border border-border/70 bg-background p-6"
                >
                  <p className="font-display text-[2rem] leading-none text-muted/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-[0.8125rem] font-semibold tracking-[0.08em] text-muted uppercase">
                    {item.step}
                  </h3>
                  <p className="mt-2 text-[1rem] font-medium leading-snug text-foreground">
                    {item.title}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <BecomeMentorFAQ />

        {/* Apply + final CTA */}
        <section
          id="apply"
          aria-labelledby="apply-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <h2
              id="apply-heading"
              className="font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Ready to Make an Impact?
            </h2>
            <p className="mx-auto mt-4 max-w-[30rem] text-[1rem] leading-relaxed text-muted">
              Join our community of mentors and help shape the future of design.
            </p>
            <a
              href="https://platform.mentorle.in/become-a-mentor"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Apply to Be a Mentor
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
