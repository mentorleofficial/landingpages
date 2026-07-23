import Image from "next/image";
import Reveal from "@/components/Reveal";

const moments = [
  {
    title: "Live sessions",
    image: "/community/event-live-session.png",
  },
  {
    title: "Campus partners",
    image: "/community/event-campus.png",
  },
  {
    title: "Community meetups",
    image: "/community/event-meetup.png",
  },
  {
    title: "1:1 mentorship",
    image: "/community/event-mentorship.png",
  },
] as const;

export default function AboutMoments() {
  return (
    <section
      aria-labelledby="about-moments-heading"
      className="border-t border-border/60 bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <Reveal>
          <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
            What this looks like
          </p>
          <h2
            id="about-moments-heading"
            className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
          >
            Mentorship in the room — not just on a screen.
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {moments.map((moment, index) => (
            <Reveal key={moment.title} delay={index * 80} as="li">
              <figure className="overflow-hidden rounded-2xl border border-border/70 bg-panel">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={moment.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-white px-3.5 py-3 text-[0.875rem] font-medium text-foreground sm:px-4">
                  {moment.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
