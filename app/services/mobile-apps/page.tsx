"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaApple, FaAndroid, FaReact, FaChartLine, FaPencilRuler } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "Mobile App Development",
    title: (
      <>
        Top <span style={{ color: "#1a4fd6", display: "inline-block" }}>3%</span> Mobile App Developers for Hire
      </>
    ),
    paragraphStart:
      "Get Silicon-valley vetted mobile app developers with superior subject matter expertise in designing, developing and deploying future-ready, visually-aesthetic apps. Elevate your mobile experience and build dynamic, highly intuitive applications using",
    animatedWords: ["AI Developer", ".Net Developer", "Junior Developer", "Senior Developer"],
    checklist: [
      "Custom app development",
      "Apple & Android Apps",
      "AR/VR Apps",
      "On-demand solutions",
    ],
    primaryCta: "Hire a Mobile Developer",
    stats: [
      { num: "250+", label: "Apps Delivered" },
      { num: "4.9/5", label: "Client Rating" },
      { num: "8+ yrs", label: "Experience" },
    ],
  },
  statsBand: [
    { num: "25+", label: "Apps Shipped", accent: "#4a7ae8" },
    { num: "98%", label: "Client Retention", accent: "#e25555" },
    { num: "1M+", label: "App Downloads", accent: "#4a7ae8" },
    { num: "24/7", label: "Support Coverage", accent: "#e25555" },
  ],
  details: {
    badge: "Expert Development",
    title: "Native & Cross-Platform Apps",
    desc: "We develop high-performance iOS and Android apps that are intuitive, feature-rich, and optimized for the best user experience. Whether you need a native app or a cross-platform solution, we've got the expertise to deliver exceptional results.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    ratingCard: { value: "4.9", label: "App Store Rating" },
    floatCard: {
      icons: [
        { node: <FaApple />, bg: "#0d1220", color: "#fff" },
        { node: <FaAndroid />, bg: "#e6f6e9", color: "#3ddc84" },
      ],
      title: "iOS & Android",
      sub: "Native + Cross-Platform",
    },
    tiles: [
      { label: "iOS Development", sub: "Swift & Objective-C", icon: <FaApple />, bg: "#f1f2f6", color: "#0d1220" },
      { label: "Android Development", sub: "Kotlin & Java", icon: <FaAndroid />, bg: "#e6f6e9", color: "#2fae63" },
      { label: "Cross-Platform", sub: "React Native & Flutter", icon: <FaReact />, bg: "#e3f3fb", color: "#149eca" },
      { label: "App Store Optimization", sub: "ASO & Growth", icon: <FaChartLine />, bg: "#fdeeee", color: "#e22222" },
      { label: "UI/UX Design & Prototyping", sub: "Figma-first, tested with real users", icon: <FaPencilRuler />, bg: "#e9eefb", color: "#1a4fd6" },
    ],
  },
  tech: {
    title: "Built With Industry-Leading Tech",
    desc: "We pick the right stack for your product — native performance or cross-platform speed",
    chips: [
      { name: "Swift", color: "#f05138" },
      { name: "Kotlin", color: "#7f52ff" },
      { name: "React Native", color: "#61dafb" },
      { name: "Flutter", color: "#02569b" },
      { name: "Firebase", color: "#ffca28" },
      { name: "Node.js", color: "#539e43" },
      { name: "GraphQL", color: "#e10098" },
      { name: "AWS", color: "#ff9900" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's Mobile Developers Meet Your Expectations?",
    checkItems: [
      "Our team of mobile app developers is 100% dedicated, ready to either scale your project or build your software from the ground up.",
      "We offer in-depth consultations to understand your technical objectives, development processes, and team communication preferences.",
      "Our experts bring valuable tech expertise, providing you with frameworks that have a proven track record of success.",
      "We follow an Agile Development Methodology, ensuring collaborative work through sprint planning, stand-up meetings, and weekly demos.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing with an open and straightforward approach, eliminating hidden costs or surprises.",
      "Our developers are meticulously selected to match your company's culture and values, ensuring they seamlessly integrate.",
      "Our experts are known for their quality-oriented approach, with great attention to detail and precision in development.",
    ],
  },
  expertise: {
    heading: "Our Mobile App Expertise",
    desc: "We combine technical excellence with creative design to build mobile apps that users love",
    featuredImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    featuredPills: [
      { text: "<1s Launch Time", dot: "#4ade80" },
      { text: "99.9% Crash-Free", dot: "#60a5fa" },
    ],
    featuredExtra: "Every build is profiled, measured, and tuned before it ships.",
    items: [
      {
        num: "01",
        title: "Performance First",
        desc: "Responsive apps, optimised rendering, and sub-second load times across all devices.",
        icon: <svg {...iconStroke}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
      },
      {
        num: "02",
        title: "Modern UI/UX",
        desc: "Beautiful, intuitive interfaces that follow platform guidelines and delight end users.",
        icon: <svg {...iconStroke}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
      },
      {
        num: "03",
        title: "Scalable Architecture",
        desc: "Built to grow with your business and handle surges in users without friction.",
        icon: <svg {...iconStroke}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
      },
      {
        num: "04",
        title: "Secure & Reliable",
        desc: "Enterprise-grade security, encrypted data, and 99.9% uptime guarantee.",
        icon: <svg {...iconStroke}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
      },
      {
        num: "05",
        title: "Cross-Platform",
        desc: "Reach both iOS and Android users with a single, maintainable codebase.",
        icon: <svg {...iconStroke}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
      },
      {
        num: "06",
        title: "Maintenance & Support",
        desc: "Ongoing maintenance, monitoring, and updates to keep your app running smoothly.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How We Build Your App",
    desc: "A streamlined development process from concept to launch",
    steps: [
      { step: "01", title: "Discovery", desc: "We analyze your requirements and create a detailed project plan" },
      { step: "02", title: "Design", desc: "Our designers create stunning UI/UX prototypes for your approval" },
      { step: "03", title: "Development", desc: "Expert developers build your app using the latest technologies" },
      { step: "04", title: "Testing", desc: "Rigorous testing ensures your app works perfectly on all devices" },
      { step: "05", title: "Launch", desc: "We handle app store submission and ensure a smooth launch" },
      { step: "06", title: "Support", desc: "Ongoing maintenance and updates to keep your app current" },
    ],
  },
  cta: {
    heading: "Ready to Build Your Mobile App?",
    desc: "Let's bring your app idea to life and reach millions of users worldwide",
  },
};

export default function MobileAppsPage() {
  return <ServicePageTemplate config={config} />;
}
