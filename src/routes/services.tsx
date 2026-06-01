import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  BrainCircuit,
  PenLine,
  Microscope,
  GitBranch,
  Lightbulb,
  ArrowRight,
  ArrowUpRight,
  Search,
  Cpu,
  Hammer,
  Rocket,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Eolarity Innovations LLP" },
      {
        name: "description",
        content:
          "Custom AI solutions, content production, research, consulting and solutioning around the current GenAI meta.",
      },
      { property: "og:title", content: "Services — Eolarity Innovations LLP" },
      { property: "og:description", content: "AI solutions, content, research and consulting." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    body: "End-to-end GenAI builds — from problem framing to production. Agents, RAG pipelines, custom models and integrations.",
    bullets: ["Custom LLM workflows", "Agentic systems", "RAG & data pipelines", "Production deployment"],
    glow: "rgba(217,103,37,0.18)",
  },
  {
    icon: PenLine,
    title: "Content Production",
    body: "AI-assisted content systems that scale without losing voice — for marketing, education or product.",
    bullets: ["Content engines", "Editorial workflows", "Multi-modal assets"],
    glow: "rgba(217,103,37,0.14)",
  },
  {
    icon: Microscope,
    title: "Research",
    body: "Focused applied research on emerging models, techniques and the current meta — translated into something you can ship.",
    bullets: ["Model evaluation", "Capability deep-dives", "Prototyping"],
    glow: "rgba(217,103,37,0.16)",
  },
  {
    icon: GitBranch,
    title: "Meta-Aware Solutioning",
    body: "Solutions designed around what's working right now in the AI ecosystem — not yesterday's stack.",
    bullets: ["Current-stack architecture", "Vendor-agnostic design", "Future-proof patterns"],
    glow: "rgba(217,103,37,0.14)",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    body: "Strategic guidance for teams adopting GenAI — workshops, audits and a clear roadmap.",
    bullets: ["GenAI strategy", "Stack & vendor audits", "Team enablement"],
    glow: "rgba(217,103,37,0.16)",
  },
];

const marqueeItems = [
  "Model Fine-Tuning", "Agentic Systems", "RAG Pipelines", "LLM Evaluation",
  "IDE Plugins", "Applied Research", "GenAI Strategy", "Edge Deployment",
  "Multi-Agent Consensus", "Vector Stores", "Content Engines", "DPO Alignment",
];

const processSteps = [
  { icon: Search, step: "01", label: "Discovery", desc: "Deep audit of your stack, goals, and the current AI meta." },
  { icon: Cpu, step: "02", label: "Architecture", desc: "Vendor-agnostic system design built for your exact constraints." },
  { icon: Hammer, step: "03", label: "Build", desc: "Rapid iteration with custom fine-tuning and agent pipelines." },
  { icon: Rocket, step: "04", label: "Deploy", desc: "Production-grade rollout on low-latency edge infrastructure." },
  { icon: TrendingUp, step: "05", label: "Optimize", desc: "Continuous telemetry monitoring and capability updates." },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const rotateX = useSpring(useMotionValue(0), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useMotionValue(0), { damping: 25, stiffness: 180 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rotateX.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * -14);
    rotateY.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * 14);
  }
  function handleMouseLeave() { rotateX.set(0); rotateY.set(0); }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}

const headline = "Custom GenAI work, end to end.".split(" ");

function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#1F2226]">

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(31,34,38,0.07)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
        <div className="absolute -left-32 top-0 w-[500px] h-[500px] rounded-full bg-[#D96725]/5 blur-[100px] pointer-events-none" />

        <div ref={heroRef} className="relative max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1F2226]/10 bg-white/70 px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C6470] backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D96725] animate-pulse" />
            Services
          </motion.div>

          <h1 className="text-5xl font-extrabold uppercase tracking-tighter leading-[0.95] md:text-6xl lg:text-7xl">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="inline-block mr-[0.25em]"
              >
                {word === "end" || word === "end." ? (
                  <span className="text-[#D96725]">{word}</span>
                ) : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 max-w-xl text-base text-[#5C6470] font-medium leading-relaxed"
          >
            We pick the right tools for what you&apos;re building — not what&apos;s loudest. Then we ship it.
          </motion.p>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="relative overflow-hidden border-y border-[#1F2226]/8 bg-white/40 py-3 select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-[11px] font-mono font-bold uppercase tracking-widest text-[#5C6470]">
              <span className="h-1 w-1 rounded-full bg-[#D96725]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* SERVICE CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="h-full">
                <motion.div
                  className="group relative h-full overflow-hidden rounded-2xl border border-[#1F2226]/10 bg-white p-8"
                  initial={{ boxShadow: "0 2px 8px rgba(31,34,38,0.06), 0 1px 2px rgba(31,34,38,0.04)" }}
                  whileHover={{
                    boxShadow: `0 24px 64px ${s.glow}, 0 8px 24px ${s.glow}, 0 2px 8px rgba(31,34,38,0.06)`,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Gradient wash on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ background: "linear-gradient(135deg, rgba(217,103,37,0.04) 0%, transparent 55%)" }}
                  />
                  {/* Animated top border */}
                  <motion.div
                    className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D96725] to-transparent"
                    initial={{ opacity: 0, scaleX: 0.4 }}
                    whileHover={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.35 }}
                  />

                  {/* Icon with animated ring */}
                  <div className="relative mb-6 inline-flex">
                    {/* Pulsing ring on hover */}
                    <motion.span
                      className="absolute inset-0 rounded-xl bg-[#D96725]/20"
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.55, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <motion.div
                      className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#D96725]/10 text-[#D96725]"
                      whileHover={{ backgroundColor: "#D96725", color: "#ffffff", scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <s.icon className="h-6 w-6" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#1F2226] group-hover:text-[#D96725] transition-colors duration-300">{s.title}</h3>
                  <p className="mt-3 text-sm text-[#5C6470] leading-relaxed">{s.body}</p>

                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b, bi) => (
                      <motion.li
                        key={b}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 + bi * 0.05 }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D96725] flex-shrink-0" />
                        <span className="text-[#5C6470] font-medium">{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-[#1F2226]/5 pt-4 text-[10px] font-mono text-[#5C6470]">
                    <span>Surface 0{i + 1}</span>
                    <motion.span
                      className="flex items-center gap-1 text-[#D96725] font-bold"
                      initial={{ opacity: 0, x: -4 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      EXPLORE <ArrowUpRight className="h-3 w-3" />
                    </motion.span>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section ref={processRef} className="border-t border-[#1F2226]/8 bg-white/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D96725]">Process</span>
            <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tighter text-[#1F2226] md:text-5xl">
              How we work.
            </h2>
            <p className="mt-4 text-sm text-[#5C6470] leading-relaxed">
              Every engagement follows the same disciplined execution architecture — tailored to your meta.
            </p>
          </div>

          <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-[#1F2226]/8 hidden md:block" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center md:flex-1"
              >
                <div className="mb-4 relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#1F2226]/10 bg-white shadow-sm">
                    <step.icon className="h-7 w-7 text-[#D96725]" />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#1F2226] text-[9px] font-mono font-black text-white">
                    {step.step}
                  </span>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-[#1F2226]">{step.label}</h4>
                <p className="mt-2 text-xs text-[#5C6470] leading-relaxed md:max-w-[160px]">{step.desc}</p>

                {i < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={processInView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.1 + 0.4 }}
                    className="absolute top-10 -right-4 hidden md:block"
                  >
                    <ArrowRight className="h-4 w-4 text-[#D96725]/40" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#1F2226] px-8 py-16 md:px-16 shadow-2xl">
            <div className="absolute -right-24 -top-24 w-[400px] h-[400px] rounded-full bg-[#D96725]/10 blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,103,37,0.04)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

            <div className="relative max-w-2xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D96725]">Ready to build?</span>
              <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-white leading-[0.95] md:text-5xl">
                Start a conversation.
              </h2>
              <p className="mt-6 text-sm text-white/60 leading-relaxed">
                Submit your project parameters — we&apos;ll compile an actionable blueprint detailing the exact implementation path.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="group relative overflow-hidden bg-[#D96725] hover:bg-[#D95323] text-white rounded-none font-bold px-8 border-0">
                  <Link to="/contact">
                    <motion.span
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                    Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
