import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({ component: LandingPage })

const services = [
  ['01', 'Strategy', 'Direction for uncertain markets and ambitious bets.'],
  ['02', 'Research', 'Evidence, field insight and AI-assisted synthesis.'],
  ['03', 'Technology', 'Products, platforms and intelligent systems that ship.'],
  ['04', 'Innovation', 'Rapid ventures, prototypes and experiments.'],
  ['05', 'Advisory', 'Governance, AI policy and executive counsel.'],
]
const work = [
  ['https://cdn.shipper.now/gallery/creative/feature.webp', 'Health Systems', 'Rewiring patient access across 40 clinics', 'md:col-span-7'],
  ['https://cdn.shipper.now/gallery/creative/portrait.webp', 'Public Sector', 'An AI policy framework for a nation', 'md:col-span-5'],
  ['https://cdn.shipper.now/gallery/creative/card.webp', 'Fintech', 'Credit intelligence for informal economies', 'md:col-span-5'],
  ['https://cdn.shipper.now/gallery/creative/hero-2.webp', 'Energy', 'Forecasting demand on a fragile grid', 'md:col-span-7'],
]
const insights = [
  ['Essay', 'Why the second question matters more than the first', '8 min'],
  ['Research', 'Responsible AI in emerging markets: a 2026 field report', '14 min'],
  ['Notes', 'Prototyping as a strategy tool, not a design phase', '5 min'],
]
const paths = [-180, -100, -30, 30, 100, 180]

function Btn({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <a href="#contact" className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${dark ? 'bg-ink text-paper hover:bg-signal' : 'border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper'}`}>
      {children}<span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
    </a>
  )
}

function LandingPage() {
  return (
    <div className="overflow-x-hidden font-sans">
      <nav className="fixed inset-x-3 top-3 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-ink/10 bg-paper/80 px-5 py-3 shadow-sm backdrop-blur-md">
        <a href="#" className="font-display text-sm font-bold tracking-[0.2em]">DOUBLE DIVERGE</a>
        <div className="hidden gap-8 text-sm text-mute md:flex">
          {['Work', 'Approach', 'Insights', 'About'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-ink">{l}</a>)}
        </div>
        <a href="#contact" className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-paper transition-all duration-300 hover:bg-signal">Let's talk →</a>
      </nav>

      <header className="relative grid min-h-screen items-center gap-10 px-5 pt-28 pb-16 md:grid-cols-12 md:px-12">
        <div className="md:col-span-7">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-mute">Technology · Research · Strategy · Innovation</p>
          <h1 className="font-display text-[13vw] font-bold leading-[0.88] tracking-tight md:text-[7.5vw]">Different questions.<br /><span className="text-signal">Better</span> possibilities</h1>
          <p className="mt-10 max-w-lg text-lg leading-relaxed text-mute">Double Diverge explores complex problems, challenges assumptions and turns ideas into practical possibilities through research, strategy and technology.</p>
          <div className="mt-10 flex flex-wrap gap-4"><Btn dark>Explore our work</Btn><Btn>Let's talk</Btn></div>
        </div>
        <div className="group relative aspect-square md:col-span-5">
          <svg viewBox="0 0 500 500" className="h-full w-full">
            {paths.map((d, i) => (
              <path key={i} className="path-draw origin-center transition-all duration-1000 ease-out group-hover:[stroke-width:2.5]" style={{ animationDelay: `${i * 0.15}s` }}
                d={`M 20 250 C 140 250, 160 ${250 + d}, 250 ${250 + d} S 360 250, 480 250`} fill="none" stroke={i === 2 ? '#ff4d1f' : '#121212'} strokeOpacity={i === 2 ? 1 : 0.35} strokeWidth="1.2" />
            ))}
            {paths.map((d, i) => <circle key={i} cx="250" cy={250 + d} r="5" className="fill-paper stroke-ink transition-all duration-700 group-hover:fill-signal" strokeWidth="1.2" />)}
            <circle cx="20" cy="250" r="8" className="fill-ink" /><circle cx="480" cy="250" r="8" className="fill-signal" />
          </svg>
          <p className="absolute bottom-0 left-0 text-xs uppercase tracking-[0.25em] text-mute">One point · Many paths · One answer</p>
        </div>
      </header>

      <section className="border-y border-ink/10 px-5 py-32 md:px-12">
        <h2 className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">The obvious answer is <span className="italic text-mute line-through decoration-signal decoration-4">rarely</span> the only answer.</h2>
      </section>

      <section id="approach" className="px-5 py-32 md:px-12">
        <p className="mb-16 text-xs uppercase tracking-[0.3em] text-mute">Our approach</p>
        <div className="grid border-t border-ink/15 md:grid-cols-3">
          {[['Diverge', 'Open the problem wide. Question the brief, map the system, find the unasked questions.'], ['Explore', 'Research, prototype and test many paths in parallel — fast, evidence-led, unafraid.'], ['Converge', 'Commit to the strongest possibility and build it into something real.']].map(([t, d], i) => (
            <div key={t} className="group border-b border-ink/15 py-10 transition-all duration-500 hover:bg-ink hover:text-paper md:border-r md:px-8 md:last:border-r-0">
              <span className="font-display text-sm text-signal">0{i + 1}</span>
              <h3 className="mt-6 font-display text-5xl font-bold transition-transform duration-500 group-hover:translate-x-2">{t}</h3>
              <p className="mt-6 max-w-xs text-mute transition-colors group-hover:text-paper/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-12">
        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-mute">Capabilities</p>
        {services.map(([n, t, d]) => (
          <a key={t} href="#" className="group flex flex-col gap-2 border-t border-ink/15 py-8 transition-all duration-500 last:border-b hover:px-4 md:flex-row md:items-center md:gap-10">
            <span className="text-sm text-mute">{n}</span>
            <span className="font-display text-5xl font-bold tracking-tight transition-colors duration-500 group-hover:text-signal md:text-8xl">{t}</span>
            <span className="max-w-xs text-mute md:ml-auto md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">{d}</span>
            <span className="hidden text-3xl transition-transform duration-500 group-hover:-rotate-45 md:block">→</span>
          </a>
        ))}
      </section>

      <section id="work" className="px-5 py-32 md:px-12">
        <div className="mb-16 flex items-end justify-between"><h2 className="font-display text-5xl font-bold md:text-7xl">Selected work</h2><span className="text-sm text-mute">2024 — 2026</span></div>
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-12">
          {work.map(([src, tag, title, span], i) => (
            <a key={title} href="#" className={`group ${span} ${i % 2 ? 'md:mt-24' : ''}`}>
              <div className="overflow-hidden"><img src={src} alt={title} className="aspect-[4/3] w-full object-cover grayscale-[40%] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" /></div>
              <div className="mt-5 flex justify-between gap-4"><h3 className="font-display text-2xl font-medium">{title}</h3><span className="shrink-0 text-xs uppercase tracking-widest text-mute">{tag}</span></div>
            </a>
          ))}
        </div>
      </section>

      <section id="insights" className="bg-ink px-5 py-32 text-paper md:px-12">
        <h2 className="mb-16 font-display text-5xl font-bold md:text-7xl">Insights</h2>
        <div className="grid gap-px bg-paper/15 md:grid-cols-3">
          {insights.map(([k, t, r]) => (
            <a key={t} href="#" className="group flex min-h-80 flex-col justify-between bg-ink p-8 transition-colors duration-500 hover:bg-[#1c1c1c]">
              <span className="text-xs uppercase tracking-widest text-signal">{k}</span>
              <h3 className="font-display text-3xl font-medium leading-tight transition-transform duration-500 group-hover:-translate-y-2">{t}</h3>
              <span className="text-sm text-paper/50">{r} read →</span>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="grid gap-12 px-5 py-32 md:grid-cols-12 md:px-12">
        <div className="overflow-hidden md:col-span-5"><img src="https://cdn.shipper.now/gallery/creative/detail.webp" alt="Double Diverge studio" className="aspect-square w-full object-cover transition-transform duration-1000 hover:scale-105" /></div>
        <div className="md:col-span-6 md:col-start-7 md:self-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-mute">About</p>
          <p className="font-display text-3xl font-medium leading-snug md:text-5xl">A small, senior studio of researchers, strategists and engineers — built in Kaduna, working everywhere.</p>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/15 pt-8">
            {[['2021', 'Founded'], ['60+', 'Projects'], ['9', 'Sectors']].map(([v, l]) => <div key={l}><p className="font-display text-4xl font-bold">{v}</p><p className="text-sm text-mute">{l}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-5 py-40 md:px-12">
        <img src="https://cdn.shipper.now/gallery/creative/banner.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative">
          <h2 className="max-w-5xl font-display text-6xl font-bold leading-[0.9] tracking-tight md:text-9xl">Have a problem worth <span className="text-signal">exploring?</span></h2>
          <div className="mt-12"><Btn dark>Let's talk</Btn></div>
        </div>
      </section>

      <footer className="grid gap-10 border-t border-ink/15 px-5 py-16 text-sm md:grid-cols-4 md:px-12">
        <div><p className="font-display font-bold tracking-[0.2em]">DOUBLE DIVERGE</p><p className="mt-3 max-w-xs text-mute">Different questions. Better possibilities.</p></div>
        <div className="space-y-2 text-mute"><p className="text-ink">Studio</p>{['Work', 'Approach', 'Insights', 'About'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="block hover:text-ink">{l}</a>)}</div>
        <div className="space-y-2 text-mute"><p className="text-ink">Follow</p>{['LinkedIn', 'X / Twitter', 'Facebook'].map((l) => <a key={l} href="#" className="block hover:text-ink">{l}</a>)}</div>
        <div className="space-y-2 text-mute"><p className="text-ink">Contact</p><p>doublediverge@gmail.com</p><p>Kaduna, Nigeria</p><p className="pt-4 text-xs">© 2026 Double Diverge Ltd</p></div>
      </footer>
    </div>
  )
}
