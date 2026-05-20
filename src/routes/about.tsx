import { createFileRoute, Link } from "@tanstack/react-router";
import { Gauge, Layers, Shield, Lightbulb, ArrowRight, Cpu, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D96725]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#400D09]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-border py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Company Profile"
              title="Built for what's next, not what's loud."
              lede="Eolarity Innovations LLP is an AI-first studio operating from India. We move fast because the frontier daily evolves — building elegant custom solutions and robust in-house products."
            />
          </motion.div>
        </div>
      </section>

      {/* Narrative & Capabilities Summary */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-card/60 p-8 backdrop-blur-md transition-all hover:border-[#D96725]/30 shadow-sm"
        >
          <h3 className="text-xl font-bold uppercase tracking-tight text-[#1F2226]">Our Origin</h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Eolarity was established with a singular conviction: most organizations attempting to adopt GenAI are chasing outdated frameworks. We invert the process. 
            We analyze emergent capability patterns at the research frontier, then immediately compile them into functional software libraries, IDE tools, and agentic workflows.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Registered as an LLP in India and recognized under Startup India, we operate with maximum concentration and lean engineering squads.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-card/60 p-8 backdrop-blur-md transition-all hover:border-[#D96725]/30 shadow-sm"
        >
          <h3 className="text-xl font-bold uppercase tracking-tight text-[#1F2226]">Core Focus Fields</h3>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D96725] shrink-0" />
              <span>Custom agentic systems and secure enterprise RAG architectures.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D96725] shrink-0" />
              <span>Developer leverage interfaces: custom IDE plugins and code generation tools.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D96725] shrink-0" />
              <span>In-house products spanning dynamic technical education platforms.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D96725] shrink-0" />
              <span>Applied benchmarking, model evaluations, and meta-stack audits.</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Principles Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="mb-8 text-2xl font-bold tracking-tight text-[#1F2226] md:text-3xl uppercase">Architectural Principles</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, idx) => (
            <motion.div 
              key={p.title} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[#D96725]/40 duration-300 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#D96725]/10 text-[#D96725] transition-colors group-hover:bg-[#D96725] group-hover:text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-[#1F2226] uppercase tracking-tight">{p.title}</h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Terminal Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden rounded-xl border border-[#D96725]/30 bg-white p-8 md:p-12 shadow-md"
        >
          <div className="relative flex flex-wrap items-center justify-between gap-8 z-10">
            <div>
              <h3 className="text-2xl font-bold text-[#1F2226] uppercase tracking-tight">Ready to spin up a connection?</h3>
              <p className="mt-2 text-sm text-muted-foreground font-medium">Let&apos;s discuss how your team can adopt GenAI with clarity.</p>
            </div>
            <Button asChild size="lg" className="bg-[#D96725] hover:bg-[#D95323] text-white rounded-none font-bold">
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
