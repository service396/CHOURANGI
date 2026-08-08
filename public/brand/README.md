# Brand assets

## chourangi-mark.svg  (REQUIRED — not yet supplied)

The Chourangi botanical mark, on its own, without the CHOURANGI wordmark
underneath — the site sets the wordmark in Instrument Serif beside it.

Requirements:

- **Transparent background.** The mark is painted with a CSS mask so it takes
  the surrounding text colour: charcoal on ivory sections, ivory on the
  charcoal, green and timber ones. A cream or white background square will
  render as a solid block.
- **Solid single colour** (black is fine — the colour is replaced at runtime).
- **SVG preferred**, so it stays sharp at every size and in the favicon. A
  transparent PNG at 512px or larger also works for the on-page mark, but the
  favicon really wants the vector.
- **Tightly cropped** to the artwork, with no built-in padding.

Until this file exists the site renders the wordmark alone — nothing breaks.
