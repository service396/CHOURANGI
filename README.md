# Chourangi — Three dishes, three fragments of Calcutta

An editorial landing page for **Chourangi**, 3 Old Quebec Street, London. Three dishes
are told through the same four movements — **dish → ingredient → culture →
interpretation** — around one idea: *every dish has a Calcutta before Chourangi*.

There is no video anywhere on the page. All motion is scroll and slideshow choreography.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

Deployed at **https://service396.github.io/CHOURANGI/** — `.github/workflows/deploy.yml`
rebuilds and republishes on every push.

## Photography

Every image is an original asset generated for this project through the Higgsfield MCP.
There is no stock photography, no Unsplash and no placeholder anywhere in the page.

Each dish was built from one approved master image, and the rest of that dish's set was
generated image-to-image from that master so plating, crockery, garnish, lighting
direction and colour grade stay identical across the chapter.

`src/data/media.js` is the single manifest. Each entry records the Higgsfield job id
(the media id), the aspect ratio it was generated at, the CDN URL and the alt text.

By default images are served from the Higgsfield CDN. To vendor them into the repo:

```bash
npm run vendor:assets
```

That downloads every asset into `public/media/` and writes `.env.local` with
`VITE_LOCAL_MEDIA=true`, after which the site serves them locally. It needs network
access to `d8j0ntlcm91z4.cloudfront.net`.

## Structure

```
src/
  data/
    content.js      every word on the page, as a document
    media.js        the asset manifest and src resolver
  lib/
    motion.js       easings, durations, the shared reveal, GSAP scope helper
    useSmoothScroll.js   Lenis wired into the GSAP ticker
  assets/brand/     the Chourangi mark, wordmark and lockup
  components/
    Chrome.jsx      nav, chapter rail, custom cursor, paper grain
    Logo.jsx        the identity, masked so it takes the surrounding colour
    DishSlideshow.jsx    the chapter opener
    primitives.jsx  Figure, Lines, Meta, Body, Caption, ArrowLink
  sections/
    DishSection, IngredientSection, CultureSection,
    InterpretationSection, About, Feedback, Closing
```

The four chapter section types each carry three layouts, selected by chapter index, so
Hilsa, Gondhoraj and Railway never repeat the same composition.

## Feedback form

`Leave your Thoughts` posts JSON to `FEEDBACK.endpoint` in `src/data/content.js`.
That field ships **empty**, which is the one thing standing between the form and
working. Paste a handler that accepts a JSON POST — a Formspree endpoint
(`https://formspree.io/f/xxxx`), Web3Forms, or your own — and submissions start
arriving:

```js
export const FEEDBACK = {
  endpoint: 'https://formspree.io/f/your-id',
  ...
```

The payload is `{ name, about, thoughts, page }`.

While the endpoint is empty the form validates and behaves normally but does
**not** thank anyone on submit. It says plainly that notes are not being
collected, rather than swallowing a guest's words behind a success message.

## Design system

| Token | Value | Use |
| --- | --- | --- |
| Ivory | `#F3EEE5` | primary canvas |
| Parchment | `#DED4C4` | Hilsa culture |
| Charcoal | `#232321` | text, Railway chapter opener |
| Heritage green | `#29483D` | Gondhoraj culture |
| Rattan | `#B18D67` | rules, metadata |
| Dark timber | `#43372D` | Railway culture, closing, footer |
| Aged brass | `#A98757` | sparing accents |
| Ceramic blue | `#173A4A` | metadata, chapter numbers, Gondhoraj opener |

Instrument Serif carries story; Inter carries information. Both are bundled through
`@fontsource`, so the page makes no third-party font request at runtime.

## Motion

- **Lenis** at `lerp: 0.11` with a `1.05` wheel multiplier, driven by the GSAP ticker.
- **GSAP + ScrollTrigger** for reveals, the slideshow expansion, parallax, the pinned
  About column and the scroll-linked image cuts.
- **Slideshows** open from `scale: 0.72` with a clip-path expansion, then cycle on hard
  cuts, horizontal wipes and vertical crop shifts at 300–500ms. Autoplay is 3.2s, pauses
  on hover and focus, and is fully keyboard operable.
- `prefers-reduced-motion` disables Lenis, parallax, the custom cursor and autoplay, and
  renders every masked element in its final state.
