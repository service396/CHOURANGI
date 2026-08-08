/**
 * Chourangi asset manifest.
 *
 * Every image on this site is an original asset generated through the Higgsfield
 * MCP for this project. Nothing here is stock photography or a placeholder.
 *
 * Each entry records the Higgsfield job id (the media id), the source aspect
 * ratio it was generated at, the remote CDN URL, and the alt text used in the page.
 *
 * By default images are served from the Higgsfield CDN. Run `npm run vendor:assets`
 * to download every asset into `public/media/` and write `.env.local` with
 * VITE_LOCAL_MEDIA=true, after which the site serves them locally instead.
 */

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_2ySKJ8MEgBvVjIYyNHGj08B4Ecb'

const USE_LOCAL = import.meta.env.VITE_LOCAL_MEDIA === 'true'

/** @type {Record<string, {id: string, stamp: string, ratio: number, alt: string}>} */
const CATALOGUE = {
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
  hilsaMaster: {
    id: '39100413-9ce5-48df-913d-d2df6841f997',
    stamp: '20260808_032206',
    ratio: 3 / 2,
    alt: 'Smoked hilsa on toast at Chourangi: three slices of toast on a blue glazed plate under flaked smoked fish, dark barbecue glaze and black nigella seeds.',
  },
  hilsaWide: {
    id: '3d7757d0-5bd8-4cc4-b188-87bfb0c0ad85',
    stamp: '20260808_032510',
    ratio: 16 / 9,
    alt: 'The smoked hilsa on toast seen wide on the Chourangi table, a cane-backed chair and cream wall soft behind it.',
  },
  hilsaClose: {
    id: '8510814b-9e33-49fa-9d58-7e5ce037eb40',
    stamp: '20260808_032510',
    ratio: 4 / 5,
    alt: 'A close portrait of one slice of smoked hilsa on toast, the flaked fish and dark glaze sharp, the plate falling away behind.',
  },
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

  // ------------------------------------------------------------------ Railway
  railwayMaster: {
    id: '915cff50-e961-4d07-b323-c7cfd6041bda',
    stamp: '20260808_032206',
    ratio: 3 / 2,
    alt: 'Railway lamb curry at Chourangi: slow-braised lamb in a deep russet curry with black cardamom and ginger in a blue glazed bowl, naan beside it.',
  },
  railwayWide: {
    id: '5ddc1c71-3658-467e-a6ed-19995a508cd4',
    stamp: '20260808_032623',
    ratio: 16 / 9,
    alt: 'The railway lamb curry seen wide on the Chourangi table with folded naan and a brass bowl of tamarind.',
  },
  railwayClose: {
    id: '4e7fb8ad-5b08-4f88-abaf-d500ed8db555',
    stamp: '20260808_032623',
    ratio: 4 / 5,
    alt: 'A close portrait of one piece of braised lamb rising out of the curry, a whole black cardamom pod resting against it.',
  },
  railwayOverhead: {
    id: 'f768acc1-a28c-4cfe-b1c1-fc7b35a72581',
    stamp: '20260808_032623',
    ratio: 3 / 2,
    alt: 'A top-down view of the curry bowl on bare oak with naan, tamarind, whole black cardamom, ginger and a glass of chai set apart.',
  },
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
    const file = `${key}.png`
    return [
      key,
      {
        ...entry,
        key,
        file,
        remote: `${CDN}/hf_${entry.stamp}_${entry.id}.png`,
        src: USE_LOCAL ? `/media/${file}` : `${CDN}/hf_${entry.stamp}_${entry.id}.png`,
      },
    ]
  }),
)

/** Look up one asset. Throws loudly rather than rendering a broken image. */
export function img(key) {
  const entry = MEDIA[key]
  if (!entry) throw new Error(`Unknown media key: ${key}`)
  return entry
}

export const MEDIA_KEYS = Object.keys(MEDIA)
