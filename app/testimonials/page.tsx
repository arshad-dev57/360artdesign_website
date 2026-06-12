"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaTimes, FaStar, FaQuoteLeft, FaArrowUp } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/", active: false },
  { name: "Services", href: "/services", active: false },
  { name: "Portfolio", href: "/portfolio", active: false },
  { name: "Packages", href: "/packages", active: false },
  { name: "Combo Packages", href: "/combo-packages", active: false },
  { name: "Testimonials", href: "/testimonials", active: true },
];

const allTestimonials = [
  {
    id: 1,
    name: "Elizabeth Blackwell",
    role: "CEO, TechStart Inc.",
    rating: 5,
    text: "Truly an incredible team of creative geniuses!! Precise, timely, highly creative, and extremely reasonable in terms of pricing! They transformed our digital presence completely. I would highly recommend Web Husky to anyone looking for quality digital services.",
    avatar: "EB",
    date: "March 15, 2024",
    project: "E-commerce Website Development"
  },
  {
    id: 2,
    name: "Nick Marshall",
    role: "Marketing Director, Marshall Group",
    rating: 5,
    text: "Web Husky is a team of brilliant designers. I have never been disappointed by the services they have delivered. They are swift, reasonable with prices, and always unique with their ideas! The attention to detail is exceptional.",
    avatar: "NM",
    date: "February 28, 2024",
    project: "Brand Identity & Logo Design"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Founder, Creative Co.",
    rating: 5,
    text: "Absolutely phenomenal work! They transformed our online presence completely. The team is responsive, creative, and delivers beyond expectations every single time. Our website traffic has increased by 200% since working with them.",
    avatar: "SJ",
    date: "January 20, 2024",
    project: "Website Redesign & SEO"
  },
  {
    id: 4,
    name: "David Chen",
    role: "CTO, Innovate Labs",
    rating: 5,
    text: "Working with Web Husky has been a game-changer for our business. Their technical expertise and creative approach delivered results that exceeded our expectations by far. The mobile app they developed is outstanding and user-friendly.",
    avatar: "DC",
    date: "December 10, 2023",
    project: "Mobile App Development"
  },
  {
    id: 5,
    name: "Maria Rodriguez",
    role: "Owner, Fashion Boutique",
    rating: 5,
    text: "The team at Web Husky created a stunning website for my boutique. The design is beautiful, and the e-commerce functionality works perfectly. My online sales have doubled since launch! Thank you for your amazing work.",
    avatar: "MR",
    date: "November 5, 2023",
    project: "E-commerce Website"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Director, Wilson Real Estate",
    rating: 5,
    text: "Web Husky provided exceptional SEO services that helped our real estate business rank on the first page of Google. Their strategies are effective, and they're always available for support. Highly recommended!",
    avatar: "JW",
    date: "October 18, 2023",
    project: "SEO & Digital Marketing"
  },
  {
    id: 7,
    name: "Priya Sharma",
    role: "Founder, Wellness Studio",
    rating: 5,
    text: "The branding package from Web Husky gave our wellness studio a complete makeover. From logo design to social media graphics, everything is cohesive and professional. Our clients love the new look!",
    avatar: "PS",
    date: "September 22, 2023",
    project: "Branding Package"
  },
  {
    id: 8,
    name: "Michael Brown",
    role: "CEO, Brown Consulting",
    rating: 5,
    text: "Web Husky developed a custom web application for our consulting firm that streamlined our operations. The team understood our requirements perfectly and delivered ahead of schedule. Excellent service!",
    avatar: "MB",
    date: "August 30, 2023",
    project: "Web Application"
  },
  {
    id: 9,
    name: "Lisa Thompson",
    role: "Owner, Thompson Bakery",
    rating: 5,
    text: "The video animation created by Web Husky for our bakery went viral on social media! It perfectly captured our brand personality and drove huge engagement. Thank you for the amazing creative work.",
    avatar: "LT",
    date: "July 15, 2023",
    project: "Video Animation"
  }
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert("Thank you! We will contact you soon."); onClose(); };
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
          <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#fff", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}><FaTimes size={18} /></button>
        </div>
        <form onSubmit={handleSubmit} style={{ padding: "20px", flex: 1, overflowY: "auto" }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Full Name *</label>
            <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Email *</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Phone Number *</label>
            <div style={{ display: "flex", gap: "8px" }}>
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "18px", outline: "none", cursor: "pointer", background: "#fff", width: "70px" }}>
                {countries.map((country) => (<option key={country.code} value={country.code}>{country.flag}</option>))}
              </select>
              <input type="tel" required value={formData.number} placeholder="1234567890" onChange={(e) => setFormData({ ...formData, number: e.target.value })} style={{ flex: 1, padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none" }} />
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333", fontSize: "13px" }}>Message</label>
            <textarea value={formData.message} rows={3} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none", resize: "vertical", fontFamily: "inherit" }} />
          </div>
          <button type="submit" style={{ width: "100%", background: "#e22222", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>Submit</button>
        </form>
      </div>
    </>
  );
}

// ==================== HEADER WITH MOBILE MENU ====================
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
        @keyframes pulse { 0%,100%{opacity:0.3}50%{opacity:0.6} }
        @keyframes dropdownFadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes mobileMenuSlide{from{transform:translateX(100%)}to{transform:translateX(0)}}
        @keyframes mobileOverlayFade{from{opacity:0}to{opacity:1}}
        .mobile-menu-open{animation:mobileMenuSlide 0.3s ease forwards !important}
        .mobile-overlay{animation:mobileOverlayFade 0.3s ease forwards !important}
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
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {renderLogo()}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="desktop-nav"
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
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                              borderBottom: idx < dropdownServices.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
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
                <Link key={l.name} href={l.href} style={{ textDecoration: "none", ...activePillStyle }}>
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
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              width: 44,
              height: 44,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
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
              position: "relative",
              marginLeft: "auto",
              width: "85%",
              maxWidth: 320,
              height: "100%",
              background: "#1a1a2e",
              boxShadow: "-10px 0 40px rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            <div style={{ padding: 24, borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  cursor: "pointer",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaTimes size={18} />
              </button>
            </div>
            <div style={{ flex: 1, padding: "20px 0" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "14px 24px",
                    color: link.active ? "#e22222" : "rgba(255,255,255,0.8)",
                    fontSize: 15,
                    fontWeight: link.active ? 700 : 500,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  router.push("/hire-us");
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  margin: "20px 24px",
                  width: "calc(100% - 48px)",
                  background: "#e22222",
                  color: "#fff",
                  border: "none",
                  padding: "14px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
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
}
// ==================== TESTIMONIALS HERO (Responsive) ====================
function TestimonialsHero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const totalReviews = allTestimonials.length;
  const averageRating = (allTestimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews).toFixed(1);

  return (
    <>
      <style>{`
        @keyframes waveMove1 { 0%{transform:translateX(0)}100%{transform:translateX(-50%)} }
        @keyframes waveMove2 { 0%{transform:translateX(-50%)}100%{transform:translateX(0)} }
        @keyframes waveMove3 { 0%{transform:translateX(0)}100%{transform:translateX(-50%)} }
        .testi-hero-btn-primary:hover { background: #b71c1c !important; }
        .testi-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        @media (max-width: 768px) {
          .testimonials-hero { padding: 60px 20px 100px !important; }
          .testimonials-hero h1 { font-size: 32px !important; }
          .testimonials-hero p { font-size: 15px !important; padding: 0 15px !important; }
          .hero-stats { flex-direction: column !important; gap: 20px !important; }
          .hero-stats > div { width: 100% !important; }
          .hero-stats-divider { display: none !important; }
          .hero-stats-number { font-size: 36px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-hero { padding: 70px 30px 120px !important; }
          .testimonials-hero h1 { fontSize: 42px !important; }
        }
      `}</style>

      <section
        className="testimonials-hero"
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
        {/* Background image */}
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

        {/* Red gradient overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
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
          {/* Badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>Testimonials</span>
            <span style={{ width: 50, height: 2, background: "rgba(255,255,255,0.6)" }} />
          </div>

          {/* Heading */}
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
            What Our <span style={{ color: "rgba(255,255,255,0.75)" }}>Clients Say</span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.75,
              maxWidth: 620,
              margin: "0 auto 36px",
            }}
          >
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

        {/* Waves */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 120,
          lineHeight: 0,
          zIndex: 2,
          overflow: "hidden",
          pointerEvents: "none",
        }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove2 15s linear infinite" }}>
            <svg viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z" fill="rgba(255,255,255,0.12)" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove1 12s linear infinite" }}>
            <svg viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z" fill="rgba(255,255,255,0.30)" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%", animation: "waveMove1 10s linear infinite" }}>
            <svg viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z" fill="#eef0f7" />
            </svg>
          </div>
        </div>
      </section>

      <FloatingSideButtons onOpenForm={() => setIsFormOpen(true)} />
      <ConsultancyForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}

// ==================== TESTIMONIALS GRID (Responsive) ====================
function TestimonialsGrid() {
  const [filter, setFilter] = useState("all");

  const projects = ["all", ...new Set(allTestimonials.map(t => t.project))];
  const filteredTestimonials = filter === "all" ? allTestimonials : allTestimonials.filter(t => t.project === filter);

  return (
    <section style={{ background: "#f8f9ff", padding: "80px 40px" }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .testimonials-grid-section { padding: 60px 20px !important; }
          .filter-buttons { gap: 10px !important; }
          .filter-buttons button { padding: 6px 14px !important; font-size: 12px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .testimonial-card { padding: 20px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-grid-section { padding: 70px 30px !important; }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 25px !important; }
        }
      `}</style>
      <div className="testimonials-grid-section" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="filter-buttons" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 50 }}>
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(project)}
              style={{
                background: filter === project ? "#e22222" : "transparent",
                color: filter === project ? "#fff" : "#555",
                border: filter === project ? "none" : "1px solid #ddd",
                padding: "8px 20px",
                borderRadius: 30,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "'Nunito', sans-serif",
              }}
              onMouseEnter={(e) => { if (filter !== project) { e.currentTarget.style.borderColor = "#e22222"; e.currentTarget.style.color = "#e22222"; } }}
              onMouseLeave={(e) => { if (filter !== project) { e.currentTarget.style.borderColor = "#ddd"; e.currentTarget.style.color = "#555"; } }}
            >
              {project === "all" ? "All Reviews" : project}
            </button>
          ))}
        </div>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "30px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                animation: `fadeInUp 0.5s ease ${index * 0.05}s both`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
            >
              <div style={{ marginBottom: 20 }}>
                <FaQuoteLeft style={{ color: "#e22222", fontSize: 30, opacity: 0.3 }} />
              </div>
              <div style={{ marginBottom: 16, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {[...Array(5)].map((_, i) => (<FaStar key={i} style={{ color: i < testimonial.rating ? "#f59e0b" : "#e0e0e0", fontSize: 16 }} />))}
              </div>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>"{testimonial.text}"</p>
              <div style={{ marginBottom: 20 }}>
                <span style={{ background: "rgba(226,34,34,0.1)", color: "#e22222", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>
                  {testimonial.project}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 15, borderTop: "1px solid #f0f0f0", paddingTop: 20, flexWrap: "wrap" }}>
                <div style={{ width: 50, height: 50, borderRadius: "50%", background: "linear-gradient(135deg, #e22222, #b71c1c)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 18 }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>{testimonial.name}</h4>
                  <p style={{ fontSize: 12, color: "#888", marginBottom: 2 }}>{testimonial.role}</p>
                  <p style={{ fontSize: 11, color: "#aaa" }}>{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px" }}>
            <p style={{ fontSize: 18, color: "#666" }}>No testimonials found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// ==================== CTA SECTION (Responsive) ====================
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
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#fff", marginBottom: 20 }}>
          Ready to Become Our Next Success Story?
        </h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 30, lineHeight: 1.6 }}>
          Join hundreds of satisfied clients who trust Web Husky for their digital needs.
          Let's create something amazing together!
        </p>
        <div className="cta-buttons" style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ background: "#fff", color: "#e22222", border: "none", padding: "14px 38px", fontWeight: 700, cursor: "pointer", borderRadius: 8 }}>
            Get Started Today
          </button>
          <button style={{ background: "transparent", color: "#fff", border: "2px solid #fff", padding: "12px 36px", fontWeight: 700, cursor: "pointer", borderRadius: 8 }}>
            Contact Us
          </button>
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
// ==================== TESTIMONIALS PAGE MAIN ====================
export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <TestimonialsHero />
      <TestimonialsGrid />
      <CTASection />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}