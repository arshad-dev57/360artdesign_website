"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaShopify, FaShoppingCart, FaCreditCard, FaBoxOpen, FaChartLine, FaWordpress } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "Ecommerce Solutions",
    title: (
      <>
        Online Stores That <span style={{ color: "#1a4fd6", display: "inline-block" }}>Sell</span> Around the Clock
      </>
    ),
    paragraphStart:
      "Launch a high-converting online store built for growth. From product pages to checkout, we design every step of the buying journey to reduce friction and maximise revenue — crafted by our",
    animatedWords: ["Shopify Experts", "WooCommerce Developers", "Conversion Specialists", "Store Designers"],
    checklist: [
      "Shopify & WooCommerce stores",
      "Secure payment integration",
      "Inventory & order management",
      "Conversion rate optimization",
    ],
    primaryCta: "Launch Your Store",
    stats: [
      { num: "150+", label: "Stores Launched" },
      { num: "4.9/5", label: "Client Rating" },
      { num: "8+ yrs", label: "Experience" },
    ],
  },
  statsBand: [
    { num: "150+", label: "Stores Delivered", accent: "#4a7ae8" },
    { num: "$10M+", label: "Client Revenue", accent: "#e25555" },
    { num: "35%", label: "Avg. Conversion Lift", accent: "#4a7ae8" },
    { num: "24/7", label: "Store Monitoring", accent: "#e25555" },
  ],
  details: {
    badge: "Ecommerce Development",
    title: "Stores Built to Convert & Scale",
    desc: "We build fast, secure online stores on Shopify, WooCommerce, and custom stacks. Every store ships with optimized product pages, frictionless checkout, and the integrations you need to run marketing, shipping, and inventory from one place.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    ratingCard: { value: "4.9", label: "Store Owner Rating" },
    floatCard: {
      icons: [
        { node: <FaShopify />, bg: "#e8f5e9", color: "#95bf47" },
        { node: <FaWordpress />, bg: "#e8f0fb", color: "#21759b" },
      ],
      title: "Shopify & WooCommerce",
      sub: "Plus custom headless builds",
    },
    tiles: [
      { label: "Store Design & Setup", sub: "Branded themes, built to convert", icon: <FaShoppingCart />, bg: "#e9eefb", color: "#1a4fd6" },
      { label: "Payment Integration", sub: "Stripe, PayPal & local gateways", icon: <FaCreditCard />, bg: "#e6f6e9", color: "#2fae63" },
      { label: "Inventory & Fulfillment", sub: "Orders, stock & shipping automation", icon: <FaBoxOpen />, bg: "#fef6e6", color: "#f6a723" },
      { label: "Conversion Optimization", sub: "A/B-tested checkout & product pages", icon: <FaChartLine />, bg: "#fdeeee", color: "#e22222" },
      { label: "Shopify Development", sub: "Custom themes, apps & migrations", icon: <FaShopify />, bg: "#eef7e8", color: "#95bf47" },
    ],
  },
  tech: {
    title: "Built With Industry-Leading Tech",
    desc: "The right ecommerce stack for your catalog, market, and growth plans",
    chips: [
      { name: "Shopify", color: "#95bf47" },
      { name: "WooCommerce", color: "#96588a" },
      { name: "Magento", color: "#ee672f" },
      { name: "BigCommerce", color: "#121118" },
      { name: "Stripe", color: "#635bff" },
      { name: "PayPal", color: "#003087" },
      { name: "Klaviyo", color: "#232426" },
      { name: "Next.js", color: "#000000" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's Ecommerce Experts Meet Your Expectations?",
    checkItems: [
      "Our ecommerce team is 100% dedicated, ready to scale your existing store or launch a new one from the ground up.",
      "We offer in-depth consultations to understand your products, margins, and target customers before recommending a platform.",
      "Our experts bring proven store architectures and apps with a track record of increasing average order value.",
      "We follow an Agile process with staged launches, so you can start selling while we keep improving.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing with an open and straightforward approach, eliminating hidden costs or surprises.",
      "Our developers are meticulously selected to match your company's culture and values, ensuring they seamlessly integrate.",
      "Our experts are known for their quality-oriented approach, with great attention to detail across the entire funnel.",
    ],
  },
  expertise: {
    heading: "Our Ecommerce Expertise",
    desc: "We combine store design, engineering, and CRO to build shops that sell more",
    featuredImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
    featuredPills: [
      { text: "35% Avg. Conversion Lift", dot: "#4ade80" },
      { text: "PCI-Compliant Checkout", dot: "#60a5fa" },
    ],
    featuredExtra: "Every funnel step is measured and optimised after launch.",
    items: [
      {
        num: "01",
        title: "High-Converting Storefronts",
        desc: "Product pages, carts, and checkouts designed to remove friction and lift sales.",
        icon: <svg {...iconStroke}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
      },
      {
        num: "02",
        title: "Seamless Payments",
        desc: "Stripe, PayPal, and local gateways integrated with fraud protection built in.",
        icon: <svg {...iconStroke}><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
      },
      {
        num: "03",
        title: "Scalable Catalogs",
        desc: "From 10 products to 10,000 — fast search, filters, and collections that scale.",
        icon: <svg {...iconStroke}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
      },
      {
        num: "04",
        title: "Secure & Trusted",
        desc: "SSL, PCI compliance, and hardened checkout that customers can trust.",
        icon: <svg {...iconStroke}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
      },
      {
        num: "05",
        title: "Marketing Integrations",
        desc: "Email flows, analytics, and ad pixels wired in from day one.",
        icon: <svg {...iconStroke}><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>,
      },
      {
        num: "06",
        title: "Growth & Support",
        desc: "Ongoing CRO, seasonal campaigns, and store maintenance that compound revenue.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How We Build Your Store",
    desc: "A streamlined ecommerce process from concept to first sale",
    steps: [
      { step: "01", title: "Discovery", desc: "We analyze your products, market, and pick the right platform" },
      { step: "02", title: "Store Design", desc: "Branded storefront and product page designs that build trust" },
      { step: "03", title: "Development", desc: "Store build, payment setup, and all integrations configured" },
      { step: "04", title: "Testing", desc: "Full checkout, shipping, and tax testing across devices" },
      { step: "05", title: "Launch", desc: "Go live with analytics, pixels, and email flows connected" },
      { step: "06", title: "Optimize", desc: "CRO experiments and improvements that keep sales climbing" },
    ],
  },
  cta: {
    heading: "Ready to Start Selling Online?",
    desc: "Let's build a store your customers love and your competitors envy",
  },
};

export default function EcommercePage() {
  return <ServicePageTemplate config={config} />;
}
