import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: 'What does "pre-order" mean?',
    a: "It means the item is not necessarily in Nigeria when you order it. Your order is placed with the factory in China first, combined with other customers' orders, then shipped. You are reserving an item, not buying from local stock.",
  },
  {
    q: "Why does shipping take so long?",
    a: "Most goods travel by sea from China to Nigeria. The order first has to be produced or gathered at the factory, consolidated with other orders, loaded, shipped across the sea, then cleared at the Nigerian port. Each stage takes time.",
  },
  {
    q: "Can I ship by air?",
    a: "Yes. Air shipping is available and is much faster than sea, but it costs significantly more — especially for bulky or heavy items.",
  },
  {
    q: "How long does sea shipping take?",
    a: "Approximately 2–3 months after the goods leave China. It can sometimes arrive sooner, but you should plan with 3 months as the maximum expectation, subject to the normal realities and risks of international shipping.",
  },
  {
    q: "How long does air shipping take?",
    a: "Approximately 7–14 days after the order leaves China.",
  },
  {
    q: "What happens if my goods arrive and I don't pay shipping?",
    a: "For sea shipments you have 3 days after arrival in Nigeria to pay the required shipping amount. If payment is delayed, daily demurrage or storage charges may apply and the item may ultimately be forfeited or auctioned so the company can recover its costs.",
  },
  {
    q: "What if the factory sends the wrong colour or size?",
    a: "Factory errors — including wrong colours, wrong sizes and other mistakes made at source — are among the risks customers accept under the business policy. The company cannot be held responsible for them.",
  },
  {
    q: "What if shipping costs change?",
    a: "Shipping rates are set by shipping companies and can go up or down between the time you order and the time your goods arrive. Your shipping balance is calculated at the rate that applies when the shipment arrives.",
  },
  {
    q: "Is my order guaranteed?",
    a: "No guarantees are made beyond what the business states. Importation carries real risks: delays in arrival, wrong colours or sizes, factory errors, damage in transit and changing shipping rates. Placing an order means you understand and accept these risks.",
  },
  {
    q: "How do I actually place an order?",
    a: "Open a product on the pre-orders page, tap Reserve This Item and submit your details. Your order is then confirmed on WhatsApp, where payment and next steps are handled.",
  },
];

export function FAQAccordion({ items = faqs }: { items?: typeof faqs }) {
  return (
    <Accordion type="single" collapsible className="mt-10 w-full">
      {items.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`item-${i}`}
          className="border-b border-border"
        >
          <AccordionTrigger className="py-5 text-left font-display text-lg leading-snug hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
