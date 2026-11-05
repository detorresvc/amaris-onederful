import { event } from "../event";

const pill =
  "flex min-h-13 w-full items-center justify-center rounded-full px-6 font-caps text-[0.95rem] font-bold tracking-[0.14em] shadow-[0_0_0_2px_var(--cream),0_0_0_3px_var(--gold),0_10px_20px_-8px_rgb(31_59_115/0.45)]";

/** The one primary action. Shows a "not open yet" state until the form link exists. */
export function RsvpButton({ label = "RSVP to the Ball" }: { label?: string }) {
  if (!event.rsvpUrl) {
    return (
      <p className={`${pill} cursor-not-allowed bg-mist text-navy`} aria-disabled="true">
        RSVP opens soon
      </p>
    );
  }

  return (
    <a
      href={event.rsvpUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${pill} bg-navy text-white transition-colors duration-200 hover:bg-blue active:translate-y-px`}
    >
      {label}
    </a>
  );
}
