import MentorAvatar from "./MentorAvatar";
import { toSpotlightMentor, type Mentor } from "@/lib/mentors";

type MentorSpotlightProps = {
  mentors: Mentor[];
  mentorCount?: number;
};

export default function MentorSpotlight({
  mentors,
  mentorCount,
}: MentorSpotlightProps) {
  const spotlight = mentors.map(toSpotlightMentor);
  const total = mentorCount ?? mentors.length;

  return (
    <section
      aria-labelledby="spotlight-heading"
      className="bg-white"
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
              className="mt-3 font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
            >
              Real mentors who&apos;ve already done it.
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
              Not influencers. Not course sellers. People who&apos;ve built,
              hired, shipped, and navigated the exact path you&apos;re on.
            </p>
          </div>

          <a
            href="https://platform.mentorle.in/signup"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.9375rem] text-muted transition-colors hover:text-foreground"
          >
            Browse all mentors
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {spotlight.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {spotlight.map((mentor) => (
              <li
                key={mentor.id}
                className="flex flex-col rounded-2xl border border-border/70 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <MentorAvatar
                    src={mentor.image}
                    alt={`${mentor.name}, ${mentor.role}`}
                    size={48}
                    className="size-12 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-[1rem] font-semibold text-foreground">
                      {mentor.name}
                    </h3>
                    <p className="truncate text-[0.8125rem] text-muted">
                      {mentor.role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 line-clamp-3 text-[0.9375rem] leading-relaxed text-foreground/80">
                  {mentor.bio}
                </p>

                {mentor.tags.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {mentor.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-flex rounded-full bg-badge px-2.5 py-1 text-[0.75rem] text-muted">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6">
                  <a
                    href="https://platform.mentorle.in/signup"
                    className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-foreground px-4 text-[0.8125rem] font-medium text-white transition-colors hover:bg-neutral-800 sm:flex-none"
                    aria-label={`Book a session with ${mentor.name}`}
                  >
                    Book session
                  </a>
                  <a
                    href="https://platform.mentorle.in/signup"
                    className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-border bg-white px-4 text-[0.8125rem] font-medium text-foreground transition-colors hover:border-neutral-400 hover:bg-neutral-50 sm:flex-none"
                    aria-label={`View profile of ${mentor.name}`}
                  >
                    View profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 rounded-2xl border border-dashed border-border bg-background px-4 py-10 text-center text-sm text-muted">
            Mentor profiles will show here once mentors are approved in Supabase.
          </p>
        )}
      </div>
    </section>
  );
}
