import { useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Ship, Plane, ShieldAlert, Clock } from "lucide-react";
import { StatusPill, ProductGrid } from "@/components/site/ProductCard";
import { OrderForm } from "@/components/site/OrderForm";
import { Section, SectionHead } from "@/components/site/Section";
import { cta } from "@/components/site/cta";
import { formatNaira, getProduct, products } from "@/data/products";

export const Route = createFileRoute("/pre-orders/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product unavailable — JENNYCEO" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Pre-Order | JENNYCEO`;
    return {
      meta: [
        { title },
        { name: "description", content: product.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: product.summary },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [open, setOpen] = useState(false);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="container-page pt-8">
        <Link
          to="/pre-orders"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> All pre-orders
        </Link>
      </div>

      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-3xl border border-border bg-sand">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div>
            <StatusPill status={product.status} />
            <h1 className="mt-4 text-3xl leading-tight md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-muted-foreground">{product.category}</p>

            <p className="mt-6 font-display text-4xl">
              {formatNaira(product.price)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Pre-order price. Shipping balance is paid separately when the
              goods arrive in Nigeria.
            </p>

            <p className="mt-6 leading-relaxed">{product.description}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <Ship className="size-4 text-primary" /> Sea shipping
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Estimated 2–3 months after leaving China
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <Plane className="size-4 text-primary" /> Air shipping
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Estimated 7–14 days after leaving China
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <Clock className="mt-0.5 size-3.5 shrink-0 text-gold" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setOpen(true)}
                disabled={product.status === "closed"}
                className={cta({ variant: "primary", size: "lg" })}
              >
                {product.status === "closed"
                  ? "This batch has closed"
                  : "Reserve This Item"}
              </button>
              <Link
                to="/how-it-works"
                className={cta({ variant: "outline", size: "lg" })}
              >
                How pre-ordering works
              </Link>
            </div>

            <div className="mt-8 flex gap-3 rounded-2xl border border-gold/50 bg-warn p-5">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-warn-foreground" />
              <p className="text-sm leading-relaxed text-warn-foreground">
                Importation carries real risks. JENNYCEO cannot be held
                responsible for delays in arrival, wrong colours or sizes,
                factory errors, damage in transit or changes in shipping rates.
                For sea shipments, the shipping balance must be paid within 3
                days of arrival in Nigeria.
              </p>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Demo product — placeholder data for this prototype.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead eyebrow="Also open" title="Other pre-orders" />
        <div className="mt-10">
          <ProductGrid items={related} />
        </div>
      </Section>

      <OrderForm open={open} onOpenChange={setOpen} product={product} />
    </>
  );
}
