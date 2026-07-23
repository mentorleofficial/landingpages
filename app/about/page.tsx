import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "About Mentorle",
  "We're building mentorship infrastructure for India's next generation — connecting students, founders, and learners with verified mentors.",
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

const partners = [
  {
    title: "EduBridge India",
    subtitle: "Trusted partner",
  },
  {
    title: "CGC",
    subtitle: "MoU partnership",
  },
  {
    title: "CT University",
    subtitle: "MoU partnership",
  },
  {
    title: "Punjab & Beyond",
    subtitle: "Growing outward",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section
          aria-labelledby="about-hero-heading"
          className="relative overflow-hidden"
        >
          <div className="mx-auto max-w-[800px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
              About Mentorle
            </p>
            <h1
              id="about-hero-heading"
              className="mt-4 font-display text-[2.25rem] leading-[1.12] tracking-tight text-foreground sm:text-[3rem] md:text-[3.25rem]"
            >
              We&apos;re building mentorship infrastructure for India&apos;s
              next generation.
            </h1>
            <p className="mx-auto mt-5 max-w-[36rem] text-[1.0625rem] leading-relaxed text-muted sm:text-[1.125rem]">
              Mentorle exists because people don&apos;t need more content —
              they need the right conversation. We connect students, founders,
              and learners with verified mentors who&apos;ve already walked the
              path.
            </p>
          </div>
        </section>

        {/* Our story */}
        <section
          aria-labelledby="story-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
              Our story
            </p>
            <h2
              id="story-heading"
              className="mt-3 font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Started in Punjab. Growing with purpose.
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
              <p>
                Mentorle started in Punjab with a simple observation: talented
                people everywhere want to grow, but they don&apos;t always know
                someone who can guide them. Colleges produce graduates. The
                internet produces content. But who produces the conversation
                that actually helps someone decide, build, or pivot?
              </p>
              <p>
                We started small — a few mentors, a few sessions, a lot of
                listening. Over three years, we&apos;ve grown into a community of
                mentors, learners, and ecosystem partners across Punjab and
                beyond. We&apos;ve signed MoUs with institutions like CGC and CT
                University. We&apos;ve partnered with EduBridge India. We&apos;ve
                watched members go from &ldquo;I don&apos;t know what to
                do&rdquo; to &ldquo;I just landed the role.&rdquo;
              </p>
              <p>
                Today, Mentorle is a two-tier platform: Free for anyone who
                wants to explore, and Plus for those ready to go deeper. But the
                mission is the same — make mentorship feel accessible,
                practical, and worth showing up for.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section
          aria-labelledby="mission-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-20">
            <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
              Our mission
            </p>
            <h2
              id="mission-heading"
              className="mt-4 font-display text-[1.875rem] leading-[1.2] tracking-tight text-foreground sm:text-[2.35rem]"
            >
              Make the right mentorship available to everyone, not just those
              who can afford it.
            </h2>
          </div>
        </section>

        {/* Values */}
        <section
          aria-labelledby="values-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <h2
              id="values-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              What we stand for
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-border/70 bg-background p-6"
                >
                  <h3 className="text-[1.0625rem] font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Timeline */}
        <section
          aria-labelledby="timeline-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <h2
              id="timeline-heading"
              className="text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Where we&apos;ve been
            </h2>
            <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {timeline.map((item) => (
                <li
                  key={item.year}
                  className="rounded-2xl border border-border/70 bg-white p-6"
                >
                  <p className="font-display text-[2rem] leading-none tracking-tight text-foreground">
                    {item.year}
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Partners */}
        <section
          aria-labelledby="partners-heading"
          className="border-t border-border/60 bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <h2
              id="partners-heading"
              className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase"
            >
              Trusted by institutions across Punjab
            </h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-12 lg:justify-between">
              {partners.map((partner) => (
                <li
                  key={partner.title}
                  className="w-full max-w-[14rem] text-center min-[480px]:w-auto"
                >
                  <p className="text-[1rem] font-semibold text-foreground">
                    {partner.title}
                  </p>
                  <p className="mt-1 text-[0.8125rem] text-muted">
                    {partner.subtitle}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="about-cta-heading"
          className="border-t border-border/60 bg-background"
        >
          <div className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <h2
              id="about-cta-heading"
              className="font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
            >
              Want to be part of what we&apos;re building?
            </h2>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="https://platform.mentorle.in/signup"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Join Mentorle Free
              </a>
              <Link
                href="/become-mentor"
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-white px-7 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
              >
                Become a Mentor
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
