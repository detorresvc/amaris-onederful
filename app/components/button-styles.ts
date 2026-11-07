// One pill shape for every action button, so a stack of them lines up exactly:
// same height, border box, padding, type and icon gap. Only the fill differs.
const pill =
  "flex min-h-13 w-full items-center justify-center gap-2 rounded-full border-[1.5px] px-5 font-caps text-[0.85rem] font-bold tracking-[0.1em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue active:translate-y-px";

/** Secondary actions: ivory with a gold edge. */
export const ghostButton = `${pill} border-gold bg-ivory text-navy hover:border-blue hover:bg-white`;

/** The one primary action (RSVP): navy, ringed cream then gold as on the invitation. */
export const primaryButton = `${pill} border-navy bg-navy text-white shadow-[0_0_0_2px_var(--cream),0_0_0_3.5px_var(--gold),0_10px_20px_-8px_rgb(31_59_115/0.45)] hover:border-blue hover:bg-blue`;

/** The primary pill before the form link exists: same shape, quiet fill. */
export const pendingButton = `${pill} cursor-not-allowed border-mist bg-mist text-navy`;
