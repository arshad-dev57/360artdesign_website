"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaGlobe, FaServer, FaLock, FaEnvelope, FaCloud } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "Domain & Hosting",
    title: (
      <>
        Rock-Solid <span style={{ color: "#1a4fd6", display: "inline-block" }}>Hosting</span> for Your Online Presence
      </>
    ),
    paragraphStart:
      "Domains, hosting, SSL, and business email — everything your website needs to stay fast and online, managed in one place by our",
    animatedWords: ["Hosting Engineers", "DevOps Specialists", "Server Admins", "Cloud Experts"],
    checklist: [
      "Domain registration & transfer",
      "Managed cloud hosting",
      "Free SSL certificates",
      "Business email setup",
    ],
    primaryCta: "Get Hosted Today",
    stats: [
      { num: "800+", label: "Domains Managed" },
      { num: "99.9%", label: "Uptime SLA" },
      { num: "24/7", label: "Server Support" },
    ],
  },
  statsBand: [
    { num: "800+", label: "Domains Managed", accent: "#4a7ae8" },
    { num: "99.9%", label: "Uptime SLA", accent: "#e25555" },
    { num: "<300ms", label: "Avg. Server Response", accent: "#4a7ae8" },
    { num: "24/7", label: "Expert Support", accent: "#e25555" },
  ],
  details: {
    badge: "Managed Hosting",
    title: "Hosting That's Fast, Secure & Fully Managed",
    desc: "Stop juggling registrars, hosts, and SSL renewals. We register your domain, host your site on fast SSD servers with a global CDN, keep certificates renewed, and set up professional email — all under one roof with real human support.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ratingCard: { value: "4.9", label: "Support Rating" },
    floatCard: {
      icons: [
        { node: <FaServer />, bg: "#e9eefb", color: "#1a4fd6" },
        { node: <FaLock />, bg: "#e6f6e9", color: "#2fae63" },
      ],
      title: "Hosting + SSL",
      sub: "Managed & auto-renewed",
    },
    tiles: [
      { label: "Domain Registration", sub: "All TLDs, privacy included", icon: <FaGlobe />, bg: "#e9eefb", color: "#1a4fd6" },
      { label: "Managed Hosting", sub: "SSD servers with global CDN", icon: <FaServer />, bg: "#fef6e6", color: "#f6a723" },
      { label: "SSL Certificates", sub: "Installed and auto-renewed", icon: <FaLock />, bg: "#e6f6e9", color: "#2fae63" },
      { label: "Business Email", sub: "Google Workspace & Microsoft 365", icon: <FaEnvelope />, bg: "#fdeeee", color: "#e22222" },
      { label: "Cloud Infrastructure", sub: "AWS & DigitalOcean deployments", icon: <FaCloud />, bg: "#f0e9fb", color: "#7c3aed" },
    ],
  },
  tech: {
    title: "Powered by Trusted Platforms",
    desc: "We host on infrastructure the world's biggest sites rely on",
    chips: [
      { name: "AWS", color: "#ff9900" },
      { name: "DigitalOcean", color: "#0080ff" },
      { name: "Cloudflare", color: "#f38020" },
      { name: "cPanel", color: "#ff6c2c" },
      { name: "Vercel", color: "#000000" },
      { name: "Google Workspace", color: "#4285f4" },
      { name: "Microsoft 365", color: "#d83b01" },
      { name: "Let's Encrypt", color: "#003a70" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's Hosting Team Meets Your Expectations?",
    checkItems: [
      "Our hosting team is 100% dedicated, managing your servers as carefully as we manage our own infrastructure.",
      "We start with a needs assessment — traffic, storage, and growth plans — to size the right hosting for you.",
      "Our engineers bring deep experience with AWS, DigitalOcean, and CDN configuration for maximum speed.",
      "Migrations are handled end-to-end with zero downtime — DNS, files, databases, and email included.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing with flat plans — no renewal traps or surprise overage fees.",
      "Server updates and security patches are applied proactively, before vulnerabilities become problems.",
      "Our team is known for its quality-oriented approach, with monitoring on every server we manage.",
    ],
  },
  expertise: {
    heading: "Our Hosting Expertise",
    desc: "We combine fast infrastructure with proactive management to keep you online",
    featuredImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    featuredPills: [
      { text: "99.9% Uptime SLA", dot: "#4ade80" },
      { text: "Global CDN", dot: "#60a5fa" },
    ],
    featuredExtra: "Your visitors get served from the datacenter closest to them.",
    items: [
      {
        num: "01",
        title: "Blazing-Fast Servers",
        desc: "NVMe SSD storage, HTTP/2, and edge caching for sub-second page loads.",
        icon: <svg {...iconStroke}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
      },
      {
        num: "02",
        title: "Domain Management",
        desc: "Registration, transfers, DNS, and renewals handled without the headaches.",
        icon: <svg {...iconStroke}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
      },
      {
        num: "03",
        title: "Scalable Infrastructure",
        desc: "Resources that grow with your traffic — no migration needed later.",
        icon: <svg {...iconStroke}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
      },
      {
        num: "04",
        title: "Security & SSL",
        desc: "Firewalls, DDoS protection, and auto-renewed SSL on every site.",
        icon: <svg {...iconStroke}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
      },
      {
        num: "05",
        title: "Automated Backups",
        desc: "Daily snapshots stored off-site with fast, one-click restores.",
        icon: <svg {...iconStroke}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
      },
      {
        num: "06",
        title: "Migration & Support",
        desc: "Zero-downtime migrations and 24/7 support from real engineers.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How We Get You Online",
    desc: "A simple path from domain search to a fully hosted website",
    steps: [
      { step: "01", title: "Consultation", desc: "We assess your traffic, storage, and performance needs" },
      { step: "02", title: "Domain Setup", desc: "Registration or transfer with DNS configured correctly" },
      { step: "03", title: "Server Provisioning", desc: "Hosting environment tuned for your site's platform" },
      { step: "04", title: "Migration", desc: "Files, databases, and email moved with zero downtime" },
      { step: "05", title: "Security Setup", desc: "SSL, firewall, and backup schedules configured" },
      { step: "06", title: "Ongoing Care", desc: "Monitoring, patching, and support around the clock" },
    ],
  },
  cta: {
    heading: "Ready for Hosting You Can Forget About?",
    desc: "Let us handle the servers, domains, and SSL — you focus on your business",
  },
};

export default function DomainHostingPage() {
  return <ServicePageTemplate config={config} />;
}
