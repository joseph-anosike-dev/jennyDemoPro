import handbag from "@/assets/product-handbag.jpg";
import blender from "@/assets/product-blender.jpg";
import fan from "@/assets/product-fan.jpg";
import sneakers from "@/assets/product-sneakers.jpg";
import storage from "@/assets/product-storage.jpg";
import mirror from "@/assets/product-mirror.jpg";

/**
 * DEMO DATA — placeholder catalogue for the JENNYCEO prototype.
 * Replace this file with real products (or a database/API call) later.
 * The rest of the app only depends on the `Product` shape below.
 */

export type OrderStatus = "open" | "closing-soon" | "closed";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: OrderStatus;
  shippingHint: string;
  summary: string;
  description: string;
  details: string[];
};

export const statusLabel: Record<OrderStatus, string> = {
  open: "Pre-Order Open",
  "closing-soon": "Closing Soon",
  closed: "Order Closed",
};

export const formatNaira = (value: number) =>
  `₦${value.toLocaleString("en-NG")}`;

export const products: Product[] = [
  {
    slug: "womens-luxury-handbag",
    name: "Women's Luxury Handbag",
    category: "Fashion & Bags",
    price: 42000,
    image: handbag,
    status: "open",
    shippingHint: "Sea or Air",
    summary: "Quilted everyday bag with gold-tone hardware.",
    description:
      "A structured quilted handbag with a top handle and detachable strap. Sourced directly from the factory through a group order, so the price reflects factory-level buying rather than local retail.",
    details: [
      "Colour options confirmed on WhatsApp before the order closes",
      "Weight affects your final shipping balance",
      "Best value on sea shipping",
    ],
  },
  {
    slug: "portable-rechargeable-blender",
    name: "Portable Rechargeable Blender",
    category: "Home & Kitchen",
    price: 18500,
    image: blender,
    status: "open",
    shippingHint: "Sea or Air",
    summary: "USB-rechargeable personal blender bottle.",
    description:
      "A compact rechargeable blender for smoothies and shakes. Light enough that air shipping stays reasonable if you don't want to wait for a sea shipment.",
    details: [
      "USB-C charging",
      "Light item — a good candidate for air shipping",
      "Colour may vary by factory batch",
    ],
  },
  {
    slug: "rechargeable-standing-fan",
    name: "Rechargeable Fan",
    category: "Home & Living",
    price: 32000,
    image: fan,
    status: "closing-soon",
    shippingHint: "Sea recommended",
    summary: "Quiet rechargeable fan with adjustable height.",
    description:
      "A rechargeable fan for power interruptions, with adjustable height and multiple speeds. Bulkier items like this are usually cheaper on sea shipping.",
    details: [
      "Bulky item — air shipping cost is significantly higher",
      "Battery-powered items may need extra handling time",
      "Group order closes once the factory minimum is met",
    ],
  },
  {
    slug: "mens-casual-sneakers",
    name: "Men's Casual Sneakers",
    category: "Fashion & Footwear",
    price: 27500,
    image: sneakers,
    status: "open",
    shippingHint: "Sea or Air",
    summary: "Clean minimal sneakers in everyday colourways.",
    description:
      "Minimal low-top sneakers suitable for everyday wear. Sizes follow factory sizing charts — please confirm your size carefully before the order closes.",
    details: [
      "Factory sizing can run smaller than Nigerian sizing",
      "Size and colour are confirmed before the order is placed",
      "Wrong-size risk is covered by the importation policy",
    ],
  },
  {
    slug: "kitchen-storage-set",
    name: "Kitchen Storage Set",
    category: "Home & Kitchen",
    price: 21000,
    image: storage,
    status: "open",
    shippingHint: "Sea recommended",
    summary: "Stackable airtight containers with wooden lids.",
    description:
      "A set of stackable airtight storage containers with sealed wooden lids. Fragile items are packed carefully, but breakage in transit remains an importation risk.",
    details: [
      "Fragile — packed with extra padding",
      "Sea shipping keeps the cost lowest",
      "Set quantity confirmed before order closes",
    ],
  },
  {
    slug: "led-beauty-mirror",
    name: "LED Beauty Mirror",
    category: "Beauty",
    price: 24500,
    image: mirror,
    status: "closed",
    shippingHint: "Next batch",
    summary: "Lighted vanity mirror with adjustable brightness.",
    description:
      "A round lighted vanity mirror with adjustable brightness. This batch has closed — join the WhatsApp community to be notified when the next group order opens.",
    details: [
      "This group order has closed",
      "Next batch announced on WhatsApp",
      "Prices may change between batches",
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const WHATSAPP_URL = "https://wa.me/2340000000000";
