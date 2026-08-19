import { createFileRoute } from "@tanstack/react-router";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { Section, SectionHead } from "@/components/site/Section";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Pre-Order FAQs — JENNYCEO" },
      {
        name: "description",
        content:
          "Answers to the questions customers ask most: what pre-order means, shipping times, the 3-day shipping payment rule and importation risks.",
      },
      { property: "og:title", content: "Pre-Order FAQs — JENNYCEO" },
      {
        property: "og:description",
        content:
          "Shipping timelines, payment rules and importation risks explained before you order.",
      },
    ],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <>
      <Section className="pb-6">
        <SectionHead
          eyebrow="FAQs"
          title="Everything customers usually ask on WhatsApp"
          intro="Read this once and you'll understand how pre-orders, shipping and payments work here."
        />
        <FAQAccordion />
      </Section>

      <Section tone="sand" className="pt-0">
        <WhatsAppCTA />
      </Section>
    </>
  );
}
