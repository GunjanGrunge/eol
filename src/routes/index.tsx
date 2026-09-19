import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Box, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AbstractPanel } from "@/components/AbstractPanel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eolarity Innovations LLP — Practical AI, Automation & Digital Products" },
      {
        name: "description",
        content:
          "Eolarity designs practical AI, automation, and digital products that help ambitious teams move with confidence.",
      },
      { property: "og:title", content: "Eolarity Innovations LLP" },
      { property: "og:description", content: "Turn complex work into clear momentum." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Cpu,
    title: "AI & Automation",
    body: "Put AI to work in practical, high-impact ways across your operations.",
  },
  {
    icon: Box,
    title: "Digital Products",
    body: "Design and build scalable products that solve real business problems.",
  },
  {
    icon: Database,
    title: "Data Systems",
    body: "Turn your data into a stronger foundation for better decisions.",
  },
];

const process = [
  {
    n: "01",
    title: "Discover and define",
    body: "We work with you to understand your goals, challenges, and opportunities, and define a clear path forward.",
  },
  {
    n: "02",
    title: "Build and integrate",
    body: "We design and deliver AI, automation, and digital products that fit your business and create lasting value.",
  },
  {
    n: "03",
    title: "Measure and scale",
    body: "We focus on adoption, impact, and continuous improvement, so progress compounds over time.",
  },
];

function Home() {
  return (
    <div className="bg-[#F2F2F2] text-[#1F2226]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1F2226] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D96725]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
                Technology with clarity
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Turn complex work into clear momentum.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#B8BCC2]">
              Eolarity designs practical AI, automation, and digital products that help ambitious
              teams move with confidence.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-[#D96725] px-7 font-bold text-white hover:bg-[#D95323]"
              >
                <Link to="/contact">
                  Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#D96725]"
              >
                Explore capabilities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <AbstractPanel variant="flow" className="aspect-[4/3] w-full" />
          </motion.div>
        </div>
      </section>

      {/* PILLARS STRIP */}
      <section className="border-b border-[#1F2226]/10 bg-[#F2F2F2] py-14">
        <div className="mx-auto grid max-w-7xl gap-10 divide-y divide-[#1F2226]/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 pt-8 first:pt-0 sm:pt-0 sm:pl-8 sm:first:pl-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border-2 border-[#1F2226] text-[#1F2226]">
                <p.icon className="h-5 w-5" />
                <span className="relative -ml-1 -mt-4 h-1.5 w-1.5 rounded-full bg-[#D96725]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1F2226]">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5C6470]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#1F2226] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D96725]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
                  What we do
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Practical technology. Measurable progress.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#B8BCC2] lg:col-span-5">
              We help ambitious teams solve meaningful problems with technology, from strategy to
              delivery, with a focus on real-world outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {process.map((step) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between bg-[#1F2226] p-8"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#D96725]">{step.n}</span>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#B8BCC2]">{step.body}</p>
                </div>
                <Link
                  to="/services"
                  aria-label={`Learn more about ${step.title}`}
                  className="mt-8 inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D96725] hover:text-[#D96725]"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D96725] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F2226]/70">
              Let's build what's next
            </span>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Have a challenge worth solving?
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-none bg-[#1F2226] px-7 font-bold text-white hover:bg-[#1F2226]/85"
          >
            <Link to="/contact">
              Talk to Eolarity <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
