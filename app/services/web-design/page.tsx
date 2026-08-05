"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaWordpress, FaFigma, FaMobileAlt, FaSearch, FaBolt } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "Web Design & Development",
    title: (
      <>
        Websites That <span style={{ color: "#1a4fd6", display: "inline-block" }}>Convert</span> Visitors Into Customers
      </>
    ),
    paragraphStart:
      "Get stunning, responsive websites crafted by expert designers who understand both aesthetics and business goals. From landing pages to full corporate sites, we design and build every pixel with purpose — powered by our",
    animatedWords: ["UI/UX Designers", "WordPress Experts", "Next.js Developers", "Frontend Engineers"],
    checklist: [
      "Custom website design",
      "Responsive & mobile-first",
      "High-converting landing pages",
      "SEO-ready structure",
    ],
    primaryCta: "Start Your Website",
    stats: [
      { num: "300+", label: "Websites Launched" },
      { num: "4.9/5", label: "Client Rating" },
      { num: "8+ yrs", label: "Experience" },
    ],
  },
  statsBand: [
    { num: "300+", label: "Websites Delivered", accent: "#4a7ae8" },
    { num: "98%", label: "Client Retention", accent: "#e25555" },
    { num: "95+", label: "PageSpeed Scores", accent: "#4a7ae8" },
    { num: "24/7", label: "Support Coverage", accent: "#e25555" },
  ],
  details: {
    badge: "Custom Web Design",
    title: "Pixel-Perfect, Conversion-Focused Websites",
    desc: "From simple landing pages to complex corporate platforms, we deliver pixel-perfect designs with seamless functionality. Our team works closely with you to understand your business and create a website that not only looks great but drives measurable results.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    ratingCard: { value: "4.9", label: "Client Rating" },
    floatCard: {
      icons: [
        { node: <FaFigma />, bg: "#1e1e1e", color: "#f24e1e" },
        { node: <FaWordpress />, bg: "#e8f0fb", color: "#21759b" },
      ],
      title: "Design + Development",
      sub: "From Figma to production",
    },
    tiles: [
      { label: "Responsive Design", sub: "Flawless on every device", icon: <FaMobileAlt />, bg: "#e9eefb", color: "#1a4fd6" },
      { label: "Custom UI/UX", sub: "Figma-first design process", icon: <FaFigma />, bg: "#fdeeee", color: "#e22222" },
      { label: "CMS Development", sub: "WordPress, Webflow & headless", icon: <FaWordpress />, bg: "#e3f3fb", color: "#21759b" },
      { label: "SEO-Optimized Structure", sub: "Semantic markup & clean URLs", icon: <FaSearch />, bg: "#e6f6e9", color: "#2fae63" },
      { label: "Speed Optimization", sub: "Sub-second loads, 95+ PageSpeed scores", icon: <FaBolt />, bg: "#fef6e6", color: "#f6a723" },
    ],
  },
  tech: {
    title: "Built With Industry-Leading Tech",
    desc: "The right platform for your goals — custom code or a CMS your team can manage",
    chips: [
      { name: "HTML5", color: "#e34f26" },
      { name: "CSS3", color: "#1572b6" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#000000" },
      { name: "WordPress", color: "#21759b" },
      { name: "Tailwind CSS", color: "#38bdf8" },
      { name: "Figma", color: "#f24e1e" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's Web Designers Meet Your Expectations?",
    checkItems: [
      "Our team of web designers is 100% dedicated, ready to redesign your existing site or build a new one from the ground up.",
      "We offer in-depth consultations to understand your brand, audience, and conversion goals before a single pixel is drawn.",
      "Our experts bring proven design systems and frameworks with a track record of boosting engagement and sales.",
      "We follow an Agile process with wireframes, design reviews, and weekly demos so you're never in the dark.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing with an open and straightforward approach, eliminating hidden costs or surprises.",
      "Our designers are meticulously selected to match your company's culture and values, ensuring they seamlessly integrate.",
      "Our experts are known for their quality-oriented approach, with great attention to detail and precision in every layout.",
    ],
  },
  expertise: {
    heading: "Our Web Design Expertise",
    desc: "We combine visual craft with conversion science to build websites that perform",
    featuredImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    featuredPills: [
      { text: "95+ PageSpeed Score", dot: "#4ade80" },
      { text: "100% Responsive", dot: "#60a5fa" },
    ],
    featuredExtra: "Every layout is tested across browsers and devices before launch.",
    items: [
      {
        num: "01",
        title: "Conversion-Focused Design",
        desc: "Layouts, copy hierarchy, and CTAs engineered to turn visitors into leads and sales.",
        icon: <svg {...iconStroke}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
      },
      {
        num: "02",
        title: "Modern UI/UX",
        desc: "Clean, on-brand interfaces that guide users effortlessly toward action.",
        icon: <svg {...iconStroke}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
      },
      {
        num: "03",
        title: "Mobile-First Approach",
        desc: "Designed for the small screen first, then scaled beautifully up to desktop.",
        icon: <svg {...iconStroke}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
      },
      {
        num: "04",
        title: "SEO Foundation",
        desc: "Semantic structure, fast loads, and clean markup that search engines reward.",
        icon: <svg {...iconStroke}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
      },
      {
        num: "05",
        title: "Scalable Builds",
        desc: "Component-based sites that grow with your content and marketing needs.",
        icon: <svg {...iconStroke}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
      },
      {
        num: "06",
        title: "Care & Maintenance",
        desc: "Updates, backups, and improvements that keep your site fresh and secure.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How We Build Your Website",
    desc: "A streamlined design process from concept to launch",
    steps: [
      { step: "01", title: "Discovery", desc: "We learn your brand, audience, and goals to shape the right strategy" },
      { step: "02", title: "Wireframes", desc: "Page structure and user flows mapped out before any visual design" },
      { step: "03", title: "Design", desc: "Pixel-perfect mockups in Figma, refined with your feedback" },
      { step: "04", title: "Development", desc: "Clean, fast code that matches the design down to the pixel" },
      { step: "05", title: "Launch", desc: "Testing, SEO checks, and a smooth go-live on your domain" },
      { step: "06", title: "Grow", desc: "Ongoing tweaks, A/B tests, and content updates that lift results" },
    ],
  },
  cta: {
    heading: "Ready to Launch a Website That Works?",
    desc: "Let's design a website that tells your story and grows your business",
  },
};

export default function WebDesignPage() {
  return <ServicePageTemplate config={config} />;
}
