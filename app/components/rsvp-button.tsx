import { event } from "../event";
import { pendingButton, primaryButton } from "./button-styles";

/** The one primary action. Shows a "not open yet" state until the form link exists. */
export function RsvpButton({ label = "RSVP to the Ball" }: { label?: string }) {
  if (!event.rsvpUrl) {
    return (
      <p className={pendingButton} aria-disabled="true">
        RSVP opens soon
      </p>
    );
  }

  return (
    <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>
      {label}
    </a>
  );
}
