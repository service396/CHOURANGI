# Brand assets

`public/brand/chourangi-logo-source.png` is the supplied artwork: the full lockup on a
1080x1080 canvas, already drawn in black on full transparency.

The three files the site actually uses are cut from it and tightly trimmed:

| File | Contents | Aspect |
| --- | --- | --- |
| `chourangi-mark.png` | the botanical mark alone | 225 x 297 |
| `chourangi-wordmark.png` | CHOURANGI alone | 742 x 71 |
| `chourangi-lockup.png` | both, as supplied | 742 x 404 |

They live under `src/` and are imported by `Logo.jsx` rather than referenced by
a literal path. A hardcoded `/brand/…` in an inline style is a runtime string
the bundler never rewrites, so it 404s the moment the site is served from a
subpath such as `/CHOURANGI/` on GitHub Pages. Importing lets Vite emit a URL
that is correct wherever the site is deployed.

They are painted as CSS masks over `currentColor`, so the identity takes the
colour of whatever it sits on rather than being locked to black — the page runs
through ivory, parchment, ceramic blue, heritage green and timber, and a fixed
black logo would disappear against half of them. The alpha channel of each file
is the mask, so nothing is processed at runtime.

`public/favicon.png` is the mark in charcoal on the ivory canvas. A bare
black-on-transparent mark is invisible in a dark browser tab bar.

To regenerate after new artwork lands, re-cut from the source with the band
offsets in the commit that added these files.
