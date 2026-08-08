import { Fragment, useEffect } from 'react'
import { CHAPTER_LIST } from './data/content'
import { ChapterRail, Cursor, Grain, Nav } from './components/Chrome'
import { DishSlideshow } from './components/DishSlideshow'
import { Hero } from './sections/Hero'
import { Premise } from './sections/Premise'
import { DishSection } from './sections/DishSection'
import { IngredientSection } from './sections/IngredientSection'
import { CultureSection } from './sections/CultureSection'
import { InterpretationSection } from './sections/InterpretationSection'
import { About } from './sections/About'
import { Closing, Footer } from './sections/Closing'
import { useSmoothScroll } from './lib/useSmoothScroll'
import { ScrollTrigger, useReducedMotion } from './lib/motion'

/**
 * Each chapter opens on a different surface, so the boundary between them is a
 * hard cut rather than a fade: ivory → ceramic blue → charcoal.
 */
const SLIDESHOW_TONE = ['ivory', 'ceramic', 'charcoal']

export default function App() {
  const reduced = useReducedMotion()
  useSmoothScroll(!reduced)

  useEffect(() => {
    // Marks that JS is running, so the CSS only hides what it can animate back in.
    document.documentElement.classList.add('js')
    // Photography loading in changes section heights; keep triggers honest.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const timer = window.setTimeout(refresh, 1200)
    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(timer)
      document.documentElement.classList.remove('js')
    }
  }, [])

  return (
    <>
      <Grain />
      <Cursor />
      <Nav />
      <ChapterRail />

      <a
        href="#stories"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to the stories
      </a>

      <main>
        <Hero />
        <Premise />

        {CHAPTER_LIST.map((chapter, i) => (
          <Fragment key={chapter.id}>
            <DishSlideshow chapter={chapter} tone={SLIDESHOW_TONE[i]} preload={i === 0} />
            <DishSection chapter={chapter} variant={i} />
            <IngredientSection chapter={chapter} variant={i} />
            <CultureSection chapter={chapter} variant={i} />
            <InterpretationSection chapter={chapter} variant={i} />
          </Fragment>
        ))}

        <About />
        <Closing />
      </main>

      <Footer />
    </>
  )
}
