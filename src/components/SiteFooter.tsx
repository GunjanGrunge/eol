import { Link } from "@tanstack/react-router";
import logo from "@/assets/eolarity-logo-horizontal.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/40 bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Eolarity Innovations LLP" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Custom GenAI solutions, in-house products, and consulting built at
            the speed of the current meta.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Registered under Startup India
            </span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              LLP — India
            </span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold">Reach out</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:hello@eolarity.com" className="hover:text-foreground">
                hello@eolarity.com
              </a>
            </li>
            <li>India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eolarity Innovations LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
