import './_group.css';
import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  Code2,
  GitBranch,
  Layers3,
  Menu,
  Network,
  Orbit,
  Workflow,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'What we do', href: '#work' },
  { label: 'How we think', href: '#approach' },
  { label: 'Open by nature', href: '#ecosystem' },
  { label: 'About', href: '#about' },
];

const consulting = [
  'AI opportunity mapping & technical strategy',
  'Product architecture and rapid prototyping',
  'LLM, agent and workflow integrations',
  'Production engineering, evaluation & iteration',
];

const ownedProduct = [
  'We explore problems worth solving ourselves',
  'We build beyond a client brief',
  'We learn in the open, and share where it helps',
];

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className={`eyebrow flex items-center gap-3 ${dark ? 'text-white/55' : 'text-black/50'}`}>
      <span className={`h-px w-7 ${dark ? 'bg-[#D96725]' : 'bg-[#D96725]'}`} />
      {children}
    </div>
  );
}

function ArrowCta({ children, href }: { children: string; href: string }) {
  return (
    <a
      className="arrow-link inline-flex items-center gap-3 border-b border-current pb-2 text-sm font-semibold transition-colors hover:text-[#D96725] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D96725]"
      href={href}
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </a>
  );
}

function SystemSketch() {
  return (
    <div className="relative isolate min-h-[400px] overflow-hidden border border-white/10 bg-[#25292e] p-6 sm:min-h-[470px] sm:p-9">
      <div className="absolute inset-0 -z-10 opacity-[.16]" aria-hidden="true">
        <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(rgba(242,242,242,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(242,242,242,.18) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="flex items-center justify-between">
        <span className="mono text-[9px] uppercase tracking-[.16em] text-white/45">A working system</span>
        <span className="flex items-center gap-2 mono text-[9px] uppercase tracking-[.14em] text-[#e68a52]">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#e68a52]" />
          designed to do
        </span>
      </div>
      <div className="relative mx-auto mt-12 grid max-w-[490px] grid-cols-[1fr_74px_1fr] items-center gap-y-8 sm:mt-[68px] sm:grid-cols-[1fr_100px_1fr]">
        <div className="col-start-1 row-start-1 flex min-h-[76px] items-center gap-3 border border-white/15 bg-[#1F2226] px-3 sm:px-4">
          <div className="grid h-8 w-8 shrink-0 place-items-center border border-white/15 text-white/75"><Layers3 size={15} /></div>
          <div>
            <div className="mono text-[8px] uppercase tracking-[.16em] text-white/40">01 / context</div>
            <div className="mt-1 text-[11px] font-medium text-white/90 sm:text-xs">Your real-world inputs</div>
          </div>
        </div>
        <div className="col-start-3 row-start-1 flex min-h-[76px] items-center gap-3 border border-white/15 bg-[#1F2226] px-3 sm:px-4">
          <div className="grid h-8 w-8 shrink-0 place-items-center border border-white/15 text-white/75"><Network size={15} /></div>
          <div>
            <div className="mono text-[8px] uppercase tracking-[.16em] text-white/40">02 / reasoning</div>
            <div className="mt-1 text-[11px] font-medium text-white/90 sm:text-xs">Models &amp; logic</div>
          </div>
        </div>
        <div className="col-start-1 row-start-3 flex min-h-[76px] items-center gap-3 border border-white/15 bg-[#1F2226] px-3 sm:px-4">
          <div className="grid h-8 w-8 shrink-0 place-items-center border border-white/15 text-white/75"><Workflow size={15} /></div>
          <div>
            <div className="mono text-[8px] uppercase tracking-[.16em] text-white/40">03 / orchestration</div>
            <div className="mt-1 text-[11px] font-medium text-white/90 sm:text-xs">Tools &amp; workflows</div>
          </div>
        </div>
        <div className="col-start-3 row-start-3 flex min-h-[76px] items-center gap-3 border border-[#d96725]/45 bg-[#1F2226] px-3 sm:px-4">
          <div className="grid h-8 w-8 shrink-0 place-items-center bg-[#d96725] text-[#1F2226]"><Check size={16} strokeWidth={2.5} /></div>
          <div>
            <div className="mono text-[8px] uppercase tracking-[.16em] text-[#e68a52]">04 / outcome</div>
            <div className="mt-1 text-[11px] font-medium text-white/90 sm:text-xs">Useful work, shipped</div>
          </div>
        </div>
        <div className="relative col-start-2 row-start-1 row-span-3 flex h-full items-center justify-center">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/20" />
          <div className="absolute left-0 top-[24%] h-px w-full bg-white/20" />
          <div className="absolute left-0 bottom-[24%] h-px w-full bg-white/20" />
          <div className="relative grid h-14 w-14 place-items-center rounded-full border border-[#d96725]/60 bg-[#25292e] text-[#e37c3e]">
            <Orbit className="orbit absolute inset-1.5" size={44} strokeWidth={0.65} />
            <span className="h-2 w-2 rounded-full bg-[#d96725]" />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="mono text-[9px] text-white/40">COMPOSABLE BY DESIGN</span>
        <span className="mono text-[9px] text-white/40">HUMAN OVERSIGHT INCLUDED</span>
      </div>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-grain min-h-screen min-h-[100dvh] overflow-hidden">
      <header className="sticky top-0 z-30 border-b border-black/[.08] bg-[#f5f3ee]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="#top" aria-label="Eolarity Innovations home" onClick={closeMenu} className="shrink-0">
            <img className="h-auto w-[178px] sm:w-[205px]" src="/__mockup/images/eolarity-horizontal.png" alt="Eolarity Innovations LLP" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="nav-link text-[12px] font-medium text-[#414449] transition-colors hover:text-[#1F2226]" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden items-center gap-2 bg-[#1F2226] px-4 py-3 text-[11px] font-semibold text-[#f2f2f2] transition-colors hover:bg-[#D96725] hover:text-[#1F2226] md:inline-flex">
            Talk through an idea <ArrowUpRight size={14} />
          </a>
          <button
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center border border-black/15 text-[#1F2226] md:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-menu border-t border-black/10 bg-[#f5f3ee] px-5 pb-6 pt-3 md:hidden">
            {navItems.map((item, i) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="flex items-center justify-between border-b border-black/10 py-4 text-sm font-medium">
                <span><span className="mono mr-4 text-[10px] text-[#D96725]">0{i + 1}</span>{item.label}</span><ArrowUpRight size={15} />
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="mt-5 flex items-center justify-between bg-[#1F2226] px-4 py-4 text-sm font-semibold text-white">
              Talk through an idea <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="top" className="relative bg-[#1F2226] text-[#f2f2f2]">
          <div className="absolute left-0 top-0 h-full w-[6px] bg-[#D96725]" />
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-14 lg:px-14 lg:pb-24 lg:pt-[92px]">
            <div className="relative z-10">
              <div className="reveal eyebrow flex items-center gap-3 text-white/55">
                <span className="h-px w-7 bg-[#D96725]" />
                Independent AI &amp; engineering
              </div>
              <h1 className="display reveal reveal-delay-1 mt-7 max-w-[720px] text-[clamp(3.2rem,7.25vw,6.9rem)] font-medium leading-[.96]">
                AI that earns<br />
                <span className="text-[#e47737]">its place</span> in the work.
              </h1>
              <p className="reveal reveal-delay-2 mt-7 max-w-[490px] text-[15px] leading-[1.8] text-white/65 sm:text-[17px]">
                We help organisations make sense of AI, then engineer the parts that make a real difference. We also build products of our own.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <a href="#work" className="inline-flex items-center gap-3 bg-[#D96725] px-5 py-4 text-[12px] font-semibold text-[#1F2226] transition-colors hover:bg-[#ef8c4b]">
                  See how we work <ArrowRight size={16} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-medium text-white/75 transition-colors hover:text-white">
                  Start a conversation <ArrowDownRight size={15} />
                </a>
              </div>
              <div className="mt-14 flex items-center gap-4 border-t border-white/15 pt-5">
                <img src="/brand-assets/eolarity-mark.png" alt="" className="h-7 w-7 object-contain opacity-80" />
                <span className="mono text-[9px] uppercase leading-relaxed tracking-[.13em] text-white/45">Architecture in mind.<br className="sm:hidden" /> A useful thing in hand.</span>
              </div>
            </div>
            <div className="reveal reveal-delay-2 relative">
              <div className="absolute -right-4 -top-5 z-10 hidden bg-[#D96725] px-3 py-2 mono text-[9px] uppercase tracking-[.15em] text-[#1F2226] sm:block">Ideas → working systems</div>
              <SystemSketch />
              <div className="mt-3 flex justify-between mono text-[8px] uppercase tracking-[.12em] text-white/35">
                <span>Strategy · Product · Engineering</span>
                <span>IN / OUT</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4 sm:px-10 lg:px-14">
              <span className="eyebrow text-white/35">Built for real conditions</span>
              <span className="h-3 w-px bg-white/20" />
              <span className="text-[10px] text-white/60">Human judgement stays in the loop</span>
              <span className="hidden h-3 w-px bg-white/20 sm:block" />
              <span className="text-[10px] text-white/60">The right model, not a model for everything</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f3ee] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36">
          <div className="mx-auto grid max-w-[1290px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
            <div>
              <SectionLabel>The point of the work</SectionLabel>
              <p className="display mt-7 text-[clamp(2.4rem,4.5vw,4rem)] font-medium leading-[1.05]">
                Less theatre.<br />More <span className="text-[#D96725]">traction.</span>
              </p>
            </div>
            <div className="lg:pt-8">
              <p className="max-w-[700px] text-[19px] leading-[1.65] tracking-[-.025em] text-[#34373b] sm:text-[24px]">
                AI is moving quickly. Your decisions still need to hold up in the real world: your people, your systems, your constraints.
              </p>
              <div className="mt-8 grid gap-8 border-t border-black/15 pt-6 sm:grid-cols-2">
                <p className="text-sm leading-[1.8] text-black/60">
                  Eolarity is an AI innovation and engineering company. We bring clear thinking to the uncertain bits—and technical depth to the parts that have to work.
                </p>
                <p className="text-sm leading-[1.8] text-black/60">
                  Sometimes that means helping a team choose its next move. Sometimes it means building the system, integration or product that makes that move possible.
                </p>
              </div>
              <a href="#approach" className="arrow-link mt-8 inline-flex items-center gap-3 text-xs font-semibold text-[#1F2226] hover:text-[#D96725]">
                Our approach, without the theatre <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#eae7df] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1290px]">
            <div className="grid gap-7 md:grid-cols-[1fr_.7fr] md:items-end">
              <div>
                <SectionLabel>Two ways to work together</SectionLabel>
                <h2 className="display mt-6 max-w-[760px] text-[clamp(2.75rem,5vw,4.8rem)] font-medium leading-[.98]">From your first question<br className="hidden sm:block" /> to what comes next.</h2>
              </div>
              <p className="max-w-[390px] text-sm leading-[1.8] text-black/60 md:justify-self-end">
                A small, senior team that can move between the big picture and the implementation details.
              </p>
            </div>
            <div className="mt-12 grid border-t border-black/20 lg:grid-cols-2">
              <article className="service-card border-b border-black/20 py-8 sm:py-10 lg:border-b-0 lg:border-r lg:pr-12">
                <div className="flex items-start justify-between">
                  <span className="service-index mono text-[11px] text-black/40 transition-colors">01 / FOR ORGANISATIONS</span>
                  <Code2 size={21} strokeWidth={1.4} className="text-[#D96725]" />
                </div>
                <h3 className="display mt-10 text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[1.05]">Advice that reaches<br />the build.</h3>
                <p className="mt-5 max-w-[475px] text-sm leading-[1.8] text-black/60">
                  Get clear on where AI can help, what it takes to deliver, and how to move from a sound plan to a working system.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {consulting.map((item, i) => (
                    <li key={item} className="flex items-start gap-4 text-[12px] leading-relaxed text-[#34373b] sm:text-[13px]">
                      <span className="mono mt-[2px] text-[9px] text-[#D96725]">0{i + 1}</span>{item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="service-card border-b border-black/20 py-8 sm:py-10 lg:border-b-0 lg:pl-12">
                <div className="flex items-start justify-between">
                  <span className="service-index mono text-[11px] text-black/40 transition-colors">02 / OUR OWN WORK</span>
                  <Blocks size={21} strokeWidth={1.4} className="text-[#D96725]" />
                </div>
                <h3 className="display mt-10 text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[1.05]">Building beyond<br />the brief.</h3>
                <p className="mt-5 max-w-[475px] text-sm leading-[1.8] text-black/60">
                  Our work doesn’t stop at client engagements. We investigate problems, test ideas and develop AI products for a wider market.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {ownedProduct.map((item, i) => (
                    <li key={item} className="flex items-start gap-4 text-[12px] leading-relaxed text-[#34373b] sm:text-[13px]">
                      <span className="mono mt-[2px] text-[9px] text-[#D96725]">0{i + 1}</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 border-l-2 border-[#D96725] pl-4 text-xs leading-[1.7] text-black/55">
                  We’ll share specific product work when it’s ready to be useful—not just ready to be announced.
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="approach" className="bg-[#400D09] px-6 py-20 text-[#f2f2f2] sm:px-10 sm:py-28 lg:px-14 lg:py-32">
          <div className="mx-auto grid max-w-[1290px] gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-24">
            <div>
              <SectionLabel dark>Our operating principle</SectionLabel>
              <h2 className="display mt-7 max-w-[560px] text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[.98]">
                Curious about<br />what’s next.<br /><span className="text-[#e47737]">Grounded in what works.</span>
              </h2>
              <p className="mt-7 max-w-[420px] text-sm leading-[1.85] text-white/60">
                We follow emerging AI closely—including agentic systems and workflow automation. We treat them as engineering choices, not magic words.
              </p>
            </div>
            <div className="self-end">
              <div className="border-t border-white/25">
                {[
                  ['01', 'Start with the work', 'Understand the job, the people doing it and the cost of getting it wrong.'],
                  ['02', 'Choose the right shape', 'Use the simplest architecture that can meet the need. Combine models, software and human judgement deliberately.'],
                  ['03', 'Make it earn trust', 'Build in evaluation, clear boundaries and room to improve before a system becomes part of the routine.'],
                ].map(([num, title, description]) => (
                  <div key={num} className="grid grid-cols-[48px_1fr] gap-3 border-b border-white/25 py-6 sm:grid-cols-[60px_1fr] sm:py-7">
                    <span className="mono pt-1 text-[10px] text-[#e47737]">{num}</span>
                    <div>
                      <h3 className="display text-xl font-medium sm:text-2xl">{title}</h3>
                      <p className="mt-2 max-w-[480px] text-xs leading-[1.8] text-white/55 sm:text-[13px]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="bg-[#f5f3ee] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
          <div className="mx-auto grid max-w-[1290px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div>
              <SectionLabel>Open, where it makes sense</SectionLabel>
              <h2 className="display mt-7 text-[clamp(2.75rem,5vw,4.6rem)] font-medium leading-[.98]">Good engineering<br />isn't a loyalty test.</h2>
              <p className="mt-6 max-w-[460px] text-sm leading-[1.85] text-black/60">
                We contribute to and use open-source software, while working with established providers too. The right mix depends on the problem, the people and the operating context.
              </p>
            </div>
            <div className="relative min-h-[300px] overflow-hidden bg-[#eae7df] p-6 sm:min-h-[330px] sm:p-9">
              <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(135deg, transparent 49.8%, rgba(31,34,38,.12) 50%, transparent 50.2%)', backgroundSize: '32px 32px' }} />
              <div className="relative flex items-start justify-between">
                <span className="mono text-[9px] uppercase tracking-[.15em] text-black/45">A healthy ecosystem</span>
                <GitBranch size={18} strokeWidth={1.4} className="text-[#D96725]" />
              </div>
              <div className="relative mx-auto mt-9 grid max-w-[485px] grid-cols-2 gap-3 sm:mt-12">
                <div className="col-span-2 mx-auto flex min-h-[60px] w-[60%] items-center justify-center border border-[#1F2226]/30 bg-[#f5f3ee] px-3 text-center text-[11px] font-medium">The problem to solve</div>
                <div className="col-span-2 mx-auto h-5 w-px bg-[#1F2226]/30" />
                <div className="flex min-h-[82px] flex-col justify-center border border-[#1F2226]/20 bg-[#f5f3ee] px-4">
                  <span className="mono text-[8px] uppercase tracking-[.12em] text-[#D96725]">Open source</span>
                  <span className="mt-2 text-[11px] font-medium">Shared tools &amp; ideas</span>
                </div>
                <div className="flex min-h-[82px] flex-col justify-center border border-[#1F2226]/20 bg-[#f5f3ee] px-4">
                  <span className="mono text-[8px] uppercase tracking-[.12em] text-[#D96725]">Providers</span>
                  <span className="mt-2 text-[11px] font-medium">Proven services</span>
                </div>
                <div className="col-span-2 mx-auto h-5 w-px bg-[#1F2226]/30" />
                <div className="col-span-2 mx-auto flex min-h-[58px] w-[78%] items-center justify-center gap-2 bg-[#1F2226] px-4 text-center text-[11px] font-medium text-[#f2f2f2]"><Check size={14} className="text-[#D96725]" /> A considered implementation</div>
              </div>
              <div className="absolute bottom-4 right-5 mono text-[8px] uppercase tracking-[.12em] text-black/35">Fit before fashion</div>
            </div>
          </div>
        </section>

        <section className="bg-[#D96725] px-6 py-16 text-[#1F2226] sm:px-10 sm:py-20 lg:px-14">
          <div className="mx-auto grid max-w-[1290px] gap-10 md:grid-cols-[.7fr_1.3fr] md:items-center">
            <div>
              <span className="eyebrow text-black/55">The way in</span>
              <h2 className="display mt-5 max-w-[460px] text-[clamp(2.5rem,4.4vw,4.2rem)] font-medium leading-[.98]">Think clearly.<br />Build deliberately.</h2>
            </div>
            <div className="grid gap-y-7 sm:grid-cols-2">
              {[
                ['01', 'Listen', 'Understand the context before proposing a solution.'],
                ['02', 'Frame', 'Make the opportunity, trade-offs and risks legible.'],
                ['03', 'Build', 'Work in small steps toward something people can use.'],
                ['04', 'Learn', 'Evaluate what happened, then decide what should change.'],
              ].map(([num, title, description]) => (
                <div key={num} className="border-t border-black/25 pt-4 sm:mr-8">
                  <div className="flex items-center gap-3">
                    <span className="mono text-[9px]">{num}</span><span className="h-px w-6 bg-black/30" /><h3 className="display text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-2 max-w-[260px] pl-12 text-[11px] leading-[1.7] text-black/65">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#eae7df] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
          <div className="mx-auto grid max-w-[1290px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <SectionLabel>Who we are</SectionLabel>
              <h2 className="display mt-7 text-[clamp(2.75rem,5vw,4.6rem)] font-medium leading-[.98]">Small by design.<br />Serious about<br />the details.</h2>
            </div>
            <div className="lg:pt-10">
              <p className="max-w-[680px] text-[19px] leading-[1.65] tracking-[-.025em] text-[#34373b] sm:text-[23px]">
                Eolarity Innovations LLP is an India-based AI innovation and engineering company. We’re a small team comfortable thinking through architecture and shipping something useful.
              </p>
              <div className="mt-9 grid gap-4 border-t border-black/15 pt-6 sm:grid-cols-3">
                <div className="sm:border-r sm:border-black/15 sm:pr-5">
                  <span className="mono text-[8px] uppercase tracking-[.15em] text-black/45">Registered</span>
                  <p className="mt-2 text-[12px] font-medium">Startup India</p>
                </div>
                <div className="sm:border-r sm:border-black/15 sm:px-5">
                  <span className="mono text-[8px] uppercase tracking-[.15em] text-black/45">Structure</span>
                  <p className="mt-2 text-[12px] font-medium">Limited Liability Partnership</p>
                </div>
                <div className="sm:pl-5">
                  <span className="mono text-[8px] uppercase tracking-[.15em] text-black/45">Currently enrolled</span>
                  <p className="mt-2 text-[12px] font-medium">Startup programs from AWS and Replit</p>
                </div>
              </div>
              <p className="mt-5 text-[10px] leading-relaxed text-black/45">Participation is stated here without implying endorsement or a specific program name.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-[#1F2226] px-6 py-20 text-[#f2f2f2] sm:px-10 sm:py-28 lg:px-14 lg:py-32">
          <div className="absolute -right-24 -top-36 h-[420px] w-[420px] rounded-full border border-white/[.08]" aria-hidden="true" />
          <div className="absolute -right-10 -top-20 h-[300px] w-[300px] rounded-full border border-[#D96725]/25" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1290px] gap-9 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <SectionLabel dark>A good place to start</SectionLabel>
              <h2 className="display mt-7 max-w-[790px] text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[.95]">Bring us the<br /><span className="text-[#e47737]">hard question.</span></h2>
              <p className="mt-6 max-w-[440px] text-sm leading-[1.8] text-white/60">
                A rough idea, a stubborn workflow or an AI decision you’re not sure about. We’re interested in the real version.
              </p>
            </div>
            <div className="md:pb-2">
              <span className="inline-flex cursor-default items-center gap-3 border border-white/25 px-5 py-4 text-xs font-semibold text-white/70">
                Contact details coming soon <ArrowUpRight size={15} className="text-[#D96725]" />
              </span>
              <p className="mt-3 max-w-[240px] text-[10px] leading-[1.6] text-white/40">We’re preparing the right way to get in touch. No form here until we can respond to it.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1F2226] px-6 pb-8 text-[#f2f2f2] sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1290px] flex-col gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <img src="/__mockup/images/eolarity-inverted.png" alt="Eolarity Innovations LLP" className="h-auto w-[190px] sm:w-[210px]" />
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] text-white/45">
            <span>AI innovation &amp; engineering</span>
            <a className="transition-colors hover:text-[#e47737]" href="#top">Back to top ↑</a>
            <span>© {new Date().getFullYear()} Eolarity Innovations LLP</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Current() {
  return <Home />;
}

export { Current };