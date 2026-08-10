import { useId, useRef, useState } from 'react'
import { FEEDBACK } from '../data/content'
import { Lines, Meta } from '../components/primitives'
import { revealIn, useGsap } from '../lib/motion'

/**
 * 05 — Leave your thoughts.
 *
 * The only interactive moment on the page, so it sits on ceramic blue: the
 * colour the brand reserves for active UI, and a hard cut from the ivory of
 * the About chapter into the timber of the closing.
 *
 * Typography follows the page's rule that serif carries story and sans carries
 * information. The labels, counters and button are Inter; the headline and the
 * guest's own writing are Instrument Serif, because what they type is the one
 * piece of story on the page that is not ours.
 */
export function Feedback() {
  const scope = useGsap(() => {
    revealIn(scope.current, { start: 'top 80%' })
  })

  const uid = useId()
  const formRef = useRef(null)
  const thoughtsRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | unconfigured | required

  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(formRef.current)
    const thoughts = String(data.get('thoughts') || '').trim()

    if (!thoughts) {
      setStatus('required')
      thoughtsRef.current?.focus()
      return
    }

    // Nothing to send to. Say so rather than showing a thank-you for words
    // that would go nowhere.
    if (!FEEDBACK.endpoint) {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FEEDBACK.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') || '').trim(),
          about: String(data.get('dish') || ''),
          thoughts,
          page: typeof window === 'undefined' ? '' : window.location.href,
        }),
      })
      if (!response.ok) throw new Error(String(response.status))
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full border-0 border-b border-ivory/30 bg-transparent pb-3 pt-2 text-ivory outline-none transition-colors duration-300 placeholder:text-ivory/35 focus:border-ivory'
  const sent = status === 'sent'

  return (
    <section
      ref={scope}
      id="thoughts"
      data-tone="dark"
      aria-labelledby="thoughts-title"
      className="bg-ceramic text-ivory section-y"
    >
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-5">
          <Meta className="reveal-fade mb-[var(--meta-gap)] text-rattan">{FEEDBACK.meta}</Meta>
          <Lines as="h2" id="thoughts-title" lines={FEEDBACK.headline} className="display-xl" />
          <p className="reveal-fade body-copy block-y max-w-[38ch] opacity-80">{FEEDBACK.intro}</p>
        </div>

        <div className="col-span-12 block-y lg:col-span-6 lg:col-start-7 lg:mt-0">
          {sent ? (
            <div className="reveal-fade" role="status">
              <p className="display display-md">{FEEDBACK.states.sent[0]}</p>
              <p className="display display-md opacity-70">{FEEDBACK.states.sent[1]}</p>
              <p className="body-copy mt-6 max-w-[42ch] opacity-70">{FEEDBACK.states.sentNote}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate className="reveal-fade">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8">
                <div>
                  <label htmlFor={`${uid}-name`} className="meta block text-ivory/60">
                    {FEEDBACK.fields.name.label}
                  </label>
                  <input
                    id={`${uid}-name`}
                    name="name"
                    type="text"
                    autoComplete={FEEDBACK.fields.name.autoComplete}
                    placeholder={FEEDBACK.fields.name.placeholder}
                    className={`${field} display mt-3 text-[1.15rem]`}
                  />
                </div>

                <div>
                  <label htmlFor={`${uid}-dish`} className="meta block text-ivory/60">
                    {FEEDBACK.fields.dish.label}
                  </label>
                  {/* The native chevron is suppressed to keep the field on the
                      palette, so it is redrawn here — without it the control
                      does not read as a dropdown at all. */}
                  <select
                    id={`${uid}-dish`}
                    name="dish"
                    defaultValue={FEEDBACK.fields.dish.options[0]}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' fill='none' stroke='%23f3eee5' stroke-width='1.2'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.15rem center',
                      backgroundSize: '11px 7px',
                    }}
                    className={`${field} display mt-3 pr-8 text-[1.15rem] [&>option]:bg-ceramic [&>option]:text-ivory`}
                  >
                    {FEEDBACK.fields.dish.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-10">
                <label htmlFor={`${uid}-thoughts`} className="meta block text-ivory/60">
                  {FEEDBACK.fields.thoughts.label}
                </label>
                <textarea
                  ref={thoughtsRef}
                  id={`${uid}-thoughts`}
                  name="thoughts"
                  rows={4}
                  required
                  aria-describedby={status === 'required' ? `${uid}-msg` : undefined}
                  aria-invalid={status === 'required' || undefined}
                  placeholder={FEEDBACK.fields.thoughts.placeholder}
                  onInput={() => status === 'required' && setStatus('idle')}
                  className={`${field} display mt-3 resize-y text-[clamp(1.15rem,1.9vw,1.5rem)] leading-snug`}
                />
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
                <button
                  type="submit"
                  data-cursor="link"
                  disabled={status === 'sending'}
                  className="group inline-flex items-baseline gap-2.5 disabled:opacity-50"
                >
                  <span className="relative">
                    <span className="meta">
                      {status === 'sending' ? FEEDBACK.sending : FEEDBACK.cta}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-0"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>

                <p
                  id={`${uid}-msg`}
                  aria-live="polite"
                  className="max-w-[44ch] text-[0.875rem] leading-snug text-rattan"
                >
                  {status === 'required' && FEEDBACK.states.required}
                  {status === 'error' && FEEDBACK.states.error}
                  {status === 'unconfigured' && FEEDBACK.states.unconfigured}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
