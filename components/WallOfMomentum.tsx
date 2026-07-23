import MentorAvatar from "./MentorAvatar";
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
          className="size-3.5 text-[#F5C84C]"
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
      className="bg-[#1a2332] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-white/55 uppercase">
            Wall of momentum
          </p>
          <h2
            id="momentum-heading"
            className="mx-auto mt-3 max-w-[28rem] font-display text-[1.875rem] leading-[1.15] tracking-tight sm:text-[2.25rem] md:text-[2.5rem]"
          >
            Real mentors. Real experience. Real direction.
          </h2>
        </div>

        {testimonials.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.id}
                className="flex flex-col rounded-2xl bg-[#242e3f] p-5 sm:p-6"
              >
                <Stars />
                <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-white/90">
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
                    <p className="truncate text-[0.9375rem] font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="truncate text-[0.8125rem] text-white/55">
                      {item.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-white/20 px-4 py-10 text-center text-sm text-white/60">
            Mentor stories will appear here as profiles are approved.
          </p>
        )}
      </div>
    </section>
  );
}
