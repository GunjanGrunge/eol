import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  GraduationCap,
  Code2,
  Zap,
  Rocket,
  ArrowRight,
  Cpu,
  GitBranch,
  BarChart3,
  ShieldCheck,
  Layers,
  Timer,
  ArrowUpRight,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Eolarity Innovations LLP" },
      {
        name: "description",
        content:
          "In-house Eolarity products across AI education, coding plugins and productivity — built in public, shipped fast.",
      },
      { property: "og:title", content: "Products — Eolarity Innovations LLP" },
      { property: "og:description", content: "Education, coding and productivity products." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const products = [
  {
    icon: GraduationCap,
    title: "Education Platform",
    body: "Hands-on learning for the GenAI era. Curriculum that updates as fast as the models do.",
    status: "In development",
    preview: ["curriculum_v2.json", "lesson_graph.ts", "model_eval.py"],
    accent: "#D96725",
  },
  {
    icon: Code2,
    title: "Coding Plugins",
    body: "IDE plugins that turn LLM workflows into actual developer leverage — not autocomplete fatigue.",
    status: "In development",
    preview: ["plugin_manifest.json", "speculative_draft.ts", "context_compressor.py"],
    accent: "#1F2226",
  },
  {
    icon: Zap,
    title: "Productivity Apps",
    body: "Focused tools that automate the boring layer of knowledge work, one job-to-be-done at a time.",
    status: "In development",
    preview: ["workflow_engine.ts", "task_graph.json", "automation_rules.yaml"],
    accent: "#D95323",
  },
  {
    icon: Rocket,
    title: "More shipping soon",
    body: "We build in-house when the market hasn't caught up yet. Several pieces are queued — stay close.",
    status: "Coming soon",
    preview: ["???", "classified.enc", "stay_close.md"],
    accent: "#5C6470",
  },
];

const differentiators = [
  { icon: Cpu, stat: "Fine-tuned core", label: "Every product runs on our own model weights — not generic APIs." },
  { icon: GitBranch, stat: "Open iteration", label: "Built in public with rapid versioning and user feedback loops." },
  { icon: BarChart3, stat: "Telemetry-first", label: "Real-time performance monitoring baked into the product layer." },
  { icon: ShieldCheck, stat: "Privacy-native", label: "Vendor-agnostic, privacy-first architecture by default." },
  { icon: Layers, stat: "Modular stack", label: "Composable components — integrate what you need, skip what you don't." },
  { icon: Timer, stat: "<14ms latency", label: "Edge-compiled inference — no round-trip API lag." },
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
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}

const heroWords = "Built in-house. Shipped in public.".split(" ");

function ProductsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const diffRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const diffInView = useInView(diffRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#1F2226]">

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(31,34,38,0.07)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
        <div className="absolute -right-48 top-0 w-[500px] h-[500px] rounded-full bg-[#D96725]/5 blur-[100px] pointer-events-none" />

        <div ref={heroRef} className="relative max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1F2226]/10 bg-white/70 px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C6470] backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D96725] animate-pulse" />
            Products
            <span className="ml-1 rounded-full bg-[#D96725]/15 px-2 py-0.5 text-[#D96725]">4 active</span>
          </motion.div>

          <h1 className="text-5xl font-extrabold uppercase tracking-tighter leading-[0.95] md:text-6xl lg:text-7xl">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="inline-block mr-[0.25em]"
              >
                {word.includes("public") ? <span className="text-[#D96725]">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-6 max-w-xl text-base text-[#5C6470] font-medium leading-relaxed"
          >
            Eolarity doesn&apos;t just deliver client work — we build product. Here&apos;s what&apos;s on the bench.
          </motion.p>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#1F2226]/10 bg-white/70 backdrop-blur-md p-0 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Sliding top accent bar */}
                  <motion.div
                    className="absolute inset-x-0 top-0 h-1 origin-left"
                    style={{ backgroundColor: p.accent }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div
                        className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all group-hover:scale-110"
                        style={{ backgroundColor: `${p.accent}18`, color: p.accent }}
                      >
                        <p.icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="rounded-full border px-3 py-1 text-xs font-mono font-bold"
                          style={{ borderColor: `${p.accent}40`, backgroundColor: `${p.accent}12`, color: p.accent }}
                        >
                          {p.status}
                        </span>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 2, y: -2 }}
                        >
                          <ArrowUpRight className="h-4 w-4 text-[#5C6470]" />
                        </motion.div>
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-bold uppercase tracking-tight text-[#1F2226] group-hover:text-[#D96725] transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#5C6470] leading-relaxed">{p.body}</p>
                  </div>

                  {/* Mock file preview */}
                  <div className="mx-8 mb-8 rounded-lg bg-[#1E1E24] border border-white/5 p-4 font-mono text-[11px]">
                    <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                      <div className="flex gap-1">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
                      </div>
                      <span className="text-white/30 text-[9px] uppercase tracking-wider">Project files</span>
                    </div>
                    {p.preview.map((file, fi) => (
                      <div key={fi} className="flex items-center gap-2 py-0.5">
                        <span className="text-[#D96725]/60">▸</span>
                        <span className="text-white/50">{file}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATORS BENTO */}
      <section ref={diffRef} className="border-t border-[#1F2226]/8 bg-white/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D96725]">Why Eolarity products</span>
            <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tighter text-[#1F2226] md:text-5xl">
              Built different.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.stat}
                initial={{ opacity: 0, y: 30 }}
                animate={diffInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-xl border border-[#1F2226]/10 bg-white p-6 hover:border-[#D96725]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#D96725]/10 text-[#D96725] group-hover:bg-[#D96725] group-hover:text-white transition-all">
                  <d.icon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-tight text-[#1F2226]">{d.stat}</h4>
                <p className="mt-2 text-xs text-[#5C6470] leading-relaxed">{d.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY ACCESS CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#1F2226] px-8 py-16 md:px-16 shadow-2xl text-center">
            <div className="absolute -left-24 -bottom-24 w-[400px] h-[400px] rounded-full bg-[#D96725]/10 blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,103,37,0.04)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

            <div className="relative max-w-2xl mx-auto">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D96725]">Early access</span>
              <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-white leading-[0.95] md:text-5xl">
                Want early access?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-sm text-white/60 leading-relaxed">
                Drop us a line and tell us which product you&apos;re curious about. We&apos;ll loop you in as we open up access.
              </p>
              <div className="mt-10 flex justify-center">
                <Button asChild size="lg" className="group relative overflow-hidden bg-[#D96725] hover:bg-[#D95323] text-white rounded-none font-bold px-8 border-0">
                  <Link to="/contact">
                    <motion.span
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
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
