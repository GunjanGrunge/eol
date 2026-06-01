import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/eolarity-logo-horizontal.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "rgba(245,243,239,0.7)",
        borderBottomColor: scrolled ? "rgba(31,34,38,0.12)" : "rgba(31,34,38,0.06)",
        boxShadow: scrolled ? "0 1px 24px rgba(31,34,38,0.06)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <motion.img
            src={logo}
            alt="Eolarity Innovations LLP"
            className="h-9 w-auto"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-sm font-medium text-[#5C6470] transition-colors hover:text-[#1F2226]"
                activeProps={{ className: "text-[#1F2226]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D96725] origin-left"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Hover underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1F2226]/20 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: isActive ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            );
          })}
          <Button asChild size="sm" className="group relative overflow-hidden bg-[#1F2226] hover:bg-[#D96725] text-white rounded-none font-bold border-0 transition-colors duration-300">
            <Link to="/contact">
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.35 }}
              />
              Contact us
            </Link>
          </Button>
        </nav>

        <motion.button
          className="rounded-md p-2 md:hidden text-[#1F2226]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#1F2226]/8 bg-white/95 md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-[#5C6470] hover:bg-[#F5F3EF] hover:text-[#1F2226] transition-colors"
                    activeProps={{ className: "text-[#1F2226] bg-[#F5F3EF]" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: links.length * 0.05 }}>
                <Button asChild size="sm" className="mt-2 w-full bg-[#1F2226] hover:bg-[#D96725] text-white rounded-none font-bold border-0 transition-colors">
                  <Link to="/contact" onClick={() => setOpen(false)}>Contact us</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
