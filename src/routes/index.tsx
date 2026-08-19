import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Package } from "lucide-react";
import heroImage from "@/assets/hero-shipping.jpg";
import { Section, SectionHead } from "@/components/site/Section";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { ProductGrid } from "@/components/site/ProductCard";
import { ShippingComparison } from "@/components/site/ShippingComparison";
import { OrderTimeline } from "@/components/site/OrderTimeline";
import { FAQAccordion, faqs } from "@/components/site/FAQAccordion";
import { CourseSection } from "@/components/site/CourseSection";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { cta } from "@/components/site/cta";
import { products, WHATSAPP_URL } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JENNYCEO — Pre-Order From China to Nigeria" },
      {
        name: "description",
        content:
          "Join open group pre-orders from China at factory-level prices, choose sea or air shipping, and know exactly what to expect before you pay.",
      },
      { property: "og:title", content: "JENNYCEO — Pre-Order From China to Nigeria" },
      {
        property: "og:description",
        content:
          "Open pre-orders, clear shipping timelines and honest importation policies — all in one place.",
      },
    ],
  }),
  component: Home,
});

const trust = [
  {
    Icon: Package,
    title: "Factory-level pricing",
    body: "Orders are grouped together so customers buy closer to factory price instead of local retail.",
  },
  {
    Icon: Clock,
    title: "Honest timelines",
    body: "Sea is roughly 2–3 months, air roughly 7–14 days. No inflated promises.",
  },
  {
    Icon: ShieldCheck,
    title: "Clear rules upfront",
    body: "Shipping is paid on arrival, with a 3-day payment window for sea shipments. Written down, not repeated in chat.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImage}
          alt="Cargo ship carrying containers from China to Nigeria"
          className="absolute inset-0 size-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="relative container-page py-20 md:py-32">
          <p className="eyebrow text-gold">Importation & Pre-Orders</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
            Buy from China at factory prices — without guessing how it works.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            JENNYCEO runs group pre-orders from China to Nigeria. See what's
            open right now, understand shipping before you pay, and confirm
            your order on WhatsApp.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/pre-orders" className={cta({ variant: "gold", size: "lg" })}>
              Explore Current Pre-Orders
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={cta({ variant: "whatsapp", size: "lg" })}
            >
              <MessageCircle className="size-5" />
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </section>

      {/* Trust */}
      <Section className="py-14 md:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {trust.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <t.Icon className="size-5" />
              </span>
              <h2 className="mt-4 font-display text-lg">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="sand">
        <SectionHead
          eyebrow="How It Works"
          title="Four steps, from group order to your hands"
          intro="Every customer follows the same path. Knowing it in advance removes most of the questions."
        />
        <ProcessSteps />
        <div className="mt-10">
          <Link to="/how-it-works" className={cta({ variant: "outline", size: "lg" })}>
            See the full process
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Catalogue */}
      <Section>
        <SectionHead
          eyebrow="Open Now"
          title="Current pre-orders"
          intro="A sample of what a live catalogue looks like. Each item is a group order with its own status."
        />
        <div className="mt-10">
          <ProductGrid items={products.slice(0, 6)} />
        </div>
        <div className="mt-10">
          <Link to="/pre-orders" className={cta({ variant: "primary", size: "lg" })}>
            View all pre-orders
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Shipping */}
      <Section tone="sand">
        <SectionHead
          eyebrow="Shipping"
          title="Air or sea — you decide"
          intro="The same order, two different trade-offs between cost and speed."
        />
        <ShippingComparison />
      </Section>

      {/* After arrival */}
      <Section>
        <SectionHead
          eyebrow="After Your Order"
          title="What happens once goods reach Nigeria"
          intro="Shipping is paid on arrival, based on final weight or volume. Sea shipments carry a 3-day payment window."
        />
        <OrderTimeline />
      </Section>

      {/* FAQ */}
      <Section tone="sand">
        <SectionHead
          eyebrow="FAQs"
          title="The questions asked most often"
          intro="Answered here so WhatsApp can stay for orders, not repetition."
        />
        <FAQAccordion items={faqs.slice(0, 6)} />
        <div className="mt-8">
          <Link to="/faqs" className={cta({ variant: "outline", size: "lg" })}>
            Read all FAQs
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Course */}
      <Section tone="ink">
        <CourseSection />
      </Section>

      {/* WhatsApp */}
      <Section>
        <WhatsAppCTA />
      </Section>
    </>
  );
}
