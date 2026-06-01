import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { z } from "zod";
import { Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, useInView, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eolarity Innovations LLP" },
      {
        name: "description",
        content:
          "Reach out to Eolarity Innovations LLP about GenAI solutions, in-house products or partnerships.",
      },
      { property: "og:title", content: "Contact — Eolarity Innovations LLP" },
      { property: "og:description", content: "Get in touch with the Eolarity team." },
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
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function FloatLabel({
  id,
  name,
  label,
  type = "text",
  maxLength,
  required,
  error,
  textarea,
  rows,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  maxLength?: number;
  required?: boolean;
  error?: string;
  textarea?: boolean;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const floated = focused || hasValue;

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        animate={{ y: floated ? -22 : 0, scale: floated ? 0.82 : 1, color: floated ? "#D96725" : "#5C6470" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute left-0 top-2.5 origin-left text-sm font-medium pointer-events-none"
        style={{ transformOrigin: "left center" }}
      >
        {label}{required && <span className="text-[#D96725] ml-0.5">*</span>}
      </motion.label>

      {textarea ? (
        <Textarea
          id={id}
          name={name}
          rows={rows ?? 5}
          maxLength={maxLength}
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); setHasValue(e.target.value.length > 0); }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          className="mt-4 border-0 border-b border-[#1F2226]/20 rounded-none bg-transparent px-0 focus:border-[#D96725] focus:ring-0 focus-visible:ring-0 resize-none text-[#1F2226] placeholder:text-transparent transition-colors"
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          maxLength={maxLength}
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); setHasValue(e.target.value.length > 0); }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          className="mt-4 border-0 border-b border-[#1F2226]/20 rounded-none bg-transparent px-0 focus:border-[#D96725] focus:ring-0 focus-visible:ring-0 text-[#1F2226] placeholder:text-transparent transition-colors"
        />
      )}

      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[#D96725] origin-left"
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 text-xs text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const heroWords = "Tell us what you're building.".split(" ");

function ContactPage() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
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
    const subject = encodeURIComponent(`New enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nCompany: ${parsed.data.company ?? ""}\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:hello@eolarity.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#1F2226]">

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(31,34,38,0.06)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
        <div className="absolute -left-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#D96725]/5 blur-[120px] pointer-events-none" />

        <div ref={heroRef} className="relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1F2226]/10 bg-white/70 px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C6470] backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            System port active
          </motion.div>

          <h1 className="text-5xl font-extrabold uppercase tracking-tighter leading-[0.95] md:text-6xl max-w-3xl">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="inline-block mr-[0.25em]"
              >
                {word === "building." ? <span className="text-[#D96725]">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-6 max-w-lg text-base text-[#5C6470] font-medium leading-relaxed"
          >
            Drop a quick note. We read every message and respond personally.
          </motion.p>
        </div>
      </section>

      {/* FORM + ASIDE */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[1.4fr_1fr]">

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-16 text-center min-h-[400px]"
            >
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-6 text-2xl font-bold uppercase tracking-tight text-[#1F2226]"
              >
                Message ready.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-3 text-sm text-[#5C6470]"
              >
                Your email client should have opened with the message pre-filled. Send it off and we&apos;ll be in touch.
              </motion.p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-[#1F2226]/10 bg-white p-8 md:p-10 shadow-sm"
              noValidate
            >
              <div className="grid gap-8 md:grid-cols-2">
                <FloatLabel id="name" name="name" label="Name" required error={errors.name} />
                <FloatLabel id="email" name="email" label="Email" type="email" maxLength={255} required error={errors.email} />
              </div>
              <div className="mt-8">
                <FloatLabel id="company" name="company" label="Company (optional)" maxLength={100} />
              </div>
              <div className="mt-8">
                <FloatLabel id="message" name="message" label="Message" maxLength={2000} required textarea rows={5} error={errors.message} />
              </div>
              <div className="mt-10">
                <Button type="submit" size="lg" className="group relative overflow-hidden bg-[#1F2226] hover:bg-[#D96725] text-white rounded-none font-bold px-8 border-0 transition-colors duration-300">
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                  Send message <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              content: <a href="mailto:hello@eolarity.com" className="mt-1 block text-sm text-[#5C6470] hover:text-[#D96725] transition-colors">hello@eolarity.com</a>,
              accent: "#D96725",
            },
            {
              icon: MapPin,
              label: "Based in",
              content: <p className="mt-1 text-sm text-[#5C6470]">India — registered LLP under Startup India.</p>,
              accent: "#1F2226",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-[#1F2226]/10 bg-white p-6 hover:border-[#D96725]/30 hover:shadow-sm transition-all"
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-all group-hover:scale-110"
                style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold uppercase tracking-tight text-[#1F2226] text-sm">{item.label}</h3>
              {item.content}
            </motion.div>
          ))}

          {/* Quick note card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-[#D96725]/20 bg-[#D96725]/5 p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D96725] animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D96725]">Response time</span>
            </div>
            <p className="text-sm text-[#5C6470] leading-relaxed">
              We typically respond within <span className="font-bold text-[#1F2226]">24–48 hours</span>. For urgent requests, mention it in your message.
            </p>
          </motion.div>
        </motion.aside>
      </section>
    </div>
  );
}
