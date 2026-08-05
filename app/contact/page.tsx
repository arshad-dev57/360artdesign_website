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

// ==================== CONTACT US HERO ====================
function ContactUsHero() {
  return (
    <>
      <style>{`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .contact-hero-btn-primary:hover { background: #b71c1c !important; }
        .contact-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .contact-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .contact-hero-section { padding-top: 0 !important; }
          .contact-hero-container { padding: 10px 20px 100px !important; text-align: center !important; }
          .contact-hero-container h1 { font-size: 32px !important; }
          .contact-hero-container p { font-size: 15px !important; padding: 0 15px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-hero-container { padding: 20px 30px 100px !important; text-align: center !important; }
          .contact-hero-container h1 { font-size: 42px !important; }
        }
      `}</style>

      <section
        className="contact-hero-section"
        style={{ paddingTop: 70, minHeight: "60vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", fontFamily: "'Nunito', sans-serif", background: "#8b0000" }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center right", opacity: 0.25, zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)", zIndex: 1 }} />

        <div className="contact-hero-container" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", textAlign: "center", position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>Contact Us</span>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 900, color: "#fff", lineHeight: 1.12, marginBottom: 22, letterSpacing: -0.5 }}>
            Get In <span style={{ color: "rgba(255,255,255,0.75)" }}>Touch</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
            Have a question or want to work together? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
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

// ==================== CONTACT US CONTENT ====================
function ContactUsContent() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("https://360artdesign-backend.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess("Thank you! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const infoItems = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.33 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: "Phone",
      lines: ["+1 (786)-761-8327",],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      lines: ["info@bisonstechs.com", "info@360artdesign.com"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Address",
      lines: ["Wells Fargo Plaza 333 SE 2nd Ave, Suite 2000 Miami, FL 33131"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: "Working Hours",
      lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 4:00 PM"],
    },
  ];

  const socials = [
    { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  ];

  return (
    <section style={{ background: "#f3f4f8", padding: "64px 24px 80px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        .contact-wrap { max-width: 1160px; margin: 0 auto; }

        /* QUICK STATS BAR */
        .quick-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 56px;
        }
        .quick-bar-item {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 20px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .quick-bar-item:hover { border-color: #e22222; box-shadow: 0 6px 20px rgba(226,34,34,0.08); }
        .qb-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          background: linear-gradient(135deg, #e22222, #8b0000);
          display: flex; align-items: center; justify-content: center;
        }
        .qb-label { font-size: 11px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px; }
        .qb-value { font-size: 13px; color: #111827; font-weight: 700; line-height: 1.35; }

        /* MAIN GRID */
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.55fr;
          gap: 32px;
          margin-bottom: 48px;
          align-items: start;
        }

        /* INFO COLUMN */
        .info-col-header { margin-bottom: 28px; }
        .section-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .eyebrow-line { width: 36px; height: 2px; background: #e22222; border-radius: 2px; flex-shrink: 0; }
        .eyebrow-text { font-size: 12px; font-weight: 700; color: #e22222; letter-spacing: 3px; text-transform: uppercase; }
        .info-col-header h2 { font-size: clamp(22px, 2.5vw, 28px); font-weight: 900; color: #111827; margin: 0 0 10px; }
        .info-col-header p { font-size: 14px; color: #6b7280; line-height: 1.7; margin: 0; }

        .info-cards { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
        .info-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 18px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .info-card:hover { border-color: #e22222; transform: translateX(4px); }
        .info-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          background: linear-gradient(135deg, #e22222, #8b0000);
          display: flex; align-items: center; justify-content: center;
        }
        .info-label { font-size: 11px; font-weight: 700; color: #e22222; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .info-line { font-size: 14px; color: #374151; font-weight: 600; line-height: 1.55; }

        .socials-row { display: flex; gap: 10px; align-items: center; }
        .social-btn {
          width: 40px; height: 40px; border-radius: 10px;
          background: #fff0f0; border: 0.5px solid #f5c6c6;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s ease;
        }
        .social-btn:hover { background: #e22222; border-color: #e22222; }
        .social-btn:hover svg { stroke: #fff !important; }

        /* FORM CARD */
        .form-card {
          background: #fff;
          border-radius: 16px;
          border: 0.5px solid #e5e7eb;
          padding: 40px 36px 44px;
        }
        .form-card-header { margin-bottom: 28px; }
        .form-card-header h2 { font-size: clamp(20px, 2.5vw, 26px); font-weight: 900; color: #111827; margin: 0 0 6px; }
        .form-card-header p { font-size: 14px; color: #6b7280; margin: 0; line-height: 1.6; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { margin-bottom: 18px; }
        .form-label { display: block; margin-bottom: 7px; font-weight: 700; color: #374151; font-size: 13px; }
        .req { color: #e22222; margin-left: 2px; }
        .form-input {
          width: 100%; padding: 11px 14px;
          border: 1px solid #d1d5db; border-radius: 8px;
          font-size: 14px; font-family: "'Nunito', sans-serif";
          box-sizing: border-box; transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none; color: #111827; background: #fafafa;
        }
        .form-input:focus { border-color: #e22222; box-shadow: 0 0 0 3px rgba(226,34,34,0.1); background: #fff; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-alert {
          padding: 12px 16px; border-radius: 8px; font-size: 13px;
          font-weight: 600; margin-bottom: 20px; text-align: center;
        }
        .form-alert-error { background: #fee2e2; color: #dc2626; border: 1px solid #fca5a5; }
        .form-alert-success { background: #dcfce7; color: #16a34a; border: 1px solid #86efac; }
        .submit-btn {
          width: 100%; background: #e22222; color: #fff;
          border: none; padding: 14px;
          font-weight: 800; font-size: 15px; border-radius: 10px;
          cursor: pointer; font-family: "'Nunito', sans-serif";
          transition: background 0.2s ease, transform 0.2s ease;
          letter-spacing: 0.3px;
        }
        .submit-btn:hover:not(:disabled) { background: #b71c1c; transform: translateY(-1px); }
        .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        /* MAP */
        .map-card {
          background: #fff;
          border-radius: 16px;
          border: 0.5px solid #e5e7eb;
          overflow: hidden;
        }
        .map-header {
          padding: 20px 24px;
          border-bottom: 1px solid #f3f4f6;
          display: flex; align-items: center; gap: 10px;
        }
        .map-header-dot { width: 10px; height: 10px; border-radius: 50%; background: #e22222; }
        .map-header h3 { font-size: 16px; font-weight: 800; color: #111827; margin: 0; }

        @media (max-width: 1024px) {
          .quick-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
          .quick-bar { grid-template-columns: repeat(2, 1fr) !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .form-card { padding: 24px 20px 28px !important; }
        }
        @media (max-width: 480px) {
          .quick-bar { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="contact-wrap">

        {/* ── QUICK STATS BAR ── */}
        <div className="quick-bar">
          {infoItems.map((item, i) => (
            <div className="quick-bar-item" key={i}>
              <div className="qb-icon">{item.icon}</div>
              <div>
                <div className="qb-label">{item.label}</div>
                {item.lines.map((line, j) => (
                  <div className="qb-value" key={j}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── MAIN GRID: INFO + FORM ── */}
        <div className="contact-main-grid">

          {/* INFO COLUMN */}
          <div>
            <div className="info-col-header">
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">Get In Touch</span>
              </div>
              <h2>Let&apos;s Start a Conversation</h2>
              <p>Have questions about our services? We&apos;re here to help. Reach out to us through any of the channels below.</p>
            </div>

            <div className="info-cards">
              {infoItems.map((item, i) => (
                <div className="info-card" key={i}>
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <div className="info-label">{item.label}</div>
                    {item.lines.map((line, j) => (
                      <div className="info-line" key={j}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: 4 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 12, textTransform: "uppercase", letterSpacing: "1px" }}>Follow Us</div>
              <div className="socials-row">
                {socials.map((s, i) => (
                  <div className="social-btn" key={i} title={s.label}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.path} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="form-card">
            <div className="form-card-header">
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">Send a Message</span>
              </div>
              <h2>We&apos;ll Respond Within 24 Hours</h2>
              <p>Fill out the form below and our team will get back to you as soon as possible.</p>
            </div>

            {error && <div className="form-alert form-alert-error">{error}</div>}
            {success && <div className="form-alert form-alert-success">{success}</div>}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name<span className="req">*</span></label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address<span className="req">*</span></label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+1 (786)-761-8327"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message<span className="req">*</span></label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Tell us about your project or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>

        {/* ── MAP ── */}
        <div className="map-card">
          <div className="map-header">
            <div className="map-header-dot" />
            <h3>Our Location</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890123!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzQ2LjUiTiA2N8KwMDAnMDMuOSJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function ContactUsPage() {
  return (
    <>
      <Header />
      <ContactUsHero />
      <ContactUsContent />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}