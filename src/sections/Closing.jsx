import { CLOSING, FOOTER, SITE } from '../data/content'
import { ArrowLink, Figure, Lines, Meta } from '../components/primitives'
import { Logo } from '../components/Logo'
import { revealIn, useGsap } from '../lib/motion'

/**
 * The closing moment. This page is read in the restaurant, at the table, so
 * there is nothing to book — the section resolves the narrative and hands the
 * reader back to the meal in front of them.
 */
export function Closing() {
  const scope = useGsap(() => {
    revealIn(scope.current, { start: 'top 78%' })
  })

  return (
    <section
      ref={scope}
      id="closing"
      data-tone="dark"
      aria-labelledby="closing-title"
      className="relative bg-timber text-ivory"
    >
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 pb-[var(--section-y)] pt-[var(--section-y)]">
        <div className="col-span-12 lg:col-span-7">
          <Meta className="reveal-fade mb-[var(--meta-gap)] text-rattan">{CLOSING.meta}</Meta>
          <Lines
            as="h2"
            id="closing-title"
            lines={CLOSING.headline}
            className="display-xl"
          />
        </div>

        <div className="col-span-12 mt-14 flex flex-col gap-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end">
          <p className="reveal-fade body-copy max-w-[40ch] opacity-85">{CLOSING.body}</p>
          <div className="reveal-fade">
            <ArrowLink href={CLOSING.link.href} external className="text-ivory/80">
              {CLOSING.link.label}
            </ArrowLink>
          </div>
        </div>
      </div>

      <Figure name={CLOSING.image} ratio={2.7} sizes="100vw" imgClassName="object-[center_55%]" />
    </section>
  )
}

export function Footer() {
  return (
    <footer data-tone="dark" className="bg-timber pb-10 pt-[10svh] text-ivory">
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-5">
          <Logo variant="stacked" />
          <p className="mt-5 max-w-[34ch] text-[clamp(1rem,1.4vw,1.2rem)] leading-snug opacity-70">
            {FOOTER.note}
          </p>
        </div>

        {FOOTER.columns.map((column) => (
          <div key={column.title} className="col-span-6 md:col-span-4 lg:col-span-2 lg:col-start-auto">
            <Meta className="mb-5 text-rattan">{column.title}</Meta>
            <ul className="space-y-2.5">
              {column.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      data-cursor="link"
                      {...(item.href.startsWith('#')
                        ? {}
                        : { target: '_blank', rel: 'noreferrer noopener' })}
                      className="group relative inline-block text-[0.9375rem] opacity-80 transition-opacity hover:opacity-100"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                    </a>
                  ) : (
                    <span className="text-[0.9375rem] opacity-55">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="page-x mx-auto mt-[10svh] w-full max-w-[100rem]">
        <div aria-hidden="true" className="h-px w-full bg-ivory/15" />
        <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Meta className="opacity-45">
            {SITE.address} / {SITE.city}
          </Meta>
          <Meta className="opacity-45">Three dishes / three stories</Meta>
        </div>
      </div>
    </footer>
  )
}
