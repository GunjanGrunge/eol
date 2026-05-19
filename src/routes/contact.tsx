import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

function ContactPage() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

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
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you're building."
          lede="Drop a quick note. We read every message and respond personally."
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[1.4fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card/60 p-8 md:p-10"
          noValidate
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" maxLength={100} className="mt-2" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" maxLength={255} className="mt-2" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="company">Company <span className="text-muted-foreground">(optional)</span></Label>
            <Input id="company" name="company" maxLength={100} className="mt-2" />
          </div>
          <div className="mt-5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={6} maxLength={2000} className="mt-2" />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <Button type="submit" size="lg" className="mt-6 glow">
            Send message <Send className="ml-2 h-4 w-4" />
          </Button>
          {sent && (
            <p className="mt-4 text-sm text-primary">
              Your email client should open with the message ready to send.
            </p>
          )}
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card/60 p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">Email</h3>
            <a href="mailto:hello@eolarity.com" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
              hello@eolarity.com
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">Based in</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              India — registered LLP under Startup India.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
