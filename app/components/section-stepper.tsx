"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Floating "next section" pill. Each tap glides to the next stop on the page
 * (invitation → portraits → the ball → RSVP → the end), and its label always
 * names where the next tap goes. At the bottom it turns into "Top".
 */
type Stop = {
  label: string;
  selector: string;
  /** "start" lands the element at the top; "center" centres it (the RSVP pill). */
  align: "start" | "center" | "end";
};

const stops: Stop[] = [
  { label: "Invitation", selector: '[aria-labelledby="invite-title"]', align: "start" },
  { label: "Portraits", selector: '[aria-labelledby="hall-title"]', align: "start" },
  { label: "The Ball", selector: '[aria-labelledby="ball-title"]', align: "start" },
  { label: "RSVP", selector: "#rsvp", align: "center" },
  { label: "The End", selector: "body", align: "end" },
];

// Ignore stops this close to the current position, so a tap always moves on.
const SLACK = 24;

function maxScroll() {
  return document.documentElement.scrollHeight - window.innerHeight;
}

function targetY(stop: Stop) {
  if (stop.align === "end") return maxScroll();
  const el = document.querySelector(stop.selector);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const y = stop.align === "center" ? top - (window.innerHeight - rect.height) / 2 : top;
  return Math.max(0, Math.min(Math.round(y), maxScroll()));
}

/** The first stop still below the current scroll position, or null at the bottom. */
function nextStop() {
  const here = window.scrollY;
  for (const stop of stops) {
    const y = targetY(stop);
    if (y !== null && y > here + SLACK) return { stop, y };
  }
  return null;
}

export function SectionStepper() {
  const [label, setLabel] = useState<string | null>(stops[0].label);
  const atEnd = label === null;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setLabel(nextStop()?.stop.label ?? null));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    const next = nextStop();
    window.scrollTo({ top: next ? next.y : 0, behavior });
  }, []);

  return (
    <button
      type="button"
      onClick={go}
      aria-label={atEnd ? "Back to top" : `Go to ${label}`}
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.5rem))] z-50 flex min-h-12 items-center gap-2 rounded-full border border-gold bg-ivory/95 py-2 pr-5 pl-3 font-caps text-[0.8rem] font-bold tracking-[0.1em] text-navy shadow-[0_0_0_2px_var(--cream),0_10px_20px_-8px_rgb(31_59_115/0.45)] backdrop-blur-sm transition-colors duration-200 hover:border-blue hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue active:translate-y-px"
    >
      <span className="flex size-7 items-center justify-center rounded-full bg-navy text-white">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`size-4 transition-transform duration-300 ${atEnd ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
      {atEnd ? "Top" : label}
    </button>
  );
}
