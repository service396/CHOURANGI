import { Caption, Figure, Lines, Meta } from '../components/primitives'
import { Marginalia } from '../components/Marginalia'
import { revealIn, useGsap } from '../lib/motion'

const TONES = {
  parchment: { surface: 'bg-parchment text-charcoal', nav: 'light', accent: 'text-ceramic', rule: 'bg-charcoal/20' },
  green: { surface: 'bg-green text-ivory', nav: 'dark', accent: 'text-parchment', rule: 'bg-ivory/25' },
  charcoal: { surface: 'bg-timber text-ivory', nav: 'dark', accent: 'text-rattan', rule: 'bg-ivory/20' },
}

/**
 * 01.3 — Hilsa.
 * Parchment. The statement holds a full screen on its own before the image and
 * the argument arrive underneath it.
 */
function CultureQuiet({ culture, chapterId, tone }) {
  const scope = useGsap(() => {
    revealIn(scope.current, { start: 'top 78%' })
  })

  return (
    <section ref={scope} data-tone={tone.nav} aria-labelledby={`${chapterId}-culture-title`} className={tone.surface}>
      {/* One screen, one label, one statement. Nothing else — except that the
          headline is held to 16ch, so the right of this screen is empty at
          desktop widths. The hilsa is drawn into it: this is the chapter about
          what the fish means, and the monsoon is when it is eaten. */}
      <div className="page-x relative mx-auto flex min-h-[78svh] w-full max-w-[100rem] flex-col justify-center pt-[var(--section-y)] pb-[var(--block-y)]">
        <Meta className={`reveal-fade mb-[var(--meta-gap)] ${tone.accent}`}>{culture.meta}</Meta>
        <Lines
          as="h3"
          id={`${chapterId}-culture-title`}
          lines={culture.headline}
          className="display-xl max-w-[16ch]"
        />
        <Marginalia
          name="inkHilsa"
          opacity={0.5}
          className="absolute right-[var(--gutter-right)] top-1/2 hidden w-[22vw] max-w-[20rem] -translate-y-1/2 lg:block"
        />
      </div>

      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 gap-y-12 pb-[var(--section-y)]">
        <figure className="col-span-12 md:col-span-7">
          <Figure name={culture.image} ratio={3 / 2} sizes="(max-width: 768px) 100vw, 55vw" />
          <Caption>{culture.caption}</Caption>
        </figure>

        <div className="col-span-12 space-y-6 md:col-span-4 md:col-start-9 md:self-center">
          {culture.body.map((text) => (
            <p key={text} className="reveal-fade body-copy max-w-[42ch]">
              {text}
            </p>
          ))}
        </div>

        <div className="col-span-12 block-y md:col-span-8 md:col-start-4">
          <Lines
            as="p"
            lines={culture.statement}
            className="display-lg"
          />
        </div>
      </div>
    </section>
  )
}

/**
 * 02.3 — Gondhoraj.
 * Heritage green. Two contrasting statements set against each other across the
 * grid, with the photograph small and off to one side.
 */
function CultureContrast({ culture, chapterId, tone }) {
  const scope = useGsap(() => {
    revealIn(scope.current, { start: 'top 78%' })
  })

  return (
    <section ref={scope} data-tone={tone.nav} aria-labelledby={`${chapterId}-culture-title`} className={`${tone.surface} section-y`}>
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-7">
          <Meta className={`reveal-fade mb-[var(--meta-gap)] ${tone.accent}`}>{culture.meta}</Meta>
          <Lines
            as="h3"
            id={`${chapterId}-culture-title`}
            lines={culture.headline}
            className="display-xl"
          />
        </div>

        <div className="col-span-12 block-y space-y-6 lg:col-span-4 lg:col-start-9 lg:mt-0">
          {culture.body.map((text) => (
            <p key={text} className="reveal-fade body-copy max-w-[40ch] opacity-90">
              {text}
            </p>
          ))}
        </div>

        <figure className="col-span-12 block-y md:col-span-6 lg:col-span-5">
          <Figure name={culture.image} ratio={3 / 2} sizes="(max-width: 768px) 100vw, 40vw" />
          <Caption className="opacity-60">{culture.caption}</Caption>
        </figure>

        {/* The two halves of the argument, offset against each other. */}
        <div className="col-span-12 block-y flex flex-col gap-[var(--block-y)] md:col-span-6 lg:col-span-6 lg:col-start-7 lg:justify-center">
          {culture.contrast.map((pair, i) => (
            <div key={pair[0]} className={i === 1 ? 'lg:pl-[18%]' : ''}>
              <div aria-hidden="true" className={`mb-5 h-px w-14 ${tone.rule}`} />
              <Lines
                as="p"
                lines={pair}
                className="display-md"
              />
            </div>
          ))}
        </div>

        <p className="reveal-fade body-copy col-span-12 block-y max-w-[46ch] lg:col-span-6 lg:col-start-7">
          {culture.coda}
        </p>
      </div>
    </section>
  )
}

/**
 * 03.3 — Railway.
 * Dark timber and exceptional negative space. The image is full bleed, the
 * closing statement gets a screen entirely to itself.
 */
function CultureExpanse({ culture, chapterId, tone }) {
  const scope = useGsap(() => {
    revealIn(scope.current, { start: 'top 80%' })
  })

  return (
    <section ref={scope} data-tone={tone.nav} aria-labelledby={`${chapterId}-culture-title`} className={tone.surface}>
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 pb-[var(--block-y)] pt-[var(--section-y)]">
        <div className="col-span-12 lg:col-span-8">
          <Meta className={`reveal-fade mb-[var(--meta-gap)] ${tone.accent}`}>{culture.meta}</Meta>
          <Lines
            as="h3"
            id={`${chapterId}-culture-title`}
            lines={culture.headline}
            className="display-xl"
          />
        </div>
      </div>

      <figure className="relative">
        <Figure name={culture.image} ratio={2.6} sizes="100vw" imgClassName="object-[center_42%]" />
        <figcaption className="page-x mx-auto mt-4 w-full max-w-[100rem] text-[0.8125rem] opacity-55">
          {culture.caption}
        </figcaption>
      </figure>

      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 py-[var(--section-y)]">
        <div className="col-span-12 space-y-6 lg:col-span-5 lg:col-start-7">
          {culture.body.map((text) => (
            <p key={text} className="reveal-fade body-copy max-w-[44ch] opacity-88">
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Deliberate emptiness before the closing thought. The statement holds
          the left and the closing the right, so the centre column stays clear;
          the tiffin carrier sits in it — the object this chapter's food was
          actually carried in. */}
      <div className="page-x mx-auto flex min-h-[70svh] w-full max-w-[100rem] flex-col justify-center gap-[var(--block-y)] pb-[var(--section-y)]">
        {/* The statement is held to 18ch, so the rest of its line is empty.
            The tiffin carrier sits there as a flex sibling rather than at an
            absolute offset, which is what keeps it off the closing lines
            below as they reflow. */}
        <div className="flex items-start justify-between gap-10">
          <Lines
            as="p"
            lines={culture.statement}
            className="display-md max-w-[18ch] opacity-70"
          />
          <Marginalia
            name="inkTiffin"
            tone="dark"
            opacity={0.45}
            drift={34}
            className="hidden w-[12vw] max-w-[10rem] shrink-0 lg:block"
          />
        </div>
        <Lines
          as="p"
          lines={culture.closing}
          className="display-lg max-w-[17ch] self-end text-right md:max-w-[20ch]"
        />
      </div>
    </section>
  )
}

const LAYOUTS = [CultureQuiet, CultureContrast, CultureExpanse]

export function CultureSection({ chapter, variant }) {
  const Layout = LAYOUTS[variant] ?? CultureQuiet
  const tone = TONES[chapter.culture.tone]
  return <Layout culture={chapter.culture} chapterId={chapter.id} tone={tone} />
}
