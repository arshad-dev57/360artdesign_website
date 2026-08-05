"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaTimes, FaStar, FaQuoteLeft, FaArrowUp, FaChevronLeft, FaChevronRight, FaCommentDots, FaArrowRight } from "react-icons/fa";
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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Packages", href: "/packages" },
  { name: "Combo Packages", href: "/combo-packages" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonials", href: "/testimonials" },
];

const fallbackTestimonials = [
  {
    id: 1,
    name: "Elizabeth Blackwell",
    role: "CEO, TechStart Inc.",
    rating: 5,
    text: "Truly an incredible team of creative geniuses!! Precise, timely, highly creative, and extremely reasonable in terms of pricing! They transformed our digital presence completely. I would highly recommend 360ArtDesign to anyone looking for quality digital services.",
    avatar: "EB",
    date: "March 15, 2024",
    project: "E-commerce Website Development",
  },
  {
    id: 2,
    name: "Nick Marshall",
    role: "Marketing Director, Marshall Group",
    rating: 5,
    text: "360ArtDesign is a team of brilliant designers. I have never been disappointed by the services they have delivered. They are swift, reasonable with prices, and always unique with their ideas! The attention to detail is exceptional.",
    avatar: "NM",
    date: "February 28, 2024",
    project: "Brand Identity & Logo Design",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Founder, Creative Co.",
    rating: 5,
    text: "Absolutely phenomenal work! They transformed our online presence completely. The team is responsive, creative, and delivers beyond expectations every single time. Our website traffic has increased by 200% since working with them.",
    avatar: "SJ",
    date: "January 20, 2024",
    project: "Website Redesign & SEO",
  },
  {
    id: 4,
    name: "David Chen",
    role: "CTO, Innovate Labs",
    rating: 5,
    text: "Working with 360ArtDesign has been a game-changer for our business. Their technical expertise and creative approach delivered results that exceeded our expectations by far. The mobile app they developed is outstanding and user-friendly.",
    avatar: "DC",
    date: "December 10, 2023",
    project: "Mobile App Development",
  },
  {
    id: 5,
    name: "Maria Rodriguez",
    role: "Owner, Fashion Boutique",
    rating: 5,
    text: "The team at 360ArtDesign created a stunning website for my boutique. The design is beautiful, and the e-commerce functionality works perfectly. My online sales have doubled since launch! Thank you for your amazing work.",
    avatar: "MR",
    date: "November 5, 2023",
    project: "E-commerce Website",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Director, Wilson Real Estate",
    rating: 5,
    text: "360ArtDesign provided exceptional SEO services that helped our real estate business rank on the first page of Google. Their strategies are effective, and they're always available for support. Highly recommended!",
    avatar: "JW",
    date: "October 18, 2023",
    project: "SEO & Digital Marketing",
  },
  {
    id: 7,
    name: "Priya Sharma",
    role: "Founder, Wellness Studio",
    rating: 5,
    text: "The branding package from 360ArtDesign gave our wellness studio a complete makeover. From logo design to social media graphics, everything is cohesive and professional. Our clients love the new look!",
    avatar: "PS",
    date: "September 22, 2023",
    project: "Branding Package",
  },
  {
    id: 8,
    name: "Michael Brown",
    role: "CEO, Brown Consulting",
    rating: 5,
    text: "360ArtDesign developed a custom web application for our consulting firm that streamlined our operations. The team understood our requirements perfectly and delivered ahead of schedule. Excellent service!",
    avatar: "MB",
    date: "August 30, 2023",
    project: "Web Application",
  },
  {
    id: 9,
    name: "Lisa Thompson",
    role: "Owner, Thompson Bakery",
    rating: 5,
    text: "The video animation created by 360ArtDesign for our bakery went viral on social media! It perfectly captured our brand personality and drove huge engagement. Thank you for the amazing creative work.",
    avatar: "LT",
    date: "July 15, 2023",
    project: "Video Animation",
  },
];

// ==================== SCROLL TO TOP BUTTON ====================
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
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
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInFromRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @media (max-width: 768px) {
          .consultancy-modal { width: 90% !important; right: 5% !important; left: 5% !important; margin-top: -250px !important; border-radius: 20px !important; }
        }
      `}</style>
      <div
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.7)", zIndex: 1000, animation: "fadeIn 0.3s ease" }}
        onClick={onClose}
      />
      <div
        className="consultancy-modal"
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          marginTop: "-250px",
          width: "380px",
          height: "500px",
          background: "#fff",
          zIndex: 1001,
          boxShadow: "-5px 0 30px rgba(0,0,0,0.3)",
          animation: "slideInFromRight 0.3s ease-out",
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px 0 0 20px",
          overflow: "hidden",
        }}
      >
        <div style={{ background: "#e22222", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ color: "#fff", margin: 0, fontSize: "18px", fontWeight: 700 }}>Chat with us</h3>
            <p style={{ color: "#fff", margin: "5px 0 0", fontSize: "13px", opacity: 0.9 }}>to avail 50% discount!</p>
          </div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#fff", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}>
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
                {countries.map((c) => (<option key={c.code} value={c.code}>{c.flag}</option>))}
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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
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
    fetchLogo();
  }, []);

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
    position: "relative",
    fontSize: 13,
    fontWeight: 600,
    color: "#ffffff",
    textDecoration: "none",
    padding: "8px 18px",
    borderRadius: 25,
    background: "#e22222",
    boxShadow: "0 4px 15px rgba(226, 34, 34, 0.4)",
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const inactiveLinkStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    padding: "8px 18px",
    borderRadius: 25,
    background: "transparent",
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const renderLogo = () => {
    if (loadingLogo) {
      return (
        <div style={{ width: 50, height: 50, background: "rgba(255,255,255,0.1)", borderRadius: 8, animation: "pulse 1.5s ease-in-out infinite" }} />
      );
    }
    if (logo?.type === "image" && logo.imageUrl) {
      return (
        <img src={logo.imageUrl} alt={logo.alt || "360 ArtDesign Logo"} style={{ height: 50, width: "auto", maxWidth: 90, objectFit: "contain", display: "block" }} />
      );
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
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        @keyframes dropdownFadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes mobileMenuSlide { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes mobileOverlayFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes shimmer { 0% { transform: translateX(-100%) skewX(-15deg); } 100% { transform: translateX(250%) skewX(-15deg); } }
        .mobile-menu-open { animation: mobileMenuSlide 0.3s ease forwards !important; }
        .mobile-overlay { animation: mobileOverlayFade 0.3s ease forwards !important; }
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

      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? "rgba(18,4,4,0.97)" : "rgba(18,4,4,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          height: 70, transition: "all 0.3s ease",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
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
                      {active && (
                        <span style={{ position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "8px solid #e22222" }} />
                      )}
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
                <Link
                  key={l.name}
                  href={l.href}
                  className={active ? "" : "header-nav-link"}
                  style={active ? activePillStyle : inactiveLinkStyle}
                >
                  {l.name}
                  {active && (
                    <span style={{ position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "8px solid #e22222" }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Hire Us */}
          <button className="desktop-hire-btn" onClick={() => router.push("/hire-us")}>
            Hire Us
            <span className="grey-overlay" aria-hidden="true" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}
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

// ==================== FLOATING SIDE BUTTONS ====================
function FloatingSideButtons({ onOpenForm }: { onOpenForm: () => void }) {
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

      {/* Consultancy Button */}
      <button onClick={onOpenForm} onMouseEnter={onOpenForm} style={{ background: "#e22222", color: "#fff", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", width: 50, minHeight: 80, borderRadius: "20px 0 0 20px", fontFamily: "'Nunito', sans-serif", textAlign: "center", writingMode: "vertical-rl", textOrientation: "mixed", padding: "18px 0" }}>
        GET FREE CONSULTANCY
      </button>
    </div>
  );
}

// ==================== TESTIMONIALS HERO ====================
function TestimonialsHero() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const totalReviews = fallbackTestimonials.length;
  const averageRating = (fallbackTestimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews).toFixed(1);

  return (
    <>
      <style>{`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .testimonials-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .testimonials-hero-container { padding: 10px 20px 100px !important; }
          .testimonials-hero-container h1 { font-size: 32px !important; }
          .testimonials-hero-container p { font-size: 15px !important; padding: 0 !important; }
          .hero-stats { flex-direction: column !important; gap: 20px !important; }
          .hero-stats > div { width: 100% !important; }
          .hero-stats-divider { display: none !important; }
          .hero-stats-number { font-size: 36px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-hero-container { padding: 20px 30px 100px !important; }
        }
      `}</style>

      <section
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
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center right", opacity: 0.25, zIndex: 0 }} />

        {/* Red gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)", zIndex: 1 }} />

        {/* Content */}
        <div
          className="testimonials-hero-container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>Testimonials</span>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 900, color: "#fff", lineHeight: 1.12, marginBottom: 22, letterSpacing: -0.5 }}>
            What Our <span style={{ color: "rgba(255,255,255,0.75)" }}>Clients Say</span>
          </h1>

          {/* Subtext */}
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
            Don't just take our word for it — hear from businesses we've helped grow.
            Over {totalReviews}+ satisfied clients and counting!
          </p>

          {/* Stats Row */}
          <div className="hero-stats" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <div className="hero-stats-number" style={{ fontSize: 48, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{averageRating}</div>
              <div style={{ display: "flex", gap: 4, marginTop: 8, justifyContent: "center" }}>
                {[...Array(5)].map((_, i) => (<FaStar key={i} style={{ color: "#f59e0b", fontSize: 16 }} />))}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>Average Rating</div>
            </div>
            <div className="hero-stats-divider" style={{ width: 1, height: 60, background: "rgba(255,255,255,0.25)" }} />
            <div style={{ textAlign: "center" }}>
              <div className="hero-stats-number" style={{ fontSize: 48, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{totalReviews}+</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 14 }}>Client Reviews</div>
            </div>
            <div className="hero-stats-divider" style={{ width: 1, height: 60, background: "rgba(255,255,255,0.25)" }} />
            <div style={{ textAlign: "center" }}>
              <div className="hero-stats-number" style={{ fontSize: 48, fontWeight: 900, color: "#fff", lineHeight: 1 }}>98%</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 14 }}>Recommendation Rate</div>
            </div>
          </div>
        </div>

        {/* 3-layer animated waves — height 280px, last fills #f5f7fd */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 280, lineHeight: 0, zIndex: 2, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove2 15s linear infinite" }}>
            <svg viewBox="0 0 2880 280" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,180 C360,240 720,100 1080,180 C1440,260 1800,100 2160,180 C2520,260 2880,100 3240,180 L3240,280 L0,280 Z" fill="rgba(255,255,255,0.10)" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove1 12s linear infinite" }}>
            <svg viewBox="0 0 2880 280" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,210 C270,150 540,260 810,210 C1080,150 1350,250 1620,210 C1890,150 2160,250 2430,210 C2700,150 2880,230 2880,210 L2880,280 L0,280 Z" fill="rgba(255,255,255,0.22)" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove3 10s linear infinite" }}>
            <svg viewBox="0 0 2880 280" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,240 C240,190 480,270 720,240 C960,200 1200,265 1440,238 C1680,200 1920,262 2160,240 C2400,200 2640,262 2880,240 L2880,280 L0,280 Z" fill="#f5f7fd" />
            </svg>
          </div>
        </div>
      </section>

      <FloatingSideButtons onOpenForm={() => setIsFormOpen(true)} />
      <ConsultancyForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}

// ==================== TESTIMONIALS CAROUSEL (Compact Card) ====================
function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [current, setCurrent] = useState(0);
  const isMountedRef = useRef(true);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    isMountedRef.current = true;

    const fetchTestimonials = async () => {
      try {
        const res = await fetch("https://360artdesign-backend.vercel.app/api/testimonials");
        const data = await res.json();
        if (isMountedRef.current && data?.success && Array.isArray(data.data) && data.data.length > 0) {
          setTestimonials(data.data);
        }
      } catch {
        // fallback already set
      }
    };
    fetchTestimonials();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (autoRotateRef.current) clearTimeout(autoRotateRef.current);
    autoRotateRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => {
      if (autoRotateRef.current) clearTimeout(autoRotateRef.current);
    };
  }, [current, testimonials.length]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];
  const averageRating = (testimonials.reduce((sum, x) => sum + x.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section style={{ background: "#f5f7fd", padding: "90px 24px 80px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @keyframes cardFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .testi-card { animation: cardFadeIn 0.45s ease both; }
        @media (max-width: 640px) {
          .testi-card { padding: 28px 22px 32px !important; }
          .testi-author-row { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .testi-nav-row { gap: 12px !important; }
          .testi-stats-row { flex-direction: column !important; gap: 10px !important; }
          .testi-stats-divider { display: none !important; }
        }
      `}</style>

      {/* Section label */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <span style={{ width: 36, height: 2, background: "#e22222", display: "inline-block" }} />
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "3px", color: "#e22222", textTransform: "uppercase" }}>What Clients Say</span>
          <span style={{ width: 36, height: 2, background: "#e22222", display: "inline-block" }} />
        </div>
        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Client Testimonials</h2>
      </div>

      {/* Compact testimonial card */}
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          key={current}
          className="testi-card"
          style={{
            background: "#fff",
            borderRadius: 32,
            padding: "48px 56px 44px",
            boxShadow: "0 8px 40px rgba(30,20,60,0.09), 0 2px 8px rgba(226,34,34,0.06)",
            position: "relative",
          }}
        >
          {/* Faded quote mark */}
          <div style={{ position: "absolute", top: 24, left: 36, fontSize: 100, lineHeight: 1, color: "#e22222", opacity: 0.08, fontFamily: "Georgia, serif", userSelect: "none", pointerEvents: "none" }}>
            "
          </div>

          {/* Stars */}
          <div style={{ display: "flex", gap: 5, marginBottom: 22 }}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} style={{ color: i < t.rating ? "#f59e0b" : "#e0e0e0", fontSize: 18 }} />
            ))}
          </div>

          {/* Quote text */}
          <p style={{
            fontSize: "clamp(17px, 2.2vw, 24px)",
            color: "#2c2c3e",
            lineHeight: 1.65,
            fontStyle: "italic",
            fontWeight: 500,
            marginBottom: 36,
            position: "relative",
            zIndex: 1,
          }}>
            "{t.text}"
          </p>

          {/* Author row */}
          <div className="testi-author-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* Avatar */}
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #e22222, #b71c1c)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 18, flexShrink: 0, boxShadow: "0 4px 14px rgba(226,34,34,0.3)" }}>
                {t.avatar}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 17, color: "#1a1a2e" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{t.role}</div>
              </div>
            </div>
            {/* Project tag */}
            <span style={{ background: "rgba(226,34,34,0.09)", color: "#e22222", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
              {t.project}
            </span>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="testi-nav-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 32 }}>
          {/* Prev */}
          <button
            onClick={prev}
            style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid rgba(226,34,34,0.3)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#e22222", transition: "all 0.2s ease", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#e22222"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#e22222"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#e22222"; e.currentTarget.style.borderColor = "rgba(226,34,34,0.3)"; }}
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Dot indicators */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  width: idx === current ? 28 : 10,
                  height: 10,
                  borderRadius: 10,
                  background: idx === current ? "#e22222" : "rgba(226,34,34,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.35s ease",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid rgba(226,34,34,0.3)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#e22222", transition: "all 0.2s ease", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#e22222"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#e22222"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#e22222"; e.currentTarget.style.borderColor = "rgba(226,34,34,0.3)"; }}
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Bottom stats */}
        <div className="testi-stats-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 44, flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", lineHeight: 1 }}>{averageRating}</div>
            <div style={{ display: "flex", gap: 3, marginTop: 6, justifyContent: "center" }}>
              {[...Array(5)].map((_, i) => (<FaStar key={i} style={{ color: "#f59e0b", fontSize: 14 }} />))}
            </div>
            <div style={{ fontSize: 12, color: "#999", marginTop: 5 }}>Average Rating</div>
          </div>
          <div className="testi-stats-divider" style={{ width: 1, height: 48, background: "rgba(0,0,0,0.1)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", lineHeight: 1 }}>1000+</div>
            <div style={{ fontSize: 12, color: "#999", marginTop: 11 }}>Trusted by 1000+ Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CTA SECTION ====================
function CTASection() {
  return (
    <section style={{ background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb4d)", padding: "80px 40px", textAlign: "center" }}>
      <style>{`
        @media (max-width: 768px) {
          .cta-section { padding: 60px 20px !important; }
          .cta-section h2 { font-size: 28px !important; }
          .cta-section p { font-size: 16px !important; }
          .cta-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .cta-buttons button { width: 100% !important; max-width: 280px !important; }
        }
      `}</style>
      <div className="cta-section" style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#fff", marginBottom: 20, fontFamily: "'Nunito', sans-serif" }}>
          Ready to Become Our Next Success Story?
        </h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 30, lineHeight: 1.6, fontFamily: "'Nunito', sans-serif" }}>
          Join hundreds of satisfied clients who trust 360ArtDesign for their digital needs.
          Let's create something amazing together!
        </p>
        <div className="cta-buttons" style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            style={{ background: "#fff", color: "#e22222", border: "none", padding: "14px 38px", fontWeight: 700, cursor: "pointer", borderRadius: 8, fontFamily: "'Nunito', sans-serif", fontSize: 15 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f5f5"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}
          >
            Get Started Today
          </button>
          <button
            style={{ background: "transparent", color: "#fff", border: "2px solid #fff", padding: "12px 36px", fontWeight: 700, cursor: "pointer", borderRadius: 8, fontFamily: "'Nunito', sans-serif", fontSize: 15 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            Contact Us
          </button>
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

  useEffect(() => {
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
    fetchLogo();
  }, []);

  const renderFooterLogo = () => {
    if (loadingLogo) {
      return <div style={{ width: 50, height: 50, background: "rgba(255,255,255,0.1)", borderRadius: 12, animation: "pulse 1.5s ease-in-out infinite" }} />;
    }
    if (logo?.type === "image" && logo.imageUrl) {
      return <img src={logo.imageUrl} alt={logo.alt || "360 ArtDesign Logo"} style={{ height: 50, width: "auto", maxWidth: 150, objectFit: "contain", display: "block" }} />;
    }
    return (
      <div style={{ width: 50, height: 50, background: "linear-gradient(135deg, #e22222, #b71c1c)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>
        
      </div>
    );
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
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        @media (max-width: 768px) {
          .footer-container { padding: 50px 20px 40px !important; }
          .newsletter-box { flex-direction: column !important; text-align: center !important; padding: 30px 20px !important; margin-bottom: 40px !important; }
          .newsletter-box input { width: 100% !important; max-width: 280px !important; }
          .newsletter-box button { width: 100% !important; max-width: 280px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; gap: 15px !important; }
          .footer-social { justify-content: center !important; }
          .footer-logo-row { justify-content: center !important; }
          .footer-contact-item { justify-content: center !important; }
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
            <button
              style={{ background: "#e22222", color: "#fff", border: "none", padding: "14px 32px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#b71c1c"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#e22222"}
            >Subscribe →</button>
          </div>
        </div>

        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 50, marginBottom: 60 }}>
          <div>
            <div className="footer-logo-row" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, justifyContent: "flex-start" }}>
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
                style={{ width: 38, height: 38, borderRadius: "50%", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", textDecoration: "none", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#0d65d9"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1877F2"; }}
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
                  style={{ marginBottom: 14, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#e22222"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
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
                  style={{ marginBottom: 14, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#e22222"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                  onClick={() => handleQuickLinkClick(link.href)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Get In Touch</h4>
            <div className="footer-contact-item" style={{ marginBottom: 18, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>+1 (786)-761-8327</span>
            </div>
            <div className="footer-contact-item" style={{ marginBottom: 18, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>info@bisonstechs.com</span>
            </div>
            <div className="footer-contact-item" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
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
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", cursor: "pointer" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#e22222"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
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

// ==================== TESTIMONIALS PAGE MAIN ====================
export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <TestimonialsHero />
      <TestimonialsSection />
      <ServicesGrid />
      <CTASection />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}