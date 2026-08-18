import { Search, Users, Ship, PackageCheck } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Choose",
    Icon: Search,
    body: "Browse the pre-orders that are currently open and pick what you want.",
  },
  {
    n: "02",
    title: "Pre-Order",
    Icon: Users,
    body: "Join the group order and secure your item while the batch is still open.",
  },
  {
    n: "03",
    title: "China → Nigeria",
    Icon: Ship,
    body: "Orders are consolidated at the factory and shipped by sea or air.",
  },
  {
    n: "04",
    title: "Receive",
    Icon: PackageCheck,
    body: "Goods arrive in Nigeria. You pay the shipping balance and collect your item.",
  },
];

export function ProcessSteps() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <div
          key={s.n}
          className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <s.Icon className="size-5" />
            </span>
            <span className="font-display text-2xl text-muted-foreground/40">
              {s.n}
            </span>
          </div>
          <h3 className="mt-5 font-display text-xl">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {s.body}
          </p>
          {i < steps.length - 1 && (
            <span className="rule-gold absolute top-1/2 -right-2 hidden h-px w-4 lg:block" />
          )}
        </div>
      ))}
    </div>
  );
}
