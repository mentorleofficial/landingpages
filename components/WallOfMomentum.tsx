import MentorAvatar from "./MentorAvatar";
import Reveal from "./Reveal";
import {
  buildMentorTestimonials,
  type Mentor,
} from "@/lib/mentors";

type WallOfMomentumProps = {
  mentors: Mentor[];
};

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Featured mentor">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="size-3.5 text-foreground/80"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 1.5l1.8 3.7 4.1.6-3 2.9.7 4.1L8 11.3l-3.6 1.9.7-4.1-3-2.9 4.1-.6L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function WallOfMomentum({ mentors }: WallOfMomentumProps) {
  const testimonials = buildMentorTestimonials(mentors, 6);

  return (
    <section
      aria-labelledby="momentum-heading"
      className="border-t border-border/60 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="text-center">
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
            Wall of momentum
          </p>
          <h2
            id="momentum-heading"
            className="mx-auto mt-3 max-w-[28rem] font-display text-[1.875rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-[2.5rem]"
          >
            Real mentors. Real experience. Real direction.
          </h2>
        </Reveal>

        {testimonials.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.id} delay={index * 80} as="li">
                <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-background p-5 sm:p-6">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-foreground/85">
                    {item.quote}
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <MentorAvatar
                      src={item.image}
                      alt={item.name}
                      size={40}
                      className="size-10 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-[0.9375rem] font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="truncate text-[0.8125rem] text-muted">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted">
            Mentor stories will appear here as profiles are approved.
          </p>
        )}
      </div>
    </section>
  );
}
