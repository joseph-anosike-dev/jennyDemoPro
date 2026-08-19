import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Section, SectionHead } from "@/components/site/Section";
import { CourseSection } from "@/components/site/CourseSection";
import { cta } from "@/components/site/cta";
import { WHATSAPP_URL } from "@/data/products";

const modules = [
  {
    title: "How importation really works",
    body: "The full journey of a product from a factory in China to a customer in Nigeria, and where money is made or lost along the way.",
  },
  {
    title: "Finding and vetting suppliers",
    body: "Where to look, how to talk to factories, and how to avoid the mistakes that cost beginners their first capital.",
  },
  {
    title: "Costing, shipping and clearing",
    body: "Sea vs air, CBM and weight, clearing costs, and how to price so you still profit after shipping.",
  },
  {
    title: "Running your own group orders",
    body: "How to gather customers, collect payments safely, set expectations and manage a pre-order community.",
  },
];

export const Route = createFileRoute("/course")({
  head: () => ({
    meta: [
      { title: "Importation Course — JENNYCEO" },
      {
        name: "description",
        content:
          "Learn how to import from China to Nigeria: sourcing suppliers, costing, shipping, clearing and running your own group orders.",
      },
      { property: "og:title", content: "Importation Course — JENNYCEO" },
      {
        property: "og:description",
        content:
          "Go beyond buying. Learn the importation business and source for yourself.",
      },
    ],
  }),
  component: CoursePage,
});

function CoursePage() {
  return (
    <>
      <Section className="pb-6">
        <SectionHead
          eyebrow="Importation Course"
          title="Learn to import for yourself"
          intro="Most people only want the product. A few want the business behind it. This course is for the second group."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <p className="font-display text-3xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Placeholder outline for this demo — replace with the real curriculum,
          pricing and enrolment details.
        </p>
      </Section>

      <Section tone="ink">
        <CourseSection />
        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className={cta({ variant: "whatsapp", size: "lg" })}
          >
            <MessageCircle className="size-5" />
            Ask about the course on WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}
