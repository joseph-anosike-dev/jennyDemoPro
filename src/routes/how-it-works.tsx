import { Link, createFileRoute } from "@tanstack/react-router";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { OrderTimeline } from "@/components/site/OrderTimeline";
import { Section, SectionHead } from "@/components/site/Section";
import { cta } from "@/components/site/cta";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Pre-Ordering Works — JENNYCEO" },
      {
        name: "description",
        content:
          "From choosing an item to collecting it in Nigeria: how JENNYCEO's group-buying pre-order system works, step by step.",
      },
      { property: "og:title", content: "How Pre-Ordering Works — JENNYCEO" },
      {
        property: "og:description",
        content:
          "The full pre-order journey: choose, pre-order, ship from China, pay shipping, collect.",
      },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <Section className="pb-4">
        <SectionHead
          eyebrow="How It Works"
          title="From factory in China to your hands in Nigeria"
          intro="JENNYCEO combines many customers' orders to meet factory minimum quantities. That's how you get factory-level pricing instead of local retail pricing."
        />
        <ProcessSteps />
      </Section>

      <Section tone="sand">
        <SectionHead
          eyebrow="After you order"
          title="What happens after I order?"
          intro="This is the part customers usually ask about most. Here is the full journey."
        />
        <OrderTimeline />
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-card sm:flex-row sm:items-center sm:justify-between md:p-10">
          <div>
            <h2 className="text-2xl md:text-3xl">Ready to pick something?</h2>
            <p className="mt-2 text-muted-foreground">
              See what group orders are open right now.
            </p>
          </div>
          <Link to="/pre-orders" className={cta({ variant: "primary", size: "lg" })}>
            Explore Pre-Orders
          </Link>
        </div>
      </Section>
    </>
  );
}
