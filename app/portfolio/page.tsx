"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaTimes, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaCheckCircle, FaArrowUp } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

// ==================== NAV LINKS ====================
const navLinks = [
  { name: "Home", href: "/", active: false },
  { name: "Services", href: "/services", active: false },
  { name: "Portfolio", href: "/portfolio", active: true },
  { name: "Packages", href: "/packages", active: false },
  { name: "Combo Packages", href: "/combo-packages", active: false },
  { name: "Testimonials", href: "/testimonials", active: false },
];

// ==================== SCROLL TO TOP BUTTON ====================
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "#e22222",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        boxShadow: "0 4px 15px rgba(226,34,34,0.4)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#b71c1c")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#e22222")}
    >
      <FaArrowUp size={22} />
    </button>
  );
}

// ==================== CONSULTANCY FORM ====================
function ConsultancyForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [formData, setFormData] = useState({ fullName: "", email: "", number: "", message: "" });
  const countries = [
    { code: "us", flag: "🇺🇸", dialCode: "+1", name: "United States" },
    { code: "uk", flag: "🇬🇧", dialCode: "+44", name: "United Kingdom" },
    { code: "ca", flag: "🇨🇦", dialCode: "+1", name: "Canada" },
    { code: "au", flag: "🇦🇺", dialCode: "+61", name: "Australia" },
    { code: "in", flag: "🇮🇳", dialCode: "+91", name: "India" },
    { code: "pk", flag: "🇵🇰", dialCode: "+92", name: "Pakistan" },
    { code: "ae", flag: "🇦🇪", dialCode: "+971", name: "UAE" },
    { code: "sa", flag: "🇸🇦", dialCode: "+966", name: "Saudi Arabia" },
    { code: "de", flag: "🇩🇪", dialCode: "+49", name: "Germany" },
    { code: "fr", flag: "🇫🇷", dialCode: "+33", name: "France" },
  ];
  
  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    alert("Thank you! We will contact you soon."); 
    onClose(); 
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      <style>{`
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideInFromRight{from{transform:translateX(100%)}to{transform:translateX(0)}}
        @media (max-width: 768px) {
          .consultancy-modal { width: 90% !important; right: 5% !important; left: 5% !important; margin-top: -250px !important; border-radius: 20px !important; }
        }
      `}</style>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.7)", zIndex: 1000, animation: "fadeIn 0.3s ease" }} onClick={onClose} />
      <div className="consultancy-modal" style={{ position: "fixed", right: 0, top: "50%", marginTop: "-250px", width: "380px", height: "500px", background: "#fff", zIndex: 1001, boxShadow: "-5px 0 30px rgba(0,0,0,0.3)", animation: "slideInFromRight 0.3s ease-out", display: "flex", flexDirection: "column", borderRadius: "20px 0 0 20px", overflow: "hidden" }}>
        <div style={{ background: "#e22222", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><h3 style={{ color: "#fff", margin: 0, fontSize: "18px", fontWeight: 700 }}>Chat with us</h3><p style={{ color: "#fff", margin: "5px 0 0", fontSize: "13px", opacity: 0.9 }}>to avail 50% discount!</p></div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#fff", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}><FaTimes size={18} /></button>
        </div>
        <form onSubmit={handleSubmit} style={{ padding: "20px", flex: 1, overflowY: "auto" }}>
          <div style={{ marginBottom: "15px" }}><label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Full Name *</label><input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none" }} /></div>
          <div style={{ marginBottom: "15px" }}><label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none" }} /></div>
          <div style={{ marginBottom: "15px" }}><label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Phone Number *</label><div style={{ display: "flex", gap: "8px" }}><select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "18px", outline: "none", cursor: "pointer", background: "#fff", width: "70px" }}>{countries.map((country) => (<option key={country.code} value={country.code}>{country.flag}</option>))}</select><input type="tel" required value={formData.number} placeholder="1234567890" onChange={(e) => setFormData({ ...formData, number: e.target.value })} style={{ flex: 1, padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none" }} /></div></div>
          <div style={{ marginBottom: "20px" }}><label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Message</label><textarea value={formData.message} rows={3} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none", resize: "vertical", fontFamily: "inherit" }} /></div>
          <button type="submit" style={{ width: "100%", background: "#e22222", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>Submit</button>
        </form>
      </div>
    </>
  );
}




export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let hoverTimeout: NodeJS.Timeout;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    fetchLogo();
  }, []);

  const fetchLogo = async () => {
    try {
      const response = await fetch("https://360artdesign-backend.vercel.app/api/settings/logo");
      const result = await response.json();
      if (result.success) setLogo(result.data);
    } catch (error) {
      console.error("Error fetching logo:", error);
    } finally {
      setLoadingLogo(false);
    }
  };

const isActive = (href: string) => {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href;
};

  const dropdownServices = [
    { name: "Web Design", href: "/services" },
    { name: "Ecommerce Solutions", href: "/services" },
    { name: "Web Apps", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "Website Maintenance", href: "/services" },
    { name: "Domain And Hosting", href: "/services" },
    { name: "Branding", href: "/services" },
    { name: "Video Animation", href: "/services" },
    { name: "SEO", href: "/services" },
  ];

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setIsDropdownOpen(false), 150);
  };

  const activePillStyle: React.CSSProperties = {
    background: "#e22222",
    color: "#fff",
    borderRadius: "20px",
    padding: "7px 18px",
    fontSize: 13,
    fontWeight: 700,
    position: "relative",
    textDecoration: "none",
    display: "inline-block",
  };

  const inactiveLinkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.75)",
    borderRadius: "20px",
    padding: "7px 18px",
    fontSize: 13,
    fontWeight: 600,
    background: "transparent",
    transition: "color 0.18s",
    textDecoration: "none",
    display: "inline-block",
  };

  const renderLogo = () => {
    if (loadingLogo) {
      return (
        <div
          style={{
            width: 62, height: 62,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 8,
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      );
    }
    if (logo?.type === "image" && logo.imageUrl) {
      return (
        <img
          src={logo.imageUrl}
          alt={logo.alt || "360 ArtDesign Logo"}
          style={{ height: 105, width: "auto", maxWidth: 180, objectFit: "contain", display: "block" }}
        />
      );
    }
    return (
      <div
        style={{
          width: 55, height: 55,
          background: "radial-gradient(circle, #cc1111 20%, #7a0000 100%)",
          borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28,
          boxShadow: "0 0 16px rgba(200,20,20,0.45)",
        }}
      >
        {logo?.icon || "🐺"}
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.3}50%{opacity:0.6} }
        @keyframes dropdownFadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes mobileMenuSlide{from{transform:translateX(100%)}to{transform:translateX(0)}}
        @keyframes mobileOverlayFade{from{opacity:0}to{opacity:1}}
        .mobile-menu-open{animation:mobileMenuSlide 0.3s ease forwards !important}
        .mobile-overlay{animation:mobileOverlayFade 0.3s ease forwards !important}
        .header-nav-link:hover { color: #e22222 !important; }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .desktop-hire-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          header > div { padding: 0 20px !important; }
          header { height: 70px !important; }
        }
        @media (min-width: 1025px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu-container { display: none !important; }
        }
      `}</style>

      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? "rgba(18,4,4,0.97)" : "rgba(18,4,4,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          height: 82, transition: "all 0.3s ease",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1400, margin: "0 auto", padding: "0 36px",
            height: "100%", display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: 20,
          }}
        >
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {renderLogo()}
          </Link>

          {/* Desktop Nav */}
          <nav
            className="desktop-nav"
            style={{
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 50, padding: "5px 8px",
              display: "flex", alignItems: "center", gap: 2,
            }}
          >
            {navLinks.map((l) => {
              const active = isActive(l.href);
              if (l.name === "Services") {
                return (
                  <div
                    key={l.name}
                    ref={dropdownRef}
                    style={{ position: "relative" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      style={{
                        ...(active ? activePillStyle : inactiveLinkStyle),
                        border: "none", cursor: "pointer",
                        fontFamily: "inherit",
                        display: "flex", alignItems: "center", gap: 5,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {l.name}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div
                        style={{
                          position: "absolute", top: "100%", left: 0, marginTop: 12,
                          background: "#1a1a2e", borderRadius: 16, minWidth: 220,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          overflow: "hidden", zIndex: 1000,
                          animation: "dropdownFadeIn 0.2s ease",
                        }}
                      >
                        {dropdownServices.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            style={{
                              display: "flex", alignItems: "center",
                              justifyContent: "space-between",
                              padding: "12px 20px",
                              color: "rgba(255,255,255,0.8)",
                              fontSize: 13, fontWeight: 500,
                              textDecoration: "none", transition: "all 0.2s ease",
                              borderBottom: idx < dropdownServices.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#e22222";
                              const arrow = e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement | null;
                              if (arrow) { arrow.style.opacity = "1"; arrow.style.transform = "translateX(5px)"; }
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                              const arrow = e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement | null;
                              if (arrow) { arrow.style.opacity = "0"; arrow.style.transform = "translateX(0)"; }
                            }}
                          >
                            <span>{service.name}</span>
                            <span
                              className="dropdown-arrow"
                              style={{ opacity: 0, transition: "opacity 0.2s ease, transform 0.2s ease", fontSize: 14, color: "#e22222" }}
                            >→</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={l.name}
                  href={l.href}
                  className={active ? "" : "header-nav-link"}
                  style={active ? activePillStyle : inactiveLinkStyle}
                >
                  {l.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Hire Us */}
          <button
            className="desktop-hire-btn"
            onClick={() => router.push("/hire-us")}
          >
            Hire Us
            <span className="grey-overlay" aria-hidden="true" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer", width: 44, height: 44,
              borderRadius: 12, display: "flex",
              alignItems: "center", justifyContent: "center", color: "#fff",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-container" style={{ position: "fixed", inset: 0, zIndex: 1001, display: "flex" }}>
          <div
            className="mobile-overlay"
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className="mobile-menu-open"
            style={{
              position: "relative", marginLeft: "auto",
              width: "85%", maxWidth: 320, height: "100%",
              background: "#1a1a2e",
              boxShadow: "-10px 0 40px rgba(0,0,0,0.4)",
              display: "flex", flexDirection: "column", overflowY: "auto",
            }}
          >
            <div style={{ padding: 24, borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.1)", border: "none",
                  width: 40, height: 40, borderRadius: 10,
                  cursor: "pointer", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <FaTimes size={18} />
              </button>
            </div>
            <div style={{ flex: 1, padding: "20px 0" }}>
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: "block", padding: "14px 24px",
                      color: active ? "#e22222" : "rgba(255,255,255,0.8)",
                      fontSize: 15, fontWeight: active ? 700 : 500,
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button
                onClick={() => { router.push("/hire-us"); setIsMobileMenuOpen(false); }}
                style={{
                  margin: "20px 24px", width: "calc(100% - 48px)",
                  background: "#e22222", color: "#fff", border: "none",
                  padding: "14px", borderRadius: 10,
                  fontSize: 15, fontWeight: 700, cursor: "pointer",
                }}
              >
                Hire Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// ==================== FLOATING SIDE BUTTONS (EXACT COPY FROM HERO) ====================
function FloatingSideButtons({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <div style={{ position: "fixed", right: 0, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 12, zIndex: 999, alignItems: "flex-end" }}>
      {/* Chat Button */}
      <div style={{ position: "relative", width: 50, height: 46, overflow: "visible" }}
        onMouseEnter={(e) => {
          const t = e.currentTarget.querySelector(".chat-tooltip") as HTMLElement | null;
          const b = e.currentTarget.querySelector(".chat-button") as HTMLElement | null;
          if (t) t.style.transform = "translateX(0)";
          if (b) b.style.opacity = "0";
        }}
        onMouseLeave={(e) => {
          const t = e.currentTarget.querySelector(".chat-tooltip") as HTMLElement | null;
          const b = e.currentTarget.querySelector(".chat-button") as HTMLElement | null;
          if (t) t.style.transform = "translateX(100%)";
          if (b) b.style.opacity = "1";
        }}>
        <button className="chat-button" style={{ background: "#e22222", border: "none", cursor: "pointer", width: 50, height: 46, borderRadius: "40px 0 0 40px", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: 0, top: 0, zIndex: 2, transition: "opacity 0.3s ease-in-out" }}>
          <FaCommentDots color="#fff" size={20} />
        </button>
        <div className="chat-tooltip" style={{ position: "absolute", right: 0, top: 0, height: 46, background: "#e22222", borderRadius: "40px 0 0 40px", display: "flex", alignItems: "center", padding: "0 20px 0 20px", transform: "translateX(100%)", transition: "transform 0.3s ease-in-out", whiteSpace: "nowrap", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", zIndex: 1, gap: "8px" }}>
          <FaCommentDots color="#fff" size={20} />
          <span>Chat with us</span>
        </div>
      </div>

      {/* Phone Button */}
      <div style={{ position: "relative", width: 50, height: 46, overflow: "visible" }}
        onMouseEnter={(e) => {
          const t = e.currentTarget.querySelector(".phone-tooltip") as HTMLElement | null;
          const b = e.currentTarget.querySelector(".phone-button") as HTMLElement | null;
          if (t) t.style.transform = "translateX(0)";
          if (b) b.style.opacity = "0";
        }}
        onMouseLeave={(e) => {
          const t = e.currentTarget.querySelector(".phone-tooltip") as HTMLElement | null;
          const b = e.currentTarget.querySelector(".phone-button") as HTMLElement | null;
          if (t) t.style.transform = "translateX(100%)";
          if (b) b.style.opacity = "1";
        }}>
        <button className="phone-button" style={{ background: "#e22222", border: "none", cursor: "pointer", width: 50, height: 46, borderRadius: "40px 0 0 40px", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: 0, top: 0, zIndex: 2, transition: "opacity 0.3s ease-in-out" }}>
          <FaPhoneAlt color="#fff" size={18} />
        </button>
        <div className="phone-tooltip" style={{ position: "absolute", right: 0, top: 0, height: 46, background: "#e22222", borderRadius: "40px 0 0 40px", display: "flex", alignItems: "center", padding: "0 20px 0 20px", transform: "translateX(100%)", transition: "transform 0.3s ease-in-out", whiteSpace: "nowrap", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", zIndex: 1, gap: "8px" }}>
          <FaPhoneAlt color="#fff" size={18} />
          <span>+1 (800) 123-4567</span>
        </div>
      </div>

      {/* Consultancy Button */}
      <button onClick={onOpenForm} style={{ background: "#e22222", color: "#fff", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", width: 50, minHeight: 80, borderRadius: "20px 0 0 20px", fontFamily: "'Nunito', sans-serif", textAlign: "center", writingMode: "vertical-rl", textOrientation: "mixed", padding: "18px 0" }}>
        GET FREE CONSULTANCY
      </button>
    </div>
  );
}// ==================== PORTFOLIO HERO ====================
function PortfolioHero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes waveMove1 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes waveMove2 {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes waveMove3 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .port-hero-btn-primary:hover { background: #b71c1c !important; }
        .port-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        
        @media (max-width: 768px) {
          .portfolio-hero { padding: 60px 20px 100px !important; }
          .portfolio-hero h1 { font-size: 32px !important; }
          .portfolio-hero p { font-size: 15px !important; padding: 0 15px !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; text-align: center !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .portfolio-hero { padding: 70px 30px 120px !important; }
          .portfolio-hero h1 { font-size: 42px !important; }
        }
      `}</style>

      <section
        className="portfolio-hero"
        style={{
          paddingTop: 82,
          minHeight: "60vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Nunito', sans-serif",
          background: "#8b0000",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            opacity: 0.25,
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 40px 140px",
            width: "100%",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>Our Portfolio</span>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: 22,
              letterSpacing: -0.5,
            }}
          >
            Creative Digital <span style={{ color: "rgba(255,255,255,0.75)" }}>Agency Work</span>
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.75,
              maxWidth: 620,
              margin: "0 auto 36px",
            }}
          >
            We have a track record of creating stunning digital experiences for brands across the globe.
            Here's a glimpse of our best work.
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="port-hero-btn-primary"
              style={{
                background: "#e22222", color: "#fff", border: "none",
                padding: "14px 38px", fontWeight: 800, cursor: "pointer",
                borderRadius: 6, fontSize: 16, fontFamily: "'Nunito', sans-serif",
                transition: "background 0.3s ease",
              }}
            >
              View All Projects
            </button>
            <button
              className="port-hero-btn-outline"
              style={{
                background: "transparent", color: "#fff",
                border: "2px solid rgba(255,255,255,0.85)",
                padding: "12px 34px", fontWeight: 700, cursor: "pointer",
                borderRadius: 6, fontSize: 16, fontFamily: "'Nunito', sans-serif",
                transition: "all 0.3s ease",
              }}
            >
              Let's Work Together
            </button>
          </div>
        </div>

        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 120,
          lineHeight: 0,
          zIndex: 2,
          overflow: "hidden",
          pointerEvents: "none",
        }}>
          <div style={{
            position: "absolute", bottom: 0, left: 0,
            width: "200%", height: "100%",
            animation: "waveMove2 15s linear infinite",
          }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z" fill="rgba(255,255,255,0.12)" />
            </svg>
          </div>

          <div style={{
            position: "absolute", bottom: 0, left: 0,
            width: "200%", height: "100%",
            animation: "waveMove1 12s linear infinite",
          }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z" fill="rgba(255,255,255,0.30)" />
            </svg>
          </div>

          <div style={{
            position: "absolute", bottom: 0, left: 0,
            width: "200%", height: "120%",
            animation: "waveMove3 10s linear infinite",
          }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z" fill="#f5f7fd" />
            </svg>
          </div>
        </div>
      </section>

      <FloatingSideButtons onOpenForm={() => setIsFormOpen(true)} />
      <ConsultancyForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}

// ==================== PORTFOLIO SECTION WITH API ====================
interface ApiProjectType {
  _id: string;
  title: string;
  category: string;
  subTitle: string;
  image: { secureUrl: string };
  order: number;
  isActive: boolean;
}

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ApiProjectType | null>(null);
  const [projects, setProjects] = useState<ApiProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://360artdesign-backend.vercel.app/api/projects?limit=100');
      const result = await response.json();
      
      if (result.success) {
        setProjects(result.data);
      } else {
        setError(result.message || 'Failed to fetch projects');
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const openModal = (project: ApiProjectType) => { 
    setSelectedProject(project); 
    document.body.style.overflow = "hidden"; 
  };
  
  const closeModal = () => { 
    setSelectedProject(null); 
    document.body.style.overflow = "auto"; 
  };

  const getProjectsByCategory = (category: string) => {
    return projects.filter(p => p.category === category && p.isActive);
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'logo-branding': 'Logo & Branding',
      'website-design': 'Website Design',
      'mobile-apps': 'Mobile Apps',
    };
    return labels[category] || category;
  };

  const logoProjects = getProjectsByCategory('logo-branding');
  const websiteProjects = getProjectsByCategory('website-design');
  const mobileProjects = getProjectsByCategory('mobile-apps');

  const renderCard = (project: ApiProjectType, index: number) => {
    return (
      <div key={project._id} onClick={() => openModal(project)} className={`pf-card-wrap fade-in-up`} style={{ animationDelay: `${index * 0.07}s`, borderRadius: 12, cursor: "pointer", position: "relative" }}>
        <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", background: "#f0f0f0", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {project.image && project.image.secureUrl ? (
            <img src={project.image.secureUrl} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="pf-img" />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#e22222", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 48 }}>🎨</div>
          )}
          <div className="pf-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.38)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s", borderRadius: 12 }}>
            <button style={{ background: "rgba(0,0,0,0.82)", color: "#fff", border: "none", padding: "11px 28px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", letterSpacing: 0.5 }}>PREVIEW PROJECT →</button>
          </div>
        </div>
        <div style={{ padding: "14px 4px 6px" }}>
          <div style={{ fontSize: 11, color: "#e22222", fontWeight: 700, letterSpacing: 1.5, marginBottom: 4, textTransform: "uppercase" }}>{getCategoryLabel(project.category)}</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a" }}>{project.title}</div>
          {project.subTitle && <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{project.subTitle}</div>}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section style={{ background: "#f8f9ff", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
        <div style={{ display: "inline-block", width: 50, height: 50, border: "3px solid #e22222", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ marginTop: 20, color: "#666" }}>Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section style={{ background: "#f8f9ff", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
        <p style={{ color: "#dc2626" }}>{error}</p>
        <button onClick={() => fetchProjects()} style={{ marginTop: 20, background: "#e22222", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 6, cursor: "pointer" }}>Try Again</button>
      </section>
    );
  }

  return (
    <>
      <style>{`
        .fade-in-up{opacity:0;transform:translateY(20px);animation-name:fadeInUp;animation-duration:0.5s;animation-fill-mode:both;animation-timing-function:ease}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes modalFade{from{opacity:0}to{opacity:1}}
        @keyframes modalSlide{from{transform:translateY(36px) scale(0.97);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}
        .pf-card-wrap:hover .pf-img{transform:scale(1.06)}
        .pf-card-wrap:hover .pf-overlay{opacity:1!important}
        
        @media (max-width: 768px) {
          .portfolio-section { padding: 60px 20px 70px !important; }
          .portfolio-section h2 { font-size: 28px !important; }
          .portfolio-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .category-header { flex-wrap: wrap !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .portfolio-section { padding: 80px 30px 90px !important; }
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
        }
      `}</style>
      
      <section className="portfolio-section" style={{ background: "#f8f9ff", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3px", color: "#e22222", textTransform: "uppercase" }}>FEATURED WORK</span>
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#1a1a1a", marginBottom: 14, lineHeight: 1.2 }}>Featured <span style={{ color: "#e22222" }}>Projects</span></h2>
          <p style={{ fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Explore our latest work across websites, mobile apps, and brand identities.</p>
        </div>

        {/* Logo & Branding */}
        {logoProjects.length > 0 && (
          <div style={{ maxWidth: 1300, margin: "0 auto 60px" }}>
            <div className="category-header" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 4, height: 26, background: "#e22222", borderRadius: 2 }} />
              <span style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a", letterSpacing: 0.5 }}>Logo & Branding</span>
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
            </div>
            <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
              {logoProjects.map((project, index) => renderCard(project, index))}
            </div>
          </div>
        )}

        {/* Website Design */}
        {websiteProjects.length > 0 && (
          <div style={{ maxWidth: 1300, margin: "0 auto 60px" }}>
            <div className="category-header" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 4, height: 26, background: "#e22222", borderRadius: 2 }} />
              <span style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a", letterSpacing: 0.5 }}>Website Design</span>
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
            </div>
            <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
              {websiteProjects.map((project, index) => renderCard(project, index))}
            </div>
          </div>
        )}

        {/* Mobile Apps */}
        {mobileProjects.length > 0 && (
          <div style={{ maxWidth: 1300, margin: "0 auto 60px" }}>
            <div className="category-header" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 4, height: 26, background: "#e22222", borderRadius: 2 }} />
              <span style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a", letterSpacing: 0.5 }}>Mobile Apps</span>
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
            </div>
            <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
              {mobileProjects.map((project, index) => renderCard(project, index))}
            </div>
          </div>
        )}

        {projects.length === 0 && !loading && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <p style={{ color: "#666", fontSize: 16 }}>No projects found. Please add some projects to the database.</p>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedProject && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 10000, animation: "modalFade 0.25s ease", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={closeModal}>
          <div style={{ background: "#fff", borderRadius: 20, width: "92%", maxWidth: 1000, maxHeight: "88vh", display: "flex", flexDirection: "column", overflow: "hidden", animation: "modalSlide 0.3s ease", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", background: "#111", color: "#fff", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ background: "#e22222", width: 38, height: 38, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>📱</div>
                <div><h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{selectedProject.title}</h3><p style={{ margin: "2px 0 0", fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{getCategoryLabel(selectedProject.category)}</p></div>
              </div>
              <button onClick={closeModal} style={{ background: "rgba(255,255,255,0.1)", border: "none", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 17, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", background: "#f8f9ff", display: "flex", flexDirection: "column", alignItems: "center", padding: "36px 24px", gap: 28 }}>
              <div style={{ width: "100%", maxWidth: 860, borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 36px rgba(0,0,0,0.16)" }}>
                <div style={{ background: "#2b2b2b", padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", gap: 5 }}>{["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }}/>)}</div>
                  <div style={{ flex: 1, background: "#3d3d3d", borderRadius: 6, padding: "5px 12px", fontSize: 12, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 6 }}>📱 {selectedProject.title}</div>
                </div>
                {selectedProject.image && selectedProject.image.secureUrl ? (
                  <img src={selectedProject.image.secureUrl} alt={selectedProject.title} style={{ width: "100%", height: "auto", maxHeight: 500, objectFit: "contain", background: "#f5f5f5" }} />
                ) : null}
              </div>
              {selectedProject.subTitle && (
                <p style={{ fontSize: 14, color: "#666", textAlign: "center", maxWidth: 600 }}>{selectedProject.subTitle}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ==================== TESTIMONIALS SECTION WITH API ====================
interface TestimonialType {
  _id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
  project: string;
  date: string;
  order: number;
  isActive: boolean;
}

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalReviews: 0, averageRating: 0 });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://360artdesign-backend.vercel.app/api/testimonials');
      const result = await response.json();
      
      if (result.success) {
        const activeTestimonials = result.data.filter((t: TestimonialType) => t.isActive);
        setTestimonials(activeTestimonials);
        
        if (result.stats) {
          setStats({
            totalReviews: result.stats.totalReviews,
            averageRating: result.stats.averageRating
          });
        }
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextTestimonial = useCallback(() => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const prevTestimonial = () => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [nextTestimonial, testimonials.length]);

  if (loading) {
    return (
      <section style={{ background: "linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)", padding: "100px 40px 120px", fontFamily: "'Inter', 'Nunito', sans-serif", textAlign: "center" }}>
        <div style={{ display: "inline-block", width: 50, height: 50, border: "3px solid #e22222", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ marginTop: 20, color: "#666" }}>Loading testimonials...</p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section style={{ background: "linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)", padding: "100px 40px 120px", fontFamily: "'Inter', 'Nunito', sans-serif", textAlign: "center" }}>
        <p style={{ color: "#666" }}>No testimonials available yet.</p>
      </section>
    );
  }

  const t = testimonials[activeIndex];

  return (
    <section style={{ background: "linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)", padding: "100px 40px 120px", fontFamily: "'Inter', 'Nunito', sans-serif", position: "relative", overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          .testimonials-section { padding: 60px 20px 80px !important; }
          .testimonials-section h2 { font-size: 28px !important; }
          .testimonial-card { padding: 30px 20px !important; }
          .testimonial-text { font-size: 18px !important; }
          .testimonial-quote { font-size: 60px !important; top: 20px !important; left: 20px !important; }
          .testimonial-nav-buttons { padding: 15px 20px 25px !important; flex-wrap: wrap !important; gap: 15px !important; }
          .testimonial-author { flex-wrap: wrap !important; justify-content: center !important; text-align: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-section { padding: 80px 30px 100px !important; }
          .testimonial-card { padding: 40px 30px !important; }
        }
      `}</style>
      <div className="testimonials-section">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "400px", background: "radial-gradient(circle at 0% 0%, rgba(226,34,34,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "500px", height: "500px", background: "radial-gradient(circle, rgba(226,34,34,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ width: 50, height: 2, background: "#e22222" }} />
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "#e22222", textTransform: "uppercase" }}>Testimonials</span>
              <span style={{ width: 50, height: 2, background: "#e22222" }} />
            </div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#1a1a2e", marginBottom: 16, lineHeight: 1.2 }}>
              What Our <span style={{ color: "#e22222" }}>Clients Say</span>
            </h2>
            <p style={{ fontSize: 18, color: "#666", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
              Don't just take our word for it — hear from businesses we've helped grow
            </p>
          </div>

          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div className="testimonial-card" style={{ background: "#fff", borderRadius: 32, boxShadow: "0 30px 60px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.04)", overflow: "hidden", transition: "all 0.3s ease", position: "relative" }}>
              <div className="testimonial-quote" style={{ position: "absolute", top: 40, left: 40, fontSize: 120, fontFamily: "Georgia, serif", color: "#e22222", opacity: 0.12, lineHeight: 1, pointerEvents: "none" }}>"</div>
              <div style={{ padding: "60px 60px 50px" }}>
                <div style={{ marginBottom: 28, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill={i < t.rating ? "#f59e0b" : "#e0e0e0"} />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", lineHeight: 1.45, color: "#1a1a2e", fontWeight: 500, marginBottom: 40, fontStyle: "italic", position: "relative", zIndex: 1 }}>"{t.text}"</p>
                <div className="testimonial-author" style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 30, flexWrap: "wrap" }}>
                  <div style={{ width: 70, height: 70, borderRadius: "50%", background: "linear-gradient(135deg, #e22222, #b71c1c)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 24, boxShadow: "0 8px 20px rgba(226,34,34,0.3)" }}>
                    {t.avatar || t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>{t.name}</h4>
                    <p style={{ fontSize: 14, color: "#888", margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-nav-buttons" style={{ padding: "20px 60px 40px", borderTop: "1px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fafaff", flexWrap: "wrap" }}>
                <button onClick={prevTestimonial} style={{ width: 48, height: 48, borderRadius: "50%", background: "#fff", border: "1px solid #e0e0e0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#e22222"; e.currentTarget.style.borderColor = "#e22222"; const a = e.currentTarget.querySelector("svg"); if (a) (a as SVGElement).style.stroke = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e0e0e0"; const a = e.currentTarget.querySelector("svg"); if (a) (a as SVGElement).style.stroke = "#333"; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><path d="M15 18L9 12L15 6" /></svg>
                </button>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActiveIndex(i)} style={{ width: i === activeIndex ? 32 : 10, height: 10, borderRadius: 5, background: i === activeIndex ? "#e22222" : "#ddd", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
                  ))}
                </div>
                <button onClick={nextTestimonial} style={{ width: 48, height: 48, borderRadius: "50%", background: "#fff", border: "1px solid #e0e0e0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#e22222"; e.currentTarget.style.borderColor = "#e22222"; const a = e.currentTarget.querySelector("svg"); if (a) (a as SVGElement).style.stroke = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e0e0e0"; const a = e.currentTarget.querySelector("svg"); if (a) (a as SVGElement).style.stroke = "#333"; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><path d="M9 18L15 12L9 6" /></svg>
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 60, display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="#e22222" />
              </svg>
              <span style={{ fontSize: 14, color: "#666" }}>{stats.averageRating} Rating ({stats.totalReviews}+ Reviews)</span>
            </div>
            <div style={{ width: 1, height: 20, background: "#ddd" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" fill="#e22222" />
              </svg>
              <span style={{ fontSize: 14, color: "#666" }}>Trusted by 1000+ Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ==================== FOOTER SECTION (Responsive with API Logo) ====================
function FooterSection() {
  const currentYear = new Date().getFullYear();
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);

  useEffect(() => {
    fetchLogo();
  }, []);

  const fetchLogo = async () => {
    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/settings/logo');
      const result = await response.json();
      if (result.success) {
        setLogo(result.data);
      }
    } catch (error) {
      console.error('Error fetching logo:', error);
    } finally {
      setLoadingLogo(false);
    }
  };

  const renderFooterLogo = () => {
    if (loadingLogo) {
      return (
        <div
          style={{
            width: 50,
            height: 50,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 12,
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      );
    }

    // Image logo from API
    if (logo?.type === 'image' && logo.imageUrl) {
      return (
        <img
          src={logo.imageUrl}
          alt={logo.alt || "360 ArtDesign Logo"}
          style={{
            height: 50,
            width: 'auto',
            maxWidth: 150,
            objectFit: "contain",
            display: "block",
          }}
        />
      );
    }

    // Fallback: static wolf icon
    return (
      <div
        style={{
          width: 50,
          height: 50,
          background: "linear-gradient(135deg, #e22222, #b71c1c)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
        }}
      >
        🐺
      </div>
    );
  };

  return (
    <footer style={{ background: "#0a0a0a", color: "#fff", fontFamily: "'Inter', 'Nunito', sans-serif", position: "relative" }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @media (max-width: 768px) {
          .footer-container { padding: 50px 20px 40px !important; }
          .newsletter-box { flex-direction: column !important; text-align: center !important; padding: 30px 20px !important; margin-bottom: 40px !important; }
          .newsletter-box input { width: 100% !important; max-width: 280px !important; }
          .newsletter-box button { width: 100% !important; max-width: 280px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; gap: 15px !important; }
          .footer-social { justify-content: center !important; }
          .footer-logo { justify-content: center !important; }
          .footer-contact { justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .newsletter-box { flex-direction: column !important; text-align: center !important; gap: 20px !important; }
        }
      `}</style>

      <div style={{ height: 3, background: "linear-gradient(90deg, #e22222, #ff6b6b, #e22222)", width: "100%" }} />
      <div className="footer-container" style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 40px 50px" }}>
        <div
          className="newsletter-box"
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            borderRadius: 24,
            padding: "50px 60px",
            marginBottom: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 30,
          }}
        >
          <div>
            <h3 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, marginBottom: 12 }}>Subscribe to Our Newsletter</h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)" }}>Get the latest updates on new products and upcoming sales</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <input type="email" placeholder="Enter your email" style={{ padding: "14px 24px", borderRadius: 12, border: "none", width: 280, fontSize: 14, outline: "none" }} />
            <button style={{ background: "#e22222", color: "#fff", border: "none", padding: "14px 32px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#b71c1c"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#e22222"}>Subscribe →</button>
          </div>
        </div>

        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 50, marginBottom: 60 }}>
          <div>
            <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, justifyContent: "flex-start" }}>
              {renderFooterLogo()}
              <div>
                <div style={{ fontWeight: 800, fontSize: 20 }}>360 ARTDESIGN</div>
                <div style={{ fontSize: 11, color: "#e22222", letterSpacing: "2px", fontWeight: 600 }}>Digital Agency</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 24 }}>We are a creative digital agency focused on crafting stunning websites, powerful brands, and growth-driven marketing strategies.</p>
            <div className="footer-social" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                <div key={social} style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#e22222"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Our Services</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Website Design & Development", "E-commerce Solutions", "Mobile App Development", "SEO & Digital Marketing", "Branding & Identity", "Video Animation"].map((s) => (
                <li key={s} style={{ marginBottom: 14, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer" }} onMouseEnter={(e) => e.currentTarget.style.color = "#e22222"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["About Us", "Portfolio", "Packages", "Testimonials", "Blog", "Contact Us"].map((s) => (
                <li key={s} style={{ marginBottom: 14, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer" }} onMouseEnter={(e) => e.currentTarget.style.color = "#e22222"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Get In Touch</h4>
            <div className="footer-contact" style={{ marginBottom: 18, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg><span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>1-877-280-0258</span></div>
            <div className="footer-contact" style={{ marginBottom: 18, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg><span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>support@360artdesign.com</span></div>
            <div className="footer-contact" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg><span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Newark, California, 94560, US</span></div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>© Copyrights {currentYear} | All Rights Reserved 360 ARTDESIGN</p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((link) => (
              <span key={link} style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", cursor: "pointer" }} onMouseEnter={(e) => e.currentTarget.style.color = "#e22222"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>{link}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
// ==================== PORTFOLIO PAGE MAIN ====================
export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <PortfolioSection />
      <TestimonialsSection />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}