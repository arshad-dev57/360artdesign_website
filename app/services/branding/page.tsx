"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaPalette, FaPenNib, FaLightbulb, FaBullhorn, FaFileAlt } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "Branding & Identity",
    title: (
      <>
        Build a Brand People <span style={{ color: "#1a4fd6", display: "inline-block" }}>Remember</span> & Trust
      </>
    ),
    paragraphStart:
      "Your brand is more than a logo — it's every impression you make. We craft complete brand identities that tell your story, win trust, and set you apart, designed by our",
    animatedWords: ["Brand Strategists", "Logo Designers", "Visual Storytellers", "Identity Experts"],
    checklist: [
      "Logo design & refresh",
      "Complete brand guidelines",
      "Marketing collateral",
      "Social media branding",
    ],
    primaryCta: "Start Your Brand",
    stats: [
      { num: "200+", label: "Brands Created" },
      { num: "4.9/5", label: "Client Rating" },
      { num: "8+ yrs", label: "Experience" },
    ],
  },
  statsBand: [
    { num: "200+", label: "Brands Launched", accent: "#4a7ae8" },
    { num: "98%", label: "Client Retention", accent: "#e25555" },
    { num: "30+", label: "Industries Served", accent: "#4a7ae8" },
    { num: "3", label: "Concepts Per Project", accent: "#e25555" },
  ],
  details: {
    badge: "Brand Identity",
    title: "Identities That Tell Your Story",
    desc: "We build brands from strategy up: positioning, naming, logo, color, typography, and voice — delivered in a complete brand book your whole team can use. Whether you're launching new or refreshing an outdated look, we make your brand impossible to ignore.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    ratingCard: { value: "4.9", label: "Client Rating" },
    floatCard: {
      icons: [
        { node: <FaPenNib />, bg: "#fdeeee", color: "#e22222" },
        { node: <FaPalette />, bg: "#e9eefb", color: "#1a4fd6" },
      ],
      title: "Strategy + Design",
      sub: "From concept to brand book",
    },
    tiles: [
      { label: "Logo Design", sub: "3 concepts, unlimited refinements", icon: <FaPenNib />, bg: "#fdeeee", color: "#e22222" },
      { label: "Brand Guidelines", sub: "Colors, type & usage rules", icon: <FaFileAlt />, bg: "#e9eefb", color: "#1a4fd6" },
      { label: "Brand Strategy", sub: "Positioning, voice & messaging", icon: <FaLightbulb />, bg: "#fef6e6", color: "#f6a723" },
      { label: "Marketing Collateral", sub: "Cards, brochures & packaging", icon: <FaBullhorn />, bg: "#e6f6e9", color: "#2fae63" },
      { label: "Visual Identity Systems", sub: "Social kits, decks & templates", icon: <FaPalette />, bg: "#f0e9fb", color: "#7c3aed" },
    ],
  },
  tech: {
    title: "Crafted With Professional Tools",
    desc: "Industry-standard design tools, delivered in every format you'll ever need",
    chips: [
      { name: "Adobe Illustrator", color: "#ff9a00" },
      { name: "Photoshop", color: "#31a8ff" },
      { name: "Figma", color: "#f24e1e" },
      { name: "After Effects", color: "#9999ff" },
      { name: "InDesign", color: "#ff3366" },
      { name: "Procreate", color: "#000000" },
      { name: "Canva Templates", color: "#00c4cc" },
      { name: "Brand Books", color: "#1a4fd6" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's Brand Designers Meet Your Expectations?",
    checkItems: [
      "Our brand team is 100% dedicated, ready to refresh your identity or build a brand from a blank page.",
      "We offer in-depth discovery sessions to understand your story, values, audience, and competitors.",
      "Our designers bring proven creative processes that have launched brands across 30+ industries.",
      "You get multiple concepts and structured feedback rounds — your brand is refined, never rushed.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing with clear packages — no hidden costs or surprise revisions fees.",
      "Every deliverable arrives in production-ready formats: print, web, social, and source files included.",
      "Our team is known for its quality-oriented approach, sweating every curve, color, and letterform.",
    ],
  },
  expertise: {
    heading: "Our Branding Expertise",
    desc: "We combine strategy and craft to build brands that connect and convert",
    featuredImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    featuredPills: [
      { text: "3 Unique Concepts", dot: "#4ade80" },
      { text: "Full Brand Book", dot: "#60a5fa" },
    ],
    featuredExtra: "Every identity ships with the rules and files to stay consistent everywhere.",
    items: [
      {
        num: "01",
        title: "Memorable Logo Design",
        desc: "Distinctive marks designed to work at every size, from favicon to billboard.",
        icon: <svg {...iconStroke}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
      },
      {
        num: "02",
        title: "Brand Strategy",
        desc: "Positioning and messaging that clarify who you are and why you matter.",
        icon: <svg {...iconStroke}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
      },
      {
        num: "03",
        title: "Complete Visual Systems",
        desc: "Color, typography, and imagery that stay consistent across every channel.",
        icon: <svg {...iconStroke}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
      },
      {
        num: "04",
        title: "Brand Guidelines",
        desc: "A clear brand book so your team and partners never go off-brand.",
        icon: <svg {...iconStroke}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
      },
      {
        num: "05",
        title: "Collateral Design",
        desc: "Business cards, brochures, packaging, and pitch decks that impress.",
        icon: <svg {...iconStroke}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
      },
      {
        num: "06",
        title: "Rebranding & Refresh",
        desc: "Modernise a dated identity while keeping the equity you've built.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How We Build Your Brand",
    desc: "A proven creative process from discovery to launch",
    steps: [
      { step: "01", title: "Discovery", desc: "Deep-dive into your story, market, audience, and competitors" },
      { step: "02", title: "Strategy", desc: "Positioning, personality, and messaging that set you apart" },
      { step: "03", title: "Concepts", desc: "Multiple distinct logo and identity directions to choose from" },
      { step: "04", title: "Refinement", desc: "Structured feedback rounds polishing your chosen direction" },
      { step: "05", title: "Brand Book", desc: "Complete guidelines with colors, type, and usage rules" },
      { step: "06", title: "Rollout", desc: "Collateral, social kits, and everything ready for launch day" },
    ],
  },
  cta: {
    heading: "Ready to Build a Brand That Stands Out?",
    desc: "Let's craft an identity your customers will recognise and remember",
  },
};

export default function BrandingPage() {
  return <ServicePageTemplate config={config} />;
}
