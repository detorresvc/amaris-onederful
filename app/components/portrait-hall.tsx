"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import lilacCrown from "@/assets/photo_i_purple_tall.jpg";
import lilacCry from "@/assets/photo_f_purple_cry.jpg";
import pinkCastle from "@/assets/photo_b_pink.jpg";
import blueTulle from "@/assets/photo_g_blue_tall.jpg";
import mirrorFrame from "@/assets/frame-oval-gold.webp";
import blueGown from "@/assets/photo_j_blue_smile_full.jpg";
import { GiltFrame, type FrameShape } from "./gilt-frame";
import { Sparkle } from "./ornaments";

type Portrait = {
  src: StaticImageData;
  title: string;
  alt: string;
  /** "mirror" is the gold oval cutout from /assets; the rest are carved SVG frames. */
  shape: FrameShape | "mirror";
  focus: string;
};

// One photo per pose from /assets (the other crops in that folder repeat these
// poses). Order opens on a different photo from the hero, and alternates sides.
const portraits: Portrait[] = [
  {
    src: pinkCastle,
    title: "Pretty in Pink",
    alt: "Amaris smiling in a ruffled pink gown in front of a golden castle backdrop",
    shape: "rect",
    focus: "50% 35%",
  },
  {
    src: lilacCry,
    title: "The Royal Tantrum",
    alt: "Amaris in a lilac tulle dress, eyes squeezed shut mid-cry",
    shape: "arch",
    focus: "50% 22%",
  },
  {
    src: blueTulle,
    title: "Ready for the Ball",
    alt: "Amaris in a cloud of blue tulle, smiling up",
    shape: "mirror",
    focus: "50% 35%",
  },
  {
    src: lilacCrown,
    title: "The Lilac Crown",
    alt: "Amaris in lilac, both hands on the big tulle flower crown on her head",
    shape: "arch",
    focus: "50% 30%",
  },
  {
    src: blueGown,
    title: "The Royal Giggle",
    alt: "Amaris in a blue ball gown, hands clasped, laughing",
    shape: "arch",
    // Full gown here; the hero shows her face.
    focus: "50% 60%",
  },
];

function photo(p: Portrait) {
  return (
    <Image
      src={p.src}
      alt={p.alt}
      fill
      placeholder="blur"
      sizes="(min-width: 640px) 560px, 92vw"
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      style={{ objectPosition: p.focus }}
    />
  );
}

/** The gold oval mirror: the photo sits in the cutout's opening, under the frame. */
function MirrorFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[1603/1800] w-full">
      <div className="absolute inset-[11.5%_8%_5.5%_8%] overflow-hidden rounded-[50%] bg-mist">{children}</div>
      <Image src={mirrorFrame} alt="" aria-hidden="true" fill sizes="(min-width: 640px) 336px, 80vw" className="pointer-events-none select-none" />
    </div>
  );
}

function Plaque({ title, className = "" }: { title: string; className?: string }) {
  return (
    <p
      className={`relative inline-block whitespace-nowrap rounded-md border-[1.5px] border-gold bg-brass px-5 py-2.5 text-center font-caps text-[0.82rem] font-bold tracking-[0.12em] text-navy shadow-[0_6px_14px_-6px_rgb(31_59_115/0.3)] ${className}`}
    >
      <span className="pointer-events-none absolute inset-[3px] rounded-[3px] border border-gold/55" />
      {title}
    </p>
  );
}

export function PortraitHall() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const show = (i: number) => {
    setOpen(i);
    dialogRef.current?.showModal();
  };
  const step = (delta: number) =>
    setOpen((i) => (i === null ? i : (i + delta + portraits.length) % portraits.length));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setOpen(null);
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, []);

  const current = open === null ? null : portraits[open];

  return (
    <>
      <ol className="mx-auto flex max-w-xl flex-col gap-16 px-5">
        {portraits.map((p, i) => {
          const isArch = p.shape === "arch";
          // Arches hang to one side; the plaque sits under the frame on
          // phones and beside it from sm up.
          const archIndex = portraits.slice(0, i).filter((q) => q.shape === "arch").length;
          const side = archIndex % 2 === 0 ? "left" : "right";
          const row = isArch
            ? side === "left"
              ? "flex flex-col items-start gap-4 sm:flex-row sm:items-end"
              : "flex flex-col items-end gap-4 sm:flex-row-reverse sm:items-end"
            : "flex flex-col items-center gap-4";
          return (
            <li key={p.title} className={`${row} ${isArch ? (side === "left" ? "reveal-left" : "reveal-right") : "reveal-zoom"}`}>
              <button
                type="button"
                onClick={() => show(i)}
                className={`group block shrink-0 cursor-zoom-in ${p.shape === "mirror" ? "w-[min(80vw,21rem)] rounded-[50%]" : "frame-focus"} ${isArch ? "w-[72%] sm:w-[58%]" : p.shape === "mirror" ? "" : "w-full"}`}
                aria-label={`View “${p.title}” full size`}
              >
                {p.shape === "mirror" ? (
                  <MirrorFrame>{photo(p)}</MirrorFrame>
                ) : (
                  <GiltFrame shape={p.shape}>{photo(p)}</GiltFrame>
                )}
              </button>
              <div className={isArch ? `flex flex-col sm:flex-1 sm:pb-8 ${side === "left" ? "items-start pl-3 sm:pl-0" : "items-end pr-3 sm:pr-0"}` : ""}>
                {isArch && <Sparkle className="mb-3 hidden size-4 sm:block" delay={`${i * 0.9}s`} />}
                <Plaque title={p.title} />
              </div>
            </li>
          );
        })}
      </ol>

      <dialog
        ref={dialogRef}
        aria-label={current ? current.title : "Photo"}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-[rgb(22_41_86)]"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {current && (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-4 py-6" onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}>
            <div className="relative h-[72dvh] w-full max-w-3xl">
              <Image
                key={current.title}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="font-caps text-base font-bold tracking-[0.12em] text-cream">
              {current.title}
              <span className="ml-3 font-serif text-sm font-normal tracking-normal text-sky">
                {(open ?? 0) + 1} of {portraits.length}
              </span>
            </p>
            <div className="flex gap-3">
              {[
                { label: "Previous photo", text: "Previous", d: -1 },
                { label: "Next photo", text: "Next", d: 1 },
              ].map((b) => (
                <button
                  key={b.text}
                  type="button"
                  onClick={() => step(b.d)}
                  aria-label={b.label}
                  className="min-h-11 rounded-full border border-gold-light px-5 font-caps text-sm font-bold tracking-[0.12em] text-cream transition-colors hover:bg-white/10"
                >
                  {b.text}
                </button>
              ))}
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="min-h-11 rounded-full bg-cream px-5 font-caps text-sm font-bold tracking-[0.12em] text-navy transition-colors hover:bg-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
