import { Caption, Figure, Lines, Meta } from '../components/primitives'
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
      {/* One screen, one label, one statement. Nothing else. */}
      <div className="page-x mx-auto flex min-h-[86svh] w-full max-w-[100rem] flex-col justify-center py-[14svh]">
        <Meta className={`reveal-fade mb-10 ${tone.accent}`}>{culture.meta}</Meta>
        <Lines
          as="h3"
          id={`${chapterId}-culture-title`}
          lines={culture.headline}
          className="max-w-[16ch] text-[clamp(2.5rem,6.4vw,5.75rem)] leading-[0.94]"
        />
      </div>

      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 gap-y-12 pb-[16svh]">
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

        <div className="col-span-12 mt-10 md:col-span-8 md:col-start-4 md:mt-16">
          <Lines
            as="p"
            lines={culture.statement}
            className="text-[clamp(2rem,4.4vw,4rem)] leading-[1.02]"
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
    <section ref={scope} data-tone={tone.nav} aria-labelledby={`${chapterId}-culture-title`} className={`${tone.surface} py-[16svh]`}>
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-7">
          <Meta className={`reveal-fade mb-10 ${tone.accent}`}>{culture.meta}</Meta>
          <Lines
            as="h3"
            id={`${chapterId}-culture-title`}
            lines={culture.headline}
            className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.94]"
          />
        </div>

        <div className="col-span-12 mt-14 space-y-6 lg:col-span-4 lg:col-start-9 lg:mt-2">
          {culture.body.map((text) => (
            <p key={text} className="reveal-fade body-copy max-w-[40ch] opacity-90">
              {text}
            </p>
          ))}
        </div>

        <figure className="col-span-12 mt-16 md:col-span-6 lg:col-span-5">
          <Figure name={culture.image} ratio={3 / 2} sizes="(max-width: 768px) 100vw, 40vw" />
          <Caption className="opacity-60">{culture.caption}</Caption>
        </figure>

        {/* The two halves of the argument, offset against each other. */}
        <div className="col-span-12 mt-14 flex flex-col gap-10 md:col-span-6 md:mt-16 lg:col-span-6 lg:col-start-7 lg:justify-center lg:gap-16">
          {culture.contrast.map((pair, i) => (
            <div key={pair[0]} className={i === 1 ? 'lg:pl-[18%]' : ''}>
              <div aria-hidden="true" className={`mb-5 h-px w-14 ${tone.rule}`} />
              <Lines
                as="p"
                lines={pair}
                className="text-[clamp(1.5rem,3.1vw,2.75rem)] leading-[1.06]"
              />
            </div>
          ))}
        </div>

        <p className="reveal-fade body-copy col-span-12 mt-16 max-w-[46ch] lg:col-span-6 lg:col-start-7">
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
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 pb-[12svh] pt-[18svh]">
        <div className="col-span-12 lg:col-span-8">
          <Meta className={`reveal-fade mb-10 ${tone.accent}`}>{culture.meta}</Meta>
          <Lines
            as="h3"
            id={`${chapterId}-culture-title`}
            lines={culture.headline}
            className="text-[clamp(2.75rem,7.4vw,6.75rem)] leading-[0.9]"
          />
        </div>
      </div>

      <figure className="relative">
        <Figure name={culture.image} ratio={2.6} sizes="100vw" imgClassName="object-[center_42%]" />
        <figcaption className="page-x mx-auto mt-4 w-full max-w-[100rem] text-[0.8125rem] opacity-55">
          {culture.caption}
        </figcaption>
      </figure>

      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 py-[14svh]">
        <div className="col-span-12 space-y-6 lg:col-span-5 lg:col-start-7">
          {culture.body.map((text) => (
            <p key={text} className="reveal-fade body-copy max-w-[44ch] opacity-88">
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Deliberate emptiness before the closing thought. */}
      <div className="page-x mx-auto flex min-h-[92svh] w-full max-w-[100rem] flex-col justify-center gap-12 pb-[16svh]">
        <Lines
          as="p"
          lines={culture.statement}
          className="max-w-[18ch] text-[clamp(1.6rem,3.4vw,3rem)] leading-[1.06] opacity-70"
        />
        <Lines
          as="p"
          lines={culture.closing}
          className="max-w-[17ch] self-end text-right text-[clamp(2rem,5vw,4.5rem)] leading-[1] md:max-w-[20ch]"
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
