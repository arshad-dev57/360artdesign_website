"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaTools, FaShieldAlt, FaTachometerAlt, FaSyncAlt, FaHeadset } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "Website Maintenance",
    title: (
      <>
        Keep Your Website <span style={{ color: "#1a4fd6", display: "inline-block" }}>Fast, Secure</span> & Always Online
      </>
    ),
    paragraphStart:
      "Your website is your hardest-working employee — we make sure it never calls in sick. Updates, backups, security patches, and performance tuning handled proactively by our",
    animatedWords: ["Support Engineers", "Security Specialists", "Performance Experts", "WordPress Pros"],
    checklist: [
      "Regular updates & backups",
      "Security monitoring & patching",
      "Speed & uptime optimization",
      "Content updates on demand",
    ],
    primaryCta: "Get a Care Plan",
    stats: [
      { num: "500+", label: "Sites Maintained" },
      { num: "4.9/5", label: "Client Rating" },
      { num: "<2 hrs", label: "Avg. Response" },
    ],
  },
  statsBand: [
    { num: "99.9%", label: "Uptime Guaranteed", accent: "#4a7ae8" },
    { num: "500+", label: "Sites Under Care", accent: "#e25555" },
    { num: "<2 hrs", label: "Response Time", accent: "#4a7ae8" },
    { num: "24/7", label: "Monitoring", accent: "#e25555" },
  ],
  details: {
    badge: "Proactive Care",
    title: "Maintenance That Prevents Problems",
    desc: "We don't wait for things to break. Our maintenance plans include scheduled updates, daily backups, malware scanning, uptime monitoring, and monthly performance reports — so your site stays fast, secure, and search-engine friendly year-round.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    ratingCard: { value: "4.9", label: "Support Rating" },
    floatCard: {
      icons: [
        { node: <FaShieldAlt />, bg: "#e6f6e9", color: "#2fae63" },
        { node: <FaTachometerAlt />, bg: "#e9eefb", color: "#1a4fd6" },
      ],
      title: "Security + Speed",
      sub: "Monitored around the clock",
    },
    tiles: [
      { label: "Core & Plugin Updates", sub: "Tested before they touch production", icon: <FaSyncAlt />, bg: "#e9eefb", color: "#1a4fd6" },
      { label: "Security Hardening", sub: "Firewalls, scans & malware removal", icon: <FaShieldAlt />, bg: "#e6f6e9", color: "#2fae63" },
      { label: "Performance Tuning", sub: "Caching, images & Core Web Vitals", icon: <FaTachometerAlt />, bg: "#fef6e6", color: "#f6a723" },
      { label: "Bug Fixes & Tweaks", sub: "Broken layouts fixed fast", icon: <FaTools />, bg: "#fdeeee", color: "#e22222" },
      { label: "Priority Support", sub: "Real humans, under 2-hour response", icon: <FaHeadset />, bg: "#f0e9fb", color: "#7c3aed" },
    ],
  },
  tech: {
    title: "Tools That Keep You Covered",
    desc: "Enterprise-grade monitoring and backup tooling on every care plan",
    chips: [
      { name: "WordPress", color: "#21759b" },
      { name: "Cloudflare", color: "#f38020" },
      { name: "UptimeRobot", color: "#3bd671" },
      { name: "Sucuri", color: "#3d8332" },
      { name: "GTmetrix", color: "#2f7abf" },
      { name: "Google Analytics", color: "#e37400" },
      { name: "AWS Backups", color: "#ff9900" },
      { name: "GitHub", color: "#181717" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's Support Team Meets Your Expectations?",
    checkItems: [
      "Our support team is 100% dedicated, treating your website with the same care as if it were our own.",
      "We start with a full site audit to find security gaps, speed issues, and outdated software before they cause damage.",
      "Our experts bring years of hands-on experience recovering, hardening, and optimising hundreds of websites.",
      "We work on a predictable monthly schedule — updates, backups, and reports delivered like clockwork.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing with flat monthly plans — no hidden costs or surprise invoices.",
      "Every change is tested on a staging copy first, so your live site never becomes the experiment.",
      "Our team is known for its quality-oriented approach, documenting every fix and update we make.",
    ],
  },
  expertise: {
    heading: "Our Maintenance Expertise",
    desc: "We combine monitoring, security, and performance work to keep your site at its best",
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    featuredPills: [
      { text: "99.9% Uptime", dot: "#4ade80" },
      { text: "Daily Backups", dot: "#60a5fa" },
    ],
    featuredExtra: "If your site ever goes down, we usually know before you do.",
    items: [
      {
        num: "01",
        title: "24/7 Uptime Monitoring",
        desc: "Instant alerts and rapid response the moment anything goes wrong.",
        icon: <svg {...iconStroke}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
      },
      {
        num: "02",
        title: "Security & Malware Protection",
        desc: "Firewalls, scans, and hardening that keep hackers and malware out.",
        icon: <svg {...iconStroke}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
      },
      {
        num: "03",
        title: "Speed Optimization",
        desc: "Caching, image compression, and code cleanup for faster load times.",
        icon: <svg {...iconStroke}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
      },
      {
        num: "04",
        title: "Reliable Backups",
        desc: "Daily off-site backups with one-click restore if anything ever breaks.",
        icon: <svg {...iconStroke}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
      },
      {
        num: "05",
        title: "Content Updates",
        desc: "Text, images, and page changes handled for you — just send a request.",
        icon: <svg {...iconStroke}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
      },
      {
        num: "06",
        title: "Monthly Reporting",
        desc: "Clear reports on uptime, traffic, speed, and everything we did for you.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How Our Care Plans Work",
    desc: "A proactive maintenance routine that runs like clockwork",
    steps: [
      { step: "01", title: "Site Audit", desc: "Full health check of security, speed, and outdated software" },
      { step: "02", title: "Onboarding", desc: "Backups configured, monitoring connected, baseline recorded" },
      { step: "03", title: "Updates", desc: "Scheduled core, theme, and plugin updates tested on staging" },
      { step: "04", title: "Monitoring", desc: "24/7 uptime and security monitoring with instant alerts" },
      { step: "05", title: "Optimization", desc: "Monthly speed and SEO tune-ups to keep scores high" },
      { step: "06", title: "Reporting", desc: "A clear monthly report of everything done and what's next" },
    ],
  },
  cta: {
    heading: "Ready to Stop Worrying About Your Website?",
    desc: "Let us handle the maintenance so you can focus on running your business",
  },
};

export default function WebsiteMaintenancePage() {
  return <ServicePageTemplate config={config} />;
}
