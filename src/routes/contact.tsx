import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Clock, Ban, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AbstractPanel } from "@/components/AbstractPanel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eolarity Innovations LLP" },
      {
        name: "description",
        content:
          "Tell us what you're working toward. We'll arrive prepared with useful questions and practical next steps.",
      },
      { property: "og:title", content: "Contact — Eolarity Innovations LLP" },
      {
        property: "og:description",
        content: "Bring the question. We'll help shape the next move.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const topics = ["AI & automation", "Digital product", "Data systems", "Something else"];

const expectations = [
  {
    icon: Clock,
    title: "A focused 30-minute conversation",
    body: "We will discuss your goals, challenges and opportunities.",
  },
  {
    icon: Ban,
    title: "No pressure or pitch deck",
    body: "This is a working conversation, not a sales call.",
  },
  {
    icon: CheckCircle2,
    title: "A clear, practical next step",
    body: "You will leave with actionable ideas, whether we work together or not.",
  },
];

const faqs = [
  {
    q: "What should I bring?",
    a: "Just a clear sense of what you're working on. Loose goals, constraints, or an early idea are all fine — we'll help shape it from there.",
  },
  {
    q: "Do you work with early-stage teams?",
    a: "Yes. We work with teams at every stage, from validating an early idea to scaling a production system.",
  },
  {
    q: "How soon can we begin?",
    a: "Most engagements kick off within one to two weeks of our first conversation, depending on scope.",
  },
];

function ContactPage() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [topic, setTopic] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setErrors({});
    const improve = String(fd.get("improve") ?? "");
    const subject = encodeURIComponent(`Consultation request from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nCompany: ${parsed.data.company ?? ""}\nLooking to improve: ${improve}\nPrimarily about: ${topic ?? ""}`,
    );
    window.location.href = `mailto:hello@eolarity.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="bg-[#F2F2F2] text-[#1F2226]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1F2226] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D96725]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
                Start a conversation
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Bring the question. We&rsquo;ll help shape the next move.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#B8BCC2]">
              Tell us what you are working toward. We will arrive prepared with useful questions and
              practical next steps.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:col-span-6 lg:block"
          >
            <AbstractPanel variant="chat" className="aspect-[4/3] w-full" />
          </motion.div>
        </div>
      </section>

      {/* FORM + EXPECTATIONS */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[380px] flex-col items-center justify-center rounded-sm border border-[#1F2226]/10 bg-white p-12 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-[#D96725]" />
                <h3 className="mt-6 text-xl font-bold">Request ready.</h3>
                <p className="mt-3 max-w-sm text-sm text-[#5C6470]">
                  Your email client should have opened with the details pre-filled. Send it off and
                  we&rsquo;ll reply within one business day.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-sm border border-[#1F2226]/10 bg-white p-7 md:p-9"
                noValidate
              >
                <h2 className="text-lg font-bold">A few details to get us started</h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your name"
                      className="rounded-sm border-[#1F2226]/15"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Work email"
                      className="rounded-sm border-[#1F2226]/15"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <Input
                    name="company"
                    placeholder="Company"
                    className="rounded-sm border-[#1F2226]/15"
                  />
                  <select
                    name="improve"
                    defaultValue=""
                    className="h-9 rounded-sm border border-[#1F2226]/15 bg-transparent px-3 text-sm text-[#1F2226]"
                  >
                    <option value="" disabled>
                      What are you looking to improve?
                    </option>
                    <option value="Speed">Speed to delivery</option>
                    <option value="Adoption">Adoption of existing tools</option>
                    <option value="Reliability">Reliability and quality</option>
                    <option value="Clarity">Clarity on what to build next</option>
                  </select>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-sm text-[#5C6470]">What is this primarily about?</p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`rounded-sm border px-4 py-2 text-xs font-semibold transition-colors ${
                          topic === t
                            ? "border-[#D96725] bg-[#D96725] text-white"
                            : "border-[#1F2226]/15 text-[#1F2226] hover:border-[#D96725]/50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-8 w-full rounded-none bg-[#D96725] font-bold text-white hover:bg-[#D95323]"
                >
                  Request a consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="mt-3 text-center text-xs text-[#5C6470]">
                  We typically reply within one business day.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <h2 className="text-2xl font-bold">What to expect</h2>
          <div className="mt-6 space-y-6">
            {expectations.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#D96725] text-[#D96725]">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5C6470]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1F2226]/10 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D96725]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96725]">
                Common questions
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">FAQs</h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#5C6470]">
              A few quick answers before you reach out. If you have another question, we are happy
              to help.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-[#1F2226]/10">
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#5C6470]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
