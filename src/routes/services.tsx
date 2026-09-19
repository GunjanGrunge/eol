import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Settings, Triangle, Box } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AbstractPanel } from "@/components/AbstractPanel";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Capabilities — Eolarity Innovations LLP" },
      {
        name: "description",
        content:
          "We combine strategy, product thinking, and engineering to turn your highest-value opportunities into reliable technology.",
      },
      { property: "og:title", content: "Capabilities — Eolarity Innovations LLP" },
      { property: "og:description", content: "The right systems for real-world progress." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const capabilities = [
  {
    n: "01",
    title: "AI Strategy & Enablement",
    body: "Find the opportunities worth pursuing, align your team, and build a practical route forward.",
  },
  {
    n: "02",
    title: "AI Products & Agents",
    body: "Create useful AI experiences people can trust and adopt.",
  },
  {
    n: "03",
    title: "Automation & Integrations",
    body: "Connect the work, systems, and decisions that slow your team down.",
  },
  {
    n: "04",
    title: "Data & Knowledge Systems",
    body: "Build trustworthy information foundations for better answers and action.",
  },
];

const process = [
  {
    n: "01",
    title: "Diagnose",
    body: "Understand your goals, challenges, and constraints to find what really matters.",
  },
  {
    n: "02",
    title: "Design",
    body: "Shape the right solution — from strategy to a clear plan, with measurable outcomes.",
  },
  {
    n: "03",
    title: "Deliver",
    body: "Build, integrate, and support for real-world impact, not just prototypes.",
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

function ServicesPage() {
  return (
    <div className="bg-[#F2F2F2] text-[#1F2226]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1F2226] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
              Capabilities
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              The right systems for real-world progress.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#B8BCC2]">
              We combine strategy, product thinking, and engineering to turn your highest-value
              opportunities into reliable technology.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:col-span-5 lg:block"
          >
            <AbstractPanel variant="target" className="aspect-[4/3] w-full" />
          </motion.div>

          <div className="lg:col-span-12 mt-4 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between bg-[#1F2226] p-6"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-extrabold text-[#D96725]">{c.n}</span>
                    <span className="h-px flex-1 bg-white/15" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#B8BCC2]">{c.body}</p>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:text-[#D96725]"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE CTA */}
      <section className="mx-auto -mt-16 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-sm border border-[#1F2226]/10 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(31,34,38,0.2)] md:p-10"
        >
          <span className="h-px w-8 bg-[#D96725] block mb-4" />
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Not sure where to begin?
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#5C6470]">
            Tell us what you&rsquo;re exploring. We&rsquo;ll help you find the right starting point
            — no pressure, just a useful conversation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-none bg-[#D96725] font-bold text-white hover:bg-[#D95323]"
          >
            <Link to="/contact">
              Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-[#1F2226] py-24 text-white mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <span className="h-px w-8 bg-[#D96725] block mb-4" />
              <h2 className="text-3xl font-extrabold tracking-tight">How we work</h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B8BCC2]">
                A focused, collaborative process to turn complex challenges into real progress.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-6">
              {process.map((step, i) => (
                <div key={step.n} className="flex flex-1 items-start gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex-1"
                  >
                    <span className="text-2xl font-extrabold text-[#D96725]">{step.n}</span>
                    <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#B8BCC2]">{step.body}</p>
                  </motion.div>
                  {i < process.length - 1 && (
                    <span className="hidden pt-2 text-2xl text-white/20 sm:block">&rang;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
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
