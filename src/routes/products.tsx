import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Code2, Zap, Rocket, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
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
  },
  {
    icon: Code2,
    title: "Coding Plugins",
    body: "IDE plugins that turn LLM workflows into actual developer leverage — not autocomplete fatigue.",
    status: "In development",
  },
  {
    icon: Zap,
    title: "Productivity Apps",
    body: "Focused tools that automate the boring layer of knowledge work, one job-to-be-done at a time.",
    status: "In development",
  },
  {
    icon: Rocket,
    title: "More shipping soon",
    body: "We build in-house when the market hasn't caught up yet. Several pieces are queued — stay close.",
    status: "Coming soon",
  },
];

function ProductsPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <SectionHeading
          eyebrow="Products"
          title="Built in-house. Shipped in public."
          lede="Eolarity doesn't just deliver client work — we build product. Here's what's on the bench."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <p.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {p.status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card/60 p-10 text-center md:p-16">
          <h2 className="text-2xl font-bold md:text-3xl">Want early access?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Drop us a line and tell us which product you're curious about. We'll loop you in as we open up access.
          </p>
          <Button asChild size="lg" className="mt-6 glow">
            <Link to="/contact">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
