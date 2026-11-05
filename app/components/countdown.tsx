"use client";

import { useSyncExternalStore } from "react";
import { event } from "../event";

const start = new Date(event.startsAt).getTime();
const MINUTE = 60_000;
// Party wraps up well within 4 hours of the start.
const AFTER_PARTY = start + 4 * 60 * MINUTE;

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

// Snapshot to the minute so React only re-renders when the display changes.
const getSnapshot = () => Math.floor(Date.now() / MINUTE) * MINUTE;
const getServerSnapshot = () => null;

function useNow() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Calendar date in Manila, so "days to go" flips at local midnight there.
const manilaDay = new Intl.DateTimeFormat("en-CA", {
  timeZone: event.timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function daysUntil(now: number) {
  const today = Date.parse(manilaDay.format(now));
  const party = Date.parse(manilaDay.format(start));
  return Math.round((party - today) / (24 * 60 * MINUTE));
}

type Phase =
  | { kind: "days"; days: number }
  | { kind: "tomorrow" }
  | { kind: "today"; hours: number; minutes: number }
  | { kind: "now" }
  | { kind: "over" };

function phaseAt(now: number): Phase {
  if (now >= AFTER_PARTY) return { kind: "over" };
  if (now >= start) return { kind: "now" };
  const days = daysUntil(now);
  if (days > 1) return { kind: "days", days };
  if (days === 1) return { kind: "tomorrow" };
  const left = Math.max(0, Math.ceil((start - now) / MINUTE));
  return { kind: "today", hours: Math.floor(left / 60), minutes: left % 60 };
}

/** Short inline form for the plaque: "17 days to go". */
export function CountdownInline() {
  const now = useNow();
  if (now === null) return <span>{event.shortDate}</span>;
  const phase = phaseAt(now);
  switch (phase.kind) {
    case "days":
      return <span>{phase.days} days to go</span>;
    case "tomorrow":
      return <span>Tomorrow!</span>;
    case "today":
      return <span>Tonight at {event.timeLabel}</span>;
    case "now":
      return <span>The ball is on now</span>;
    case "over":
      return <span>Thank you for coming</span>;
  }
}

/** The clock in the ball section. */
export function CountdownClock() {
  const now = useNow();
  const phase = now === null ? null : phaseAt(now);

  let figure: string;
  let caption: string;
  if (phase === null) {
    figure = event.shortDate;
    caption = `${event.dayName} at ${event.timeLabel}`;
  } else if (phase.kind === "days") {
    figure = `${phase.days}`;
    caption = "days until the ball";
  } else if (phase.kind === "tomorrow") {
    figure = "Tomorrow";
    caption = `the ball begins at ${event.timeLabel}`;
  } else if (phase.kind === "today") {
    figure =
      phase.hours > 0 ? `${phase.hours}h ${phase.minutes}m` : `${phase.minutes}m`;
    caption = "until the ball begins";
  } else if (phase.kind === "now") {
    figure = "Tonight";
    caption = "the ball is on now";
  } else {
    figure = "Thank you";
    caption = "for celebrating with our little princess";
  }

  return (
    <p className="flex flex-col items-center" aria-live="polite">
      <span className="font-caps text-[clamp(2.75rem,12vw,4rem)] font-bold leading-none tabular-nums text-navy">
        {figure}
      </span>
      <span className="mt-2 text-lg italic text-navy">{caption}</span>
    </p>
  );
}
