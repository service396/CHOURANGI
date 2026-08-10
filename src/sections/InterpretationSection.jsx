import { Body, Figure, Lines, Meta, Rule } from '../components/primitives'
import { Marginalia } from '../components/Marginalia'
import { gsap, revealIn, useGsap, useReducedMotion } from '../lib/motion'

/**
 * 01.4 — Hilsa.
 * Back to plain ivory and clean contemporary plating. Statement left, plate right.
 */
function InterpretationPlate({ interpretation, chapterId }) {
  const scope = useGsap(() => {
    revealIn(scope.current, { start: 'top 76%' })
  })

  return (
    <section
      ref={scope}
      data-tone="light"
      aria-labelledby={`${chapterId}-interpretation-title`}
      className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 gap-y-12 bg-ivory section-y"
    >
      <div className="col-span-12 lg:col-span-6">
        <Meta className="reveal-fade mb-[var(--meta-gap)] text-ceramic">{interpretation.meta}</Meta>
        <Lines
          as="h3"
          id={`${chapterId}-interpretation-title`}
          lines={interpretation.headline}
          className="display-lg mb-[var(--block-y)]"
        />
        <Body paragraphs={interpretation.body} />
        <Rule className="my-[var(--block-y)] !bg-rattan" />
        <Lines
          as="p"
          lines={interpretation.statement}
          className="display-md"
        />
        <p className="reveal-fade body-copy mt-8 max-w-[44ch] opacity-80">{interpretation.coda}</p>
      </div>

      {/* The argument column runs a good deal longer than one 4:5 plate, so
          this column ends early. The drawing of the plated rounds closes it:
          the same dish the section is about, in the other register. */}
      <div className="col-span-12 lg:col-span-5 lg:col-start-8">
        <Figure name={interpretation.image} ratio={4 / 5} sizes="(max-width: 1024px) 100vw, 40vw" />
        <Marginalia
          name="inkPlatter"
          opacity={0.5}
          drift={30}
          className="mt-[var(--block-y)] ml-auto hidden w-[15vw] max-w-[13rem] lg:block"
        />
      </div>
    </section>
  )
}

/**
 * 02.4 — Gondhoraj.
 * The three notes of the dish arrive one at a time, each on its own rule, with
 * the finished plate held large on the left.
 */
function InterpretationSequence({ interpretation, chapterId }) {
  const reduced = useReducedMotion()
  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 76%' })
    if (reduced) return
    const items = root.querySelectorAll('[data-seq]')
    gsap.from(items, {
      yPercent: 40,
      opacity: 0,
      duration: 0.72,
      ease: 'power4.out',
      stagger: 0.16,
      scrollTrigger: { trigger: root.querySelector('[data-seq-list]'), start: 'top 76%', once: true },
    })
  }, [reduced])

  return (
    <section
      ref={scope}
      data-tone="light"
      aria-labelledby={`${chapterId}-interpretation-title`}
      className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 gap-y-12 bg-ivory section-y"
    >
      <div className="col-span-12 lg:col-span-5">
        <Figure name={interpretation.image} ratio={4 / 5} sizes="(max-width: 1024px) 100vw, 40vw" />
      </div>

      <div className="col-span-12 lg:col-span-6 lg:col-start-7">
        <Meta className="reveal-fade mb-[var(--meta-gap)] text-ceramic">{interpretation.meta}</Meta>
        <Lines
          as="h3"
          id={`${chapterId}-interpretation-title`}
          lines={interpretation.headline}
          className="display-lg mb-[var(--block-y)]"
        />
        <Body paragraphs={interpretation.body} />

        <ul data-seq-list className="block-y">
          {interpretation.sequence.map((item) => (
            <li key={item} data-seq className="border-t border-rattan/50 py-5">
              <span className="display block text-[clamp(1.25rem,2.2vw,1.9rem)] leading-tight">{item}</span>
            </li>
          ))}
        </ul>

        <p className="reveal-fade body-copy mt-10 max-w-[46ch]">{interpretation.coda}</p>

        <Lines
          as="p"
          lines={interpretation.statement}
          className="display-md block-y text-ceramic"
        />
      </div>
    </section>
  )
}

/**
 * 03.4 — Railway.
 * Five clauses stacked tightly, then the final plate full width beneath them.
 */
function InterpretationStack({ interpretation, chapterId }) {
  const reduced = useReducedMotion()
  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 78%' })
    if (reduced) return
    gsap.from(root.querySelectorAll('[data-clause]'), {
      yPercent: 60,
      opacity: 0,
      duration: 0.68,
      ease: 'power4.out',
      stagger: 0.13,
      scrollTrigger: { trigger: root.querySelector('[data-clause-list]'), start: 'top 78%', once: true },
    })
  }, [reduced])

  return (
    <section
      ref={scope}
      data-tone="light"
      aria-labelledby={`${chapterId}-interpretation-title`}
      className="bg-ivory section-y"
    >
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6">
          <Meta className="reveal-fade mb-[var(--meta-gap)] text-ceramic">{interpretation.meta}</Meta>
          <Lines
            as="h3"
            id={`${chapterId}-interpretation-title`}
            lines={interpretation.headline}
            className="display-xl"
          />
        </div>
        <div className="col-span-12 block-y lg:col-span-5 lg:col-start-8 lg:mt-1">
          <Body paragraphs={interpretation.body} />
        </div>
      </div>

      <ul data-clause-list className="page-x mx-auto block-y w-full max-w-[100rem]">
        {interpretation.sequence.map((clause, i) => (
          <li
            key={clause}
            data-clause
            className="grid grid-cols-12 items-baseline gap-x-6 border-t border-rattan/45 py-6 md:py-7"
          >
            <span className="meta col-span-2 text-rattan tabular-nums md:col-span-1">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="display col-span-10 text-[clamp(1.2rem,2.5vw,2.15rem)] leading-tight md:col-span-11">
              {clause}
            </span>
          </li>
        ))}
      </ul>

      <div className="page-x mx-auto block-y grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        {/* The plate opposite is 4:5 across six columns and far taller than
            two lines of statement, so this column is empty beneath it. The
            whole spices sit there, opposite the finished dish they went into. */}
        <div className="col-span-12 md:col-span-5">
          <Lines
            as="p"
            lines={interpretation.statement}
            className="display-lg text-timber"
          />
          <Marginalia
            name="inkSpicePile"
            opacity={0.55}
            className="mt-[var(--block-y)] hidden w-[16vw] max-w-[15rem] md:block"
          />
        </div>
        <div className="col-span-12 block-y md:col-span-6 md:col-start-7 md:mt-0">
          <Figure name={interpretation.image} ratio={4 / 5} sizes="(max-width: 768px) 100vw, 46vw" />
        </div>
      </div>
    </section>
  )
}

const LAYOUTS = [InterpretationPlate, InterpretationSequence, InterpretationStack]

export function InterpretationSection({ chapter, variant }) {
  const Layout = LAYOUTS[variant] ?? InterpretationPlate
  return <Layout interpretation={chapter.interpretation} chapterId={chapter.id} />
}
