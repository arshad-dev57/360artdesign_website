"use client";
import { useState, useEffect } from "react";
import { FaArrowUp, FaFileContract, FaCogs, FaUserCheck, FaTrademark, FaCreditCard, FaBoxOpen, FaHandshake, FaExclamationTriangle, FaShieldAlt, FaBan, FaGavel, FaEdit, FaEnvelope } from "react-icons/fa";
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

// ==================== TERMS AND CONDITIONS HERO ====================
function TermsAndConditionsHero() {
  return (
    <>
      <style>{`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .terms-hero-btn-primary:hover { background: #b71c1c !important; }
        .terms-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .terms-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .terms-hero-section { padding-top: 0 !important; }
          .terms-hero-container { padding: 10px 20px 100px !important; text-align: center !important; }
          .terms-hero-container h1 { font-size: 32px !important; }
          .terms-hero-container p { font-size: 15px !important; padding: 0 15px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .terms-hero-container { padding: 20px 30px 100px !important; text-align: center !important; }
          .terms-hero-container h1 { font-size: 42px !important; }
        }
      `}</style>

      <section
        className="terms-hero-section"
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
          className="terms-hero-container"
          style={{ maxWidth: 1200, margin: "0 auto", width: "100%", textAlign: "center", position: "relative", zIndex: 10 }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>Legal</span>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
          </div>

          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 900, color: "#fff", lineHeight: 1.12, marginBottom: 22, letterSpacing: -0.5 }}>
            Terms & <span style={{ color: "rgba(255,255,255,0.75)" }}>Conditions</span>
          </h1>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
            Last Updated: January 15, 2026
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

// ==================== TERMS AND CONDITIONS CONTENT ====================
const sections = [
  {
    icon: <FaFileContract />,
    number: "01",
    title: "Acceptance of Terms",
    intro: "By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website or our services.",
    items: [],
  },
  {
    icon: <FaCogs />,
    number: "02",
    title: "Services Description",
    intro: "360 Art Design provides digital services including but not limited to:",
    items: [
      { label: null, desc: "Website design and development" },
      { label: null, desc: "Mobile application development" },
      { label: null, desc: "Graphic design and branding" },
      { label: null, desc: "Digital marketing and SEO services" },
      { label: null, desc: "Social media management" },
      { label: null, desc: "Business management software solutions" },
    ],
  },
  {
    icon: <FaUserCheck />,
    number: "03",
    title: "User Responsibilities",
    intro: "As a user of our services, you agree to:",
    items: [
      { label: null, desc: "Provide accurate and complete information when requested" },
      { label: null, desc: "Maintain the confidentiality of your account credentials" },
      { label: null, desc: "Notify us immediately of any unauthorized use of your account" },
      { label: null, desc: "Comply with all applicable laws and regulations" },
      { label: null, desc: "Not use our services for any illegal or unauthorized purpose" },
      { label: null, desc: "Not attempt to gain unauthorized access to our systems" },
    ],
  },
  {
    icon: <FaTrademark />,
    number: "04",
    title: "Intellectual Property",
    intro: "All content, features, and functionality of this website — including text, graphics, logos, images, software, and code — are the exclusive property of 360 Art Design and are protected by international copyright, trademark, and other intellectual property laws. Any unauthorized use, reproduction, or distribution of our intellectual property is strictly prohibited and may result in legal action.",
    items: [],
  },
  {
    icon: <FaCreditCard />,
    number: "05",
    title: "Payment Terms",
    intro: "For paid services, the following terms apply:",
    items: [
      { label: "Pricing", desc: "All prices are quoted in the currency specified and are subject to change without prior notice." },
      { label: "Payment", desc: "Payment must be made in full before commencement of services unless otherwise agreed in writing." },
      { label: "Refunds", desc: "Refunds are handled on a case-by-case basis and are subject to our refund policy." },
      { label: "Late Payments", desc: "Late payments may incur interest charges or service suspension." },
    ],
  },
  {
    icon: <FaBoxOpen />,
    number: "06",
    title: "Project Deliverables",
    intro: "Regarding project deliverables:",
    items: [
      { label: null, desc: "Deliverables will be provided as specified in the project agreement" },
      { label: null, desc: "Client must review and approve deliverables within the specified timeframe" },
      { label: null, desc: "Revisions are limited to those specified in the project scope" },
      { label: null, desc: "Final files and source code will be delivered upon full payment" },
    ],
  },
  {
    icon: <FaHandshake />,
    number: "07",
    title: "Client Obligations",
    intro: "Clients agree to:",
    items: [
      { label: null, desc: "Provide necessary materials and information in a timely manner" },
      { label: null, desc: "Respond to communications and requests within reasonable timeframes" },
      { label: null, desc: "Obtain all necessary rights and permissions for materials provided" },
      { label: null, desc: "Review and approve work according to agreed timelines" },
      { label: null, desc: "Pay invoices according to agreed payment terms" },
    ],
  },
  {
    icon: <FaExclamationTriangle />,
    number: "08",
    title: "Limitation of Liability",
    intro: "To the maximum extent permitted by law, 360 Art Design shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
    items: [
      { label: null, desc: "Your access to or use of or inability to access or use our services" },
      { label: null, desc: "Any conduct or content of any third party on our services" },
      { label: null, desc: "Any content obtained from our services" },
      { label: null, desc: "Unauthorized access to or alteration of your transmissions or data" },
    ],
  },
  {
    icon: <FaShieldAlt />,
    number: "09",
    title: "Indemnification",
    intro: "You agree to indemnify, defend, and hold harmless 360 Art Design and its affiliates, officers, directors, employees, agents, and licensors from and against any claims, damages, obligations, losses, liabilities, costs, or debt resulting from:",
    items: [
      { label: null, desc: "Your use and access of our services" },
      { label: null, desc: "Your violation of any term of these Terms and Conditions" },
      { label: null, desc: "Your violation of any third-party right, including copyright, property, or privacy right" },
      { label: null, desc: "Any claim that your use of our services caused damage to a third party" },
    ],
  },
  {
    icon: <FaBan />,
    number: "10",
    title: "Termination",
    intro: "We reserve the right to terminate or suspend your access to our services at any time, without prior notice or liability, for any reason whatsoever, including but not limited to a breach of these Terms and Conditions.",
    items: [],
  },
  {
    icon: <FaGavel />,
    number: "11",
    title: "Governing Law",
    intro: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Pakistan.",
    items: [],
  },
  {
    icon: <FaEdit />,
    number: "12",
    title: "Modifications",
    intro: "We reserve the right to modify these Terms and Conditions at any time. All modifications are effective immediately when posted. Your continued use of our services following the posting of modified Terms and Conditions constitutes your acceptance of the modifications.",
    items: [],
  },
];

function TermsAndConditionsContent() {
  return (
    <section style={{ background: "#f3f4f8", padding: "72px 24px 96px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        .tc-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 40px;
          margin-bottom: 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border: 1px solid #eee;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .tc-card:hover {
          box-shadow: 0 8px 32px rgba(226,34,34,0.10);
          transform: translateY(-2px);
        }
        .tc-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(180deg, #e22222, #8b0000);
          border-radius: 4px 0 0 4px;
        }
        .tc-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .tc-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #e22222, #8b0000);
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-size: 18px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(226,34,34,0.25);
        }
        .tc-section-num {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #e22222;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }
        .tc-section-title {
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 800;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }
        .tc-intro {
          font-size: 15.5px;
          color: #4b5563;
          line-height: 1.8;
          margin: 0 0 20px 0;
        }
        .tc-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
          margin-top: 4px;
        }
        .tc-item {
          background: #fafafa;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          padding: 14px 18px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .tc-item-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #e22222;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .tc-item-text { flex: 1; }
        .tc-item-label {
          font-size: 13px;
          font-weight: 800;
          color: #e22222;
          display: block;
          margin-bottom: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tc-item-desc {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.65;
          margin: 0;
        }
        .tc-contact-card {
          background: linear-gradient(135deg, #8b0000 0%, #c00000 100%);
          border-radius: 16px;
          padding: 40px;
          color: #fff;
          margin-top: 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(139,0,0,0.3);
        }
        .tc-contact-card::after {
          content: "";
          position: absolute;
          top: -60px; right: -60px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }
        .tc-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }
        .tc-contact-item {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          padding: 16px 20px;
        }
        .tc-contact-item-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          display: block;
          margin-bottom: 6px;
        }
        .tc-contact-item-value {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }
        .tc-footer-note {
          text-align: center;
          margin-top: 40px;
          font-size: 13px;
          color: #9ca3af;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }
        @media (max-width: 768px) {
          .tc-card { padding: 24px 20px; }
          .tc-items-grid { grid-template-columns: 1fr; }
          .tc-contact-card { padding: 28px 20px; }
          .tc-contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Intro text */}
        <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.85, textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
          Welcome to <strong style={{ color: "#e22222" }}>360 Art Design</strong>. By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
        </p>

        {/* Section Cards */}
        {sections.map((sec, i) => (
          <div className="tc-card" key={i}>
            <div className="tc-card-header">
              <div className="tc-icon-wrap">{sec.icon}</div>
              <div>
                <span className="tc-section-num">{sec.number}</span>
                <h2 className="tc-section-title">{sec.title}</h2>
              </div>
            </div>
            {sec.intro && <p className="tc-intro">{sec.intro}</p>}
            {sec.items.length > 0 && (
              <div className="tc-items-grid">
                {sec.items.map((item, j) => (
                  <div className="tc-item" key={j}>
                    <div className="tc-item-dot" />
                    <div className="tc-item-text">
                      {item.label && <span className="tc-item-label">{item.label}</span>}
                      <p className="tc-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Contact Card */}
        <div className="tc-contact-card">
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8, position: "relative", zIndex: 1 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
              <FaEnvelope />
            </div>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", display: "block", marginBottom: 2 }}>13</span>
              <h2 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 800, color: "#fff", margin: 0 }}>Contact Information</h2>
            </div>
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 560, margin: "0", position: "relative", zIndex: 1 }}>
            If you have any questions about these Terms and Conditions, please reach out to us through any of the following channels.
          </p>
          <div className="tc-contact-grid" style={{ position: "relative", zIndex: 1 }}>
            <div className="tc-contact-item">
              <span className="tc-contact-item-label">Email</span>
              <span className="tc-contact-item-value">info@bisonstechs.com</span>
            </div>
            <div className="tc-contact-item">
              <span className="tc-contact-item-label">Phone</span>
              <span className="tc-contact-item-value">+92 300 1234567</span>
            </div>
            <div className="tc-contact-item">
              <span className="tc-contact-item-label">Address</span>
              <span className="tc-contact-item-value">Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        <p className="tc-footer-note">
          These Terms and Conditions are effective as of January 15, 2026.
        </p>
      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <TermsAndConditionsHero />
      <TermsAndConditionsContent />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}