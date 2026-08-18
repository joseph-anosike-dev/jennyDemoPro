import { Link } from "@tanstack/react-router";
import { GraduationCap, ArrowRight } from "lucide-react";
import { cta } from "./cta";

export function CourseSection() {
  return (
    <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
      <div>
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold text-gold-foreground">
          <GraduationCap className="size-5" />
        </span>
        <h2 className="mt-6 text-3xl md:text-4xl">
          Want to learn importation yourself?
        </h2>
        <p className="mt-4 max-w-xl text-ink-foreground/70">
          Go beyond buying. Learn how the importation business works and build
          the knowledge to source for yourself.
        </p>
        <Link
          to="/course"
          className={`${cta({ variant: "gold", size: "lg" })} mt-7`}
        >
          Explore the Importation Course
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="rounded-2xl border border-ink-foreground/15 p-6">
        <p className="eyebrow text-gold">Course outline</p>
        <ul className="mt-4 space-y-3 text-sm text-ink-foreground/75">
          {[
            "Understanding the importation model",
            "Finding and speaking with suppliers",
            "Costing, shipping and clearing",
            "Running your own group orders",
          ].map((i) => (
            <li key={i} className="border-b border-ink-foreground/10 pb-3 last:border-0 last:pb-0">
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-ink-foreground/50">
          Placeholder outline for the demo — replace with the real curriculum,
          pricing and enrolment details.
        </p>
      </div>
    </div>
  );
}
