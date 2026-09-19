import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, LayoutGrid, Code2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AbstractPanel } from "@/components/AbstractPanel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company — Eolarity Innovations LLP" },
      {
        name: "description",
        content:
          "Eolarity partners with ambitious teams to make technology more useful, more dependable, and easier to move forward with.",
      },
      { property: "og:title", content: "Company — Eolarity Innovations LLP" },
      { property: "og:description", content: "Clarity is the starting point for progress." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    n: "01",
    title: "Start with the real problem",
    body: "We take time to understand what matters, challenge assumptions, and get to the root of the problem before we propose a solution.",
  },
  {
    n: "02",
    title: "Build with people",
    body: "We collaborate closely with your team, combining perspectives and expertise to create solutions that work in the real world.",
  },
  {
    n: "03",
    title: "Deliver with discipline",
    body: "We focus on measurable outcomes, maintain high standards, and follow through — from plan to product and beyond.",
  },
];

const steps = [
  { icon: Search, title: "Align", body: "Understand goals, context, and constraints." },
  { icon: LayoutGrid, title: "Shape", body: "Define the right opportunity and chart the path." },
  { icon: Code2, title: "Build", body: "Design and engineer with focus and transparency." },
  { icon: BarChart3, title: "Improve", body: "Measure, learn, and make what's next better." },
];

function AboutPage() {
  return (
    <div className="bg-[#F2F2F2] text-[#1F2226]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1F2226] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
              About Eolarity
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Clarity is the starting point for <span className="text-[#D96725]">progress.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#B8BCC2]">
              We partner with ambitious teams to make technology more useful, more dependable, and
              easier to move forward with.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/60">
              <span className="h-px w-6 bg-[#D96725]" />
              <span>Ideas</span>
              <ArrowRight className="h-3 w-3" />
              <span>Systems</span>
              <ArrowRight className="h-3 w-3" />
              <span>Real impact</span>
            </div>
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <AbstractPanel variant="stairs" className="aspect-[4/3] w-full" />
          </motion.div>
        </div>
      </section>

      {/* HOW WE THINK */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
                How we think
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Three principles guide everything we do.
              </h2>
            </div>
            <div className="lg:col-span-8 grid gap-8 sm:grid-cols-3">
              {principles.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08 }}
                  className="border-t-2 border-[#1F2226]/10 pt-5"
                >
                  <span className="text-xs font-mono text-[#5C6470]">{p.n}</span>
                  <h3 className="mt-2 font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6470]">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#1F2226] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
                Our approach
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                A focused partner for <span className="text-[#D96725]">meaningful work.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#B8BCC2]">
                Eolarity brings strategy, design, and engineering into one accountable team – from
                first question to deployed product.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 sm:block" />
                {steps.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#D96725]">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold">{s.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#B8BCC2]">{s.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
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
