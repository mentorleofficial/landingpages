import Image from "next/image";

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
    <article className="flex h-[17rem] w-[26rem] shrink-0 items-stretch gap-4 rounded-[1.75rem] bg-[#2a241f] p-3.5 ring-1 ring-white/8 sm:h-[18rem] sm:w-[30rem] sm:gap-5 sm:p-4">
      <div className="relative w-[38%] shrink-0 overflow-hidden rounded-[1.25rem]">
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
          className="mb-3 block h-[3px] w-9 rounded-full bg-[#F5C84C]"
          aria-hidden="true"
        />
        <h3 className="text-[1.125rem] leading-snug font-semibold text-white sm:text-[1.25rem]">
          {moment.title}
        </h3>
        <p className="mt-2.5 text-[0.875rem] leading-relaxed text-white/65 sm:text-[0.9375rem]">
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
      className="relative overflow-hidden bg-[#1a2332] py-16 text-white sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 30%, rgba(180,120,80,0.35), transparent 60%), radial-gradient(ellipse 40% 35% at 80% 70%, rgba(90,70,140,0.25), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <h2
          id="life-heading"
          className="text-center font-display text-[2rem] tracking-tight sm:text-[2.5rem] md:text-[2.75rem]"
        >
          Life at <em className="italic">Mentorle</em>
        </h2>
        <p className="mx-auto mt-3 max-w-[32rem] text-center text-[1rem] leading-relaxed text-white/60">
          Sessions, campuses, meetups, and the moments that make mentorship feel
          real — not another feed of content.
        </p>
      </div>

      <div className="relative mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
        <MarqueeRow moments={topMoments} direction="left" />
        <MarqueeRow moments={bottomMoments} direction="right" />
      </div>
    </section>
  );
}
