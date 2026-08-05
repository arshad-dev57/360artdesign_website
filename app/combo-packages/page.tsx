"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaTimes, FaCommentDots, FaArrowUp, FaStar, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

// ====== SVG ILLUSTRATIONS ======
const LaptopSVG = () => (
  <svg width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="110" height="72" rx="4" fill="#e8e8e8" stroke="#bbb" strokeWidth="2"/>
    <rect x="15" y="13" width="100" height="62" rx="2" fill="#fff"/>
    <rect x="15" y="13" width="100" height="10" rx="2" fill="#ddd"/>
    <circle cx="22" cy="18" r="2.5" fill="#e22222"/>
    <circle cx="30" cy="18" r="2.5" fill="#f0a500"/>
    <circle cx="38" cy="18" r="2.5" fill="#4caf50"/>
    <rect x="20" y="28" width="60" height="5" rx="2" fill="#e0e0e0"/>
    <rect x="20" y="37" width="90" height="3" rx="1.5" fill="#eeeeee"/>
    <rect x="20" y="43" width="80" height="3" rx="1.5" fill="#eeeeee"/>
    <rect x="20" y="49" width="70" height="3" rx="1.5" fill="#eeeeee"/>
    <rect x="15" y="23" width="18" height="52" rx="0" fill="#f5f5f5"/>
    <rect x="18" y="28" width="12" height="3" rx="1" fill="#ddd"/>
    <rect x="18" y="34" width="12" height="3" rx="1" fill="#ddd"/>
    <rect x="18" y="40" width="12" height="3" rx="1" fill="#ddd"/>
    <rect x="18" y="46" width="12" height="3" rx="1" fill="#8b0000" opacity="0.5"/>
    <path d="M5 82 L125 82 L118 92 L12 92 Z" fill="#d0d0d0"/>
    <rect x="40" y="80" width="50" height="4" rx="1" fill="#bbb"/>
  </svg>
);

const AppIconsSVG = () => (
  <svg width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="36" height="36" rx="8" fill="url(#ig)"/>
    <defs>
      <linearGradient id="ig" x1="5" y1="5" x2="41" y2="41">
        <stop offset="0%" stopColor="#f09433"/>
        <stop offset="50%" stopColor="#e6683c"/>
        <stop offset="100%" stopColor="#bc1888"/>
      </linearGradient>
    </defs>
    <rect x="14" y="14" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2" fill="none"/>
    <circle cx="23" cy="23" r="5" stroke="#fff" strokeWidth="1.8" fill="none"/>
    <circle cx="30.5" cy="15.5" r="1.5" fill="#fff"/>
    <rect x="47" y="5" width="36" height="36" rx="8" fill="#1877f2"/>
    <text x="65" y="28" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="900" fontFamily="Arial">f</text>
    <rect x="89" y="5" width="36" height="36" rx="8" fill="#8b0000"/>
    <text x="107" y="28" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Arial">A</text>
    <rect x="5" y="47" width="36" height="36" rx="8" fill="#e8e8e8"/>
    <path d="M18 58 L20 56 Q23 53 26 56 L28 58" stroke="#555" strokeWidth="1.5" fill="none"/>
    <path d="M16 58 L16 74 L30 74 L30 58 Z" fill="#bbb"/>
    <text x="23" y="70" textAnchor="middle" fill="#555" fontSize="9" fontWeight="700">S</text>
    <rect x="47" y="47" width="36" height="36" rx="8" fill="#96bf48"/>
    <path d="M60 58 Q65 52 70 58 L72 74 L58 74 Z" fill="#fff" opacity="0.9"/>
    <text x="65" y="70" textAnchor="middle" fill="#5a7a1a" fontSize="10" fontWeight="900">S</text>
    <rect x="89" y="47" width="36" height="36" rx="8" fill="#1a1a2e"/>
    <text x="107" y="66" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Arial">ELEV</text>
    <text x="107" y="75" textAnchor="middle" fill="#e22222" fontSize="8" fontWeight="700" fontFamily="Arial">AR</text>
  </svg>
);

const MobileAnalyticsSVG = () => (
  <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="10" width="52" height="88" rx="8" fill="#e0e0e0" stroke="#bbb" strokeWidth="1.5"/>
    <rect x="34" y="16" width="44" height="76" rx="4" fill="#f5f5f5"/>
    <rect x="38" y="50" width="8" height="20" rx="2" fill="#ccc"/>
    <rect x="50" y="40" width="8" height="30" rx="2" fill="#8b0000" opacity="0.5"/>
    <rect x="62" y="45" width="8" height="25" rx="2" fill="#ccc"/>
    <rect x="8" y="25" width="50" height="82" rx="8" fill="#fff" stroke="#bbb" strokeWidth="1.5"/>
    <rect x="12" y="31" width="42" height="70" rx="4" fill="#fafafa"/>
    <rect x="24" y="28" width="16" height="4" rx="2" fill="#ddd"/>
    <rect x="16" y="36" width="34" height="4" rx="2" fill="#e22222" opacity="0.7"/>
    <rect x="16" y="44" width="30" height="3" rx="1.5" fill="#eee"/>
    <rect x="16" y="50" width="26" height="3" rx="1.5" fill="#eee"/>
    <rect x="16" y="62" width="7" height="18" rx="2" fill="#ddd"/>
    <rect x="26" y="55" width="7" height="25" rx="2" fill="#8b0000" opacity="0.6"/>
    <rect x="36" y="60" width="7" height="20" rx="2" fill="#ddd"/>
    <rect x="46" y="58" width="7" height="22" rx="2" fill="#e22222" opacity="0.5"/>
    <rect x="25" y="96" width="16" height="3" rx="1.5" fill="#ccc"/>
  </svg>
);

const MobileStoreSVG = () => (
  <svg width="90" height="120" viewBox="0 0 90 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="5" width="70" height="110" rx="12" fill="#1a1a1a"/>
    <rect x="14" y="10" width="62" height="100" rx="8" fill="#fff"/>
    <rect x="30" y="7" width="30" height="6" rx="3" fill="#333"/>
    <rect x="18" y="14" width="20" height="3" rx="1" fill="#eee"/>
    <rect x="52" y="14" width="20" height="3" rx="1" fill="#eee"/>
    <rect x="14" y="20" width="62" height="14" fill="#8b0000"/>
    <rect x="18" y="24" width="30" height="4" rx="2" fill="rgba(255,255,255,0.6)"/>
    <rect x="18" y="40" width="54" height="16" rx="3" fill="#f5f5f5"/>
    <rect x="21" y="44" width="25" height="3" rx="1" fill="#ddd"/>
    <rect x="21" y="49" width="15" height="3" rx="1" fill="#eee"/>
    <rect x="60" y="42" width="10" height="10" rx="2" fill="#8b0000" opacity="0.6"/>
    <rect x="18" y="62" width="54" height="12" rx="3" fill="#f5f5f5"/>
    <rect x="21" y="65" width="20" height="3" rx="1" fill="#ddd"/>
    <rect x="21" y="70" width="14" height="2" rx="1" fill="#eee"/>
    <rect x="18" y="78" width="54" height="12" rx="3" fill="#f5f5f5"/>
    <rect x="21" y="81" width="20" height="3" rx="1" fill="#ddd"/>
    <rect x="21" y="86" width="14" height="2" rx="1" fill="#eee"/>
    <rect x="18" y="96" width="54" height="10" rx="4" fill="#8b0000"/>
    <rect x="30" y="99" width="30" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
    <rect x="32" y="108" width="26" height="3" rx="1.5" fill="#555"/>
  </svg>
);

function useScrollReveal<T extends HTMLElement>(threshold=0.12): [React.RefObject<T | null>, boolean]{
  const ref=useRef<T | null>(null);const[visible,setVisible]=useState(false);
  useEffect(()=>{
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);o.disconnect();}},{threshold});
    if(ref.current)o.observe(ref.current);return()=>o.disconnect();
  },[threshold]);
  return[ref,visible];
}

// ====== SERVICES GRID ======
const services = [
  { title:"Store Themes & Customization", desc:"Already have a theme picked out for your new store? Or need some helping selecting the best theme for your product catalog? We are here to help you pick and customize the perfect theme for your online presence.", Icon:LaptopSVG },
  { title:"App Installation & Configuration", desc:"Add features and functionality to your store with the addition of Shopify apps. With thousands of apps to choose from, we will help upload and configure the best apps to your Shopify store.", Icon:AppIconsSVG },
  { title:"Store Optimization", desc:"Ensure your theme and store are ready for online with our Store Optimization services. Our team will review the SEO and keywords on your new site to make sure that your website stands out online.", Icon:MobileAnalyticsSVG },
  { title:"Store Configuration", desc:"Orders, Shipping and Payments just got easier with our Shopify Store Configuration. We take care of setting up your store settings so you don't have to. Working closely with you, we will set up your shipping, payments, and more.", Icon:MobileStoreSVG },
];

function ServiceCard({ title, desc, Icon, delay }: { title:string; desc:string; Icon:()=>React.ReactElement; delay:number }) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>(0.08);
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ padding:"36px 32px", borderLeft:`3px solid ${hovered?"#e22222":"rgba(139,0,0,0.2)"}`, background:hovered?"#fafafa":"#fff", transition:"all 0.25s ease", opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(36px)", transitionDuration:"0.6s", transitionDelay:`${delay}s` }}>
      <div style={{ marginBottom:20, transition:"transform 0.35s ease", transform:hovered?"scale(1.06) translateY(-3px)":"scale(1) translateY(0)", display:"inline-block" }}>
        <Icon />
      </div>
      <span style={{ fontSize:20,fontWeight:900,color:hovered?"#e22222":"#111827",textTransform:"uppercase",letterSpacing:1.5,display:"block",marginBottom:14,transition:"color 0.2s" }}>
        {title}
      </span>
      <p style={{ fontSize:16,color:"#6b7280",lineHeight:1.8,margin:0 }}>{desc}</p>
    </div>
  );
}

function ServicesGrid() {
  return (
    <section style={{ background:"#fff", padding:"90px 40px 100px", fontFamily:"'Nunito',sans-serif", borderTop:"1px solid #f0f0f0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:18 }}>
          <div style={{ width:60,height:2,background:"linear-gradient(to right, transparent, #e22222)" }} />
          <span style={{ fontSize:13,fontWeight:800,letterSpacing:"3.5px",color:"#e22222",textTransform:"uppercase" }}>WHAT WE OFFER</span>
        </div>
        <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#111827",lineHeight:1.2,margin:"0 0 8px" }}>
          Our <span style={{ color:"#e22222" }}>Shopify Services</span>
        </h2>
        <p style={{ fontSize:17,color:"#6b7280",maxWidth:580,lineHeight:1.75,margin:"0 0 16px" }}>Full-stack Shopify solutions tailored to get your store live and selling</p>
        <div style={{ width:60,height:3,background:"#e22222",marginBottom:56,borderRadius:2 }} />
        <style>{`.svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;background:rgba(0,0,0,0.06);}@media(max-width:640px){.svc-grid{grid-template-columns:1fr;}}`}</style>
        <div className="svc-grid">
          {services.map((s,i) => <ServiceCard key={i} {...s} delay={i*0.1} />)}
        </div>
      </div>
    </section>
  );
}

// ==================== NAV LINKS ====================
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Packages", href: "/packages" },
  { name: "Combo Packages", href: "/combo-packages" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonials", href: "/testimonials" },
];

// ==================== SCROLL TO TOP BUTTON ====================
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
function ConsultancyForm({ isOpen, onClose, onMouseEnter, onMouseLeave }: { isOpen: boolean; onClose: () => void; onMouseEnter?: () => void; onMouseLeave?: () => void }) {
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
      <div
        style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.7)", zIndex: 1000,
          animation: "fadeIn 0.3s ease",
        }}
        onClick={onClose}
      />
      <div
        className="consultancy-modal"
        style={{
          position: "fixed", right: 0, top: "50%", marginTop: "-250px",
          width: "380px", height: "500px", background: "#fff",
          zIndex: 1001, boxShadow: "-5px 0 30px rgba(0,0,0,0.3)",
          animation: "slideInFromRight 0.3s ease-out",
          display: "flex", flexDirection: "column",
          borderRadius: "20px 0 0 20px", overflow: "hidden",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div style={{ background: "#e22222", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ color: "#fff", margin: 0, fontSize: "18px", fontWeight: 700 }}>Chat with us</h3>
            <p style={{ color: "#fff", margin: "5px 0 0", fontSize: "13px", opacity: 0.9 }}>to avail 50% discount!</p>
          </div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}>
            <FaTimes size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit} style={{ padding: "20px", flex: 1, overflowY: "auto" }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Full Name *</label>
            <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Email *</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Phone Number *</label>
            <div style={{ display: "flex", gap: "8px" }}>
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "18px", outline: "none", cursor: "pointer", background: "#fff", width: "70px" }}>
                {countries.map((c) => <option key={c.code} value={c.code}>{c.flag}</option>)}
              </select>
              <input type="tel" required value={formData.number} placeholder="1234567890" onChange={(e) => setFormData({ ...formData, number: e.target.value })} style={{ flex: 1, padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none" }} />
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Message</label>
            <textarea value={formData.message} rows={3} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>
          <button type="submit" style={{ width: "100%", background: "#e22222", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>Submit</button>
        </form>
      </div>
    </>
  );
}

// ==================== FLOATING SIDE BUTTONS ====================
function FloatingSideButtons({ onOpenForm, onConsultancyBtnEnter, onConsultancyBtnLeave }: { onOpenForm: () => void; onConsultancyBtnEnter?: () => void; onConsultancyBtnLeave?: () => void }) {
  return (
    <div style={{ position: "fixed", right: 0, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 12, zIndex: 999, alignItems: "flex-end" }}>
      {/* Chat Button */}
      <div
        style={{ position: "relative", width: 50, height: 46, overflow: "visible" }}
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
        }}
      >
        <button className="chat-button" style={{ background: "#e22222", border: "none", cursor: "pointer", width: 50, height: 46, borderRadius: "40px 0 0 40px", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: 0, top: 0, zIndex: 2, transition: "opacity 0.3s ease-in-out" }}>
          <FaCommentDots color="#fff" size={20} />
        </button>
        <div className="chat-tooltip" style={{ position: "absolute", right: 0, top: 0, height: 46, background: "#e22222", borderRadius: "40px 0 0 40px", display: "flex", alignItems: "center", padding: "0 20px", transform: "translateX(100%)", transition: "transform 0.3s ease-in-out", whiteSpace: "nowrap", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", zIndex: 1, gap: "8px" }}>
          <FaCommentDots color="#fff" size={20} />
          <span>Chat with us</span>
        </div>
      </div>

      {/* Phone Button */}
      <div
        style={{ position: "relative", width: 50, height: 46, overflow: "visible" }}
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
        }}
      >
        <button className="phone-button" style={{ background: "#e22222", border: "none", cursor: "pointer", width: 50, height: 46, borderRadius: "40px 0 0 40px", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: 0, top: 0, zIndex: 2, transition: "opacity 0.3s ease-in-out" }}>
          <FaPhoneAlt color="#fff" size={18} />
        </button>
        <div className="phone-tooltip" style={{ position: "absolute", right: 0, top: 0, height: 46, background: "#e22222", borderRadius: "40px 0 0 40px", display: "flex", alignItems: "center", padding: "0 20px", transform: "translateX(100%)", transition: "transform 0.3s ease-in-out", whiteSpace: "nowrap", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", zIndex: 1, gap: "8px" }}>
          <FaPhoneAlt color="#fff" size={18} />
          <span>+1 (786)-761-8327</span>
        </div>
      </div>

      {/* Consultancy Button — click + hover */}
      <button
        onClick={onOpenForm}
        onMouseEnter={onConsultancyBtnEnter}
        onMouseLeave={onConsultancyBtnLeave}
        style={{ background: "#e22222", color: "#fff", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", width: 50, minHeight: 80, borderRadius: "20px 0 0 20px", fontFamily: "'Nunito', sans-serif", textAlign: "center", writingMode: "vertical-rl", textOrientation: "mixed", padding: "18px 0" }}
      >
        GET FREE CONSULTANCY
      </button>
    </div>
  );
}

// ==================== HEADER ====================
export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => { setMounted(true); }, []);

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
    } catch (error) {
      console.error("Error fetching logo:", error);
    } finally {
      setLoadingLogo(false);
    }
  };

  const isActive = (href: string) => {
    if (!mounted || !pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

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

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setIsDropdownOpen(false), 150);
  };

  const handleServiceClick = (serviceName: string, href: string) => {
    router.push(href);
    setIsDropdownOpen(false);
  };

  const activePillStyle: React.CSSProperties = {
    position: "relative", fontSize: 13, fontWeight: 600, color: "#ffffff",
    textDecoration: "none", padding: "8px 18px", borderRadius: 25,
    background: "#e22222", boxShadow: "0 4px 15px rgba(226, 34, 34, 0.4)",
    transition: "all 0.3s ease", display: "inline-block",
  };

  const inactiveLinkStyle: React.CSSProperties = {
    fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.75)",
    textDecoration: "none", padding: "8px 18px", borderRadius: 25,
    background: "transparent", transition: "all 0.3s ease", display: "inline-block",
  };

  const renderLogo = () => {
    if (loadingLogo) {
      return <div style={{ width: 50, height: 50, background: "rgba(255,255,255,0.1)", borderRadius: 8, animation: "pulse 1.5s ease-in-out infinite" }} />;
    }
    if (logo?.type === "image" && logo.imageUrl) {
      return <img src={logo.imageUrl} alt={logo.alt || "360 ArtDesign Logo"} style={{ height: 50, width: "auto", maxWidth: 90, objectFit: "contain", display: "block" }} />;
    }
    return (
      <div style={{ width: 50, height: 50, background: "radial-gradient(circle, #cc1111 20%, #7a0000 100%)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: "0 0 16px rgba(200,20,20,0.45)" }}>
        {logo?.icon || ""}
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
        @keyframes shimmer { 0%{left:-100%} 100%{left:200%} }
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

      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled ? "rgba(18,4,4,0.97)" : "rgba(18,4,4,0.85)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.07)", height: 70, transition: "all 0.3s ease", fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 36px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {renderLogo()}
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 8px", display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map((l) => {
              const active = isActive(l.href);
              if (l.name === "Services") {
                return (
                  <div key={l.name} ref={dropdownRef} style={{ position: "relative" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button style={{ ...(active ? activePillStyle : inactiveLinkStyle), border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap" }}>
                      {l.name}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                      {active && <span style={{ position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "8px solid #e22222" }} />}
                    </button>
                    {isDropdownOpen && (
                      <div style={{ position: "absolute", top: "100%", left: 0, marginTop: 12, background: "#1a1a2e", borderRadius: 16, minWidth: 220, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", zIndex: 1000, animation: "dropdownFadeIn 0.2s ease" }}>
                        {dropdownServices.map((service, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleServiceClick(service.name, service.href)}
                            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s ease", borderBottom: idx < dropdownServices.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", cursor: "pointer" }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "#e22222"; const a = e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement | null; if (a) { a.style.opacity = "1"; a.style.transform = "translateX(5px)"; } }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; const a = e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement | null; if (a) { a.style.opacity = "0"; a.style.transform = "translateX(0)"; } }}
                          >
                            <span>{service.name}</span>
                            <span className="dropdown-arrow" style={{ opacity: 0, transition: "opacity 0.2s ease, transform 0.2s ease", fontSize: 14, color: "#e22222" }}>→</span>
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
                  {active && <span style={{ position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "8px solid #e22222" }} />}
                </Link>
              );
            })}
          </nav>

          <button className="desktop-hire-btn" onClick={() => router.push("/hire-us")}>
            Hire Us
            <span className="grey-overlay" aria-hidden="true" />
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
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
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ display: "block", padding: "14px 24px", color: active ? "#e22222" : "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: active ? 700 : 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    {link.name}
                  </Link>
                );
              })}
              <button onClick={() => { router.push("/hire-us"); setIsMobileMenuOpen(false); }} style={{ margin: "20px 24px", width: "calc(100% - 48px)", background: "#e22222", color: "#fff", border: "none", padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                Hire Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ==================== COMBO PACKAGES HERO ====================
function ComboPackagesHero() {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const hoverCountRef = useRef(0);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToCombos = () => {
    const combosSection = document.getElementById('combo-packages-section');
    if (combosSection) {
      combosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      <style>{`
        @keyframes waveMove1 { 0%{transform:translateX(0)}100%{transform:translateX(-50%)} }
        @keyframes waveMove2 { 0%{transform:translateX(-50%)}100%{transform:translateX(0)} }
        @keyframes waveMove3 { 0%{transform:translateX(0)}100%{transform:translateX(-50%)} }
        .combo-hero-btn-primary:hover { background: #b71c1c !important; }
        .combo-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .combo-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .combo-hero { padding: 60px 20px 0 !important; }
          .combo-hero-container { padding: 10px 20px 100px !important; }
          .combo-hero h1 { font-size: 32px !important; }
          .combo-hero p { font-size: 15px !important; padding: 0 15px !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .combo-hero { padding: 70px 30px 0 !important; }
          .combo-hero-container { padding: 20px 30px 100px !important; }
          .combo-hero h1 { font-size: 42px !important; }
        }
      `}</style>

      <section
        className="combo-hero"
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

        {/* Inner content */}
        <div
          className="combo-hero-container"
          style={{ maxWidth: 1200, margin: "0 auto", width: "100%", textAlign: "center", position: "relative", zIndex: 10 }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>Combo Packages</span>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
          </div>

          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 900, color: "#fff", lineHeight: 1.12, marginBottom: 22, letterSpacing: -0.5 }}>
            Save Big with <span style={{ color: "rgba(255,255,255,0.75)" }}>Combo Deals</span>
          </h1>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
            Get two or more services bundled together at amazing discounts.
            Save up to 50% on our premium combo packages!
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button 
              onClick={scrollToCombos}
              className="combo-hero-btn-primary" 
              style={{ background: "#e22222", color: "#fff", border: "none", padding: "14px 38px", fontWeight: 800, cursor: "pointer", borderRadius: 6, fontSize: 16, fontFamily: "'Nunito', sans-serif", transition: "background 0.3s ease" }}
            >
              View All Combos
            </button>
            <button 
              onClick={() => router.push("/hire-us")}
              className="combo-hero-btn-outline" 
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.85)", padding: "12px 34px", fontWeight: 700, cursor: "pointer", borderRadius: 6, fontSize: 16, fontFamily: "'Nunito', sans-serif", transition: "all 0.3s ease" }}
            >
              Custom Combo
            </button>
          </div>
        </div>

        {/* 3-layer animated waves — last fills #eef0f7 */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 280, lineHeight: 0, zIndex: 2, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove2 15s linear infinite" }}>
            <svg viewBox="0 0 2880 280" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,180 C360,240 720,120 1080,180 C1440,240 1800,120 2160,180 C2520,240 2880,120 3240,180 L3240,280 L0,280 Z" fill="rgba(255,255,255,0.10)" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove1 12s linear infinite" }}>
            <svg viewBox="0 0 2880 280" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,210 C270,160 540,250 810,210 C1080,160 1350,240 1620,200 C1890,160 2160,240 2430,210 C2700,160 2880,220 2880,210 L2880,280 L0,280 Z" fill="rgba(255,255,255,0.22)" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove3 10s linear infinite" }}>
            <svg viewBox="0 0 2880 280" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,240 C240,200 480,270 720,245 C960,220 1200,268 1440,245 C1680,222 1920,265 2160,245 C2400,222 2640,265 2880,245 L2880,280 L0,280 Z" fill="#f8f9ff" />
            </svg>
          </div>
        </div>
      </section>

      <FloatingSideButtons
        onOpenForm={() => setIsFormOpen(true)}
        onConsultancyBtnEnter={handleConsultancyBtnEnter}
        onConsultancyBtnLeave={handleConsultancyBtnLeave}
      />
      <ConsultancyForm 
        isOpen={isFormOpen} 
        onClose={handleFormClose}
        onMouseEnter={handleFormMouseEnter}
        onMouseLeave={handleFormMouseLeave}
      />
    </>
  );
}

// ==================== COMBO PACKAGES LIST ====================
function ComboPackagesList() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => { fetchComboPackages(); }, []);

  const fetchComboPackages = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://360artdesign-backend.vercel.app/api/combo-packages");
      const result = await response.json();
      if (result.success) {
        setPackages(result.data);
      } else {
        setError(result.message || "Failed to fetch combo packages");
      }
    } catch (err) {
      console.error("Error fetching combo packages:", err);
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const getBadgeColor = (badge: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      "Best Seller": { bg: "#fef3c7", text: "#d97706" },
      Popular: { bg: "#dbeafe", text: "#2563eb" },
      New: { bg: "#dcfce7", text: "#16a34a" },
      "Hot Deal": { bg: "#fee2e2", text: "#dc2626" },
      "Limited Time": { bg: "#f3e8ff", text: "#9333ea" },
    };
    return colors[badge] || { bg: "#f3f4f6", text: "#6b7280" };
  };

  if (loading) {
    return (
      <section id="combo-packages-section" style={{ background: "#f8f9ff", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <div style={{ display: "inline-block", width: 50, height: 50, border: "3px solid #e22222", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <p style={{ marginTop: 20, color: "#666" }}>Loading combo packages...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="combo-packages-section" style={{ background: "#f8f9ff", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
        <p style={{ color: "#dc2626" }}>{error}</p>
        <button onClick={fetchComboPackages} style={{ marginTop: 20, background: "#e22222", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 6, cursor: "pointer" }}>Try Again</button>
      </section>
    );
  }

  return (
    <section id="combo-packages-section" style={{ background: "#f8f9ff", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @keyframes comboFadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .combo-card { animation: comboFadeIn 0.5s ease both; transition: all 0.3s ease; }
        .combo-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important; }
        @media (max-width: 768px) {
          .combo-list-section { padding: 60px 20px 70px !important; }
          .combo-list-section h2 { font-size: 28px !important; }
          .combo-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .combo-card-header h3 { font-size: 20px !important; }
          .combo-card-price { font-size: 28px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .combo-list-section { padding: 80px 30px 90px !important; }
          .combo-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
      `}</style>

      <div className="combo-list-section" style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none">
            <path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3px", color: "#e22222", textTransform: "uppercase" }}>BUNDLE & SAVE</span>
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none">
            <path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#1a1a1a", marginBottom: 14, lineHeight: 1.2 }}>
          Our <span style={{ color: "#e22222" }}>Combo Packages</span>
        </h2>
        <p style={{ fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          Get more value with our bundled services. Save up to 50% when you purchase multiple services together!
        </p>
      </div>

      <div className="combo-grid" style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 30 }}>
        {packages.filter((p) => p.isActive).map((pkg, index) => {
          const badgeStyle = getBadgeColor(pkg.badge);
          return (
            <div key={pkg._id} className="combo-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <div className="combo-card-header" style={{ background: "linear-gradient(135deg, #e22222 0%, #b71c1c 100%)", padding: "20px 24px", position: "relative" }}>
                  {pkg.isPopular && (
                    <div style={{ position: "absolute", top: 12, right: 20, background: "#fbbf24", color: "#92400e", fontSize: "11px", fontWeight: 800, padding: "4px 10px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4 }}>
                      <FaStar size={10} /> Most Popular
                    </div>
                  )}
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{pkg.name}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{pkg.description}</p>
                </div>

                {/* Body */}
                <div style={{ padding: "24px", flex: 1 }}>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 12 }}>Services Included:</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {pkg.services.map((service: string, idx: number) => (
                        <span key={idx} style={{ background: "#fee2e2", color: "#e22222", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>{service}</span>
                      ))}
                    </div>
                  </div>

                  {pkg.badge && (
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ background: badgeStyle.bg, color: badgeStyle.text, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, display: "inline-block" }}>{pkg.badge}</span>
                    </div>
                  )}

                  <div style={{ marginBottom: 20 }}>
                    <div className="combo-card-price" style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 32, fontWeight: 900, color: "#e22222" }}>{pkg.price}</span>
                      <span style={{ fontSize: 16, color: "#999", textDecoration: "line-through" }}>{pkg.originalPrice}</span>
                      {pkg.savings && (
                        <span style={{ background: "#dcfce7", color: "#16a34a", fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>{pkg.savings}</span>
                      )}
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 12 }}>What's Included:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {pkg.features.slice(0, 5).map((feature: string, idx: number) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <FaCheckCircle size={14} color="#e22222" />
                          <span style={{ fontSize: 13, color: "#555" }}>{feature}</span>
                        </div>
                      ))}
                      {pkg.features.length > 5 && (
                        <span style={{ fontSize: 12, color: "#999", marginTop: 4 }}>+{pkg.features.length - 5} more features</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div style={{ padding: "20px 24px 24px", borderTop: "1px solid #f0f0f0" }}>
                  <button
                    style={{ width: "100%", background: "#e22222", color: "#fff", border: "none", padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#b71c1c")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#e22222")}
                  >
                    Get This Combo
                  </button>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, flexWrap: "wrap", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "#999" }}>📞 {pkg.phone}</span>
                    <span style={{ fontSize: 12, color: "#e22222", cursor: "pointer" }}>Live Chat →</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {packages.filter((p) => p.isActive).length === 0 && !loading && (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <p style={{ color: "#666", fontSize: 16 }}>No combo packages found. Check back soon!</p>
        </div>
      )}
    </section>
  );
}

// ==================== TESTIMONIALS SECTION (Compact redesigned) ====================
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
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    fetchTestimonials();
    return () => { isMountedRef.current = false; };
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("https://360artdesign-backend.vercel.app/api/testimonials");
      const result = await response.json();
      if (!isMountedRef.current) return;
      if (result.success) {
        const active = result.data.filter((t: TestimonialType) => t.isActive);
        setTestimonials(active);
        if (result.stats) setStats({ totalReviews: result.stats.totalReviews, averageRating: result.stats.averageRating });
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  };

  const nextTestimonial = useCallback(() => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => { if (isMountedRef.current) setIsAnimating(false); }, 500);
  }, [isAnimating, testimonials.length]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => { if (isMountedRef.current) setIsAnimating(false); }, 500);
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [nextTestimonial, testimonials.length]);

  if (loading) {
    return (
      <section style={{ background: "linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)", padding: "100px 40px 120px", textAlign: "center", fontFamily: "'Nunito', sans-serif" }}>
        <style>{`@keyframes spin2 { to { transform: rotate(360deg); } }`}</style>
        <div style={{ display: "inline-block", width: 50, height: 50, border: "3px solid #e22222", borderTopColor: "transparent", borderRadius: "50%", animation: "spin2 1s linear infinite" }} />
        <p style={{ marginTop: 20, color: "#666" }}>Loading testimonials...</p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section style={{ background: "linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)", padding: "100px 40px 120px", textAlign: "center", fontFamily: "'Nunito', sans-serif" }}>
        <p style={{ color: "#666" }}>No testimonials available yet.</p>
      </section>
    );
  }

  const t = testimonials[activeIndex];

  return (
    <section style={{ background: "linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%)", padding: "100px 40px 120px", fontFamily: "'Nunito', sans-serif", position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes tFadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .t-card-anim { animation: tFadeIn 0.4s ease both; }
        @media (max-width: 768px) {
          .testi-section-inner { padding: 60px 20px 80px !important; }
          .testi-section-inner h2 { font-size: 28px !important; }
          .testi-card { padding: 28px 20px 0 !important; }
          .testi-text { font-size: 17px !important; }
          .testi-quote { font-size: 70px !important; top: 16px !important; left: 16px !important; }
          .testi-nav-bar { padding: 14px 20px 22px !important; flex-wrap: wrap !important; gap: 12px !important; }
          .testi-author { flex-direction: column !important; align-items: center !important; text-align: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testi-card { padding: 40px 30px 0 !important; }
        }
      `}</style>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 400, background: "radial-gradient(circle at 0% 0%, rgba(226,34,34,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 500, height: 500, background: "radial-gradient(circle, rgba(226,34,34,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="testi-section-inner" style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ width: 50, height: 2, background: "#e22222" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "#e22222", textTransform: "uppercase" }}>Testimonials</span>
            <span style={{ width: 50, height: 2, background: "#e22222" }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#1a1a2e", marginBottom: 14, lineHeight: 1.2 }}>
            What Our <span style={{ color: "#e22222" }}>Clients Say</span>
          </h2>
          <p style={{ fontSize: 16, color: "#666", maxWidth: 550, margin: "0 auto", lineHeight: 1.65 }}>
            Don't just take our word for it — hear from businesses we've helped grow
          </p>
        </div>

        {/* Card */}
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div key={t._id} className="t-card-anim" style={{ background: "#fff", borderRadius: 32, boxShadow: "0 20px 50px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.04)", overflow: "hidden", position: "relative" }}>
            {/* Quote mark */}
            <div className="testi-quote" style={{ position: "absolute", top: 28, left: 28, fontSize: 100, fontFamily: "Georgia, serif", color: "#e22222", opacity: 0.1, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>"</div>

            {/* Body */}
            <div className="testi-card" style={{ padding: "50px 52px 0" }}>
              <div style={{ display: "flex", gap: 5, marginBottom: 22 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24">
                    <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill={i < t.rating ? "#f59e0b" : "#e0e0e0"} />
                  </svg>
                ))}
              </div>
              <p className="testi-text" style={{ fontSize: "clamp(17px, 2.2vw, 24px)", lineHeight: 1.5, color: "#1a1a2e", fontWeight: 500, fontStyle: "italic", marginBottom: 32, position: "relative", zIndex: 1 }}>
                "{t.text}"
              </p>
              <div className="testi-author" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #e22222, #b71c1c)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 22, flexShrink: 0, boxShadow: "0 6px 18px rgba(226,34,34,0.3)" }}>
                  {t.avatar || t.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: 17, fontWeight: 800, color: "#1a1a2e", margin: "0 0 4px" }}>{t.name}</h4>
                  <p style={{ fontSize: 13, color: "#888", margin: 0 }}>{t.role}</p>
                </div>
              </div>
            </div>

            {/* Nav bar */}
            <div className="testi-nav-bar" style={{ padding: "18px 52px 30px", borderTop: "1px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fafaff" }}>
              <button
                onClick={prevTestimonial}
                style={{ width: 44, height: 44, borderRadius: "50%", background: "#fff", border: "1px solid #e0e0e0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.25s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", flexShrink: 0 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#e22222"; e.currentTarget.style.borderColor = "#e22222"; const s = e.currentTarget.querySelector("svg"); if (s) (s as SVGElement).style.stroke = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e0e0e0"; const s = e.currentTarget.querySelector("svg"); if (s) (s as SVGElement).style.stroke = "#333"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><path d="M15 18L9 12L15 6" /></svg>
              </button>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveIndex(i)} style={{ width: i === activeIndex ? 28 : 10, height: 10, borderRadius: 5, background: i === activeIndex ? "#e22222" : "#ddd", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                style={{ width: 44, height: 44, borderRadius: "50%", background: "#fff", border: "1px solid #e0e0e0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.25s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", flexShrink: 0 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#e22222"; e.currentTarget.style.borderColor = "#e22222"; const s = e.currentTarget.querySelector("svg"); if (s) (s as SVGElement).style.stroke = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e0e0e0"; const s = e.currentTarget.querySelector("svg"); if (s) (s as SVGElement).style.stroke = "#333"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><path d="M9 18L15 12L9 6" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div style={{ marginTop: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 36, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="#e22222" /></svg>
            <span style={{ fontSize: 14, color: "#666" }}>{stats.averageRating} Rating ({stats.totalReviews}+ Reviews)</span>
          </div>
          <div style={{ width: 1, height: 20, background: "#ddd" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" fill="#e22222" /></svg>
            <span style={{ fontSize: 14, color: "#666" }}>Trusted by 1000+ Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER SECTION ====================
function FooterSection() {
  const currentYear = new Date().getFullYear();
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => { fetchLogo(); }, []);

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

  const renderFooterLogo = () => {
    if (loadingLogo) return <div style={{ width: 50, height: 50, background: "rgba(255,255,255,0.1)", borderRadius: 12, animation: "pulse 1.5s ease-in-out infinite" }} />;
    if (logo?.type === "image" && logo.imageUrl) return <img src={logo.imageUrl} alt={logo.alt || "360 ArtDesign Logo"} style={{ height: 50, width: "auto", maxWidth: 150, objectFit: "contain", display: "block" }} />;
    return <div style={{ width: 50, height: 50, background: "linear-gradient(135deg, #e22222, #b71c1c)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}></div>;
  };

  // Footer services with proper navigation
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
    <footer style={{ background: "#0a0a0a", color: "#fff", fontFamily: "'Nunito', sans-serif", position: "relative" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.3}50%{opacity:0.6} }
        @media (max-width: 768px) {
          .footer-container { padding: 50px 20px 40px !important; }
          .newsletter-box { flex-direction: column !important; text-align: center !important; padding: 30px 20px !important; margin-bottom: 40px !important; }
          .newsletter-box input,.newsletter-box button { width: 100% !important; max-width: 280px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; gap: 15px !important; }
          .footer-social,.footer-logo,.footer-contact { justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .newsletter-box { flex-direction: column !important; text-align: center !important; gap: 20px !important; }
        }
      `}</style>

      <div style={{ height: 3, background: "linear-gradient(90deg, #e22222, #ff6b6b, #e22222)", width: "100%" }} />
      <div className="footer-container" style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 40px 50px" }}>
        <div className="newsletter-box" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", borderRadius: 24, padding: "50px 60px", marginBottom: 70, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 30 }}>
          <div>
            <h3 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, marginBottom: 12 }}>Subscribe to Our Newsletter</h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)" }}>Get the latest updates on new products and upcoming sales</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <input type="email" placeholder="Enter your email" style={{ padding: "14px 24px", borderRadius: 12, border: "none", width: 280, fontSize: 14, outline: "none" }} />
            <button style={{ background: "#e22222", color: "#fff", border: "none", padding: "14px 32px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#b71c1c")} onMouseLeave={(e) => (e.currentTarget.style.background = "#e22222")}>Subscribe →</button>
          </div>
        </div>

        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 50, marginBottom: 60 }}>
          <div>
            <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              {renderFooterLogo()}
              <div>
                <div style={{ fontWeight: 800, fontSize: 20 }}>360 ARTDESIGN</div>
                <div style={{ fontSize: 11, color: "#e22222", letterSpacing: "2px", fontWeight: 600 }}>Digital Agency</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 24 }}>We are a creative digital agency focused on crafting stunning websites, powerful brands, and growth-driven marketing strategies.</p>
            <div className="footer-social" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a 
                href="https://www.facebook.com/people/360-Art-Design/61577825022096/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: 38, height: 38, borderRadius: "50%", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease", textDecoration: "none" }} 
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0d65d9")} 
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1877F2")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Our Services</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {footerServices.map((s) => (
                <li 
                  key={s.name} 
                  style={{ marginBottom: 14, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.2s" }} 
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e22222")} 
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  onClick={() => handleServiceClick(s.name, s.href)}
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {quickLinks.map((link) => (
                <li 
                  key={link.name} 
                  style={{ marginBottom: 14, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.2s" }} 
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e22222")} 
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  onClick={() => handleQuickLinkClick(link.href)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Get In Touch</h4>
            <div className="footer-contact" style={{ marginBottom: 18, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>+1 (786)-761-8327</span>
            </div>
            <div className="footer-contact" style={{ marginBottom: 18, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>info@bisonstechs.com</span>
            </div>
            <div className="footer-contact" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Wells Fargo Plaza
333 SE 2nd Ave, Suite 2000
Miami, FL 33131</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>© Copyrights {currentYear} | All Rights Reserved 360 ARTDESIGN</p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {["Privacy Policy", "Terms & Conditions", ""].map((link) => (
              <span 
                key={link} 
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", cursor: "pointer", transition: "color 0.2s" }} 
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e22222")} 
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
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

// ==================== COMBO PACKAGES PAGE MAIN ====================
export default function ComboPackagesPage() {
  return (
    <>
      <Header />
      <ComboPackagesHero />
      <ComboPackagesList />
      <ServicesGrid />
      <TestimonialsSection />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}