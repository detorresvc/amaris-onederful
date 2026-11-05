import type { CSSProperties } from "react";

/** Inline style for a parallax layer's rate (negative moves up faster than the page). */
export const rate = (r: number) => ({ "--rate": r }) as CSSProperties;
