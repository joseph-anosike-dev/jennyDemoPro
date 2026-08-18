import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4 md:py-16">
        <div className="md:col-span-2 md:max-w-sm">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl">JENNY</span>
            <span className="font-display text-2xl text-gold">CEO</span>
          </div>
          <p className="mt-4 text-sm text-ink-foreground/70">
            A group-buying and pre-order importation business. Customers pool
            orders to meet factory minimums from China, then ship to Nigeria by
            sea or air.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`${label} (placeholder link)`}
                className="inline-flex size-10 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
            <li>
              <Link to="/pre-orders" className="hover:text-gold">
                Pre-Orders
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-gold">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-gold">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-gold">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/course" className="hover:text-gold">
                Importation Course
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide">Community</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <MessageCircle className="size-4" /> WhatsApp Community
              </a>
            </li>
            <li>
              <Link to="/policy" className="hover:text-gold">
                Order Policy & Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 JENNYCEO. All rights reserved.</p>
          <p>Demo website — product data shown is placeholder content.</p>
        </div>
      </div>
    </footer>
  );
}
