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
  // The exact branch, pinned by the hosts in Google Maps. Every map, directions
  // and calendar link uses this pin, not the invitation's wording.
  venuePin: {
    name: "Jollibee Pinagtipunan Circle Potrero",
    address: "MacArthur Highway, Potrero, Malabon",
    lat: 14.6637299,
    lng: 120.983994,
  },
  mapsUrl:
    "https://www.google.com/maps/place/Jollibee+Pinagtipunan+Circle+Potrero/@14.6637299,120.983994,17z/data=!4m6!3m5!1s0x3397b5477722169d:0xc20c26858a333a32!8m2!3d14.6637299!4d120.983994!16s%2Fg%2F11ghpmt7d3",
  wazeUrl: "https://waze.com/ul?ll=14.6637299,120.983994&navigate=yes&zoom=17",
  // Keyless Google Maps embed centred on the pin.
  mapEmbedUrl: "https://maps.google.com/maps?q=14.6637299,120.983994&z=16&hl=en&output=embed",
  // The hosts' published Google Form. Set to null to show the "not open yet"
  // state instead of a dead link.
  rsvpUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdTn-8op4TtIA-Pq0johAjuPrLq0J1aHRekxC0IAd1hqg7W4g/viewform" as
      | string
      | null,
  icsPath: "/amaris-1st-birthday.ics",
};

// The invitation gives no end time; calendars need one, so the entry spans 3 hours.
const calendarText = encodeURIComponent(`${event.firstName}’s 1st Birthday`);
const calendarDetails = encodeURIComponent(
  `${event.fullName}’s 1st birthday. A little princess is turning ONE-derful!`,
);
const calendarLocation = encodeURIComponent(
  `${event.venuePin.name}, ${event.venuePin.address}`,
);

export const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calendarText}&dates=20261122T100000Z/20261122T130000Z&details=${calendarDetails}&location=${calendarLocation}&ctz=Asia/Manila`;
