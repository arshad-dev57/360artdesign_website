"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaTimes, FaCommentDots } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export const serviceRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
  "web-design": React.createRef<HTMLDivElement>(),
  "ecommerce": React.createRef<HTMLDivElement>(),
  "web-apps": React.createRef<HTMLDivElement>(),
  "mobile-apps": React.createRef<HTMLDivElement>(),
  "website-maintenance": React.createRef<HTMLDivElement>(),
  "domain-hosting": React.createRef<HTMLDivElement>(),
  "branding": React.createRef<HTMLDivElement>(),
  "video-animation": React.createRef<HTMLDivElement>(),
  "seo": React.createRef<HTMLDivElement>(),
};
// ==================== SERVICE NAVIGATION MAP ====================
export const serviceNavMap: Record<string, { href: string; sectionId: string }> = {
  "Web Design": { href: "/services", sectionId: "web-design" },
  "Ecommerce Solutions": { href: "/services", sectionId: "ecommerce" },
  "Web Apps": { href: "/services", sectionId: "web-apps" },
  "Mobile Apps": { href: "/services", sectionId: "mobile-apps" },
  "Website Maintenance": { href: "/services", sectionId: "website-maintenance" },
  "Domain And Hosting": { href: "/services", sectionId: "domain-hosting" },
  "Branding": { href: "/services", sectionId: "branding" },
  "Video Animation": { href: "/services", sectionId: "video-animation" },
  "SEO": { href: "/services", sectionId: "seo" },
  "Website Design & Development": { href: "/services", sectionId: "web-design" },
  "E-commerce Solutions": { href: "/services", sectionId: "ecommerce" },
  "Web Application Development": { href: "/services", sectionId: "web-apps" },
  "Mobile Application Development": { href: "/services", sectionId: "mobile-apps" },
  "Search Engine Optimization": { href: "/services", sectionId: "seo" },
  "Branding And Stationary Design": { href: "/services", sectionId: "branding" },
};

// ==================== HEADER WITH SERVICE NAVIGATION ====================
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Packages", href: "/packages" },
  { name: "Combo Packages", href: "/combo-packages" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonials", href: "/testimonials" },
];

const dropdownServices = [
  { name: "Shopify Store", href: "/shopify", sectionId: "" },
  { name: "Web Design", href: "/services/web-design", sectionId: "" },
  { name: "Ecommerce Solutions", href: "/services/ecommerce", sectionId: "" },
  { name: "Web Apps", href: "/services/web-apps", sectionId: "" },
  { name: "Mobile Apps", href: "/services/mobile-apps", sectionId: "" },
  { name: "Website Maintenance", href: "/services/website-maintenance", sectionId: "" },
  { name: "Domain And Hosting", href: "/services/domain-hosting", sectionId: "" },
  { name: "Branding", href: "/services/branding", sectionId: "" },
  { name: "Video Animation", href: "/services/video-animation", sectionId: "" },
  { name: "SEO", href: "/services/seo", sectionId: "" },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { fetchLogo(); }, []);

  const fetchLogo = async () => {
    try {
      const response = await fetch("https://360artdesign-backend.vercel.app/api/settings/logo");
      const result = await response.json();
      if (result.success) setLogo(result.data);
    } catch (error) { console.error("Error fetching logo:", error); }
    finally { setLoadingLogo(false); }
  };

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    // Show Services as active when on Shopify page
    if (href === "/services" && pathname.startsWith("/shopify")) return true;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleServiceClick = (serviceName: string, href: string) => {
    router.push(href);
    setIsDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setIsDropdownOpen(false), 150);
  };

  const activePillStyle: React.CSSProperties = {
    position: "relative",
    fontSize: 13, fontWeight: 600, color: "#ffffff",
    textDecoration: "none", padding: "8px 18px", borderRadius: 25,
    background: "#e22222",
    boxShadow: "0 4px 15px rgba(226, 34, 34, 0.4)",
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const inactiveLinkStyle: React.CSSProperties = {
    fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.75)",
    textDecoration: "none", padding: "8px 18px", borderRadius: 25,
    background: "transparent",
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const renderLogo = () => {
    if (loadingLogo) return <div style={{ width:50,height:50,background:"rgba(255,255,255,0.1)",borderRadius:8,animation:"pulse 1.5s ease-in-out infinite" }} />;
    if (logo?.type === "image" && logo.imageUrl) return <img src={logo.imageUrl} alt={logo.alt || "360 ArtDesign Logo"} style={{ height:50,width:"auto",maxWidth:90,objectFit:"contain",display:"block" }} />;
    return <div style={{ width:50,height:50,background:"radial-gradient(circle, #cc1111 20%, #7a0000 100%)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,boxShadow:"0 0 16px rgba(200,20,20,0.45)" }}>{logo?.icon || ""}</div>;
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
        .desktop-hire-btn {
          background: #e22222; color: #fff; border: none;
          flex-shrink: 0; font-family: "Nunito", sans-serif;
          font-size: 14px; font-weight: 800; padding: 10px 28px;
          border-radius: 8px; cursor: pointer; position: relative;
          overflow: hidden; z-index: 1; transition: all 0.3s ease;
        }
        .desktop-hire-btn:hover { background: #b71c1c; }
        .desktop-hire-btn .grey-overlay {
          position: absolute; top: 0; right: 0; width: 100%; height: 100%;
          background: #888; transform: scale(0); transform-origin: top right;
          transition: transform 0.5s ease-in-out; border-radius: 8px;
          z-index: -1; pointer-events: none;
        }
        .desktop-hire-btn:hover .grey-overlay { transform: scale(1); }
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

      <header style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrolled?"rgba(18,4,4,0.97)":"rgba(18,4,4,0.85)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.07)",height:70,transition:"all 0.3s ease",fontFamily:"'Nunito', sans-serif" }}>
        <div style={{ maxWidth:1400,margin:"0 auto",padding:"0 36px",height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20 }}>
          <Link href="/" style={{ textDecoration:"none",display:"flex",alignItems:"center",gap:10,flexShrink:0 }}>
            {renderLogo()}
          </Link>

          <nav className="desktop-nav" style={{ background:"rgba(255,255,255,0.055)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:50,padding:"5px 8px",display:"flex",alignItems:"center",gap:2 }}>
            {navLinks.map((l) => {
              const active = isActive(l.href);
              if (l.name === "Services") {
                return (
                  <div key={l.name} ref={dropdownRef} style={{ position:"relative" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button style={{ ...(active ? activePillStyle : inactiveLinkStyle),border:"none",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:5,whiteSpace:"nowrap" }}>
                      {l.name}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                      {active && (
                        <span style={{ position:"absolute",bottom:-8,left:"50%",transform:"translateX(-50%)",width:0,height:0,borderLeft:"8px solid transparent",borderRight:"8px solid transparent",borderTop:"8px solid #e22222" }} />
                      )}
                    </button>
                    {isDropdownOpen && (
                      <div style={{ position:"absolute",top:"100%",left:0,marginTop:12,background:"#1a1a2e",borderRadius:16,minWidth:220,boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden",zIndex:1000,animation:"dropdownFadeIn 0.2s ease" }}>
                        {dropdownServices.map((service, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleServiceClick(service.name, service.href)}
                            style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",color:"rgba(255,255,255,0.8)",fontSize:13,fontWeight:500,textDecoration:"none",transition:"all 0.2s ease",borderBottom:idx<dropdownServices.length-1?"1px solid rgba(255,255,255,0.05)":"none",cursor:"pointer" }}
                            onMouseEnter={e => { e.currentTarget.style.color="#e22222"; const a=e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement|null; if(a){a.style.opacity="1";a.style.transform="translateX(5px)";} }}
                            onMouseLeave={e => { e.currentTarget.style.color="rgba(255,255,255,0.8)"; const a=e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement|null; if(a){a.style.opacity="0";a.style.transform="translateX(0)";} }}>
                            <span>{service.name}</span>
                            <span className="dropdown-arrow" style={{ opacity:0,transition:"opacity 0.2s ease, transform 0.2s ease",fontSize:14,color:"#e22222" }}>→</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={l.name} href={l.href} className={active ? "" : "header-nav-link"} style={active ? activePillStyle : inactiveLinkStyle}>
                  {l.name}
                  {active && (
                    <span style={{ position:"absolute",bottom:-8,left:"50%",transform:"translateX(-50%)",width:0,height:0,borderLeft:"8px solid transparent",borderRight:"8px solid transparent",borderTop:"8px solid #e22222" }} />
                  )}
                </Link>
              );
            })}
          </nav>

          <button className="desktop-hire-btn" onClick={() => router.push("/hire-us")}>
            Hire Us
            <span className="grey-overlay" aria-hidden="true" />
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu-container" style={{ position:"fixed",inset:0,zIndex:1001,display:"flex" }}>
          <div className="mobile-overlay" style={{ position:"absolute",inset:0,background:"rgba(0,0,0,0.8)",backdropFilter:"blur(8px)" }} onClick={() => setIsMobileMenuOpen(false)} />
          <div className="mobile-menu-open" style={{ position:"relative",marginLeft:"auto",width:"85%",maxWidth:320,height:"100%",background:"#1a1a2e",boxShadow:"-10px 0 40px rgba(0,0,0,0.4)",display:"flex",flexDirection:"column",overflowY:"auto" }}>
            <div style={{ padding:24,borderBottom:"1px solid rgba(255,255,255,0.1)",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
              <div style={{ fontWeight:700,fontSize:18,color:"#fff" }}>Menu</div>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ background:"rgba(255,255,255,0.1)",border:"none",width:40,height:40,borderRadius:10,cursor:"pointer",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <FaTimes size={18} />
              </button>
            </div>
            <div style={{ flex:1,padding:"20px 0" }}>
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                    style={{ display:"block",padding:"14px 24px",color:active?"#e22222":"rgba(255,255,255,0.8)",fontSize:15,fontWeight:active?700:500,textDecoration:"none",borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                    {link.name}
                  </Link>
                );
              })}
               <button onClick={() => { router.push("/hire-us"); setIsMobileMenuOpen(false); }}
                style={{ margin: "20px 24px", width: "calc(100% - 48px)", background: "#e22222", color: "#fff", border: "none", padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                Hire Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ==================== CONSULTANCY MODAL ====================
function ConsultancyModal({ isOpen, onClose, onMouseEnter, onMouseLeave }: { isOpen: boolean; onClose: () => void; onMouseEnter?: () => void; onMouseLeave?: () => void }) {
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
      if (response.ok) {
        alert("Thank you! We will contact you soon.");
        setFormData({ fullName: "", email: "", number: "", message: "" });
        setSelectedCountry("us");
        onClose();
      } else setError(data.message || "Something went wrong. Please try again.");
    } catch { setError("Network error. Please check your connection and try again."); }
    finally { setIsLoading(false); }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (error) setError("");
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideInFromRight { from { transform: translateX(100%) } to { transform: translateX(0) } }
        @keyframes slideInFromBottom { from { transform: translateY(100%) } to { transform: translateY(0) } }
        @keyframes spin { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
        .consultancy-form-panel {
          position: fixed; right: 0; top: 50%; margin-top: -280px;
          width: 400px; max-height: 560px; background: #fff; z-index: 1001;
          box-shadow: -5px 0 30px rgba(0,0,0,0.3);
          animation: slideInFromRight 0.3s ease-out;
          display: flex; flex-direction: column;
          border-radius: 20px 0 0 20px; overflow: hidden;
        }
        @media (max-width: 768px) {
          .consultancy-form-panel {
            right: 0; left: 0; bottom: 0; top: auto; margin-top: 0;
            width: 100%; max-height: 90vh;
            border-radius: 20px 20px 0 0;
            animation: slideInFromBottom 0.3s ease-out;
          }
        }
      `}</style>
      <div style={{ position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.7)",zIndex:1000,animation:"fadeIn 0.3s ease" }} onClick={onClose} />
      <div className="consultancy-form-panel" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div style={{ background:"#e22222",padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0 }}>
          <div>
            <h3 style={{ color:"#fff",margin:0,fontSize:"18px",fontWeight:700 }}>Chat with us</h3>
            <p style={{ color:"#fff",margin:"5px 0 0",fontSize:"13px",opacity:0.9 }}>to avail 50% discount!</p>
          </div>
          <button onClick={onClose} style={{ background:"transparent",border:"none",cursor:"pointer",color:"#fff",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px" }}>
            <FaTimes size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit} style={{ padding:"20px",flex:1,overflowY:"auto" }}>
          {error && <div style={{ background:"#fee2e2",color:"#dc2626",padding:"10px",borderRadius:"8px",marginBottom:"15px",fontSize:"13px",textAlign:"center" }}>{error}</div>}
          {[{label:"Full Name *",field:"fullName",type:"text"},{label:"Email *",field:"email",type:"email"}].map(({label,field,type}) => (
            <div key={field} style={{ marginBottom:"15px" }}>
              <label style={{ display:"block",marginBottom:"6px",fontWeight:600,color:"#333",fontSize:"13px" }}>{label}</label>
              <input type={type} required value={(formData as Record<string,string>)[field]} onChange={e => handleInputChange(field,e.target.value)} disabled={isLoading}
                style={{ width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",outline:"none",boxSizing:"border-box" }}
                onFocus={e => e.target.style.borderColor="#e22222"} onBlur={e => e.target.style.borderColor="#ddd"} />
            </div>
          ))}
          <div style={{ marginBottom:"15px" }}>
            <label style={{ display:"block",marginBottom:"6px",fontWeight:600,color:"#333",fontSize:"13px" }}>Phone Number *</label>
            <div style={{ display:"flex",gap:"8px" }}>
              <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} disabled={isLoading}
                style={{ padding:"10px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"18px",outline:"none",cursor:"pointer",background:"#fff",width:"70px",flexShrink:0 }}>
                {countries.map(c => <option key={c.code} value={c.code}>{c.flag}</option>)}
              </select>
              <input type="tel" required value={formData.number} placeholder="1234567890" onChange={e => handleInputChange("number",e.target.value)} disabled={isLoading}
                style={{ flex:1,padding:"10px 12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",outline:"none",minWidth:0,boxSizing:"border-box" }}
                onFocus={e => e.target.style.borderColor="#e22222"} onBlur={e => e.target.style.borderColor="#ddd"} />
            </div>
          </div>
          <div style={{ marginBottom:"20px" }}>
            <label style={{ display:"block",marginBottom:"6px",fontWeight:600,color:"#333",fontSize:"13px" }}>Message</label>
            <textarea value={formData.message} rows={3} onChange={e => handleInputChange("message",e.target.value)} disabled={isLoading} placeholder="Tell us about your project..."
              style={{ width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",outline:"none",resize:"vertical",fontFamily:"inherit",boxSizing:"border-box" }}
              onFocus={e => e.target.style.borderColor="#e22222"} onBlur={e => e.target.style.borderColor="#ddd"} />
          </div>
          <button type="submit" disabled={isLoading}
            style={{ width:"100%",background:"#e22222",color:"#fff",border:"none",padding:"12px",borderRadius:"8px",fontSize:"15px",fontWeight:700,cursor:isLoading?"not-allowed":"pointer",opacity:isLoading?0.7:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"10px" }}
            onMouseEnter={e => { if(!isLoading) e.currentTarget.style.background="#b71c1c"; }}
            onMouseLeave={e => { if(!isLoading) e.currentTarget.style.background="#e22222"; }}>
            {isLoading ? (<><span style={{ display:"inline-block",width:"16px",height:"16px",border:"2px solid #fff",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 0.8s linear infinite" }} />Submitting...</>) : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

// ==================== FLOATING SIDE BUTTONS ====================
function FloatingSideButtons({ onOpenForm, onConsultancyBtnEnter, onConsultancyBtnLeave }: { onOpenForm: () => void; onConsultancyBtnEnter?: () => void; onConsultancyBtnLeave?: () => void }) {
  return (
    <div style={{ position:"fixed",right:0,top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:12,zIndex:999,alignItems:"flex-end" }}>
      <div style={{ position:"relative",width:50,height:46,overflow:"visible" }}
        onMouseEnter={e => { const t=e.currentTarget.querySelector(".chat-tooltip") as HTMLElement|null; const b=e.currentTarget.querySelector(".chat-button") as HTMLElement|null; if(t) t.style.transform="translateX(0)"; if(b) b.style.opacity="0"; }}
        onMouseLeave={e => { const t=e.currentTarget.querySelector(".chat-tooltip") as HTMLElement|null; const b=e.currentTarget.querySelector(".chat-button") as HTMLElement|null; if(t) t.style.transform="translateX(100%)"; if(b) b.style.opacity="1"; }}>
        <button className="chat-button" style={{ background:"#e22222",border:"none",cursor:"pointer",width:50,height:46,borderRadius:"40px 0 0 40px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:0,top:0,zIndex:2,transition:"opacity 0.3s ease-in-out" }}>
          <FaCommentDots color="#fff" size={20} />
        </button>
        <div className="chat-tooltip" style={{ position:"absolute",right:0,top:0,height:46,background:"#e22222",borderRadius:"40px 0 0 40px",display:"flex",alignItems:"center",padding:"0 20px",transform:"translateX(100%)",transition:"transform 0.3s ease-in-out",whiteSpace:"nowrap",fontFamily:"'Nunito', sans-serif",fontSize:14,fontWeight:700,color:"#fff",zIndex:1,gap:"8px" }}>
          <FaCommentDots color="#fff" size={20} /><span>Chat with us</span>
        </div>
      </div>
      <div style={{ position:"relative",width:50,height:46,overflow:"visible" }}
        onMouseEnter={e => { const t=e.currentTarget.querySelector(".phone-tooltip") as HTMLElement|null; const b=e.currentTarget.querySelector(".phone-button") as HTMLElement|null; if(t) t.style.transform="translateX(0)"; if(b) b.style.opacity="0"; }}
        onMouseLeave={e => { const t=e.currentTarget.querySelector(".phone-tooltip") as HTMLElement|null; const b=e.currentTarget.querySelector(".phone-button") as HTMLElement|null; if(t) t.style.transform="translateX(100%)"; if(b) b.style.opacity="1"; }}>
        <button className="phone-button" style={{ background:"#e22222",border:"none",cursor:"pointer",width:50,height:46,borderRadius:"40px 0 0 40px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:0,top:0,zIndex:2,transition:"opacity 0.3s ease-in-out" }}>
          <FaPhoneAlt color="#fff" size={18} />
        </button>
        <div className="phone-tooltip" style={{ position:"absolute",right:0,top:0,height:46,background:"#e22222",borderRadius:"40px 0 0 40px",display:"flex",alignItems:"center",padding:"0 20px",transform:"translateX(100%)",transition:"transform 0.3s ease-in-out",whiteSpace:"nowrap",fontFamily:"'Nunito', sans-serif",fontSize:14,fontWeight:700,color:"#fff",zIndex:1,gap:"8px" }}>
          <FaPhoneAlt color="#fff" size={18} /><span>+1 (786)-761-8327</span>
        </div>
      </div>
      <button 
        onClick={onOpenForm}
        onMouseEnter={onConsultancyBtnEnter}
        onMouseLeave={onConsultancyBtnLeave}
        style={{ background:"#e22222",color:"#fff",border:"none",cursor:"pointer",fontSize:13,fontWeight:800,letterSpacing:1,textTransform:"uppercase",width:50,minHeight:80,borderRadius:"20px 0 0 20px",fontFamily:"'Nunito', sans-serif",textAlign:"center",writingMode:"vertical-rl",textOrientation:"mixed",padding:"18px 0" }}
      >
        GET FREE CONSULTANCY
      </button>
    </div>
  );
}

// ==================== SERVICES HERO ====================
function ServicesHero() {
  const router = useRouter();
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
    if (!formData.name || !formData.email || !formData.phone) { setError("Please fill in all required fields"); return; }
    if (!isChecked) { setError("Please agree to the terms and conditions"); return; }
    setIsLoading(true); setError(""); setSuccess("");
    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: formData.name, email: formData.email, phoneNumber: `${countryCode} ${formData.phone}`, message: formData.message || "" }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess("Thank you! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCountryCode("+92"); setIsChecked(false);
        setTimeout(() => setSuccess(""), 5000);
      } else setError(data.message || "Something went wrong. Please try again.");
    } catch (err) { setError("Network error. Please check your connection and try again."); }
    finally { setIsLoading(false); }
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
        .hero-btn-primary:hover { background: #b71c1c !important; }
        .hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .form-input-hero:focus { border-color: #e22222 !important; outline: none; box-shadow: 0 0 0 3px rgba(226,34,34,0.1); }
        .submit-btn-hero:hover { background: #b71c1c !important; }
        .submit-btn-hero:disabled { opacity: 0.7; cursor: not-allowed; }
        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 0.8s linear infinite; margin-right: 8px; }
        .services-hero-container {
          padding: 30px 40px 140px !important;
        }
        @media (max-width: 768px) {
          .services-hero-section { padding-top: 0 !important; }
          .services-hero-container { flex-direction: column !important; padding: 10px 20px 100px !important; text-align: center !important; }
          .hero-content { width: 100% !important; max-width: 100% !important; margin-bottom: 40px !important; }
          .hero-content p { margin-left: auto !important; margin-right: auto !important; }
          .hero-check-items { align-items: center !important; }
          .hero-buttons { justify-content: center !important; }
          .hero-form { width: 100% !important; max-width: 100% !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-hero-container { flex-direction: column !important; text-align: center !important; padding: 20px 30px 100px !important; }
          .hero-content { width: 100% !important; max-width: 100% !important; margin-bottom: 50px !important; }
          .hero-check-items { align-items: center !important; }
          .hero-form { width: 100% !important; max-width: 500px !important; margin: 0 auto !important; }
        }
      `}</style>

      <section
        className="services-hero-section"
        style={{ paddingTop:70,minHeight:"100vh",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",fontFamily:"'Nunito', sans-serif",background:"#8b0000" }}
      >
        <div style={{ position:"absolute",inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')",backgroundSize:"cover",backgroundPosition:"center right",opacity:0.25,zIndex:0 }} />
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)",zIndex:1 }} />

        <div className="services-hero-container"
          style={{ maxWidth:1300,margin:"0 auto",width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:50,position:"relative",zIndex:10 }}
        >
          <div className="hero-content" style={{ flex:"0 0 50%",maxWidth:580,marginTop:0 }}>
            <h1 style={{ fontSize:"clamp(36px, 4.8vw, 62px)",fontWeight:900,color:"#fff",lineHeight:1.12,marginBottom:22,letterSpacing:-0.5 }}>
              Custom Website Design<br />&amp; Development Services
            </h1>
            <p style={{ fontSize:17,color:"rgba(255,255,255,0.88)",lineHeight:1.75,marginBottom:30,maxWidth:500 }}>
              We offer a wide range of web development services that will help you put your business on the map and start making a profit.
            </p>
            <div className="hero-check-items" style={{ display:"flex",flexDirection:"column",gap:14,marginBottom:38 }}>
              {checkItems.map((item, i) => (
                <div key={i} style={{ display:"flex",alignItems:"center",gap:12 }}>
                  <span style={{ fontSize:20,color:"#fff",fontWeight:400 }}>–</span>
                  <span style={{ fontSize:17,fontWeight:700,color:"#fff" }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="hero-buttons" style={{ display:"flex",gap:16,flexWrap:"wrap" }}>
              <button onClick={() => router.push("/hire-us")} className="hero-btn-primary" style={{ background:"#e22222",color:"#fff",border:"none",padding:"14px 38px",fontWeight:800,cursor:"pointer",borderRadius:6,fontSize:16,fontFamily:"'Nunito', sans-serif",transition:"background 0.3s ease" }}>Let's Get Started</button>
              <button onClick={() => router.push("/hire-us")} className="hero-btn-outline" style={{ background:"transparent",color:"#fff",border:"2px solid rgba(255,255,255,0.85)",padding:"12px 34px",fontWeight:700,cursor:"pointer",borderRadius:6,fontSize:16,fontFamily:"'Nunito', sans-serif",transition:"all 0.3s ease" }}>Talk To Us!</button>
            </div>
          </div>

          <div className="hero-form" style={{ flex:"0 0 38%",maxWidth:420 }}>
            <div style={{ background:"#fff",borderRadius:12,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.35)",padding:"28px 28px 32px" }}>
              <h3 style={{ textAlign:"center",margin:"0 0 6px",fontSize:22,fontWeight:900,color:"#111",lineHeight:1.3 }}>GET FREE CONSULTANCY</h3>
              <p style={{ textAlign:"center",margin:"0 0 20px",fontSize:13,color:"#888" }}>Fill out the form below to get started</p>
              {error && <div style={{ background:"#fee2e2",color:"#dc2626",padding:"10px",borderRadius:8,marginBottom:15,fontSize:12,textAlign:"center" }}>{error}</div>}
              {success && <div style={{ background:"#dcfce7",color:"#16a34a",padding:"10px",borderRadius:8,marginBottom:15,fontSize:12,textAlign:"center" }}>{success}</div>}
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom:14 }}>
                  <input type="text" placeholder="Enter Your Name" className="form-input-hero" value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})} required style={{ width:"100%",padding:"12px 16px",border:"1px solid #d0d0d0",borderRadius:8,fontSize:14,fontFamily:"'Nunito', sans-serif",boxSizing:"border-box" as const }} />
                </div>
                <div style={{ marginBottom:14 }}>
                  <input type="email" placeholder="Enter Your Email" className="form-input-hero" value={formData.email} onChange={e => setFormData({...formData,email:e.target.value})} required style={{ width:"100%",padding:"12px 16px",border:"1px solid #d0d0d0",borderRadius:8,fontSize:14,fontFamily:"'Nunito', sans-serif",boxSizing:"border-box" as const }} />
                </div>
                <div style={{ marginBottom:14,display:"flex",gap:10 }}>
                  <select value={countryCode} onChange={e => setCountryCode(e.target.value)} style={{ padding:"12px 8px",border:"1px solid #d0d0d0",borderRadius:8,fontSize:13,fontFamily:"'Nunito', sans-serif",background:"#fff",cursor:"pointer",minWidth:95 }}>
                    {countries.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                  </select>
                  <input type="tel" placeholder="Enter Your Phone Number" value={formData.phone} onChange={e => setFormData({...formData,phone:e.target.value})} required style={{ flex:1,padding:"12px 14px",border:"1px solid #d0d0d0",borderRadius:8,fontSize:14,fontFamily:"'Nunito', sans-serif",minWidth:0,boxSizing:"border-box" as const }} />
                </div>
                <div style={{ marginBottom:16 }}>
                  <textarea placeholder="Message" rows={3} value={formData.message} onChange={e => setFormData({...formData,message:e.target.value})} style={{ width:"100%",padding:"12px 16px",border:"1px solid #d0d0d0",borderRadius:8,fontSize:14,fontFamily:"'Nunito', sans-serif",resize:"vertical",boxSizing:"border-box" as const }} />
                </div>
                <div style={{ display:"flex",alignItems:"flex-start",gap:10,marginBottom:20 }}>
                  <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} style={{ marginTop:2,width:16,height:16,cursor:"pointer",accentColor:"#e22222",flexShrink:0 }} />
                  <label style={{ fontSize:10,color:"#777",lineHeight:1.4 }}>
                    Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL{" "}
                    <span style={{ color:"#e22222",cursor:"pointer" }}>(PRIVACY POLICY &amp; TERM &amp; CONDITIONS)</span>
                    {" "}- Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to stop SMS &amp; EMAIL
                  </label>
                </div>
                <button type="submit" className="submit-btn-hero" disabled={isLoading}
                  style={{ width:"100%",background:"#e22222",color:"#fff",border:"none",padding:"14px",borderRadius:8,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"'Nunito', sans-serif",transition:"background 0.3s ease",opacity:isLoading?0.7:1 }}>
                  {isLoading ? <><span className="spinner"></span>Submitting...</> : "Get Free Consultancy"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div style={{ position:"absolute",bottom:0,left:0,right:0,height:280,lineHeight:0,zIndex:2,overflow:"hidden",pointerEvents:"none" }}>
          <div style={{ position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove2 15s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block",width:"100%",height:"100%" }}><path d="M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z" fill="rgba(255,255,255,0.12)" /></svg>
          </div>
          <div style={{ position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove1 12s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block",width:"100%",height:"100%" }}><path d="M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z" fill="rgba(255,255,255,0.30)" /></svg>
          </div>
          <div style={{ position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove3 10s linear infinite" }}>
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block",width:"100%",height:"100%" }}><path d="M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z" fill="#f5f7fd" /></svg>
          </div>
        </div>
      </section>
    </>
  );
}

// ==================== SERVICES LIST WITH SCROLL FUNCTIONALITY ====================
function ServicesList() {
  const router = useRouter();

  const servicesData = [
    { 
      id: "web-design",
      tag: "Web Design", 
      title: "Web Design & Development", 
      description: "Get stunning, responsive websites that convert visitors into customers. Our expert designers create custom websites tailored to your brand identity and business goals. From simple landing pages to complex e-commerce platforms, we deliver pixel-perfect designs with seamless functionality.", 
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80", 
      color: "#e22222" 
    },
    { 
      id: "ecommerce",
      tag: "E-Commerce", 
      title: "Ecommerce Solutions", 
      description: "Launch your online store with powerful ecommerce platforms like Shopify, WooCommerce, and Magento. We build secure, scalable, and user-friendly online stores that drive sales and provide exceptional customer experience.", 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", 
      color: "#1a4fd6" 
    },
    { 
      id: "web-apps",
      tag: "Web Apps", 
      title: "Web Application Development", 
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. We deliver robust, scalable, and high-performance solutions that streamline your business operations and enhance user engagement.", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", 
      color: "#e22222" 
    },
    { 
      id: "mobile-apps",
      tag: "Mobile Apps", 
      title: "Mobile App Development", 
      description: "Reach your customers on the go with native and cross-platform mobile apps. We develop high-performance iOS and Android apps that are intuitive, feature-rich, and optimized for the best user experience.", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", 
      color: "#1a4fd6" 
    },
    { 
      id: "website-maintenance",
      tag: "Maintenance", 
      title: "Website Maintenance", 
      description: "Keep your website secure, fast, and up-to-date with our comprehensive maintenance services. We handle updates, security patches, backups, and performance optimization so you can focus on growing your business.", 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", 
      color: "#e22222" 
    },
    { 
      id: "domain-hosting",
      tag: "Hosting", 
      title: "Web Hosting that scales from easy to expert", 
      description: "Whether you are looking for a personal website hosting plan or a business website hosting plan, 360 ArtDesign is the perfect solution for you. Our powerful website hosting services will not only help you achieve your overall website goals, but will also provide you with the confidence you need.", 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", 
      color: "#1a4fd6" 
    },
    { 
      id: "branding",
      tag: "Branding", 
      title: "Branding & Identity", 
      description: "Create a memorable brand identity that stands out from the competition. Our branding experts help you define your brand voice, design professional logos, and create cohesive brand guidelines for all your marketing materials.", 
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80", 
      color: "#e22222" 
    },
    { 
      id: "video-animation",
      tag: "Video", 
      title: "Video Animation", 
      description: "Engage your audience with stunning video animations and motion graphics. From explainer videos to promotional content, we create compelling visual stories that capture attention and drive conversions.", 
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80", 
      color: "#1a4fd6" 
    },
    { 
      id: "seo",
      tag: "SEO", 
      title: "SEO & Digital Marketing", 
      description: "Boost your online visibility and drive targeted traffic with our SEO and digital marketing services. We use data-driven strategies to improve your search rankings, increase brand awareness, and generate quality leads.", 
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80", 
      color: "#e22222" 
    },
  ];

  return (
    <section style={{ background:"#f5f7fd",padding:"90px 40px 100px",fontFamily:"'Nunito', sans-serif" }}>
      <style>{`
        .service-img { transition: transform 0.5s ease; }
        .service-img-wrap:hover .service-img { transform: scale(1.04); }
        .service-get-btn:hover { background: #b71c1c !important; transform: translateY(-2px); }
        .service-talk-btn:hover { border-color: #e22222 !important; color: #e22222 !important; }
        @media (max-width: 768px) {
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
      <div style={{ textAlign:"center",marginBottom:70 }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:18 }}>
          <div style={{ width:60,height:2,background:"linear-gradient(to right, transparent, #e22222)" }} />
          <span style={{ fontSize:13,fontWeight:800,letterSpacing:"3.5px",color:"#e22222",textTransform:"uppercase" as const }}>What We Offer</span>
          <div style={{ width:60,height:2,background:"linear-gradient(to left, transparent, #e22222)" }} />
        </div>
        <h2 style={{ fontSize:"clamp(28px, 4vw, 44px)",fontWeight:900,color:"#111827",marginBottom:16,lineHeight:1.2 }}>Our <span style={{ color:"#e22222" }}>Expert Services</span></h2>
        <p style={{ fontSize:17,color:"#6b7280",maxWidth:580,margin:"0 auto",lineHeight:1.7 }}>Full-stack digital solutions tailored to accelerate your business growth</p>
      </div>
      <div style={{ maxWidth:1200,margin:"0 auto" }}>
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={service.id} 
              id={service.id}
              className="service-item" 
              style={{ 
                display:"flex",
                flexDirection:isEven?"row":"row-reverse",
                alignItems:"center",
                gap:70,
                marginBottom:index===servicesData.length-1?0:100,
                scrollMarginTop: 100
              }}
            >
              <div className="service-image" style={{ flex:"0 0 48%",minWidth:280 }}>
                <div className="service-img-wrap" style={{ borderRadius:20,overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,0.14)",position:"relative",aspectRatio:"4/3" }}>
                  <img className="service-img" src={service.image} alt={service.title} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block" }} />
                  <div style={{ position:"absolute",top:20,left:20,background:service.color,color:"#fff",fontSize:12,fontWeight:800,letterSpacing:"2px",textTransform:"uppercase" as const,padding:"7px 16px",borderRadius:50 }}>{service.tag}</div>
                </div>
              </div>
              <div className="service-content" style={{ flex:1,minWidth:280 }}>
                <div className="service-badge" style={{ display:"inline-flex",alignItems:"center",gap:8,background:service.color==="#e22222"?"rgba(226,34,34,0.08)":"rgba(26,79,214,0.08)",border:`1px solid ${service.color==="#e22222"?"rgba(226,34,34,0.2)":"rgba(26,79,214,0.2)"}`,borderRadius:50,padding:"5px 16px",marginBottom:20 }}>
                  <span style={{ width:6,height:6,borderRadius:"50%",background:service.color,display:"inline-block" }} />
                  <span style={{ fontSize:12,fontWeight:700,color:service.color,letterSpacing:"1.5px",textTransform:"uppercase" as const }}>{service.tag}</span>
                </div>
                <h2 style={{ fontSize:"clamp(22px, 2.8vw, 32px)",fontWeight:900,color:"#111827",marginBottom:18,lineHeight:1.25,letterSpacing:-0.3 }}>{service.title}</h2>
                <p style={{ fontSize:16,color:"#6b7280",lineHeight:1.8,marginBottom:32 }}>{service.description}</p>
                <div className="service-divider" style={{ display:"flex",alignItems:"center",gap:12,marginBottom:32 }}>
                  <div style={{ width:40,height:3,background:service.color,borderRadius:2 }} />
                  <div style={{ width:8,height:8,borderRadius:"50%",background:service.color,opacity:0.5 }} />
                  <div style={{ flex:1,height:1,background:"#e5e7eb" }} />
                </div>
                <div className="service-buttons" style={{ display:"flex",gap:14,flexWrap:"wrap" as const }}>
                  <button onClick={() => router.push("/hire-us")} className="service-get-btn" style={{ background:"#e22222",color:"#fff",border:"none",padding:"13px 32px",borderRadius:8,fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"'Nunito', sans-serif",transition:"all 0.3s ease",boxShadow:"0 4px 16px rgba(226,34,34,0.3)",display:"flex",alignItems:"center",gap:8 }}>
                    Let's Get Started
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <button onClick={() => router.push("/hire-us")} className="service-talk-btn" style={{ background:"transparent",color:"#374151",border:"1.5px solid #d1d5db",padding:"13px 32px",borderRadius:8,fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"'Nunito', sans-serif",transition:"all 0.3s ease" }}>Talk To Us!</button>
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
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("estore");
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const pricingCategories = [
    { key:"estore",label:"E-Store" },
    { key:"website",label:"Website Design" },
    { key:"shopify",label:"Shopify" },
    { key:"branding",label:"Branding" },
    { key:"video",label:"Video Animation" },
    { key:"seo",label:"SEO" },
  ];

  useEffect(() => { fetchPricing(); }, []);

  const fetchPricing = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://360artdesign-backend.vercel.app/api/pricing');
      const result = await response.json();
      if (result.success) {
        const updatedPlans = result.data.map((plan: any) => ({
          ...plan,
          phone: '+1 (786)-761-8327'
        }));
        setPlans(updatedPlans);
      }
      else setError(result.message || 'Failed to fetch pricing');
    } catch (err) { setError('Network error. Please check your connection.'); }
    finally { setLoading(false); }
  };

  const currentPlans = plans.filter(p => p.category === activeTab && p.isActive);

  if (loading) return (
    <section style={{ background:"#eef0f7",padding:"90px 40px 100px",textAlign:"center" }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <div style={{ display:"inline-block",width:50,height:50,border:"3px solid #e22222",borderTopColor:"transparent",borderRadius:"50%",animation:"spin 1s linear infinite" }} />
      <p style={{ marginTop:20,color:"#666" }}>Loading pricing plans...</p>
    </section>
  );

  if (error) return (
    <section style={{ background:"#eef0f7",padding:"90px 40px 100px",textAlign:"center" }}>
      <p style={{ color:"#dc2626" }}>{error}</p>
      <button onClick={fetchPricing} style={{ marginTop:20,background:"#e22222",color:"#fff",border:"none",padding:"10px 20px",borderRadius:6,cursor:"pointer" }}>Try Again</button>
    </section>
  );

  return (
    <section style={{ background:"#eef0f7",padding:"90px 40px 100px",fontFamily:"'Nunito', sans-serif" }}>
      <style>{`
        @keyframes priceFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes waveScroll { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
        .price-card { animation: priceFadeIn 0.4s ease both; }
        .features-list { max-height: 180px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #e22222 #f0f0f0; }
        .features-list::-webkit-scrollbar { width: 4px; }
        .features-list::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 2px; }
        .features-list::-webkit-scrollbar-thumb { background: #e22222; border-radius: 2px; }
        .order-btn:hover { background: #c00000 !important; transform: translateY(-2px) !important; box-shadow: 0 6px 25px rgba(226,34,34,0.5) !important; }
        .price-card-inner:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.12) !important; border-color: #e22222 !important; }
        .tab-btn { 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          position: relative !important;
        }
        .tab-btn:hover:not(.active-tab) {
          background: #f0f0f0 !important;
          color: #e22222 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06) !important;
        }
        .active-tab {
          background: #e22222 !important;
          color: #fff !important;
          box-shadow: 0 4px 20px rgba(226,34,34,0.4) !important;
        }
        .active-tab:hover {
          background: #c62828 !important;
          box-shadow: 0 6px 30px rgba(226,34,34,0.6) !important;
          transform: translateY(-2px) !important;
        }
        .tab-btn:active {
          transform: scale(0.95) !important;
        }
        .wave-animate { animation: waveScroll 4s linear infinite; }
        .phone-text:hover, .chat-text:hover {
          color: #e22222 !important;
          transition: color 0.3s ease;
        }
        @media (max-width: 768px) {
          .pricing-tabs { flex-wrap: wrap !important; gap: 8px !important; border-radius: 30px !important; padding: 12px !important; }
          .pricing-tabs button { padding: 8px 14px !important; font-size: 12px !important; flex: 1 0 auto !important; min-width: 80px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 25px !important; }
          .pricing-tabs { flex-wrap: wrap !important; justify-content: center !important; gap: 10px !important; }
        }
      `}</style>
      
      <div style={{ textAlign:"center",marginBottom:50 }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16 }}>
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontSize:13,fontWeight:800,letterSpacing:"3px",color:"#e22222",textTransform:"uppercase" }}>OUR PACKAGES</span>
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:800,color:"#1a1a1a",marginBottom:14,lineHeight:1.2 }}>Choose Your <span style={{ color:"#e22222" }}>Perfect Plan</span></h2>
        <p style={{ fontSize:16,color:"#666",maxWidth:560,margin:"0 auto",lineHeight:1.7 }}>Transparent pricing with no hidden fees. Pick the package that fits your business needs.</p>
      </div>

      {/* TABS */}
      <div className="pricing-tabs" style={{ 
        maxWidth:1100,
        margin:"0 auto 50px",
        background:"#fff",
        borderRadius:50,
        padding:"8px 10px",
        display:"flex",
        alignItems:"center",
        gap:6,
        boxShadow:"0 4px 25px rgba(0,0,0,0.08)",
        flexWrap:"wrap",
        justifyContent:"center",
        border:"1px solid #f0f0f0"
      }}>
        {pricingCategories.map(cat => {
          const isActive = activeTab === cat.key;
          return (
            <button 
              key={cat.key} 
              className={`tab-btn ${isActive ? 'active-tab' : ''}`}
              onClick={() => setActiveTab(cat.key)}
              style={{ 
                flex: "1 0 auto",
                minWidth: "80px",
                border: "none",
                cursor: "pointer",
                padding: "14px 22px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: isActive ? 800 : 600,
                fontFamily: "'Nunito', sans-serif",
                background: isActive ? "#e22222" : "transparent",
                color: isActive ? "#fff" : "#666",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isActive ? "0 4px 20px rgba(226,34,34,0.4)" : "none",
                whiteSpace: "nowrap",
                transform: "translateY(0)",
                letterSpacing: "0.3px",
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="pricing-grid" style={{ maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:28 }}>
        {currentPlans.map((plan, i) => (
          <div key={plan._id} className="price-card" style={{ animationDelay:`${i*0.08}s` }}>
            <div className="price-card-inner" style={{ 
              background:"#fff",
              borderRadius:16,
              border:"1.5px solid #e8e8e8",
              overflow:"hidden",
              display:"flex",
              flexDirection:"column",
              transition:"transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow:"0 6px 30px rgba(0,0,0,0.07)",
              height:"100%",
            }}>
              <div style={{ padding:"32px 28px 24px",flex:1 }}>
                <h3 style={{ fontSize:18,fontWeight:900,color:"#111",textAlign:"center",margin:"0 0 20px",lineHeight:1.3,letterSpacing:0.3 }}>{plan.name}</h3>
                <div style={{ textAlign:"center",marginBottom:6 }}>
                  <span style={{ fontSize:52,fontWeight:900,color:"#111",lineHeight:1 }}><sup style={{ fontSize:28,fontWeight:900,verticalAlign:"top",marginTop:10,display:"inline-block" }}>$</sup>{plan.price.replace("$","")}</span>
                </div>
                <div style={{ textAlign:"center",marginBottom:20 }}>
                  <span style={{ fontSize:16,color:"#999",textDecoration:"line-through",marginRight:6 }}>{plan.originalPrice}</span>
                  <span style={{ fontSize:14,color:"#999",fontWeight:700 }}>ONLY</span>
                </div>
                <p style={{ fontSize:11,color:"#aaa",textAlign:"center",margin:"0 0 20px",lineHeight:1.5 }}>{plan.addOn}</p>
                <div style={{ position:"relative",height:20,marginBottom:20,display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <div style={{ width:"100%",height:1,background:"#f0f0f0" }} />
                  <div style={{ position:"absolute",right:0,top:0,width:4,height:20,background:"#e22222",borderRadius:2 }} />
                </div>
                <div className="features-list">
                  {plan.features.map((feat: string, fi: number) => (
                    <div key={fi} style={{ display:"flex",alignItems:"flex-start",gap:10,marginBottom:10 }}>
                      <div style={{ flexShrink:0,width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",marginTop:1 }}>
                        <svg viewBox="0 0 20 20" width="18" height="18"><path d="M4 10 L8 14 L16 6" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontSize:14,color:"#333",lineHeight:1.5 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding:"0 28px 24px" }}>
                <button 
                  className="order-btn" 
                  style={{ 
                    width:"100%",
                    background:"#e22222",
                    color:"#fff",
                    border:"none",
                    padding:"16px",
                    borderRadius:10,
                    fontSize:16,
                    fontWeight:800,
                    cursor:"pointer",
                    fontFamily:"'Nunito', sans-serif",
                    transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    letterSpacing:0.3,
                    transform:"translateY(0)",
                    boxShadow:"0 4px 15px rgba(226,34,34,0.3)"
                  }}
                  onClick={() => router.push('/hire-us')}
                >
                  Order Now
                </button>
              </div>
              <div style={{ padding:"16px 28px 22px",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #f5f5f5" }}>
                <div>
                  <div style={{ fontSize:13,fontWeight:800,color:"#e22222",marginBottom:2 }}>Speak with us</div>
                  <div 
                    className="phone-text"
                    style={{ 
                      fontSize:13,
                      color:"#555",
                      fontWeight:600,
                      cursor:"pointer",
                      transition:"color 0.3s ease"
                    }}
                  >
                    +1 (786)-761-8327
                  </div>
                </div>
                <div>
                  <div style={{ fontSize:13,fontWeight:800,color:"#e22222",marginBottom:2 }}>Want to discuss ?</div>
                  <div 
                    className="chat-text"
                    style={{ 
                      fontSize:13,
                      color:"#555",
                      fontWeight:600,
                      cursor:"pointer",
                      transition:"color 0.3s ease"
                    }}
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).openChatbot) {
                        (window as any).openChatbot();
                      }
                    }}
                  >
                    Live Chat Now
                  </div>
                </div>
              </div>
              <div style={{ height:56,overflow:"hidden",lineHeight:0,flexShrink:0,position:"relative" }}>
                <div className="wave-animate" style={{ display:"flex",width:"200%",height:"100%" }}>
                  <svg viewBox="0 0 400 56" style={{ width:"50%",height:56,flexShrink:0 }} preserveAspectRatio="none"><path d="M0,30 C60,55 120,5 200,30 C280,55 340,5 400,30 L400,56 L0,56 Z" fill="#e22222" opacity="0.7"/><path d="M0,40 C80,15 160,55 240,40 C320,25 380,50 400,40 L400,56 L0,56 Z" fill="#e22222"/></svg>
                  <svg viewBox="0 0 400 56" style={{ width:"50%",height:56,flexShrink:0 }} preserveAspectRatio="none"><path d="M0,30 C60,55 120,5 200,30 C280,55 340,5 400,30 L400,56 L0,56 Z" fill="#e22222" opacity="0.7"/><path d="M0,40 C80,15 160,55 240,40 C320,25 380,50 400,40 L400,56 L0,56 Z" fill="#e22222"/></svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {currentPlans.length === 0 && !loading && (
        <div style={{ textAlign:"center",padding:"60px 20px" }}><p style={{ color:"#666",fontSize:16 }}>No pricing plans found for this category.</p></div>
      )}
    </section>
  );
}

// ==================== CONSULTANCY FORM SECTION ====================
function ConsultancyFormSection() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({ name:"",email:"",phone:"",message:"" });
  const [countryCode, setCountryCode] = useState("+92");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) { setError("Please fill in all required fields"); return; }
    if (!isChecked) { setError("Please agree to the terms and conditions"); return; }
    setIsLoading(true); setError(""); setSuccess("");
    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/contact', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ fullName:formData.name, email:formData.email, phoneNumber:`${countryCode} ${formData.phone}`, message:formData.message||"" }),
      });
      const data = await response.json();
      if (response.ok) { setSuccess("Thank you! We will contact you soon."); setFormData({name:"",email:"",phone:"",message:""}); setCountryCode("+92"); setIsChecked(false); setTimeout(()=>setSuccess(""),5000); }
      else setError(data.message || "Something went wrong.");
    } catch { setError("Network error. Please try again."); }
    finally { setIsLoading(false); }
  };

  return (
    <section style={{ background:"#fff",padding:"80px 40px" }}>
      <style>{`
        @media (max-width: 768px) {
          .consultancy-section { padding: 50px 20px !important; }
          .consultancy-form { padding: 25px !important; }
          .form-grid { grid-template-columns: 1fr !important; gap: 15px !important; }
        }
      `}</style>
      <div className="consultancy-section" style={{ maxWidth:900,margin:"0 auto",textAlign:"center" }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20 }}>
          <span style={{ width:50,height:2,background:"#e22222" }} />
          <span style={{ fontSize:13,fontWeight:700,letterSpacing:"4px",color:"#e22222",textTransform:"uppercase" }}>Get in Touch</span>
          <span style={{ width:50,height:2,background:"#e22222" }} />
        </div>
        <h2 style={{ fontSize:"clamp(28px, 4vw, 36px)",fontWeight:800,color:"#1a1a2e",marginBottom:16 }}>Chat With Us to Avail 50% Discount</h2>
        {error && <div style={{ background:"#fee2e2",color:"#dc2626",padding:"12px",borderRadius:8,marginBottom:20,fontSize:13 }}>{error}</div>}
        {success && <div style={{ background:"#dcfce7",color:"#16a34a",padding:"12px",borderRadius:8,marginBottom:20,fontSize:13 }}>{success}</div>}
        <form onSubmit={handleSubmit} className="consultancy-form" style={{ background:"#f8f9ff",borderRadius:24,padding:"40px",marginTop:30,textAlign:"left" }}>
          <div className="form-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:20,marginBottom:20 }}>
            <input type="text" placeholder="Enter Your Name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} required style={{ padding:"14px 18px",borderRadius:10,border:"1px solid #ddd",fontSize:14,outline:"none" }} />
            <input type="email" placeholder="Enter Your Email" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} required style={{ padding:"14px 18px",borderRadius:10,border:"1px solid #ddd",fontSize:14,outline:"none" }} />
          </div>
          <div style={{ display:"flex",gap:15,marginBottom:20,flexWrap:"wrap" }}>
            <select value={countryCode} onChange={e=>setCountryCode(e.target.value)} style={{ padding:"14px 18px",borderRadius:10,border:"1px solid #ddd",fontSize:14,outline:"none",background:"#fff",width:100 }}>
              <option>+92</option><option>+1</option><option>+44</option><option>+91</option><option>+971</option><option>+61</option>
            </select>
            <input type="tel" placeholder="Enter Your Phone Number" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} required style={{ flex:1,padding:"14px 18px",borderRadius:10,border:"1px solid #ddd",fontSize:14,outline:"none" }} />
          </div>
          <textarea rows={4} placeholder="Message" value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})} style={{ width:"100%",padding:"14px 18px",borderRadius:10,border:"1px solid #ddd",fontSize:14,outline:"none",resize:"vertical",marginBottom:20,boxSizing:"border-box" as const }}></textarea>
          <div style={{ display:"flex",alignItems:"flex-start",gap:12,marginBottom:25,flexWrap:"wrap" }}>
            <input type="checkbox" checked={isChecked} onChange={e=>setIsChecked(e.target.checked)} style={{ marginTop:2,width:18,height:18,cursor:"pointer" }} />
            <label style={{ fontSize:12,color:"#666",lineHeight:1.4,flex:1 }}>Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (PRIVACY POLICY & TERM & CONDITIONS) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to stop SMS & EMAIL</label>
          </div>
          <button type="submit" disabled={isLoading} style={{ background:"#e22222",color:"#fff",border:"none",padding:"14px 40px",borderRadius:8,fontWeight:700,fontSize:16,cursor:"pointer",transition:"background 0.3s ease",opacity:isLoading?0.7:1 }}
            onMouseEnter={e=>{if(!isLoading)e.currentTarget.style.background="#b71c1c";}} onMouseLeave={e=>{if(!isLoading)e.currentTarget.style.background="#e22222";}}>
            {isLoading?"Submitting...":"Get Free Consultancy"}
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
  const [stats, setStats] = useState({ totalReviews:0, averageRating:0 });
  const isMountedRef = useRef(true);

  useEffect(() => { isMountedRef.current = true; return () => { isMountedRef.current = false; }; }, []);
  useEffect(() => { fetchTestimonials(); }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://360artdesign-backend.vercel.app/api/testimonials');
      const result = await response.json();
      if (!isMountedRef.current) return;
      if (result.success) {
        setTestimonials(result.data.filter((t: any) => t.isActive));
        if (result.stats) setStats({ totalReviews:result.stats.totalReviews, averageRating:result.stats.averageRating });
      }
    } catch (error) { console.error('Error fetching testimonials:', error); }
    finally { if (isMountedRef.current) setLoading(false); }
  };

  const nextTestimonial = useCallback(() => {
    if (isAnimating || testimonials.length === 0 || !isMountedRef.current) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
    setTimeout(() => { if (isMountedRef.current) setIsAnimating(false); }, 500);
  }, [isAnimating, testimonials.length]);

  const prevTestimonial = () => {
    if (isAnimating || testimonials.length === 0 || !isMountedRef.current) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => { if (isMountedRef.current) setIsAnimating(false); }, 500);
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [nextTestimonial, testimonials.length]);

  if (loading) return (
    <section style={{ background:"linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)",padding:"88px 20px 120px",textAlign:"center" }}>
      <div style={{ display:"inline-block",width:50,height:50,border:"3px solid #e22222",borderTopColor:"transparent",borderRadius:"50%",animation:"spin 1s linear infinite" }} />
      <p style={{ marginTop:20,color:"#666" }}>Loading testimonials...</p>
    </section>
  );

  if (testimonials.length === 0) return (
    <section style={{ background:"linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)",padding:"88px 20px 120px",textAlign:"center" }}>
      <p style={{ color:"#666" }}>No testimonials available yet.</p>
    </section>
  );

  const t = testimonials[activeIndex];

  return (
    <section style={{ background:"linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)",padding:"88px 20px 120px",fontFamily:"'Inter', 'Nunito', sans-serif",position:"relative",overflow:"hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          .testimonial-card-body { padding: 30px 20px 24px !important; }
          .testimonial-text { font-size: 17px !important; }
          .testimonial-author-row { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .testimonial-nav-bar { padding: 16px 20px 24px !important; gap: 10px !important; }
          .testimonial-bottom-stats { flex-direction: column !important; gap: 10px !important; align-items: center !important; }
          .testimonial-stat-divider { display: none !important; }
          .testimonial-heading { font-size: 26px !important; }
        }
      `}</style>

      <div style={{ position:"absolute",top:0,left:0,right:0,height:"400px",background:"radial-gradient(circle at 0% 0%, rgba(226,34,34,0.08) 0%, transparent 70%)",pointerEvents:"none" }} />
      <div style={{ position:"absolute",bottom:0,right:0,width:"500px",height:"500px",background:"radial-gradient(circle, rgba(226,34,34,0.04) 0%, transparent 70%)",pointerEvents:"none" }} />

      <div style={{ maxWidth:1000,margin:"0 auto",position:"relative",zIndex:2 }}>
        <div style={{ textAlign:"center",marginBottom:50,padding:"0 16px" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20 }}>
            <span style={{ width:50,height:2,background:"#e22222" }} />
            <span style={{ fontSize:13,fontWeight:700,letterSpacing:"4px",color:"#e22222",textTransform:"uppercase" }}>Testimonials</span>
            <span style={{ width:50,height:2,background:"#e22222" }} />
          </div>
          <h2 className="testimonial-heading" style={{ fontSize:"clamp(26px, 4vw, 48px)",fontWeight:800,color:"#1a1a2e",marginBottom:16,lineHeight:1.2 }}>
            What Our <span style={{ color:"#e22222" }}>Clients Say</span>
          </h2>
          <p style={{ fontSize:16,color:"#666",maxWidth:560,margin:"0 auto",lineHeight:1.6 }}>Don&apos;t just take our word for it — hear from businesses we&apos;ve helped grow</p>
        </div>

        <div style={{ background:"#fff",borderRadius:32,boxShadow:"0 30px 60px rgba(0,0,0,0.08)",overflow:"hidden",position:"relative" }}>
          <div style={{ position:"absolute",top:30,left:30,fontSize:100,fontFamily:"Georgia, serif",color:"#e22222",opacity:0.1,lineHeight:1,pointerEvents:"none" }}>&ldquo;</div>

          <div className="testimonial-card-body" style={{ padding:"50px 60px 36px" }}>
            <div style={{ marginBottom:18,display:"flex",gap:4 }}>
              {[...Array(5)].map((_,i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24">
                  <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill={i < t.rating ? "#f59e0b" : "#e0e0e0"} />
                </svg>
              ))}
            </div>
            <p className="testimonial-text" style={{ fontSize:"clamp(17px, 2.2vw, 24px)",lineHeight:1.5,color:"#1a1a2e",fontWeight:500,marginBottom:28,fontStyle:"italic",position:"relative",zIndex:1 }}>
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="testimonial-author-row" style={{ display:"flex",alignItems:"center",gap:16 }}>
              <div style={{ width:56,height:56,borderRadius:"50%",background:"linear-gradient(135deg, #e22222, #b71c1c)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20,flexShrink:0,boxShadow:"0 6px 16px rgba(226,34,34,0.3)" }}>
                {t.avatar || t.name.charAt(0)}
              </div>
              <div>
                <h4 style={{ fontSize:17,fontWeight:800,color:"#1a1a2e",margin:"0 0 4px" }}>{t.name}</h4>
                <p style={{ fontSize:13,color:"#888",margin:0 }}>{t.role}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-nav-bar" style={{ padding:"16px 60px 28px",borderTop:"1px solid #f0f0f0",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#fafaff",flexWrap:"wrap",gap:12 }}>
            <button onClick={prevTestimonial}
              style={{ width:44,height:44,borderRadius:"50%",background:"#fff",border:"1px solid #e0e0e0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}
              onMouseEnter={e=>{e.currentTarget.style.background="#e22222";e.currentTarget.style.borderColor="#e22222";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.borderColor="#e0e0e0";}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18L9 12L15 6" /></svg>
            </button>
            <div style={{ display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",justifyContent:"center" }}>
              {testimonials.map((_,i) => (
                <button key={i} onClick={()=>setActiveIndex(i)} style={{ width:i===activeIndex?28:10,height:10,borderRadius:5,background:i===activeIndex?"#e22222":"#ddd",border:"none",cursor:"pointer",transition:"all 0.3s ease",padding:0 }} />
              ))}
            </div>
            <button onClick={nextTestimonial}
              style={{ width:44,height:44,borderRadius:"50%",background:"#fff",border:"1px solid #e0e0e0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}
              onMouseEnter={e=>{e.currentTarget.style.background="#e22222";e.currentTarget.style.borderColor="#e22222";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.borderColor="#e0e0e0";}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18L15 12L9 6" /></svg>
            </button>
          </div>
        </div>

        <div className="testimonial-bottom-stats" style={{ marginTop:50,display:"flex",alignItems:"center",justifyContent:"center",gap:20,flexWrap:"wrap" }}>
          <div style={{ display:"flex",alignItems:"center",gap:8 }}>
            <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="#e22222" /></svg>
            <span style={{ fontSize:14,color:"#666" }}>{stats.averageRating} Rating ({stats.totalReviews}+ Reviews)</span>
          </div>
          <div className="testimonial-stat-divider" style={{ width:1,height:20,background:"#ddd" }} />
          <div style={{ display:"flex",alignItems:"center",gap:8 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" fill="#e22222" />
            </svg>
            <span style={{ fontSize:14,color:"#666" }}>Trusted by 1000+ Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER SECTION WITH SERVICE NAVIGATION ====================
export function FooterSection() {
  const currentYear = new Date().getFullYear();
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => { fetchLogo(); }, []);

  const fetchLogo = async () => {
    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/settings/logo');
      const result = await response.json();
      if (result.success) setLogo(result.data);
    } catch (error) { console.error('Error fetching logo:', error); }
    finally { setLoadingLogo(false); }
  };

  const renderFooterLogo = () => {
    if (loadingLogo) return <div style={{ width:50,height:50,background:"rgba(255,255,255,0.1)",borderRadius:12,animation:"pulse 1.5s ease-in-out infinite" }} />;
    if (logo?.type === 'image' && logo.imageUrl) return <img src={logo.imageUrl} alt={logo.alt||"360 ArtDesign Logo"} style={{ height:50,width:'auto',maxWidth:150,objectFit:"contain",display:"block" }} />;
    return <div style={{ width:50,height:50,background:"linear-gradient(135deg, #e22222, #b71c1c)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26 }}></div>;
  };

  const footerServices = [
    { name: "Website Design & Development", href: "/services/web-design" },
    { name: "E-commerce Solutions", href: "/services/ecommerce" },
    { name: "Mobile App Development", href: "/services/mobile-apps" },
    { name: "SEO & Digital Marketing", href: "/services/seo" },
    { name: "Branding & Identity", href: "/services/branding" },
    { name: "Video Animation", href: "/services/video-animation" },
    { name: "Shopify Store", href: "/shopify" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleServiceClick = (serviceName: string, href: string) => {
    router.push(href);
  };

  const handleQuickLinkClick = (href: string) => {
    router.push(href);
  };

  return (
    <footer style={{ background:"#0a0a0a",color:"#fff",fontFamily:"'Inter', 'Nunito', sans-serif",position:"relative" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.3}50%{opacity:0.6} }
        @media (max-width: 768px) {
          .footer-container { padding: 50px 20px 40px !important; }
          .newsletter-box { flex-direction: column !important; text-align: center !important; padding: 30px 20px !important; margin-bottom: 40px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; gap: 15px !important; }
          .footer-social { justify-content: center !important; }
          .footer-logo { justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .newsletter-box { flex-direction: column !important; text-align: center !important; gap: 20px !important; }
        }
      `}</style>
      <div style={{ height:3,background:"linear-gradient(90deg, #e22222, #ff6b6b, #e22222)",width:"100%" }} />
      <div className="footer-container" style={{ maxWidth:1400,margin:"0 auto",padding:"80px 40px 50px" }}>
        <div className="newsletter-box" style={{ background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",borderRadius:24,padding:"50px 60px",marginBottom:70,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:30 }}>
          <div>
            <h3 style={{ fontSize:"clamp(22px, 3vw, 28px)",fontWeight:700,marginBottom:12 }}>Subscribe to Our Newsletter</h3>
            <p style={{ fontSize:15,color:"rgba(255,255,255,0.7)" }}>Get the latest updates on new products and upcoming sales</p>
          </div>
          <div style={{ display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center" }}>
            <input type="email" placeholder="Enter your email" style={{ padding:"14px 24px",borderRadius:12,border:"none",width:280,fontSize:14,outline:"none" }} />
            <button style={{ background:"#e22222",color:"#fff",border:"none",padding:"14px 32px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer" }}
              onMouseEnter={e=>e.currentTarget.style.background="#b71c1c"} onMouseLeave={e=>e.currentTarget.style.background="#e22222"}>Subscribe →</button>
          </div>
        </div>
        <div className="footer-grid" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:50,marginBottom:60 }}>
          <div>
            <div className="footer-logo" style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24,justifyContent:"flex-start" }}>
              {renderFooterLogo()}
              <div><div style={{ fontWeight:800,fontSize:20 }}>360 ARTDESIGN</div><div style={{ fontSize:11,color:"#e22222",letterSpacing:"2px",fontWeight:600 }}>Digital Agency</div></div>
            </div>
            <p style={{ fontSize:14,color:"rgba(255,255,255,0.6)",lineHeight:1.7,marginBottom:24 }}>We are a creative digital agency focused on crafting stunning websites, powerful brands, and growth-driven marketing strategies.</p>
            <div className="footer-social" style={{ display:"flex",gap:12 }}>
              <a 
                href="https://www.facebook.com/people/360-Art-Design/61577825022096/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width:38,height:38,borderRadius:"50%",background:"#1877F2",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none",transition:"all 0.3s ease" }}
                onMouseEnter={e=>e.currentTarget.style.background="#0d65d9"} 
                onMouseLeave={e=>e.currentTarget.style.background="#1877F2"}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* OUR SERVICES - with navigation */}
          <div>
            <h4 style={{ fontSize:18,fontWeight:700,marginBottom:24,color:"#fff" }}>Our Services</h4>
            <ul style={{ listStyle:"none",padding:0 }}>
              {footerServices.map((s) => (
                <li 
                  key={s.name} 
                  style={{ marginBottom:14,fontSize:14,color:"rgba(255,255,255,0.6)",cursor:"pointer" }} 
                  onMouseEnter={e=>e.currentTarget.style.color="#e22222"} 
                  onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.6)"}
                  onClick={() => handleServiceClick(s.name, s.href)}
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
          
          {/* QUICK LINKS - with navigation */}
          <div>
            <h4 style={{ fontSize:18,fontWeight:700,marginBottom:24,color:"#fff" }}>Quick Links</h4>
            <ul style={{ listStyle:"none",padding:0 }}>
              {quickLinks.map((link) => (
                <li 
                  key={link.name} 
                  style={{ marginBottom:14,fontSize:14,color:"rgba(255,255,255,0.6)",cursor:"pointer" }} 
                  onMouseEnter={e=>e.currentTarget.style.color="#e22222"} 
                  onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.6)"}
                  onClick={() => handleQuickLinkClick(link.href)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize:18,fontWeight:700,marginBottom:24,color:"#fff" }}>Get In Touch</h4>
            {[{icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,text:"+1 (786)-761-8327"},{icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,text:"info@bisonstechs.com"},{icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,text:"Wells Fargo Plaza 333 SE 2nd Ave, Suite 2000 Miami, FL 33131"}].map((item,i)=>(
              <div key={i} style={{ marginBottom:18,display:"flex",gap:14,alignItems:"center" }}>{item.icon}<span style={{ fontSize:14,color:"rgba(255,255,255,0.7)" }}>{item.text}</span></div>
            ))}
          </div>
        </div>
        <div className="footer-bottom" style={{ borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:30,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:20 }}>
          <p style={{ fontSize:13,color:"rgba(255,255,255,0.4)",margin:0 }}>© Copyrights {currentYear} | All Rights Reserved 360 ARTDESIGN</p>
          <div style={{ display:"flex",gap:24,flexWrap:"wrap",justifyContent:"center" }}>
            {["Privacy Policy","Terms & Conditions",""].map(link=>(
              <span 
                key={link} 
                style={{ fontSize:12,color:"rgba(255,255,255,0.4)",cursor:"pointer" }} 
                onMouseEnter={e=>e.currentTarget.style.color="#e22222"} 
                onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.4)"}
                onClick={() => {
                  const href = link === "Terms & Conditions" ? "/terms-and-conditions" : `/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;
                  handleQuickLinkClick(href);
                }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN SERVICES PAGE ====================
export default function ServicesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const hoverCountRef = useRef(0);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check for scroll target on mount
  useEffect(() => {
    const scrollToService = sessionStorage.getItem('scrollToService');
    if (scrollToService) {
      sessionStorage.removeItem('scrollToService');
      setTimeout(() => {
        const element = document.getElementById(scrollToService);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, []);

  const handleFormMouseEnter = () => {
    hoverCountRef.current += 1;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handleFormMouseLeave = () => {
    hoverCountRef.current -= 1;
    closeTimerRef.current = setTimeout(() => {
      if (hoverCountRef.current <= 0) {
        setIsFormOpen(false);
        hoverCountRef.current = 0;
      }
    }, 120);
  };

  const handleConsultancyBtnEnter = () => {
    hoverCountRef.current += 1;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsFormOpen(true);
  };

  const handleConsultancyBtnLeave = () => {
    hoverCountRef.current -= 1;
    closeTimerRef.current = setTimeout(() => {
      if (hoverCountRef.current <= 0) {
        setIsFormOpen(false);
        hoverCountRef.current = 0;
      }
    }, 120);
  };

  const handleFormClose = () => {
    hoverCountRef.current = 0;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsFormOpen(false);
  };

  return (
    <>
      <Header />
      <FloatingSideButtons 
        onOpenForm={() => setIsFormOpen(true)} 
        onConsultancyBtnEnter={handleConsultancyBtnEnter}
        onConsultancyBtnLeave={handleConsultancyBtnLeave}
      />
      <ConsultancyModal 
        isOpen={isFormOpen} 
        onClose={handleFormClose}
        onMouseEnter={handleFormMouseEnter}
        onMouseLeave={handleFormMouseLeave}
      />
      <ServicesHero />
      <ServicesList />
      <PricingSection />
      <ConsultancyFormSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}