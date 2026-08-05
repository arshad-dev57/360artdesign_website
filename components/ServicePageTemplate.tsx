"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaPhoneAlt, FaTimes, FaCommentDots, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// ==================== SERVICE PAGE CONFIG TYPE ====================
export type ServicePageConfig = {
  hero: {
    badge: string;
    title: React.ReactNode;
    paragraphStart: string;
    animatedWords: string[];
    paragraphEnd?: string;
    checklist: string[];
    primaryCta: string;
    stats: { num: string; label: string }[];
  };
  statsBand: { num: string; label: string; accent: string }[];
  details: {
    badge: string;
    title: string;
    desc: string;
    image: string;
    ratingCard: { value: string; label: string };
    floatCard: {
      icons: { node: React.ReactNode; bg: string; color: string }[];
      title: string;
      sub: string;
    };
    tiles: { label: string; sub: string; icon: React.ReactNode; bg: string; color: string }[];
  };
  tech: {
    title: string;
    desc: string;
    chips: { name: string; color: string }[];
  };
  devSection: {
    heading: string;
    checkItems: string[];
  };
  expertise: {
    heading: string;
    desc: string;
    items: { num: string; title: string; desc: string; icon: React.ReactNode }[];
    featuredImage: string;
    featuredPills: { text: string; dot: string }[];
    featuredExtra?: string;
  };
  process: {
    heading: string;
    desc: string;
    steps: { step: string; title: string; desc: string }[];
  };
  cta: {
    heading: string;
    desc: string;
  };
};

// ==================== HEADER COMPONENT ====================
function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
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
    } catch (error) { console.error("Error fetching logo:", error); }
    finally { setLoadingLogo(false); }
  };

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (href === "/services" && pathname.startsWith("/services/")) return true;
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

  const handleServiceClick = (serviceName: string, href: string) => {
    router.push(href);
    setIsDropdownOpen(false);
  };

  const handleMouseEnter = () => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); setIsDropdownOpen(true); };
  const handleMouseLeave = () => { hoverTimeout.current = setTimeout(() => setIsDropdownOpen(false), 150); };

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
    if (loadingLogo) return <div style={{ width: 50, height: 50, background: "rgba(255,255,255,0.1)", borderRadius: 8, animation: "pulse 1.5s ease-in-out infinite" }} />;
    if (logo?.type === "image" && logo.imageUrl) return <img src={logo.imageUrl} alt={logo.alt || "360 ArtDesign Logo"} style={{ height: 50, width: "auto", maxWidth: 90, objectFit: "contain", display: "block" }} />;
    return <div style={{ width: 50, height: 50, background: "radial-gradient(circle, #cc1111 20%, #7a0000 100%)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: "0 0 16px rgba(200,20,20,0.45)" }}>{logo?.icon || ""}</div>;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "Combo Packages", href: "/combo-packages" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
  ];

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
        .mobile-apps-btn {
          background: #e22222;
          color: #fff;
          border: none;
          padding: 15px 70px;
          font-size: 16px;
          font-weight: 800;
          font-family: 'Nunito', sans-serif;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
          letter-spacing: 0.3px;
        }
        .mobile-apps-btn:hover {
          background: #b71c1c;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .desktop-hire-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          header > div { padding: 0 20px !important; }
          header { height: 70px !important; }
        }
      `}</style>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled ? "rgba(18,4,4,0.97)" : "rgba(18,4,4,0.85)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.07)", height: 70, transition: "all 0.3s ease", fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 36px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {renderLogo()}
          </Link>

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
                            onMouseEnter={e => { e.currentTarget.style.color = "#e22222"; const a = e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement | null; if (a) { a.style.opacity = "1"; a.style.transform = "translateX(5px)"; } }}
                            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; const a = e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement | null; if (a) { a.style.opacity = "0"; a.style.transform = "translateX(0)"; } }}>
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

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", width: 44, height: 44, borderRadius: 12, display: "none", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

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
              <button
                className="mobile-apps-btn"
                onClick={() => { router.push("/hire-us"); setIsMobileMenuOpen(false); }}
                style={{ margin: "20px 24px", width: "calc(100% - 48px)" }}
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

// ==================== FOOTER COMPONENT ====================
function Footer() {
  const router = useRouter();
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);

  useEffect(() => { fetchLogo(); }, []);

  const fetchLogo = async () => {
    try {
      const response = await fetch("https://360artdesign-backend.vercel.app/api/settings/logo");
      const result = await response.json();
      if (result.success) setLogo(result.data);
    } catch (error) { console.error("Error fetching logo:", error); }
    finally { setLoadingLogo(false); }
  };

  const renderFooterLogo = () => {
    if (loadingLogo) return <div style={{ width: 50, height: 50, background: "rgba(255,255,255,0.1)", borderRadius: 12, animation: "pulse 1.5s ease-in-out infinite" }} />;
    if (logo?.type === "image" && logo.imageUrl) return <img src={logo.imageUrl} alt={logo.alt || "360 ArtDesign Logo"} style={{ height: 50, width: "auto", maxWidth: 150, objectFit: "contain", display: "block" }} />;
    return <div style={{ width: 50, height: 50, background: "linear-gradient(135deg, #e22222, #b71c1c)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}></div>;
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

  return (
    <footer className="ma-footer" style={{ background: "#1a1a2e", padding: "80px 40px 40px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.3}50%{opacity:0.6} }
        .footer-link:hover { color: #e22222 !important; }
        @media (max-width: 900px) {
          .ma-footer { padding: 60px 28px 32px !important; }
        }
        @media (max-width: 640px) {
          .ma-footer { padding: 48px 16px 28px !important; text-align: center; }
          .ma-footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ma-footer ul { display: inline-block; text-align: left; }
        }
      `}</style>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 40, marginBottom: 60 }}>
          <div>
            <div style={{ marginBottom: 24 }}>{renderFooterLogo()}</div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              Transform your digital presence with our expert design and development services. We create stunning websites, mobile apps, and branding solutions.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              {[
                "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
              ].map((path, i) => (
                <a key={i} href="#" style={{ width: 40, height: 40, background: "rgba(255,255,255,0.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.3s ease" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Our Services</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {footerServices.map((s) => (
                <li key={s.name} style={{ marginBottom: 14, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#e22222"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                  onClick={() => router.push(s.href)}>{s.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: 14, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#e22222"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                  onClick={() => router.push(link.href)}>{link.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                <FaPhoneAlt style={{ color: "#e22222" }} /><span>+1 (786)-761-8327</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                <FaCommentDots style={{ color: "#e22222" }} /><span>info@360artdesign.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>United States</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 32, textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
          <p>&copy; 2024 360 ArtDesign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ==================== CLIENTS DATA ====================
const clients = [
  {
    name: "Pro Teeth Guard",
    svg: (
      <svg viewBox="0 0 180 50" width="160" height="44" fill="none">
        <rect x="2" y="8" width="30" height="34" rx="6" fill="#1a6fc4" stroke="#1a6fc4" strokeWidth="1"/>
        <path d="M17 14 C10 14 6 20 6 26 C6 32 10 37 17 37 C24 37 28 32 28 26 C28 20 24 14 17 14Z" fill="white" opacity="0.9"/>
        <path d="M17 18 L14 22 L17 20 L20 22 Z" fill="#1a6fc4"/>
        <text x="38" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#1a6fc4">PRO TEETH</text>
        <text x="38" y="37" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#1a6fc4">GUARD</text>
      </svg>
    ),
  },
  {
    name: "Hyundai",
    svg: (
      <svg viewBox="0 0 200 50" width="160" height="44" fill="none">
        <text x="0" y="38" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="36" fill="#002c5f" letterSpacing="-1">HYUNDAI</text>
      </svg>
    ),
  },
  {
    name: "Blitz Industries",
    svg: (
      <svg viewBox="0 0 200 55" width="160" height="48" fill="none">
        <text x="0" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="38" fill="#4a4a4a" letterSpacing="2">BL</text>
        <path d="M82 8 L94 36 L88 36 Z" fill="#e22222"/>
        <text x="96" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="38" fill="#4a4a4a" letterSpacing="2">TZ</text>
        <text x="30" y="50" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="11" fill="#888" letterSpacing="5">INDUSTRIES</text>
      </svg>
    ),
  },
  {
    name: "Acutrack",
    svg: (
      <svg viewBox="0 0 200 55" width="180" height="48" fill="none">
        <circle cx="22" cy="25" r="20" stroke="#1a6fc4" strokeWidth="3" fill="none"/>
        <circle cx="22" cy="25" r="12" stroke="#1a6fc4" strokeWidth="2" fill="none"/>
        <path d="M2 25 Q12 10 22 25 Q32 40 42 25" stroke="#1a6fc4" strokeWidth="2.5" fill="none"/>
        <text x="50" y="22" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="#1a6fc4">Acutrack</text>
        <text x="50" y="36" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" letterSpacing="1">Fulfillment | Publishing</text>
      </svg>
    ),
  },
  {
    name: "CreateSpace",
    svg: (
      <svg viewBox="0 0 210 50" width="175" height="44" fill="none">
        <text x="0" y="34" fontFamily="Georgia, serif" fontWeight="400" fontSize="28" fill="#555">create</text>
        <text x="100" y="34" fontFamily="Georgia, serif" fontWeight="700" fontSize="28" fill="#555">space</text>
        <path d="M196 18 Q208 26 196 34" stroke="#f5a623" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M190 21 Q202 26 190 31" stroke="#f5a623" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
];

// ==================== ANIMATED ROTATING TEXT ====================
function AnimatedDeveloperText({ words }: { words: string[] }) {
  const roles = words;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setAnimating(false);
      }, 320);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      <style>{`
        @keyframes roleSlideIn  { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        @keyframes roleSlideOut { from { opacity:1; transform:translateY(0);    } to { opacity:0; transform:translateY(-14px); } }
        .role-enter { animation: roleSlideIn  0.32s ease forwards; }
        .role-exit  { animation: roleSlideOut 0.32s ease forwards; }
      `}</style>
      <span className={animating ? "role-exit" : "role-enter"}
        style={{ color: "#1a4fd6", fontWeight: 900, display: "inline-block" }}>
        {roles[currentIndex]}
      </span>
    </>
  );
}

// ==================== SCROLL REVEAL HOOK ====================
function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isVisible] as const;
}

function ScrollRevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(48px)", transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

// ==================== HERO RIGHT SIDE: PHOTOS + DASHED PATH + TESTIMONIALS ====================
function HeroRightCluster() {
  const testimonials = [
    {
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      text: "Their expertise and commitment to excellence have significantly contributed to the success of my ventures.",
      name: "Michael Thompson",
      role: "Node.js Developer",
      bg: "#eee9ff",
      top: 30, left: 140,
      floatClass: "hero-float-a",
    },
    {
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
      text: "Choosing 360 ArtDesign was one of the best decisions I've made.",
      name: "Sarah Johnson",
      role: "Angular Developer",
      bg: "#ffe8e4",
      top: 220, left: 100,
      floatClass: "hero-float-b",
    },
    {
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
      text: "I've been consistently impressed with their innovative solutions and dedication to delivering results.",
      name: "Mark Davis",
      role: "PHP Developer",
      bg: "#eaf8e4",
      top: 415, left: 115,
      floatClass: "hero-float-c",
    },
  ];

  const dots = [
    { top: 10, left: 340, size: 22, color: "#1a3f8f", delay: "0s", floatClass: "hero-dot-float-a" },
    { top: 55, left: 530, size: 12, color: "#1a4fd6", delay: "0.5s", floatClass: "hero-dot-float-b" },
    { top: 200, left: 178, size: 16, color: "#4a90e2", delay: "1s", floatClass: "hero-dot-float-c" },
    { top: 295, left: 560, size: 22, color: "#1a3f8f", delay: "0.3s", floatClass: "hero-dot-float-a" },
    { top: 360, left: 180, size: 10, color: "#1a4fd6", delay: "1.4s", floatClass: "hero-dot-float-b" },
    { top: 505, left: 400, size: 20, color: "#1a4fd6", delay: "0.8s", floatClass: "hero-dot-float-c" },
    { top: 530, left: 150, size: 8, color: "#4a90e2", delay: "1.7s", floatClass: "hero-dot-float-a" },
    { top: 70, left: 450, size: 8, color: "#4a90e2", delay: "2s", floatClass: "hero-dot-float-b" },
  ];

  const pathPhotos = [
    { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face", top: 152, left: 28, floatClass: "hero-float-b" },
    { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face", top: 344, left: 28, floatClass: "hero-float-a" },
  ];

  return (
    <>
      <style>{`
        @keyframes heroFloatA {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(6px, -14px); }
        }
        @keyframes heroFloatB {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, -12px); }
        }
        @keyframes heroFloatC {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -16px); }
        }
        @keyframes heroDotDriftA {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(10px, -16px) scale(1.35); opacity: 1; }
        }
        @keyframes heroDotDriftB {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.65; }
          50% { transform: translate(-12px, -10px) scale(1.4); opacity: 1; }
        }
        @keyframes heroDotDriftC {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(8px, 12px) scale(1.3); opacity: 1; }
        }
        @keyframes dashMarching {
          to { stroke-dashoffset: -48; }
        }
        .hero-float-a {
          animation: heroFloatA 3.8s ease-in-out infinite;
          will-change: transform;
        }
        .hero-float-b {
          animation: heroFloatB 4.4s ease-in-out infinite;
          will-change: transform;
        }
        .hero-float-c {
          animation: heroFloatC 4s ease-in-out infinite;
          will-change: transform;
        }
        .hero-dot-float-a {
          position: absolute;
          border-radius: 50%;
          animation: heroDotDriftA 2.8s ease-in-out infinite;
          will-change: transform;
        }
        .hero-dot-float-b {
          position: absolute;
          border-radius: 50%;
          animation: heroDotDriftB 3.2s ease-in-out infinite;
          will-change: transform;
        }
        .hero-dot-float-c {
          position: absolute;
          border-radius: 50%;
          animation: heroDotDriftC 3.6s ease-in-out infinite;
          will-change: transform;
        }
        .dashed-curve {
          stroke-dasharray: 5 7;
          animation: dashMarching 0.9s linear infinite;
        }
        .ma-hero-cluster {
          position: relative;
          width: 590px;
          height: 570px;
          flex-shrink: 0;
        }
        .ma-hero-cluster-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 590px;
          height: 570px;
          transform-origin: top left;
        }
        @media (max-width: 1200px) {
          .ma-hero-cluster { width: 480px; height: 464px; }
          .ma-hero-cluster-inner { transform: scale(0.813); }
        }
        @media (max-width: 900px) {
          .ma-hero-cluster { width: min(100%, 420px); height: 406px; margin: 0 auto; }
          .ma-hero-cluster-inner { transform: scale(0.712); left: 50%; margin-left: -295px; }
        }
        @media (max-width: 640px) {
          .ma-hero-cluster { width: min(100%, 320px); height: 310px; }
          .ma-hero-cluster-inner { transform: scale(0.542); }
          .ma-hero-cluster .t-bubble { max-width: 200px !important; padding: 12px 14px !important; }
        }
      `}</style>

      <div className="ma-hero-cluster">
        <div className="ma-hero-cluster-inner">
          {dots.map((d, i) => (
            <div
              key={i}
              className={d.floatClass}
              style={{
                top: d.top,
                left: d.left,
                width: d.size,
                height: d.size,
                background: d.color,
                animationDelay: d.delay,
              }}
            />
          ))}

          <svg
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
            viewBox="0 0 590 570"
          >
            <path
              className="dashed-curve"
              d="M 135 71 C 105 115, 62 148, 62 186 C 62 224, 95 245, 95 261 C 95 277, 62 338, 62 378 C 62 418, 110 438, 110 456"
              fill="none"
              stroke="#8a93a8"
              strokeWidth="2.5"
            />
            <circle cx="135" cy="71" r="5" fill="#333" />
            <circle cx="62" cy="186" r="5" fill="#333" />
            <circle cx="95" cy="261" r="5" fill="#333" />
            <circle cx="62" cy="378" r="5" fill="#333" />
            <circle cx="110" cy="456" r="5" fill="#333" />
          </svg>

          {pathPhotos.map((p, i) => (
            <div
              key={i}
              className={p.floatClass}
              style={{
                position: "absolute",
                top: p.top,
                left: p.left,
                width: 68,
                height: 68,
                borderRadius: "50%",
                border: "3px solid #fff",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                overflow: "hidden",
                background: "#eee",
                zIndex: 2,
                animationDelay: `${i * 0.45}s`,
              }}
            >
              <img src={p.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}

          {testimonials.map((t, i) => (
            <div
              key={i}
              className={t.floatClass}
              style={{
                position: "absolute",
                top: t.top,
                left: t.left,
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                zIndex: 3,
                animationDelay: `${i * 0.35}s`,
              }}
            >
              <div
                style={{
                  width: 82,
                  height: 82,
                  borderRadius: "50%",
                  border: "3px solid #fff",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.14)",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#dde",
                }}
              >
                <img src={t.photo} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              <div
                className="t-bubble"
                style={{
                  background: t.bg,
                  borderRadius: 14,
                  padding: "14px 18px",
                  maxWidth: 240,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                }}
              >
                <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, margin: 0, marginBottom: 8 }}>
                  {t.text}
                </p>
                <p style={{ fontSize: 12, color: "#111827", fontWeight: 700, margin: 0 }}>
                  {t.name}{" "}
                  <span style={{ fontWeight: 400, color: "#6b7280" }}>— {t.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ==================== EXPERTISE SECTION (professional feature grid) ====================
const bentoContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const bentoCardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ExpertiseSection({ config }: { config: ServicePageConfig }) {
  const router = useRouter();
  const expertiseItems = config.expertise.items;
  const featured = expertiseItems[0];
  const sideCards = [expertiseItems[1], expertiseItems[3]];
  const bottomCards = [expertiseItems[2], expertiseItems[4], expertiseItems[5]];

  return (
    <section className="ma-expertise-section" style={{ background: "#fafbff", padding: "110px 40px", position: "relative", overflow: "hidden" }}>
      <style>{`
        .ma-expertise-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(26,79,214,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,79,214,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .ma-bento-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(240px, auto);
          gap: 22px;
          position: relative;
          z-index: 1;
        }
        .ma-bento-featured { grid-column: span 2; grid-row: span 2; }
        .ma-bento-card {
          position: relative;
          background: #fff;
          border: 1px solid #e7ebf3;
          border-radius: 22px;
          padding: 34px 30px 30px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: default;
        }
        .ma-bento-card:not(.dark):hover {
          border-color: rgba(26,79,214,0.35);
          box-shadow: 0 24px 56px rgba(26,79,214,0.12);
        }
        .ma-bento-card .card-num {
          position: absolute;
          top: 20px;
          right: 26px;
          font-size: 52px;
          font-weight: 900;
          color: #eef2fb;
          line-height: 1;
          letter-spacing: -2px;
          user-select: none;
        }
        .ma-bento-card .card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1a4fd6, #4a7ae8);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 8px 20px rgba(26,79,214,0.28);
          flex-shrink: 0;
        }
        .ma-bento-featured-card {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          background: linear-gradient(135deg, #0d1430 0%, #12245e 55%, #0f1a45 100%);
          border: 1px solid rgba(26,79,214,0.3);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 100%;
          padding: 44px 40px 40px;
        }
        .ma-bento-featured-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.28;
        }
        .ma-bento-featured-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(13,20,48,0.1) 0%, rgba(13,20,48,0.75) 60%, rgba(13,20,48,0.95) 100%);
        }
        .ma-bento-featured-card > div { position: relative; z-index: 1; }
        .ma-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(6px);
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
        }
        .ma-bento-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #0d1430;
          border: none;
          padding: 12px 26px;
          border-radius: 8px;
          font-size: 14.5px;
          font-weight: 800;
          font-family: 'Nunito', sans-serif;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .ma-bento-view-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(0,0,0,0.35);
        }
        @media (max-width: 1024px) {
          .ma-expertise-section { padding: 80px 28px !important; }
          .ma-bento-grid { grid-template-columns: repeat(2, 1fr); }
          .ma-bento-featured { grid-column: span 2; grid-row: span 1; }
          .ma-bento-featured-card { min-height: 380px; }
        }
        @media (max-width: 640px) {
          .ma-expertise-section { padding: 56px 16px !important; }
          .ma-bento-grid { grid-template-columns: 1fr; gap: 16px; grid-auto-rows: auto; }
          .ma-bento-featured { grid-column: span 1; }
          .ma-bento-featured-card { min-height: 340px; padding: 32px 24px 28px; }
          .ma-bento-card { padding: 28px 22px 26px; }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ textAlign: "center", marginBottom: 60, position: "relative", zIndex: 1 }}
      >
        <span style={{ display: "inline-block", background: "rgba(226,34,34,0.08)", color: "#e22222", padding: "8px 20px", borderRadius: 50, fontSize: 12, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 18, border: "1px solid rgba(226,34,34,0.22)" }}>
          Why Choose Us
        </span>
        <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 900, color: "#0d1220", marginBottom: 18, letterSpacing: -0.8 }}>
          {config.expertise.heading}
        </h2>
        <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          {config.expertise.desc}
        </p>
      </motion.div>

      <motion.div
        className="ma-bento-grid"
        variants={bentoContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Featured card */}
        <motion.div className="ma-bento-featured" variants={bentoCardVariants} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
          <div className="ma-bento-featured-card">
            <img src={config.expertise.featuredImage} alt={featured.title} />
            <div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 22 }}>
                {config.expertise.featuredPills.map((pill, i) => (
                  <span key={i} className="ma-stat-pill">
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: pill.dot, display: "inline-block" }} />
                    {pill.text}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#7ea2f5", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
                {featured.num} — Flagship Strength
              </div>
              <h3 style={{ fontSize: "clamp(26px, 2.8vw, 36px)", fontWeight: 900, color: "#fff", margin: "0 0 14px", letterSpacing: -0.8, lineHeight: 1.15 }}>
                {featured.title}
              </h3>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, margin: "0 0 26px", maxWidth: 460 }}>
                {featured.desc} {config.expertise.featuredExtra ?? ""}
              </p>
              <button className="ma-bento-view-btn" onClick={() => router.push("/portfolio")}>
                View Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right column cards */}
        {sideCards.map((item, i) => (
          <motion.div key={i} className="ma-bento-card" variants={bentoCardVariants} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
            <span className="card-num">{item.num}</span>
            <div className="card-icon">{item.icon}</div>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#0d1220", margin: "0 0 10px", letterSpacing: -0.3, position: "relative", zIndex: 1 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: 14.5, color: "#6b7280", lineHeight: 1.75, margin: 0, position: "relative", zIndex: 1 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}

        {/* Bottom row cards */}
        {bottomCards.map((item, i) => (
          <motion.div
            key={i}
            className="ma-bento-card"
            style={i === 1 ? { background: "linear-gradient(135deg, #1a4fd6, #123a9e)", border: "1px solid rgba(26,79,214,0.5)" } : undefined}
            variants={bentoCardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <span className="card-num" style={i === 1 ? { color: "rgba(255,255,255,0.12)" } : undefined}>{item.num}</span>
            <div className="card-icon" style={i === 1 ? { background: "rgba(255,255,255,0.14)", boxShadow: "none", border: "1px solid rgba(255,255,255,0.2)" } : undefined}>
              {item.icon}
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: i === 1 ? "#fff" : "#0d1220", margin: "0 0 10px", letterSpacing: -0.3, position: "relative", zIndex: 1 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: 14.5, color: i === 1 ? "rgba(255,255,255,0.75)" : "#6b7280", lineHeight: 1.75, margin: 0, position: "relative", zIndex: 1 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ==================== SCREENSHOT 3 SECTION: Developer Photo + Floating Tags + Checklist ====================
function DeveloperExpertiseSection({ config }: { config: ServicePageConfig }) {
  const floatingTags = [
    { label: "Experience",    sub: "Transparency",      top:  "8%",  left: "28%",  bg: "#e8e0ff", color: "#5b21b6" },
    { label: "Agile",         sub: "Development",       top: "18%",  left:  "4%",  bg: "#dcfce7", color: "#166534" },
    { label: "100%",          sub: "Dedication",        top: "28%",  left: "46%",  bg: "#fce7f3", color: "#9d174d" },
    { label: "Tech",          sub: "Expertise",         top: "50%",  left:  "2%",  bg: "#dcfce7", color: "#166534" },
    { label: "Swift",         sub: "Communication",     top: "52%",  left: "44%",  bg: "#dbeafe", color: "#1e40af" },
    { label: "In-depth",      sub: "Consultations",     top: "70%",  left:  "6%",  bg: "#f0fdf4", color: "#166534" },
    { label: "Seamless",      sub: "Integration",       top: "68%",  left: "42%",  bg: "#dbeafe", color: "#1e40af" },
  ];

  const checkItems = config.devSection.checkItems;

  return (
    <section className="ma-dev-section" style={{ background: "#fff", padding: "110px 40px", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @keyframes tagFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        .floating-tag {
          animation: tagFloat 3.5s ease-in-out infinite;
        }
        .dev-check-item:hover .dev-check-icon {
          background: #1a4fd6 !important;
        }
        .ma-dev-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .ma-dev-section { padding: 70px 24px !important; }
          .ma-dev-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ma-dev-photo-wrap { height: 420px !important; }
          .ma-dev-photo-wrap img { width: 340px !important; height: 340px !important; }
          .ma-dev-photo-bg { width: 390px !important; height: 390px !important; }
        }
        @media (max-width: 640px) {
          .ma-dev-section { padding: 56px 16px !important; }
          .ma-dev-photo-wrap { height: 340px !important; }
          .ma-dev-photo-wrap img { width: 270px !important; height: 270px !important; border-width: 6px !important; }
          .ma-dev-photo-bg { width: 310px !important; height: 310px !important; }
          .floating-tag { padding: 6px 10px !important; min-width: 70px !important; }
          .floating-tag div:first-child { font-size: 12px !important; }
          .floating-tag div:last-child { font-size: 10px !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <h2 style={{
          textAlign: "center", fontSize: "clamp(22px, 3vw, 38px)",
          fontWeight: 900, color: "#111827", marginBottom: 72, lineHeight: 1.25,
        }}>
          {config.devSection.heading}
        </h2>

        <div className="ma-dev-grid">

          {/* LEFT: Developer photo with floating skill tags */}
          <div className="ma-dev-photo-wrap" style={{ position: "relative", height: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Circular grey background behind developer */}
            <div className="ma-dev-photo-bg" style={{
              position: "absolute",
              top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: 460, height: 460,
              borderRadius: "50%",
              background: "linear-gradient(160deg, #eef3ff 0%, #e3ebf9 100%)",
              zIndex: 0,
            }} />

            {/* Developer photo — circular */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face"
              alt="Developer"
              style={{
                position: "relative", zIndex: 1,
                width: 400, height: 400,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                border: "8px solid #fff",
                boxShadow: "0 24px 60px rgba(13,18,32,0.18)",
              }}
            />

            {/* Floating skill tags */}
            {floatingTags.map((tag, i) => (
              <div
                key={i}
                className="floating-tag"
                style={{
                  position: "absolute",
                  top: tag.top, left: tag.left,
                  background: tag.bg,
                  border: `1px solid ${tag.color}22`,
                  borderRadius: 10,
                  padding: "8px 16px",
                  zIndex: 2,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.09)",
                  animationDelay: `${i * 0.4}s`,
                  minWidth: 90,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 800, color: tag.color, lineHeight: 1.1 }}>{tag.label}</div>
                <div style={{ fontSize: 11, color: tag.color, opacity: 0.7, fontWeight: 500 }}>{tag.sub}</div>
              </div>
            ))}
          </div>

          {/* RIGHT: Checklist items */}
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 22 }}>
              {checkItems.map((item, i) => (
                <li key={i} className="dev-check-item" style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span
                    className="dev-check-icon"
                    style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: "#e8f0ff",
                      border: "2px solid #1a4fd6",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                      transition: "background 0.2s ease",
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <polyline points="2,7 5.5,10.5 12,3.5" stroke="#1a4fd6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== MAIN TEMPLATE ====================
export default function ServicePageTemplate({ config }: { config: ServicePageConfig }) {
  const router = useRouter();

  return (
    <div className="ma-page" style={{ fontFamily: "'Nunito', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @keyframes boxFloatA {
          0%, 100% { transform: translate(0, 0) rotate(var(--r, 0deg)); opacity: 0.55; }
          50% { transform: translate(14px, -22px) rotate(calc(var(--r, 0deg) + 8deg)); opacity: 1; }
        }
        @keyframes boxFloatB {
          0%, 100% { transform: translate(0, 0) rotate(var(--r, 0deg)); opacity: 0.45; }
          50% { transform: translate(-16px, -18px) rotate(calc(var(--r, 0deg) - 10deg)); opacity: 0.95; }
        }
        @keyframes boxPulse {
          0%, 100% { transform: scale(1) rotate(var(--r, 0deg)); }
          50% { transform: scale(1.12) rotate(calc(var(--r, 0deg) + 4deg)); }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }
        @keyframes heroTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.35); }
        }
        @keyframes heroPatternPan {
          from { background-position: 0 0; }
          to { background-position: 84px 84px; }
        }
        @keyframes heroAuroraA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(70px, 50px) scale(1.15); }
          66% { transform: translate(-50px, 25px) scale(0.92); }
        }
        @keyframes heroAuroraB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-80px, -45px) scale(1.18); }
          70% { transform: translate(45px, -20px) scale(0.9); }
        }
        @keyframes heroAuroraC {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(55px, -60px) scale(1.22); opacity: 1; }
        }
        .ma-hero-section {
          background: linear-gradient(180deg, #f4f7fe 0%, #fbfcff 62%, #ffffff 100%);
          padding: 120px 60px 100px;
          position: relative;
          overflow: hidden;
          min-height: 680px;
        }
        .ma-hero-boxes {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='84'%3E%3Crect x='6' y='6' width='72' height='72' rx='14' fill='none' stroke='rgba(26,79,214,0.09)' stroke-width='1.2'/%3E%3C/svg%3E");
          background-repeat: repeat;
          animation: heroPatternPan 26s linear infinite;
          pointer-events: none;
          z-index: 0;
        }
        .ma-hero-aurora {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          will-change: transform;
          z-index: 0;
        }
        .ma-hero-aurora.a {
          width: 560px; height: 560px;
          top: -180px; right: -100px;
          background: radial-gradient(circle, rgba(26,79,214,0.20) 0%, rgba(74,122,232,0.10) 50%, transparent 72%);
          animation: heroAuroraA 18s ease-in-out infinite;
        }
        .ma-hero-aurora.b {
          width: 480px; height: 480px;
          bottom: -160px; left: -120px;
          background: radial-gradient(circle, rgba(226,34,34,0.10) 0%, rgba(226,80,80,0.05) 50%, transparent 72%);
          animation: heroAuroraB 22s ease-in-out infinite;
        }
        .ma-hero-aurora.c {
          width: 380px; height: 380px;
          top: 30%; left: 38%;
          background: radial-gradient(circle, rgba(96,165,250,0.13) 0%, transparent 70%);
          animation: heroAuroraC 20s ease-in-out infinite 2s;
        }
        .ma-hero-boxes-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(ellipse 60% 75% at 8% 90%, rgba(255,255,255,0.85) 0%, transparent 60%),
            linear-gradient(180deg, transparent 70%, #ffffff 100%);
        }
        .ma-hero-twinkle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(26,79,214,0.5);
          animation: heroTwinkle 3s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }
        @media (max-width: 640px) {
          .ma-hero-aurora { filter: blur(50px); }
          .ma-hero-aurora.c { display: none; }
        }
        .ma-hero-inner {
          max-width: 1220px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 1;
        }
        .ma-hero-copy { flex: 1; min-width: 0; }
        .ma-service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .ma-features-grid {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px 100px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .ma-clients-section { padding: 88px 40px 80px; }
        .ma-service-section { padding: 110px 40px; max-width: 1200px; margin: 0 auto; }
        .ma-process-section { padding: 110px 40px; }
        .ma-cta-section { padding: 100px 40px; }
        .ma-features-header { padding: 100px 40px 72px; }
        .ma-ghost-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #0d1220;
          border: 2px solid #d3d9e5;
          padding: 13px 30px;
          font-size: 15px;
          font-weight: 800;
          font-family: 'Nunito', sans-serif;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }
        .ma-ghost-btn:hover {
          border-color: #1a4fd6;
          color: #1a4fd6;
          transform: translateY(-1px);
        }
        .ma-process-card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          padding: 34px 28px 30px;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          overflow: hidden;
        }
        .ma-process-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #e22222, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ma-process-card:hover {
          transform: translateY(-6px);
          border-color: rgba(226,34,34,0.35);
          background: rgba(255,255,255,0.05);
        }
        .ma-process-card:hover::before { opacity: 1; }
        .ma-tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid #e7ebf3;
          border-radius: 14px;
          padding: 14px 22px;
          font-size: 15px;
          font-weight: 700;
          color: #1f2937;
          box-shadow: 0 2px 10px rgba(13,18,32,0.04);
          transition: all 0.25s ease;
          cursor: default;
        }
        .ma-tech-chip:hover {
          transform: translateY(-4px);
          border-color: rgba(26,79,214,0.35);
          box-shadow: 0 12px 28px rgba(26,79,214,0.12);
        }
        .ma-stats-band {
          background: #0d1220;
          padding: 56px 40px;
        }
        .ma-stats-band-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        @media (max-width: 900px) {
          .ma-stats-band-inner { grid-template-columns: repeat(2, 1fr); }
          .ma-hero-stats { gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .ma-stats-band { padding: 40px 20px; }
          .ma-stats-band-inner { gap: 24px; }
          .ma-ghost-btn { width: 100%; justify-content: center; }
          .ma-hero-cta-row { flex-direction: column; align-items: stretch !important; }
        }

        @media (max-width: 1024px) {
          .ma-hero-section { padding: 110px 36px 80px; min-height: auto; }
          .ma-hero-inner { gap: 28px; }
          .ma-service-grid { gap: 48px; }
          .ma-features-grid { padding: 0 28px 80px; gap: 20px; }
          .ma-clients-section { padding: 70px 28px 60px !important; }
          .ma-service-section { padding: 80px 28px !important; }
          .ma-process-section { padding: 80px 28px !important; }
          .ma-cta-section { padding: 80px 28px !important; }
          .ma-features-header { padding: 80px 28px 56px !important; }
          .ma-features-header h2 { font-size: 34px !important; }
          .ma-process-section h2 { font-size: 32px !important; }
          .ma-cta-section h2 { font-size: 32px !important; }
          .mobile-apps-btn { padding: 14px 40px !important; }
        }

        @media (max-width: 900px) {
          .ma-hero-inner { flex-direction: column; align-items: stretch; text-align: left; }
          .ma-hero-copy { width: 100%; }
          .ma-service-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .ma-features-grid { grid-template-columns: 1fr !important; }
          .ma-service-section h2 { font-size: 28px !important; }
        }

        @media (max-width: 640px) {
          .ma-hero-section { padding: 96px 16px 56px; }
          .ma-hero-inner { gap: 36px; }
          .ma-clients-section { padding: 56px 16px 48px !important; }
          .ma-service-section { padding: 56px 16px !important; }
          .ma-process-section { padding: 56px 16px !important; }
          .ma-cta-section { padding: 64px 16px !important; }
          .ma-features-header { padding: 64px 16px 40px !important; }
          .ma-features-header h2 { font-size: 26px !important; }
          .ma-features-header p { font-size: 15px !important; }
          .ma-process-section h2 { font-size: 26px !important; }
          .ma-cta-section h2 { font-size: 26px !important; }
          .ma-cta-section p { font-size: 15px !important; }
          .ma-features-grid { padding: 0 16px 64px !important; }
          .feature-card-bg { min-height: 260px !important; }
          .feature-card-bg .card-content { padding: 28px 22px !important; }
          .feature-card-bg h3 { font-size: 22px !important; }
          .mobile-apps-btn { width: 100%; padding: 14px 20px !important; font-size: 15px !important; }
        }
      `}</style>

      <Header />

      {/* ── HERO SECTION ── panning box pattern + drifting aurora glows */}
      <section className="ma-hero-section">
        <div className="ma-hero-boxes" />
        <div className="ma-hero-aurora a" />
        <div className="ma-hero-aurora b" />
        <div className="ma-hero-aurora c" />
        <div className="ma-hero-boxes-overlay" />
        {[[10, 22, 0], [24, 62, 1], [40, 15, 0.5], [6, 74, 1.5], [48, 82, 0.7], [68, 12, 1.2], [86, 58, 0.3]].map(([l, t, d], i) => (
          <div key={i} className="ma-hero-twinkle" style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${d}s` }} />
        ))}

        <div className="ma-hero-inner">
          <div className="ma-hero-copy">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(26,79,214,0.07)", border: "1px solid rgba(26,79,214,0.18)",
              borderRadius: 50, padding: "7px 18px", marginBottom: 22,
            }}>
              <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#1a4fd6", animation: "glowPulse 2s ease-in-out infinite" }} />
              </span>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#1a4fd6", letterSpacing: "1.8px", textTransform: "uppercase" }}>
                {config.hero.badge}
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(30px, 3.6vw, 50px)",
              fontWeight: 900, color: "#0d1220",
              marginBottom: 22, lineHeight: 1.14, letterSpacing: -1.2,
            }}>
              {config.hero.title}
            </h1>

            <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4b5563", lineHeight: 1.85, marginBottom: 30, maxWidth: 520 }}>
              {config.hero.paragraphStart}{" "}
              <AnimatedDeveloperText words={config.hero.animatedWords} />
              {config.hero.paragraphEnd ?? "."}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 34px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px 20px", maxWidth: 520 }}>
              {config.hero.checklist.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: 8,
                    background: "linear-gradient(135deg, #1a4fd6, #4a7ae8)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    boxShadow: "0 3px 8px rgba(26,79,214,0.28)",
                  }}>
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                      <polyline points="2,7 5.5,10.5 12,3.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 14.5, fontWeight: 700, color: "#1f2937" }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="ma-hero-cta-row" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 38 }}>
              <button className="mobile-apps-btn" onClick={() => router.push("/hire-us")}>
                {config.hero.primaryCta}
              </button>
              <button
                className="ma-ghost-btn"
                onClick={() => router.push("/portfolio")}
              >
                View Portfolio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>

            <div className="ma-hero-stats" style={{ display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap" }}>
              {config.hero.stats.map((s, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 24, fontWeight: 900, color: "#0d1220", letterSpacing: -0.5 }}>{s.num}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.8px" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <HeroRightCluster />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <ScrollRevealSection>
        <section className="ma-stats-band">
          <div className="ma-stats-band-inner">
            {config.statsBand.map((s, i) => (
              <div key={i} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 900, color: "#fff", letterSpacing: -1, lineHeight: 1.1, marginBottom: 8 }}>
                  {s.num}
                </div>
                <div style={{ width: 28, height: 3, background: s.accent, borderRadius: 2, margin: "0 auto 10px" }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollRevealSection>

      {/* ── TRUSTED BY SECTION ── */}
      <ScrollRevealSection>
        <section className="ma-clients-section" style={{ background: "#fff", fontFamily: "'Nunito', sans-serif", position: "relative", zIndex: 1 }}>
          <style>{`
            @keyframes clientsScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ma-clients-track { gap: 80px; }
            @media (max-width: 640px) {
              .ma-clients-track { gap: 40px !important; }
            }
          `}</style>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 18 }}>
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3px", color: "#333", textTransform: "uppercase" }}>OUR CLIENTS</span>
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 800, color: "#1a1a1a", marginBottom: 60, lineHeight: 1.2 }}>Some of the Clients We&apos;ve Served</h2>
          <div style={{ overflow: "hidden", width: "100%", maxWidth: 1400, margin: "0 auto" }}>
            <div className="ma-clients-track" style={{ display: "flex", alignItems: "center", width: "max-content", animation: "clientsScroll 25s linear infinite" }}>
              {[...clients, ...clients].map((c, index) => (
                <div key={`${c.name}-${index}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.85, cursor: "default", flexShrink: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.85")}>
                  {c.svg}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* ── SERVICE DETAILS ── */}
      <section className="ma-service-section">
        <style>{`
          .ma-service-img-wrap {
            position: relative;
          }
          .ma-service-img-frame {
            position: absolute;
            top: 24px; left: -24px; right: 24px; bottom: -24px;
            border: 2px dashed rgba(26,79,214,0.25);
            border-radius: 28px;
            pointer-events: none;
          }
          .ma-service-float-card {
            position: absolute;
            background: #fff;
            border: 1px solid #eef1f7;
            border-radius: 16px;
            box-shadow: 0 16px 44px rgba(13,18,32,0.14);
            padding: 14px 18px;
            z-index: 2;
          }
          .ma-feature-tile {
            display: flex;
            align-items: center;
            gap: 14px;
            background: #fff;
            border: 1px solid #eef1f7;
            border-radius: 14px;
            padding: 14px 16px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          }
          .ma-feature-tile:hover {
            border-color: rgba(26,79,214,0.35);
            box-shadow: 0 12px 30px rgba(26,79,214,0.10);
            transform: translateX(4px);
          }
          .ma-feature-tile .tile-icon {
            width: 42px;
            height: 42px;
            border-radius: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 19px;
          }
          .ma-feature-tiles {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .ma-feature-tiles > :last-child { grid-column: span 2; }
          @media (max-width: 900px) {
            .ma-service-img-frame { left: -12px; right: 12px; top: 12px; bottom: -12px; }
            .ma-feature-tiles { grid-template-columns: 1fr; }
            .ma-feature-tiles > :last-child { grid-column: span 1; }
          }
          @media (max-width: 640px) {
            .ma-service-float-card.rating { top: -14px !important; right: 8px !important; }
            .ma-service-float-card.platforms { bottom: -14px !important; left: 8px !important; }
          }
        `}</style>
        <div className="ma-service-grid">
          <motion.div
            className="ma-service-img-wrap"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ma-service-img-frame" />
            <img
              src={config.details.image}
              alt={config.details.title}
              style={{ width: "100%", borderRadius: 24, boxShadow: "0 30px 80px rgba(0,0,0,0.14)", position: "relative", zIndex: 1, display: "block" }}
            />

            <motion.div
              className="ma-service-float-card rating"
              style={{ top: -22, right: -18 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 26, fontWeight: 900, color: "#0d1220", letterSpacing: -1 }}>{config.details.ratingCard.value}</span>
                <div>
                  <div style={{ display: "flex", gap: 2, color: "#f6a723", fontSize: 11, marginBottom: 3 }}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#6b7280" }}>{config.details.ratingCard.label}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="ma-service-float-card platforms"
              style={{ bottom: -22, left: -18 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  {config.details.floatCard.icons.map((ic, i) => (
                    <span key={i} style={{ width: 36, height: 36, borderRadius: 10, background: ic.bg, color: ic.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{ic.node}</span>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#0d1220" }}>{config.details.floatCard.title}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#6b7280" }}>{config.details.floatCard.sub}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(26,79,214,0.08)", border: "1px solid rgba(26,79,214,0.2)", borderRadius: 50, padding: "8px 20px", marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a4fd6", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#1a4fd6", letterSpacing: "1.5px", textTransform: "uppercase" }}>{config.details.badge}</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 900, color: "#0d1220", marginBottom: 18, lineHeight: 1.18, letterSpacing: -0.8 }}>
              {config.details.title}
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, marginBottom: 30 }}>
              {config.details.desc}
            </p>

            <motion.div
              className="ma-feature-tiles"
              variants={bentoContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {config.details.tiles.map((item, i) => (
                <motion.div key={i} className="ma-feature-tile" variants={bentoCardVariants}>
                  <span className="tile-icon" style={{ background: item.bg, color: item.color }}>{item.icon}</span>
                  <span>
                    <span style={{ display: "block", fontSize: 14.5, fontWeight: 800, color: "#0d1220", lineHeight: 1.3 }}>{item.label}</span>
                    <span style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#8a93a8", marginTop: 2 }}>{item.sub}</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <ScrollRevealSection delay={60}>
        <section style={{ background: "#f7f9fd", padding: "90px 40px", borderTop: "1px solid #eef1f7", borderBottom: "1px solid #eef1f7" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(26,79,214,0.07)", border: "1px solid rgba(26,79,214,0.18)", borderRadius: 50, padding: "7px 18px", marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1a4fd6", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 800, color: "#1a4fd6", letterSpacing: "1.8px", textTransform: "uppercase" }}>Technologies</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 900, color: "#0d1220", marginBottom: 16, letterSpacing: -0.8 }}>
              {config.tech.title}
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 540, margin: "0 auto 48px", lineHeight: 1.75 }}>
              {config.tech.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
              {config.tech.chips.map((t, i) => (
                <span key={i} className="ma-tech-chip">
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: t.color, display: "inline-block", flexShrink: 0 }} />
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* ── TEAM EXPERTISE: Photo + Floating Tags + Checklist ── */}
      <ScrollRevealSection delay={80}>
        <DeveloperExpertiseSection config={config} />
      </ScrollRevealSection>

      {/* ── EXPERTISE SECTION — professional feature grid ── */}
      <ScrollRevealSection delay={80}>
        <ExpertiseSection config={config} />
      </ScrollRevealSection>

      {/* ── PROCESS SECTION ── */}
      <ScrollRevealSection delay={60}>
        <section className="ma-process-section" style={{ background: "#1a1a2e", color: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <span style={{ display: "inline-block", background: "rgba(226,34,34,0.15)", color: "#e22222", padding: "8px 20px", borderRadius: 50, fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 18, border: "1px solid rgba(226,34,34,0.3)" }}>
                Our Process
              </span>
              <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 18, letterSpacing: -0.5 }}>{config.process.heading}</h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
                {config.process.desc}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 24 }}>
              {config.process.steps.map((item, idx) => (
                <div key={idx} className="ma-process-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                    <span style={{
                      width: 46, height: 46, borderRadius: 12,
                      background: "rgba(226,34,34,0.12)", border: "1px solid rgba(226,34,34,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 17, fontWeight: 900, color: "#e25555", letterSpacing: -0.5,
                      flexShrink: 0,
                    }}>
                      {item.step}
                    </span>
                    <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: -0.3 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* ── CTA SECTION ── */}
      <section className="ma-cta-section" style={{ background: "linear-gradient(135deg, #12245e 0%, #1a4fd6 55%, #0d3bbd 100%)", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -120, right: -80, width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -140, left: -100, width: 460, height: 460, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "18%", left: "12%", width: 52, height: 52, borderRadius: 12,
          border: "2px solid rgba(255,255,255,0.14)", transform: "rotate(14deg)",
          animation: "boxFloatA 7s ease-in-out infinite", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", right: "10%", width: 40, height: 40, borderRadius: 10,
          border: "2px solid rgba(255,255,255,0.12)", transform: "rotate(-10deg)",
          animation: "boxFloatB 6s ease-in-out infinite 0.8s", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", color: "#fff", padding: "7px 20px", borderRadius: 50, fontSize: 12, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 22 }}>
            Let&apos;s Talk
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: 18, letterSpacing: -1 }}>{config.cta.heading}</h2>
          <p style={{ fontSize: 18, marginBottom: 40, opacity: 0.88, lineHeight: 1.7 }}>
            {config.cta.desc}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="mobile-apps-btn" onClick={() => router.push("/hire-us")}>
              Start Your Project
            </button>
            <button
              className="ma-ghost-btn"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
              onClick={() => router.push("/contact")}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "transparent"; }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}