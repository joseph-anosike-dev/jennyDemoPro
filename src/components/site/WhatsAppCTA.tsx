import { MessageCircle, Check } from "lucide-react";
import { WHATSAPP_URL } from "@/data/products";
import { cta } from "./cta";

const perks = [
  "New pre-order announcements",
  "Product updates",
  "Order information",
  "Community updates",
];

export function WhatsAppCTA() {
  return (
    <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-card md:grid-cols-2 md:items-center md:p-12">
      <div>
        <p className="eyebrow">Still want to stay connected?</p>
        <h2 className="mt-3 text-3xl md:text-4xl">
          The website is the front door. WhatsApp stays the conversation.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Customers can now understand the business before they message. The
          community is where announcements, confirmations and updates happen.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className={`${cta({ variant: "whatsapp", size: "lg" })} mt-7`}
        >
          <MessageCircle className="size-5" />
          Join the WhatsApp Community
        </a>
      </div>
      <ul className="grid gap-3 rounded-2xl bg-sand p-6">
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-3 text-sm">
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
              <Check className="size-3.5" />
            </span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
