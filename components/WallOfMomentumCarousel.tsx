"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import MentorAvatar from "./MentorAvatar";
import type { MentorTestimonial } from "@/lib/mentors";

type WallOfMomentumCarouselProps = {
  testimonials: MentorTestimonial[];
};

const AUTO_SCROLL_MS = 4200;
const LOOP_SETS = 3;

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5">
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

function VerifiedIcon() {
  return (
    <svg
      className="size-4 shrink-0 text-foreground"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-label="Verified"
    >
      <path d="M8 1.2 9.7 2l1.9-.3.7 1.8 1.8.7-.3 1.9L15 8l-1.2 1.7.3 1.9-1.8.7-.7 1.8-1.9-.3L8 14.8l-1.7-1.2-1.9.3-.7-1.8-1.8-.7.3-1.9L1 8l1.2-1.7-.3-1.9 1.8-.7.7-1.8 1.9.3L8 1.2Z" />
      <path
        d="M5.6 8.1 7.1 9.6l3.3-3.4"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WallOfMomentumCarousel({
  testimonials,
}: WallOfMomentumCarouselProps) {
  const count = testimonials.length;
  const canLoop = count > 1;

  const looped = useMemo(() => {
    if (!canLoop) {
      return testimonials.map((item, index) => ({
        item,
        index,
        key: item.id,
      }));
    }
    return Array.from({ length: LOOP_SETS }, (_, set) =>
      testimonials.map((item, index) => ({
        item,
        index,
        key: `${set}-${item.id}`,
      })),
    ).flat();
  }, [testimonials, canLoop]);

  const middleStart = canLoop ? count : 0;
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [activeSlot, setActiveSlot] = useState(middleStart);
  const activeSlotRef = useRef(middleStart);
  const [paused, setPaused] = useState(false);
  const jumpingRef = useRef(false);

  useEffect(() => {
    activeSlotRef.current = activeSlot;
  }, [activeSlot]);

  const getCards = useCallback(() => {
    const node = scrollerRef.current;
    if (!node) return [];
    return [...node.querySelectorAll<HTMLElement>("[data-momentum-card]")];
  }, []);

  const scrollToSlot = useCallback(
    (slot: number, behavior: ScrollBehavior = "smooth") => {
      const node = scrollerRef.current;
      const card = getCards()[slot];
      if (!node || !card) return;

      const left =
        card.offsetLeft - (node.clientWidth - card.offsetWidth) / 2;
      node.scrollTo({ left: Math.max(0, left), behavior });
    },
    [getCards],
  );

  const normalizeLoop = useCallback(() => {
    if (!canLoop || jumpingRef.current) return;

    const node = scrollerRef.current;
    if (!node) return;

    const cards = getCards();
    if (cards.length === 0) return;

    const mid = node.scrollLeft + node.clientWidth / 2;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });

    setActiveSlot(best);

    // Jump from edge copies into the middle set for seamless infinite scroll
    if (best < count || best >= count * 2) {
      const target = middleStart + (best % count);
      jumpingRef.current = true;
      scrollToSlot(target, "auto");
      setActiveSlot(target);
      activeSlotRef.current = target;
      requestAnimationFrame(() => {
        jumpingRef.current = false;
      });
    }
  }, [canLoop, count, getCards, middleStart, scrollToSlot]);

  // Start centered on the middle set
  useEffect(() => {
    if (!canLoop) {
      scrollToSlot(0, "auto");
      return;
    }
    scrollToSlot(middleStart, "auto");
    setActiveSlot(middleStart);
    activeSlotRef.current = middleStart;
  }, [canLoop, middleStart, scrollToSlot, count]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const onScroll = () => {
      if (jumpingRef.current) return;
      normalizeLoop();
    };

    node.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      node.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [normalizeLoop]);

  function scrollByCard(direction: -1 | 1) {
    const next = activeSlotRef.current + direction;
    if (!canLoop) {
      const clamped = Math.max(0, Math.min(count - 1, next));
      scrollToSlot(clamped);
      return;
    }
    scrollToSlot(next);
  }

  useEffect(() => {
    if (!canLoop) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || paused) return;

    const id = window.setInterval(() => {
      scrollToSlot(activeSlotRef.current + 1);
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(id);
  }, [canLoop, paused, scrollToSlot]);

  return (
    <div
      className="relative mt-6 sm:mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <ul
        ref={scrollerRef}
        className="flex snap-x snap-mandatory items-center gap-3 overflow-x-auto px-[4%] pb-2 sm:gap-4 sm:px-[8%] lg:px-[12%] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Mentor stories"
        aria-live="off"
      >
        {looped.map((entry, slot) => {
          const item = entry.item;
          const isActive = slot === activeSlot;

          return (
            <li
              key={entry.key}
              data-momentum-card
              className={`w-[min(100%,20rem)] shrink-0 snap-center transition-[transform,opacity] duration-300 ease-out sm:w-[min(100%,30rem)] lg:w-[36rem] ${
                isActive
                  ? "z-10 scale-100 opacity-100"
                  : "z-0 scale-[0.88] opacity-55 sm:scale-[0.86]"
              }`}
            >
              <article
                className={`relative flex min-h-[16rem] overflow-hidden rounded-[1.5rem] border bg-white sm:min-h-[18.5rem] ${
                  isActive
                    ? "border-border shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                    : "border-border/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                }`}
              >
                <span
                  className="absolute top-6 bottom-6 left-0 w-[3px] rounded-full bg-foreground"
                  aria-hidden="true"
                />

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 p-5 pl-5 sm:gap-5 sm:p-6 sm:pl-7">
                  <div>
                    <div className="flex items-center gap-3">
                      <MentorAvatar
                        src={item.image}
                        alt={item.name}
                        size={40}
                        className="size-10 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="flex items-center gap-1.5 truncate text-[0.9375rem] font-semibold text-foreground">
                          <span className="truncate">{item.name}</span>
                          <VerifiedIcon />
                        </p>
                        <p className="truncate text-[0.8125rem] text-muted">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4">
                      <Stars />
                    </div>

                    <blockquote className="mt-3 line-clamp-5 text-[0.9375rem] leading-relaxed text-foreground/85 sm:text-[1rem]">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>

                  <a
                    href="https://platform.mentorle.in/signup"
                    className="inline-flex w-fit text-[0.875rem] font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Book a session →
                  </a>
                </div>

                <div className="relative hidden w-[42%] shrink-0 sm:block">
                  <div className="absolute inset-3 overflow-hidden rounded-[1.15rem] bg-panel sm:inset-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {canLoop ? (
        <div className="mt-3 flex items-center justify-center gap-3 sm:mt-4">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous mentor story"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-neutral-400"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="M15 6 9 12l6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next mentor story"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-neutral-400"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="m9 6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}
