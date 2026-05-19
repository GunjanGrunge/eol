import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2, GraduationCap, Zap, FlaskConical, Compass } from "lucide-react";
import { GradientOrb } from "@/components/GradientOrb";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eolarity Innovations LLP — GenAI Solutions, Products & Consulting" },
      {
        name: "description",
        content:
          "Custom GenAI solutions, in-house products for education, coding and productivity, plus research and consulting — delivered at the speed of the current AI meta.",
      },
      { property: "og:title", content: "Eolarity Innovations LLP" },
      { property: "og:description", content: "GenAI solutions, products and consulting." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const capabilities = [
  { icon: Sparkles, title: "AI Solutions", body: "Custom GenAI systems tailored to your workflows, data and stack." },
  { icon: Code2, title: "Coding Plugins", body: "Developer productivity tools and IDE plugins that ship faster." },
  { icon: GraduationCap, title: "Education Products", body: "In-house learning platforms shaped around how people actually learn AI." },
  { icon: Zap, title: "Productivity Apps", body: "Focused apps that turn daily friction into automation." },
  { icon: FlaskConical, title: "Research", body: "Applied research on the current meta — what's working, right now." },
  { icon: Compass, title: "Consulting & Solutioning", body: "Strategic guidance to adopt GenAI without the noise." },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <GradientOrb className="-right-32 top-10 h-[500px] w-[500px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              GenAI · Built at meta-speed
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Innovative <span className="text-gradient">GenAI solutions</span>,
              shipped at the pace of the meta.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Eolarity is an AI-first studio. We design custom solutions, build
              in-house products across education, coding and productivity, and
              partner with teams on research and consulting.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="glow">
                <Link to="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border bg-card/50 px-3 py-1">Registered under Startup India</span>
              <span className="rounded-full border border-border bg-card/50 px-3 py-1">LLP — India</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="What we do"
          title="One studio, six surfaces."
          lede="From solutioning to shipping products — Eolarity covers the full GenAI lifecycle."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/80 p-10 md:p-16">
          <GradientOrb className="-right-20 -top-20 h-[400px] w-[400px]" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Have a problem worth solving with AI?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us what you're building. We'll respond with how we'd approach it.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="glow">
                <Link to="/contact">
                  Contact Eolarity <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
