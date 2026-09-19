import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Settings, Triangle, Box } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Work — Eolarity Innovations LLP" },
      {
        name: "description",
        content:
          "A selection of technology initiatives shaped around useful outcomes, not novelty.",
      },
      { property: "og:title", content: "Work — Eolarity Innovations LLP" },
      { property: "og:description", content: "Work that creates a visible difference." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function DashboardChrome({ name, bars }: { name: string; bars: number[] }) {
  return (
    <div className="rounded-sm border border-white/10 bg-[#15171a] p-4 font-mono">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-[11px] font-bold uppercase tracking-widest text-white">{name}</span>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-[#D96725]" />
        </div>
      </div>
      <div className="mt-4 flex h-20 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.04 }}
            className="w-full rounded-sm"
            style={{
              backgroundColor: i === bars.length - 3 ? "#D96725" : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const caseStudies = [
  {
    tag: "Business intelligence",
    name: "MarketMind",
    title: "Making complex market and policy data easier to act on.",
    body: "MarketMind unifies fragmented market, regulatory and macroeconomic data into a single, explorable view — helping teams move from questions to decisions faster.",
    metric: "70%",
    metricLabel: "faster insight",
    metricSub: "From data to decision",
    bars: [30, 45, 40, 55, 60, 50, 70, 65, 80, 75, 90, 85],
  },
];

const smallCases = [
  {
    tag: "Health intelligence",
    name: "THOR",
    title: "Giving teams a clearer view of complex health data.",
    body: "THOR helps organisations integrate and interpret fragmented health data, supporting better decisions across care, research and operations.",
    bars: [40, 55, 50, 65, 60, 75, 70],
  },
  {
    tag: "Developer workflow",
    name: "SIA",
    title: "Turning codebase context into confident next steps.",
    body: "SIA analyses and maps your codebase, surfacing what matters, reducing cognitive load and helping teams move faster with confidence.",
    bars: [50, 35, 65, 45, 70, 55, 80],
  },
];

const approach = [
  {
    icon: Settings,
    title: "Useful by design",
    body: "Solving real problems with practical, elegant solutions.",
  },
  {
    icon: Triangle,
    title: "Grounded in the work",
    body: "Shaped by real users, real constraints, real outcomes.",
  },
  {
    icon: Box,
    title: "Ready to scale",
    body: "From pilot to production, with sustainability in mind.",
  },
];

function ProductsPage() {
  return (
    <div className="bg-[#F2F2F2] text-[#1F2226]">
      {/* HERO */}
      <section className="bg-[#1F2226] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
            Selected work
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Work that creates a visible difference.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#B8BCC2]">
            A selection of technology initiatives shaped around useful outcomes, not novelty.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {caseStudies.map((c) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-10 overflow-hidden border border-[#1F2226]/10 bg-[#1F2226] p-8 text-white md:grid-cols-2 md:p-12"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                {c.name} <span className="mx-2 text-white/20">|</span> {c.tag}
              </span>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">{c.title}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#B8BCC2]">{c.body}</p>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-[#D96725]">{c.metric}</span>
                <div>
                  <p className="font-bold">{c.metricLabel}</p>
                  <p className="text-xs uppercase tracking-wider text-white/50">{c.metricSub}</p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-8 rounded-none bg-[#D96725] font-bold text-white hover:bg-[#D95323]"
              >
                <Link to="/contact">
                  View case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <DashboardChrome name={c.name} bars={c.bars} />
          </motion.div>
        ))}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {smallCases.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col gap-6 overflow-hidden border border-[#1F2226]/10 bg-[#1F2226] p-7 text-white sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                  {c.name} <span className="mx-2 text-white/20">|</span> {c.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B8BCC2]">{c.body}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D96725]"
                >
                  View case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="w-full sm:w-48">
                <DashboardChrome name={c.name} bars={c.bars} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPROACH STRIP */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
              Our approach
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Built for adoption, not applause.
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {approach.map((a) => (
              <div key={a.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D96725]/10 text-[#D96725]">
                  <a.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5C6470]">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
