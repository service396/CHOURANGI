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

/**
 * Real photography, imported so Vite owns the URL. `file` beats `id`.
 *
 * These are the reference frames the Hilsa chapter's enhanced set was generated
 * from. They are no longer rendered — the enhanced set holds the same dish under
 * better light — but they stay here as the source of truth for that chapter.
 */
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

  // --------------------------------------------- Hilsa, from the supplied photo
  // Generated image-to-image from the restaurant's own photograph
  // (src/assets/dishes/smoked-hilsa-on-toast.jpg, imported as media
  // a323f9ce-c6be-45c1-b4af-cb24c2aec20c). The dish is held exactly: the blue
  // glazed oval, the three crisp rounds, the shredded smoked hilsa, the nigella,
  // the micro-herb, the banana leaf. Only the photography changed — the bright
  // cluttered daylight behind the original gives way to a warm interior.
  hilsaEnhPlate: {
    id: 'a81ef440-44a8-4c15-a7cc-16ec668dfe61',
    stamp: '20260810_095455',
    ratio: 4 / 5,
    alt: 'Smoked hilsa on toast at Chourangi: three crisp rounds under mounds of shredded smoked hilsa on a deep blue glazed oval plate, nigella through the fish and a micro-herb on each.',
  },
  hilsaEnhWide: {
    id: 'e0927bda-c90b-4dce-bf27-86f5458e2b97',
    stamp: '20260810_095455',
    ratio: 16 / 9,
    alt: 'The smoked hilsa plate seen wide on a warm stone table, a brass bowl and folded napkin soft beside it and the restaurant falling into shadow behind.',
  },
  hilsaEnhClose: {
    id: '0e8f5c3e-1149-4c4f-a521-5c52579c3a88',
    stamp: '20260810_095455',
    ratio: 4 / 5,
    alt: 'A close portrait of one round of smoked hilsa, the strands of fish and the nigella sharp, the micro-herb standing at the top.',
  },
  hilsaEnhOverhead: {
    id: '43383015-47ab-4f05-9cfa-d5c74313c0c6',
    stamp: '20260810_095455',
    ratio: 3 / 2,
    alt: 'The smoked hilsa plate from directly above, set off-centre with a brass bowl and a scatter of nigella seeds apart from it.',
  },
  hilsaEnhMacro: {
    id: 'adbc942d-4c00-4f26-a979-541cae782c20',
    stamp: '20260810_095455',
    ratio: 4 / 5,
    alt: 'A macro of the smoked hilsa itself, fine strands interleaving with spiced oil gathering between them and nigella seeds resting on the surface.',
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
  // Superseded by hilsaEnhMacro, which is the real fish rather than an invention.
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
  // Built up over three image-to-image rounds, each one taking the previous
  // frame plus the restaurant's own photograph of a boti (media
  // 2aa28065-a9a6-42a1-9b6e-09b5da5fbf26) so the tool keeps the shape of the
  // real object rather than of a description of it. The fish moved from
  // newspaper onto a brass thala and grew to a full two and a half kilos; this
  // round fixes the boti, which had come out the size of a hand tool rather
  // than the floor tool a cook sits on, and relights the scene. Four lighting
  // treatments were made; the others sit here unplaced and swap in with a one
  // line change.
  hilsaCulture: {
    id: 'caa3918e-0a22-4ecb-95d1-49b61c21c3ea',
    stamp: '20260810_124308',
    ratio: 3 / 2,
    alt: 'A whole hilsa of about two and a half kilos on a broad brass thala, a full floor boti standing beside it with its curved blade rising above the plate, a low shaft of morning sun raking across the red oxide floor.',
  },
  hilsaCultureLowKey: {
    id: 'd78228f1-1564-459c-b810-f83fc19ff2f1',
    stamp: '20260810_124308',
    ratio: 3 / 2,
    alt: 'A low-key still life: one pool of warm daylight on a brass thala and the silver flanks of a great hilsa, the tall blade of a boti standing in shadow behind.',
  },
  hilsaCultureAfternoon: {
    id: '36d8d05a-f548-4430-99ed-40f1b1bc4591',
    stamp: '20260810_124308',
    ratio: 3 / 2,
    alt: 'Late afternoon light through a shuttered window drawing long shadows of a boti and a brass thala across a swept red oxide floor, a whole hilsa on the brass.',
  },
  hilsaCultureBacklit: {
    id: '3cc196e8-2448-484c-83ae-e01892b85afc',
    stamp: '20260810_124308',
    ratio: 3 / 2,
    alt: 'A backlit hilsa on brass, its silver flanks and the curved edge of the boti traced in daylight while their forms stay dark and sculptural.',
  },
  // Superseded: the boti came out far smaller than the fish, and the light was
  // even rather than cinematic.
  hilsaCultureFlat: {
    id: '97ba1bf7-52dd-4137-a10b-e217e8343670',
    stamp: '20260810_123620',
    ratio: 3 / 2,
    alt: 'A whole hilsa of about two and a half kilos laid on a broad hand-beaten brass thala on a swept red oxide floor, the curved blade of a boti standing beside it and a brass water pot against the lime-washed wall behind.',
  },
  hilsaCultureRaised: {
    id: 'dde4daa1-9e1f-4277-b1a9-e6310d56554d',
    stamp: '20260810_123620',
    ratio: 3 / 2,
    alt: 'A raised three-quarter view of a large hilsa filling a brass thala, its tail curving over the rim, with a boti and a brass kalsi set back against a pale green wall.',
  },
  hilsaCultureClose: {
    id: '59ca3f7f-98c6-4df7-a2eb-5c3c8a0ed5d7',
    stamp: '20260810_123620',
    ratio: 3 / 2,
    alt: 'A close, low view of an imposing hilsa on an antique brass thala, the curved blade of a boti rising softly out of focus behind it.',
  },
  hilsaCultureWide: {
    id: 'c8572023-76db-41b9-9dda-97fd79cd6ca3',
    stamp: '20260810_123620',
    ratio: 3 / 2,
    alt: 'A wide, formal still life of a hilsa on a brass thala and a boti on a swept red oxide floor, a band of daylight falling from an open shuttered window.',
  },
  // Superseded: the fish lay on newspaper rather than on brass, and read as a
  // market-size hilsa rather than a whole one of two and a half kilos.
  hilsaCultureNewsprint: {
    id: '1f1848ca-2ff3-4c95-85aa-8e575f02ccfc',
    stamp: '20260810_115645',
    ratio: 3 / 2,
    alt: 'A boti on the swept floor of a clean Bengali kitchen, its curved blade rising from the wooden plank, a whole fresh hilsa waiting on newspaper beside it.',
  },
  hilsaCultureKitchen: {
    id: 'e15032de-8bf9-49ed-915f-1bb0e0770820',
    stamp: '20260810_115646',
    ratio: 3 / 2,
    alt: 'A clean traditional Bengali kitchen with a boti resting on the floor beside a whole hilsa on newspaper, green shutters open to morning light.',
  },
  hilsaCultureStill: {
    id: 'de9a992b-3680-40a5-a6cc-b0d57676e406',
    stamp: '20260810_115645',
    ratio: 3 / 2,
    alt: 'A still life of a boti on a swept kitchen floor with a whole hilsa on newspaper and a brass bowl of water, generous empty floor around them.',
  },
  // The first attempt: a flat blade on a table, which is a dao, not a boti.
  hilsaCultureDao: {
    id: 'decdda72-3fef-438c-a159-9077ac9a040b',
    stamp: '20260808_032510',
    ratio: 3 / 2,
    alt: 'A whole fresh hilsa on newspaper beside a flat blade on a worn table in a Kolkata home, shuttered window light falling across it.',
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

  // ---------------------------------------------------------------- drawings
  // Pen-and-ink marginalia, black line on white, drawn to a single house style
  // so they read as one hand. They are composited with mix-blend-mode rather
  // than cut out, so the white ground drops away on any surface. Each one
  // belongs to a specific section; see Marginalia usage.
  inkHilsa: {
    id: 'c8836228-0170-4d38-bdd5-d3dd901f3360',
    stamp: '20260810_125134',
    ratio: 4 / 5,
    alt: '',
  },
  inkPlatter: {
    id: 'c32f36c5-a4a9-4ff8-8cc4-f5e0ef3b3b9e',
    stamp: '20260810_125134',
    ratio: 4 / 5,
    alt: '',
  },
  inkGondhoraj: {
    id: '429b9ddc-d0bf-4e8b-a11e-11106157d19d',
    stamp: '20260810_125134',
    ratio: 4 / 5,
    alt: '',
  },
  inkSpicePile: {
    id: '3e07f8d9-4fb0-4b11-910d-4242c1433024',
    stamp: '20260810_125134',
    ratio: 4 / 5,
    alt: '',
  },
  inkTiffin: {
    id: 'de5fbf1d-3c0f-4ee7-91d2-06918b8cc37a',
    stamp: '20260810_125134',
    ratio: 4 / 5,
    alt: '',
  },
  // Unplaced spare, in the same hand.
  inkSpiceBowls: {
    id: '50b4d221-4ff7-4d31-8291-3c2a654a956d',
    stamp: '20260810_125134',
    ratio: 4 / 5,
    alt: '',
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
