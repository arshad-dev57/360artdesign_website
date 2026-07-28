"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "#1244cc" : "#1a56ff",
      borderBottom: "1px solid rgba(255,255,255,0.15)",
      backdropFilter: "blur(12px)",
      transition: "all 0.3s ease",
      fontFamily: "'DM Sans', sans-serif",
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.15)" : "none",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 28px",
        height: 64, display: "flex", alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, background: "#ffffff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800, fontSize: 15, color: "#1a56ff",
            clipPath: "polygon(0 0,100% 0,100% 70%,70% 100%,0 100%)",
          }}>L</div>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800, fontSize: 22, letterSpacing: 1, color: "#ffffff",
          }}>LOADBOARD</span>
          <span style={{
            fontSize: 9, fontWeight: 600, letterSpacing: "1.5px",
            background: "rgba(255,255,255,0.15)", color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.35)",
            padding: "2px 7px", borderRadius: 3, textTransform: "uppercase" as const,
          }}>BETA</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {navLinks.map((l) => (
            <Link key={l.name} href={l.href} style={{
              position: "relative",
              fontSize: 13, fontWeight: 600, color: "#ffffff",
              textDecoration: "none", padding: "10px 20px", borderRadius: 25,
              background: "linear-gradient(135deg, #ff4757 0%, #ff6b81 100%)",
              boxShadow: "0 4px 15px rgba(255, 71, 87, 0.4)",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 71, 87, 0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 71, 87, 0.4)";
              }}
            >
              {l.name}
              <span style={{
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #ff6b81",
              }}></span>
            </Link>
          ))}
          <button style={{
            marginLeft: 8, fontSize: 13, fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff",
            background: "transparent", padding: "7px 18px", borderRadius: 5,
            cursor: "pointer", transition: "all 0.2s",
          }}>Log In</button>
          <button style={{
            fontSize: 13, fontWeight: 600,
            background: "#ffffff", color: "#1a56ff",
            border: "none", padding: "8px 18px", borderRadius: 5,
            cursor: "pointer",
          }}>Sign Up</button>
        </nav>
      </div>
    </header>
  );
}