import Image, { type StaticImageData } from "next/image";
import { art } from "./art";
import { event, googleCalendarUrl } from "./event";
import { CountdownClock } from "./components/countdown";
import { HeartJewel, HeartRule, Icon } from "./components/ornaments";
import { Parallax } from "./components/parallax";
import { rate } from "./components/rate";
import { PortraitHall } from "./components/portrait-hall";
import { ghostButton } from "./components/button-styles";
import { RsvpButton } from "./components/rsvp-button";
import { SectionStepper } from "./components/section-stepper";


/** Decorative illustration: no alt text, never announced. */
function Art({
  src,
  className = "",
  sizes,
  eager = false,
}: {
  src: StaticImageData;
  className?: string;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      className={`h-auto w-full select-none ${className}`}
      draggable={false}
    />
  );
}

export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* Arrival: the palace stage, with Amaris's portrait drifting in its gilt frame. */}
      <Parallax className="relative isolate flex flex-col items-center overflow-hidden px-4 pb-10">
        {/* Stage drapes and crest; they lift away a little faster than the page. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
          <div className="plx" style={rate(-0.18)}>
            <div className="absolute top-0 left-0 w-[min(44vw,17rem)] -scale-x-100">
              <Art src={art.curtain} sizes="(min-width: 640px) 272px, 44vw" eager />
            </div>
            <div className="absolute top-0 right-0 w-[min(44vw,17rem)]">
              <Art src={art.curtain} sizes="(min-width: 640px) 272px, 44vw" eager />
            </div>
            <div className="absolute top-1 left-1/2 w-[min(34vw,12rem)] -translate-x-1/2">
              <Art src={art.crest} sizes="(min-width: 640px) 192px, 34vw" eager />
            </div>
          </div>
        </div>

        {/* Morning sky behind the stage; it sinks slower than the page. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[78%] [mask-image:linear-gradient(#000_55%,transparent)]">
          <div className="plx h-full" style={rate(0.35)}>
            <Image src={art.sky} alt="" aria-hidden="true" fill loading="eager" sizes="100vw" className="object-cover object-top opacity-80" />
          </div>
        </div>

        {/* Clouds drift apart as the page scrolls. */}
        <div className="pointer-events-none absolute top-[24rem] -left-[16%] -z-10 w-[min(56vw,20rem)]">
          <div className="plx-x" style={rate(-160)}>
            <Art src={art.cloud} sizes="(min-width: 640px) 320px, 56vw" eager />
          </div>
        </div>
        <div className="pointer-events-none absolute top-[33rem] -right-[18%] -z-10 w-[min(62vw,22rem)]">
          <div className="plx-x" style={rate(160)}>
            <Art src={art.cloud} sizes="(min-width: 640px) 352px, 62vw" className="-scale-x-100" eager />
          </div>
        </div>

        <div className="relative z-20 flex w-full max-w-xl flex-col items-center pt-[clamp(5.5rem,24vw,8rem)]">
          <div className="w-[min(26vw,7rem)]">
            <Art src={art.tiara} sizes="112px" eager />
          </div>

          <h1 className="mt-2 flex flex-col items-center text-center">
            <span className="font-caps text-[0.8rem] font-medium tracking-[0.22em] text-navy">
              A little princess is turning
            </span>
            <span className="mt-1 font-caps text-[clamp(3.25rem,15.5vw,5rem)] font-bold leading-[0.9] text-gold-text">
              <span className="relative inline-block">
                O
                <HeartJewel className="absolute top-1/2 left-1/2 w-[0.3em] -translate-x-1/2 -translate-y-[45%]" />
              </span>
              NE
            </span>
            <span className="-mt-2 font-script text-[clamp(2.5rem,11.5vw,3.6rem)] leading-[0.85] text-blue">
              derful
            </span>
          </h1>

          {/* The main portrait: the photo drifts slower than its frame. */}
          <div className="relative mt-12 aspect-square w-[min(74vw,21rem)]">
            <div className="absolute inset-[11.5%_5.5%_6%_5.5%] overflow-hidden bg-mist">
              <div className="plx-photo absolute inset-x-0 -top-[24%] h-[124%]" style={rate(0.08)}>
                <Image
                  src={art.baby}
                  alt="Amaris in her blue princess gown and tiara, hands clasped, laughing"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  placeholder="blur"
                  sizes="(min-width: 640px) 336px, 74vw"
                  className="object-cover object-[50%_32%]"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 z-10">
              <Art src={art.frameSquare} sizes="(min-width: 640px) 336px, 74vw" eager />
            </div>
            <div className="absolute -top-[17%] left-1/2 z-20 w-[36%] -translate-x-1/2">
              <div className="plx" style={rate(-0.06)}>
                <Art src={art.crown} sizes="120px" eager />
              </div>
            </div>
            <div className="absolute top-[4%] -right-[13%] z-20 w-[27%]">
              <div className="plx" style={rate(-0.32)}>
                <Art src={art.butterfly} sizes="96px" className="flutter" eager />
              </div>
            </div>
            <div className="absolute top-[38%] -left-[12%] z-20 w-[17%]">
              <div className="plx" style={rate(-0.22)}>
                <Art src={art.butterfly} sizes="64px" className="flutter [animation-delay:-2.4s]" eager />
              </div>
            </div>
            <div className="absolute -bottom-[22%] -left-[16%] z-20 w-[44%]">
              <div className="plx" style={rate(-0.12)}>
                <Art src={art.bouquet} sizes="(min-width: 640px) 148px, 33vw" eager />
              </div>
            </div>
          </div>

          {/* The palace in the clouds, with the carriage rolling up to it as the page scrolls. */}
          <div className="reveal relative mt-24 w-full" aria-hidden="true">
            <div className="relative mx-auto w-[min(50vw,13rem)]">
              <Art src={art.castle} sizes="(min-width: 640px) 208px, 50vw" />
              {/* The princess, seen from behind, gazes up at the palace. */}
              <div className="absolute -right-[52%] -bottom-[4%] z-10 w-[46%]">
                <div className="plx" style={rate(-0.08)}>
                  <Art src={art.cinderella} sizes="(min-width: 640px) 96px, 23vw" />
                </div>
              </div>
              <div className="absolute -bottom-[6%] left-1/2 w-[min(80vw,20rem)] -translate-x-1/2">
                <div className="plx-x" style={rate(-90)}>
                  <Art src={art.cloud} sizes="(min-width: 640px) 320px, 80vw" />
                </div>
              </div>
            </div>
            <div className="relative -mt-[18%] left-1/2 w-[min(110vw,36rem)] -translate-x-1/2">
              <div className="plx-x flex items-end justify-center" style={rate(-140)}>
                <div className="w-[38%] shrink-0 translate-x-[8%]">
                  <Art src={art.horse} sizes="(min-width: 640px) 216px, 42vw" />
                </div>
                <div className="w-[50%] shrink-0">
                  <Art src={art.carriage} sizes="(min-width: 640px) 288px, 55vw" className="-scale-x-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {/* The invitation itself, set inside the gilt cartouche. */}
      <section aria-labelledby="invite-title" className="relative flex flex-col items-center px-4 pt-20 pb-20">
        <div className="reveal-zoom relative aspect-[821/1188] w-[min(90vw,23rem)]">
          <Image src={art.cartouche} alt="" aria-hidden="true" fill sizes="(min-width: 640px) 368px, 90vw" />
          <div className="absolute top-0 left-1/2 w-[44%] -translate-x-1/2 -translate-y-[42%]">
            <Art src={art.satinBow} sizes="160px" />
          </div>
          <div className="absolute inset-[13%_19%_17%_19%] flex flex-col items-center justify-center text-center">
            <p className="text-lg italic text-navy">Join us to celebrate</p>
            <h2 id="invite-title" className="font-script text-[clamp(2.6rem,12vw,3.25rem)] leading-none text-blue">
              {event.firstName}
            </h2>
            <p className="mt-1 text-[1.0625rem] text-gold-deep">{event.surnameLine}</p>
            <p className="font-caps text-[0.85rem] font-bold tracking-[0.14em] text-navy">1st Birthday</p>
            <HeartRule className="my-3 w-36" />
            <p className="font-caps text-[0.85rem] font-bold tracking-[0.14em] text-navy">{event.dayName}</p>
            <p className="text-lg leading-snug text-navy">{event.dateLabel}</p>
            <p className="font-caps text-lg font-bold text-navy">{event.timeLabel}</p>
            <p className="mt-2 font-caps text-[0.85rem] font-bold tracking-[0.1em] text-navy">{event.venueName}</p>
            <p className="text-base leading-snug text-navy">{event.venueArea}</p>
          </div>
        </div>
      </section>

      {/* The hall of portraits. */}
      <section aria-labelledby="hall-title" className="pb-20">
        <header className="reveal mx-auto mb-12 flex max-w-xl flex-col items-center px-5 text-center">
          <div className="mb-2 w-[min(22vw,5.5rem)]">
            <Art src={art.butterfly} sizes="88px" className="flutter" />
          </div>
          <h2 id="hall-title" className="font-script text-[2.6rem] leading-tight text-balance text-blue">
            The Portrait Hall
          </h2>
          <p className="mt-2 max-w-[30ch] text-lg text-navy">
            A year of royal moments, from the giggles to the tantrums. Tap a portrait to see it up close.
          </p>
        </header>
        <PortraitHall />
      </section>

      {/* The ball: the countdown and everything a guest needs to arrive. */}
      <Parallax
        aria-labelledby="ball-title"
        className="relative overflow-hidden border-t border-gold/50 bg-mist px-5 pt-14 pb-10 text-navy"
      >
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <h2 id="ball-title" className="reveal font-script text-[2.9rem] leading-tight text-balance text-blue">
            You’re invited to the ball
          </h2>

          <div className="reveal-zoom relative mt-6 aspect-[901/838] w-[min(88vw,22rem)]">
            <Image src={art.cartoucheWide} alt="" aria-hidden="true" fill sizes="(min-width: 640px) 352px, 88vw" />
            <div className="absolute inset-[27%_13%_20%_13%] flex flex-col items-center justify-center">
              <CountdownClock />
            </div>
          </div>

          {/* Where: the hosts' exact pin, with one-tap directions in either app. */}
          <figure className="reveal mt-8 w-full max-w-[20rem]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-[1.5px] border-gold bg-ivory shadow-[0_0_0_3px_var(--cream),0_10px_20px_-8px_rgb(31_59_115/0.35)]">
              <iframe
                src={event.mapEmbedUrl}
                title={`Map to ${event.venuePin.name}, ${event.venuePin.address}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
            <figcaption className="mt-3 text-center text-navy">
              <span className="block font-caps text-[0.85rem] font-bold tracking-[0.1em] text-balance">{event.venuePin.name}</span>
              <span className="block text-base leading-snug">{event.venuePin.address}</span>
            </figcaption>
          </figure>

          {/* One even stack: same pill, same 12px gap. No per-button scroll reveal,
              which left each button at a different opacity mid-scroll. */}
          <div className="mt-6 flex w-full max-w-[20rem] flex-col gap-3">
            <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" className={ghostButton}>
              <Icon name="pin" className="size-5 shrink-0" /> Open in Google Maps
            </a>
            <a href={event.wazeUrl} target="_blank" rel="noopener noreferrer" className={ghostButton}>
              <Icon name="navigate" className="size-5 shrink-0" /> Open in Waze
            </a>
            <a href={event.icsPath} download className={ghostButton}>
              <Icon name="calendar" className="size-5 shrink-0" /> Apple / Outlook Calendar
            </a>
            <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className={ghostButton}>
              <Icon name="calendar" className="size-5 shrink-0" /> Google Calendar
            </a>
            <div id="rsvp">
              <RsvpButton />
            </div>
          </div>
        </div>

      </Parallax>

      {/* Closing: the invitation's own words inside the glass-slipper wreath. */}
      <section className="flex flex-col items-center px-4 pt-16 text-center">
        <div className="reveal-zoom relative aspect-[1235/897] w-[min(94vw,26rem)]">
          <Image src={art.wreath} alt="" aria-hidden="true" fill sizes="(min-width: 640px) 416px, 94vw" />
          <p className="absolute inset-[16%_19%_36%_19%] flex items-center justify-center text-xl italic leading-snug text-balance text-navy">
            We would be delighted to celebrate this special day with you!
          </p>
        </div>
      </section>

      {/* Farewell: a last cloud drifting by. */}
      <Parallax as="footer" className="relative flex justify-center overflow-hidden pt-6 pb-12" aria-hidden="true">
        <div className="w-[min(60vw,16rem)]">
          <div className="plx-x" style={rate(80)}>
            <Art src={art.cloud} sizes="(min-width: 640px) 256px, 60vw" />
          </div>
        </div>
      </Parallax>

      <SectionStepper />
    </main>
  );
}
