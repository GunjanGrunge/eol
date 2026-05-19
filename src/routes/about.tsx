import { createFileRoute, Link } from "@tanstack/react-router";
import { Gauge, Layers, Shield, Lightbulb } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

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
  { icon: Gauge, title: "Pace", body: "The AI meta shifts weekly. Our defaults — small teams, sharp scopes, ruthless shipping — keep up." },
  { icon: Layers, title: "Clarity", body: "Eolarity = E (energy) + olarity (clarity). We strip GenAI hype down to what actually moves the needle." },
  { icon: Lightbulb, title: "Original work", body: "We build in-house products, not just deliver services. Both feed each other." },
  { icon: Shield, title: "Accountability", body: "Registered LLP in India, recognised under Startup India. Real entity, real ownership." },
];

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <SectionHeading
          eyebrow="About"
          title="An AI studio built for what's next, not what's loud."
          lede="Eolarity Innovations LLP is a GenAI-first studio out of India. We move fast because the meta does — and we build product because the best solutions get reused."
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/60 p-8">
          <h3 className="text-xl font-semibold">Our story</h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Eolarity started with one observation: most teams adopting GenAI are
            chasing the previous month's playbook. We work the other way — we
            track what's actually shipping at the frontier, then translate it
            into custom solutions, in-house products and consulting work.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            We're registered as an LLP in India and recognised under Startup
            India. Small team, sharp focus.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card/60 p-8">
          <h3 className="text-xl font-semibold">What we do</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /> Custom GenAI solutions for partners and clients</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /> In-house products: education, coding plugins, productivity</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /> Applied research on the current AI meta</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /> Consulting & solutioning for GenAI adoption</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h3 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">Principles</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card/60 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h4 className="font-semibold">{p.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-primary/30 bg-card/70 p-8 md:p-12">
          <div>
            <h3 className="text-2xl font-bold">Let's build something.</h3>
            <p className="mt-2 text-muted-foreground">Tell us what you're working on.</p>
          </div>
          <Button asChild size="lg" className="glow">
            <Link to="/contact">Contact Eolarity</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
