import { Link } from "@tanstack/react-router";
import logo from "@/assets/eolarity-logo-horizontal.png";
import startupIndia from "@/assets/startupindia.png";
import madeInIndia from "@/assets/makeinindia.png";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-[#1F2226]/10 bg-[#F5F3EF]">
      {/* Animated gradient divider */}
      <motion.div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #1F2226 25%, #D96725 50%, #1F2226 75%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <motion.img
            src={logo}
            alt="Eolarity Innovations LLP"
            className="h-10 w-auto"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
          <p className="mt-4 max-w-sm text-sm text-[#5C6470] leading-relaxed">
            Custom GenAI solutions, in-house products, and consulting built at
            the speed of the current meta.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <motion.img
              src={startupIndia}
              alt="Registered under Startup India"
              className="h-16 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
            <motion.img
              src={madeInIndia}
              alt="Made in India"
              className="h-16 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#1F2226]/10 bg-white text-[#5C6470] hover:border-[#D96725]/40 hover:text-[#D96725] transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <s.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1F2226]">Explore</h4>
          <ul className="space-y-2.5 text-sm text-[#5C6470]">
            {[
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-1 hover:text-[#1F2226] transition-colors"
                >
                  {l.label}
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -4, y: 4 }}
                    whileHover={{ x: 0, y: 0 }}
                  >
                    <ArrowUpRight className="h-3 w-3 text-[#D96725]" />
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1F2226]">Reach out</h4>
          <ul className="space-y-2.5 text-sm text-[#5C6470]">
            <li>
              <a href="mailto:hello@eolarity.com" className="hover:text-[#D96725] transition-colors">
                hello@eolarity.com
              </a>
            </li>
            <li>India</li>
          </ul>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D96725] animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C6470]">Status</span>
            </div>
            <p className="text-xs text-[#5C6470]">All systems operational</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1F2226]/8">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#5C6470]">
          <span>© {new Date().getFullYear()} Eolarity Innovations LLP. All rights reserved.</span>
          <span className="font-mono text-[10px] uppercase tracking-widest">
            v2.0 · Speed of the current meta
          </span>
        </div>
      </div>
    </footer>
  );
}
