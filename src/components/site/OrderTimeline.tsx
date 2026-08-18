import { AlertTriangle } from "lucide-react";

const steps = [
  {
    title: "You place your pre-order",
    body: "You reserve your item while the group order is still open.",
  },
  {
    title: "Order is processed with the supplier",
    body: "Once the batch closes, orders are combined and placed with the factory.",
  },
  {
    title: "Goods leave China",
    body: "Your item is consolidated and shipped by sea or air, depending on your choice.",
  },
  {
    title: "Goods arrive in Nigeria",
    body: "You are notified as soon as the shipment lands and clearing begins.",
  },
  {
    title: "You receive your shipping payment instructions",
    body: "The shipping balance depends on the final weight or volume of your item.",
  },
  {
    title: "Shipping payment must be completed within the required period",
    body: "For sea shipments this is 3 days after arrival in Nigeria.",
  },
  {
    title: "Your goods are released or collected",
    body: "Collection or delivery follows the company's stated process.",
  },
];

export function OrderTimeline() {
  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_22rem]">
      <ol className="relative border-l border-border pl-8">
        {steps.map((s, i) => (
          <li key={s.title} className="relative pb-9 last:pb-0">
            <span className="absolute -left-[2.55rem] flex size-8 items-center justify-center rounded-full border border-border bg-background font-display text-xs">
              {i + 1}
            </span>
            <h3 className="font-display text-lg leading-snug">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {s.body}
            </p>
          </li>
        ))}
      </ol>

      <aside className="h-fit rounded-2xl border border-gold/50 bg-warn p-6 lg:sticky lg:top-24">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-gold text-gold-foreground">
          <AlertTriangle className="size-5" />
        </span>
        <h3 className="mt-5 font-display text-xl text-warn-foreground">
          The 3-day payment rule
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-warn-foreground">
          For sea shipments, customers have <strong>3 days</strong> after the
          goods arrive in Nigeria to pay the required shipping amount.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-warn-foreground">
          Delayed payment may result in daily demurrage or storage charges and,
          ultimately, forfeiture of the goods so the company can recover its
          costs.
        </p>
      </aside>
    </div>
  );
}
