import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "sand" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "sand" && "bg-sand",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", invert && "text-gold")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl leading-[1.1] md:text-4xl lg:text-[2.75rem]",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            invert ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
