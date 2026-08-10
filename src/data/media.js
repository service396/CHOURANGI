/**
 * Chourangi asset manifest.
 *
 * Two kinds of image live here.
 *
 * PHOTOGRAPHS supplied by the restaurant sit in `src/assets/dishes/` and are
 * imported, so the bundler emits a URL that resolves wherever the site is
 * deployed. These are the real dishes and always outrank a generated stand-in.
 *
 * GENERATED assets were produced through the Higgsfield MCP for this project —
 * no stock, no placeholders. Each records its job id (the media id), the aspect
 * ratio it was generated at, and its CDN URL. They serve from the CDN by
 * default; `npm run vendor:assets` downloads them into `public/media/` and
 * writes VITE_LOCAL_MEDIA=true so they serve locally instead.
 *
 * To swap in a new photograph: drop the file in `src/assets/dishes/`, import it
 * below, and point the entry's `file` at it. Nothing else changes.
 */

import hilsaRealSrc from '../assets/dishes/smoked-hilsa-on-toast.jpg'
import hilsaRealPortraitSrc from '../assets/dishes/smoked-hilsa-on-toast-portrait.jpg'

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_2ySKJ8MEgBvVjIYyNHGj08B4Ecb'

const USE_LOCAL = import.meta.env.VITE_LOCAL_MEDIA === 'true'

/** Real photography, imported so Vite owns the URL. `file` beats `id`. */
const PHOTOGRAPHS = {
  hilsaReal: {
    file: hilsaRealSrc,
    ratio: 4 / 3,
    alt: 'Three rounds of smoked hilsa on crisp discs, laid along a banana leaf across a deep blue glazed Chourangi plate, each scattered with nigella and topped with a micro-herb.',
  },
  hilsaRealPortrait: {
    file: hilsaRealPortraitSrc,
    ratio: 4 / 5,
    alt: 'A close view of the smoked hilsa, the front round sharp against the blue glazed plate, nigella seeds through the fish and a micro-herb on top.',
  },
}

/** @type {Record<string, {id?: string, stamp?: string, ratio: number, alt: string}>} */
const CATALOGUE = {
  ...PHOTOGRAPHS,

  // ---------------------------------------------------------------- Chourangi
  // Generated for the opening section, which has since been removed. Kept so
  // the asset stays one line from reuse rather than being regenerated.
  heroTable: {
    id: 'a26be28d-396d-43d4-834c-9924fb6bce3a',
    stamp: '20260808_032206',
    ratio: 16 / 9,
    alt: 'A laid oak table at Chourangi with blue glazed plates, brass bowls, copper mugs, naan and a dark lamb curry, a cane-backed chair at the edge.',
  },
  heroWide: {
    id: '069d2fef-a516-4b85-86fc-90387da399e0',
    stamp: '20260808_032707',
    ratio: 21 / 9,
    alt: 'A long Chourangi table seen wide, spread with blue glazed plates, brass condiment bowls, chai and warm bread, cane chairs behind.',
  },
  // Not currently placed: the opening section closes on the dish carousel now.
  roomMorning: {
    id: 'df5d40ae-2309-4271-b3ee-27e62f552020',
    stamp: '20260808_032707',
    ratio: 3 / 2,
    alt: 'An empty Chourangi table before service, two cane-backed chairs pulled in and a stack of blue glazed plates in cool morning light.',
  },
  roomEvening: {
    id: 'b96d7a86-7136-4f27-abc7-c7dd1435f7fe',
    stamp: '20260808_032707',
    ratio: 16 / 9,
    alt: 'The Chourangi dining room during evening service, brass pendant lamps over oak tables and cane chairs against cream walls.',
  },
  calcuttaArchive: {
    id: 'd8d65e9b-3132-4fb0-9e2f-acde8255d1fa',
    stamp: '20260808_032707',
    ratio: 3 / 2,
    alt: 'A monochrome reconstruction of a Calcutta street corner in the early twentieth century, colonnaded arcades, a tram and moving figures.',
  },
  londonStreet: {
    id: '9eeec940-4640-4baf-8270-31f2325c52e0',
    stamp: '20260808_032707',
    ratio: 3 / 2,
    alt: 'A quiet central London street at dusk, a restaurant shopfront glowing warm behind tall windows.',
  },
  tableLaid: {
    id: '07162650-fc86-4e04-9d7f-fed39df90ec5',
    stamp: '20260808_032707',
    ratio: 16 / 9,
    alt: 'A single Chourangi table laid for two at dusk, blue glazed plates, folded napkins and a candle, the dining room dark behind.',
  },
  caneWeave: {
    id: 'a0f6172e-8d6b-4671-adad-f22eea1de983',
    stamp: '20260808_032707',
    ratio: 4 / 5,
    alt: 'The hexagonal woven cane back of a bentwood chair in raking light, the dark bent frame curving across one corner.',
  },
  brassFigures: {
    id: '44216785-ab6e-4249-9ccc-2e862d774d7d',
    stamp: '20260808_032707',
    ratio: 3 / 2,
    alt: 'Two small seated brass musician figures with turquoise inlay on a marble ledge, reflected in the dark window glass behind.',
  },

  // -------------------------------------------------------------------- Hilsa
  // Superseded by the supplied photograph: these show slices of toast, not
  // the rounds the dish is actually served as.
  hilsaMaster: {
    id: '39100413-9ce5-48df-913d-d2df6841f997',
    stamp: '20260808_032206',
    ratio: 3 / 2,
    alt: 'Smoked hilsa on toast at Chourangi: three slices of toast on a blue glazed plate under flaked smoked fish, dark barbecue glaze and black nigella seeds.',
  },
  // Superseded by the supplied photograph: these show slices of toast, not
  // the rounds the dish is actually served as.
  hilsaWide: {
    id: '3d7757d0-5bd8-4cc4-b188-87bfb0c0ad85',
    stamp: '20260808_032510',
    ratio: 16 / 9,
    alt: 'The smoked hilsa on toast seen wide on the Chourangi table, a cane-backed chair and cream wall soft behind it.',
  },
  // Superseded by the supplied photograph: these show slices of toast, not
  // the rounds the dish is actually served as.
  hilsaClose: {
    id: '8510814b-9e33-49fa-9d58-7e5ce037eb40',
    stamp: '20260808_032510',
    ratio: 4 / 5,
    alt: 'A close portrait of one slice of smoked hilsa on toast, the flaked fish and dark glaze sharp, the plate falling away behind.',
  },
  // Superseded by the supplied photograph: these show slices of toast, not
  // the rounds the dish is actually served as.
  hilsaOverhead: {
    id: '5428716f-5a53-42db-b37a-8311871c3992',
    stamp: '20260808_032741',
    ratio: 3 / 2,
    alt: 'A top-down view of the smoked hilsa plate on bare oak, a brass bowl of sauce and a dish of nigella set apart from it.',
  },
  hilsaFleshMacro: {
    id: 'ec0ac110-570c-4359-a2d5-c1aa1a33168f',
    stamp: '20260808_032510',
    ratio: 4 / 5,
    alt: 'A macro of the smoked hilsa itself, pale golden flakes separating into fibres with dark glaze pooling between them.',
  },
  nigellaMacro: {
    id: 'b3e21bb7-dc28-47c8-91cb-956266e1f3b9',
    stamp: '20260808_032510',
    ratio: 3 / 2,
    alt: 'Matte black nigella seeds spilling from a small brass dish across bare oak grain.',
  },
  // Superseded by the supplied photograph: these show slices of toast, not
  // the rounds the dish is actually served as.
  toastMacro: {
    id: '047e0835-5c51-4dc5-96d3-4c3a35244ce4',
    stamp: '20260808_032510',
    ratio: 4 / 5,
    alt: 'A macro of the toasted bread edge, open crumb and dark char lines across the crust.',
  },
  smokeDetail: {
    id: 'af5d098c-9ab5-4109-b1b0-fbcbcdc140af',
    stamp: '20260808_032510',
    ratio: 3 / 2,
    alt: 'A blackened smoking pan on oak, a single thin thread of smoke rising and dissolving into shadow.',
  },
  hilsaCulture: {
    id: 'decdda72-3fef-438c-a159-9077ac9a040b',
    stamp: '20260808_032510',
    ratio: 3 / 2,
    alt: 'A whole fresh hilsa on newspaper beside a boti blade on a worn table in a Kolkata home, shuttered window light falling across it.',
  },
  // Superseded by the supplied photograph: these show slices of toast, not
  // the rounds the dish is actually served as.
  hilsaFinal: {
    id: '76900810-d787-40fa-9942-ea516f595f16',
    stamp: '20260808_032510',
    ratio: 4 / 5,
    alt: 'The finished smoked hilsa on toast alone on the oak table, precisely plated with clean nigella placement.',
  },

  // ------------------------------------------------------------------ Lobster
  lobsterMaster: {
    id: 'ee632b83-2a56-4d60-a53d-8a944240724d',
    stamp: '20260808_032206',
    ratio: 3 / 2,
    alt: 'Gondhoraj pepper garlic lobster at Chourangi: half a lobster in its coral shell over pale ghee rice in a blue glazed bowl, a halved Gondhoraj lime beside it.',
  },
  lobsterWide: {
    id: 'f760635f-7318-4b87-9141-17dff6a693d5',
    stamp: '20260808_032547',
    ratio: 16 / 9,
    alt: 'The Gondhoraj lobster seen wide on the Chourangi table with a copper vessel and cane chair soft behind it.',
  },
  lobsterClose: {
    id: 'e871ad64-422c-4b48-9651-f6c9f040db1d',
    stamp: '20260808_032547',
    ratio: 4 / 5,
    alt: 'A close portrait of the lobster tail meat under crushed pepper, sliced garlic and fine green lime zest.',
  },
  lobsterOverhead: {
    id: '8273e6f2-6b05-494c-b1f7-3741903411d1',
    stamp: '20260808_032547',
    ratio: 3 / 2,
    alt: 'A top-down view of the lobster bowl on bare oak with a halved Gondhoraj lime, a brass bowl of peppercorns and a copper mug set apart.',
  },
  gondhorajMacro: {
    id: '24595a5b-5a2c-4311-979e-d60c869a3035',
    stamp: '20260808_032547',
    ratio: 4 / 5,
    alt: 'A macro of Gondhoraj lime skin, thick and pitted with oil glands, a torn edge showing white pith and a bead of released oil.',
  },
  gondhorajPressed: {
    id: 'eb0f3c4b-2693-418e-b994-b9b9a90fc27b',
    stamp: '20260808_032547',
    ratio: 3 / 2,
    alt: 'A Gondhoraj lime cut in half on oak beside a small pile of pared zest and a worn brass zester.',
  },
  pepperGarlic: {
    id: 'c6179014-7317-4fb6-9925-0ab9b1028064',
    stamp: '20260808_032547',
    ratio: 3 / 2,
    alt: 'Coarsely crushed black peppercorns and thin slices of raw garlic scattered across oak grain.',
  },
  gheeRiceMacro: {
    id: '82890393-1d16-4fa4-b9dd-595546c248f0',
    stamp: '20260808_032547',
    ratio: 4 / 5,
    alt: 'A macro of ghee rice, long separated basmati grains with a soft buttery sheen and a single slice of golden garlic.',
  },
  gondhorajCulture: {
    id: 'bad6458b-e212-4be3-8a8b-3759aca08620',
    stamp: '20260808_032547',
    ratio: 3 / 2,
    alt: 'An everyday Bengali meal at home: plain rice on a white plate with a wedge of Gondhoraj lime, salt and a green chilli on the rim.',
  },
  lobsterFinal: {
    id: '3a63fab0-98fe-498f-87c3-290cc5b230ef',
    stamp: '20260808_032547',
    ratio: 4 / 5,
    alt: 'The finished Gondhoraj lobster alone on the oak table, the half lobster sitting proud of the ghee rice.',
  },

  // ------------------------------------------- Railway, from the supplied photo
  // Generated image-to-image from the restaurant's own photograph of the dish
  // (media 21769596-9bbe-4cda-a0b4-05fd0cae84fa), so the brass katori, the
  // bone-in meat, the marrow bones, the coriander and the hessian are the real
  // ones. The book in the original was removed at the prompt.
  railwayBrassPlate: {
    id: 'f60211ab-9f19-4695-bb83-42944bbf44d0',
    stamp: '20260810_093621',
    ratio: 4 / 5,
    alt: 'The railway curry in an aged brass bowl on woven hessian, bone-in meat under fresh coriander with two marrow bones standing out of the sauce.',
  },
  railwayBrassWide: {
    id: '4734d906-14ef-4584-9be3-756e937754a7',
    stamp: '20260810_093621',
    ratio: 16 / 9,
    alt: 'The brass bowl of railway curry seen wide on the hessian cloth, a small brass bowl and folded cloth soft behind it.',
  },
  railwayBrassClose: {
    id: 'e96d4d66-eaa6-4ff9-af7b-97a9a46f236a',
    stamp: '20260810_093621',
    ratio: 4 / 5,
    alt: 'A close portrait of one bone-in piece of the railway curry with a marrow bone beside it, the meat falling away under dark spice-stained sauce.',
  },
  railwayBrassOverhead: {
    id: 'eabb5e77-1690-4ae9-b589-9a87fa829ff3',
    stamp: '20260810_093621',
    ratio: 3 / 2,
    alt: 'The brass bowl of railway curry from directly above, set off-centre on hessian with a brass spoon and loose whole spices apart from it.',
  },
  railwayBrassMacro: {
    id: 'a2f93899-6410-4e4b-aee2-518d2e2d1697',
    stamp: '20260810_093621',
    ratio: 4 / 5,
    alt: 'A macro of the braised meat pulled from the bone, long fibres separating with spice-heavy sauce clinging between them.',
  },

  // ------------------------------------------------------------------ Railway
  // Superseded by the photograph-derived set: this shows boneless lamb in a
  // blue ceramic bowl, not the bone-in dish in the brass katori.
  railwayMaster: {
    id: '915cff50-e961-4d07-b323-c7cfd6041bda',
    stamp: '20260808_032206',
    ratio: 3 / 2,
    alt: 'Railway lamb curry at Chourangi: slow-braised lamb in a deep russet curry with black cardamom and ginger in a blue glazed bowl, naan beside it.',
  },
  // Superseded by the photograph-derived set: this shows boneless lamb in a
  // blue ceramic bowl, not the bone-in dish in the brass katori.
  railwayWide: {
    id: '5ddc1c71-3658-467e-a6ed-19995a508cd4',
    stamp: '20260808_032623',
    ratio: 16 / 9,
    alt: 'The railway lamb curry seen wide on the Chourangi table with folded naan and a brass bowl of tamarind.',
  },
  // Superseded by the photograph-derived set: this shows boneless lamb in a
  // blue ceramic bowl, not the bone-in dish in the brass katori.
  railwayClose: {
    id: '4e7fb8ad-5b08-4f88-abaf-d500ed8db555',
    stamp: '20260808_032623',
    ratio: 4 / 5,
    alt: 'A close portrait of one piece of braised lamb rising out of the curry, a whole black cardamom pod resting against it.',
  },
  // Superseded by the photograph-derived set: this shows boneless lamb in a
  // blue ceramic bowl, not the bone-in dish in the brass katori.
  railwayOverhead: {
    id: 'f768acc1-a28c-4cfe-b1c1-fc7b35a72581',
    stamp: '20260808_032623',
    ratio: 3 / 2,
    alt: 'A top-down view of the curry bowl on bare oak with naan, tamarind, whole black cardamom, ginger and a glass of chai set apart.',
  },
  // Superseded by the photograph-derived set: this shows boneless lamb in a
  // blue ceramic bowl, not the bone-in dish in the brass katori.
  lambMacro: {
    id: '662577a2-e71e-446e-a1e9-332f627aa2e9',
    stamp: '20260808_032623',
    ratio: 4 / 5,
    alt: 'A macro of braised lamb pulled apart, long tender fibres separating with spice-flecked sauce clinging between them.',
  },
  cardamomMacro: {
    id: 'dab3b084-a2da-470d-b676-0beab407d42d',
    stamp: '20260808_032623',
    ratio: 3 / 2,
    alt: 'Three whole black cardamom pods on oak, ridged and papery, one split to show dark resinous seeds.',
  },
  fennelGinger: {
    id: '7a3bf47f-342d-41ae-91c7-937a1a92c109',
    stamp: '20260808_032623',
    ratio: 3 / 2,
    alt: 'Fresh ginger broken open beside a loose heap of pale green fennel seeds on bare oak.',
  },
  tamarindMacro: {
    id: 'b80b0639-a499-44b6-a9df-47fd71a3b7eb',
    stamp: '20260808_032623',
    ratio: 4 / 5,
    alt: 'A macro of pressed tamarind pulp broken open, sticky mahogany strands stretching where it was torn.',
  },
  railwayCulture: {
    id: '0d37dc4c-b18b-41d5-ba7d-0337a6ba94a2',
    stamp: '20260808_032623',
    ratio: 3 / 2,
    alt: 'A reconstruction of an Indian railway dining carriage in motion, a laid window table and the landscape outside blurred by movement.',
  },
  // Superseded by the photograph-derived set: this shows boneless lamb in a
  // blue ceramic bowl, not the bone-in dish in the brass katori.
  railwayFinal: {
    id: '1c24a30f-6160-415f-9069-45cc912c32ec',
    stamp: '20260808_032623',
    ratio: 4 / 5,
    alt: 'The finished railway lamb curry alone on the oak table, defined pieces of lamb sitting proud of the sauce.',
  },
}

/** Every asset, resolved to a usable src plus its metadata. */
export const MEDIA = Object.fromEntries(
  Object.entries(CATALOGUE).map(([key, entry]) => {
    // A supplied photograph carries its own bundled URL and needs no CDN path.
    if (entry.file) return [key, { ...entry, key, src: entry.file, remote: entry.file }]

    const file = `${key}.png`
    const remote = `${CDN}/hf_${entry.stamp}_${entry.id}.png`
    return [key, { ...entry, key, file, remote, src: USE_LOCAL ? `/media/${file}` : remote }]
  }),
)

/** Look up one asset. Throws loudly rather than rendering a broken image. */
export function img(key) {
  const entry = MEDIA[key]
  if (!entry) throw new Error(`Unknown media key: ${key}`)
  return entry
}

export const MEDIA_KEYS = Object.keys(MEDIA)
