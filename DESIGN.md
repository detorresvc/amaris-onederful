---
name: Amaris is turning ONE-derful
description: A palace portrait hall in Cinderella light, where the princess's gilded portrait carries the invitation.
colors:
  navy: "#1f3b73"
  blue: "#2f5fb3"
  sky: "#a9c7ee"
  gold: "#c9973f"
  gold-light: "#e9c97f"
  gold-text: "#ad7f2c"
  gold-deep: "#8a6220"
  brass: "#f6ecd6"
  cream: "#fbf6ec"
  ivory: "#fffdf7"
  mist: "#e6eef9"
  wall: "#d4e2f5"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(3.25rem, 15.5vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.9
  script-display:
    fontFamily: "Great Vibes, cursive"
    fontSize: "clamp(2.5rem, 11.5vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 0.85
  headline:
    fontFamily: "Great Vibes, cursive"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1.25
  figure:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(2.75rem, 12vw, 4rem)"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "\"tnum\""
  title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "0.05em"
  body:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  button:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  plaque-inner: "3px"
  plaque: "6px"
  plaque-hero: "12px"
  card: "16px"
  pill: "9999px"
spacing:
  gutter-tight: "16px"
  gutter: "20px"
  block: "28px"
  stack: "48px"
  hall-gap: "64px"
  section-top: "80px"
  section-bottom: "96px"
components:
  button-rsvp:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-rsvp-hover:
    backgroundColor: "{colors.blue}"
  button-rsvp-pending:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    height: "52px"
  button-ghost:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "#ffffff"
  text-link:
    textColor: "{colors.blue}"
    typography: "{typography.body}"
    height: "44px"
  text-link-hover:
    textColor: "{colors.navy}"
  plaque-hero:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.navy}"
    rounded: "{rounded.plaque-hero}"
    padding: "32px 20px 12px"
    width: "320px"
  plaque-title:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.navy}"
    rounded: "{rounded.plaque}"
    padding: "10px 20px"
  card-ball:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
    padding: "32px 24px"
  lightbox-button:
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  lightbox-button-close:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
---

# Design System: Amaris is turning ONE-derful

## Overview

**Creative North Star: "The Palace Portrait Hall"**

Guests walk into a ballroom in Cinderella light. A crystal chandelier hangs from the top edge of the screen, the wall glows mist-blue and fades to cream as you go down, and the princess's portraits hang in carved gilt frames. Each frame has a brass plaque, and the invitation itself is written on the first plaque. Everything here comes from the printed invitation (`public/photos/invitation.jpg`): sky and cornflower blue, gold leaf, cream paper, the heart jewel, the tiara, and the gold "ONE" with "derful" in blue script below it.

The page is a single centred column, built mobile-first and kept narrow on desktop. Depth comes from the objects: gilt moulding drawn as SVG, plaques with a double gold rule, and soft navy-tinted shadows. Interface chrome stays out of the way. Motion is quiet and comes from the room. Crystals twinkle, sparkles breathe, and a light glint crosses each frame once when it enters view. All three stop under reduced motion.

The world is light only. The one dark surface is the night-navy lightbox, where a portrait is shown full size.

**Key Characteristics:**
- Gilt frames as the signature object: arch, rectangle and oval, each with a cartouche and heart jewel
- Brass plaques with an inner hairline gold rule carry every caption and the invitation
- Three type voices: Cinzel capitals, Great Vibes script, EB Garamond text
- Navy ink on cream, brass and ivory; gold used as material, not as small text
- Soft navy-tinted shadows only; cream-then-gold rings around pills
- Hand-drawn SVG ornaments (chandelier, crown, sparkle, heart rule, line icons)

## Colors

The palette is a pale palace: blue light on the walls, cream and brass on the objects, gold as metal, and navy as ink.

### Primary
- **Ballroom Navy** (navy): the ink of the page. It sets all running text, the date line, labels, plaque captions and the RSVP pill fill. The pill ring is also tinted navy. Nothing on the page uses black.
- **Cornflower Blue** (blue): the script voice ("Amaris", "derful", section titles), text links, the RSVP hover state, the focus outline, the heart jewels and crystal outlines.

### Secondary
- **Gold Leaf** (gold): metal only. Used for plaque and card borders, chandelier arms, sparkles, the heart rule, the pill's outer ring, and the scrollbar thumb.
- **Gilt Highlight** (gold-light): candle-bright gold for the crown's pearls and the gold borders of the lightbox's outline buttons, which sit on night navy.
- **Gold Lettering** (gold-text): gold dark enough to hold the display capitals, the "ONE" wordmark and its closing echo. Large sizes only.
- **Antique Gold** (gold-deep): gold for small text. Used for the surname line on the plaque, the countdown aside, definition labels ("When", "Where") and the detail icons.

### Tertiary
- **Crystal Sky** (sky): chandelier crystals, text selection, and the photo-count text in the lightbox.

### Neutral
- **Palace Cream** (cream): the bottom of the wall gradient and the light text and Close button in the lightbox.
- **Brass Plate** (brass): the face of every plaque.
- **Ivory Card** (ivory): the ball-details card and ghost button fill.
- **Morning Mist** (mist): the top of the wall glow, the ball section band, the photo well behind each frame opening, the pending RSVP pill, and the browser theme colour.
- **Palace Wall** (wall): the mid-tone of the wall gradient and the root background behind the body.

### Named Rules
**The Gold-Is-Metal Rule.** Gold Leaf draws borders, rules, ornaments and rings, never text. Gold text uses Gold Lettering at display sizes and Antique Gold below 1.5rem.

**The Navy Ink Rule.** All text is navy, blue, or one of the two text golds. Never black or gray.

**The Light Palace Rule.** The world has no dark mode. The only dark surface is the lightbox's night-navy backdrop (rgb 22 41 86).

## Typography

**Display Font:** Cinzel 500/700 (with Georgia, serif)
**Script Font:** Great Vibes 400
**Body Font:** EB Garamond, normal and italic (with Georgia, serif)

**Character:** These are the invitation's own three voices. Roman capitals announce, a flowing script names, and an old-style book serif speaks the sentences.

### Hierarchy
- **Display** (Cinzel 700, clamp 3.25–5rem, line-height 0.9, Gold Lettering): the "ONE" of the wordmark, with a heart jewel set into the O.
- **Script Display** (Great Vibes, clamp 2.5–3.6rem, line-height 0.85, blue): "derful", tucked under ONE with a negative top margin.
- **Headline** (Great Vibes, 2.6–2.9rem, tight leading, blue): the name "Amaris" and the section titles ("The Portrait Hall", "You're invited to the ball").
- **Figure** (Cinzel 700, clamp 2.75–4rem, tabular numerals, navy): the countdown number.
- **Title** (Cinzel 700, 0.95rem, 0.05em tracking, navy): the date and time line on the plaque.
- **Body** (EB Garamond 400, 1rem–1.25rem, navy): venue, details and sentences. Width is held to 26–30ch on centred blocks. Italic is the invitation's voice ("Join us to celebrate", the countdown caption, the thank-you line).
- **Label** (Cinzel 700, 0.8–0.82rem, 0.12–0.14em tracking): definition labels in Antique Gold and portrait plaque captions in navy.
- **Button** (Cinzel 700, 0.85–0.95rem, 0.1–0.14em tracking): every pill.

### Named Rules
**The Three Voices Rule.** Cinzel announces (wordmark, date, labels, buttons, plaques). Great Vibes names (Amaris, derful, section titles). EB Garamond speaks (every sentence). Don't swap their roles.

**The Script Is Large Rule.** Great Vibes is always blue and never set below 1.9rem. At small sizes the script turns illegible.

**The Invitation Line Rule.** The tracked small-caps line above ONE ("A little princess is turning", Cinzel 500, 0.8rem, 0.22em) is part of the wordmark and is printed copy. It is not a reusable kicker. Don't add tracked lines above other headings.

## Layout

The page is one centred column, mobile-first. The arrival and the hall are capped at 36rem, the ball card at 28rem and the hero plaque at 20rem. Desktop keeps the same column and lets the wall gradient fill the sides. The only breakpoint is 640px (sm). There, the arched portraits in the hall hang to alternate sides with their plaque beside the frame instead of under it. Rectangle and oval frames stay centred at full column width.

Spacing rhythm: page gutters are 16–20px. Blocks inside the arrival and the card sit 28px apart. Section headers sit 48px above their content, and portraits are 64px apart. The ball section opens with 80px of top padding and closes with 96px, with a hairline of half-strength gold along its top edge. The hero plaque overlaps the foot of the arched frame by 24px, so frame and plaque read as one object. At 390×844 the RSVP pill sits inside the first viewport.

**The Single Column Rule.** Desktop does not get a grid. The hall is a corridor, and the column stays narrow at any width.

## Elevation & Depth

The system is layered. The wall is a light gradient: a white radial glow at the top fades into mist, then wall blue, then cream. Physical objects sit on it with soft shadows that drop downward, use negative spread, and are tinted Ballroom Navy. The gilt frame carries its own depth through the moulding steps drawn in SVG, and adds a drop-shadow under the whole frame.

### Shadow Vocabulary
- **Hanging frame** (`drop-shadow(0 12px 14px rgb(31 59 115 / 0.22))`): every gilt frame.
- **Hero plaque** (`0 14px 30px -10px rgb(31 59 115 / 0.28)`): the invitation plaque.
- **Ball card** (`0 24px 50px -18px rgb(31 59 115 / 0.35)`): the details card. This is the deepest lift on the page.
- **Small plaque** (`0 6px 14px -6px rgb(31 59 115 / 0.3)`): portrait caption plaques.
- **Pill ring** (`0 0 0 2px cream, 0 0 0 3px gold, 0 10px 20px -8px rgb(31 59 115 / 0.45)`): the RSVP pill, ringed cream then gold as on the invitation.
- **Crown** (`drop-shadow(0 2px 2px rgb(138 98 32 / 0.35))`): a gold-tinted shadow for the crown finial.

### Named Rules
**The Navy Air Rule.** Shadows are always tinted navy (or gold under gold), soft, and pulled in with negative spread. Never gray, never black, never a hard offset.

## Shapes

The form language comes from palace objects. Portrait openings are arches (a full round head over 2px feet), rectangles with 6px corners, or ovals. The frame shape sets the photo's crop and never stretches: arches are 3:4 and rectangles and ovals are 3:2. Plaques are gently rounded rectangles (12px for the hero, 6px for captions). Each plaque has a hairline gold rule set 3–5px inside its 1.5px gold border, which makes the double rule. The ball card uses 16px corners. Every button is a full pill. Dividers are the heart rule: two gold scroll lines meeting at a blue heart.

**The Arch and Pill Rule.** Objects are arched, oval or softly cornered, and every action is a pill. Nothing has a sharp square corner except the photo inside a rectangular frame.

## Components

### Buttons
Buttons look like palace fittings: full pills set in Cinzel capitals.
- **Shape:** full pill (9999px).
- **RSVP (the one primary):** navy fill, white capitals, 52px tall, full width of its container, with the cream-then-gold pill ring. Hover moves the fill to Cornflower Blue over 200ms. Active presses down 1px.
- **RSVP pending:** until the form link exists, the same pill shows "RSVP opens soon" with a Morning Mist fill, navy text and a not-allowed cursor. It is never shown as a dead link. Outside the hero, an italic note sits under it.
- **Ghost (Maps and calendar):** ivory fill with a 1px gold border, navy capitals and a 20px line icon in front. 48px tall. Hover turns the border blue and the fill white.
- **Lightbox:** on night navy, Previous and Next are outline pills (gilt-highlight border, cream text, 44px). Close is a solid cream pill with navy text.

### Text Links
EB Garamond at 1.0625rem in Cornflower Blue with a gold underline (0.28em offset, 1px). Hover turns the text navy and the underline blue. Each link has a 44px tap height.

### Plaques
- **Hero plaque:** brass face, 1.5px gold border, inner hairline rule at half strength, 12px corners, max 320px wide. It holds the invitation in order: italic welcome, script name, surname line, date line, venue, countdown aside, RSVP, then links.
- **Caption plaque:** brass face, 6px corners, Cinzel caption in navy, an inner rule 3px in, no wrapping.

### Cards / Containers
- **Ball card:** ivory, 1.5px gold border, 16px corners, 32px by 24px padding, with the Ball card shadow. Inside, in order: countdown figure, heart rule, a When/Where list with gold line icons, ghost buttons, then RSVP.

### Gilt Frame (signature)
A carved frame drawn in SVG over a photo well in Morning Mist. The moulding steps inward: dark outer bead, cream highlight, gold-leaf cove, pearl row, cream fillet, dark sight edge. Each frame has a cartouche holding a blue heart jewel, and scroll corners or a mirrored cartouche depending on shape. Gold materials come from fixed gradient stops (see sidecar). On first view at 45% visibility, a soft-light glint sweeps across the frame once (1.8s). As a tappable portrait, the photo scales to 1.03 on hover over 700ms, and the keyboard focus ring follows the frame's own outline in blue.

### Ornaments
The chandelier (gold arms and candle flames, sky crystals with blue outlines that twinkle on a staggered 4.8s cycle), the crown finial over the hero arch, four-point gold sparkles (3.6s breathe), the heart rule, and the heart jewel in the O. Icons are single-weight 1.6px line drawings in SVG and are used only for When/Where and the action buttons.

## Do's and Don'ts

### Do:
- **Do** put every new photo of Amaris in a Gilt Frame, choosing arch, rectangle or oval to suit the crop. Captions go on a brass plaque below or beside the frame.
- **Do** set sentences in EB Garamond navy, and use italic for the invitation's own voice.
- **Do** keep one filled navy pill per view for the primary action. Secondary actions are ivory ghost pills.
- **Do** tint every shadow navy with negative spread, as in the Shadow Vocabulary.
- **Do** draw ornaments and icons as inline SVG in the palette, and stop all ambient motion under reduced motion.
- **Do** separate sections with the heart rule or a half-strength gold hairline.

### Don't:
- **Don't** set small text in Gold Leaf. Use Antique Gold.
- **Don't** add a dark theme or dark sections. The only night surface is the lightbox.
- **Don't** set Great Vibes below 1.9rem, or in any colour except blue.
- **Don't** add tracked small-caps kicker lines above headings. The one above ONE is the invitation's printed copy.
- **Don't** use gray or black shadows or hard offset shadows.
- **Don't** use Disney characters, logos or film imagery. Use generic fairytale motifs only (castle, carriage, slipper, tiara, roses, bows, hearts).
- **Don't** break the single column on desktop with grids or side rails.
