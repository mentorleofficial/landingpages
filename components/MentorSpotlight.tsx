import { toSpotlightMentor, type Mentor } from "@/lib/mentors";

type MentorSpotlightProps = {
  mentors: Mentor[];
  mentorCount?: number;
};

const PLATFORM = "https://platform.mentorle.in/signup";
const MAX_CARDS = 6;

export default function MentorSpotlight({
  mentors,
  mentorCount,
}: MentorSpotlightProps) {
  const spotlight = mentors.map(toSpotlightMentor).slice(0, MAX_CARDS);
  const total = mentorCount ?? mentors.length;

  return (
    <section
      aria-labelledby="spotlight-heading"
      className="border-t border-border/60 bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-[40rem]">
            <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
              Mentor spotlight
              {total > 0 ? ` · ${total} live` : null}
            </p>
            <h2
              id="spotlight-heading"
              className="mt-3 font-display text-[2.25rem] leading-[1.12] tracking-tight text-foreground sm:text-[2.75rem] md:text-[3.15rem]"
            >
              Real mentors <br />who&apos;ve already done it.
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
              Not influencers. Not course sellers. People who&apos;ve built,
              hired, shipped, and navigated the exact path you&apos;re on.
            </p>
          </div>

          <a
            href={PLATFORM}
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.9375rem] text-muted transition-colors hover:text-foreground"
          >
            Browse all mentors
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {spotlight.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {spotlight.map((mentor) => {
              const visibleTags = mentor.tags.slice(0, 3);
              const extraTags = mentor.tags.length - visibleTags.length;
              const experience =
                mentor.experienceLabel ??
                (mentor.stat.trim() ? mentor.stat : null);

              return (
                <li key={mentor.id}>
                  <article className="group relative aspect-[3/4] overflow-hidden rounded-[1.35rem] bg-neutral-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mentor.image}
                      alt=""
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"
                      aria-hidden="true"
                    />

                    <p className="absolute top-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[0.6875rem] font-medium text-foreground backdrop-blur-sm sm:top-4 sm:left-4">
                      Free sessions available
                    </p>

                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 sm:p-5">
                      <div>
                        <h3 className="truncate text-[1.25rem] font-semibold tracking-tight text-white sm:text-[1.375rem]">
                          {mentor.name}
                        </h3>
                        <p className="mt-1 truncate text-[0.875rem] text-white/80">
                          {mentor.role}
                        </p>
                      </div>

                      {visibleTags.length > 0 ? (
                        <ul className="flex flex-wrap gap-1.5">
                          {visibleTags.map((tag) => (
                            <li key={tag}>
                              <span className="inline-flex max-w-[9rem] truncate rounded-full bg-white/15 px-2.5 py-1 text-[0.6875rem] text-white backdrop-blur-sm">
                                {tag}
                              </span>
                            </li>
                          ))}
                          {extraTags > 0 ? (
                            <li>
                              <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[0.6875rem] text-white backdrop-blur-sm">
                                +{extraTags}
                              </span>
                            </li>
                          ) : null}
                        </ul>
                      ) : null}

                      <div className="mt-1 flex items-center gap-3">
                        {experience ? (
                          <p className="flex min-w-0 flex-1 items-center gap-2 text-[0.8125rem] font-medium text-white">
                            <span
                              className="inline-flex h-3.5 w-2.5 shrink-0 items-end gap-0.5"
                              aria-hidden="true"
                            >
                              <span className="h-2 w-[3px] rounded-full bg-white/80" />
                              <span className="h-3.5 w-[3px] rounded-full bg-white" />
                            </span>
                            <span className="truncate">{experience}</span>
                          </p>
                        ) : (
                          <span className="flex-1" />
                        )}

                        <a
                          href={PLATFORM}
                          aria-label={`View profile of ${mentor.name}`}
                          className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-white px-4 text-[0.8125rem] font-semibold text-foreground transition-colors hover:bg-neutral-100"
                        >
                          Book a Session
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-10 rounded-2xl border border-dashed border-border bg-background px-4 py-10 text-center text-sm text-muted">
            Mentor profiles will show here once mentors are approved in
            Supabase.
          </p>
        )}
      </div>
    </section>
  );
}
