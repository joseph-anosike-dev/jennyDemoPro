import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cta } from "./cta";
import { products, WHATSAPP_URL, type Product } from "@/data/products";

export function OrderForm({
  open,
  onOpenChange,
  product,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  product?: Product;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [shipping, setShipping] = useState<"sea" | "air">("sea");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = (v: boolean) => {
    onOpenChange(v);
    if (!v) setTimeout(() => setSubmitted(false), 250);
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl sm:max-w-lg">
        {submitted ? (
          <div className="py-4 text-center">
            <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-7" />
            </span>
            <DialogHeader className="mt-5">
              <DialogTitle className="text-center font-display text-2xl">
                You're on the list.
              </DialogTitle>
              <DialogDescription className="text-center">
                We'll use WhatsApp to confirm the details and next steps.
              </DialogDescription>
            </DialogHeader>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={`${cta({ variant: "whatsapp", size: "full" })} mt-7`}
            >
              <MessageCircle className="size-4" />
              Continue to WhatsApp
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Demo only — nothing was actually submitted or charged.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">
                Reserve Your Pre-Order
              </DialogTitle>
              <DialogDescription>
                Submit your details and your order is confirmed on WhatsApp.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="e.g. Amaka Obi" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp Number</Label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  placeholder="e.g. 0801 234 5678"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <select
                  id="product"
                  defaultValue={product?.slug ?? products[0].slug}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label>Preferred Shipping Method</Label>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      { k: "sea", t: "Sea", s: "2–3 months · lower cost" },
                      { k: "air", t: "Air", s: "7–14 days · costs more" },
                    ] as const
                  ).map((o) => (
                    <button
                      key={o.k}
                      type="button"
                      onClick={() => setShipping(o.k)}
                      className={`rounded-xl border p-3 text-left transition-colors ${
                        shipping === o.k
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:bg-secondary"
                      }`}
                    >
                      <span className="block text-sm font-medium">{o.t}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {o.s}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="qty">Quantity</Label>
                <Input id="qty" type="number" min={1} defaultValue={1} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="note">Question (optional)</Label>
                <Textarea
                  id="note"
                  rows={3}
                  placeholder="Anything you'd like confirmed — colour, size, timing…"
                />
              </div>

              <button
                type="submit"
                className={cta({ variant: "primary", size: "full" })}
              >
                Submit Pre-Order Interest
              </button>
              <p className="text-center text-xs text-muted-foreground">
                No payment is taken here. Shipping balance is paid after the
                goods arrive in Nigeria.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
