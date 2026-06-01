import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  Code2,
  GraduationCap,
  Zap,
  FlaskConical,
  Compass,
  Cpu,
  ArrowUpRight,
  FileCode2,
  Flame,
  ChevronDown
} from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eolarity Innovations LLP — GenAI Solutions, Products & Consulting" },
      {
        name: "description",
        content:
          "Custom GenAI solutions, specialized fine-tuning, in-house products for education, developer plugins and consulting — delivered at the speed of the current AI meta.",
      },
      { property: "og:title", content: "Eolarity Innovations LLP" },
      { property: "og:description", content: "GenAI solutions, model fine-tuning, developer plugins and consulting." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const capabilities = [
  { icon: Flame, title: "Model Fine-Tuning", body: "Custom SFT & DPO training pipelines. Adapting open weights (Llama, Mistral, DeepSeek) for extreme domain precision.", span: 2 },
  { icon: Code2, title: "Coder Plugins", body: "Developer productivity tools and VS Code/JetBrains plugins designed to automate boilerplate and ship faster.", span: 1 },
  { icon: GraduationCap, title: "Education Products", body: "In-house learning platforms structured around real-world AI implementation and fast mastery.", span: 1 },
  { icon: Zap, title: "AI Solutions", body: "Custom GenAI systems tailored to your workflows, data pipelines, and technical stack.", span: 2 },
  { icon: FlaskConical, title: "Applied Research", body: "Rigorous research on emerging LLM techniques to capture immediate capability gains.", span: 1 },
  { icon: Compass, title: "Solutioning & Advisory", body: "Strategic guidance to cut through market noise and implement pragmatic, vendor-agnostic architecture.", span: 1 },
];

const terminalLogs = [
  "Initializing Eolarity GenAI Engine v2.0.26...",
  "SYSTEM STATE: SECURE [Eolarity Charcoal Restraint Enabled]",
  "Connecting to global inference clusters...",
  "SUCCESS: Model weights optimized at the speed of the current meta.",
  "Spawning autonomous agentic reasoning loops...",
  "OK: Multi-agent consensus reached [Trust Score: 99.4%]",
  "Ingesting vector index space (14.2 GB data)... OK",
  "Optimizing model response latency... [12.4ms achieved]",
  "Integrating IDE plugin developer leverage pipelines... OK",
  "Pushing next-gen builds to Vercel Edge networks... DONE",
  "Awaiting next operational command..."
];

// Reusable 3D Tilt Card component
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [12, -12]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-12, 12]), { damping: 25, stiffness: 180 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all duration-200 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}

// Animated counter hook
function useCounter(target: number, duration: number = 1.5) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return { count, ref };
}

// Animated gradient border capability card
function CapabilityCard({ c, i, spanTwo }: { c: typeof capabilities[0]; i: number; spanTwo: boolean }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [20 * ((i % 3) - 1), -20 * ((i % 3) - 1)]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: parallaxY }}
      className={spanTwo ? "md:col-span-2" : ""}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02, y: parallaxY.get() - 4 }}
    >
      <div className="relative h-full">
        {/* Animated gradient border */}
        <motion.div
          className="absolute -inset-[1.5px] rounded-xl z-0 pointer-events-none"
          style={{
            background: hovered
              ? "linear-gradient(135deg, #D96725, #D95323, #1F2226, #D96725)"
              : "transparent",
            backgroundSize: "300% 300%",
          }}
          animate={hovered ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <TiltCard className="h-full relative z-10">
          <div className="group h-full rounded-xl border border-[#1F2226]/10 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col items-start justify-between">
            <div>
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#D96725]/10 text-[#D96725] transition-all group-hover:bg-[#D96725] group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2226] uppercase tracking-tight group-hover:text-[#D96725] transition-colors">{c.title}</h3>
              <p className="mt-3 text-xs text-[#5C6470] leading-relaxed font-medium">{c.body}</p>
            </div>

            <div className="mt-8 w-full flex items-center justify-between border-t border-[#1F2226]/5 pt-4 text-[10px] font-mono text-[#5C6470]">
              <span>Surface 0{i + 1}</span>
              <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#D96725] font-bold">
                EXPLORE <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </TiltCard>
      </div>
    </motion.div>
  );
}

// Metric card with animated counter
function MetricCard({
  stat,
  isActive,
  onClick,
}: {
  stat: { label: string; val: string; numericTarget: number | null; suffix: string; prefix?: string; desc: string };
  isActive: boolean;
  onClick: () => void;
}) {
  const { count, ref: counterRef } = useCounter(stat.numericTarget ?? 0, 1.8);
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
        isActive
          ? "border-[#D96725] bg-white shadow-lg shadow-[#D96725]/10"
          : "border-[#1F2226]/10 bg-transparent hover:border-[#1F2226]/30 hover:bg-white/60"
      }`}
    >
      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5C6470]">{stat.label}</span>
      <h4 className="mt-3 text-3xl font-extrabold text-[#1F2226] tracking-tight font-mono" ref={counterRef as React.RefObject<HTMLHeadingElement>}>
        {stat.numericTarget !== null
          ? `${stat.prefix ?? ""}${count}${stat.suffix}`
          : stat.val}
      </h4>
      <p className="mt-2 text-xs text-[#5C6470] leading-relaxed">{stat.desc}</p>
    </motion.div>
  );
}

// Fine-Tuning visualizer node detail mapping
const tuningNodes = [
  { name: "Ingestion", step: "01", label: "Dataset Curation", desc: "Ingesting codebases, logs, & enterprise docs into high-quality instruction formats.", loss: "0.98", throughput: "1.2M tokens" },
  { name: "SFT Stage", step: "02", label: "Supervised Fine-Tuning", desc: "Broad instruction-following alignment on curated domains via full parameter updates.", loss: "0.34", throughput: "640K tokens" },
  { name: "LoRA Adapters", step: "03", label: "Parameter Injection", desc: "Injecting low-rank adapters (PEFT) on target modules to retain base capability while gaining specialization.", loss: "0.18", throughput: "1.8M tokens" },
  { name: "DPO Alignment", step: "04", label: "Direct Preference Tuning", desc: "Aligning models directly to developer preferences using pairwise target comparison.", loss: "0.08", throughput: "420K tokens" },
  { name: "Deployment", step: "05", label: "Edge Compilation", desc: "Quantizing weights to FP16/INT8 formats and deploying on low-latency Vercel Edge endpoints.", loss: "0.08", throughput: "Ready" }
];

// Animated SVG pipeline connector
function PipelineConnector({ activeNode: _activeNode }: { activeNode: number }) {

  return (
    <svg className="absolute top-1/2 left-0 right-0 w-full h-2 -translate-y-1/2 hidden md:block z-0" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D96725" stopOpacity="0" />
          <stop offset="40%" stopColor="#D96725" stopOpacity="1" />
          <stop offset="60%" stopColor="#D95323" stopOpacity="1" />
          <stop offset="100%" stopColor="#D95323" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Static base line */}
      <line x1="4%" y1="1" x2="96%" y2="1" stroke="rgba(31,34,38,0.08)" strokeWidth="1.5" />
      {/* Animated moving gradient dash */}
      <motion.line
        x1="4%"
        y1="1"
        x2="96%"
        y2="1"
        stroke="url(#pipelineGrad)"
        strokeWidth="2"
        strokeDasharray="60 200"
        animate={{ strokeDashoffset: [200, -200] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

function Home() {
  const [logs, setLogs] = useState<string[]>([terminalLogs[0], terminalLogs[1]]);
  const [activeMetric, setActiveMetric] = useState(0);
  const [activeDialectic, setActiveDialectic] = useState<"charcoal" | "ember">("charcoal");
  const [activeInfographic, setActiveInfographic] = useState<"finetuning" | "ide">("finetuning");
  const [activeTuningNode, setActiveTuningNode] = useState(2);
  const [ideGeneratedLines, setIdeGeneratedLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll animations for landonoriss style side tracks
  const { scrollYProgress } = useScroll();
  const track1X = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const track2X = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const headerScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Telemetry log cycle
  useEffect(() => {
    let currentIdx = 2;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLogs = [...prev, terminalLogs[currentIdx]];
        if (nextLogs.length > 7) {
          nextLogs.shift();
        }
        return nextLogs;
      });
      currentIdx = (currentIdx + 1) % terminalLogs.length;
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // IDE text generation simulation
  useEffect(() => {
    const lines = [
      "def optimize_inference(model, prompt):",
      "    # Injecting Eolarity low-latency caching structure",
      "    cache_key = generate_meta_hash(prompt)",
      "    if exists_in_edge(cache_key):",
      "        return retrieve_cached_token_stream()",
      "    ",
      "    # Multi-agent speculative sampling logic",
      "    response = model.generate_with_speculation(",
      "        prompt=prompt,",
      "        draft_model='eolarity-draft-7b',",
      "        temperature=0.15",
      "    )",
      "    return response"
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setIdeGeneratedLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        setIdeGeneratedLines([]);
        currentLine = 0;
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#F5F3EF] text-[#1F2226] font-sans selection:bg-[#D96725] selection:text-white overflow-hidden">

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-[68px] left-0 right-0 h-1 bg-[#D96725] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* BACKGROUND SCROLL TRACKS (Lando Norris Inspired) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-[18%] left-0 right-0 opacity-[0.03] whitespace-nowrap">
          <motion.div style={{ x: track1X }} className="text-[18vw] font-black tracking-tighter text-[#1F2226] leading-none uppercase">
            EOLARITY INNOVATIONS LLP · SPECIALIZED MODEL FINETUNING
          </motion.div>
        </div>
        <div className="absolute top-[55%] left-0 right-0 opacity-[0.03] whitespace-nowrap">
          <motion.div style={{ x: track2X }} className="text-[18vw] font-black tracking-tighter text-[#1F2226] leading-none uppercase">
            CODER PLUGINS · REAL TIME DPO WORKFLOWS
          </motion.div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-16 pb-24 overflow-hidden border-b border-[#1F2226]/10">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,34,38,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,34,38,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

        {/* Animated gradient mesh blobs */}
        <motion.div
          className="absolute -left-48 top-12 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(217,103,37,0.12) 0%, transparent 70%)", filter: "blur(80px)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-48 bottom-12 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(64,13,9,0.1) 0%, transparent 70%)", filter: "blur(80px)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(217,103,37,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
          animate={{ opacity: [0.5, 1, 0.5], scaleX: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 w-full z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            {/* LEFT COLUMN: HERO HEADLINE */}
            <motion.div
              style={{ scale: headerScale, opacity: heroOpacity }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* startup India badge — shimmer glow */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative inline-flex items-center gap-2.5 rounded-full border border-[#D96725]/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1F2226] shadow-sm backdrop-blur-sm overflow-hidden"
              >
                {/* shimmer sweep */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(105deg, transparent 40%, rgba(217,103,37,0.18) 50%, transparent 60%)", backgroundSize: "200% 100%" }}
                  animate={{ backgroundPosition: ["-100% 0%", "200% 0%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D96725] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D96725]"></span>
                </span>
                Startup India Recognized · LLP Vol.01
              </motion.div>

              {/* Word-by-word staggered headline */}
              <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl text-[#1F2226] uppercase">
                {["Specialized", "AI.", "Extreme", "precision."].map((word, wi) => (
                  <motion.span
                    key={wi}
                    className={`inline-block mr-[0.2em] overflow-hidden ${word === "AI." ? "text-[#D96725]" : ""}`}
                    style={{ verticalAlign: "bottom" }}
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 + wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {word}
                    </motion.span>
                    {wi === 1 && <br />}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 max-w-xl text-lg text-[#5C6470] font-medium leading-relaxed"
              >
                We construct specialized models via proprietary fine-tuning pipelines and code customized plugins that provide massive leverage. Built at the speed of the current AI meta.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.72 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="bg-[#1F2226] hover:bg-[#D96725] text-white rounded-none border border-transparent transition-all duration-300 font-bold px-8 shadow-md">
                  <Link to="/contact">
                    Establish Connection <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#1F2226]/20 bg-transparent hover:bg-[#1F2226]/5 text-[#1F2226] rounded-none font-bold px-8">
                  <a href="#visualizer">Explore Telemetry</a>
                </Button>
              </motion.div>

              {/* Cognitive stats line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="mt-16 grid grid-cols-3 gap-8 border-t border-[#1F2226]/10 pt-8 w-full max-w-lg"
              >
                <div>
                  <span className="text-2xl font-bold tracking-tight text-[#1F2226]">181+</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5C6470] mt-1">Live Systems</p>
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight text-[#1F2226]">&lt;14ms</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5C6470] mt-1">Latency</p>
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight text-[#D96725]">ACTIVE</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5C6470] mt-1">Meta Engine</p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: GLASSMORPHISM TERMINAL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <TiltCard className="w-full">
                {/* Glow ring */}
                <motion.div
                  className="absolute -inset-[2px] rounded-2xl pointer-events-none z-0"
                  style={{ background: "linear-gradient(135deg, rgba(217,103,37,0.35), rgba(217,83,35,0.2), rgba(31,34,38,0.1))", filter: "blur(4px)" }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10 overflow-hidden rounded-xl border border-white/20 bg-white/30 backdrop-blur-xl p-7 shadow-2xl"
                  style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.45)", boxShadow: "0 8px 60px rgba(217,103,37,0.12), 0 2px 20px rgba(31,34,38,0.08), inset 0 1px 0 rgba(255,255,255,0.8)" }}
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D96725] to-transparent opacity-80" />

                  {/* HUD Header */}
                  <div className="mb-6 flex items-center justify-between border-b border-[#1F2226]/8 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-[#1F2226]" />
                        <span className="h-3 w-3 rounded-full bg-[#D96725]" />
                        <span className="h-3 w-3 rounded-full bg-[#D95323]" />
                      </div>
                      <span className="ml-1 text-xs font-mono font-bold tracking-wide text-[#5C6470]">eolarity-core-engine</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-md bg-[#D96725]/15 border border-[#D96725]/25 px-2.5 py-1 text-[10px] font-mono font-bold text-[#D96725]">
                      <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#D96725]" />
                      MONITOR
                    </div>
                  </div>

                  {/* Terminal Logger */}
                  <div className="min-h-[200px] font-mono text-xs text-[#1F2226]/90 space-y-2 bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-[#1F2226]/8">
                    {logs.map((log, idx) => (
                      <motion.div
                        key={`${idx}-${log.slice(0, 12)}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-1.5"
                      >
                        <span className="text-[#D96725] select-none font-bold">&gt;</span>
                        <span className={log.startsWith("SUCCESS") || log.startsWith("OK") ? "text-[#D95323] font-bold" : ""}>
                          {log}
                        </span>
                      </motion.div>
                    ))}
                    <div className="flex items-center gap-1 animate-pulse">
                      <span className="text-[#D96725] font-bold">&gt;</span>
                      <span className="h-3.5 w-1.5 bg-[#D96725] inline-block" />
                    </div>
                  </div>

                  {/* Core Activity mock bar graph */}
                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-[10px] font-mono font-bold text-[#5C6470]">
                      <span>SYSTEM CONVERGENCE</span>
                      <span className="text-[#D96725]">99.8% READY</span>
                    </div>
                    <div className="flex h-12 items-end gap-1 bg-white/30 p-2 rounded border border-[#1F2226]/8">
                      {[30, 48, 25, 65, 80, 50, 92, 70, 85, 100, 60, 75, 45, 88, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="w-full rounded-t-sm transition-all duration-300"
                          style={{
                            backgroundColor: i === 9 ? "#D96725" : "rgba(31, 34, 38, 0.15)",
                            boxShadow: i === 9 ? "0 0 10px rgba(217, 103, 37, 0.7)" : "none"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

          </div>
        </div>

        {/* Scroll-down indicator */}
        <motion.a
          href="#metrics"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#5C6470] hover:text-[#D96725] transition-colors cursor-pointer z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </section>

      {/* METRIC SECTIONS WITH TABS */}
      <section id="metrics" className="relative py-20 border-b border-[#1F2226]/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: "Systems Operational", val: "181+", numericTarget: 181, suffix: "+", desc: "Integrated cognitive micro-services ready to execute workflows." },
              { label: "Edge Latency", val: "< 14ms", numericTarget: 14, suffix: "ms", prefix: "< ", desc: "Hyper-optimized routing structures pushing prompt speeds to maximum." },
              { label: "Compliance & Safety", val: "100%", numericTarget: 100, suffix: "%", desc: "Clean architecture registered officially with Startup India." },
              { label: "Meta Adoption", val: "Live", numericTarget: null, suffix: "", desc: "Evolving state logic matching LLM capability gain curves in real-time." },
            ].map((stat, i) => (
              <MetricCard
                key={i}
                stat={stat}
                isActive={activeMetric === i}
                onClick={() => setActiveMetric(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC TELEMETRY INFOGRAPHIC / ACCELERATOR BANNER (NEW INFOGRAPHIC) */}
      <section id="visualizer" className="relative py-32 border-b border-[#1F2226]/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D96725] font-bold">Interactive Infographics</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter text-[#1F2226] uppercase md:text-5xl">
              Execution Architecture.
            </h2>
            <p className="mt-4 text-base text-[#5C6470] font-medium">
              Interact with our custom model fine-tuning steps or see our specialized coder plugin accelerator in real-time telemetry.
            </p>

            {/* Infographic Selectors */}
            <div className="mt-8 inline-flex gap-2 border border-[#1F2226]/10 bg-white/70 p-1.5 rounded-lg">
              <button
                onClick={() => setActiveInfographic("finetuning")}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 ${activeInfographic === "finetuning" ? "bg-[#D96725] text-white" : "text-[#5C6470] hover:text-[#D96725]"}`}
              >
                Model Fine-Tuning Pipeline
              </button>
              <button
                onClick={() => setActiveInfographic("ide")}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 ${activeInfographic === "ide" ? "bg-[#1F2226] text-white" : "text-[#5C6470] hover:text-[#1F2226]"}`}
              >
                IDE Plugin Accelerator
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#1F2226]/15 bg-white shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              {activeInfographic === "finetuning" ? (
                <motion.div
                  key="finetuning"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-12 lg:grid-cols-12"
                >
                  {/* Left Column: Interactive Node Map */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-[#1F2226] flex items-center gap-2">
                        <Flame className="h-5 w-5 text-[#D96725]" /> Fine-Tuning Pipeline Nodes
                      </h3>
                      <p className="mt-2 text-xs text-[#5C6470]">
                        Click on the pipeline segments to view internal metrics and active loss telemetry.
                      </p>
                    </div>

                    {/* Nodes Connector Graphic */}
                    <div className="my-10 relative flex flex-wrap gap-4 items-center justify-between">
                      {/* Animated SVG connector line */}
                      <PipelineConnector activeNode={activeTuningNode} />

                      {tuningNodes.map((node, index) => (
                        <button
                          key={node.name}
                          onClick={() => setActiveTuningNode(index)}
                          className={`relative z-10 flex flex-col items-center p-3 rounded-lg border transition-all duration-300 ${
                            activeTuningNode === index
                              ? "bg-white border-[#D96725] shadow-md scale-105"
                              : "bg-[#F9F8F6] border-[#1F2226]/10 hover:border-[#D96725]/40"
                          }`}
                        >
                          <span className={`text-[10px] font-mono font-black w-6 h-6 rounded-full flex items-center justify-center ${
                            activeTuningNode === index ? "bg-[#D96725] text-white" : "bg-[#1F2226]/5 text-[#5C6470]"
                          }`}>
                            {node.step}
                          </span>
                          <span className="text-[11px] font-bold mt-2 text-[#1F2226] tracking-tight">{node.name}</span>
                        </button>
                      ))}
                    </div>

                    {/* Loss Simulation Mini Graph */}
                    <div className="bg-[#F9F8F6] rounded-xl border border-[#1F2226]/5 p-5">
                      <div className="flex justify-between items-center text-[10px] font-mono font-bold text-[#5C6470] mb-3">
                        <span>TRAINING LOSS OVER EPOCHS</span>
                        <span>TARGET: DEEPSEEK CODER 7B SPECIALIZATION</span>
                      </div>
                      <div className="flex h-20 items-end gap-1.5">
                        {[1.2, 0.95, 0.8, 0.65, 0.55, 0.42, 0.35, 0.28, 0.22, 0.18, 0.14, 0.11, 0.08].map((l, i) => (
                          <div key={i} className="w-full relative group h-full flex flex-col justify-end">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${(l / 1.2) * 100}%` }}
                              transition={{ duration: 0.8, delay: i * 0.03 }}
                              className={`rounded-t-sm transition-all duration-300 w-full ${
                                i === activeTuningNode * 2.5 || (activeTuningNode === 4 && i === 12)
                                  ? "bg-[#D96725] shadow-[0_0_8px_rgba(217,103,37,0.5)]"
                                  : "bg-[#1F2226]/15"
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Telemetry Specs — slides in from right on node selection */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTuningNode}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="lg:col-span-5 bg-[#F9F8F6] rounded-xl border border-[#1F2226]/8 p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center border-b border-[#1F2226]/5 pb-4 mb-4">
                          <span className="text-xs font-mono font-bold text-[#5C6470] uppercase">Active Telemetry</span>
                          <span className="text-[10px] font-mono font-bold bg-[#D96725]/10 text-[#D96725] px-2 py-0.5 rounded">NODE {tuningNodes[activeTuningNode].step}</span>
                        </div>
                        <h4 className="text-2xl font-black uppercase text-[#1F2226] tracking-tight">
                          {tuningNodes[activeTuningNode].label}
                        </h4>
                        <p className="mt-3 text-xs text-[#5C6470] leading-relaxed">
                          {tuningNodes[activeTuningNode].desc}
                        </p>
                      </div>

                      <div className="mt-8 space-y-4">
                        <div className="flex justify-between items-center border-b border-[#1F2226]/5 pb-2">
                          <span className="text-xs text-[#5C6470] font-bold">Domain Loss Metric</span>
                          <span className="text-sm font-mono font-bold text-[#D96725]">{tuningNodes[activeTuningNode].loss} (Optimal)</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#1F2226]/5 pb-2">
                          <span className="text-xs text-[#5C6470] font-bold">Throughput Ingest Rate</span>
                          <span className="text-sm font-mono font-bold text-[#1F2226]">{tuningNodes[activeTuningNode].throughput} / sec</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-xs text-[#5C6470] font-bold">Specialized Parameter Ratio</span>
                          <span className="text-sm font-mono font-bold text-[#1F2226]">16 Rank LoRA Target</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="ide"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-12 lg:grid-cols-12"
                >
                  {/* Left Column: Visual Editor mock */}
                  <div className="lg:col-span-8 bg-[#1E1E24] text-[#EFECE5] rounded-xl border border-white/10 p-5 font-mono text-xs shadow-2xl relative">

                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <FileCode2 className="h-4 w-4 text-[#D96725]" />
                        <span className="text-[11px] text-white/70">eolarity_accelerator.py</span>
                      </div>
                      <span className="text-[10px] text-white/40">UTF-8 · Python</span>
                    </div>

                    {/* Simulated code container */}
                    <div className="min-h-[220px] space-y-1 text-white/90">
                      {ideGeneratedLines.map((line, idx) => (
                        <div key={idx} className="flex gap-4">
                          <span className="text-white/20 select-none w-4 text-right">{idx + 1}</span>
                          <span className={line && line.trim().startsWith("#") ? "text-green-400/80" : ""}>{line}</span>
                        </div>
                      ))}
                      <div className="flex gap-4 items-center animate-pulse">
                        <span className="text-white/20 select-none w-4 text-right">{ideGeneratedLines.length + 1}</span>
                        <span className="h-3.5 w-2 bg-[#D96725] inline-block" />
                      </div>
                    </div>

                    {/* Auto-complete visual card overlay */}
                    <div className="absolute bottom-4 right-4 bg-[#2D2D37] border border-white/10 p-3 rounded-lg shadow-xl text-[10px] space-y-1">
                      <div className="text-white/40 font-bold uppercase tracking-wider">Eolarity Auto-Complete suggestions</div>
                      <div className="text-[#D96725] font-bold">✦ speculative_sampling_loop() <span className="text-white/30 text-[9px]">(Speculative)</span></div>
                      <div className="text-white/70">✦ speculative_draft_decoding()</div>
                    </div>
                  </div>

                  {/* Right Column: IDE plugins leverage metrics */}
                  <div className="lg:col-span-4 bg-[#F9F8F6] rounded-xl border border-[#1F2226]/8 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center border-b border-[#1F2226]/5 pb-4 mb-4">
                        <span className="text-xs font-mono font-bold text-[#5C6470] uppercase">Active telemetry</span>
                        <span className="text-[10px] font-mono font-bold bg-[#1F2226]/10 text-[#1F2226] px-2 py-0.5 rounded">IDE ACCELERATOR</span>
                      </div>
                      <h4 className="text-2xl font-black uppercase text-[#1F2226] tracking-tight">
                        Developer Leverage
                      </h4>
                      <p className="mt-3 text-xs text-[#5C6470] leading-relaxed">
                        VS Code and JetBrains extensions compiled to serve context-aware suggestions from fine-tuned weights instantly.
                      </p>
                    </div>

                    <div className="mt-8 space-y-4">
                      <div className="flex justify-between items-center border-b border-[#1F2226]/5 pb-2">
                        <span className="text-xs text-[#5C6470] font-bold">Manual Boilerplate Reduction</span>
                        <span className="text-sm font-mono font-bold text-[#D96725]">68%</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-[#1F2226]/5 pb-2">
                        <span className="text-xs text-[#5C6470] font-bold">Inference latency stream</span>
                        <span className="text-sm font-mono font-bold text-[#1F2226]">&lt;12ms</span>
                      </div>
                      <div className="flex justify-between items-center pb-2">
                        <span className="text-xs text-[#5C6470] font-bold">Context Compression rate</span>
                        <span className="text-sm font-mono font-bold text-[#1F2226]">4.2x faster</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY / THE DIALECTIC (Charcoal vs Ember) */}
      <section className="relative py-32 border-b border-[#1F2226]/10 bg-[#EFECE5]/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            {/* Left side explanatory block */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D96725] font-bold">The Core Dialectic</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1F2226] uppercase leading-[0.95] md:text-5xl">
                Restraint <br />meets energy.
              </h2>
              <p className="mt-6 text-base text-[#5C6470] leading-relaxed">
                Eolarity operates in the vital tension between structured safety and rapid action.
                We structure architectures that don&apos;t fail under pressure, while matching the spark of GenAI innovation.
              </p>

              {/* Dynamic selector toggle */}
              <div className="mt-8 flex gap-2 border border-[#1F2226]/10 bg-white/70 p-1.5 rounded-lg w-fit">
                <button
                  onClick={() => setActiveDialectic("charcoal")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 ${activeDialectic === "charcoal" ? "bg-[#1F2226] text-white" : "text-[#5C6470] hover:text-[#1F2226]"}`}
                >
                  Charcoal Restraint
                </button>
                <button
                  onClick={() => setActiveDialectic("ember")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 ${activeDialectic === "ember" ? "bg-[#D96725] text-white" : "text-[#5C6470] hover:text-[#D96725]"}`}
                >
                  Ember Energy
                </button>
              </div>
            </div>

            {/* Right side dynamic cards with AnimatePresence */}
            <div className="lg:col-span-7 h-[360px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeDialectic === "charcoal" ? (
                  <motion.div
                    key="charcoal"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <TiltCard>
                      <div className="rounded-xl border-2 border-[#1F2226] bg-white p-10 shadow-lg relative overflow-hidden">
                        <div className="absolute top-4 right-4 text-[120px] font-black text-[#1F2226]/5 select-none pointer-events-none leading-none font-mono">
                          01
                        </div>
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1F2226]/10 text-[#1F2226]">
                          <Cpu className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1F2226] uppercase tracking-tight">Charcoal Restraint</h3>
                        <p className="mt-4 text-sm text-[#5C6470] leading-relaxed max-w-xl">
                          Silent, highly disciplined system engineering. Safe Token management structures, privacy-focused database routing,
                          agnostic hosting models, robust fallback systems, and beautiful aesthetic restraints that prioritize usability and security above industry hype.
                        </p>
                        <div className="mt-8 flex gap-4 text-xs font-mono text-[#5C6470]">
                          <span>✓ Safe Integration</span>
                          <span>✓ Vendor Neutral</span>
                          <span>✓ Privacy First</span>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ) : (
                  <motion.div
                    key="ember"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <TiltCard>
                      <div className="rounded-xl border-2 border-[#D96725] bg-white p-10 shadow-lg relative overflow-hidden">
                        <div className="absolute top-4 right-4 text-[120px] font-black text-[#D96725]/5 select-none pointer-events-none leading-none font-mono">
                          02
                        </div>
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#D96725]/10 text-[#D96725]">
                          <Sparkles className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#D96725] uppercase tracking-tight">Ember Energy</h3>
                        <p className="mt-4 text-sm text-[#5C6470] leading-relaxed max-w-xl">
                          Aggressive integration of frontier cognitive layers. Custom multi-agent consensus workflows,
                          IDE code acceleration modules, in-house masterclasses on active model implementations, and dynamic solutions designed for immediate efficiency gains.
                        </p>
                        <div className="mt-8 flex gap-4 text-xs font-mono text-[#D96725]">
                          <span>✦ Cognitive Cores</span>
                          <span>✦ Vector Pipelines</span>
                          <span>✦ Real-Time Agentic Loops</span>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* CAPABILITIES (Six Surfaces of Execution) — Bento Grid */}
      <section className="relative py-32 border-b border-[#1F2226]/10">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D96725] font-bold">Scope of Action</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter text-[#1F2226] uppercase md:text-5xl lg:text-6xl">
              Six surfaces of execution.
            </h2>
            <p className="mt-4 text-base text-[#5C6470] font-medium max-w-xl mx-auto">
              From bespoke corporate solutioning to in-house developer products — Eolarity maps active engineering to critical utility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((c, i) => (
              <CapabilityCard key={c.title} c={c} i={i} spanTwo={c.span === 2} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA CONSOLE BLOCK */}
      <section className="relative py-24 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#1F2226] p-8 md:p-16 shadow-2xl">

          {/* Glowing ember blob */}
          <motion.div
            className="absolute -right-24 -bottom-24 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(217,103,37,0.35) 0%, rgba(217,83,35,0.15) 40%, transparent 70%)", filter: "blur(60px)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-32 top-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(217,103,37,0.12) 0%, transparent 70%)", filter: "blur(80px)" }}
            animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Floating animated particles/orbs */}
          {[
            { size: 4, top: "15%", left: "8%", delay: 0 },
            { size: 3, top: "70%", left: "15%", delay: 1.5 },
            { size: 5, top: "30%", right: "20%", delay: 0.8 },
            { size: 3, top: "80%", right: "10%", delay: 2.2 },
            { size: 4, top: "50%", left: "45%", delay: 1.1 },
          ].map((orb, oi) => (
            <motion.div
              key={oi}
              className="absolute rounded-full bg-[#D96725] pointer-events-none"
              style={{ width: orb.size, height: orb.size, top: orb.top, left: (orb as any).left, right: (orb as any).right, opacity: 0.4 }}
              animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3 + oi * 0.5, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            />
          ))}

          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3.5 py-1 text-[10px] font-mono tracking-wider text-green-400 font-bold uppercase shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              SYSTEM PORT ACTIVE
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white uppercase leading-[0.95] md:text-5xl">
              Ready to construct with polarity?
            </h2>
            <p className="mt-6 text-sm text-white/60 leading-relaxed font-medium">
              Submit your project layout, pipeline parameters, or organizational automation targets.
              We&apos;ll compile an actionable blueprint detailing implementation strategies.
            </p>
            <div className="mt-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block"
              >
                <Button asChild size="lg" className="relative overflow-hidden group bg-[#D96725] hover:bg-[#D95323] text-white rounded-none font-bold px-8 shadow-md shadow-[#D96725]/30">
                  <Link to="/contact">
                    Initialize Dialogue <ArrowRight className="ml-2 h-5 w-5" />
                    {/* Animated underline on hover */}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
