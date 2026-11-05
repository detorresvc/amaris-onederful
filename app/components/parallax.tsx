"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Publishes scroll position to CSS so layers can move at their own rate:
 *   --y  px this element has scrolled past the viewport top (0 … its height)
 *   --p  0 → 1 as the element travels from entering to leaving the viewport
 * Layers read them with the .plx / .plx-x / .plx-photo classes in globals.css.
 * With reduced motion the vars stay at their resting defaults.
 */
export function Parallax({
  as: Tag = "section",
  className = "",
  style,
  children,
  ...rest
}: {
  as?: "section" | "div" | "footer";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
} & Record<`aria-${string}`, string>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const y = Math.min(Math.max(-rect.top, 0), rect.height);
      const p = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      node.style.setProperty("--y", y.toFixed(1));
      node.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
