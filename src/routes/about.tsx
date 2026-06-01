import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { Gauge, Layers, Shield, Lightbulb, ArrowRight, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eolarity Innovations LLP" },
      {
        name: "description",
        content:
          "Eolarity Innovations LLP is an India-based GenAI studio registered under Startup India. We build custom solutions and in-house products at the pace of the AI meta.",
      },
      { property: "og:title", content: "About — Eolarity Innovations LLP" },
      { property: "og:description", content: "Who we are and how we work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const principles = [
  { icon: Gauge, title: "Pace", body: "The AI meta shifts weekly. Our defaults — lean teams, sharp scopes, and rapid deployment cycles — ensure we remain at the frontier." },
  { icon: Layers, title: "Clarity", body: "Eolarity represents energy and polarity. We strip away standard market hype to construct systems that generate real cognitive leverage." },
  { icon: Lightbulb, title: "Original Engineering", body: "We actively develop in-house products alongside custom client workloads. Both cycles feed and reinforce each other." },
  { icon: Shield, title: "Rigorous Ownership", body: "Registered LLP in India, recognized under Startup India (DPIIT). We stand behind every architecture we compile." },
];

const milestones = [
  { year: "2024", label: "Founded", desc: "Eolarity Innovations LLP incorporated in India under Startup India (DPIIT)." },
  { year: "2024", label: "First Deployments", desc: "Initial custom GenAI solutions shipped to early enterprise clients." },
  { year: "2025", label: "Product Build", desc: "Education platform and IDE plugin suite enter active development." },
  { year: "2025", label: "181+ Systems", desc: "Active cognitive micro-services and agentic pipelines in production." },
];

const stats = [
  { val: "181+", label: "Live Systems" },
  { val: "<14ms", label: "Edge Latency" },
  { val: "100%", label: "Compliance" },
  { val: "LLP", label: "India Registered" },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const rotateX = useSpring(useMotionValue(0), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useMotionValue(0), { damping: 25, stiffness: 180 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rotateX.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * -12);
    rotateY.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * 12);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(16px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}

const heroWords = "Built for what's next, not what's loud.".split(" ");

function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <div className="relative min-h-screen bg-[#F5F3EF] text-[#1F2226] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D96725]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#400D09]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#1F2226]/8 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(31,34,38,0.06)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
        <div ref={heroRef} className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1F2226]/10 bg-white/70 px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C6470] backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D96725] animate-pulse" />
            Company Profile
          </motion.div>

          <h1 className="text-5xl font-extrabold uppercase tracking-tighter leading-[0.95] md:text-6xl lg:text-7xl max-w-4xl">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="inline-block mr-[0.25em]"
              >
                {word === "next," ? <span className="text-[#D96725]">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 max-w-xl text-base text-[#5C6470] font-medium leading-relaxed"
          >
            Eolarity Innovations LLP is an AI-first studio operating from India. We move fast because the frontier daily evolves — building elegant custom solutions and robust in-house products.
          </motion.p>
        </div>
      </section>

      {/* STATS ROW */}
      <section ref={statsRef} className="border-b border-[#1F2226]/8 bg-white/40 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl font-extrabold tracking-tight text-[#1F2226]">{s.val}</div>
                <div className="mt-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C6470]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-[#1F2226]/10 bg-white p-8 shadow-sm hover:shadow-md transition-all hover:border-[#D96725]/30"
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#D96725]/10 text-[#D96725]">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-[#1F2226]">Our Origin</h3>
          <p className="mt-4 text-sm text-[#5C6470] leading-relaxed">
            Eolarity was established with a singular conviction: most organizations attempting to adopt GenAI are chasing outdated frameworks. We invert the process.
            We analyze emergent capability patterns at the research frontier, then immediately compile them into functional software libraries, IDE tools, and agentic workflows.
          </p>
          <p className="mt-4 text-sm text-[#5C6470] leading-relaxed">
            Registered as an LLP in India and recognized under Startup India, we operate with maximum concentration and lean engineering squads.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-[#1F2226]/10 bg-white p-8 shadow-sm hover:shadow-md transition-all hover:border-[#D96725]/30"
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1F2226]/10 text-[#1F2226]">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-[#1F2226]">Core Focus Fields</h3>
          <ul className="mt-6 space-y-4 text-sm text-[#5C6470]">
            {[
              "Custom agentic systems and secure enterprise RAG architectures.",
              "Developer leverage interfaces: custom IDE plugins and code generation tools.",
              "In-house products spanning dynamic technical education platforms.",
              "Applied benchmarking, model evaluations, and meta-stack audits.",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D96725] shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section ref={timelineRef} className="border-t border-[#1F2226]/8 bg-white/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D96725]">Timeline</span>
            <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tighter text-[#1F2226] md:text-5xl">
              Company milestones.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1F2226]/8 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-8 md:pl-16"
                >
                  <div className="absolute left-0 top-1 hidden md:flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1F2226]/10 bg-white shadow-sm">
                    <span className="text-[10px] font-mono font-black text-[#D96725]">{m.year}</span>
                  </div>
                  <div className="rounded-xl border border-[#1F2226]/10 bg-white p-6 flex-1 hover:border-[#D96725]/30 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono font-black text-[#D96725] md:hidden">{m.year}</span>
                      <span className="text-sm font-bold uppercase tracking-tight text-[#1F2226]">{m.label}</span>
                    </div>
                    <p className="text-xs text-[#5C6470] leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D96725]">How we operate</span>
          <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tighter text-[#1F2226] md:text-5xl">
            Architectural principles.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <TiltCard className="h-full">
                <div className="group h-full rounded-xl border border-[#1F2226]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#D96725]/30 duration-300">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#D96725]/10 text-[#D96725] transition-all group-hover:bg-[#D96725] group-hover:text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-[#1F2226] uppercase tracking-tight">{p.title}</h4>
                  <p className="mt-2 text-xs text-[#5C6470] leading-relaxed font-medium">{p.body}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden rounded-xl border border-[#D96725]/30 bg-white p-8 md:p-12 shadow-md"
        >
          <div className="absolute -right-12 -top-12 w-[200px] h-[200px] rounded-full bg-[#D96725]/5 blur-[60px] pointer-events-none" />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1F2226] uppercase tracking-tight">Ready to spin up a connection?</h3>
              <p className="mt-2 text-sm text-[#5C6470] font-medium">Let&apos;s discuss how your team can adopt GenAI with clarity.</p>
            </div>
            <Button asChild size="lg" className="bg-[#D96725] hover:bg-[#D95323] text-white rounded-none font-bold border-0">
              <Link to="/contact">
                Contact Eolarity <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
