import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, FileText, FlaskConical, Compass, Layers, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
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
    icon: Sparkles,
    title: "AI Solutions",
    body: "End-to-end GenAI builds — from problem framing to production. Agents, RAG pipelines, custom models and integrations.",
    bullets: ["Custom LLM workflows", "Agentic systems", "RAG & data pipelines", "Production deployment"],
  },
  {
    icon: FileText,
    title: "Content Production",
    body: "AI-assisted content systems that scale without losing voice — for marketing, education or product.",
    bullets: ["Content engines", "Editorial workflows", "Multi-modal assets"],
  },
  {
    icon: FlaskConical,
    title: "Research",
    body: "Focused applied research on emerging models, techniques and the current meta — translated into something you can ship.",
    bullets: ["Model evaluation", "Capability deep-dives", "Prototyping"],
  },
  {
    icon: Layers,
    title: "Meta-Aware Solutioning",
    body: "Solutions designed around what's working right now in the AI ecosystem — not yesterday's stack.",
    bullets: ["Current-stack architecture", "Vendor-agnostic design", "Future-proof patterns"],
  },
  {
    icon: Compass,
    title: "Consulting",
    body: "Strategic guidance for teams adopting GenAI — workshops, audits and a clear roadmap.",
    bullets: ["GenAI strategy", "Stack & vendor audits", "Team enablement"],
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <SectionHeading
          eyebrow="Services"
          title="Custom GenAI work, end to end."
          lede="We pick the right tools for what you're building — not what's loudest. Then we ship it."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 transition-all hover:border-primary/40"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild size="lg" className="glow">
            <Link to="/contact">
              Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
