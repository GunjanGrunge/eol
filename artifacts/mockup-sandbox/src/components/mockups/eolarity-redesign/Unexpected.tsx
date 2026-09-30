import './_group.css';
import './Unexpected.css';
import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Code2,
  GitBranch,
  Menu,
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

function IndexTag({ children }: { children: ReactNode }) {
  return <span className="unexpected-index">{children}</span>;
}

function Label({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className={`unexpected-label${light ? ' is-light' : ''}`}>
      <span aria-hidden="true" />
      {children}
    </div>
  );
}

function Unexpected() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="unexpected-page" id="top">
      <header className="unexpected-header">
        <a href="#top" className="unexpected-brand" aria-label="Eolarity Innovations home" onClick={closeMenu}>
          <img src="/__mockup/images/eolarity-horizontal.png" alt="Eolarity Innovations LLP" />
        </a>
        <span className="unexpected-header-note">Independent AI / engineering / India</span>
        <nav aria-label="Main navigation" className="unexpected-nav">
          {navItems.map((item, i) => (
            <a key={item.href} href={item.href}><span>0{i + 1}</span>{item.label}</a>
          ))}
        </nav>
        <a className="unexpected-header-cta" href="#contact">Start with a question <ArrowUpRight size={15} /></a>
        <button
          className="unexpected-menu-button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="unexpected-mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        {menuOpen && (
          <nav id="unexpected-mobile-nav" aria-label="Mobile navigation" className="unexpected-mobile-nav">
            {navItems.map((item, i) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                <span><IndexTag>0{i + 1}</IndexTag>{item.label}</span><ArrowUpRight size={16} />
              </a>
            ))}
            <a className="mobile-contact" href="#contact" onClick={closeMenu}>Start with a question <ArrowUpRight size={16} /></a>
          </nav>
        )}
      </header>

      <main>
        <section className="unexpected-cover" aria-labelledby="unexpected-title">
          <div className="cover-topline">
            <span>FIELD NOTES / 001</span>
            <span>AI, applied with judgement</span>
            <span>Independent practice · India</span>
          </div>
          <div className="cover-layout">
            <div className="cover-copy">
              <Label>Engineering for the work in front of you</Label>
              <h1 id="unexpected-title">Make the<br /><em>useful</em> thing.</h1>
              <p className="cover-deck">We help organisations make sense of AI, then engineer the parts that make a real difference. We also build products of our own.</p>
              <div className="cover-actions">
                <a href="#work" className="unexpected-button">See how we work <ArrowRight size={17} /></a>
                <a href="#contact" className="unexpected-text-link">Start a conversation <ArrowDownRight size={16} /></a>
              </div>
            </div>
            <aside className="workshop-note" aria-label="Our working principles">
              <div className="note-heading">
                <span>SHOP NOTE</span><span>01—04</span>
              </div>
              <div className="note-big">Less<br />promise.<br /><b>More proof.</b></div>
              <div className="note-rule" />
              <div className="note-foot">
                <span>Architecture in mind.</span>
                <span>A useful thing in hand.</span>
              </div>
              <span className="note-stamp" aria-hidden="true">E</span>
            </aside>
          </div>
          <div className="cover-bottomline">
            <span>01 — STRATEGY</span><span>02 — PRODUCT</span><span>03 — ENGINEERING</span>
            <span className="cover-scroll">READ THE JOURNAL <ArrowDownRight size={14} /></span>
          </div>
        </section>

        <section className="journal-intro" aria-labelledby="point-title">
          <div className="journal-margin"><span>01</span><span>EDITORIAL</span></div>
          <div className="journal-body">
            <Label>The point of the work</Label>
            <div className="intro-grid">
              <h2 id="point-title">Less theatre.<br /><span>More traction.</span></h2>
              <div className="intro-copy">
                <p className="intro-lede">AI is moving quickly. Your decisions still need to hold up in the real world: your people, your systems, your constraints.</p>
                <div className="intro-columns">
                  <p>Eolarity is an AI innovation and engineering company. We bring clear thinking to the uncertain bits—and technical depth to the parts that have to work.</p>
                  <p>Sometimes that means helping a team choose its next move. Sometimes it means building the system, integration or product that makes that move possible.</p>
                </div>
                <a href="#approach" className="unexpected-inline-link">Our approach, without the theatre <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="workshop-section">
          <div className="section-kicker">
            <Label>Two ways to work together</Label>
            <span className="kicker-side">A SMALL SENIOR TEAM / BIG PICTURE TO BUILD</span>
          </div>
          <div className="work-title-row">
            <h2>From first<br className="mobile-break" /> question to <i>next.</i></h2>
            <p>Move between the big picture and the implementation details, without losing the thread.</p>
          </div>
          <div className="work-grid">
            <article className="work-entry">
              <div className="entry-head"><span>01 / FOR ORGANISATIONS</span><Code2 size={20} /></div>
              <h3>Advice that<br />reaches the build.</h3>
              <p className="entry-description">Get clear on where AI can help, what it takes to deliver, and how to move from a sound plan to a working system.</p>
              <ul>{consulting.map((item, i) => <li key={item}><IndexTag>0{i + 1}</IndexTag>{item}</li>)}</ul>
              <span className="entry-ghost" aria-hidden="true">A</span>
            </article>
            <article className="work-entry work-entry-rust">
              <div className="entry-head"><span>02 / OUR OWN WORK</span><Blocks size={20} /></div>
              <h3>Building beyond<br />the brief.</h3>
              <p className="entry-description">Our work doesn’t stop at client engagements. We investigate problems, test ideas and develop AI products for a wider market.</p>
              <ul>{ownedProduct.map((item, i) => <li key={item}><IndexTag>0{i + 1}</IndexTag>{item}</li>)}</ul>
              <div className="entry-aside">We’ll share specific product work when it’s ready to be useful—not just ready to be announced.</div>
              <span className="entry-ghost" aria-hidden="true">B</span>
            </article>
          </div>
        </section>

        <section id="approach" className="principles-section">
          <div className="principles-heading">
            <div><Label light>Our operating principle</Label>
              <h2>Curious about<br />what’s next.<br /><em>Grounded in<br className="mobile-break" /> what works.</em></h2>
            </div>
            <p>We follow emerging AI closely—including agentic systems and workflow automation. We treat them as engineering choices, not magic words.</p>
          </div>
          <div className="principle-list">
            {[
              ['01', 'Start with the work', 'Understand the job, the people doing it and the cost of getting it wrong.'],
              ['02', 'Choose the right shape', 'Use the simplest architecture that can meet the need. Combine models, software and human judgement deliberately.'],
              ['03', 'Make it earn trust', 'Build in evaluation, clear boundaries and room to improve before a system becomes part of the routine.'],
            ].map(([num, title, description]) => (
              <article className="principle-row" key={num}>
                <span className="principle-number">{num}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowUpRight className="principle-arrow" size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="principles-colophon"><span>ENGINEERING, NOT ENCHANTMENT</span><span>HUMAN JUDGEMENT STAYS IN THE LOOP</span></div>
        </section>

        <section id="ecosystem" className="open-section">
          <div className="open-aside"><span className="open-serial">FIELD NOTE<br />02 / ECOSYSTEM</span><GitBranch size={30} strokeWidth={1.2} /></div>
          <div className="open-content">
            <Label>Open, where it makes sense</Label>
            <h2>Good engineering<br />isn’t a <span>loyalty test.</span></h2>
            <p className="open-lede">We contribute to and use open-source software, while working with established providers too. The right mix depends on the problem, the people and the operating context.</p>
            <div className="open-statement">
              <span>USE WHAT FITS.</span><span>CONTRIBUTE WHEN WE CAN.</span><span>KEEP THE PROBLEM IN VIEW.</span>
            </div>
            <div className="open-graphic" aria-label="A considered implementation brings together open-source tools, providers and the problem to solve">
              <div className="open-graphic-top"><span>THE QUESTION ISN’T WHICH CAMP.</span><span>IT’S WHAT WORKS HERE.</span></div>
              <div className="open-graphic-grid">
                <article>
                  <span className="graphic-number">01</span>
                  <div><span className="graphic-category">OPEN SOURCE</span><b>Shared tools<br />&amp; ideas</b><small>Contribute / use</small></div>
                </article>
                <article>
                  <span className="graphic-number">02</span>
                  <div><span className="graphic-category">PROVIDERS</span><b>Proven<br />services</b><small>Choose for fit</small></div>
                </article>
              </div>
              <div className="open-result"><span>THE PROBLEM TO SOLVE</span><b>A considered <i>implementation.</i></b><ArrowRight size={18} /></div>
              <span className="open-caption">FIT BEFORE FASHION</span>
            </div>
          </div>
        </section>

        <section className="method-section">
          <div className="method-top"><span>THE WAY IN</span><span>01—04 / A PRACTICE, NOT A PLAYBOOK</span></div>
          <div className="method-layout">
            <h2>Think clearly.<br /><i>Build deliberately.</i></h2>
            <div className="method-steps">
              {[
                ['01', 'Listen', 'Understand the context before proposing a solution.'],
                ['02', 'Frame', 'Make the opportunity, trade-offs and risks legible.'],
                ['03', 'Build', 'Work in small steps toward something people can use.'],
                ['04', 'Learn', 'Evaluate what happened, then decide what should change.'],
              ].map(([num, title, description]) => (
                <article key={num}>
                  <span>{num}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={15} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-marker"><span>THE PEOPLE<br />BEHIND THE PRACTICE</span><img src="/__mockup/images/eolarity-mark.png" alt="" /></div>
          <div className="about-copy">
            <Label>Who we are</Label>
            <h2>Small by design.<br /><span>Serious about<br />the details.</span></h2>
            <p className="about-lede">Eolarity Innovations LLP is an India-based AI innovation and engineering company. We’re a small team comfortable thinking through architecture and shipping something useful.</p>
            <div className="about-facts">
              <div><span>REGISTERED</span><b>Startup India</b></div>
              <div><span>STRUCTURE</span><b>Limited Liability Partnership</b></div>
              <div><span>CURRENTLY ENROLLED</span><b>Startup programs from AWS and Replit</b></div>
            </div>
            <p className="about-clarifier">Participation is stated here without implying endorsement or a specific program name.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-topline"><span>YOUR TURN</span><span>NO POLISHED BRIEF REQUIRED</span></div>
          <div className="contact-layout">
            <div>
              <Label light>A good place to start</Label>
              <h2>Bring us the<br /><em>hard question.</em></h2>
              <p>A rough idea, a stubborn workflow or an AI decision you’re not sure about. We’re interested in the real version.</p>
            </div>
            <div className="contact-hold">
              <span>Contact details<br />coming soon <ArrowUpRight size={17} /></span>
              <p>We’re preparing the right way to get in touch. No form here until we can respond to it.</p>
            </div>
          </div>
          <div className="contact-bottomline"><span>START WITH THE WORK.</span><span>THEN MAKE IT BETTER.</span></div>
        </section>
      </main>

      <footer className="unexpected-footer">
        <a href="#top" aria-label="Eolarity Innovations home"><img src="/__mockup/images/eolarity-inverted.png" alt="Eolarity Innovations LLP" /></a>
        <div><span>AI innovation &amp; engineering</span><a href="#top">Back to top <ArrowUpRight size={13} /></a><span>© {new Date().getFullYear()} Eolarity Innovations LLP</span></div>
      </footer>
    </div>
  );
}

export { Unexpected };