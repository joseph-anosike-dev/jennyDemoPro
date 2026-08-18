import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/site/ProductCard";
import { Section, SectionHead } from "@/components/site/Section";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { products } from "@/data/products";

export const Route = createFileRoute("/pre-orders/")({
  head: () => ({
    meta: [
      { title: "Current Pre-Orders — JENNYCEO" },
      {
        name: "description",
        content:
          "Browse the pre-orders currently open at JENNYCEO. Factory-level prices from China, shipped to Nigeria by sea or air.",
      },
      { property: "og:title", content: "Current Pre-Orders — JENNYCEO" },
      {
        property: "og:description",
        content:
          "Browse open group orders, see pre-order prices and choose sea or air shipping.",
      },
    ],
  }),
  component: PreOrders,
});

function PreOrders() {
  return (
    <>
      <Section className="pb-8">
        <SectionHead
          eyebrow="Current Pre-Orders"
          title="What's available right now"
          intro="Each item below is a group order. When enough customers join, the order is placed with the factory and shipped to Nigeria."
        />
        <p className="mt-6 inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs text-muted-foreground">
          Demo catalogue — placeholder products for this prototype.
        </p>
      </Section>

      <Section className="pt-0">
        <ProductGrid items={products} />
      </Section>

      <Section tone="sand">
        <WhatsAppCTA />
      </Section>
    </>
  );
}
