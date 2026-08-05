"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaSearch, FaChartLine, FaLink, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "SEO & Digital Marketing",
    title: (
      <>
        Rank Higher. Get Found. <span style={{ color: "#1a4fd6", display: "inline-block" }}>Grow Faster.</span>
      </>
    ),
    paragraphStart:
      "Turn Google into your best salesperson. We combine technical SEO, content, and authority building to put your business in front of customers who are already searching — executed by our",
    animatedWords: ["SEO Strategists", "Content Marketers", "Link Builders", "Technical SEOs"],
    checklist: [
      "Keyword research & strategy",
      "On-page & technical SEO",
      "Content marketing",
      "Local SEO & Google Maps",
    ],
    primaryCta: "Get a Free SEO Audit",
    stats: [
      { num: "180+", label: "Sites Ranked" },
      { num: "4.9/5", label: "Client Rating" },
      { num: "8+ yrs", label: "Experience" },
    ],
  },
  statsBand: [
    { num: "300%", label: "Avg. Traffic Growth", accent: "#4a7ae8" },
    { num: "180+", label: "Sites Ranked Page 1", accent: "#e25555" },
    { num: "5K+", label: "Keywords Ranking", accent: "#4a7ae8" },
    { num: "97%", label: "Client Retention", accent: "#e25555" },
  ],
  details: {
    badge: "Search Engine Optimization",
    title: "SEO That Compounds Month After Month",
    desc: "Paid ads stop the moment you stop paying — SEO keeps working. We audit your site, fix the technical issues holding you back, build content that answers what your customers search for, and earn the links that push you up the rankings.",
    image: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=800&q=80",
    ratingCard: { value: "4.9", label: "Client Rating" },
    floatCard: {
      icons: [
        { node: <FaSearch />, bg: "#e9eefb", color: "#1a4fd6" },
        { node: <FaChartLine />, bg: "#e6f6e9", color: "#2fae63" },
      ],
      title: "Rankings + Revenue",
      sub: "Tracked and reported monthly",
    },
    tiles: [
      { label: "Technical SEO", sub: "Speed, crawlability & Core Web Vitals", icon: <FaSearch />, bg: "#e9eefb", color: "#1a4fd6" },
      { label: "Content Strategy", sub: "Pages that answer real searches", icon: <FaFileAlt />, bg: "#fef6e6", color: "#f6a723" },
      { label: "Link Building", sub: "Authority from relevant sites", icon: <FaLink />, bg: "#f0e9fb", color: "#7c3aed" },
      { label: "Local SEO", sub: "Google Business & map rankings", icon: <FaMapMarkerAlt />, bg: "#fdeeee", color: "#e22222" },
      { label: "Analytics & Reporting", sub: "Rankings, traffic & conversions monthly", icon: <FaChartLine />, bg: "#e6f6e9", color: "#2fae63" },
    ],
  },
  tech: {
    title: "Powered by Professional SEO Tools",
    desc: "Data-driven decisions backed by the industry's best research platforms",
    chips: [
      { name: "Google Analytics", color: "#e37400" },
      { name: "Search Console", color: "#458cf5" },
      { name: "Ahrefs", color: "#ff8800" },
      { name: "SEMrush", color: "#ff642d" },
      { name: "Screaming Frog", color: "#7ab648" },
      { name: "Moz", color: "#00a3e0" },
      { name: "Surfer SEO", color: "#ff5b49" },
      { name: "PageSpeed Insights", color: "#4285f4" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's SEO Experts Meet Your Expectations?",
    checkItems: [
      "Our SEO team is 100% dedicated, treating your rankings and traffic like our own KPIs.",
      "We start with in-depth audits and keyword research to find the wins your competitors are missing.",
      "Our experts bring proven playbooks that have taken sites from invisible to page one.",
      "We work in monthly sprints with clear deliverables — content, fixes, and links you can verify.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing and our methods — 100% white-hat, no shortcuts that risk penalties.",
      "Every recommendation is backed by data from Ahrefs, SEMrush, and Search Console — not guesswork.",
      "Our team is known for its quality-oriented approach, reporting real business results, not vanity metrics.",
    ],
  },
  expertise: {
    heading: "Our SEO Expertise",
    desc: "We combine technical depth and content strategy to win rankings that last",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    featuredPills: [
      { text: "300% Avg. Traffic Growth", dot: "#4ade80" },
      { text: "White-Hat Only", dot: "#60a5fa" },
    ],
    featuredExtra: "Rankings built on quality compound for years, not weeks.",
    items: [
      {
        num: "01",
        title: "Organic Traffic Growth",
        desc: "Sustainable ranking gains that bring qualified visitors month after month.",
        icon: <svg {...iconStroke}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
      },
      {
        num: "02",
        title: "Technical SEO",
        desc: "Site speed, indexing, and structure issues found and fixed at the root.",
        icon: <svg {...iconStroke}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
      },
      {
        num: "03",
        title: "Content That Ranks",
        desc: "Pages and articles engineered around what your customers actually search.",
        icon: <svg {...iconStroke}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
      },
      {
        num: "04",
        title: "Authority Building",
        desc: "White-hat link building from relevant, trusted sites in your industry.",
        icon: <svg {...iconStroke}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
      },
      {
        num: "05",
        title: "Local SEO",
        desc: "Google Business optimisation that puts you on the map — literally.",
        icon: <svg {...iconStroke}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
      },
      {
        num: "06",
        title: "Transparent Reporting",
        desc: "Monthly reports tying rankings and traffic to leads and revenue.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How We Grow Your Rankings",
    desc: "A data-driven SEO process that compounds over time",
    steps: [
      { step: "01", title: "SEO Audit", desc: "Full technical, content, and backlink analysis of your site" },
      { step: "02", title: "Keyword Strategy", desc: "The searches worth winning, mapped to pages and intent" },
      { step: "03", title: "Technical Fixes", desc: "Speed, indexing, and structure issues resolved first" },
      { step: "04", title: "Content Production", desc: "Optimised pages and articles published on schedule" },
      { step: "05", title: "Link Building", desc: "Steady authority growth from relevant, quality sites" },
      { step: "06", title: "Report & Refine", desc: "Monthly reporting and strategy updates based on data" },
    ],
  },
  cta: {
    heading: "Ready to Dominate Search Results?",
    desc: "Let's get your business in front of customers who are already looking for you",
  },
};

export default function SeoPage() {
  return <ServicePageTemplate config={config} />;
}
