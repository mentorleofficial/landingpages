import type { Mentor } from "@/lib/mentors";
import MentorAvatar from "./MentorAvatar";

type MentorCardProps = {
  mentor: Mentor;
};

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-3.5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] sm:gap-3.5 sm:px-4 sm:py-3.5">
      <div className="relative shrink-0">
        <MentorAvatar
          src={mentor.image}
          alt={`${mentor.name}, ${mentor.role}`}
          size={44}
          className="size-11 rounded-full object-cover"
        />
        <span
          className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-white bg-online"
          aria-hidden="true"
        />
        <span className="sr-only">Online</span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[0.9375rem] font-semibold leading-tight text-foreground">
          {mentor.name}
        </h3>
        <p className="truncate text-[0.8125rem] leading-snug text-muted">
          {mentor.role}
        </p>
        <p className="truncate text-[0.75rem] leading-snug text-muted/90">
          {mentor.stat}
        </p>
      </div>

      <a
        href="https://platform.mentorle.in/signup"
        aria-label={`Book a session with ${mentor.name}`}
        className="shrink-0 rounded-full border border-border bg-white px-3.5 py-1.5 text-[0.8125rem] font-medium text-foreground transition-colors hover:border-neutral-400 hover:bg-neutral-50"
      >
        Book
      </a>
    </li>
  );
}
