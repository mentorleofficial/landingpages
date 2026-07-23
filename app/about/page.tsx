import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TrustedBy from "@/components/TrustedBy";
import AboutMoments from "@/components/about/AboutMoments";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "About Us",
  "Mentorle is building mentorship infrastructure for India's next generation — started in Punjab, growing with purpose.",
  "/about",
);

const values = [
  {
    title: "Community First",
    description:
      "We're not an edtech company. We're a community that happens to use technology to connect people.",
  },
  {
    title: "Practical Over Theoretical",
    description:
      "Every session, every resource, every conversation should move someone closer to their goal.",
  },
  {
    title: "Accessible by Design",
    description:
      "Mentorship shouldn't be a luxury. Free members get real value. Plus members get more.",
  },
  {
    title: "Built With Intention",
    description:
      "3+ years of careful, deliberate building. We grow when it makes sense, not just because we can.",
  },
] as const;

const timeline = [
  {
    year: "2023",
    description:
      "Mentorle founded with a simple idea: connect learners with people who've done it.",
  },
  {
    year: "2024",
    description:
      "Signed MoUs with CGC and CT University. First 50 mentor sessions completed.",
  },
  {
    year: "2025",
    description:
      "Launched Mentorle Plus. 500+ community members. Partnership with EduBridge India.",
  },
  {
    year: "2026",
    description:
      "Expanding beyond Punjab. Building the infrastructure for India's mentorship ecosystem.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="page-enter flex flex-1 flex-col">
        {/* Hero */}
        <section
          aria-labelledby="about-hero-heading"
          className="relative overflow-hidden"
        >
          <div className="mx-auto max-w-[800px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <Reveal>
              <p className="font-display text-[2.75rem] leading-none tracking-tight text-foreground sm:text-[3.5rem] md:text-[4rem]">
                Mentorle
              </p>
              <h1
                id="about-hero-heading"
                className="mt-5 font-display text-[1.75rem] leading-[1.2] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
              >
                Mentorship infrastructure for India&apos;s{" "}
                <em className="italic">next generation</em>.
              </h1>
              <p className="mx-auto mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted sm:text-[1.125rem]">
                People don&apos;t need more content — they need the right
                conversation. We connect students, founders, and learners with
                verified mentors who&apos;ve already walked the path.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://platform.mentorle.in/signup"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Join Free
                </a>
                <Link
                  href="/community"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-white px-7 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
                >
                  Explore Community
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Our story */}
        <section
          aria-labelledby="story-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[960px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:gap-14">
              <Reveal>
                <div className="text-center lg:sticky lg:top-28 lg:text-left">
                  <p className="font-display text-[4.5rem] leading-none tracking-tight text-foreground sm:text-[5.5rem]">
                    3+
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-snug text-muted">
                    years building from Punjab — outward with purpose.
                  </p>
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                    Our story
                  </p>
                  <h2
                    id="story-heading"
                    className="mt-3 font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
                  >
                    Started in Punjab. Growing with purpose.
                  </h2>
                </Reveal>
                <div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
                  <Reveal delay={80}>
                    <p>
                      Mentorle started with a simple observation: talented
                      people everywhere want to grow, but they don&apos;t always
                      know someone who can guide them. Colleges produce
                      graduates. The internet produces content. But who produces
                      the conversation that actually helps someone decide,
                      build, or pivot?
                    </p>
                  </Reveal>
                  <Reveal delay={140}>
                    <p>
                      We started small — a few mentors, a few sessions, a lot of
                      listening. Over three years, we&apos;ve grown into a
                      community of mentors, learners, and ecosystem partners.
                      We&apos;ve signed MoUs with institutions like CGC and CT
                      University. We&apos;ve partnered with EduBridge India.
                      We&apos;ve watched members go from &ldquo;I don&apos;t
                      know what to do&rdquo; to &ldquo;I just landed the
                      role.&rdquo;
                    </p>
                  </Reveal>
                  <Reveal delay={200}>
                    <p>
                      Today, Mentorle is a two-tier platform: Free for anyone
                      who wants to explore, and Plus for those ready to go
                      deeper. The mission is the same — make mentorship feel
                      accessible, practical, and worth showing up for.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / belief */}
        <section
          aria-labelledby="mission-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[820px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <Reveal variant="scale">
              <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                Our mission
              </p>
              <h2
                id="mission-heading"
                className="mt-5 font-display text-[2rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem] md:text-[2.875rem]"
              >
                Make the right mentorship available to everyone, not just those
                who can{" "}
                <em className="italic">afford it</em>.
              </h2>
              <p className="mx-auto mt-6 max-w-[36rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
                People don&apos;t need more content. They need the right
                conversation — with someone who&apos;s been where they are, and
                can help them take the next step.
              </p>
            </Reveal>
          </div>
        </section>

        {/* How we work */}
        <section
          aria-labelledby="how-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[960px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <Reveal>
              <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                How we work
              </p>
              <h2
                id="how-heading"
                className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
              >
                Free to explore. Plus to go deeper.
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-0 border-y border-border/70 sm:grid-cols-2 sm:divide-x sm:divide-border/70">
              <Reveal delay={60}>
                <div className="border-b border-border/70 px-1 py-8 sm:border-b-0 sm:pr-8 sm:pl-0 lg:pr-10">
                  <h3 className="font-display text-[1.375rem] tracking-tight text-foreground">
                    Free
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">
                    Join the community, discover mentors, and start real
                    conversations — no credit card, no commitment.
                  </p>
                  <a
                    href="https://platform.mentorle.in/signup"
                    className="mt-5 inline-flex text-[0.9375rem] font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Join Free →
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="px-1 py-8 sm:pr-0 sm:pl-8 lg:pl-10">
                  <h3 className="font-display text-[1.375rem] tracking-tight text-foreground">
                    Mentorle Plus
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">
                    Deeper access for people serious about moving faster —
                    structured sessions, priority support, and premium
                    resources.
                  </p>
                  <Link
                    href="/plus"
                    className="mt-5 inline-flex text-[0.9375rem] font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Explore Plus →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          aria-labelledby="values-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                What we stand for
              </p>
              <h2
                id="values-heading"
                className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
              >
                Principles we build by
              </h2>
            </Reveal>

            <ol className="mt-10 divide-y divide-border/70 border-y border-border/70">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 70} as="li">
                  <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5 sm:py-7">
                    <span className="font-display text-[1.125rem] text-muted tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.0625rem] font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Timeline */}
        <section
          aria-labelledby="timeline-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                Where we&apos;ve been
              </p>
              <h2
                id="timeline-heading"
                className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
              >
                A few years of deliberate building
              </h2>
            </Reveal>

            <ol className="relative mt-12 space-y-0 before:absolute before:top-2 before:bottom-2 before:left-[0.4rem] before:w-px before:bg-border sm:before:left-[0.45rem]">
              {timeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 90} as="li">
                  <div className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-5 py-5 sm:grid-cols-[1.25rem_5rem_minmax(0,1fr)] sm:gap-6 sm:py-6">
                    <span
                      className="relative z-10 mt-1.5 size-3.5 rounded-full border-2 border-foreground bg-white"
                      aria-hidden="true"
                    />
                    <p className="col-start-2 font-display text-[1.25rem] leading-none tracking-tight text-foreground sm:col-start-2">
                      {item.year}
                    </p>
                    <p className="col-start-2 text-[0.975rem] leading-relaxed text-muted sm:col-start-3 sm:row-start-1">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <TrustedBy />

        <AboutMoments />

        {/* CTA */}
        <section
          aria-labelledby="about-cta-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <Reveal>
              <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
                Be part of it
              </p>
              <h2
                id="about-cta-heading"
                className="mt-4 font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.35rem] md:text-[2.75rem]"
              >
                Want to be part of what we&apos;re{" "}
                <em className="italic">building</em>?
              </h2>
              <p className="mx-auto mt-5 max-w-[32rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
                Whether you&apos;re looking for guidance or ready to give it —
                there&apos;s a place for you here.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://platform.mentorle.in/signup"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="3.25" />
                    <path
                      d="M5.5 19.5c1.2-3.2 3.5-4.75 6.5-4.75s5.3 1.55 6.5 4.75"
                      strokeLinecap="round"
                    />
                  </svg>
                  Join Free
                </a>
                <Link
                  href="/become-mentor"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-white px-6 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
                >
                  Become a Mentor
                </Link>
              </div>

              <p className="mt-5 text-[0.8125rem] text-muted">
                No credit card. No commitment. Just a conversation.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
