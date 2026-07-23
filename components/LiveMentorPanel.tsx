"use client";

import { useMemo, useState } from "react";
import { filterMentors, type Mentor } from "@/lib/mentors";
import MentorCard from "./MentorCard";

type LiveMentorPanelProps = {
  mentors: Mentor[];
};

export default function LiveMentorPanel({ mentors }: LiveMentorPanelProps) {
  const [query, setQuery] = useState("");

  const isSearching = query.trim().length > 0;

  const visibleMentors = useMemo(() => {
    if (!isSearching) {
      return mentors;
    }
    return filterMentors(query, null, mentors);
  }, [query, isSearching, mentors]);

  return (
    <div className="bg-grid-dense flex h-full min-w-0 flex-col rounded-[1.25rem] bg-panel/90 p-4 sm:rounded-[1.75rem] sm:p-6 lg:p-7">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <p className="text-[0.6875rem] font-medium tracking-[0.12em] text-muted uppercase">
          Live Mentor Connections
        </p>
        {mentors.length > 0 ? (
          <p className="text-[0.75rem] text-muted" aria-live="polite">
            {isSearching
              ? `${visibleMentors.length} of ${mentors.length}`
              : `${mentors.length} mentors`}
          </p>
        ) : null}
      </div>

      <div className="relative mb-3.5">
        <label htmlFor="mentor-search" className="sr-only">
          Search mentors by name, industry, or expertise
        </label>
        <svg
          className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          id="mentor-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, industry, or expertise..."
          className="h-11 w-full rounded-full border border-border/80 bg-white py-2 pr-4 pl-11 text-[0.875rem] text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition-[box-shadow,border-color] placeholder:text-muted/80 focus:border-neutral-400 focus:shadow-[0_2px_8px_rgba(0,0,0,0.06)] sm:h-12 sm:text-[0.9375rem]"
        />
      </div>

      {visibleMentors.length > 0 ? (
        <ul
          className="mb-6 flex max-h-[22rem] flex-col gap-2.5 overflow-y-auto pr-1 sm:max-h-[26rem]"
          aria-live="polite"
        >
          {visibleMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </ul>
      ) : (
        <p
          className="mb-6 rounded-2xl border border-dashed border-border bg-white/60 px-4 py-8 text-center text-sm text-muted"
          role="status"
        >
          {mentors.length === 0
            ? "Mentors will appear here once available."
            : "No mentors match your search. Try another keyword."}
        </p>
      )}

      <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border/70 pt-5">
        <div>
          <p className="font-display text-[1.75rem] leading-none tracking-tight text-foreground sm:text-[1.875rem]">
            3+ yrs
          </p>
          <p className="mt-1.5 text-[0.8125rem] leading-snug text-muted">
            Building mentorship infrastructure
          </p>
        </div>
        <div className="border-l border-border/70 pl-4 sm:pl-5">
          <p className="font-display text-[1.75rem] leading-none tracking-tight text-foreground sm:text-[1.875rem]">
            Punjab
          </p>
          <p className="mt-1.5 text-[0.8125rem] leading-snug text-muted">
            Growing beyond the region
          </p>
        </div>
      </div>
    </div>
  );
}
