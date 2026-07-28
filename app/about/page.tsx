"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import React from "react";
import { Header, FooterSection } from "../services/page";

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
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        width: 50,
        height: 50,
        borderRadius: "50%",
        background: "#e22222",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(226,34,34,0.4)",
        zIndex: 1000,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <FaArrowUp />
    </button>
  );
}

// ==================== ABOUT US HERO ====================
function AboutUsHero() {
  return (
    <>
      <style>{`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .about-hero-btn-primary:hover { background: #b71c1c !important; }
        .about-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .about-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .about-hero-section { padding-top: 0 !important; }
          .about-hero-container { padding: 10px 20px 100px !important; text-align: center !important; }
          .about-hero-container h1 { font-size: 32px !important; }
          .about-hero-container p { font-size: 15px !important; padding: 0 15px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .about-hero-container { padding: 20px 30px 100px !important; text-align: center !important; }
          .about-hero-container h1 { font-size: 42px !important; }
        }
      `}</style>

      <section
        className="about-hero-section"
        style={{
          paddingTop: 70,
          minHeight: "60vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Nunito', sans-serif",
          background: "#8b0000",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center right", opacity: 0.25, zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)", zIndex: 1 }} />

        <div
          className="about-hero-container"
          style={{ maxWidth: 1200, margin: "0 auto", width: "100%", textAlign: "center", position: "relative", zIndex: 10 }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>About Us</span>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
          </div>

          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 900, color: "#fff", lineHeight: 1.12, marginBottom: 22, letterSpacing: -0.5 }}>
            Building <span style={{ color: "rgba(255,255,255,0.75)" }}>Digital Excellence</span>
          </h1>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
            We are a creative digital agency passionate about crafting stunning websites, powerful brands, and growth-driven marketing strategies.
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 280, lineHeight: 0, zIndex: 2, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove2 15s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}><path d="M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z" fill="rgba(255,255,255,0.12)" /></svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove1 12s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}><path d="M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z" fill="rgba(255,255,255,0.30)" /></svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove3 10s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}><path d="M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z" fill="#f3f4f8" /></svg>
          </div>
        </div>
      </section>
    </>
  );
}

// ==================== ABOUT US CONTENT ====================
function AboutUsContent() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🏆" },
    { number: "300+", label: "Happy Clients", icon: "😊" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "8+", label: "Years Experience", icon: "📅" },
  ];

  const values = [
    { title: "Creativity", desc: "We think outside the box to deliver unique and innovative solutions for every client.", icon: "💡" },
    { title: "Quality", desc: "We maintain the highest standards in design, development, and delivery.", icon: "⭐" },
    { title: "Integrity", desc: "Honesty, transparency, and ethical business practices guide everything we do.", icon: "🤝" },
    { title: "Collaboration", desc: "We work closely with our clients as true partners to achieve shared success.", icon: "🔗" },
    { title: "Innovation", desc: "We stay ahead of trends using cutting-edge technology and modern methods.", icon: "🚀" },
    { title: "Excellence", desc: "We strive for perfection in every project, big or small.", icon: "🎯" },
  ];

  const services = [
    { title: "Website Design & Development", desc: "Custom, responsive websites that convert visitors into paying customers.", icon: "🌐" },
    { title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android.", icon: "📱" },
    { title: "Graphic Design", desc: "Branding, logos, marketing materials, and complete visual identity.", icon: "🎨" },
    { title: "Digital Marketing", desc: "SEO, social media marketing, PPC campaigns, and content marketing.", icon: "📊" },
    { title: "Business Management Software", desc: "Custom solutions to streamline accounts, inventory, HR, and CRM.", icon: "⚙️" },
    { title: "SEO & Analytics", desc: "Improve online visibility and track performance with data-driven insights.", icon: "🔍" },
  ];

  const whyUs = [
    { title: "Expert Team", desc: "Experienced professionals with diverse skills across design, development, and marketing." },
    { title: "Custom Solutions", desc: "We don't believe in one-size-fits-all. Every solution is tailored to your specific needs." },
    { title: "Results-Driven", desc: "We focus on measurable outcomes that directly contribute to your business growth." },
    { title: "Transparent Process", desc: "You stay informed and in control at every stage of your project." },
    { title: "Competitive Pricing", desc: "Premium quality services delivered at competitive and fair rates." },
    { title: "Ongoing Support", desc: "We provide continuous support and maintenance even after project completion." },
  ];

  return (
    <section style={{ background: "#f3f4f8", padding: "64px 24px 80px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        .about-wrap { max-width: 1160px; margin: 0 auto; }

        /* Section label */
        .section-eyebrow {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 14px;
        }
        .section-eyebrow span {
          font-size: 12px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #e22222;
        }
        .eyebrow-line { flex: none; width: 36px; height: 2px; background: #e22222; border-radius: 2px; }

        .section-heading { font-size: clamp(24px, 3vw, 32px); font-weight: 900; color: #111827; line-height: 1.25; margin: 0 0 12px; }
        .section-sub { font-size: 15px; color: #6b7280; line-height: 1.75; margin: 0 0 40px; max-width: 600px; }

        /* WHO WE ARE */
        .who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 80px;
        }
        .who-img-wrap { border-radius: 16px; overflow: hidden; position: relative; }
        .who-img-wrap img { width: 100%; height: 420px; object-fit: cover; display: block; }
        .who-img-badge {
          position: absolute; bottom: 24px; left: 24px;
          background: #fff; border-radius: 12px; padding: 14px 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          display: flex; align-items: center; gap: 12px;
        }
        .who-img-badge-num { font-size: 28px; font-weight: 900; color: #e22222; }
        .who-img-badge-text { font-size: 13px; color: #6b7280; font-weight: 600; line-height: 1.3; }
        .who-text p { font-size: 15px; color: #4b5563; line-height: 1.85; margin-bottom: 18px; }
        .who-text p:last-of-type { margin-bottom: 0; }
        .who-lead {
          font-size: 16px; color: #374151; line-height: 1.85;
          padding: 18px 22px; background: #fff8f8;
          border-left: 3px solid #e22222; border-radius: 0 8px 8px 0;
          margin-bottom: 20px;
        }

        /* STATS */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 80px;
        }
        .stat-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 28px 20px;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(226,34,34,0.1); border-color: #f5c6c6; }
        .stat-icon { font-size: 28px; margin-bottom: 10px; }
        .stat-number { font-size: 40px; font-weight: 900; color: #e22222; line-height: 1; margin-bottom: 8px; }
        .stat-label { font-size: 13px; color: #6b7280; font-weight: 600; }

        /* MISSION VISION */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 80px;
        }
        .mv-card {
          background: #fff;
          border-radius: 16px;
          border: 0.5px solid #e5e7eb;
          padding: 36px 32px;
          transition: box-shadow 0.25s ease;
        }
        .mv-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .mv-icon-wrap {
          width: 56px; height: 56px;
          background: linear-gradient(135deg, #e22222, #8b0000);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .mv-card h3 { font-size: 20px; font-weight: 800; color: #111827; margin-bottom: 12px; }
        .mv-card p { font-size: 15px; color: #4b5563; line-height: 1.75; margin: 0; }

        /* VALUES */
        .values-section { margin-bottom: 80px; }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .value-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 26px 22px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .value-card:hover { border-color: #e22222; box-shadow: 0 6px 20px rgba(226,34,34,0.08); }
        .value-emoji { font-size: 28px; margin-bottom: 12px; }
        .value-card h3 { font-size: 16px; font-weight: 800; color: #111827; margin-bottom: 8px; }
        .value-card p { font-size: 13px; color: #6b7280; line-height: 1.65; margin: 0; }

        /* WHY CHOOSE US */
        .why-section { margin-bottom: 80px; }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .why-item {
          display: flex;
          gap: 14px;
          background: #fff;
          border-radius: 12px;
          border: 0.5px solid #e5e7eb;
          padding: 20px 22px;
          align-items: flex-start;
          transition: border-color 0.2s ease;
        }
        .why-item:hover { border-color: #e22222; }
        .why-bullet {
          width: 32px; height: 32px; border-radius: 8px;
          background: #fff0f0; color: #e22222;
          font-size: 16px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .why-title { font-size: 14px; font-weight: 800; color: #111827; margin-bottom: 4px; }
        .why-desc { font-size: 13px; color: #6b7280; line-height: 1.6; margin: 0; }

        /* SERVICES */
        .services-section { margin-bottom: 80px; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .service-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 26px 22px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .service-card:hover { border-color: #e22222; box-shadow: 0 6px 20px rgba(226,34,34,0.08); transform: translateY(-3px); }
        .service-icon { font-size: 28px; margin-bottom: 12px; }
        .service-title { font-size: 14px; font-weight: 800; color: #111827; margin-bottom: 7px; }
        .service-desc { font-size: 13px; color: #6b7280; line-height: 1.6; margin: 0; }

        /* CTA */
        .about-cta {
          background: linear-gradient(135deg, #8b0000 0%, #c0392b 100%);
          border-radius: 20px;
          padding: 56px 40px;
          text-align: center;
        }
        .about-cta h2 { font-size: clamp(24px, 3vw, 32px); font-weight: 900; color: #fff; margin-bottom: 14px; }
        .about-cta p { font-size: 16px; color: rgba(255,255,255,0.88); line-height: 1.7; max-width: 520px; margin: 0 auto 28px; }
        .cta-btn {
          background: #fff; color: #c0392b;
          border: none; padding: 14px 42px;
          font-weight: 800; font-size: 15px;
          border-radius: 8px; cursor: pointer;
          font-family: 'Nunito', sans-serif;
          transition: transform 0.2s ease;
        }
        .cta-btn:hover { transform: translateY(-2px); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr !important; }
          .mv-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
          .who-img-wrap img { height: 260px !important; }
          .about-cta { padding: 36px 20px !important; }
        }
        @media (max-width: 480px) {
          .stats-row { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        }
      `}</style>

      <div className="about-wrap">

        {/* ── WHO WE ARE ── */}
        <div className="who-grid">
          <div className="who-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="360 Art Design Team"
            />
            <div className="who-img-badge">
              <div className="who-img-badge-num">8+</div>
              <div className="who-img-badge-text">Years of Digital<br />Excellence</div>
            </div>
          </div>
          <div className="who-text">
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              <span>Who We Are</span>
            </div>
            <h2 className="section-heading">A Team Passionate About Your Growth</h2>
            <p className="who-lead">
              360 Art Design is a full-service digital agency dedicated to helping businesses succeed in the digital world.
            </p>
            <p>
              Founded with a passion for creativity and technology, we have grown into a team of skilled professionals specializing in web development, mobile applications, graphic design, digital marketing, and business management solutions.
            </p>
            <p>
              We believe every business deserves a strong online presence, and we work tirelessly to deliver exceptional results that exceed expectations — combining innovative design with cutting-edge technology to drive real growth.
            </p>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="stats-row">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── MISSION & VISION ── */}
        <div style={{ marginBottom: 80 }}>
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Our Purpose</span>
          </div>
          <h2 className="section-heading">Mission & Vision</h2>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To empower businesses with innovative digital solutions that drive growth, enhance brand visibility, and create meaningful connections with their target audience.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To be the leading digital agency recognized for excellence in creativity, innovation, and client satisfaction — helping businesses worldwide achieve their full digital potential.</p>
            </div>
          </div>
        </div>

        {/* ── CORE VALUES ── */}
        <div className="values-section">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Core Values</span>
          </div>
          <h2 className="section-heading">What Drives Us Every Day</h2>
          <p className="section-sub">These principles shape how we work, how we communicate, and how we deliver results for every client.</p>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-emoji">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <div className="why-section">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-heading">The 360 Art Design Difference</h2>
          <p className="section-sub">We go beyond delivery — we become your long-term digital partner committed to your success.</p>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div className="why-item" key={i}>
                <div className="why-bullet">✓</div>
                <div>
                  <div className="why-title">{w.title}</div>
                  <p className="why-desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── OUR SERVICES ── */}
        <div className="services-section">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Our Services</span>
          </div>
          <h2 className="section-heading">Everything Your Business Needs</h2>
          <p className="section-sub">A comprehensive suite of digital services under one roof — so you never have to go anywhere else.</p>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        

      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function AboutUsPage() {
  return (
    <>
      <Header />
      <AboutUsHero />
      <AboutUsContent />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}