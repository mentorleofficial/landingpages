import Reveal from "./Reveal";

const tags = [
  "Career clarity",
  "Startup guidance",
  "Mock interviews",
  "Resume reviews",
  "Live sessions",
  "Community access",
] as const;

export default function WhyMentorleExists() {
  return (
    <section
      aria-labelledby="why-mentorle-heading"
      className="border-t border-border/60 bg-white"
    >
      <div className="mx-auto max-w-[820px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        <Reveal>
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
            Why Mentorle exists
          </p>

          <h2
            id="why-mentorle-heading"
            className="mt-5 font-display text-[2rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem] md:text-[2.875rem]"
          >
            People don&apos;t need more content.
            <br className="hidden sm:block" />{" "}
            They need the right{" "}
            <em className="italic">conversation</em>.
          </h2>

          <p className="mx-auto mt-6 max-w-[38rem] text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
            Whether someone is exploring careers, building something, switching
            paths, or trying to learn faster — they need the right mentor, the
            right push, and the right moment. Mentorle exists to make mentorship
            feel accessible, practical, and worth showing up for.
          </p>
        </Reveal>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-12 sm:gap-3">
          {tags.map((label, index) => (
            <Reveal key={label} delay={60 + index * 50} as="li" variant="scale">
              <span className="inline-flex rounded-full border border-border/80 bg-white px-3.5 py-2 text-[0.8125rem] text-foreground sm:px-4 sm:text-[0.875rem]">
                {label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
