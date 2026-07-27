import type { Mentor } from "@/lib/mentors";
import MentorAvatar from "./MentorAvatar";

type MentorCardProps = {
  mentor: Mentor;
};

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <li className="hover-lift flex items-center gap-3 rounded-[1.15rem] border border-border/70 bg-white px-3.5 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:gap-3.5 sm:px-4 sm:py-4">
      <div className="relative shrink-0">
        <MentorAvatar
          src={mentor.image}
          alt={`${mentor.name}, ${mentor.role}`}
          size={48}
          className="size-12 rounded-full object-cover"
        />
        <span
          className="soft-pulse absolute right-0 bottom-0 size-3 rounded-full border-2 border-white bg-online"
          aria-hidden="true"
        />
        <span className="sr-only">Online</span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[0.975rem] font-semibold leading-tight text-foreground">
          {mentor.name}
        </h3>
        <p className="mt-0.5 truncate text-[0.8125rem] leading-snug text-muted">
          {mentor.role}
        </p>
        <p className="mt-0.5 truncate text-[0.75rem] leading-snug text-muted/85">
          {mentor.stat}
        </p>
      </div>

      <a
        href="https://platform.mentorle.in/signup"
        aria-label={`Book a session with ${mentor.name}`}
        className="shrink-0 rounded-full border border-border bg-white px-4 py-2 text-[0.8125rem] font-medium text-muted transition-colors hover:border-neutral-400 hover:bg-neutral-50 hover:text-foreground"
      >
        Book
      </a>
    </li>
  );
}
