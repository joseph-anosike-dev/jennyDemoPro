import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { cta } from "./cta";
import { WHATSAPP_URL } from "@/data/products";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/pre-orders", label: "Pre-Orders" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/shipping", label: "Shipping" },
  { to: "/faqs", label: "FAQs" },
  { to: "/course", label: "Importation Course" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 md:h-18">
        <Link to="/" className="group flex items-baseline gap-1.5">
          <span className="font-display text-xl tracking-tight md:text-2xl">
            JENNY
          </span>
          <span className="font-display text-xl tracking-tight text-primary md:text-2xl">
            CEO
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground bg-secondary" }}
                className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(cta({ variant: "whatsapp", size: "sm" }), "hidden sm:inline-flex")}
          >
            <MessageCircle className="size-4" />
            Join WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-border bg-background px-5 pt-4 pb-10 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="flex items-center justify-between border-b border-border py-4 font-display text-2xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/pre-orders"
              onClick={() => setOpen(false)}
              className={cta({ variant: "primary", size: "full" })}
            >
              Explore Pre-Orders
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={cta({ variant: "whatsapp", size: "full" })}
            >
              <MessageCircle className="size-4" />
              Join WhatsApp Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
