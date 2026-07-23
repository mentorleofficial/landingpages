import Image from "next/image";
import Reveal from "@/components/Reveal";

type Moment = {
  title: string;
  description: string;
  image: string;
};

const topMoments: Moment[] = [
  {
    title: "Live expert sessions",
    description:
      "Monthly conversations with mentors who've shipped, hired, and built — questions welcome, fluff left at the door.",
    image: "/community/event-live-session.png",
  },
  {
    title: "Campus & university partners",
    description:
      "MoUs with CGC and CT University bring structured mentorship onto campus — not another certificate, a real conversation.",
    image: "/community/event-campus.png",
  },
  {
    title: "Community meetups",
    description:
      "Offline moments across Punjab where learners, founders, and mentors meet face to face and leave with next steps.",
    image: "/community/event-meetup.png",
  },
];

const bottomMoments: Moment[] = [
  {
    title: "1:1 mentorship",
    description:
      "Direct sessions with verified mentors — career clarity, startups, interviews, and the decisions that matter.",
    image: "/community/event-mentorship.png",
  },
  {
    title: "Build days & workshops",
    description:
      "Hands-on sessions where members ship something real under mentor guidance — portfolio over promises.",
    image: "/community/event-build-day.png",
  },
  {
    title: "Growing beyond Punjab",
    description:
      "Rooted locally, expanding outward — building mentorship infrastructure for India's next generation.",
    image: "/community/event-growth.png",
  },
];

function MomentCard({ moment }: { moment: Moment }) {
  return (
    <article className="flex h-[17rem] w-[26rem] shrink-0 items-stretch gap-4 rounded-[1.75rem] border border-border/70 bg-white p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:h-[18rem] sm:w-[30rem] sm:gap-5 sm:p-4">
      <div className="relative w-[38%] shrink-0 overflow-hidden rounded-[1.25rem] bg-panel">
        <Image
          src={moment.image}
          alt=""
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center py-2 pr-2 sm:pr-3">
        <span
          className="mb-3 block h-[3px] w-9 rounded-full bg-foreground"
          aria-hidden="true"
        />
        <h3 className="text-[1.125rem] leading-snug font-semibold text-foreground sm:text-[1.25rem]">
          {moment.title}
        </h3>
        <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
          {moment.description}
        </p>
      </div>
    </article>
  );
}

function MarqueeRow({
  moments,
  direction,
}: {
  moments: Moment[];
  direction: "left" | "right";
}) {
  const sequence = [...moments, ...moments, ...moments];
  const trackClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div className="marquee-row overflow-hidden">
      <ul className={`flex w-max gap-4 sm:gap-5 ${trackClass}`}>
        {sequence.map((moment, index) => (
          <li key={`${moment.title}-${index}`}>
            <MomentCard moment={moment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CommunityLife() {
  return (
    <section
      aria-labelledby="life-heading"
      className="relative overflow-hidden border-t border-border/60 bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2
            id="life-heading"
            className="text-center font-display text-[2rem] tracking-tight text-foreground sm:text-[2.5rem] md:text-[2.75rem]"
          >
            Life at <em className="italic">Mentorle</em>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-center text-[1rem] leading-relaxed text-muted">
            Sessions, campuses, meetups, and the moments that make mentorship
            feel real — not another feed of content.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
        <MarqueeRow moments={topMoments} direction="left" />
        <MarqueeRow moments={bottomMoments} direction="right" />
      </div>
    </section>
  );
}
