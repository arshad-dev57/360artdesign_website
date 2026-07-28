

"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import React from "react";
import { Header, FooterSection } from "../../services/page";

// ====== SCROLL TO TOP ======
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", t);
    return () => window.removeEventListener("scroll", t);
  }, []);
  if (!isVisible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed", bottom: 30, right: 30, width: 50, height: 50,
        borderRadius: "50%", background: "#e22222", color: "#fff", border: "none",
        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(226,34,34,0.4)", zIndex: 1000, transition: "all 0.3s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <FaArrowUp />
    </button>
  );
}

// ====== SCROLL REVEAL HOOK ======
function useScrollReveal<T extends HTMLElement>(threshold = 0.1): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); o.disconnect(); } },
      { threshold }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ====== HERO SECTION ======
function HeroSection() {
  const [ref, visible] = useScrollReveal(0.05);
  return (
    <>
      <style>{`
        .sm-hero-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 28px; background: transparent; color: #fff;
          border: 2px solid #fff; font-weight: 800; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase; text-decoration: none;
          cursor: pointer; font-family: 'Nunito', sans-serif;
          transition: all 0.25s ease; border-radius: 2px;
        }
        .sm-hero-btn:hover { background: #e22222 !important; border-color: #e22222 !important; }
      `}</style>
      <section
        ref={ref}
        style={{
          position: "relative", minHeight: 320, display: "flex", alignItems: "center",
          background: "linear-gradient(rgba(0,0,0,0.65) 0%, rgba(80,0,0,0.6) 100%), url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&q=80') center/cover no-repeat",
          fontFamily: "'Nunito', sans-serif", padding: "110px 48px 64px",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <p style={{
            fontSize: 11, fontWeight: 800, letterSpacing: "3px",
            textTransform: "uppercase", color: "rgba(255,255,255,0.65)",
            marginBottom: 14,
            opacity: visible ? 1 : 0, transition: "all 0.6s ease",
          }}>
            SHOPIFY SERVICES
          </p>
          <h1 style={{
            fontSize: "clamp(26px, 5vw, 52px)", fontWeight: 900, color: "#fff",
            textTransform: "uppercase", lineHeight: 1.1, margin: "0 0 18px",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.65s ease 0.1s",
          }}>
            SHOPIFY STORE<br />MANAGEMENT
          </h1>
          <p style={{
            fontSize: 14, color: "rgba(255,255,255,0.78)", marginBottom: 32, lineHeight: 1.7,
            maxWidth: 500,
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: "all 0.65s ease 0.2s",
          }}>
            Move your product catalog to Shopify easily with our Store Management services
          </p>
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.65s ease 0.3s",
          }}>
            <a href="#sm-content" className="sm-hero-btn">GET STARTED NOW</a>
          </div>
        </div>
      </section>
    </>
  );
}

// ====== CONTACT FORM (Right Sticky) ======
function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", role: "", revenue: "", service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const hc = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("https://360artdesign-backend.vercel.app/api/shopify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setSubmitMessage("Thank you! Your inquiry has been submitted successfully.");
        setForm({
          firstName: "", lastName: "", email: "", phone: "",
          company: "", role: "", revenue: "", service: "",
        });
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inp = {
    width: "100%", padding: "9px 11px",
    background: "#fff", border: "1px solid #ddd",
    color: "#333", fontSize: 13,
    fontFamily: "'Nunito', sans-serif", outline: "none",
    boxSizing: "border-box" as const, borderRadius: 2,
    transition: "border-color 0.2s ease",
  };

  const lbl = {
    fontSize: 10, fontWeight: 800 as const, letterSpacing: "1.5px",
    textTransform: "uppercase" as const, color: "rgba(255,255,255,0.75)",
    display: "block", marginBottom: 5,
  };

  const sel = {
    ...inp,
    appearance: "none" as const, cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23888'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center",
    paddingRight: 28,
  };

  // Partner logos
  const partners = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      alt: "Shopify Partners",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Ads_logo.svg/512px-Google_Ads_logo.svg.png",
      alt: "Google Ads",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mailchimp-Freddie-wink.svg/240px-Mailchimp-Freddie-wink.svg.png",
      alt: "Mailchimp",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Amazon_Advertising_logo.svg/512px-Amazon_Advertising_logo.svg.png",
      alt: "Amazon Advertising",
    },
  ];

  return (
    <>
      <style>{`
        .cf2-input:focus { border-color: #8b0000 !important; }
        .cf2-submit:hover { background: #6b0000 !important; }
      `}</style>
      <div style={{
        background: "#8b0000", padding: "28px 22px 24px",
        borderRadius: 2, position: "sticky", top: 90,
      }}>
        <h3 style={{
          fontSize: 17, fontWeight: 900, color: "#fff",
          textTransform: "uppercase", letterSpacing: 1, margin: "0 0 6px",
        }}>
          READY TO TALK?
        </h3>
        <p style={{
          fontSize: 12, color: "rgba(255,255,255,0.68)",
          lineHeight: 1.55, marginBottom: 20,
        }}>
          Get in touch with one of our specialists to get your business moving in the right direction
        </p>

        {/* Success/Error Message */}
        {submitMessage && (
          <div style={{
            marginBottom: 16,
            padding: "12px 14px",
            borderRadius: 2,
            background: submitSuccess ? "rgba(76, 175, 80, 0.2)" : "rgba(244, 67, 54, 0.2)",
            border: submitSuccess ? "1px solid rgba(76, 175, 80, 0.4)" : "1px solid rgba(244, 67, 54, 0.4)",
            color: submitSuccess ? "#4caf50" : "#f44336",
            fontSize: 12,
            fontWeight: 600,
            textAlign: "center"
          }}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div>
              <label style={lbl}>FIRST NAME</label>
              <input className="cf2-input" name="firstName" value={form.firstName} onChange={hc} style={inp} required />
            </div>
            <div>
              <label style={lbl}>LAST NAME</label>
              <input className="cf2-input" name="lastName" value={form.lastName} onChange={hc} style={inp} required />
            </div>
            <div>
              <label style={lbl}>YOUR ROLE</label>
              <select className="cf2-input" name="role" value={form.role} onChange={hc} style={sel} required>
                <option value="">Select</option>
                <option>Owner / Founder</option>
                <option>CEO / Director</option>
                <option>Manager</option>
                <option>Marketing Lead</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={lbl}>EMAIL</label>
              <input className="cf2-input" name="email" type="email" value={form.email} onChange={hc} style={inp} required />
            </div>
            <div>
              <label style={lbl}>COMPANY</label>
              <input className="cf2-input" name="company" value={form.company} onChange={hc} style={inp} required />
            </div>
            <div>
              <label style={lbl}>PHONE</label>
              <input className="cf2-input" name="phone" type="tel" value={form.phone} onChange={hc} style={inp} required />
            </div>
            <div>
              <label style={lbl}>ANNUAL REVENUE</label>
              <select className="cf2-input" name="revenue" value={form.revenue} onChange={hc} style={sel} required>
                <option value="">Select</option>
                <option>Under $100K</option>
                <option>$100K – $500K</option>
                <option>$500K – $1M</option>
                <option>$1M – $5M</option>
                <option>$5M+</option>
              </select>
            </div>
            <div>
              <label style={lbl}>SHOPIFY SERVICE</label>
              <select className="cf2-input" name="service" value={form.service} onChange={hc} style={sel} required>
                <option value="">Select</option>
                <option>Store Setup & Launch</option>
                <option>Theme Customization</option>
                <option>App Integration</option>
                <option>Store Optimization</option>
                <option>Full Management</option>
              </select>
            </div>

            <button
              className="cf2-submit"
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "11px 0", background: "#c0392b", color: "#fff",
                border: "none", fontWeight: 800, fontSize: 12,
                letterSpacing: "2px", textTransform: "uppercase",
                cursor: isSubmitting ? "not-allowed" : "pointer", fontFamily: "'Nunito', sans-serif",
                borderRadius: 2, transition: "background 0.2s ease", marginTop: 2,
                width: "100%",
              }}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>

        {/* Partner Logos */}
        <div style={{
          marginTop: 24, paddingTop: 18,
          borderTop: "1px solid rgba(255,255,255,0.18)",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {partners.map((p, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 3, padding: "8px 10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                minHeight: 42,
              }}>
                <img
                  src={p.src} alt={p.alt}
                  style={{ maxHeight: 26, maxWidth: "100%", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ====== SUB SECTION ITEMS (2-col grid) ======
const subSections = [
  {
    title: "PRODUCT RESEARCH",
    desc: "Our digital content team conducts extensive product research before we begin working with your product catalog to ensure that we gain a complete understanding of your product line, customer base, and competitors. Gaining this information will provide our team with the foundation to develop product content to boost your product content and sales.",
  },
  {
    title: "PRODUCT CONTENT OPTIMIZATION",
    desc: "Developing your Shopify store and beginning to sell your products is the first step to finding success with your brand online. To further your progress, we recommend optimizing your products for search engines. By implementing SEO best practices and optimizing meta tags, titles, and product URLs, you increase your chances of your products being discovered online.",
  },
  {
    title: "PRODUCT LISTING",
    desc: "There is no feeling more gratifying than developing your own business and seeing your products sell. We understand the work that goes into creating your own brand, which is why we are here to support you. We will work closely with your brand to make sure that each of your products is listed successfully on your new Shopify website. By listing your product selection online, you will gain the opportunity to attract a new customer audience, promote your products, and reach new sales levels.",
  },
  {
    title: "COLLECTION CREATION",
    desc: "Organizing a large product catalog into categories can feel overwhelming. Our Collection Creation services will organize your entire product selection into category collections that allow customers to easily browse and discover your products.",
  },
  {
    title: "BULK UPLOADING",
    desc: "Managing inventory and product information can be extremely time consuming. Your product catalog can be done within minutes through Shopify's Bulk Uploading feature. We can get your products online faster and with less hassle by organizing your product details online so your store is ready to go live as quickly as possible.",
  },
];

function SubCard({ title, desc, delay }: { title: string; desc: string; delay: number }) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>(0.08);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `all 0.55s ease ${delay}s`,
      }}
    >
      <h3 style={{
        fontSize: 12.5, fontWeight: 900, color: "#8b0000",
        textTransform: "uppercase", letterSpacing: "1.5px",
        margin: "0 0 10px",
      }}>
        {title}
      </h3>
      <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.85, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}

// ====== MAIN LAYOUT (Left content + Right sticky form) ======
function MainContent() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>(0.05);

  return (
    <section id="sm-content" style={{ background: "#fff", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        .smd-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 64px;
          max-width: 1160px;
          margin: 0 auto;
          padding: 68px 40px 88px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .smd-layout {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 48px 24px 64px;
          }
        }
        .smd-subgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px 48px;
          margin-top: 48px;
        }
        @media (max-width: 600px) {
          .smd-subgrid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      <div className="smd-layout">
        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Main heading + intro */}
          <div
            ref={ref}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.6s ease",
            }}
          >
            <h2 style={{
              fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 900,
              color: "#8b0000", textTransform: "uppercase",
              letterSpacing: "1.5px", margin: "0 0 20px", lineHeight: 1.2,
            }}>
              CENTRALIZED PRODUCT<br />MANAGEMENT
            </h2>
            <p style={{
              fontSize: 14, color: "#444", lineHeight: 1.92,
              margin: 0, fontWeight: 500,
            }}>
              No online store is complete without an organized, optimized, and creative product
              catalog. Our team at Commerce Rev works with your business to ensure that each of
              your products is developed to provide customers with eye-catching and informative
              product content on your new Shopify website. Our experienced digital marketing team
              will work with you to understand your product catalog and ensure that we are
              delivering the best possible services to represent your products. We will be with
              you every step of the way, working with you to edit and list your products, or
              assisting with organizing your product selection and inventory until your products
              are on your Shopify website and ready to sell.
            </p>
          </div>

          {/* Sub sections 2-col grid */}
          <div className="smd-subgrid">
            {subSections.map((s, i) => (
              <SubCard key={i} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN: sticky form ── */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

// ====== PAGE EXPORT ======
export default function StoreManagementPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <MainContent />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}