// Facts from the printed invitation (public/photos/invitation.jpg). Never invent more.
export const event = {
  firstName: "Amaris",
  fullName: "Amaris Keziah D. Benedicto",
  surnameLine: "Keziah D. Benedicto’s",
  dayName: "Sunday",
  dateLabel: "November 22, 2026",
  shortDate: "Nov 22, 2026",
  timeLabel: "6:00 PM",
  // 6:00 PM Philippine time (UTC+8).
  startsAt: "2026-11-22T18:00:00+08:00",
  timeZone: "Asia/Manila",
  venueName: "Jollibee Potrero",
  venueArea: "MacArthur Highway, Malabon",
  // Fits the plaque on one line at 320px; the invitation itself abbreviates.
  venueAreaShort: "MacArthur Hwy, Malabon",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jollibee+Potrero+MacArthur+Highway+Malabon",
  // Paste the hosts' Google Form link here when it's ready. Until then the
  // RSVP control shows a "not open yet" state instead of a dead link.
  rsvpUrl: null as string | null,
  icsPath: "/amaris-1st-birthday.ics",
};

// The invitation gives no end time; calendars need one, so the entry spans 3 hours.
const calendarText = encodeURIComponent(`${event.firstName}’s 1st Birthday`);
const calendarDetails = encodeURIComponent(
  `${event.fullName}’s 1st birthday. A little princess is turning ONE-derful!`,
);
const calendarLocation = encodeURIComponent(
  `${event.venueName}, ${event.venueArea}`,
);

export const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calendarText}&dates=20261122T100000Z/20261122T130000Z&details=${calendarDetails}&location=${calendarLocation}&ctz=Asia/Manila`;
