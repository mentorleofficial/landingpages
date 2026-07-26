import Reveal from "./Reveal";
import WallOfMomentumCarousel from "./WallOfMomentumCarousel";
import {
  buildMentorTestimonials,
  type Mentor,
} from "@/lib/mentors";

type WallOfMomentumProps = {
  mentors: Mentor[];
};

export default function WallOfMomentum({ mentors }: WallOfMomentumProps) {
  const testimonials = buildMentorTestimonials(mentors, 8);

  return (
    <section
      aria-labelledby="momentum-heading"
      className="border-t border-border/60 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
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
          <WallOfMomentumCarousel testimonials={testimonials} />
        ) : (
          <p className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted">
            Mentor stories will appear here as profiles are approved.
          </p>
        )}
      </div>
    </section>
  );
}
