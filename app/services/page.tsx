"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaTimes, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaCheckCircle, FaCommentDots } from "react-icons/fa";
import { useRouter } from "next/navigation";
import React from "react";

// ==================== NAV LINKS ====================
const navLinks = [
  { name: "Home", href: "/", active: false },
  { name: "Services", href: "/services", active: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Packages", href: "/packages" },
  { name: "Combo Packages", href: "/combo-packages" },
  { name: "Testimonials", href: "/testimonials" },
];

// ==================== CONSULTANCY FORM MODAL ====================
function ConsultancyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ fullName: "", email: "", number: "", message: "" });

  const countries = [
    { code: "us", flag: "🇺🇸", dialCode: "+1" }, { code: "uk", flag: "🇬🇧", dialCode: "+44" },
    { code: "ca", flag: "🇨🇦", dialCode: "+1" }, { code: "au", flag: "🇦🇺", dialCode: "+61" },
    { code: "in", flag: "🇮🇳", dialCode: "+91" }, { code: "pk", flag: "🇵🇰", dialCode: "+92" },
    { code: "ae", flag: "🇦🇪", dialCode: "+971" }, { code: "sa", flag: "🇸🇦", dialCode: "+966" },
    { code: "de", flag: "🇩🇪", dialCode: "+49" }, { code: "fr", flag: "🇫🇷", dialCode: "+33" },
  ];

  const getDialCode = () => countries.find(c => c.code === selectedCountry)?.dialCode || "+1";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: formData.fullName, email: formData.email, phoneNumber: `${getDialCode()} ${formData.number}`, message: formData.message || "" }),
      });
      const data = await response.json();
      if (response.ok) { alert("Thank you! We will contact you soon."); setFormData({ fullName: "", email: "", number: "", message: "" }); setSelectedCountry("us"); onClose(); }
      else setError(data.message || "Something went wrong. Please try again.");
    } catch { setError("Network error. Please check your connection and try again."); }
    finally { setIsLoading(false); }
  };

  const handleInputChange = (field: string, value: string) => { setFormData({ ...formData, [field]: value }); if (error) setError(""); };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideInFromRight{from{transform:translateX(100%)}to{transform:translateX(0)}}
        @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @media (max-width: 768px) {
          .consultancy-modal { width: 90% !important; right: 5% !important; left: 5% !important; margin-top: -250px !important; border-radius: 20px !important; }
        }
      `}</style>
      <div style={{ position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.7)",zIndex:1000,animation:"fadeIn 0.3s ease" }} onClick={onClose} />
      <div className="consultancy-modal" style={{ position:"fixed",right:0,top:"50%",marginTop:"-280px",width:"400px",maxHeight:"560px",background:"#fff",zIndex:1001,boxShadow:"-5px 0 30px rgba(0,0,0,0.3)",animation:"slideInFromRight 0.3s ease-out",display:"flex",flexDirection:"column",borderRadius:"20px 0 0 20px",overflow:"hidden" }}>
        <div style={{ background:"#e22222",padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <div><h3 style={{ color:"#fff",margin:0,fontSize:"18px",fontWeight:700 }}>Chat with us</h3><p style={{ color:"#fff",margin:"5px 0 0",fontSize:"13px",opacity:0.9 }}>to avail 50% discount!</p></div>
          <button onClick={onClose} style={{ background:"transparent",border:"none",cursor:"pointer",color:"#fff",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px" }}><FaTimes size={18} /></button>
        </div>
        <form onSubmit={handleSubmit} style={{ padding:"20px",flex:1,overflowY:"auto" }}>
          {error && <div style={{ background:"#fee2e2",color:"#dc2626",padding:"10px",borderRadius:"8px",marginBottom:"15px",fontSize:"13px",textAlign:"center" }}>{error}</div>}
          {[{label:"Full Name *",field:"fullName",type:"text"},{label:"Email *",field:"email",type:"email"}].map(({label,field,type}) => (
            <div key={field} style={{ marginBottom:"15px" }}>
              <label style={{ display:"block",marginBottom:"6px",fontWeight:600,color:"#333",fontSize:"13px" }}>{label}</label>
              <input type={type} required value={(formData as Record<string,string>)[field]} onChange={e => handleInputChange(field,e.target.value)} disabled={isLoading}
                style={{ width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",outline:"none" }}
                onFocus={e => e.target.style.borderColor="#e22222"} onBlur={e => e.target.style.borderColor="#ddd"} />
            </div>
          ))}
          <div style={{ marginBottom:"15px" }}>
            <label style={{ display:"block",marginBottom:"6px",fontWeight:600,color:"#333",fontSize:"13px" }}>Phone Number *</label>
            <div style={{ display:"flex",gap:"8px" }}>
              <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} disabled={isLoading} style={{ padding:"10px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"18px",outline:"none",cursor:"pointer",background:"#fff",width:"70px" }}>
                {countries.map(c => <option key={c.code} value={c.code}>{c.flag}</option>)}
              </select>
              <input type="tel" required value={formData.number} placeholder="1234567890" onChange={e => handleInputChange("number",e.target.value)} disabled={isLoading}
                style={{ flex:1,padding:"10px 12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",outline:"none" }}
                onFocus={e => e.target.style.borderColor="#e22222"} onBlur={e => e.target.style.borderColor="#ddd"} />
            </div>
          </div>
          <div style={{ marginBottom:"20px" }}>
            <label style={{ display:"block",marginBottom:"6px",fontWeight:600,color:"#333",fontSize:"13px" }}>Message</label>
            <textarea value={formData.message} rows={3} onChange={e => handleInputChange("message",e.target.value)} disabled={isLoading} placeholder="Tell us about your project..."
              style={{ width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",outline:"none",resize:"vertical",fontFamily:"inherit" }}
              onFocus={e => e.target.style.borderColor="#e22222"} onBlur={e => e.target.style.borderColor="#ddd"} />
          </div>
          <button type="submit" disabled={isLoading} style={{ width:"100%",background:"#e22222",color:"#fff",border:"none",padding:"12px",borderRadius:"8px",fontSize:"15px",fontWeight:700,cursor:isLoading?"not-allowed":"pointer",opacity:isLoading?0.7:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"10px" }}
            onMouseEnter={e => { if(!isLoading) e.currentTarget.style.background="#b71c1c"; }} onMouseLeave={e => { if(!isLoading) e.currentTarget.style.background="#e22222"; }}>
            {isLoading ? (<><span style={{ display:"inline-block",width:"16px",height:"16px",border:"2px solid #fff",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 0.8s linear infinite" }} />Submitting...</>) : "Submit"}
          </button>
        </form>
      </div>
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
}
export function Header() {
  const router = useRouter();
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
    hoverTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const activePillStyle: React.CSSProperties = {
    background: "#e22222",
    color: "#fff",
    borderRadius: "20px",
    padding: "7px 18px",
    fontSize: 13,
    fontWeight: 700,
    position: "relative",
  };

  const inactiveLinkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.75)",
    borderRadius: "20px",
    padding: "7px 18px",
    fontSize: 13,
    fontWeight: 600,
    background: "transparent",
    transition: "color 0.18s",
  };

  const renderLogo = () => {
    if (loadingLogo) {
      return (
        <div
          style={{
            width: 62,
            height: 62,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 8,
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      );
    }

    if (logo?.type === 'image' && logo.imageUrl) {
      return (
        <img
          src={logo.imageUrl}
          alt={logo.alt || "360 ArtDesign Logo"}
          style={{
            height: 105,
            width: 'auto',
            maxWidth: 180,
            objectFit: "contain",
            display: "block",
          }}
        />
      );
    }

    return (
      <div
        style={{
          width: 55,
          height: 55,
          background: "radial-gradient(circle, #cc1111 20%, #7a0000 100%)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileMenuSlide {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes mobileOverlayFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .mobile-menu-open {
          animation: mobileMenuSlide 0.3s ease forwards !important;
        }
        .mobile-overlay {
          animation: mobileOverlayFade 0.3s ease forwards !important;
        }
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
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(18,4,4,0.97)" : "rgba(18,4,4,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          height: 82,
          transition: "all 0.3s ease",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 36px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}
          >
            {renderLogo()}
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav"
            style={{
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 50,
              padding: "5px 8px",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {navLinks.map((l) => {
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
                        ...(l.active ? activePillStyle : inactiveLinkStyle),
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {l.name}
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          marginTop: 12,
                          background: "#1a1a2e",
                          borderRadius: 16,
                          minWidth: 220,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          overflow: "hidden",
                          zIndex: 1000,
                          animation: "dropdownFadeIn 0.2s ease",
                        }}
                      >
                        {dropdownServices.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "12px 20px",
                              color: "rgba(255,255,255,0.8)",
                              fontSize: 13,
                              fontWeight: 500,
                              textDecoration: "none",
                              transition: "all 0.2s ease",
                              borderBottom:
                                idx < dropdownServices.length - 1
                                  ? "1px solid rgba(255,255,255,0.05)"
                                  : "none",
                              background: "transparent",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#e22222";
                              const arrow = e.currentTarget.querySelector(".dropdown-arrow");
                              if (arrow) {
                                (arrow as HTMLElement).style.opacity = "1";
                                (arrow as HTMLElement).style.transform = "translateX(5px)";
                              }
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                              const arrow = e.currentTarget.querySelector(".dropdown-arrow");
                              if (arrow) {
                                (arrow as HTMLElement).style.opacity = "0";
                                (arrow as HTMLElement).style.transform = "translateX(0)";
                              }
                            }}
                          >
                            <span>{service.name}</span>
                            <span
                              className="dropdown-arrow"
                              style={{
                                opacity: 0,
                                transition: "opacity 0.2s ease, transform 0.2s ease",
                                fontSize: 14,
                                color: "#e22222",
                              }}
                            >
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return l.active ? (
                <Link
                  key={l.name}
                  href={l.href}
                  style={{ textDecoration: "none", ...activePillStyle }}
                >
                  {l.name}
                </Link>
              ) : (
                <Link
                  key={l.name}
                  href={l.href}
                  style={{ textDecoration: "none", ...inactiveLinkStyle }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e22222")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >
                  {l.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Hire Us Button */}
          <button
            className="desktop-hire-btn"
            onClick={() => router.push('/hire-us')}
            style={{
              background: "#e22222",
              color: "#fff",
              border: "none",
              flexShrink: 0,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 14,
              fontWeight: 800,
              padding: "10px 28px",
              borderRadius: "8px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#b71c1c";
              const overlay = e.currentTarget.querySelector(".grey-overlay") as HTMLElement | null;
              if (overlay) overlay.style.transform = "scale(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#e22222";
              const overlay = e.currentTarget.querySelector(".grey-overlay") as HTMLElement | null;
              if (overlay) overlay.style.transform = "scale(0)";
            }}
          >
            Hire Us
            <span
              className="grey-overlay"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                background: "#888",
                transform: "scale(0)",
                transformOrigin: "top right",
                transition: "transform 0.5s ease-in-out",
                borderRadius: "8px",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
          </button>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)} style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "pointer",
            width: 44,
            height: 44,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff"
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="mobile-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }} onClick={() => setIsMobileMenuOpen(false)} />
          <div className="mobile-menu-open" style={{ position: "relative", marginLeft: "auto", width: "85%", maxWidth: 320, height: "100%", background: "#1a1a2e", boxShadow: "-10px 0 40px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column", overflowY: "auto" }}>
            <div style={{ padding: 24, borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>Menu</div>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: "rgba(255,255,255,0.1)", border: "none", width: 40, height: 40, borderRadius: 10, cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaTimes size={18} />
              </button>
            </div>
            <div style={{ flex: 1, padding: "20px 0" }}>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ display: "block", padding: "14px 24px", color: link.active ? "#e22222" : "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: link.active ? 700 : 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  {link.name}
                </Link>
              ))}
              <button onClick={() => { router.push('/hire-us'); setIsMobileMenuOpen(false); }} style={{ margin: "20px 24px", width: "calc(100% - 48px)", background: "#e22222", color: "#fff", border: "none", padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                Hire Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ==================== SERVICES HERO ====================
function ServicesHero() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [countryCode, setCountryCode] = useState("+92");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const countries = [
    { code: "+1", flag: "🇺🇸", name: "US" },
    { code: "+44", flag: "🇬🇧", name: "UK" },
    { code: "+92", flag: "🇵🇰", name: "PK" },
    { code: "+91", flag: "🇮🇳", name: "IN" },
    { code: "+971", flag: "🇦🇪", name: "AE" },
    { code: "+61", flag: "🇦🇺", name: "AU" },
  ];

  const checkItems = [
    "Website Design & Development",
    "Web Application Development",
    "Website Maintenance",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields");
      return;
    }
    
    if (!isChecked) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    const fullPhoneNumber = `${countryCode} ${formData.phone}`;

    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phoneNumber: fullPhoneNumber,
          message: formData.message || "",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Thank you! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCountryCode("+92");
        setIsChecked(false);
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes heroFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes formSlideIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .hero-content-anim { animation: heroFadeUp 0.8s ease both; }
        .hero-form-anim { animation: formSlideIn 0.9s ease 0.2s both; }
        .hero-btn-primary:hover { background: #b71c1c !important; }
        .hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .form-input-hero:focus { border-color: #e22222 !important; outline: none; box-shadow: 0 0 0 3px rgba(226,34,34,0.1); }
        .submit-btn-hero:hover { background: #b71c1c !important; }
        .submit-btn-hero:disabled { opacity: 0.7; cursor: not-allowed; }
        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 0.8s linear infinite; margin-right: 8px; }
        
        @media (max-width: 768px) {
          .hero-container { flex-direction: column !important; padding: 60px 20px 100px !important; text-align: center !important; }
          .hero-content { width: 100% !important; max-width: 100% !important; margin-bottom: 40px !important; }
          .hero-content p { margin-left: auto !important; margin-right: auto !important; }
          .hero-check-items { align-items: center !important; }
          .hero-buttons { justify-content: center !important; }
          .hero-form { width: 100% !important; max-width: 100% !important; }
          .hero-form form { padding: 20px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-container { flex-direction: column !important; text-align: center !important; padding: 60px 30px 100px !important; }
          .hero-content { width: 100% !important; max-width: 100% !important; margin-bottom: 50px !important; }
          .hero-check-items { align-items: center !important; }
          .hero-form { width: 100% !important; max-width: 500px !important; margin: 0 auto !important; }
        }
      `}</style>

      <section
        style={{
          paddingTop: 82,
          minHeight: "100vh",
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

        <div className="hero-container"
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            padding: "80px 40px 140px",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 50,
            position: "relative",
            zIndex: 10,
          }}
        >
          <div className="hero-content" style={{ flex: "0 0 50%", maxWidth: 580, marginTop: 0 }}>
            <h1
              style={{
                fontSize: "clamp(36px, 4.8vw, 62px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.12,
                marginBottom: 22,
                letterSpacing: -0.5,
              }}
            >
              Custom Website Design<br />
              &amp; Development Services
            </h1>

            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.75,
                marginBottom: 30,
                maxWidth: 500,
              }}
            >
              We offer a wide range of web development services that will help you put your business on the map and start making a profit.
            </p>

            <div className="hero-check-items" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 38 }}>
              {checkItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 20, color: "#fff", fontWeight: 400 }}>–</span>
                  <span style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="hero-buttons" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                className="hero-btn-primary"
                style={{
                  background: "#e22222", color: "#fff", border: "none",
                  padding: "14px 38px", fontWeight: 800, cursor: "pointer",
                  borderRadius: 6, fontSize: 16, fontFamily: "'Nunito', sans-serif",
                  transition: "background 0.3s ease",
                }}
              >
                Let's Get Started
              </button>
              <button
                className="hero-btn-outline"
                style={{
                  background: "transparent", color: "#fff",
                  border: "2px solid rgba(255,255,255,0.85)",
                  padding: "12px 34px", fontWeight: 700, cursor: "pointer",
                  borderRadius: 6, fontSize: 16, fontFamily: "'Nunito', sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                Talk To Us!
              </button>
            </div>
          </div>

          <div className="hero-form" style={{ flex: "0 0 38%", maxWidth: 420 }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                padding: "28px 28px 32px",
              }}
            >
              <h3 style={{ textAlign: "center", margin: "0 0 6px", fontSize: 22, fontWeight: 900, color: "#111", lineHeight: 1.3 }}>
                GET FREE CONSULTANCY
              </h3>
              <p style={{ textAlign: "center", margin: "0 0 20px", fontSize: 13, color: "#888" }}>
                Fill out the form below to get started
              </p>

              {error && (
                <div style={{ background: "#fee2e2", color: "#dc2626", padding: "10px", borderRadius: 8, marginBottom: 15, fontSize: 12, textAlign: "center" }}>
                  {error}
                </div>
              )}

              {success && (
                <div style={{ background: "#dcfce7", color: "#16a34a", padding: "10px", borderRadius: 8, marginBottom: 15, fontSize: 12, textAlign: "center" }}>
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 14 }}>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="form-input-hero"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1px solid #d0d0d0", borderRadius: 8,
                      fontSize: 14, fontFamily: "'Nunito', sans-serif",
                      boxSizing: "border-box" as const,
                    }}
                  />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="form-input-hero"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1px solid #d0d0d0", borderRadius: 8,
                      fontSize: 14, fontFamily: "'Nunito', sans-serif",
                      boxSizing: "border-box" as const,
                    }}
                  />
                </div>

                <div style={{ marginBottom: 14, display: "flex", gap: 10 }}>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{
                      padding: "12px 8px", border: "1px solid #d0d0d0",
                      borderRadius: 8, fontSize: 13, fontFamily: "'Nunito', sans-serif",
                      background: "#fff", cursor: "pointer", minWidth: 95,
                    }}
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    style={{
                      flex: 1, padding: "12px 14px",
                      border: "1px solid #d0d0d0", borderRadius: 8,
                      fontSize: 14, fontFamily: "'Nunito', sans-serif",
                    }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <textarea
                    placeholder="Message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1px solid #d0d0d0", borderRadius: 8,
                      fontSize: 14, fontFamily: "'Nunito', sans-serif",
                      resize: "vertical", boxSizing: "border-box" as const,
                    }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 20 }}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    style={{
                      marginTop: 2, width: 16, height: 16,
                      cursor: "pointer", accentColor: "#e22222", flexShrink: 0,
                    }}
                  />
                  <label style={{ fontSize: 10, color: "#777", lineHeight: 1.4 }}>
                    Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL{" "}
                    <span style={{ color: "#e22222", cursor: "pointer" }}>(PRIVACY POLICY &amp; TERM &amp; CONDITIONS)</span>
                    {" "}- Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to stop SMS &amp; EMAIL
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn-hero"
                  disabled={isLoading}
                  style={{
                    width: "100%", background: "#e22222", color: "#fff",
                    border: "none", padding: "14px", borderRadius: 8,
                    fontSize: 15, fontWeight: 800, cursor: "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    transition: "background 0.3s ease",
                    opacity: isLoading ? 0.7 : 1,
                  }}
                >
                  {isLoading ? (
                    <><span className="spinner"></span>Submitting...</>
                  ) : (
                    "Get Free Consultancy"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 280,
          lineHeight: 0,
          zIndex: 2,
          overflow: "hidden",
          pointerEvents: "none",
        }}>
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
              <path d="M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z" fill="#f5f7fd" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

// ==================== SERVICES LIST SECTION ====================
function ServicesList() {
  const servicesData = [
    {
      id: 1,
      tag: "Web Design",
      title: "Web Design & Development",
      description: "Get stunning, responsive websites that convert visitors into customers. Our expert designers create custom websites tailored to your brand identity and business goals. From simple landing pages to complex e-commerce platforms, we deliver pixel-perfect designs with seamless functionality.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      color: "#e22222",
    },
    {
      id: 2,
      tag: "E-Commerce",
      title: "Ecommerce Solutions",
      description: "Launch your online store with powerful ecommerce platforms like Shopify, WooCommerce, and Magento. We build secure, scalable, and user-friendly online stores that drive sales and provide exceptional customer experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      color: "#1a4fd6",
    },
    {
      id: 3,
      tag: "Mobile Apps",
      title: "Mobile App Development",
      description: "Reach your customers on the go with native and cross-platform mobile apps. We develop high-performance iOS and Android apps that are intuitive, feature-rich, and optimized for the best user experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      color: "#e22222",
    },
    {
      id: 4,
      tag: "SEO",
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility and drive targeted traffic with our SEO and digital marketing services. We use data-driven strategies to improve your search rankings, increase brand awareness, and generate quality leads.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
      color: "#1a4fd6",
    },
    {
      id: 5,
      tag: "Branding",
      title: "Branding & Identity",
      description: "Create a memorable brand identity that stands out from the competition. Our branding experts help you define your brand voice, design professional logos, and create cohesive brand guidelines for all your marketing materials.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
      color: "#e22222",
    },
    {
      id: 6,
      tag: "Hosting",
      title: "Web Hosting that scales from easy to expert",
      description: "Whether you are looking for a personal website hosting plan or a business website hosting plan, 360 ArtDesign is the perfect solution for you. Our powerful website hosting services will not only help you achieve your overall website goals, but will also provide you with the confidence you need.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      color: "#1a4fd6",
    },
  ];

  return (
    <section style={{ background: "#f5f7fd", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        .service-img { transition: transform 0.5s ease; }
        .service-img-wrap:hover .service-img { transform: scale(1.04); }
        .service-get-btn:hover { background: #b71c1c !important; transform: translateY(-2px); }
        .service-talk-btn:hover { border-color: #e22222 !important; color: #e22222 !important; }
        
        @media (max-width: 768px) {
          .services-list-section { padding: 60px 20px !important; }
          .service-item { flex-direction: column !important; text-align: center !important; margin-bottom: 60px !important; }
          .service-image { width: 100% !important; margin-bottom: 30px !important; }
          .service-content { width: 100% !important; text-align: center !important; }
          .service-badge { align-self: center !important; }
          .service-divider { justify-content: center !important; }
          .service-buttons { justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .service-item { gap: 40px !important; }
          .service-image { flex: 0 0 45% !important; }
        }
      `}</style>

      <div className="services-list-section" style={{ textAlign: "center", marginBottom: 70 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 18 }}>
          <div style={{ width: 60, height: 2, background: "linear-gradient(to right, transparent, #e22222)" }} />
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3.5px", color: "#e22222", textTransform: "uppercase" as const }}>What We Offer</span>
          <div style={{ width: 60, height: 2, background: "linear-gradient(to left, transparent, #e22222)" }} />
        </div>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#111827", marginBottom: 16, lineHeight: 1.2 }}>
          Our <span style={{ color: "#e22222" }}>Expert Services</span>
        </h2>
        <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
          Full-stack digital solutions tailored to accelerate your business growth
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={service.id} className="service-item" style={{ display: "flex", flexDirection: isEven ? "row" : "row-reverse", alignItems: "center", gap: 70, marginBottom: index === servicesData.length - 1 ? 0 : 100 }}>
              <div className="service-image" style={{ flex: "0 0 48%", minWidth: 280 }}>
                <div className="service-img-wrap" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.14)", position: "relative", aspectRatio: "4/3" }}>
                  <img className="service-img" src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", top: 20, left: 20, background: service.color, color: "#fff", fontSize: 12, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "7px 16px", borderRadius: 50 }}>{service.tag}</div>
                </div>
              </div>
              <div className="service-content" style={{ flex: 1, minWidth: 280 }}>
                <div className="service-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: service.color === "#e22222" ? "rgba(226,34,34,0.08)" : "rgba(26,79,214,0.08)", border: `1px solid ${service.color === "#e22222" ? "rgba(226,34,34,0.2)" : "rgba(26,79,214,0.2)"}`, borderRadius: 50, padding: "5px 16px", marginBottom: 20 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: service.color, display: "inline-block" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: service.color, letterSpacing: "1.5px", textTransform: "uppercase" as const }}>{service.tag}</span>
                </div>
                <h2 style={{ fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 900, color: "#111827", marginBottom: 18, lineHeight: 1.25, letterSpacing: -0.3 }}>{service.title}</h2>
                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, marginBottom: 32 }}>{service.description}</p>
                <div className="service-divider" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                  <div style={{ width: 40, height: 3, background: service.color, borderRadius: 2 }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: service.color, opacity: 0.5 }} />
                  <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
                </div>
                <div className="service-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
                  <button className="service-get-btn" style={{ background: "#e22222", color: "#fff", border: "none", padding: "13px 32px", borderRadius: 8, fontWeight: 800, fontSize: 14, cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all 0.3s ease", boxShadow: "0 4px 16px rgba(226,34,34,0.3)", display: "flex", alignItems: "center", gap: 8 }}>
                    Let's Get Started
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <button className="service-talk-btn" style={{ background: "transparent", color: "#374151", border: "1.5px solid #d1d5db", padding: "13px 32px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all 0.3s ease" }}>Talk To Us!</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ==================== PRICING SECTION ====================
function PricingSection() {
  const [activeTab, setActiveTab] = useState("estore");
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const pricingCategories = [
    { key: "estore", label: "E-Store" },
    { key: "website", label: "Website Design" },
    { key: "shopify", label: "Shopify" },
    { key: "branding", label: "Branding" },
    { key: "video", label: "Video Animation" },
    { key: "seo", label: "SEO" },
  ];

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://360artdesign-backend.vercel.app/api/pricing');
      const result = await response.json();
      
      if (result.success) {
        setPlans(result.data);
      } else {
        setError(result.message || 'Failed to fetch pricing');
      }
    } catch (err) {
      console.error('Error fetching pricing:', err);
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const getPlansByCategory = (category: string) => {
    return plans.filter(plan => plan.category === category && plan.isActive);
  };

  const currentPlans = getPlansByCategory(activeTab);

  if (loading) {
    return (
      <section style={{ background: "#eef0f7", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
        <div style={{ display: "inline-block", width: 50, height: 50, border: "3px solid #e22222", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ marginTop: 20, color: "#666" }}>Loading pricing plans...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section style={{ background: "#eef0f7", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
        <p style={{ color: "#dc2626" }}>{error}</p>
        <button onClick={() => fetchPricing()} style={{ marginTop: 20, background: "#e22222", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 6, cursor: "pointer" }}>Try Again</button>
      </section>
    );
  }

  return (
    <section style={{ background: "#eef0f7", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @keyframes priceFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes waveScroll { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
        .price-card { animation: priceFadeIn 0.4s ease both; }
        .features-list { max-height: 180px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #e22222 #f0f0f0; }
        .features-list::-webkit-scrollbar { width: 4px; }
        .features-list::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 2px; }
        .features-list::-webkit-scrollbar-thumb { background: #e22222; border-radius: 2px; }
        .order-btn:hover { background: #c00000 !important; }
        .price-card-inner:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.12) !important; }
        .tab-btn:hover { background: rgba(255,255,255,0.7) !important; }
        .wave-animate { animation: waveScroll 4s linear infinite; }
        
        @media (max-width: 768px) {
          .pricing-section { padding: 60px 20px !important; }
          .pricing-tabs { flex-wrap: wrap !important; gap: 8px !important; border-radius: 30px !important; padding: 12px !important; }
          .pricing-tabs button { padding: 8px 14px !important; font-size: 12px !important; white-space: nowrap !important; }
          .pricing-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 25px !important; }
          .pricing-tabs { flex-wrap: wrap !important; justify-content: center !important; gap: 10px !important; }
        }
      `}</style>
      
      <div className="pricing-section" style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3px", color: "#e22222", textTransform: "uppercase" }}>OUR PACKAGES</span>
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#1a1a1a", marginBottom: 14, lineHeight: 1.2 }}>Choose Your <span style={{ color: "#e22222" }}>Perfect Plan</span></h2>
        <p style={{ fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Transparent pricing with no hidden fees. Pick the package that fits your business needs.</p>
      </div>

      <div className="pricing-tabs" style={{ maxWidth: 1100, margin: "0 auto 50px", background: "#fff", borderRadius: 50, padding: "6px 8px", display: "flex", alignItems: "center", gap: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", flexWrap: "wrap", justifyContent: "center" }}>
        {pricingCategories.map((cat) => (
          <button key={cat.key} className="tab-btn" onClick={() => setActiveTab(cat.key)} style={{ flex: 1, border: "none", cursor: "pointer", padding: "12px 10px", borderRadius: 50, fontSize: 14, fontWeight: activeTab === cat.key ? 800 : 600, fontFamily: "'Nunito', sans-serif", background: activeTab === cat.key ? "#e22222" : "transparent", color: activeTab === cat.key ? "#fff" : "#555", transition: "all 0.25s ease", boxShadow: activeTab === cat.key ? "0 4px 16px rgba(226,34,34,0.4)" : "none", whiteSpace: "nowrap" }}>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="pricing-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        {currentPlans.map((plan, i) => (
          <div key={plan._id} className="price-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="price-card-inner" style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.3s ease, box-shadow 0.3s ease", boxShadow: "0 6px 30px rgba(0,0,0,0.07)" }}>
              <div style={{ padding: "32px 28px 24px", flex: 1 }}>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: "#111", textAlign: "center", margin: "0 0 20px", lineHeight: 1.3, letterSpacing: 0.3 }}>{plan.name}</h3>
                <div style={{ textAlign: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 52, fontWeight: 900, color: "#111", lineHeight: 1 }}>
                    <sup style={{ fontSize: 28, fontWeight: 900, verticalAlign: "top", marginTop: 10, display: "inline-block" }}>$</sup>
                    {plan.price.replace("$", "")}
                  </span>
                </div>
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <span style={{ fontSize: 16, color: "#999", textDecoration: "line-through", marginRight: 6 }}>{plan.originalPrice}</span>
                  <span style={{ fontSize: 14, color: "#999", fontWeight: 700 }}>ONLY</span>
                </div>
                <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", margin: "0 0 20px", lineHeight: 1.5 }}>{plan.addOn}</p>
                <div style={{ position: "relative", height: 20, marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "100%", height: 1, background: "#f0f0f0" }} />
                  <div style={{ position: "absolute", right: 0, top: 0, width: 4, height: 20, background: "#e22222", borderRadius: 2 }} />
                </div>
                <div className="features-list">
                  {plan.features.map((feat: string, fi: number) => (
                    <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                      <div style={{ flexShrink: 0, width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                        <svg viewBox="0 0 20 20" width="18" height="18"><path d="M4 10 L8 14 L16 6" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontSize: 14, color: "#333", lineHeight: 1.5 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: "0 28px 24px" }}>
                <button className="order-btn" style={{ width: "100%", background: "#e22222", color: "#fff", border: "none", padding: "16px", borderRadius: 10, fontSize: 16, fontWeight: 800, cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "background 0.25s ease", letterSpacing: 0.3 }}>Order Now</button>
              </div>
              <div style={{ padding: "16px 28px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#e22222", marginBottom: 2 }}>Speak with us</div>
                  <div style={{ fontSize: 13, color: "#555", fontWeight: 600 }}>{plan.phone}</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#e22222", marginBottom: 2 }}>Want to discuss ?</div>
                  <div style={{ fontSize: 13, color: "#555", fontWeight: 600, cursor: "pointer" }}>Live Chat Now</div>
                </div>
              </div>
              <div style={{ height: 56, overflow: "hidden", lineHeight: 0, flexShrink: 0, position: "relative" }}>
                <div className="wave-animate" style={{ display: "flex", width: "200%", height: "100%" }}>
                  <svg viewBox="0 0 400 56" style={{ width: "50%", height: 56, flexShrink: 0 }} preserveAspectRatio="none"><path d="M0,30 C60,55 120,5 200,30 C280,55 340,5 400,30 L400,56 L0,56 Z" fill="#e22222" opacity="0.7"/><path d="M0,40 C80,15 160,55 240,40 C320,25 380,50 400,40 L400,56 L0,56 Z" fill="#e22222"/></svg>
                  <svg viewBox="0 0 400 56" style={{ width: "50%", height: 56, flexShrink: 0 }} preserveAspectRatio="none"><path d="M0,30 C60,55 120,5 200,30 C280,55 340,5 400,30 L400,56 L0,56 Z" fill="#e22222" opacity="0.7"/><path d="M0,40 C80,15 160,55 240,40 C320,25 380,50 400,40 L400,56 L0,56 Z" fill="#e22222"/></svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentPlans.length === 0 && !loading && (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <p style={{ color: "#666", fontSize: 16 }}>No pricing plans found for this category.</p>
        </div>
      )}
    </section>
  );
}

// ==================== CONSULTANCY FORM SECTION ====================
function ConsultancyFormSection() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [countryCode, setCountryCode] = useState("+92");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields");
      return;
    }
    
    if (!isChecked) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    const fullPhoneNumber = `${countryCode} ${formData.phone}`;

    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phoneNumber: fullPhoneNumber,
          message: formData.message || "",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Thank you! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCountryCode("+92");
        setIsChecked(false);
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section style={{ background: "#fff", padding: "80px 40px" }}>
      <style>{`
        @media (max-width: 768px) {
          .consultancy-section { padding: 50px 20px !important; }
          .consultancy-form { padding: 25px !important; }
          .form-grid { grid-template-columns: 1fr !important; gap: 15px !important; }
        }
      `}</style>
      <div className="consultancy-section" style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
          <span style={{ width: 50, height: 2, background: "#e22222" }} />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "#e22222", textTransform: "uppercase" }}>Get in Touch</span>
          <span style={{ width: 50, height: 2, background: "#e22222" }} />
        </div>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: "#1a1a2e", marginBottom: 16 }}>
          Chat With Us to Avail 50% Discount
        </h2>
        
        {error && <div style={{ background: "#fee2e2", color: "#dc2626", padding: "12px", borderRadius: 8, marginBottom: 20, fontSize: 13 }}>{error}</div>}
        {success && <div style={{ background: "#dcfce7", color: "#16a34a", padding: "12px", borderRadius: 8, marginBottom: 20, fontSize: 13 }}>{success}</div>}
        
        <form onSubmit={handleSubmit} className="consultancy-form" style={{ background: "#f8f9ff", borderRadius: 24, padding: "40px", marginTop: 30, textAlign: "left" }}>
          <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 20 }}>
            <input type="text" placeholder="Enter Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required style={{ padding: "14px 18px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none" }} />
            <input type="email" placeholder="Enter Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required style={{ padding: "14px 18px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none" }} />
          </div>
          <div style={{ display: "flex", gap: 15, marginBottom: 20, flexWrap: "wrap" }}>
            <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} style={{ padding: "14px 18px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none", background: "#fff", width: 100 }}>
              <option>+92</option><option>+1</option><option>+44</option><option>+91</option><option>+971</option><option>+61</option>
            </select>
            <input type="tel" placeholder="Enter Your Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required style={{ flex: 1, padding: "14px 18px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none" }} />
          </div>
          <textarea rows={4} placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: "100%", padding: "14px 18px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none", resize: "vertical", marginBottom: 20, boxSizing: "border-box" as const }}></textarea>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 25, flexWrap: "wrap" }}>
            <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} style={{ marginTop: 2, width: 18, height: 18, cursor: "pointer" }} />
            <label style={{ fontSize: 12, color: "#666", lineHeight: 1.4, flex: 1 }}>
              Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (PRIVACY POLICY & TERM & CONDITIONS) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to stop SMS & EMAIL
            </label>
          </div>
          <button type="submit" disabled={isLoading} style={{ background: "#e22222", color: "#fff", border: "none", padding: "14px 40px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer", transition: "background 0.3s ease", opacity: isLoading ? 0.7 : 1 }}
            onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.background = "#b71c1c"; }}
            onMouseLeave={(e) => { if (!isLoading) e.currentTarget.style.background = "#e22222"; }}>
            {isLoading ? "Submitting..." : "Get Free Consultancy"}
          </button>
        </form>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS SECTION ====================
function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
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
        const activeTestimonials = result.data.filter((t: any) => t.isActive);
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
      <section style={{ background: "linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)", padding: "100px 40px 120px", textAlign: "center" }}>
        <div style={{ display: "inline-block", width: 50, height: 50, border: "3px solid #e22222", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ marginTop: 20, color: "#666" }}>Loading testimonials...</p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section style={{ background: "linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)", padding: "100px 40px 120px", textAlign: "center" }}>
        <p style={{ color: "#666" }}>No testimonials available yet.</p>
      </section>
    );
  }

  const t = testimonials[activeIndex];

  return (
    <section style={{ background:"linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)",padding:"100px 40px 120px",fontFamily:"'Inter', 'Nunito', sans-serif",position:"relative",overflow:"hidden" }}>
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
        <div style={{ position:"absolute",top:0,left:0,right:0,height:"400px",background:"radial-gradient(circle at 0% 0%, rgba(226,34,34,0.08) 0%, transparent 70%)",pointerEvents:"none" }} />
        <div style={{ position:"absolute",bottom:0,right:0,width:"500px",height:"500px",background:"radial-gradient(circle, rgba(226,34,34,0.04) 0%, transparent 70%)",pointerEvents:"none" }} />
        <div style={{ maxWidth:1400,margin:"0 auto",position:"relative",zIndex:2 }}>
          <div style={{ textAlign:"center",marginBottom:70 }}>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20 }}>
              <span style={{ width:50,height:2,background:"#e22222" }} />
              <span style={{ fontSize:13,fontWeight:700,letterSpacing:"4px",color:"#e22222",textTransform:"uppercase" }}>Testimonials</span>
              <span style={{ width:50,height:2,background:"#e22222" }} />
            </div>
            <h2 style={{ fontSize:"clamp(32px, 4vw, 48px)",fontWeight:800,color:"#1a1a2e",marginBottom:16,lineHeight:1.2 }}>What Our <span style={{ color:"#e22222" }}>Clients Say</span></h2>
            <p style={{ fontSize:18,color:"#666",maxWidth:600,margin:"0 auto",lineHeight:1.6 }}>Don&apos;t just take our word for it — hear from businesses we&apos;ve helped grow</p>
          </div>
          
          <div style={{ maxWidth:1000,margin:"0 auto" }}>
            <div className="testimonial-card" style={{ background:"#fff",borderRadius:32,boxShadow:"0 30px 60px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.04)",overflow:"hidden",transition:"all 0.3s ease",position:"relative" }}>
              <div className="testimonial-quote" style={{ position:"absolute",top:40,left:40,fontSize:120,fontFamily:"Georgia, serif",color:"#e22222",opacity:0.12,lineHeight:1,pointerEvents:"none" }}>&ldquo;</div>
              <div style={{ padding:"60px 60px 50px" }}>
                <div style={{ marginBottom:28,display:"flex",gap:6,flexWrap:"wrap" }}>
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill={i < t.rating ? "#f59e0b" : "#e0e0e0"} style={{ marginRight:2 }}>
                      <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill={i < t.rating ? "#f59e0b" : "#e0e0e0"} />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text" style={{ fontSize:"clamp(20px, 2.5vw, 26px)",lineHeight:1.45,color:"#1a1a2e",fontWeight:500,marginBottom:40,fontStyle:"italic",position:"relative",zIndex:1 }}>&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author" style={{ display:"flex",alignItems:"center",gap:20,marginBottom:30 }}>
                  <div style={{ width:70,height:70,borderRadius:"50%",background:"linear-gradient(135deg, #e22222, #b71c1c)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:24,boxShadow:"0 8px 20px rgba(226,34,34,0.3)" }}>
                    {t.avatar || t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize:20,fontWeight:800,color:"#1a1a2e",marginBottom:6 }}>{t.name}</h4>
                    <p style={{ fontSize:14,color:"#888",margin:0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-nav-buttons" style={{ padding:"20px 60px 40px",borderTop:"1px solid #f0f0f0",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#fafaff",flexWrap:"wrap" }}>
                <button onClick={prevTestimonial} style={{ width:48,height:48,borderRadius:"50%",background:"#fff",border:"1px solid #e0e0e0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }} 
                  onMouseEnter={e => { e.currentTarget.style.background="#e22222"; e.currentTarget.style.borderColor="#e22222"; const a=e.currentTarget.querySelector("svg"); if(a) a.style.stroke="#fff"; }} 
                  onMouseLeave={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.borderColor="#e0e0e0"; const a=e.currentTarget.querySelector("svg"); if(a) a.style.stroke="#333"; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18L9 12L15 6" /></svg>
                </button>
                <div style={{ display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center" }}>
                  {testimonials.map((_,i) => (
                    <button key={i} onClick={() => setActiveIndex(i)} style={{ 
                      width:i===activeIndex?32:10, height:10, borderRadius:5, 
                      background:i===activeIndex?"#e22222":"#ddd", border:"none", cursor:"pointer", transition:"all 0.3s ease" 
                    }} />
                  ))}
                </div>
                <button onClick={nextTestimonial} style={{ width:48,height:48,borderRadius:"50%",background:"#fff",border:"1px solid #e0e0e0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }} 
                  onMouseEnter={e => { e.currentTarget.style.background="#e22222"; e.currentTarget.style.borderColor="#e22222"; const a=e.currentTarget.querySelector("svg"); if(a) a.style.stroke="#fff"; }} 
                  onMouseLeave={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.borderColor="#e0e0e0"; const a=e.currentTarget.querySelector("svg"); if(a) a.style.stroke="#333"; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18L15 12L9 6" /></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop:60,display:"flex",alignItems:"center",justifyContent:"center",gap:20,flexWrap:"wrap" }}>
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e22222"><path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="#e22222" /></svg>
              <span style={{ fontSize:14,color:"#666" }}>{stats.averageRating} Rating ({stats.totalReviews}+ Reviews)</span>
            </div>
            <div style={{ width:1,height:20,background:"#ddd" }} />
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#e22222" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" fill="#e22222" />
              </svg>
              <span style={{ fontSize:14,color:"#666" }}>Trusted by 1000+ Clients</span>
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
// ==================== SERVICES PAGE MAIN ====================
export default function ServicesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <>
      <Header />
      <FloatingSideButtons onOpenForm={() => setIsFormOpen(true)} />
      <ConsultancyModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <ServicesHero />
      <ServicesList />
      <PricingSection />
      <ConsultancyFormSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}