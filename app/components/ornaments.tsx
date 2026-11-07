const crystals = [
  { x: 34, y: 58, s: 0.8, d: "0s" },
  { x: 62, y: 70, s: 0.9, d: "1.1s" },
  { x: 92, y: 78, s: 1, d: "2.3s" },
  { x: 120, y: 84, s: 1.2, d: "0.6s" },
  { x: 148, y: 78, s: 1, d: "1.8s" },
  { x: 178, y: 70, s: 0.9, d: "3s" },
  { x: 206, y: 58, s: 0.8, d: "0.3s" },
  { x: 78, y: 40, s: 0.7, d: "2.6s" },
  { x: 120, y: 48, s: 0.8, d: "1.4s" },
  { x: 162, y: 40, s: 0.7, d: "3.4s" },
];

/** The ballroom chandelier hanging from the top edge of the page. */
export function Chandelier({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 104"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path d="M120 0v22" stroke="var(--gold)" strokeWidth="1.6" />
      <circle cx="120" cy="25" r="4" fill="var(--gold)" />
      <path
        d="M30 46c30 26 150 26 180 0M54 30c24 22 108 22 132 0"
        stroke="var(--gold)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M120 29v16M78 34v6M162 34v6M34 46v6M206 46v6"
        stroke="var(--gold)"
        strokeWidth="1.2"
      />
      {[54, 78, 120, 162, 186].map((x) => (
        <g key={x}>
          <path d={`M${x} 28v-7`} stroke="var(--gold)" strokeWidth="1.4" />
          <path
            d={`M${x} 13c-2.4 3.6-2.4 6 0 8 2.4-2 2.4-4.4 0-8z`}
            fill="#ffe9b0"
            stroke="var(--gold)"
            strokeWidth=".6"
          />
        </g>
      ))}
      {crystals.map((c) => (
        <path
          key={`${c.x}-${c.y}`}
          className="crystal"
          style={{ animationDelay: c.d }}
          d={`M${c.x} ${c.y}l${-4 * c.s} ${9 * c.s} ${4 * c.s} ${8 * c.s} ${4 * c.s} ${-8 * c.s}z`}
          fill="var(--sky)"
          stroke="var(--blue)"
          strokeWidth=".7"
        />
      ))}
    </svg>
  );
}

/** Crown finial with a blue heart jewel, as on the invitation's tiara. */
export function Crown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 28" className={className} aria-hidden="true">
      <path
        d="M3 26 6.5 8l9 9L24 2l8.5 15 9-9L45 26z"
        fill="var(--gold)"
        stroke="var(--gold-deep)"
        strokeWidth=".8"
        strokeLinejoin="round"
      />
      <circle cx="6.5" cy="7" r="2" fill="var(--gold-light)" />
      <circle cx="24" cy="2.5" r="2" fill="var(--gold-light)" />
      <circle cx="41.5" cy="7" r="2" fill="var(--gold-light)" />
      <path
        d="M24 22.5c-4-2.8-5.6-5-4-7 1.2-1.4 3-.8 4 .7 1-1.5 2.8-2.1 4-.7 1.6 2 0 4.2-4 7z"
        fill="var(--blue)"
        stroke="#fff6dc"
        strokeWidth=".7"
      />
    </svg>
  );
}

/** Four-point sparkle, used sparingly like the invitation's stars. */
export function Sparkle({
  className = "",
  delay = "0s",
}: {
  className?: string;
  delay?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`sparkle ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        d="M10 0c.8 5.6 3.4 8.6 10 10-6.6 1.4-9.2 4.4-10 10-.8-5.6-3.4-8.6-10-10C6.6 8.6 9.2 5.6 10 0z"
        fill="var(--gold)"
      />
    </svg>
  );
}

/** Gold scroll rule with a heart, as on the invitation between sections. */
export function HeartRule({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 18" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 9h82c6 0 8-5 14-5M216 9h-82c-6 0-8-5-14-5"
        stroke="var(--gold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M110 16c-6-4-8.4-7.4-6-10.4 1.8-2 4.6-1.2 6 1 1.4-2.2 4.2-3 6-1 2.4 3 0 6.4-6 10.4z"
        fill="var(--blue)"
        stroke="var(--gold)"
        strokeWidth=".8"
      />
    </svg>
  );
}

/** Small line icons in one stroke weight. */
export function Icon({
  name,
  className = "",
}: {
  name: "pin" | "calendar" | "navigate";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "pin" ? (
        <>
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </>
      ) : name === "navigate" ? (
        <path d="M3.5 11 20.5 3.5 13 20.5l-2-7.5-7.5-2z" />
      ) : (
        <>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </>
      )}
    </svg>
  );
}

/** Blue heart jewel set into the O of ONE, as on the invitation. */
export function HeartJewel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 22" className={className} aria-hidden="true">
      <path
        d="M12 21C4.5 16 1 11.6 2.4 7 3.6 3 8.6 2.2 12 6c3.4-3.8 8.4-3 9.6 1 1.4 4.6-2.1 9-9.6 14z"
        fill="#5b8ad6"
        stroke="#fff3cf"
        strokeWidth="1.4"
      />
      <path d="M6.5 7.5c.8-1.6 2.6-2 3.8-1.2" fill="none" stroke="#e6eef9" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
