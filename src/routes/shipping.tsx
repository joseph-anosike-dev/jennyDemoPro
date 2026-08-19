import { Link, createFileRoute } from "@tanstack/react-router";
import { ShippingComparison } from "@/components/site/ShippingComparison";
import { OrderTimeline } from "@/components/site/OrderTimeline";
import { Section, SectionHead } from "@/components/site/Section";
import { cta } from "@/components/site/cta";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Air vs Sea Shipping — JENNYCEO" },
      {
        name: "description",
        content:
          "Compare sea shipping (estimated 2–3 months) and air shipping (estimated 7–14 days) for pre-orders from China to Nigeria.",
      },
      { property: "og:title", content: "Air vs Sea Shipping — JENNYCEO" },
      {
        property: "og:description",
        content:
          "Costs, timing and the 3-day shipping payment rule explained clearly.",
      },
    ],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <>
      <Section className="pb-4">
        <SectionHead
          eyebrow="Shipping"
          title="Air or sea? Choose what fits your budget and timing"
          intro="Both options start the same way — your order is produced and consolidated in China. The difference is how it travels to Nigeria."
        />
        <ShippingComparison />
      </Section>

      <Section tone="sand">
        <SectionHead
          eyebrow="Arrival"
          title="What happens when your goods arrive"
          intro="Shipping is paid after arrival, based on the final weight or volume of your item."
        />
        <OrderTimeline />
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-card sm:flex-row sm:items-center sm:justify-between md:p-10">
          <div>
            <h2 className="text-2xl md:text-3xl">Still have questions?</h2>
            <p className="mt-2 text-muted-foreground">
              Most answers are already written down for you.
            </p>
          </div>
          <Link to="/faqs" className={cta({ variant: "primary", size: "lg" })}>
            Read the FAQs
          </Link>
        </div>
      </Section>
    </>
  );
}
