import { cva, type VariantProps } from "class-variance-authority";

export const cta = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-card hover:shadow-lift hover:-translate-y-0.5",
        gold: "bg-gold text-gold-foreground shadow-card hover:shadow-lift hover:-translate-y-0.5",
        ink: "bg-ink text-ink-foreground hover:opacity-90",
        outline:
          "border border-border bg-background text-foreground hover:bg-secondary",
        ghost: "text-foreground hover:bg-secondary",
        whatsapp:
          "bg-whatsapp text-whatsapp-foreground shadow-card hover:shadow-lift hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-7 text-base",
        full: "h-12 w-full px-6 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type CtaVariants = VariantProps<typeof cta>;
