"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaLock } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "Web App Development",
    title: (
      <>
        Powerful <span style={{ color: "#1a4fd6", display: "inline-block" }}>Web Apps</span> That Run Your Business
      </>
    ),
    paragraphStart:
      "Build custom web applications that automate workflows, connect your data, and scale with your business. From SaaS products to internal dashboards, we engineer reliable software with our",
    animatedWords: ["Full-Stack Engineers", "React Developers", "Node.js Experts", "SaaS Builders"],
    checklist: [
      "Custom SaaS platforms",
      "Dashboards & admin panels",
      "API development & integration",
      "Real-time applications",
    ],
    primaryCta: "Build Your Web App",
    stats: [
      { num: "120+", label: "Apps Delivered" },
      { num: "4.9/5", label: "Client Rating" },
      { num: "8+ yrs", label: "Experience" },
    ],
  },
  statsBand: [
    { num: "120+", label: "Web Apps Shipped", accent: "#4a7ae8" },
    { num: "99.9%", label: "Uptime Achieved", accent: "#e25555" },
    { num: "2M+", label: "End Users Served", accent: "#4a7ae8" },
    { num: "24/7", label: "Monitoring", accent: "#e25555" },
  ],
  details: {
    badge: "Custom Software",
    title: "Web Applications Engineered to Scale",
    desc: "We design and develop full-stack web applications — SaaS products, customer portals, booking systems, and internal tools. Clean architecture, thorough testing, and cloud deployment mean your app stays fast and reliable as usage grows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ratingCard: { value: "4.9", label: "Client Rating" },
    floatCard: {
      icons: [
        { node: <FaReact />, bg: "#e3f3fb", color: "#149eca" },
        { node: <FaNodeJs />, bg: "#e6f6e9", color: "#539e43" },
      ],
      title: "Full-Stack Development",
      sub: "Frontend + Backend + Cloud",
    },
    tiles: [
      { label: "Frontend Development", sub: "React, Next.js & TypeScript", icon: <FaReact />, bg: "#e3f3fb", color: "#149eca" },
      { label: "Backend & APIs", sub: "Node.js, REST & GraphQL", icon: <FaNodeJs />, bg: "#e6f6e9", color: "#539e43" },
      { label: "Database Design", sub: "PostgreSQL, MongoDB & Redis", icon: <FaDatabase />, bg: "#e9eefb", color: "#1a4fd6" },
      { label: "Cloud Deployment", sub: "AWS, Vercel & Docker", icon: <FaCloud />, bg: "#fef6e6", color: "#f6a723" },
      { label: "Security & Authentication", sub: "SSO, roles & data encryption", icon: <FaLock />, bg: "#fdeeee", color: "#e22222" },
    ],
  },
  tech: {
    title: "Built With Industry-Leading Tech",
    desc: "A modern stack chosen for reliability, speed, and long-term maintainability",
    chips: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Node.js", color: "#539e43" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47a248" },
      { name: "Docker", color: "#2496ed" },
      { name: "AWS", color: "#ff9900" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's Web App Engineers Meet Your Expectations?",
    checkItems: [
      "Our team of full-stack engineers is 100% dedicated, ready to scale your product or build your software from the ground up.",
      "We offer in-depth consultations to understand your technical objectives, workflows, and integration requirements.",
      "Our experts bring valuable tech expertise, providing you with architectures that have a proven track record in production.",
      "We follow an Agile Development Methodology, ensuring collaborative work through sprint planning, stand-ups, and weekly demos.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing with an open and straightforward approach, eliminating hidden costs or surprises.",
      "Our engineers are meticulously selected to match your company's culture and values, ensuring they seamlessly integrate.",
      "Our experts are known for their quality-oriented approach, with thorough code review and automated testing on every release.",
    ],
  },
  expertise: {
    heading: "Our Web App Expertise",
    desc: "We combine solid engineering with product thinking to ship software that lasts",
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    featuredPills: [
      { text: "99.9% Uptime", dot: "#4ade80" },
      { text: "CI/CD Pipelines", dot: "#60a5fa" },
    ],
    featuredExtra: "Every release is tested, reviewed, and deployed automatically.",
    items: [
      {
        num: "01",
        title: "Scalable Architecture",
        desc: "Systems designed to handle growth — from your first user to your millionth.",
        icon: <svg {...iconStroke}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
      },
      {
        num: "02",
        title: "Modern UI/UX",
        desc: "Fast, intuitive interfaces your team and customers actually enjoy using.",
        icon: <svg {...iconStroke}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
      },
      {
        num: "03",
        title: "API-First Development",
        desc: "Clean REST and GraphQL APIs that connect your app to anything.",
        icon: <svg {...iconStroke}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
      },
      {
        num: "04",
        title: "Secure & Compliant",
        desc: "Authentication, encryption, and role-based access built in from day one.",
        icon: <svg {...iconStroke}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
      },
      {
        num: "05",
        title: "Real-Time Features",
        desc: "Live dashboards, chat, and notifications powered by WebSockets.",
        icon: <svg {...iconStroke}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
      },
      {
        num: "06",
        title: "DevOps & Support",
        desc: "Automated deployments, monitoring, and maintenance that keep you online.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How We Build Your Web App",
    desc: "A streamlined engineering process from concept to production",
    steps: [
      { step: "01", title: "Discovery", desc: "We map your workflows and define the product requirements" },
      { step: "02", title: "Architecture", desc: "Database schema, API design, and tech stack decisions" },
      { step: "03", title: "Design", desc: "Wireframes and UI design for every screen and state" },
      { step: "04", title: "Development", desc: "Sprint-based builds with weekly demos of working software" },
      { step: "05", title: "Testing & Launch", desc: "Automated tests, security review, and cloud deployment" },
      { step: "06", title: "Iterate", desc: "Monitoring, new features, and scaling as your usage grows" },
    ],
  },
  cta: {
    heading: "Ready to Build Your Web App?",
    desc: "Let's turn your idea into reliable software your business can run on",
  },
};

export default function WebAppsPage() {
  return <ServicePageTemplate config={config} />;
}
