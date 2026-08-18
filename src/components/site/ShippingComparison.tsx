import { Ship, Plane, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const options = [
  {
    key: "sea",
    Icon: Ship,
    title: "Sea Shipping",
    time: "2–3 months",
    timeNote: "estimated transit time after the goods leave China",
    points: [
      "Lower cost per item",
      "Slower — plan ahead",
      "Best for bulky or heavy items",
      "Best for customers who can wait",
    ],
    tag: "Most popular",
  },
  {
    key: "air",
    Icon: Plane,
    title: "Air Shipping",
    time: "7–14 days",
    timeNote: "estimated transit time after the order leaves China",
    points: [
      "Much faster",
      "More expensive",
      "Best for light, small items",
      "Best when you need goods sooner",
    ],
    tag: "Faster option",
  },
];

export function ShippingComparison() {
  return (
    <>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {options.map((o) => (
          <div
            key={o.key}
            className={cn(
              "flex flex-col rounded-2xl border p-7 shadow-card",
              o.key === "sea"
                ? "border-primary/25 bg-primary/5"
                : "border-border bg-card",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={cn(
                  "inline-flex size-12 items-center justify-center rounded-full",
                  o.key === "sea"
                    ? "bg-primary text-primary-foreground"
                    : "bg-gold text-gold-foreground",
                )}
              >
                <o.Icon className="size-5" />
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-[0.7rem] font-semibold tracking-wide uppercase text-muted-foreground">
                {o.tag}
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl">{o.title}</h3>
            <p className="mt-4 font-display text-4xl">{o.time}</p>
            <p className="mt-1 text-sm text-muted-foreground">{o.timeNote}</p>
            <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
              {o.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        These are estimated transit times, not guaranteed delivery dates.
        International shipping can be affected by factory schedules, port
        clearance and other delays outside the company's control.
      </p>
    </>
  );
}
