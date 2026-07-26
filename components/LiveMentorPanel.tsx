"use client";

import { useMemo, useState } from "react";
import { filterMentors, type Mentor } from "@/lib/mentors";
import MentorCard from "./MentorCard";

const FILTER_TAGS = [
  "Career",
  "Founders",
  "Interviews",
  "Mentorship",
  "Product",
  "Resume Reviews",
  "Startups",
] as const;

type LiveMentorPanelProps = {
  mentors: Mentor[];
};

export default function LiveMentorPanel({ mentors }: LiveMentorPanelProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const visibleMentors = useMemo(() => {
    let result = mentors;

    if (activeTag) {
      const tag = activeTag.toLowerCase();
      result = result.filter(
        (mentor) =>
          mentor.searchText.includes(tag) ||
          mentor.categories.some((category) =>
            category.toLowerCase().includes(tag),
          ) ||
          mentor.expertise.some((item) => item.toLowerCase().includes(tag)) ||
          mentor.role.toLowerCase().includes(tag) ||
          mentor.bio.toLowerCase().includes(tag),
      );
    }

    if (query.trim()) {
      result = filterMentors(query, null, result);
    }

    return result;
  }, [mentors, query, activeTag]);

  return (
    <div className="flex h-full min-w-0 flex-col ">
      <p className="text-[0.6875rem] font-medium tracking-[0.12em] text-muted uppercase">
        Live Mentor Connections
      </p>

      <div className="relative mt-4">
        <label htmlFor="mentor-search" className="sr-only">
          Search mentors by industry or expertise
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
          placeholder="Search by industry or expertise..."
          className="h-12 w-full rounded-full border border-border/80 bg-background py-2 pr-4 pl-11 text-[0.875rem] text-foreground outline-none transition-[box-shadow,border-color] placeholder:text-muted/80 focus:border-neutral-400 focus:bg-white focus:shadow-[0_2px_8px_rgba(0,0,0,0.05)] sm:text-[0.9375rem]"
        />
      </div>

      <ul className="mt-3.5 flex flex-wrap gap-2" aria-label="Filter by topic">
        {FILTER_TAGS.map((tag) => {
          const selected = activeTag === tag;
          return (
            <li key={tag}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveTag(selected ? null : tag)}
                className={`inline-flex h-8 items-center rounded-full border px-3 text-[0.75rem] font-medium transition-colors sm:text-[0.8125rem] ${
                  selected
                    ? "border-foreground bg-foreground text-white"
                    : "border-border bg-white text-foreground hover:border-neutral-400"
                }`}
              >
                {tag}
              </button>
            </li>
          );
        })}
      </ul>

      {visibleMentors.length > 0 ? (
        <ul
          className="mt-4 flex max-h-[22rem] flex-col gap-2.5 overflow-y-auto pr-0.5 sm:max-h-[26rem] sm:gap-3"
          aria-live="polite"
        >
          {visibleMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </ul>
      ) : (
        <p
          className="mt-4 rounded-2xl border border-dashed border-border bg-background px-4 py-10 text-center text-sm text-muted"
          role="status"
        >
          {mentors.length === 0
            ? "Mentors will appear here once available."
            : "No mentors match. Try another search or filter."}
        </p>
      )}
    </div>
  );
}
