"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export type FrameShape = "arch" | "rect" | "oval";

// Frame geometry in viewBox units. Each shape keeps a fixed aspect so the
// carved ornament never stretches.
const dims = {
  arch: { w: 300, h: 400 },
  rect: { w: 450, h: 300 },
  oval: { w: 450, h: 300 },
} as const;

/** Sight edge inset: where the moulding ends and the photo begins. */
const SIGHT = 26;

function outline(shape: FrameShape, t: number) {
  const { w, h } = dims[shape];
  if (shape === "arch") {
    const r = w / 2 - t;
    return `M${t} ${h - t}V${w / 2}A${r} ${r} 0 0 1 ${w - t} ${w / 2}V${h - t}Z`;
  }
  if (shape === "oval") {
    const rx = w / 2 - t;
    const ry = h / 2 - t;
    return `M${t} ${h / 2}A${rx} ${ry} 0 1 1 ${w - t} ${h / 2}A${rx} ${ry} 0 1 1 ${t} ${h / 2}Z`;
  }
  const r = Math.max(4, 16 - t / 2);
  return `M${t + r} ${t}H${w - t - r}Q${w - t} ${t} ${w - t} ${t + r}V${h - t - r}Q${w - t} ${h - t} ${w - t - r} ${h - t}H${t + r}Q${t} ${h - t} ${t} ${h - t - r}V${t + r}Q${t} ${t} ${t + r} ${t}Z`;
}

/** Photo opening as CSS insets + radius, matching the SVG sight edge. */
export function openingStyle(shape: FrameShape) {
  const { w, h } = dims[shape];
  const x = `${(SIGHT / w) * 100}%`;
  const y = `${(SIGHT / h) * 100}%`;
  const radius =
    shape === "arch" ? "999px 999px 2px 2px" : shape === "oval" ? "50%" : "6px";
  return { inset: `${y} ${x}`, borderRadius: radius } as const;
}

export function frameAspect(shape: FrameShape) {
  const { w, h } = dims[shape];
  return `${w} / ${h}`;
}

// A C-scroll with a leaf, drawn for the top-left corner and mirrored elsewhere.
const scroll =
  "M0 0c14-3 26 5 24 17-1 9-11 13-17 8-5-4-2-11 3-10M24 17c6-10 18-12 26-6M10 4c-4 10 0 20 9 24";

function Corner({ x, y, sx, sy, id }: { x: number; y: number; sx: 1 | -1; sy: 1 | -1; id: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${sx} ${sy})`}>
      <path d={scroll} fill="none" stroke={`url(#${id}-leaf)`} strokeWidth="3.4" strokeLinecap="round" />
      <path d={scroll} fill="none" stroke="#fff3cf" strokeWidth=".9" strokeLinecap="round" opacity=".8" />
      <circle cx="7" cy="25" r="3.2" fill={`url(#${id}-leaf)`} />
    </g>
  );
}

/** Cartouche with a blue heart jewel, carved into the top of the frame. */
function Cartouche({ x, y, id }: { x: number; y: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M-30 2c8-2 12-12 22-12 6 0 8 4 8 4s2-4 8-4c10 0 14 10 22 12-8 2-12 14-22 14-6 0-8-4-8-4s-2 4-8 4c-10 0-14-12-22-14z"
        fill={`url(#${id}-leaf)`}
        stroke="#7a5418"
        strokeWidth=".8"
      />
      <path d="M-30 2c-6-1-10-6-8-11M30 2c6-1 10-6 8-11" fill="none" stroke={`url(#${id}-leaf)`} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M0 11c-6-4-8.4-7.4-6-10.4 1.8-2 4.6-1.2 6 1 1.4-2.2 4.2-3 6-1 2.4 3 0 6.4-6 10.4z"
        fill="#2f5fb3"
        stroke="#fff3cf"
        strokeWidth=".9"
      />
    </g>
  );
}

function Ornament({ shape, id }: { shape: FrameShape; id: string }) {
  const { w, h } = dims[shape];
  const c = 9;
  if (shape === "arch") {
    return (
      <>
        <Cartouche x={w / 2} y={14} id={id} />
        <Corner x={c} y={h - c} sx={1} sy={-1} id={id} />
        <Corner x={w - c} y={h - c} sx={-1} sy={-1} id={id} />
      </>
    );
  }
  if (shape === "oval") {
    return (
      <>
        <Cartouche x={w / 2} y={14} id={id} />
        <g transform={`rotate(180 ${w / 2} ${h / 2})`}>
          <Cartouche x={w / 2} y={14} id={id} />
        </g>
      </>
    );
  }
  return (
    <>
      <Corner x={c} y={c} sx={1} sy={1} id={id} />
      <Corner x={w - c} y={c} sx={-1} sy={1} id={id} />
      <Corner x={c} y={h - c} sx={1} sy={-1} id={id} />
      <Corner x={w - c} y={h - c} sx={-1} sy={-1} id={id} />
      <Cartouche x={w / 2} y={14} id={id} />
    </>
  );
}

/**
 * A carved gilt frame: stepped moulding (outer bead, gold-leaf cove, pearl
 * row, cream fillet, sight edge) with cartouche and scroll ornament. The
 * photo sits in the opening; a glint crosses the gilt once on first view.
 */
export function GiltFrame({
  shape,
  className = "",
  children,
}: {
  shape: FrameShape;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);
  const id = useId().replace(/:/g, "");
  const { w, h } = dims[shape];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLit(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`gilt relative ${className}`}
      style={{ aspectRatio: frameAspect(shape) }}
      data-lit={lit}
    >
      <div className="absolute overflow-hidden bg-mist" style={openingStyle(shape)}>
        {children}
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_12px_14px_rgb(31_59_115/0.22)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-leaf`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f6e2a8" />
            <stop offset=".3" stopColor="#c9973f" />
            <stop offset=".55" stopColor="#f2d896" />
            <stop offset=".8" stopColor="#a87a2a" />
            <stop offset="1" stopColor="#e3bf73" />
          </linearGradient>
          <linearGradient id={`${id}-cove`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b8862f" />
            <stop offset=".5" stopColor="#edd08a" />
            <stop offset="1" stopColor="#9a6e24" />
          </linearGradient>
        </defs>
        {/* Moulding body between outer edge and sight edge. */}
        <path d={`${outline(shape, 0)}${outline(shape, SIGHT)}`} fillRule="evenodd" fill={`url(#${id}-leaf)`} />
        {/* Keyboard focus follows the frame's own outline. */}
        <path
          d={outline(shape, -5)}
          fill="none"
          stroke="var(--blue)"
          strokeWidth="3.5"
          className="opacity-0 group-focus-visible:opacity-100"
        />
        {/* Outer bead. */}
        <path d={outline(shape, 1.5)} fill="none" stroke="#7a5418" strokeWidth="3" />
        <path d={outline(shape, 4)} fill="none" stroke="#fff3cf" strokeWidth="1.2" opacity=".85" />
        {/* Cove: the deep gold-leaf channel. */}
        <path d={outline(shape, 10)} fill="none" stroke={`url(#${id}-cove)`} strokeWidth="7" />
        {/* Pearl row. */}
        <path
          d={outline(shape, 17)}
          fill="none"
          stroke="#fff6dc"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeDasharray="0 7.5"
        />
        {/* Cream fillet and dark sight edge. */}
        <path d={outline(shape, 22.5)} fill="none" stroke="#fbf6ec" strokeWidth="2.2" />
        <path d={outline(shape, SIGHT - 0.6)} fill="none" stroke="#7a5418" strokeWidth="1.2" />
        <Ornament shape={shape} id={id} />
      </svg>
    </div>
  );
}
