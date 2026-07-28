"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";
import React from "react";
import { Header, FooterSection } from "../services/page";
import { useRouter } from "next/navigation";

// ====== SVG ILLUSTRATIONS ======
const LaptopSVG = () => (
  <svg width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="110" height="72" rx="4" fill="#e8e8e8" stroke="#bbb" strokeWidth="2" />
    <rect x="15" y="13" width="100" height="62" rx="2" fill="#fff" />
    <rect x="15" y="13" width="100" height="10" rx="2" fill="#ddd" />
    <circle cx="22" cy="18" r="2.5" fill="#e22222" />
    <circle cx="30" cy="18" r="2.5" fill="#f0a500" />
    <circle cx="38" cy="18" r="2.5" fill="#4caf50" />
    <rect x="20" y="28" width="60" height="5" rx="2" fill="#e0e0e0" />
    <rect x="20" y="37" width="90" height="3" rx="1.5" fill="#eeeeee" />
    <rect x="20" y="43" width="80" height="3" rx="1.5" fill="#eeeeee" />
    <rect x="20" y="49" width="70" height="3" rx="1.5" fill="#eeeeee" />
    <rect x="15" y="23" width="18" height="52" rx="0" fill="#f5f5f5" />
    <rect x="18" y="28" width="12" height="3" rx="1" fill="#ddd" />
    <rect x="18" y="34" width="12" height="3" rx="1" fill="#ddd" />
    <rect x="18" y="40" width="12" height="3" rx="1" fill="#ddd" />
    <rect x="18" y="46" width="12" height="3" rx="1" fill="#8b0000" opacity="0.5" />
    <path d="M5 82 L125 82 L118 92 L12 92 Z" fill="#d0d0d0" />
    <rect x="40" y="80" width="50" height="4" rx="1" fill="#bbb" />
  </svg>
);

const AppIconsSVG = () => (
  <svg width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="36" height="36" rx="8" fill="url(#ig)" />
    <defs>
      <linearGradient id="ig" x1="5" y1="5" x2="41" y2="41">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="50%" stopColor="#e6683c" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="14" y="14" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2" fill="none" />
    <circle cx="23" cy="23" r="5" stroke="#fff" strokeWidth="1.8" fill="none" />
    <circle cx="30.5" cy="15.5" r="1.5" fill="#fff" />
    <rect x="47" y="5" width="36" height="36" rx="8" fill="#1877f2" />
    <text x="65" y="28" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="900" fontFamily="Arial">f</text>
    <rect x="89" y="5" width="36" height="36" rx="8" fill="#8b0000" />
    <text x="107" y="28" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Arial">A</text>
    <rect x="5" y="47" width="36" height="36" rx="8" fill="#e8e8e8" />
    <path d="M18 58 L20 56 Q23 53 26 56 L28 58" stroke="#555" strokeWidth="1.5" fill="none" />
    <path d="M16 58 L16 74 L30 74 L30 58 Z" fill="#bbb" />
    <text x="23" y="70" textAnchor="middle" fill="#555" fontSize="9" fontWeight="700">S</text>
    <rect x="47" y="47" width="36" height="36" rx="8" fill="#96bf48" />
    <path d="M60 58 Q65 52 70 58 L72 74 L58 74 Z" fill="#fff" opacity="0.9" />
    <text x="65" y="70" textAnchor="middle" fill="#5a7a1a" fontSize="10" fontWeight="900">S</text>
    <rect x="89" y="47" width="36" height="36" rx="8" fill="#1a1a2e" />
    <text x="107" y="66" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Arial">ELEV</text>
    <text x="107" y="75" textAnchor="middle" fill="#e22222" fontSize="8" fontWeight="700" fontFamily="Arial">AR</text>
  </svg>
);

const MobileAnalyticsSVG = () => (
  <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="10" width="52" height="88" rx="8" fill="#e0e0e0" stroke="#bbb" strokeWidth="1.5" />
    <rect x="34" y="16" width="44" height="76" rx="4" fill="#f5f5f5" />
    <rect x="38" y="50" width="8" height="20" rx="2" fill="#ccc" />
    <rect x="50" y="40" width="8" height="30" rx="2" fill="#8b0000" opacity="0.5" />
    <rect x="62" y="45" width="8" height="25" rx="2" fill="#ccc" />
    <rect x="8" y="25" width="50" height="82" rx="8" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
    <rect x="12" y="31" width="42" height="70" rx="4" fill="#fafafa" />
    <rect x="24" y="28" width="16" height="4" rx="2" fill="#ddd" />
    <rect x="16" y="36" width="34" height="4" rx="2" fill="#e22222" opacity="0.7" />
    <rect x="16" y="44" width="30" height="3" rx="1.5" fill="#eee" />
    <rect x="16" y="50" width="26" height="3" rx="1.5" fill="#eee" />
    <rect x="16" y="62" width="7" height="18" rx="2" fill="#ddd" />
    <rect x="26" y="55" width="7" height="25" rx="2" fill="#8b0000" opacity="0.6" />
    <rect x="36" y="60" width="7" height="20" rx="2" fill="#ddd" />
    <rect x="46" y="58" width="7" height="22" rx="2" fill="#e22222" opacity="0.5" />
    <rect x="25" y="96" width="16" height="3" rx="1.5" fill="#ccc" />
  </svg>
);

const MobileStoreSVG = () => (
  <svg width="90" height="120" viewBox="0 0 90 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="5" width="70" height="110" rx="12" fill="#1a1a1a" />
    <rect x="14" y="10" width="62" height="100" rx="8" fill="#fff" />
    <rect x="30" y="7" width="30" height="6" rx="3" fill="#333" />
    <rect x="18" y="14" width="20" height="3" rx="1" fill="#eee" />
    <rect x="52" y="14" width="20" height="3" rx="1" fill="#eee" />
    <rect x="14" y="20" width="62" height="14" fill="#8b0000" />
    <rect x="18" y="24" width="30" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
    <rect x="18" y="40" width="54" height="16" rx="3" fill="#f5f5f5" />
    <rect x="21" y="44" width="25" height="3" rx="1" fill="#ddd" />
    <rect x="21" y="49" width="15" height="3" rx="1" fill="#eee" />
    <rect x="60" y="42" width="10" height="10" rx="2" fill="#8b0000" opacity="0.6" />
    <rect x="18" y="62" width="54" height="12" rx="3" fill="#f5f5f5" />
    <rect x="21" y="65" width="20" height="3" rx="1" fill="#ddd" />
    <rect x="21" y="70" width="14" height="2" rx="1" fill="#eee" />
    <rect x="18" y="78" width="54" height="12" rx="3" fill="#f5f5f5" />
    <rect x="21" y="81" width="20" height="3" rx="1" fill="#ddd" />
    <rect x="21" y="86" width="14" height="2" rx="1" fill="#eee" />
    <rect x="18" y="96" width="54" height="10" rx="4" fill="#8b0000" />
    <rect x="30" y="99" width="30" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
    <rect x="32" y="108" width="26" height="3" rx="1.5" fill="#555" />
  </svg>
);

function useScrollReveal<T extends HTMLElement>(threshold = 0.12): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null); const [visible, setVisible] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); o.disconnect(); } }, { threshold });
    if (ref.current) o.observe(ref.current); return () => o.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ====== SERVICES GRID ======
const servicesData = [
  { title: "Store Themes & Customization", desc: "Already have a theme picked out for your new store? Or need some helping selecting the best theme for your product catalog? We are here to help you pick and customize the perfect theme for your online presence.", Icon: LaptopSVG },
  { title: "App Installation & Configuration", desc: "Add features and functionality to your store with the addition of Shopify apps. With thousands of apps to choose from, we will help upload and configure the best apps to your Shopify store.", Icon: AppIconsSVG },
  { title: "Store Optimization", desc: "Ensure your theme and store are ready for online with our Store Optimization services. Our team will review the SEO and keywords on your new site to make sure that your website stands out online.", Icon: MobileAnalyticsSVG },
  { title: "Store Configuration", desc: "Orders, Shipping and Payments just got easier with our Shopify Store Configuration. We take care of setting up your store settings so you don't have to. Working closely with you, we will set up your shipping, payments, and more.", Icon: MobileStoreSVG },
];

function ServiceCard({ title, desc, Icon, delay, onClick }: { title: string; desc: string; Icon: () => React.ReactElement; delay: number; onClick?: () => void }) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>(0.08);
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}
      style={{ padding: "36px 32px", borderLeft: `3px solid ${hovered ? "#e22222" : "rgba(139,0,0,0.2)"}`, background: hovered ? "#fafafa" : "#fff", transition: "all 0.25s ease", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)", transitionDuration: "0.6s", transitionDelay: `${delay}s`, cursor: onClick ? "pointer" : "default" }}>
      <div style={{ marginBottom: 20, transition: "transform 0.35s ease", transform: hovered ? "scale(1.06) translateY(-3px)" : "scale(1) translateY(0)", display: "inline-block" }}>
        <Icon />
      </div>
      <span style={{ fontSize: 20, fontWeight: 900, color: hovered ? "#e22222" : "#111827", textTransform: "uppercase", letterSpacing: 1.5, display: "block", marginBottom: 14, transition: "color 0.2s" }}>
        {title}
      </span>
      <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>{desc}</p>
    </div>
  );
}

function ServicesGrid() {
  const router = useRouter();

  const handleServiceClick = () => {
    router.push('/hire-us');
  };

  return (
    <section style={{ background: "#fff", padding: "90px 40px 100px", fontFamily: "'Nunito',sans-serif", borderTop: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{ width: 60, height: 2, background: "linear-gradient(to right, transparent, #e22222)" }} />
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3.5px", color: "#e22222", textTransform: "uppercase" }}>WHAT WE OFFER</span>
        </div>
        <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "#111827", lineHeight: 1.2, margin: "0 0 8px" }}>
          Our <span style={{ color: "#e22222" }}>Shopify Services</span>
        </h2>
        <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 580, lineHeight: 1.75, margin: "0 0 16px" }}>Full-stack Shopify solutions tailored to get your store live and selling</p>
        <div style={{ width: 60, height: 3, background: "#e22222", marginBottom: 56, borderRadius: 2 }} />
        <style>{`.svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;background:rgba(0,0,0,0.06);}@media(max-width:640px){.svc-grid{grid-template-columns:1fr;}}`}</style>
        <div className="svc-grid">
          {servicesData.map((s, i) => <ServiceCard key={i} {...s} delay={i * 0.1} onClick={handleServiceClick} />)}
        </div>
      </div>
    </section>
  );
}

// ==================== SCROLL TO TOP ====================
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  if (!isVisible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ position: "fixed", bottom: 30, right: 30, width: 50, height: 50, borderRadius: "50%", background: "#e22222", color: "#fff", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(226,34,34,0.4)", zIndex: 1000, transition: "all 0.3s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <FaArrowUp />
    </button>
  );
}

// ==================== BLOG HERO ====================
function BlogHero() {
  return (
    <>
      <style>{`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .blog-hero-btn-primary:hover { background: #b71c1c !important; }
        .blog-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .blog-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .blog-hero-section { padding-top: 0 !important; }
          .blog-hero-container { padding: 10px 20px 100px !important; text-align: center !important; }
          .blog-hero-container h1 { font-size: 32px !important; }
          .blog-hero-container p { font-size: 15px !important; padding: 0 15px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .blog-hero-container { padding: 20px 30px 100px !important; text-align: center !important; }
          .blog-hero-container h1 { font-size: 42px !important; }
        }
      `}</style>
      <section
        className="blog-hero-section"
        style={{ paddingTop: 70, minHeight: "60vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", fontFamily: "'Nunito', sans-serif", background: "#8b0000" }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center right", opacity: 0.25, zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)", zIndex: 1 }} />
        <div className="blog-hero-container" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", textAlign: "center", position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>Blog</span>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 900, color: "#fff", lineHeight: 1.12, marginBottom: 22, letterSpacing: -0.5 }}>
            Why Every Business Needs a Strong{" "}
            <span style={{ color: "rgba(255,255,255,0.75)" }}>Online Presence in 2026</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
            By 360 Art Design
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 280, lineHeight: 0, zIndex: 2, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove2 15s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z" fill="rgba(255,255,255,0.12)" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove1 12s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z" fill="rgba(255,255,255,0.30)" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove3 10s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z" fill="#f3f4f8" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

// ==================== BLOG CONTENT (REDESIGNED) ====================
function BlogContent() {
  const router = useRouter();
  const [currentPost, setCurrentPost] = useState(0);

  const categoryToSectionMap: Record<string, string> = {
    "Digital Marketing": "seo",
    "Web Development": "web-design",
    "SEO Tips": "seo",
    "Social Media": "seo",
    "Business Tips": "web-design",
  };

  const handleCategoryClick = (category: string) => {
    const sectionId = categoryToSectionMap[category];
    if (sectionId) {
      sessionStorage.setItem('scrollToService', sectionId);
      router.push('/services');
    }
  };

  const handlePostClick = (index: number) => {
    setCurrentPost(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const blogServices = [
    { icon: "🌐", title: "Website Development", desc: "Modern, responsive websites designed to generate leads and showcase your brand." },
    { icon: "📱", title: "Mobile App Development", desc: "Custom Android and iOS apps for better customer engagement and operations." },
    { icon: "🎨", title: "Graphic Design", desc: "Logos, branding, brochures, and marketing materials that create strong impressions." },
    { icon: "📊", title: "Digital Marketing", desc: "Facebook, Instagram, Google Ads, and content marketing campaigns." },
    { icon: "🔍", title: "SEO", desc: "Improve your Google rankings so customers can easily find your business." },
    { icon: "⚙️", title: "Business Software", desc: "Accounts, inventory, HR, CRM, and analytics — all in one smart system." },
  ];

  const industries = [
    "Retail Stores", "Restaurants & Cafés", "Real Estate", "Healthcare Clinics",
    "Educational Institutes", "Construction", "Manufacturing", "E-commerce",
    "Startups", "Service Providers",
  ];

  const recentPosts = [
    { num: "01", title: "Why Every Business Needs a Strong Online Presence", date: "Jan 15, 2026" },
    { num: "02", title: "10 Tips for Effective SEO in 2026", date: "Dec 28, 2025" },
    { num: "03", title: "The Power of Social Media Marketing", date: "Dec 10, 2025" },
    { num: "04", title: "Web Design Trends to Watch in 2026", date: "Nov 22, 2025" },
  ];

  const blogPostsData = [
    {
      title: "Why Every Business Needs a Strong Online Presence in 2026",
      subtitle: "Your customers are searching for you before they ever walk through your door — are they finding you, or your competitor?",
      kicker: "Digital Marketing · Business Growth",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      tags: ["Digital Marketing", "Business Growth", "SEO", "Online Presence"],
      author: "360 Art Design",
      date: "January 15, 2026",
      readTime: "8 min read",
      content: (
        <>
          <p className="article-lead">
            In today&apos;s digital world, having a great product or service is no longer enough. Your customers are searching for you online before making a purchase — if your business isn&apos;t visible, you&apos;re losing opportunities to competitors who are.
          </p>
          <h2 className="article-h2">What is an Online Presence?</h2>
          <p className="article-p">
            An online presence is how your business appears across the internet. It includes your website, social profiles, search rankings, and customer reviews — together these create a digital identity that helps customers discover and trust your brand.
          </p>
          <ul className="article-ul">
            <li>Professional Website</li>
            <li>Google Business Profile</li>
            <li>Facebook &amp; Instagram Pages</li>
            <li>LinkedIn Business Profile</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Online Advertising</li>
            <li>Customer Reviews</li>
            <li>Business Applications and Automation</li>
          </ul>
          <h2 className="article-h2">Why Your Business Needs to Be Online</h2>
          <h3 className="article-h3">Your customers are already searching</h3>
          <p className="article-p">
            Before buying anything, most people research online first. If they can&apos;t find your business, they&apos;ll choose a competitor they can. Being discoverable is no longer optional — it&apos;s the minimum entry point for growth in 2026.
          </p>
          <div className="pull-quote">
            <p>&ldquo;If your business isn&apos;t on the first page of Google, you&apos;re invisible to 90% of potential customers.&rdquo;</p>
            <cite>— Digital Marketing Research, 2025</cite>
          </div>
        </>
      )
    },
    {
      title: "10 Tips for Effective SEO in 2026",
      subtitle: "Master the latest search engine optimization strategies to boost your rankings and drive organic traffic.",
      kicker: "SEO · Digital Marketing",
      coverImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
      tags: ["SEO", "Digital Marketing", "Google", "Traffic"],
      author: "360 Art Design",
      date: "December 28, 2025",
      readTime: "10 min read",
      content: (
        <>
          <p className="article-lead">
            Search engine optimization continues to evolve rapidly. What worked in 2024 may not work in 2026. Stay ahead of the curve with these proven SEO strategies.
          </p>
          <h2 className="article-h2">1. Focus on User Experience</h2>
          <p className="article-p">
            Google now prioritizes websites that provide excellent user experience. This includes fast loading times, mobile responsiveness, and intuitive navigation.
          </p>
          <h2 className="article-h2">2. Create High-Quality Content</h2>
          <p className="article-p">
            Content is still king, but quality matters more than ever. Focus on creating comprehensive, valuable content that answers user questions thoroughly.
          </p>
          <ul className="article-ul">
            <li>Long-form content (2000+ words)</li>
            <li>Original research and data</li>
            <li>Visual elements and infographics</li>
            <li>Regular content updates</li>
          </ul>
          <h2 className="article-h2">3. Optimize for Voice Search</h2>
          <p className="article-p">
            With the rise of smart speakers and voice assistants, optimize your content for natural language queries and conversational search patterns.
          </p>
          <div className="pull-quote">
            <p>&ldquo;Voice search will account for 50% of all searches by 2026.&rdquo;</p>
            <cite>— SEO Industry Report</cite>
          </div>
        </>
      )
    },
    {
      title: "The Power of Social Media Marketing",
      subtitle: "Leverage social platforms to build brand awareness, engage customers, and drive conversions.",
      kicker: "Social Media · Marketing",
      coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
      tags: ["Social Media", "Marketing", "Branding", "Engagement"],
      author: "360 Art Design",
      date: "December 10, 2025",
      readTime: "7 min read",
      content: (
        <>
          <p className="article-lead">
            Social media has transformed how businesses connect with their audience. It&apos;s no longer just about posting — it&apos;s about building relationships and driving real business results.
          </p>
          <h2 className="article-h2">Why Social Media Matters</h2>
          <p className="article-p">
            With billions of active users across platforms, social media offers unprecedented access to potential customers. It allows you to build brand awareness, foster community, and drive conversions.
          </p>
          <h2 className="article-h2">Key Platforms for Business</h2>
          <ul className="article-ul">
            <li>Facebook - Largest user base, great for community building</li>
            <li>Instagram - Visual storytelling, perfect for brands</li>
            <li>LinkedIn - Professional networking and B2B marketing</li>
            <li>Twitter - Real-time engagement and customer service</li>
            <li>TikTok - Short-form video content for younger audiences</li>
          </ul>
          <h2 className="article-h2">Creating a Winning Strategy</h2>
          <p className="article-p">
            Success on social media requires a strategic approach. Define your goals, understand your audience, and create content that resonates with them.
          </p>
          <div className="pull-quote">
            <p>&ldquo;Social media is not just about being present. It&apos;s about being present in a way that matters.&rdquo;</p>
            <cite>— Social Media Expert</cite>
          </div>
        </>
      )
    },
    {
      title: "Web Design Trends to Watch in 2026",
      subtitle: "Stay ahead with the latest design trends shaping the future of web experiences.",
      kicker: "Web Design · UX/UI",
      coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
      tags: ["Web Design", "UX/UI", "Trends", "Design"],
      author: "360 Art Design",
      date: "November 22, 2025",
      readTime: "9 min read",
      content: (
        <>
          <p className="article-lead">
            Web design continues to evolve rapidly. Stay competitive by understanding and implementing the latest trends that define modern web experiences.
          </p>
          <h2 className="article-h2">1. AI-Powered Personalization</h2>
          <p className="article-p">
            Artificial intelligence is revolutionizing how websites adapt to individual users. Expect more personalized experiences based on user behavior and preferences.
          </p>
          <h2 className="article-h2">2. Immersive 3D Experiences</h2>
          <p className="article-p">
            Three-dimensional elements and immersive experiences are becoming more accessible. Brands are using 3D to create memorable, interactive web experiences.
          </p>
          <h2 className="article-h2">3. Sustainable Web Design</h2>
          <p className="article-p">
            Environmental consciousness is influencing web design. Optimized code, efficient hosting, and minimal carbon footprints are becoming priorities.
          </p>
          <ul className="article-ul">
            <li>Optimized images and assets</li>
            <li>Green hosting solutions</li>
            <li>Minimalist design approaches</li>
            <li>Efficient code practices</li>
          </ul>
          <div className="pull-quote">
            <p>&ldquo;Great design is not just about aesthetics — it&apos;s about creating experiences that matter.&rdquo;</p>
            <cite>— Design Philosophy</cite>
          </div>
        </>
      )
    }
  ];

  const currentPostData = blogPostsData[currentPost];

  return (
    <section style={{ background: "#f7f7f5", padding: "64px 24px 96px", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <style>{`
        /* ── Layout ── */
        .blog-layout {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 308px;
          gap: 52px;
          align-items: start;
        }

        /* ── Article Shell ── */
        .article-shell {
          background: #ffffff;
          border: 1px solid #e8e4df;
        }

        .article-cover {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }

        /* ── Breadcrumb bar ── */
        .article-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 48px;
          border-bottom: 1px solid #ede9e4;
          font-family: 'Nunito', sans-serif;
          font-size: 12px;
          color: #9ca3af;
          letter-spacing: 0.3px;
        }
        .bc-sep { color: #d1cdc8; }
        .bc-current { color: #374151; font-weight: 600; }

        /* ── Kicker + Title area ── */
        .article-header {
          padding: 44px 48px 32px;
          border-bottom: 1px solid #ede9e4;
        }
        .article-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .kicker-line { width: 32px; height: 2px; background: #c0392b; flex-shrink: 0; }
        .kicker-label {
          font-family: 'Nunito', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #c0392b;
          text-transform: uppercase;
        }
        .article-title {
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.22;
          letter-spacing: -0.3px;
          margin: 0 0 20px;
        }
        .article-subtitle {
          font-size: 17px;
          color: #6b7280;
          line-height: 1.65;
          font-style: italic;
          margin: 0 0 24px;
          font-family: 'Georgia', serif;
        }
        .article-meta-row {
          display: flex;
          align-items: center;
          gap: 0;
          flex-wrap: wrap;
        }
        .meta-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Nunito', sans-serif;
          font-size: 12.5px;
          color: #6b7280;
          padding-right: 18px;
          margin-right: 18px;
          border-right: 1px solid #e0dbd5;
        }
        .meta-chip:last-child { border-right: none; margin-right: 0; padding-right: 0; }
        .meta-chip svg { color: #c0392b; flex-shrink: 0; }
        .meta-chip strong { color: #374151; }

        /* ── Tags row ── */
        .article-tags-row {
          padding: 18px 48px;
          border-bottom: 1px solid #ede9e4;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          background: #fdfcfb;
        }
        .a-tag {
          font-family: 'Nunito', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 5px 13px;
          border-radius: 3px;
        }
        .a-tag-red { background: #fff0f0; color: #c0392b; border: 1px solid #f8d0d0; }
        .a-tag-gray { background: #f3f4f6; color: #6b7280; border: 1px solid #e5e7eb; }

        /* ── Body ── */
        .article-body {
          padding: 44px 48px 56px;
        }

        /* drop-cap lead paragraph */
        .article-lead {
          font-size: 17.5px;
          color: #1f2937;
          line-height: 1.9;
          margin-bottom: 36px;
          padding: 22px 26px;
          background: #fff8f8;
          border-left: 3px solid #c0392b;
          font-style: italic;
        }

        .article-h2 {
          font-size: 22px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 44px 0 14px;
          letter-spacing: -0.2px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ede9e4;
        }
        .article-h2:first-of-type { margin-top: 0; }

        .article-h3 {
          font-family: 'Nunito', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #c0392b;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 30px 0 10px;
        }

        .article-p {
          font-size: 16px;
          color: #374151;
          line-height: 1.9;
          margin-bottom: 18px;
          font-family: 'Georgia', serif;
        }

        /* Pull quote */
        .pull-quote {
          margin: 36px 0;
          padding: 28px 32px;
          border-left: 4px solid #c0392b;
          background: #fdfcfb;
          border-top: 1px solid #ede9e4;
          border-bottom: 1px solid #ede9e4;
        }
        .pull-quote p {
          font-size: 20px;
          font-style: italic;
          color: #1f2937;
          line-height: 1.55;
          margin: 0 0 10px;
        }
        .pull-quote cite {
          font-family: 'Nunito', sans-serif;
          font-size: 12px;
          color: #9ca3af;
          font-style: normal;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Bullet list */
        .article-ul {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          border: 1px solid #ede9e4;
          border-radius: 4px;
          overflow: hidden;
        }
        .article-ul li {
          font-family: 'Nunito', sans-serif;
          font-size: 14.5px;
          color: #374151;
          line-height: 1.65;
          padding: 12px 18px 12px 42px;
          position: relative;
          border-bottom: 1px solid #ede9e4;
          background: #fff;
        }
        .article-ul li:last-child { border-bottom: none; }
        .article-ul li:nth-child(even) { background: #fdfcfb; }
        .article-ul li::before {
          content: "";
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c0392b;
        }

        /* Services cards */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 24px 0 32px;
        }
        .service-card {
          background: #fdfcfb;
          border: 1px solid #ede9e4;
          border-radius: 4px;
          padding: 18px 20px;
          transition: border-color 0.2s, background 0.2s;
        }
        .service-card:hover { border-color: #c0392b; background: #fff8f8; }
        .service-icon { font-size: 22px; margin-bottom: 10px; }
        .service-title {
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 5px;
        }
        .service-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 12px;
          color: #6b7280;
          line-height: 1.6;
        }

        /* Industry pills */
        .industries-wrap { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
        .industry-pill {
          font-family: 'Nunito', sans-serif;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          color: #374151;
          font-size: 12.5px;
          padding: 6px 15px;
          border-radius: 3px;
          font-weight: 600;
          transition: all 0.2s;
          cursor: default;
        }
        .industry-pill:hover { background: #fff0f0; border-color: #f5c6c6; color: #c0392b; }

        /* Article footer / share */
        .article-footer {
          padding: 28px 48px;
          border-top: 1px solid #ede9e4;
          background: #fdfcfb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .share-label {
          font-family: 'Nunito', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #9ca3af;
          text-transform: uppercase;
        }
        .share-btns { display: flex; gap: 8px; }
        .share-btn {
          font-family: 'Nunito', sans-serif;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 16px;
          border-radius: 3px;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #374151;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: all 0.18s;
        }
        .share-btn:hover { border-color: #c0392b; color: #c0392b; background: #fff8f8; }
        .article-read-more {
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #c0392b;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.3px;
        }
        .article-read-more:hover { text-decoration: underline; }

        /* ── SIDEBAR ── */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid #e8e4df;
          background: #fff;
          position: sticky;
          top: 24px;
          overflow: hidden;
        }

        .sw {
          padding: 24px 24px 20px;
          border-bottom: 1px solid #ede9e4;
        }
        .sw:last-child { border-bottom: none; }

        .sw-title {
          font-family: 'Nunito', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 3px;
          color: #9ca3af;
          text-transform: uppercase;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sw-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #ede9e4;
        }

        /* Author */
        .author-row { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
        .author-avatar {
          width: 44px; height: 44px; border-radius: 4px;
          background: linear-gradient(135deg, #e22222, #8b0000);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 900; font-size: 14px;
          font-family: 'Nunito', sans-serif;
          flex-shrink: 0;
        }
        .author-name {
          font-family: 'Nunito', sans-serif;
          font-weight: 800; color: #111827; font-size: 14px;
        }
        .author-role {
          font-family: 'Nunito', sans-serif;
          font-size: 11px; color: #9ca3af; margin-top: 2px; letter-spacing: 0.5px;
        }
        .author-bio {
          font-family: 'Nunito', sans-serif;
          font-size: 12.5px; color: #6b7280; line-height: 1.65;
        }

        /* Categories */
        .cat-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 9px 0; border-bottom: 1px solid #f3f4f6;
          cursor: pointer; font-family: 'Nunito', sans-serif;
        }
        .cat-item:last-child { border-bottom: none; }
        .cat-item:hover .cat-label { color: #c0392b; }
        .cat-label { font-size: 13px; color: #374151; font-weight: 600; transition: color 0.2s; }
        .cat-count {
          font-size: 10px; color: #fff; background: #c0392b;
          border-radius: 2px; padding: 2px 7px; font-weight: 800;
          font-family: 'Nunito', sans-serif;
        }

        /* Recent Posts */
        .recent-item {
          display: flex; gap: 12px; padding: 12px 0;
          border-bottom: 1px solid #f3f4f6; align-items: flex-start;
        }
        .recent-item:last-child { border-bottom: none; }
        .recent-num {
          font-family: 'Nunito', sans-serif;
          font-size: 11px; font-weight: 900; color: #d1cdc8;
          letter-spacing: 0.5px; width: 20px; flex-shrink: 0; margin-top: 2px;
        }
        .recent-title {
          font-family: 'Nunito', sans-serif;
          font-size: 13px; color: #374151; font-weight: 600;
          line-height: 1.5; cursor: pointer; transition: color 0.18s;
        }
        .recent-title:hover { color: #c0392b; }
        .recent-date {
          font-family: 'Nunito', sans-serif;
          font-size: 11px; color: #9ca3af; margin-top: 4px; letter-spacing: 0.3px;
        }

        /* Newsletter */
        .sub-widget { background: #0f0f0f !important; }
        .sub-widget .sw-title { color: rgba(255,255,255,0.45) !important; }
        .sub-widget .sw-title::after { background: rgba(255,255,255,0.1) !important; }
        .sub-head {
          font-family: 'Nunito', sans-serif;
          font-size: 16px; font-weight: 900; color: #fff; margin-bottom: 8px;
        }
        .sub-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 12.5px; color: rgba(255,255,255,0.6);
          line-height: 1.6; margin-bottom: 16px;
        }
        .sub-input {
          width: 100%; padding: 11px 14px; border-radius: 3px;
          border: 1px solid rgba(255,255,255,0.15);
          font-size: 13px; outline: none; margin-bottom: 10px;
          background: rgba(255,255,255,0.08); color: #fff;
          font-family: 'Nunito', sans-serif;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .sub-input::placeholder { color: rgba(255,255,255,0.35); }
        .sub-input:focus { border-color: #c0392b; }
        .sub-btn {
          width: 100%; background: #c0392b; color: #fff;
          border: none; padding: 12px;
          border-radius: 3px; font-size: 12px; font-weight: 800;
          cursor: pointer; font-family: 'Nunito', sans-serif;
          letter-spacing: 2px; text-transform: uppercase;
          transition: background 0.2s;
        }
        .sub-btn:hover { background: #a53226; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .blog-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
          .blog-sidebar { position: static !important; }
          .services-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .article-header { padding: 28px 24px 24px !important; }
          .article-tags-row { padding: 14px 24px !important; }
          .article-breadcrumb { padding: 12px 24px !important; }
          .article-body { padding: 28px 24px 40px !important; }
          .article-footer { padding: 20px 24px !important; }
          .article-cover { height: 220px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .article-title { font-size: 24px !important; }
        }
      `}</style>

      <div className="blog-layout">

        {/* ══ MAIN ARTICLE ══ */}
        <article className="article-shell">

          {/* Cover Image */}
          <img
            className="article-cover"
            src={currentPostData.coverImage}
            alt={currentPostData.title}
          />

          {/* Breadcrumb */}
          <div className="article-breadcrumb">
            <span>Home</span>
            <span className="bc-sep">›</span>
            <span>Blog</span>
            <span className="bc-sep">›</span>
            <span className="bc-current">{currentPostData.title.split(' ').slice(0, 3).join(' ')}</span>
          </div>

          {/* Header */}
          <div className="article-header">
            <div className="article-kicker">
              <span className="kicker-line" />
              <span className="kicker-label">{currentPostData.kicker}</span>
            </div>
            <h1 className="article-title">
              {currentPostData.title}
            </h1>
            <p className="article-subtitle">
              {currentPostData.subtitle}
            </p>
            <div className="article-meta-row">
              <span className="meta-chip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <strong>{currentPostData.author}</strong>
              </span>
              <span className="meta-chip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                {currentPostData.date}
              </span>
              <span className="meta-chip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                {currentPostData.readTime}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="article-tags-row">
            {currentPostData.tags.map((tag, i) => (
              <span key={i} className={`a-tag ${i < 2 ? 'a-tag-red' : 'a-tag-gray'}`}>{tag}</span>
            ))}
          </div>

          {/* Body */}
          <div className="article-body">
            {currentPostData.content}
          </div>

          {/* Article Footer / Share bar */}
          <div className="article-footer">
            <div>
              <div className="share-label" style={{ marginBottom: 10 }}>Share this article</div>
              <div className="share-btns">
                <button className="share-btn" onClick={handleFacebookShare}>Facebook</button>
                <button className="share-btn" onClick={handleCopyLink}>Copy Link</button>
              </div>
            </div>
            <a className="article-read-more">
              More Articles <FaArrowRight size={11} />
            </a>
          </div>

        </article>

        {/* ══ SIDEBAR ══ */}
        <aside className="blog-sidebar">

          {/* Author */}
          <div className="sw">
            <div className="sw-title">About the Author</div>
            <div className="author-row">
              <div className="author-avatar">360</div>
              <div>
                <div className="author-name">360 Art Design</div>
                <div className="author-role">Digital Agency · Karachi</div>
              </div>
            </div>
            <p className="author-bio">
              A creative digital agency focused on crafting stunning websites, powerful brands, and growth-driven marketing strategies for businesses across Pakistan.
            </p>
          </div>

          {/* Categories */}
          <div className="sw">
            <div className="sw-title">Categories</div>
            {[
              { label: "Digital Marketing", count: 12 },
              { label: "Web Development", count: 8 },
              { label: "SEO Tips", count: 6 },
              { label: "Social Media", count: 9 },
              { label: "Business Tips", count: 5 },
            ].map((cat, i) => (
              <div className="cat-item" key={i} onClick={() => handleCategoryClick(cat.label)}>
                <span className="cat-label">{cat.label}</span>
                <span className="cat-count">{cat.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div className="sw">
            <div className="sw-title">Recent Posts</div>
            {recentPosts.map((post, i) => (
              <div className="recent-item" key={i} onClick={() => handlePostClick(i)}>
                <div className="recent-num">{post.num}</div>
                <div>
                  <div className="recent-title">{post.title}</div>
                  <div className="recent-date">{post.date}</div>
                </div>
              </div>
            ))}
          </div>

        </aside>
      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogHero />
      <BlogContent />
      <ServicesGrid />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}