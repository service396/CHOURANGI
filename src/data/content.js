/**
 * Every word on the page. Kept out of the components so the copy can be read,
 * edited and proofed as a document rather than hunted through JSX.
 */

export const SITE = {
  name: 'Chourangi',
  city: 'London',
  address: '3 Old Quebec Street',
  // Confirm against the live Chourangi site before launch.
  siteUrl: 'https://www.chourangi.co.uk/',
}

// Stories is rendered separately as a dropdown over the three dishes.
// `short` is used below the md breakpoint, where full labels collide.
// No booking link: this page is read at the table, in the restaurant.
export const NAV = [
  { label: 'About', short: 'About', href: '#about' },
  { label: 'Leave your Thoughts', short: 'Thoughts', href: '#thoughts' },
]

export const CHAPTERS = [
  { id: 'hilsa', number: '01', label: 'Hilsa' },
  { id: 'gondhoraj', number: '02', label: 'Gondhoraj' },
  { id: 'railway', number: '03', label: 'Railway' },
  { id: 'about', number: '04', label: 'Chourangi' },
  { id: 'thoughts', number: '05', label: 'Thoughts' },
]

export const HILSA = {
  id: 'hilsa',
  number: '01',
  slug: 'Hilsa',
  card: {
    title: 'Smoked Hilsa on Toast',
    line: 'Mashed hilsa · barbecue sauce · nigella',
    image: 'hilsaEnhPlate',
  },
  slideshow: {
    counter: '01 / Three dishes',
    title: ['Smoked', 'Hilsa', 'on Toast'],
    line: 'Mashed hilsa · barbecue sauce · nigella',
    // Generated image-to-image from the restaurant's photograph of the dish,
    // so the plating is the real one under better light.
    slides: ['hilsaEnhWide', 'hilsaEnhPlate', 'hilsaEnhOverhead', 'hilsaEnhMacro', 'nigellaMacro'],
  },
  dish: {
    meta: '01.1 / Dish',
    headline: ['Smoked Hilsa', 'on Toast'],
    body: [
      'Hilsa is one of Bengal’s most recognisable flavours. Rich, distinctive and deeply familiar, it is a fish that has always carried far more than taste alone.',
      'At Chourangi, that familiar flavour takes an unexpected form. The hilsa is smoked, mashed and layered onto toast, creating something immediately recognisable in spirit, yet completely different in presentation.',
    ],
    statement: ['A Bengali favourite,', 'seen through a new frame.'],
    images: { primary: 'hilsaEnhClose', secondary: 'hilsaEnhMacro' },
  },
  ingredient: {
    meta: '01.2 / Ingredient',
    title: 'Hilsa',
    headline: ['Few ingredients occupy', 'the Bengali imagination', 'quite like hilsa.'],
    body: [
      'Its richness, delicate flesh and unmistakable flavour have made it part of lunches, celebrations and conversations across generations. It is a fish people have opinions about, memories around and very particular ways of eating.',
      'Here, smoking deepens that naturally rich character, while nigella brings a familiar Bengali aromatic note. Barbecue sauce introduces sweetness, smoke and acidity around it.',
    ],
    statement: ['The result remains unmistakably hilsa,', 'but with a different rhythm.'],
    images: [
      { key: 'hilsaEnhMacro', caption: 'Smoked, then broken by hand' },
      { key: 'nigellaMacro', caption: 'Nigella / kalonji' },
      { key: 'smokeDetail', caption: 'Smoke, before it meets the fish' },
    ],
  },
  culture: {
    meta: '01.3 / Culture',
    headline: ['A taste Bengal', 'never treats casually.'],
    body: [
      'Hilsa has never been simply another fish on the Bengali table.',
      'It belongs to ritual, season, family preference and memory. Recipes change from home to home, but the affection rarely does.',
      'That cultural familiarity is what gives the dish its tension. Chourangi starts with something deeply rooted in Bengal and removes it from the format in which you expect to encounter it.',
    ],
    statement: ['The memory remains.', 'The form changes.'],
    image: 'hilsaCulture',
    caption: 'A whole hilsa at home in Kolkata, before anything is decided about it.',
    tone: 'parchment',
  },
  interpretation: {
    meta: '01.4 / Interpretation',
    headline: ['From Bengali table', 'to Chourangi toast.'],
    body: [
      'Chourangi takes the richness of hilsa and gives it the ease of something almost informal.',
      'Smoked and mashed, the fish becomes spreadable and generous. Toast gives the dish structure and crunch. Nigella reconnects it with the flavours of Bengal, while barbecue sauce pushes the smoke into a more contemporary direction.',
    ],
    statement: ['Nothing attempts to disguise the hilsa.'],
    coda: 'The presentation simply gives a familiar flavour permission to behave differently.',
    image: 'hilsaEnhPlate',
  },
}

export const GONDHORAJ = {
  id: 'gondhoraj',
  number: '02',
  slug: 'Gondhoraj',
  card: {
    title: 'Gondhoraj Pepper Garlic Lobster',
    line: 'Gondhoraj · garlic · pepper · ghee rice',
    image: 'lobsterMaster',
  },
  slideshow: {
    counter: '02 / Three dishes',
    title: ['Gondhoraj', 'Pepper Garlic', 'Lobster'],
    line: 'Gondhoraj · garlic · pepper · ghee rice',
    slides: ['lobsterWide', 'lobsterClose', 'lobsterOverhead', 'gondhorajMacro', 'gheeRiceMacro'],
  },
  dish: {
    meta: '02.1 / Dish',
    headline: ['Gondhoraj Pepper', 'Garlic Lobster'],
    lead: 'Sweet lobster. Garlic. Pepper. Ghee rice.',
    turn: ['And then comes the ingredient', 'that changes everything.'],
    body: [
      'Gondhoraj lime brings the unmistakable fragrance of Bengal into a dish built around richness. Bright, floral and intensely aromatic, it cuts through the lobster and gives the plate its defining character.',
    ],
    statement: ['Indulgent,', 'but never heavy.'],
    images: { primary: 'lobsterClose', secondary: 'lobsterWide' },
  },
  ingredient: {
    meta: '02.2 / Ingredient',
    title: 'Gondhoraj',
    headline: ['Before Gondhoraj reaches', 'the palate,', 'it reaches the nose.'],
    body: [
      'Its fragrance is what makes it unmistakable.',
      'Across Bengal, the lime is often used with remarkable restraint. A squeeze over rice. A little zest. Sometimes simply the aroma released from its skin is enough to transform what is on the plate.',
      'Chourangi uses that same quality here.',
      'Against garlic, pepper, lobster and ghee, Gondhoraj acts almost like a lift of fresh air, bringing brightness to ingredients that are naturally rich.',
    ],
    hero: 'gondhorajMacro',
    supports: [
      { key: 'gondhorajPressed', caption: 'Halved, then pressed' },
      { key: 'pepperGarlic', caption: 'Pepper and garlic' },
    ],
  },
  culture: {
    meta: '02.3 / Culture',
    headline: ['The fragrance', 'of a Bengali meal.'],
    body: [
      'Some flavours announce themselves loudly.',
      'Gondhoraj rarely needs to.',
      'Its presence at a Bengali table can be surprisingly simple, but its aroma immediately changes the experience of the meal. It belongs to the small sensory details that make food feel like home.',
      'That makes it particularly interesting beside lobster.',
    ],
    contrast: [
      ['One ingredient speaks', 'of familiarity.'],
      ['The other carries', 'a sense of occasion.'],
    ],
    coda: 'At Chourangi, they meet without either losing its character.',
    image: 'gondhorajCulture',
    caption: 'Rice, salt, a green chilli and a wedge of Gondhoraj. An ordinary lunch in Bengal.',
    tone: 'green',
  },
  interpretation: {
    meta: '02.4 / Interpretation',
    headline: ['A Bengali accent', 'on lobster.'],
    body: [
      'Rather than turning the lobster into a heavily spiced curry, Chourangi allows the ingredient to remain the centre of the plate.',
    ],
    sequence: [
      'Pepper brings warmth.',
      'Garlic brings depth.',
      'Gondhoraj provides freshness and perfume.',
    ],
    coda: 'Underneath, ghee rice absorbs the juices and brings everything together.',
    statement: ['Luxurious but familiar.', 'Rich but fragrant.', 'Generous without becoming excessive.'],
    image: 'lobsterFinal',
  },
}

export const RAILWAY = {
  id: 'railway',
  number: '03',
  slug: 'Railway',
  card: {
    title: 'Railway Lamb Curry',
    line: 'Braised lamb · black cardamom · fennel · tamarind · ginger',
    image: 'railwayBrassPlate',
  },
  slideshow: {
    counter: '03 / Three dishes',
    title: ['Railway', 'Lamb', 'Curry'],
    line: 'Braised lamb · black cardamom · fennel · tamarind · ginger',
    // Built from the restaurant's own photograph of the dish. The generated
    // plating shots this replaced showed boneless lamb in blue ceramic.
    slides: ['railwayBrassWide', 'railwayBrassClose', 'cardamomMacro', 'railwayBrassOverhead', 'railwayCulture'],
  },
  dish: {
    meta: '03.1 / Dish',
    headline: ['Railway Lamb Curry'],
    body: [
      'A slow braise built around warmth rather than fire.',
      'Tender lamb is cooked with black cardamom, fennel, tamarind and ginger, creating a curry that moves between smoky spice, gentle sweetness and acidity.',
    ],
    statement: ['It is hearty food', 'with a sense of movement behind it.'],
    coda: 'A dish whose very name carries the romance of the railway.',
    images: { primary: 'railwayBrassClose', secondary: 'railwayBrassMacro' },
  },
  ingredient: {
    meta: '03.2 / Ingredient',
    title: 'Black Cardamom',
    headline: ['Smoke.', 'Earth.', 'Depth.'],
    body: [
      'Black cardamom does not disappear quietly into a curry.',
      'It brings smoke, earthiness and depth.',
      'Its flavour sits naturally beside slow-cooked meat, giving the lamb a darker, more savoury backbone. Fennel softens that intensity with sweetness, ginger introduces warmth and tamarind cuts through the richness.',
    ],
    statement: ['Rather than one dominant spice,', 'the curry is built through layers.'],
    coda: 'The lamb holds them together.',
    layers: [
      { key: 'cardamomMacro', label: 'Black cardamom', note: 'Smoke, dried and resinous' },
      { key: 'fennelGinger', label: 'Fennel & ginger', note: 'Sweetness, then warmth' },
      { key: 'tamarindMacro', label: 'Tamarind', note: 'A clean sour edge' },
      { key: 'railwayBrassMacro', label: 'Braised lamb', note: 'Fibres that give way' },
    ],
  },
  culture: {
    meta: '03.3 / Culture',
    headline: ['Food made', 'for the journey.'],
    body: [
      'Railway food occupies a particular place in the Indian imagination.',
      'It is associated with long journeys, dining cars, station platforms and meals eaten somewhere between departure and destination.',
      'Railway-style curries became part of that travelling food culture: robust, comforting preparations designed around deeply cooked meat and spices that carried well.',
    ],
    statement: ['The nostalgia is not necessarily', 'for one recipe.'],
    closing: ['It is for the feeling of eating', 'while the landscape continues', 'beyond the window.'],
    image: 'railwayCulture',
    caption: 'A dining carriage in motion. A cinematic reconstruction, not an archival photograph.',
    tone: 'charcoal',
  },
  interpretation: {
    meta: '03.4 / Interpretation',
    headline: ['The journey,', 'replated.'],
    body: [
      'Chourangi keeps the generosity and warmth associated with a railway curry but gives the flavours greater definition.',
    ],
    sequence: [
      'The lamb is braised until tender rather than overwhelmed by gravy.',
      'Black cardamom gives smoke.',
      'Fennel provides sweetness.',
      'Tamarind creates a clean sour edge.',
      'Ginger carries warmth through the finish.',
    ],
    statement: ['It feels travelled,', 'but not dated.'],
    image: 'railwayBrassPlate',
  },
}

export const CHAPTER_LIST = [HILSA, GONDHORAJ, RAILWAY]

export const ABOUT = {
  meta: '04 / Chourangi',
  headline: ['Three hundred years.', 'Still evolving.'],
  body: [
    'Calcutta was never shaped by one culture, and neither was its food.',
    'Over centuries, Bengali traditions met Mughal influences, European kitchens, Chinese communities and countless people who arrived in the city carrying their own ingredients, techniques and habits. What emerged was not a single cuisine, but an ever-evolving way of eating.',
    'That spirit sits at the heart of Chourangi.',
    'Under the guidance of Anjan Chatterjee, the restaurant looks back at Calcutta not to recreate it exactly, but to understand what made its food so distinctive in the first place: curiosity, exchange and the ability to absorb new influences without losing its own character.',
    'The dishes at Chourangi continue that tradition.',
  ],
  stagger: [
    ['Some begin with memory.'],
    ['Some with an ingredient.'],
    ['Some with a familiar recipe.'],
    ['And some with the question', 'of what that recipe might become today.'],
  ],
  closing: ['Rooted in Calcutta.', 'Open to what comes next.'],
  frames: [
    { key: 'calcuttaArchive', label: 'Calcutta', note: 'A reconstruction of the city that shaped the cooking.' },
    { key: 'heroWide', label: 'Interpretation', note: 'The same instinct, worked out on the plate.' },
    { key: 'londonStreet', label: 'London', note: '3 Old Quebec Street, at the end of the day.' },
  ],
}

/**
 * The feedback section.
 *
 * `endpoint` is the only thing standing between this form and working. Paste a
 * form-handler URL that accepts a JSON POST — Formspree (https://formspree.io/f/xxxx),
 * Web3Forms, or any endpoint of your own — and submissions start arriving.
 * While it is empty the form deliberately does NOT thank anyone: it says
 * plainly that nothing is being collected, rather than swallowing a guest's
 * words and showing a success message anyway.
 */
export const FEEDBACK = {
  endpoint: '',
  meta: '05 / Your turn',
  headline: ['Leave your', 'thoughts.'],
  intro:
    'If something on the table stayed with you — or did not — we would rather hear it from you than read it somewhere else later.',
  fields: {
    name: { label: 'Your name', placeholder: 'Optional', autoComplete: 'name' },
    dish: {
      label: 'What are you writing about',
      options: [
        'The meal as a whole',
        'Smoked Hilsa on Toast',
        'Gondhoraj Pepper Garlic Lobster',
        'Railway Lamb Curry',
        'Something else',
      ],
    },
    thoughts: {
      label: 'Your thoughts',
      placeholder: 'Write as much or as little as you like.',
    },
  },
  cta: 'Send your thoughts',
  sending: 'Sending',
  states: {
    sent: ['Thank you.', 'It has reached the kitchen.'],
    sentNote: 'Every note is read. The ones about the cooking reach the pass the same evening.',
    error: 'That did not send. Please try once more, or tell a member of the team.',
    unconfigured: 'Notes are not being collected here yet. Please tell a member of the team instead.',
    required: 'Please write something before sending.',
  },
}

export const CLOSING = {
  meta: '3 Old Quebec Street / London',
  headline: ['The stories continue', 'at the table.'],
  body: 'Three dishes, three fragments of a city that has never stopped changing. The rest of the menu carries its own.',
  link: { label: 'Explore Chourangi', href: SITE.siteUrl },
  image: 'tableLaid',
}

export const FOOTER = {
  columns: [
    {
      title: 'Here',
      items: [
        { label: '3 Old Quebec Street', href: null },
        { label: 'London', href: null },
      ],
    },
    {
      title: 'Chourangi',
      items: [{ label: 'Main site', href: SITE.siteUrl }],
    },
    {
      title: 'This page',
      items: [
        { label: 'Three dishes', href: '#hilsa' },
        { label: 'Three hundred years', href: '#about' },
      ],
    },
  ],
  note: 'Every dish has a Calcutta before Chourangi.',
}
