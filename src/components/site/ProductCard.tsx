import { Link } from "@tanstack/react-router";
import { ArrowRight, Ship } from "lucide-react";
import { formatNaira, statusLabel, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function StatusPill({ status }: { status: Product["status"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide uppercase",
        status === "open" && "bg-primary/10 text-primary",
        status === "closing-soon" && "bg-gold/25 text-gold-foreground",
        status === "closed" && "bg-muted text-muted-foreground",
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "open" && "bg-primary",
          status === "closing-soon" && "bg-gold",
          status === "closed" && "bg-muted-foreground",
        )}
      />
      {statusLabel[status]}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/pre-orders/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-square overflow-hidden bg-sand">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <StatusPill status={product.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{product.category}</p>
        <h3 className="mt-2 font-display text-lg leading-snug">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.summary}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Ship className="size-3.5" />
          {product.shippingHint}
        </div>
        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-[0.7rem] tracking-wide text-muted-foreground uppercase">
              Pre-order price
            </p>
            <p className="font-display text-xl">{formatNaira(product.price)}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            {product.status === "closed" ? "View details" : "Pre-order now"}
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
