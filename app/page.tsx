"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaPhoneAlt, FaTimes, FaArrowUp } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Packages", href: "/packages" },
  { name: "Combo Packages", href: "/combo-packages" },
  { name: "Testimonials", href: "/testimonials" },
];

const slides = [
  { eyebrow: "LEVEL UP YOUR DIGITAL MARKETING CAMPAIGN", heading: <>Uncovering The &ldquo;Next-Big&rdquo; Mobile App Together!</>, cta1: "Let's Get Started", cta2: "Talk To Us!", scene: "mobile" },
  { eyebrow: "GROW YOUR BUSINESS WITH EXPERT SEO & PPC", heading: <>Dominate Search Rankings &amp; Drive Real Traffic!</>, cta1: "Get SEO Audit", cta2: "Talk To Us!", scene: "rocket" },
  { eyebrow: "STUNNING WEBSITES BUILT ON WORDPRESS & WIX", heading: <>Crafting Beautiful Websites That Convert Visitors!</>, cta1: "View Portfolio", cta2: "Talk To Us!", scene: "website" },
  { eyebrow: "PROFESSIONAL BRANDING & GRAPHIC DESIGN", heading: <>Building Brands That Leave a Lasting Impression!</>, cta1: "Start Branding", cta2: "Talk To Us!", scene: "branding" },
];

const stats = [
  { number: "400+", label: "Marketing Collateral" },
  { number: "1500+", label: "Logos & Identity" },
  { number: "1200+", label: "Website Developed" },
  { number: "5+", label: "Years of Experience" },
];

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

const testimonialsData = [
  { id: 1, name: "Elizabeth Blackwell", role: "CEO, TechStart Inc.", rating: 5, text: "Truly an incredible team of creative geniuses!! Precise, timely, highly creative, and extremely reasonable in terms of pricing! They transformed our digital presence completely.", avatar: "EB", company: "TechStart Inc." },
  { id: 2, name: "Nick Marshall", role: "Marketing Director", rating: 5, text: "360ArtDesign is a team of brilliant designers. I have never been disappointed by the services they have delivered. They are swift, reasonable with prices, and always unique with their ideas!", avatar: "NM", company: "Marshall Group" },
  { id: 3, name: "Sarah Johnson", role: "Founder, Creative Co.", rating: 5, text: "Absolutely phenomenal work! They transformed our online presence completely. The team is responsive, creative, and delivers beyond expectations every single time. Highly recommended!", avatar: "SJ", company: "Creative Co." },
  { id: 4, name: "David Chen", role: "CTO, Innovate Labs", rating: 5, text: "Working with 360ArtDesign has been a game-changer for our business. Their technical expertise and creative approach delivered results that exceeded our expectations by far.", avatar: "DC", company: "Innovate Labs" },
];

// ==================== ILLUSTRATED HERO SCENES ====================
function MobileAppScene() {
  return (
    <svg viewBox="0 0 520 420" width="520" height="420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0f0f0"/><stop offset="100%" stopColor="#d8d8d8"/></linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e22222"/><stop offset="100%" stopColor="#a01010"/></linearGradient>
        <linearGradient id="platformGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1a2a5a"/><stop offset="100%" stopColor="#0d1830"/></linearGradient>
        <filter id="phoneShadow"><feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="rgba(0,0,0,0.45)"/></filter>
        <filter id="cardShadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(0,0,0,0.3)"/></filter>
      </defs>
      <g opacity="0.4"><rect x="60" y="300" width="400" height="80" rx="4" fill="url(#platformGrad)" opacity="0.5"/>{[80,120,160,200,240,280,320,360,400,440].map((x,i) => (<line key={i} x1={x} y1="300" x2={x} y2="380" stroke="rgba(100,150,255,0.15)" strokeWidth="1"/>))}</g>
      <g transform="translate(80,230)"><rect x="0" y="0" width="38" height="52" rx="3" fill="#1e3a8a" opacity="0.8"/><rect x="0" y="0" width="38" height="8" rx="3" fill="#2a52c8" opacity="0.9"/></g>
      <g transform="translate(118,248)"><rect x="0" y="0" width="28" height="34" rx="3" fill="#1e3a8a" opacity="0.7"/><rect x="0" y="0" width="28" height="6" rx="3" fill="#2a52c8" opacity="0.8"/></g>
      <g opacity="0.9"><rect x="390" y="30" width="10" height="140" rx="3" fill="#bfc8d8"/><rect x="320" y="30" width="80" height="8" rx="3" fill="#bfc8d8"/><line x1="360" y1="38" x2="360" y2="100" stroke="#bfc8d8" strokeWidth="2" strokeDasharray="4 3"/><rect x="335" y="100" width="52" height="38" rx="6" fill="white" filter="url(#cardShadow)" opacity="0.95"/><rect x="345" y="109" width="18" height="4" rx="2" fill="#e22222"/><rect x="345" y="117" width="28" height="3" rx="1" fill="#ccc"/><rect x="345" y="123" width="22" height="3" rx="1" fill="#ccc"/><polygon points="358,100 362,100 360,104" fill="#bfc8d8"/></g>
      <g filter="url(#phoneShadow)" transform="translate(180, 40)"><rect x="0" y="0" width="150" height="280" rx="22" fill="url(#phoneGrad)"/><rect x="5" y="5" width="140" height="270" rx="18" fill="white"/><rect x="52" y="5" width="46" height="12" rx="6" fill="#e0e0e0"/><rect x="5" y="18" width="140" height="247" rx="4" fill="url(#screenGrad)"/>{[18,58,98].map((x,i) => (<g key={i}><rect x={x} y="60" width="34" height="34" rx="10" fill="rgba(255,255,255,0.2)"/><text x={x+17} y="83" textAnchor="middle" fontSize="16" fill="white">{["📞","🌐","▶"][i]}</text></g>))}<rect x="18" y="108" width="114" height="80" rx="10" fill="rgba(255,255,255,0.18)"/><text x="75" y="158" textAnchor="middle" fontSize="36" fill="white">🚀</text><rect x="18" y="200" width="80" height="6" rx="3" fill="rgba(255,255,255,0.5)"/><rect x="18" y="212" width="114" height="4" rx="2" fill="rgba(255,255,255,0.3)"/><rect x="18" y="220" width="95" height="4" rx="2" fill="rgba(255,255,255,0.3)"/><rect x="18" y="228" width="60" height="4" rx="2" fill="rgba(255,255,255,0.3)"/><path d="M75 285 Q75 310 40 320" stroke="#FBBF24" strokeWidth="4" fill="none" strokeLinecap="round"/></g>
      <g transform="translate(148, 80)"><ellipse cx="22" cy="12" rx="9" ry="9" fill="#f4a261"/><rect x="14" y="20" width="16" height="24" rx="4" fill="#3b82f6"/><line x1="14" y1="26" x2="6" y2="18" stroke="#f4a261" strokeWidth="5" strokeLinecap="round"/><line x1="30" y1="26" x2="38" y2="20" stroke="#f4a261" strokeWidth="5" strokeLinecap="round"/><circle cx="40" cy="18" r="5" fill="#FBBF24"/><line x1="18" y1="44" x2="14" y2="60" stroke="#1e40af" strokeWidth="5" strokeLinecap="round"/><line x1="26" y1="44" x2="30" y2="60" stroke="#1e40af" strokeWidth="5" strokeLinecap="round"/></g>
      <g transform="translate(352, 180)"><ellipse cx="20" cy="12" rx="9" ry="9" fill="#fbbf24"/><rect x="12" y="20" width="16" height="22" rx="4" fill="#10b981"/><line x1="12" y1="26" x2="4" y2="34" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/><line x1="28" y1="26" x2="36" y2="22" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/><rect x="30" y="16" width="22" height="16" rx="3" fill="white" opacity="0.9"/><rect x="32" y="18" width="18" height="12" rx="2" fill="#3b82f6" opacity="0.7"/><line x1="16" y1="42" x2="12" y2="58" stroke="#065f46" strokeWidth="5" strokeLinecap="round"/><line x1="24" y1="42" x2="28" y2="58" stroke="#065f46" strokeWidth="5" strokeLinecap="round"/><rect x="4" y="58" width="32" height="18" rx="3" fill="#1e3a8a" opacity="0.8"/></g>
      <g transform="translate(82, 260)"><ellipse cx="22" cy="10" rx="9" ry="9" fill="#f4a261"/><rect x="14" y="18" width="16" height="20" rx="4" fill="#8b5cf6"/><line x1="14" y1="24" x2="4" y2="30" stroke="#f4a261" strokeWidth="5" strokeLinecap="round"/><line x1="30" y1="24" x2="40" y2="22" stroke="#f4a261" strokeWidth="5" strokeLinecap="round"/><rect x="30" y="16" width="28" height="20" rx="3" fill="#1f2937"/><rect x="32" y="18" width="24" height="16" rx="1" fill="#3b82f6" opacity="0.8"/><rect x="26" y="36" width="36" height="3" rx="1" fill="#374151"/><line x1="18" y1="38" x2="10" y2="52" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round"/><line x1="26" y1="38" x2="34" y2="52" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round"/></g>
      <g transform="translate(388, 252)"><ellipse cx="20" cy="10" rx="9" ry="9" fill="#fbbf24"/><rect x="12" y="18" width="16" height="22" rx="4" fill="#ef4444"/><line x1="12" y1="24" x2="2" y2="32" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/><line x1="28" y1="24" x2="38" y2="30" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/><line x1="16" y1="40" x2="12" y2="56" stroke="#991b1b" strokeWidth="5" strokeLinecap="round"/><line x1="24" y1="40" x2="28" y2="56" stroke="#991b1b" strokeWidth="5" strokeLinecap="round"/></g>
      <g filter="url(#cardShadow)" transform="translate(38, 120)"><rect width="72" height="58" rx="8" fill="white" opacity="0.95"/><rect x="8" y="8" width="56" height="6" rx="3" fill="#e22222"/>{[0,1,2,3].map(i => (<rect key={i} x={10+i*14} y={38-[16,24,12,20][i]} width="10" height={[16,24,12,20][i]} rx="2" fill={["#3b82f6","#e22222","#10b981","#f59e0b"][i]}/>))}<line x1="8" y1="38" x2="64" y2="38" stroke="#e0e0e0" strokeWidth="1"/></g>
      <g filter="url(#cardShadow)" transform="translate(30, 310)"><rect width="88" height="44" rx="8" fill="white" opacity="0.95"/><circle cx="18" cy="22" r="10" fill="#e22222"/><text x="18" y="27" textAnchor="middle" fontSize="12" fill="white">🎵</text><rect x="34" y="12" width="44" height="5" rx="2" fill="#333"/><rect x="34" y="22" width="32" height="4" rx="2" fill="#aaa"/><rect x="34" y="30" width="24" height="3" rx="1" fill="#ccc"/></g>
      <g filter="url(#cardShadow)" transform="translate(395, 135)"><rect width="60" height="44" rx="8" fill="white" opacity="0.95"/><text x="30" y="26" textAnchor="middle" fontSize="22" fill="#e22222">📍</text><rect x="10" y="32" width="40" height="4" rx="2" fill="#ccc"/></g>
      <g filter="url(#cardShadow)" transform="translate(420, 280)"><rect width="50" height="38" rx="8" fill="white" opacity="0.95"/><text x="25" y="26" textAnchor="middle" fontSize="20" fill="#3b82f6">✉</text></g>
      <g filter="url(#cardShadow)" transform="translate(435, 200)"><rect width="44" height="44" rx="8" fill="white" opacity="0.95"/><text x="22" y="30" textAnchor="middle" fontSize="22" fill="#f59e0b">💡</text></g>
      <path d="M255 325 Q255 360 200 370 Q170 375 140 370" stroke="#FBBF24" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7"/>
      <circle cx="137" cy="369" r="6" fill="#FBBF24" opacity="0.8"/>
    </svg>
  );
}

function RocketScene() {
  return (
    <svg viewBox="0 0 520 420" width="520" height="420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><filter id="softShadow"><feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="rgba(0,0,0,0.35)"/></filter></defs>
      <ellipse cx="260" cy="220" rx="220" ry="160" fill="rgba(100,140,255,0.06)" stroke="rgba(100,140,255,0.1)" strokeWidth="1"/>
      {[-60,-30,0,30,60].map((_,i) => (<ellipse key={i} cx="260" cy="220" rx="220" ry={Math.abs(_)*1.4+20} fill="none" stroke="rgba(100,150,255,0.08)" strokeWidth="1"/>))}
      {[0,45,90,135].map((angle,i) => (<line key={i} x1="260" y1="60" x2="260" y2="380" stroke="rgba(100,150,255,0.08)" strokeWidth="1" transform={`rotate(${angle} 260 220)`}/>))}
      <g transform="translate(180, 130)" filter="url(#softShadow)"><circle cx="100" cy="110" r="110" fill="rgba(226,34,34,0.08)"/><circle cx="100" cy="110" r="85" fill="none" stroke="#e22222" strokeWidth="3" opacity="0.7"/><circle cx="100" cy="110" r="60" fill="none" stroke="#e22222" strokeWidth="3" opacity="0.75"/><circle cx="100" cy="110" r="36" fill="none" stroke="#e22222" strokeWidth="3" opacity="0.8"/><circle cx="100" cy="110" r="14" fill="#e22222" opacity="0.9"/><circle cx="100" cy="110" r="5" fill="white"/></g>
      <path d="M80 380 Q160 100 330 130" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="8 5" fill="none"/>
      <g transform="translate(275, 55) rotate(40, 60, 60)" filter="url(#softShadow)"><ellipse cx="60" cy="90" rx="26" ry="72" fill="#f0f4ff"/><path d="M34 40 Q60 0 86 40Z" fill="#e22222"/><circle cx="60" cy="80" r="16" fill="#b0c8f8" stroke="white" strokeWidth="3"/><circle cx="60" cy="80" r="10" fill="#3b82f6" opacity="0.8"/><circle cx="55" cy="75" r="4" fill="rgba(255,255,255,0.5)"/><path d="M34 120 L14 155 L34 145Z" fill="#e22222"/><path d="M86 120 L106 155 L86 145Z" fill="#e22222"/><ellipse cx="52" cy="168" rx="8" ry="18" fill="#FF6B35" opacity="0.9"/><ellipse cx="68" cy="170" rx="6" ry="16" fill="#FBBF24" opacity="0.85"/><ellipse cx="60" cy="162" rx="5" ry="14" fill="white" opacity="0.6"/><circle cx="48" cy="188" r="5" fill="#FF6B35" opacity="0.5"/><circle cx="72" cy="190" r="4" fill="#FBBF24" opacity="0.4"/><circle cx="60" cy="196" r="6" fill="#FF6B35" opacity="0.3"/></g>
      <g transform="translate(130, 210) rotate(-15)"><path d="M0 20 L50 0 L40 22 L50 0 L0 40 L16 22Z" fill="white" opacity="0.85"/><path d="M16 22 L40 22 L50 0Z" fill="rgba(200,220,255,0.6)"/></g>
      {[{x:370,y:60,rot:12},{x:410,y:170,rot:-8},{x:360,y:290,rot:15},{x:80,y:140,rot:-10}].map((env,i) => (<g key={i} transform={`translate(${env.x}, ${env.y}) rotate(${env.rot})`} opacity={0.85}><rect width="52" height="38" rx="4" fill="#FBBF24"/><path d="M0 0 L26 18 L52 0" stroke="white" strokeWidth="2" fill="none"/><path d="M0 38 L18 22 M52 38 L34 22" stroke="white" strokeWidth="2"/></g>))}
      {[{x:60,y:270,emoji:"📊"},{x:430,y:340,emoji:"📱"},{x:60,y:350,emoji:"🎯"}].map((item,i) => (<g key={i} filter="url(#softShadow)"><rect x={item.x} y={item.y} width="48" height="48" rx="10" fill="white" opacity="0.9"/><text x={item.x+24} y={item.y+32} textAnchor="middle" fontSize="22">{item.emoji}</text></g>))}
      {[[45,55],[480,90],[30,200],[500,260],[460,380]].map(([x,y],i) => (<g key={i}><line x1={x} y1={y-5} x2={x} y2={y+5} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/><line x1={x-5} y1={y} x2={x+5} y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/></g>))}
    </svg>
  );
}

function WebsiteScene() {
  return (
    <svg viewBox="0 0 520 420" width="520" height="420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><filter id="ws"><feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="rgba(0,0,0,0.4)"/></filter></defs>
      <g filter="url(#ws)" transform="translate(60, 40)"><rect width="360" height="240" rx="14" fill="#1f2937"/><rect x="6" y="6" width="348" height="228" rx="10" fill="#111827"/><rect x="6" y="6" width="348" height="30" rx="10" fill="#374151"/><circle cx="22" cy="21" r="5" fill="#ef4444"/><circle cx="36" cy="21" r="5" fill="#f59e0b"/><circle cx="50" cy="21" r="5" fill="#10b981"/><rect x="68" y="13" width="220" height="16" rx="8" fill="#4b5563"/><rect x="72" y="15" width="160" height="12" rx="6" fill="#6b7280" opacity="0.5"/><rect x="6" y="36" width="348" height="198" rx="0" fill="white"/><rect x="6" y="36" width="348" height="80" fill="#e22222"/><rect x="20" y="50" width="140" height="10" rx="5" fill="rgba(255,255,255,0.7)"/><rect x="20" y="66" width="100" height="6" rx="3" fill="rgba(255,255,255,0.5)"/><rect x="20" y="78" width="60" height="16" rx="4" fill="white" opacity="0.9"/>{[200,230,260,290,320].map((x,i) => (<rect key={i} x={x} y="55" width="24" height="5" rx="2" fill="rgba(255,255,255,0.5)"/>))}{[0,1,2].map(i => (<g key={i}><rect x={20+i*116} y="130" width="106" height="76" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/><rect x={28+i*116} y="140" width="50" height="30" rx="4" fill={["#3b82f6","#10b981","#f59e0b"][i]} opacity="0.3"/><rect x={28+i*116} y="176" width="70" height="4" rx="2" fill="#d1d5db"/><rect x={28+i*116} y="184" width="50" height="3" rx="1" fill="#e5e7eb"/><rect x={28+i*116} y="190" width="60" height="3" rx="1" fill="#e5e7eb"/></g>))}<rect x="160" y="240" width="40" height="24" rx="4" fill="#374151"/><rect x="130" y="262" width="100" height="8" rx="4" fill="#4b5563"/></g>
      <g filter="url(#ws)" transform="translate(30, 200)"><rect width="130" height="90" rx="10" fill="#1e1e2e"/><text x="12" y="22" fontSize="9" fill="#6c7086" fontFamily="monospace">// components</text><text x="12" y="38" fontSize="9" fill="#cba6f7" fontFamily="monospace">function</text><text x="60" y="38" fontSize="9" fill="#89dceb" fontFamily="monospace"> Hero() {"{"}</text><text x="20" y="52" fontSize="9" fill="#a6e3a1" fontFamily="monospace">return (</text><text x="28" y="64" fontSize="9" fill="#89b4fa" fontFamily="monospace">{"<div>"}</text><text x="36" y="76" fontSize="9" fill="#f38ba8" fontFamily="monospace">{"<h1>"}</text></g>
      <g transform="translate(400, 200)"><ellipse cx="30" cy="14" rx="13" ry="13" fill="#fbbf24"/><rect x="18" y="26" width="24" height="30" rx="6" fill="#3b82f6"/><line x1="18" y1="34" x2="6" y2="44" stroke="#fbbf24" strokeWidth="7" strokeLinecap="round"/><line x1="42" y1="34" x2="54" y2="40" stroke="#fbbf24" strokeWidth="7" strokeLinecap="round"/><rect x="38" y="28" width="44" height="30" rx="4" fill="#1f2937"/><rect x="40" y="30" width="40" height="26" rx="2" fill="#3b82f6" opacity="0.7"/><rect x="34" y="58" width="52" height="4" rx="2" fill="#374151"/><line x1="22" y1="56" x2="16" y2="76" stroke="#1e40af" strokeWidth="7" strokeLinecap="round"/><line x1="38" y1="56" x2="44" y2="76" stroke="#1e40af" strokeWidth="7" strokeLinecap="round"/></g>
      <g filter="url(#ws)" transform="translate(420, 60)"><rect width="70" height="60" rx="10" fill="white" opacity="0.95"/>{["#e22222","#3b82f6","#10b981","#f59e0b","#8b5cf6","#ec4899"].map((c,i) => (<circle key={i} cx={12+i%3*20} cy={16+Math.floor(i/3)*22} r="7" fill={c}/>))}<rect x="8" y="48" width="54" height="4" rx="2" fill="#e5e7eb"/></g>
      <g transform="translate(280, 168)"><path d="M0 0 L0 22 L6 16 L10 26 L13 24 L9 14 L16 14Z" fill="white" stroke="#333" strokeWidth="1.5"/></g>
    </svg>
  );
}

function BrandingScene() {
  return (
    <svg viewBox="0 0 520 420" width="520" height="420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><filter id="bs"><feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="rgba(0,0,0,0.35)"/></filter><linearGradient id="brandCard" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e22222"/><stop offset="100%" stopColor="#7f1d1d"/></linearGradient></defs>
      <g filter="url(#bs)" transform="translate(80, 60)"><rect width="280" height="180" rx="16" fill="url(#brandCard)"/><circle cx="80" cy="70" r="40" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2"/><text x="80" y="80" textAnchor="middle" fontSize="32" fill="white">🐺</text><rect x="130" y="42" width="130" height="14" rx="7" fill="rgba(255,255,255,0.7)"/><rect x="130" y="62" width="90" height="8" rx="4" fill="rgba(255,255,255,0.4)"/><rect x="130" y="76" width="110" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>{["#fff","#fca5a5","#fecdd3","#991b1b","#450a0a"].map((c,i) => (<rect key={i} x={20+i*36} y="120" width="30" height="30" rx="6" fill={c}/>))}<rect x="20" y="160" width="160" height="8" rx="4" fill="rgba(255,255,255,0.4)"/></g>
      <g filter="url(#bs)" transform="translate(200, 200) rotate(-8)"><rect width="200" height="120" rx="10" fill="white"/><rect width="200" height="40" rx="10" fill="#e22222"/><rect x="0" y="30" width="200" height="20" fill="#e22222"/><text x="16" y="26" fontSize="14" fontWeight="bold" fill="white" fontFamily="sans-serif">360 ARTDESIGNS</text><text x="16" y="36" fontSize="8" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif" letterSpacing="2">DIGITAL AGENCY</text><rect x="16" y="56" width="80" height="6" rx="3" fill="#e5e7eb"/><rect x="16" y="68" width="60" height="5" rx="2" fill="#e5e7eb"/><rect x="16" y="80" width="100" height="5" rx="2" fill="#e5e7eb"/><circle cx="166" cy="84" r="22" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2"/><text x="166" y="91" textAnchor="middle" fontSize="18" fill="#e22222">🐺</text></g>
      {[{x:60,y:270,colors:["#e22222","#b91c1c","#7f1d1d"]},{x:370,y:90,colors:["#3b82f6","#2563eb","#1d4ed8"]}].map((palette,pi) => (<g key={pi} filter="url(#bs)" transform={`translate(${palette.x}, ${palette.y})`}><rect width="90" height="90" rx="12" fill="white"/>{palette.colors.map((c,ci) => (<rect key={ci} x="10" y={10+ci*24} width="70" height="20" rx="6" fill={c}/>))}</g>))}
      <g filter="url(#bs)" transform="translate(370, 200)"><rect width="120" height="160" rx="12" fill="white"/><rect x="0" y="0" width="120" height="30" rx="12" fill="#f9fafb"/><rect x="0" y="18" width="120" height="12" fill="#f9fafb"/><text x="12" y="20" fontSize="10" fill="#374151" fontFamily="sans-serif" fontWeight="bold">Logo Options</text>{[0,1,2].map(i => (<g key={i}><rect x="12" y={40+i*38} width="96" height="30" rx="8" fill={i===1?"#fef2f2":"#f9fafb"} stroke={i===1?"#fca5a5":"#e5e7eb"} strokeWidth={i===1?1.5:1}/><circle cx="28" cy={55+i*38} r="8" fill={["#6366f1","#e22222","#10b981"][i]}/><rect x="42" y={51+i*38} width="44" height="5" rx="2" fill="#d1d5db"/><rect x="42" y={59+i*38} width="32" height="4" rx="2" fill="#e5e7eb"/></g>))}</g>
      <g transform="translate(36, 130)"><ellipse cx="22" cy="12" rx="12" ry="12" fill="#f4a261"/><rect x="12" y="22" width="20" height="28" rx="5" fill="#8b5cf6"/><line x1="12" y1="30" x2="2" y2="40" stroke="#f4a261" strokeWidth="7" strokeLinecap="round"/><line x1="32" y1="28" x2="52" y2="16" stroke="#f4a261" strokeWidth="7" strokeLinecap="round"/><line x1="52" y1="16" x2="62" y2="8" stroke="#e22222" strokeWidth="3" strokeLinecap="round"/><circle cx="62" cy="7" r="4" fill="#e22222"/><line x1="16" y1="50" x2="10" y2="68" stroke="#6d28d9" strokeWidth="7" strokeLinecap="round"/><line x1="28" y1="50" x2="34" y2="68" stroke="#6d28d9" strokeWidth="7" strokeLinecap="round"/></g>
      <g filter="url(#bs)" transform="translate(66, 340)"><rect width="130" height="44" rx="10" fill="white"/><text x="10" y="26" fontSize="14" fill="#f59e0b">★★★★★</text><rect x="10" y="30" width="80" height="5" rx="2" fill="#e5e7eb"/></g>
    </svg>
  );
}

function HeroScene({ scene }: { scene: string }) {
  if (scene === "rocket") return <RocketScene />;
  if (scene === "website") return <WebsiteScene />;
  if (scene === "branding") return <BrandingScene />;
  return <MobileAppScene />;
}

// ==================== CONSULTANCY FORM ====================
function ConsultancyForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes slideInFromRight{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style>
      <div style={{ position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.7)",zIndex:1000,animation:"fadeIn 0.3s ease" }} onClick={onClose} />
      <div style={{ position:"fixed",right:0,top:"50%",marginTop:"-280px",width:"400px",maxHeight:"560px",background:"#fff",zIndex:1001,boxShadow:"-5px 0 30px rgba(0,0,0,0.3)",animation:"slideInFromRight 0.3s ease-out",display:"flex",flexDirection:"column",borderRadius:"20px 0 0 20px",overflow:"hidden" }}>
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

// ==================== SCROLL TO TOP BUTTON ====================
function ScrollToTopButton({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 500;
      setVisible(window.scrollY > heroHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef]);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes scrollBtnIn { from { opacity:0; transform:translateY(20px) scale(0.8); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes scrollBtnOut { from { opacity:1; transform:translateY(0) scale(1); } to { opacity:0; transform:translateY(20px) scale(0.8); } }
        @keyframes arrowBounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-4px); } }
        .scroll-top-btn:hover { background: #b71c1c !important; box-shadow: 0 8px 30px rgba(226,34,34,0.6) !important; }
      `}</style>
      <button
        className="scroll-top-btn"
        onClick={scrollToHero}
        title="Back to top"
        style={{
          position: "fixed",
          bottom: 32,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#e22222",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 998,
          boxShadow: "0 4px 20px rgba(226,34,34,0.45)",
          transition: "background 0.25s ease, box-shadow 0.25s ease, opacity 0.3s ease, transform 0.3s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <FaArrowUp size={18} style={{ animation: visible ? "arrowBounce 1.6s ease-in-out infinite" : "none" }} />
      </button>
    </>
  );
}

// ==================== HEADER WITH ONLY IMAGE LOGO ====================
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
    { name: "Web Design", href: "/services" }, { name: "Ecommerce Solutions", href: "/services" },
    { name: "Web Apps", href: "/services" }, { name: "Mobile Apps", href: "/services" },
    { name: "Website Maintenance", href: "/services" }, { name: "Domain And Hosting", href: "/services" },
    { name: "Branding", href: "/services" }, { name: "Video Animation", href: "/services" },
    { name: "SEO", href: "/services" },
  ];

  const handleMouseEnter = () => { if (hoverTimeout) clearTimeout(hoverTimeout); setIsDropdownOpen(true); };
  const handleMouseLeave = () => { hoverTimeout = setTimeout(() => setIsDropdownOpen(false), 150); };

  const renderLogo = () => {
    if (loadingLogo) {
      return (
        <div style={{ 
          width: 60, 
          height: 60, 
          background: "rgba(255,255,255,0.1)", 
          borderRadius: 8,
          animation: "pulse 1.5s ease-in-out infinite"
        }} />
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
            maxWidth: 220,
            objectFit: "contain",
            display: "block"
          }}
        />
      );
    }

    return (
      <div style={{ 
        fontFamily: "'Rajdhani', sans-serif", 
        fontWeight: 700, 
        fontSize: 22, 
        color: "#fff",
        letterSpacing: 1
      }}>
        360
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
        @keyframes mobileMenuSlide {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes mobileMenuFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .mobile-menu-open {
          animation: mobileMenuSlide 0.3s ease forwards !important;
        }
        .mobile-overlay {
          animation: mobileMenuFade 0.3s ease forwards !important;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .desktop-hire-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          header > div { padding: 0 20px !important; }
          header { height: 70px !important; }
          header a img { height: 65px !important; max-width: 150px !important; }
        }
        @media (min-width: 1025px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu-container { display: none !important; }
        }
      `}</style>
      
      <header style={{ 
        position:"fixed",
        top:0,
        left:0,
        right:0,
        zIndex:1000,
        background:scrolled ? "rgba(18,4,4,0.97)" : "rgba(18,4,4,0.85)",
        backdropFilter:"blur(14px)",
        borderBottom:"1px solid rgba(255,255,255,0.07)",
        height: 85,
        transition:"all 0.3s ease",
        fontFamily:"'Nunito', sans-serif" 
      }}>
        <div style={{ 
          maxWidth:1400,
          margin:"0 auto",
          padding:"0 36px",
          height:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          gap:20 
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", flexShrink:0 }}>
            {renderLogo()}
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ 
            background:"rgba(255,255,255,0.055)",
            border:"1px solid rgba(255,255,255,0.1)",
            borderRadius:50,
            padding:"6px 10px",
            display:"flex",
            alignItems:"center",
            gap:2 
          }}>
            {navLinks.map((l) => {
              if (l.name === "Services") {
                return (
                  <div key={l.name} ref={dropdownRef} style={{ position:"relative" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button style={{ 
                      textDecoration:"none",
                      color:l.active?"#fff":"rgba(255,255,255,0.7)",
                      fontSize:13,
                      fontWeight:600,
                      padding:"8px 18px",
                      borderRadius:50,
                      background:l.active?"#e22222":"transparent",
                      boxShadow:l.active?"0 2px 14px rgba(220,34,34,0.55)":"none",
                      whiteSpace:"nowrap",
                      transition:"all 0.18s",
                      cursor:"pointer",
                      border:"none",
                      fontFamily:"inherit",
                      display:"flex",
                      alignItems:"center",
                      gap:6 
                    }}>
                      {l.name}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div style={{ 
                        position:"absolute",
                        top:"100%",
                        left:0,
                        marginTop:12,
                        background:"#1a1a2e",
                        borderRadius:16,
                        minWidth:220,
                        boxShadow:"0 20px 40px rgba(0,0,0,0.3)",
                        border:"1px solid rgba(255,255,255,0.1)",
                        overflow:"hidden",
                        zIndex:1000,
                        animation:"dropdownFadeIn 0.2s ease" 
                      }}>
                        <style>{`@keyframes dropdownFadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}`}</style>
                        {dropdownServices.map((service, idx) => (
                          <Link key={idx} href={service.href} style={{ 
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between",
                            padding:"12px 20px",
                            color:"rgba(255,255,255,0.8)",
                            fontSize:13,
                            fontWeight:500,
                            textDecoration:"none",
                            transition:"all 0.2s ease",
                            borderBottom:idx<dropdownServices.length-1?"1px solid rgba(255,255,255,0.05)":"none",
                            background:"transparent" 
                          }}
                            onMouseEnter={e => { e.currentTarget.style.color="#e22222"; const arrow=e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement|null; if(arrow){arrow.style.opacity="1";arrow.style.transform="translateX(5px)";} }}
                            onMouseLeave={e => { e.currentTarget.style.color="rgba(255,255,255,0.8)"; const arrow=e.currentTarget.querySelector(".dropdown-arrow") as HTMLElement|null; if(arrow){arrow.style.opacity="0";arrow.style.transform="translateX(0)";} }}>
                            <span>{service.name}</span>
                            <span className="dropdown-arrow" style={{ opacity:0,transition:"opacity 0.2s ease, transform 0.2s ease",fontSize:14,color:"#e22222" }}>→</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={l.name} href={l.href} style={{ 
                  textDecoration:"none",
                  color:l.active?"#fff":"rgba(255,255,255,0.7)",
                  fontSize:13,
                  fontWeight:600,
                  padding:"8px 18px",
                  borderRadius:50,
                  background:l.active?"#e22222":"transparent",
                  boxShadow:l.active?"0 2px 14px rgba(220,34,34,0.55)":"none",
                  whiteSpace:"nowrap",
                  transition:"all 0.18s" 
                }}
                  onMouseEnter={e => { if(!l.active) e.currentTarget.style.color="#e22222"; }} 
                  onMouseLeave={e => { if(!l.active) e.currentTarget.style.color="rgba(255,255,255,0.7)"; }}>
                  {l.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Hire Us Button */}
          <button className="desktop-hire-btn" onClick={() => router.push('/hire-us')} style={{ 
            background:"#e22222",
            color:"#fff",
            border:"none",
            flexShrink:0,
            fontFamily:"'Nunito', sans-serif",
            fontSize:14,
            fontWeight:800,
            padding:"10px 28px",
            borderRadius:"8px",
            cursor:"pointer",
            position:"relative",
            overflow:"hidden",
            zIndex:1,
            transition:"all 0.3s ease" 
          }}
            onMouseEnter={e => { e.currentTarget.style.background="#b71c1c"; const ov=e.currentTarget.querySelector(".grey-overlay") as HTMLElement|null; if(ov) ov.style.transform="scale(1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="#e22222"; const ov=e.currentTarget.querySelector(".grey-overlay") as HTMLElement|null; if(ov) ov.style.transform="scale(0)"; }}>
            Hire Us
            <span className="grey-overlay" style={{ 
              position:"absolute",
              top:0,
              right:0,
              width:"100%",
              height:"100%",
              background:"#888",
              transform:"scale(0)",
              transformOrigin:"top right",
              transition:"transform 0.5s ease-in-out",
              borderRadius:"8px",
              zIndex:-1,
              pointerEvents:"none" 
            }} />
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-container" style={{
          position: "fixed",
          inset: 0,
          zIndex: 1001,
          display: "flex"
        }}>
          <div className="mobile-overlay" style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(8px)"
          }} onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="mobile-menu-open" style={{
            position: "relative",
            marginLeft: "auto",
            width: "85%",
            maxWidth: 320,
            height: "100%",
            background: "#1a1a2e",
            boxShadow: "-10px 0 40px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto"
          }}>
            <div style={{ padding: 24, borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>Menu</div>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                width: 40,
                height: 40,
                borderRadius: 10,
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
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
                    transition: "all 0.2s ease"
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              <button onClick={() => { router.push('/hire-us'); setIsMobileMenuOpen(false); }} style={{
                margin: "20px 24px",
                width: "calc(100% - 48px)",
                background: "#e22222",
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer"
              }}>
                Hire Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ==================== HERO SECTION ====================
export function HeroSection({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const total = slides.length;
  const goTo = useCallback((i: number) => { if (isAnimating) return; setIsAnimating(true); setTimeout(() => { setCurrent((i + total) % total); setIsAnimating(false); }, 300); }, [total, isAnimating]);
  useEffect(() => { const t = setInterval(() => goTo(current + 1), 5000); return () => clearInterval(t); }, [current, goTo]);
  const hexBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='70'%3E%3Cpolygon points='40,3 77,22 77,60 40,79 3,60 3,22' fill='none' stroke='rgba(228, 228, 228, 0.17)' stroke-width='1.2'/%3E%3C/svg%3E")`;

  return (
    <>
      <style>{`
        @keyframes slideIn{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}
        @keyframes twinkle{0%,100%{opacity:.2;transform:scale(1)}50%{opacity:.8;transform:scale(1.4)}}
        @keyframes wave1{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes wave2{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes wave3{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes sceneFloat{0%,100%{transform:translateY(0px)}50%{transform:translateY(-12px)}}
        .wave-track1{animation:wave1 8s linear infinite}
        .wave-track2{animation:wave2 12s linear infinite reverse}
        .wave-track3{animation:wave3 6s linear infinite}
        .slide-content{animation:slideIn 0.5s ease forwards}
        .hero-nav-btn{transition:all 0.2s ease}
        .hero-nav-btn:hover{transform:scale(1.1)!important;background:rgba(226,34,34,0.3)!important;border-color:rgba(226,34,34,0.8)!important}
        .hero-scene{animation:sceneFloat 6s ease-in-out infinite}
        
        @media (max-width: 768px) {
          .hero-container { flex-direction: column !important; text-align: center !important; padding: 20px 20px 60px !important; }
          .hero-content { width: 100% !important; padding-right: 0 !important; margin-bottom: 40px !important; }
          .hero-content h1 { font-size: clamp(32px, 8vw, 48px) !important; margin-bottom: 20px !important; }
          .hero-buttons { justify-content: center !important; flex-wrap: wrap !important; margin-bottom: 30px !important; }
          .hero-buttons button { padding: 12px 24px !important; font-size: 14px !important; }
          .hero-nav-buttons { justify-content: center !important; }
          .hero-scene svg { width: 100% !important; height: auto !important; max-width: 400px !important; }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-container { flex-direction: column !important; text-align: center !important; padding: 40px 30px 80px !important; }
          .hero-content { width: 100% !important; padding-right: 0 !important; margin-bottom: 50px !important; }
          .hero-buttons { justify-content: center !important; }
          .hero-scene svg { width: 100% !important; height: auto !important; max-width: 500px !important; }
        }
        
        @media (max-width: 480px) {
          .hero-nav-buttons button { width: 45px !important; height: 45px !important; font-size: 20px !important; }
          .hero-dots { gap: 6px !important; }
          .hero-dots div { height: 6px !important; }
          .hero-dots div.active { width: 24px !important; }
        }
      `}</style>
      <section ref={heroRef as React.RefObject<HTMLElement>} style={{ paddingTop:82,paddingBottom:0,background:"linear-gradient(135deg, #3a0000 0%, #850808 28%, #2a0010 55%, #0d0520 100%)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"stretch",fontFamily:"'Nunito', sans-serif",minHeight:"100vh" }}>
        <div style={{ position:"absolute",inset:0,backgroundImage:hexBg,backgroundRepeat:"repeat" }} />
        <div style={{ position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 55% 70% at 75% 55%, rgba(20,8,50,0.75) 0%,transparent 65%), radial-gradient(ellipse 45% 60% at 10% 80%, rgba(120,10,10,0.3) 0%,transparent 60%)" }} />
        {[[12,25,0],[25,60,1],[38,18,0.5],[8,70,1.5],[45,80,0.7]].map(([l,t,d],i) => (<div key={i} style={{ position:"absolute",left:`${l}%`,top:`${t}%`,width:4,height:4,borderRadius:"50%",background:"rgba(255,255,255,0.35)",animation:`twinkle 3s ease-in-out ${d}s infinite` }} />))}
        <div className="hero-container" style={{ maxWidth:1400,margin:"0 auto",padding:"0 36px",display:"flex",alignItems:"center",width:"100%",position:"relative",zIndex:2,flex:1,paddingBottom:120 }}>
          <div className="hero-content" style={{ flex:"0 0 50%",paddingRight:40,paddingTop:30,paddingBottom:60 }}>
            <div key={current} className="slide-content">
              <div style={{ fontSize:13,fontWeight:800,letterSpacing:"2.5px",color:"#fff",textTransform:"uppercase" as const,marginBottom:18,lineHeight:1.5,maxWidth:520 }}>{slides[current].eyebrow}</div>
              <h1 style={{ fontFamily:"'Rajdhani', sans-serif",fontSize:"clamp(42px, 5.5vw, 72px)",fontWeight:700,color:"#fff",lineHeight:1.02,marginBottom:36 }}>{slides[current].heading}</h1>
              <div className="hero-buttons" style={{ display:"flex",gap:16,alignItems:"center",marginBottom:60 }}>
                <button style={{ background:"#e22222",color:"#fff",border:"none",fontFamily:"'Nunito', sans-serif",fontSize:15,fontWeight:800,padding:"16px 38px",borderRadius:6,cursor:"pointer",boxShadow:"0 4px 22px rgba(220,34,34,0.45)" }}>{slides[current].cta1}</button>
                <button style={{ background:"transparent",color:"#fff",border:"2px solid rgba(255,255,255,0.5)",fontFamily:"'Nunito', sans-serif",fontSize:15,fontWeight:700,padding:"14px 34px",borderRadius:6,cursor:"pointer" }}>{slides[current].cta2}</button>
              </div>
            </div>
            <div className="hero-nav-buttons" style={{ display:"flex",alignItems:"center",gap:20 }}>
              <button className="hero-nav-btn" onClick={() => goTo(current-1)} style={{ width:60,height:60,borderRadius:"50%",background:"rgba(255,255,255,0.1)",border:"2px solid rgba(255,255,255,0.3)",color:"#fff",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.3)" }}>←</button>
              <div className="hero-dots" style={{ display:"flex",gap:8,alignItems:"center" }}>{slides.map((_,i) => (<div key={i} onClick={() => goTo(i)} style={{ height:8,borderRadius:4,background:i===current?"#e22222":"rgba(255,255,255,0.25)",width:i===current?28:8,cursor:"pointer",transition:"all 0.3s ease",boxShadow:i===current?"0 0 10px #e22222":"none" }} />))}</div>
              <button className="hero-nav-btn" onClick={() => goTo(current+1)} style={{ width:60,height:60,borderRadius:"50%",background:"rgba(255,255,255,0.1)",border:"2px solid rgba(255,255,255,0.3)",color:"#fff",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.3)" }}>→</button>
            </div>
          </div>
          <div className="hero-scene" style={{ flex:"0 0 50%",display:"flex",alignItems:"center",justifyContent:"center" }}>
            <div key={`scene-${current}`}><HeroScene scene={slides[current].scene} /></div>
          </div>
        </div>
        <div style={{ position:"absolute",bottom:0,left:0,right:0,height:120,lineHeight:0,zIndex:3,overflow:"hidden" }}>
          <div className="wave-track2" style={{ position:"absolute",bottom:0,left:0,width:"200%",height:"100%" }}><svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block",width:"100%",height:"100%" }}><path d="M0,70 C240,110 480,30 720,70 C960,110 1200,30 1440,70 C1680,110 1920,30 2160,70 C2400,110 2640,30 2880,70 L2880,120 L0,120 Z" fill="rgba(255,255,255,0.18)"/></svg></div>
          <div className="wave-track1" style={{ position:"absolute",bottom:0,left:0,width:"200%",height:"100%" }}><svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block",width:"100%",height:"100%" }}><path d="M0,85 C180,45 360,115 540,80 C720,45 900,105 1080,75 C1260,45 1440,100 1620,80 C1800,45 1980,115 2160,80 C2340,45 2520,105 2700,80 C2790,68 2845,88 2880,85 L2880,120 L0,120 Z" fill="rgba(255,255,255,0.45)"/></svg></div>
          <div className="wave-track3" style={{ position:"absolute",bottom:0,left:0,width:"200%",height:"100%" }}><svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block",width:"100%",height:"100%" }}><path d="M0,95 C160,60 320,120 480,90 C640,60 800,115 960,88 C1120,60 1280,112 1440,92 C1600,60 1760,115 1920,90 C2080,60 2240,112 2400,90 C2560,60 2720,112 2880,95 L2880,120 L0,120 Z" fill="#ffffff"/></svg></div>
        </div>
      </section>
      <ConsultancyForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <div style={{ position:"fixed",right:0,top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:12,zIndex:999,alignItems:"flex-end" }}>
        <div style={{ position:"relative",width:50,height:46,overflow:"visible" }} onMouseEnter={e => { const t=e.currentTarget.querySelector(".chat-tooltip") as HTMLElement|null; const b=e.currentTarget.querySelector(".chat-button") as HTMLElement|null; if(t) t.style.transform="translateX(0)"; if(b) b.style.opacity="0"; }} onMouseLeave={e => { const t=e.currentTarget.querySelector(".chat-tooltip") as HTMLElement|null; const b=e.currentTarget.querySelector(".chat-button") as HTMLElement|null; if(t) t.style.transform="translateX(100%)"; if(b) b.style.opacity="1"; }}>
          <button className="chat-button" style={{ background:"#e22222",border:"none",cursor:"pointer",width:50,height:46,borderRadius:"40px 0 0 40px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:0,top:0,zIndex:2,transition:"opacity 0.3s ease-in-out" }}><FaCommentDots color="#fff" size={20} /></button>
          <div className="chat-tooltip" style={{ position:"absolute",right:0,top:0,height:46,background:"#e22222",borderRadius:"40px 0 0 40px",display:"flex",alignItems:"center",padding:"0 20px 0 20px",transform:"translateX(100%)",transition:"transform 0.3s ease-in-out",whiteSpace:"nowrap",fontFamily:"'Nunito', sans-serif",fontSize:14,fontWeight:700,color:"#fff",zIndex:1,gap:"8px" }}><FaCommentDots color="#fff" size={20} /><span>Chat with us</span></div>
        </div>
        <div style={{ position:"relative",width:50,height:46,overflow:"visible" }} onMouseEnter={e => { const t=e.currentTarget.querySelector(".phone-tooltip") as HTMLElement|null; const b=e.currentTarget.querySelector(".phone-button") as HTMLElement|null; if(t) t.style.transform="translateX(0)"; if(b) b.style.opacity="0"; }} onMouseLeave={e => { const t=e.currentTarget.querySelector(".phone-tooltip") as HTMLElement|null; const b=e.currentTarget.querySelector(".phone-button") as HTMLElement|null; if(t) t.style.transform="translateX(100%)"; if(b) b.style.opacity="1"; }}>
          <button className="phone-button" style={{ background:"#e22222",border:"none",cursor:"pointer",width:50,height:46,borderRadius:"40px 0 0 40px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:0,top:0,zIndex:2,transition:"opacity 0.3s ease-in-out" }}><FaPhoneAlt color="#fff" size={18} /></button>
          <div className="phone-tooltip" style={{ position:"absolute",right:0,top:0,height:46,background:"#e22222",borderRadius:"40px 0 0 40px",display:"flex",alignItems:"center",padding:"0 20px 0 20px",transform:"translateX(100%)",transition:"transform 0.3s ease-in-out",whiteSpace:"nowrap",fontFamily:"'Nunito', sans-serif",fontSize:14,fontWeight:700,color:"#fff",zIndex:1,gap:"8px" }}><FaPhoneAlt color="#fff" size={18} /><span>+1 (800) 123-4567</span></div>
        </div>
        <button onClick={() => setIsFormOpen(true)} style={{ background:"#e22222",color:"#fff",border:"none",cursor:"pointer",fontSize:13,fontWeight:800,letterSpacing:1,textTransform:"uppercase",width:50,minHeight:80,borderRadius:"20px 0 0 20px",fontFamily:"'Nunito', sans-serif",textAlign:"center",writingMode:"vertical-rl",textOrientation:"mixed",padding:"18px 0" }}>GET FREE CONSULTANCY</button>
      </div>
    </>
  );
}

export function CTASection() {
  const leftServices = ["Website Design & Development","Web Application Development","Branding And Stationary Design","Website Maintenance"];
  const rightServices = ["Ecommerce Website Development","Mobile Application Development","Search Engine Optimization","Domain and Hosting","Video Animation"];
  return (
    <section style={{ fontFamily:"'Nunito', sans-serif",background:"#eef0f7" }}>
      <style>{`
        @media (max-width: 768px) {
          .cta-content h2 { font-size: 28px !important; }
          .cta-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .cta-buttons button { width: 100% !important; max-width: 280px !important; }
          .services-grid { flex-direction: column !important; gap: 30px !important; }
          .services-grid > div { min-width: auto !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .cta-content h2 { font-size: 32px !important; }
          .services-grid { gap: 30px !important; }
        }
      `}</style>
      <div style={{ background:"#082bb8",position:"relative",overflow:"hidden",padding:"60px 40px" }}>
        <div style={{ position:"absolute",top:-90,left:"-5%",width:"110%",height:180,background:"#eef0f7",borderRadius:"0 0 50% 50%" }} />
        <div style={{ position:"absolute",bottom:-90,left:"-5%",width:"110%",height:140,background:"#eef0f7",borderRadius:"50% 50% 0 0" }} />
        <div className="cta-content" style={{ maxWidth:900,margin:"0 auto",textAlign:"center",position:"relative",zIndex:2 }}>
          <div style={{ display:"flex",justifyContent:"center",marginBottom:30 }}><img src="/cta-laptop.png" alt="" style={{ width:"100%",maxWidth:380,objectFit:"contain" }} /></div>
          <h2 style={{ fontSize:38,fontWeight:800,lineHeight:1.4,marginBottom:30,color:"#eef0f7",maxWidth:700,marginLeft:"auto",marginRight:"auto" }}>11555+ Customers are already build amazing websites and online store With 360 ArtDesign. We&apos;re ready, to build your&apos;s.</h2>
          <div className="cta-buttons" style={{ display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",marginBottom:40 }}>
            <button style={{ background:"#ff1f1f",color:"#fff",border:"none",padding:"14px 35px",fontWeight:700,cursor:"pointer",borderRadius:4,fontSize:15 }}>Let&apos;s Get Started</button>
            <button style={{ background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,.7)",padding:"14px 35px",fontWeight:700,cursor:"pointer",borderRadius:4,fontSize:15 }}>Talk To Us!</button>
          </div>
          <div><button style={{ background:"rgba(255,255,255,0.15)",color:"#fff",border:"1px solid rgba(255,255,255,0.4)",padding:"12px 30px",fontWeight:600,cursor:"pointer",borderRadius:30,fontSize:13,letterSpacing:1 }}>GET THE CONSULTANCY</button></div>
        </div>
      </div>
      <div style={{ maxWidth:900,margin:"80px auto",padding:"0 40px",textAlign:"center" }}>
        <div style={{ display:"flex",justifyContent:"center",marginBottom:30 }}><img src="/marketing-illustration.png" alt="" style={{ width:"100%",maxWidth:380 }} /></div>
        <div style={{ fontSize:14,fontWeight:700,color:"#666",marginBottom:15 }}>WHO WE ARE ⚡⚡</div>
        <h2 style={{ fontSize:42,fontWeight:800,color:"#333",lineHeight:1.3,marginBottom:20,maxWidth:700,marginLeft:"auto",marginRight:"auto" }}>#1 Digital Marketing Agency in US with Top Notch Services</h2>
        <p style={{ color:"#666",marginBottom:45,fontSize:16 }}>360 ARTDESIGN is a brand of digital agency.</p>
        <div className="services-grid" style={{ display:"flex",justifyContent:"center",gap:60,flexWrap:"wrap",maxWidth:700,margin:"0 auto" }}>
          <div style={{ textAlign:"left",minWidth:250 }}>{leftServices.map(item => (<div key={item} style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}><span style={{ width:22,height:22,borderRadius:"50%",background:"linear-gradient(135deg,#ff422e,#ff8968)",display:"block",flexShrink:0 }} /><span style={{ color:"#555",fontSize:15 }}>{item}</span></div>))}</div>
          <div style={{ textAlign:"left",minWidth:250 }}>{rightServices.map(item => (<div key={item} style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}><span style={{ width:22,height:22,borderRadius:"50%",background:"linear-gradient(135deg,#09d2ff,#0047ff)",display:"block",flexShrink:0 }} /><span style={{ color:"#555",fontSize:15 }}>{item}</span></div>))}</div>
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .stats-container { margin-top: -30px !important; padding: 0 20px !important; }
          .stats-bar { flex-wrap: wrap !important; padding: 15px 20px !important; }
          .stats-item { flex: 1 1 40% !important; text-align: center !important; padding: 10px !important; }
          .stats-divider { display: none !important; }
          .stats-number { font-size: 18px !important; }
          .stats-label { font-size: 10px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .stats-container { padding: 0 30px !important; }
          .stats-number { font-size: 20px !important; }
        }
      `}</style>
      <div className="stats-container" style={{ position:"relative",zIndex:20,marginTop:-50,marginBottom:0,padding:"0 60px" }}>
        <div className="stats-bar" style={{ background:"#e22222",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"space-around",minHeight:60,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",position:"relative",zIndex:2 }}>
          {stats.map((s,i) => (
            <div key={s.label} className="stats-item" style={{ display:"flex",alignItems:"center",flex:1 }}>
              <div style={{ flex:1,textAlign:"center" as const,padding:"22px 10px" }}>
                <div className="stats-number" style={{ fontFamily:"'Nunito', sans-serif",fontSize:"clamp(22px, 4vw, 22px)",fontWeight:900,color:"#fff",lineHeight:1.1 }}>{s.number}</div>
                <div className="stats-label" style={{ fontFamily:"'Nunito', sans-serif",fontSize:"clamp(12px, 1.5vw, 16px)",fontWeight:700,color:"#fff",marginTop:4,letterSpacing:0.3 }}>{s.label}</div>
              </div>
              {i<stats.length-1 && <div className="stats-divider" style={{ width:2,height:60,background:"rgba(255,255,255,0.45)",flexShrink:0 }} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function ClientsSection() {
  return (
    <section style={{ background:"#fff",padding:"100px 40px 80px",fontFamily:"'Nunito', sans-serif",position:"relative",zIndex:1 }}>
      <style>{`
        @keyframes clientsScroll{from{transform:translateX(-50%)}to{transform:translateX(0%)}}
        @media (max-width: 768px) {
          .clients-section { padding: 60px 20px 50px !important; }
          .clients-section h2 { font-size: 24px !important; margin-bottom: 40px !important; }
          .clients-track { gap: 40px !important; }
          .clients-track svg { width: 120px !important; height: auto !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .clients-section { padding: 80px 30px 60px !important; }
          .clients-track svg { width: 140px !important; }
        }
      `}</style>
      <div className="clients-section" style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:18 }}>
        <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontSize:13,fontWeight:800,letterSpacing:"3px",color:"#333",textTransform:"uppercase" }}>OUR CLIENTS</span>
        <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h2 style={{ textAlign:"center",fontSize:"clamp(24px, 3.5vw, 42px)",fontWeight:800,color:"#1a1a1a",marginBottom:60,lineHeight:1.2 }}>Some of the Clients We&apos;ve Served</h2>
      <div style={{ overflow:"hidden",width:"100%",maxWidth:1400,margin:"0 auto" }}>
        <div className="clients-track" style={{ display:"flex",alignItems:"center",gap:80,width:"max-content",animation:"clientsScroll 25s linear infinite" }}>
          {[...clients,...clients].map((c,index) => (<div key={`${c.name}-${index}`} style={{ display:"flex",alignItems:"center",justifyContent:"center",opacity:0.85,cursor:"default",flexShrink:0 }} onMouseEnter={e => (e.currentTarget.style.opacity="1")} onMouseLeave={e => (e.currentTarget.style.opacity="0.85")}>{c.svg}</div>))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { num:"01", label:"BRANDING STRATEGY", desc:"Customers identify with specific brands for a variety of reasons and we deep work on it.", color:"#2196f3", dotColor:"#1565c0", ringColor:"#64b5f6", arrowColor:"#2196f3", orbitDots:[{size:14,color:"#1565c0",angle:30,dist:104},{size:10,color:"#42a5f5",angle:200,dist:104},{size:7,color:"#90caf9",angle:310,dist:104}] },
  { num:"02", label:"DIGITAL MARKETING", desc:"Our marketing experts give the priority to each of our customer because their business grow us.", color:"#e91e8c", dotColor:"#c2185b", ringColor:"#f48fb1", arrowColor:"#e91e8c", orbitDots:[{size:14,color:"#c2185b",angle:150,dist:104},{size:9,color:"#f06292",angle:290,dist:104},{size:7,color:"#f48fb1",angle:60,dist:104}] },
  { num:"03", label:"WEBSITE DEVELOPMENT", desc:"Term website development fall into theme building, customization, custom code and we are best in all.", color:"#ff9800", dotColor:"#e65100", ringColor:"#ffcc80", arrowColor:"#ff9800", orbitDots:[{size:14,color:"#e65100",angle:80,dist:104},{size:9,color:"#ffa726",angle:220,dist:104},{size:7,color:"#ffcc80",angle:340,dist:104}] },
  { num:"04", label:"MOBILE APPS DEVELOPMENT", desc:"Best UI/UX designing and custom coding in the mobile apps for iOS and Android are drops of our blood.", color:"#9c27b0", dotColor:"#6a1b9a", ringColor:"#ce93d8", arrowColor:"#9c27b0", orbitDots:[{size:14,color:"#6a1b9a",angle:110,dist:104},{size:9,color:"#ab47bc",angle:250,dist:104},{size:7,color:"#ce93d8",angle:10,dist:104}] },
];
function orbitKeyframeName(sIdx: number, dIdx: number) { return `orbit_s${sIdx}_d${dIdx}`; }
export function ServicesSection() {
  const keyframesCSS = services.map((svc, si) => svc.orbitDots.map((dot, di) => { const name = orbitKeyframeName(si, di); return `@keyframes ${name} { from { transform: rotate(${dot.angle}deg) translateX(${dot.dist}px) rotate(-${dot.angle}deg); } to { transform: rotate(${dot.angle + 360}deg) translateX(${dot.dist}px) rotate(-${dot.angle + 360}deg); } }`; }).join("\n")).join("\n");
  const globalCSS = `${keyframesCSS}@keyframes paintbrushPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}@keyframes bgDotDrift{0%{transform:translate(0,0)}50%{transform:translate(6px,-10px)}100%{transform:translate(0,0)}}`;
  return (
    <section style={{ background:"#f8f9ff",padding:"90px 40px 100px",fontFamily:"'Nunito', sans-serif",position:"relative",overflow:"hidden" }}>
      <style>{globalCSS}</style>
      <style>{`
        @media (max-width: 1024px) {
          .services-container { flex-direction: column !important; align-items: center !important; gap: 50px !important; }
          .services-container > div { width: 100% !important; max-width: 320px !important; }
          .services-arrow { display: none !important; }
        }
        @media (max-width: 768px) {
          .services-section { padding: 60px 20px 70px !important; }
          .services-section h2 { font-size: 28px !important; }
          .services-section p { font-size: 14px !important; padding: 0 15px !important; }
        }
      `}</style>
      {[[8,12,"#c8d8f8",18,0],[18,40,"#f8c8e8",12,1],[30,70,"#c8e8f8",22,0.5],[55,20,"#e8d8f8",14,1.5],[68,55,"#f8e8c8",10,0.8],[80,80,"#d8f8e8",16,1.2],[90,30,"#f8d8d8",20,0.3],[45,88,"#d8c8f8",11,0.9],[72,10,"#c8f8e8",15,1.7],[12,75,"#f8f8c8",9,0.6],[60,45,"#e8c8f8",13,1.1],[35,15,"#c8e8d8",17,0.4]].map(([l,t,c,s,d],i) => (<div key={i} style={{ position:"absolute",left:`${l}%`,top:`${t}%`,width:s as number,height:s as number,borderRadius:"50%",background:c as string,opacity:0.55,animation:`bgDotDrift ${3+(i%3)}s ease-in-out ${d}s infinite`,pointerEvents:"none" }}/>))}
      <div className="services-section" style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:18 }}>
        <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontSize:13,fontWeight:800,letterSpacing:"3px",color:"#333",textTransform:"uppercase" as const }}>OUR SERVICES</span>
        <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h2 style={{ textAlign:"center" as const,fontSize:"clamp(26px,3.5vw,44px)",fontWeight:800,color:"#1a1a1a",marginBottom:16,lineHeight:1.2 }}>Create Awesome Service With Our Tools</h2>
      <p style={{ textAlign:"center" as const,fontSize:16,color:"#666",maxWidth:560,margin:"0 auto 70px",lineHeight:1.7 }}>Our strategy includes consistently evolving, to ensure we&apos;re producing exceptional SEO for business.</p>
      <div className="services-container" style={{ maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"flex-start",justifyContent:"center",gap:0 }}>
        {services.map((svc,si) => (
          <div key={si} style={{ display:"flex",alignItems:"center",flex:1 }}>
            <div style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center" }}>
              <div style={{ position:"relative",width:220,height:220,marginBottom:32 }}>
                <svg viewBox="0 0 220 220" style={{ position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden" }}>
                  <circle cx="110" cy="110" r="104" fill="none" stroke={svc.ringColor} strokeWidth="1.5" strokeDasharray="6 5"/>
                </svg>
                {svc.orbitDots.map((dot,di) => (<div key={di} style={{ position:"absolute",top:"50%",left:"50%",width:dot.size,height:dot.size,marginTop:-(dot.size/2),marginLeft:-(dot.size/2),borderRadius:"50%",background:dot.color,animation:`${orbitKeyframeName(si,di)} ${6+di*2}s linear infinite`,boxShadow:`0 0 6px ${dot.color}88` }}/>))}
                <div style={{ position:"absolute",top:"50%",left:"50%",marginTop:-65,marginLeft:-65,width:130,height:130,animation:"paintbrushPulse 3s ease-in-out infinite",display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <svg viewBox="0 0 130 130" width="130" height="130" style={{ position:"absolute",inset:0 }} overflow="visible">
                    <defs><filter id={`blur-${si}`} x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="turbulence" baseFrequency="0.045" numOctaves="4" seed={si*7} result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G"/></filter><radialGradient id={`rg-${si}`} cx="42%" cy="38%" r="60%"><stop offset="0%" stopColor="rgba(255,255,255,0.32)"/><stop offset="100%" stopColor="rgba(255,255,255,0)"/></radialGradient></defs>
                    <circle cx="65" cy="65" r="60" fill={svc.color} opacity="0.22" filter={`url(#blur-${si})`}/>
                    <circle cx="65" cy="65" r="54" fill={svc.color} filter={`url(#blur-${si})`}/>
                    <circle cx="65" cy="65" r="54" fill={`url(#rg-${si})`} filter={`url(#blur-${si})`}/>
                  </svg>
                  <span style={{ position:"relative",zIndex:2,fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:32,color:"#fff",letterSpacing:2,lineHeight:1,textShadow:"0 2px 8px rgba(0,0,0,0.2)" }}>{svc.num}</span>
                </div>
              </div>
              <div style={{ fontWeight:800,fontSize:14,letterSpacing:"1.5px",color:"#1a1a1a",textAlign:"center" as const,marginBottom:10 }}>{svc.label}</div>
              <div style={{ width:40,height:3,background:"#e22222",borderRadius:2,marginBottom:14 }}/>
              <p style={{ fontSize:14,color:"#666",textAlign:"center" as const,maxWidth:220,lineHeight:1.7,margin:0 }}>{svc.desc}</p>
            </div>
            {si<services.length-1 && (<div className="services-arrow" style={{ flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",width:52,marginTop:-80 }}>
              <svg viewBox="0 0 44 44" width="42" height="42" fill="none"><circle cx="22" cy="22" r="20" stroke={svc.arrowColor} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/><path d="M16 22 L26 22 M22 17 L27 22 L22 27" stroke={svc.arrowColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>)}
          </div>
        ))}
      </div>
    </section>
  );
}
// ==================== PORTFOLIO DATA ====================
type ProjectType = { id: number; title: string; category: string; liveUrl: string; imagePath?: string; isLocalImage?: boolean; useLogoSvg?: boolean; LogoSvg?: React.ComponentType; };
export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://360artdesign-backend.vercel.app/api/projects?limit=100');
        const result = await response.json();
        
        if (result.success) {
          setProjects(result.data);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const openModal = (project: any) => { 
    setSelectedProject(project); 
    document.body.style.overflow = "hidden"; 
  };
  
  const closeModal = () => { 
    setSelectedProject(null); 
    document.body.style.overflow = "auto"; 
  };

  const getProjectsByCategory = (category: string) => {
    return projects.filter(p => p.category === category);
  };

  const renderCard = (project: any, index: number) => {
    return (
      <div key={project._id} onClick={() => openModal(project)} className={`pf-card-wrap fade-in-up`} style={{ animationDelay: `${index * 0.07}s`, borderRadius: 12, cursor: "pointer", position: "relative" }}>
        <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", background: "#f0f0f0", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {project.image && project.image.secureUrl ? (
            <img src={project.image.secureUrl} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="pf-img" />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#333", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>No Image</div>
          )}
          <div className="pf-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.38)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s", borderRadius: 12 }}>
            <button style={{ background: "rgba(0,0,0,0.82)", color: "#fff", border: "none", padding: "11px 28px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", letterSpacing: 0.5 }}>PREVIEW PROJECT →</button>
          </div>
        </div>
        <div style={{ padding: "14px 4px 6px" }}>
          <div style={{ fontSize: 11, color: "#e22222", fontWeight: 700, letterSpacing: 1.5, marginBottom: 4, textTransform: "uppercase" }}>
            {project.category === 'logo-branding' && 'Logo & Branding'}
            {project.category === 'website-design' && 'Website Design'}
            {project.category === 'mobile-apps' && 'Mobile App'}
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a" }}>{project.title}</div>
        </div>
      </div>
    );
  };

  // Only show the first 4 projects per category
  const logoProjects = getProjectsByCategory('logo-branding').slice(0, 4);
  const websiteProjects = getProjectsByCategory('website-design').slice(0, 4);
  const mobileProjects = getProjectsByCategory('mobile-apps').slice(0, 4);

  if (loading) {
    return (
      <section style={{ background: "#f8f9ff", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
        <div style={{ display: "inline-block", width: 50, height: 50, border: "3px solid #e22222", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ marginTop: 20, color: "#666" }}>Loading projects...</p>
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
          .portfolio-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .portfolio-section h2 { font-size: 28px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
        }
      `}</style>
      
      <section className="portfolio-section" style={{ background: "#f8f9ff", padding: "90px 40px 100px", fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3px", color: "#e22222", textTransform: "uppercase" }}>OUR PORTFOLIO</span>
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none"><path d="M0 9 L8 2 L12 9 L18 2 L22 9 L28 2 L36 9" stroke="#e22222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#1a1a1a", marginBottom: 14, lineHeight: 1.2 }}>Featured <span style={{ color: "#e22222" }}>Projects</span></h2>
          <p style={{ fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Explore our latest work across websites, mobile apps, and brand identities.</p>
        </div>

        {logoProjects.length > 0 && (
          <div style={{ maxWidth: 1300, margin: "0 auto 60px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 4, height: 26, background: "#e22222", borderRadius: 2 }} />
              <span style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a", letterSpacing: 0.5 }}>Logo & Branding</span>
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
            </div>
            <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
              {logoProjects.map((project, index) => renderCard(project, index))}
            </div>
          </div>
        )}

        {websiteProjects.length > 0 && (
          <div style={{ maxWidth: 1300, margin: "0 auto 60px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 4, height: 26, background: "#e22222", borderRadius: 2 }} />
              <span style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a", letterSpacing: 0.5 }}>Website Design</span>
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
            </div>
            <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
              {websiteProjects.map((project, index) => renderCard(project, index))}
            </div>
          </div>
        )}

        {mobileProjects.length > 0 && (
          <div style={{ maxWidth: 1300, margin: "0 auto 60px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
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

      {selectedProject && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 10000, animation: "modalFade 0.25s ease", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={closeModal}>
          <div style={{ background: "#fff", borderRadius: 20, width: "92%", maxWidth: 1000, maxHeight: "88vh", display: "flex", flexDirection: "column", overflow: "hidden", animation: "modalSlide 0.3s ease", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", background: "#111", color: "#fff", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ background: "#e22222", width: 38, height: 38, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>📱</div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{selectedProject.title}</h3>
                  <p style={{ margin: "2px 0 0", fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
                    {selectedProject.category === 'logo-branding' && 'Logo & Branding'}
                    {selectedProject.category === 'website-design' && 'Website Design'}
                    {selectedProject.category === 'mobile-apps' && 'Mobile App'}
                  </p>
                </div>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// ==================== PRICING ====================
const pricingCategories = [{ key:"estore",label:"E-Store" },{ key:"website",label:"Website Design" },{ key:"shopify",label:"Shopify" },{ key:"branding",label:"Branding" },{ key:"video",label:"Video Animation" },{ key:"seo",label:"SEO" }];
const pricingData: Record<string, Array<{ name: string; price: string; originalPrice: string; addOn: string; features: string[]; phone: string; }>> = { estore:[{name:"E-COMMERCE WEBSITE PACKAGE",price:"$1199.00",originalPrice:"$2398.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["Upto 15 Unique Pages Website","Conceptual and Dynamic Website","Content Management System (CMS)","Mobile Responsive","Easy Product Search","Product Reviews","Shopping Cart Integration","Payment Gateway Integration","Social Media Integration","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"CORPORATE E-COMMERCE PACKAGE",price:"$1949.99",originalPrice:"$3599.99",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["Conceptual and Dynamic Website","Content Management System (CMS)","Mobile Responsive","Easy Product Search","Inventory Management","Multiple Payment Gateways","Order Tracking System","Customer Account Dashboard","Email Marketing Integration","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"ELITE E-COMMERCE PACKAGE",price:"$3694.99",originalPrice:"$7388.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["UNLIMITED Logo Design Concepts","By 6 Award Winning Designers","Icon Design","UNLIMITED Revisions","Print Media","Custom E-Commerce Development","Multi-Vendor Support","Advanced Analytics Dashboard","Priority Customer Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"}],website:[{name:"STARTER WEBSITE PACKAGE",price:"$499.00",originalPrice:"$999.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["5 Unique Pages Website","Conceptual and Dynamic Website","Mobile Responsive Design","Content Management System","Contact Form Integration","Social Media Integration","Basic SEO Setup","Google Analytics Setup","1 Month Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"BUSINESS WEBSITE PACKAGE",price:"$899.00",originalPrice:"$1799.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["10 Unique Pages Website","Conceptual and Dynamic Website","Mobile Responsive Design","Content Management System","Blog Integration","Social Media Integration","Advanced SEO Setup","Speed Optimization","3 Months Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"PREMIUM WEBSITE PACKAGE",price:"$1699.00",originalPrice:"$3399.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["Unlimited Pages Website","Conceptual and Dynamic Website","Mobile Responsive Design","Custom CMS Development","Advanced Blog & News Section","Multi-language Support","Premium SEO Package","Performance Optimization","6 Months Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"}],shopify:[{name:"SHOPIFY STARTER PACKAGE",price:"$699.00",originalPrice:"$1399.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["Shopify Store Setup","Custom Theme Customization","Up to 50 Products Upload","Payment Gateway Setup","Mobile Responsive","Basic SEO Setup","Social Media Integration","Shopify Apps Integration","1 Month Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"SHOPIFY BUSINESS PACKAGE",price:"$1299.00",originalPrice:"$2599.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["Custom Shopify Theme Design","Up to 200 Products Upload","Advanced Payment Options","Inventory Management","Email Marketing Setup","Advanced SEO Package","Speed Optimization","Abandoned Cart Recovery","3 Months Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"SHOPIFY ENTERPRISE PACKAGE",price:"$2499.00",originalPrice:"$4999.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["Fully Custom Shopify Development","Unlimited Products Upload","Multi-Currency Support","Custom Checkout Experience","Advanced Analytics & Reporting","Loyalty Program Integration","ERP/CRM Integration","Priority Customer Support","6 Months Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"}],branding:[{name:"BASIC BRANDING PACKAGE",price:"$299.00",originalPrice:"$599.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["2 Logo Design Concepts","4 Revisions","Finalized Files (AI, PSD, EPS)","Business Card Design","Letterhead Design","Email Signature Design","Brand Color Palette","Typography Selection","1 Month Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"PROFESSIONAL BRANDING PACKAGE",price:"$699.00",originalPrice:"$1399.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["5 Logo Design Concepts","UNLIMITED Revisions","Complete Brand Identity","Business Card & Stationery","Social Media Kit","Brand Style Guide","Brand Color Palette","Custom Typography","3 Months Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"ENTERPRISE BRANDING PACKAGE",price:"$1499.00",originalPrice:"$2999.00",addOn:"Add on: $199 for 30-second Explainer Video Animation",features:["UNLIMITED Logo Concepts","By 6 Award Winning Designers","Complete Brand Identity System","Full Stationery Suite","Social Media Brand Kit","Brand Guidelines Document","Packaging Design","Signage & Billboard Design","6 Months Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"}],video:[{name:"BASIC VIDEO PACKAGE",price:"$399.00",originalPrice:"$799.00",addOn:"Add on: Custom script writing available",features:["30-Second Explainer Video","Custom Script Writing","Professional Voiceover","HD Video Quality","Background Music","2 Revisions","All File Formats","Rush Delivery Available","1 Month Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"STANDARD VIDEO PACKAGE",price:"$799.00",originalPrice:"$1599.00",addOn:"Add on: Custom script writing available",features:["60-Second Explainer Video","Custom Script Writing","Professional Voiceover","Full HD Video Quality","Custom Background Music","Character Animation","4 Revisions","All File Formats","3 Months Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"PREMIUM VIDEO PACKAGE",price:"$1499.00",originalPrice:"$2999.00",addOn:"Add on: Custom script writing available",features:["2-Minute Explainer Video","Professional Script Writing","Premium Voiceover Talent","4K Video Quality","Custom Music Composition","Advanced Character Animation","UNLIMITED Revisions","All File Formats","6 Months Free Support","100% Satisfaction Guarantee"],phone:"1-877-280-0258"}],seo:[{name:"SEO STARTER PACKAGE",price:"$299.00",originalPrice:"$599.00",addOn:"Add on: Social media management available",features:["10 Keywords Optimization","On-Page SEO","Google Analytics Setup","Google Search Console Setup","Monthly Reporting","Meta Tags Optimization","XML Sitemap Creation","Robots.txt Optimization","1 Month Contract","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"SEO PROFESSIONAL PACKAGE",price:"$599.00",originalPrice:"$1199.00",addOn:"Add on: Social media management available",features:["25 Keywords Optimization","On-Page & Off-Page SEO","Link Building Campaign","Content Creation (4 Articles)","Monthly Reporting","Competitor Analysis","Local SEO Optimization","Google My Business Setup","3 Month Contract","100% Satisfaction Guarantee"],phone:"1-877-280-0258"},{name:"SEO ENTERPRISE PACKAGE",price:"$1199.00",originalPrice:"$2399.00",addOn:"Add on: Social media management available",features:["50 Keywords Optimization","Complete SEO Strategy","Advanced Link Building","Content Creation (8 Articles)","Weekly Reporting","Full Competitor Analysis","E-Commerce SEO","Video SEO Optimization","6 Month Contract","100% Satisfaction Guarantee"],phone:"1-877-280-0258"}] };

interface PricingPlan {
  _id: string;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  addOn: string;
  features: string[];
  phone: string;
  order: number;
  isActive: boolean;
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("estore");
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        @keyframes priceFadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes waveScroll{0%{transform:translateX(-50%)}100%{transform:translateX(0%)}}
        .price-card{animation:priceFadeIn 0.4s ease both}
        .features-list{max-height:180px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#e22222 #f0f0f0}
        .features-list::-webkit-scrollbar{width:4px}
        .features-list::-webkit-scrollbar-track{background:#f0f0f0;border-radius:2px}
        .features-list::-webkit-scrollbar-thumb{background:#e22222;border-radius:2px}
        .order-btn:hover{background:#c00000!important}
        .price-card-inner:hover{transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,0.12)!important}
        .tab-btn:hover{background:rgba(255,255,255,0.7)!important}
        .wave-animate{animation:waveScroll 4s linear infinite}
        
        @media (max-width: 768px) {
          .pricing-section { padding: 60px 20px 70px !important; }
          .pricing-tabs { flex-wrap: wrap !important; gap: 8px !important; border-radius: 30px !important; padding: 10px 12px !important; }
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
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3px", color: "#e22222", textTransform: "uppercase" as const }}>OUR PACKAGES</span>
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
                <h3 style={{ fontSize: 18, fontWeight: 900, color: "#111", textAlign: "center" as const, margin: "0 0 20px", lineHeight: 1.3, letterSpacing: 0.3 }}>{plan.name}</h3>
                <div style={{ textAlign: "center" as const, marginBottom: 6 }}>
                  <span style={{ fontSize: 52, fontWeight: 900, color: "#111", lineHeight: 1 }}><sup style={{ fontSize: 28, fontWeight: 900, verticalAlign: "top", marginTop: 10, display: "inline-block" }}>$</sup>{plan.price.replace("$", "")}</span>
                </div>
                <div style={{ textAlign: "center" as const, marginBottom: 20 }}>
                  <span style={{ fontSize: 16, color: "#999", textDecoration: "line-through", marginRight: 6 }}>{plan.originalPrice}</span>
                  <span style={{ fontSize: 14, color: "#999", fontWeight: 700 }}>ONLY</span>
                </div>
                <p style={{ fontSize: 11, color: "#aaa", textAlign: "center" as const, margin: "0 0 20px", lineHeight: 1.5 }}>{plan.addOn}</p>
                <div style={{ position: "relative", height: 20, marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "100%", height: 1, background: "#f0f0f0" }} />
                  <div style={{ position: "absolute", right: 0, top: 0, width: 4, height: 20, background: "#e22222", borderRadius: 2 }} />
                </div>
                <div className="features-list">
                  {plan.features.map((feat, fi) => (
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
                <div><div style={{ fontSize: 13, fontWeight: 800, color: "#e22222", marginBottom: 2 }}>Speak with us</div><div style={{ fontSize: 13, color: "#555", fontWeight: 600 }}>{plan.phone}</div></div>
                <div><div style={{ fontSize: 13, fontWeight: 800, color: "#e22222", marginBottom: 2 }}>Want to discuss ?</div><div style={{ fontSize: 13, color: "#555", fontWeight: 600, cursor: "pointer" }}>Live Chat Now</div></div>
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

const whyChooseFeatures = [
  { num:"01", icon:(<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="2"/><path d="M13 20l5 5 9-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>), title:"Best Security", desc:"We have seen great successes with everyone companies.", ringColor:"#2a5298", dotColor:"#3a6bc4" },
  { num:"02", icon:(<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><rect x="6" y="10" width="28" height="20" rx="4" stroke="#fff" strokeWidth="2"/><path d="M12 18h16M12 22h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>), title:"Risk Manage", desc:"Every business and industry requires an approach in our Heand.", ringColor:"#1a7a5e", dotColor:"#2aaa85" },
  { num:"03", icon:(<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><path d="M8 28l8-10 6 6 8-12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="12" r="3" fill="#fff"/></svg>), title:"Growth Revenue", desc:"You make sure you know how campaign is performing Business.", ringColor:"#7a3a1a", dotColor:"#c46020" },
  { num:"04", icon:(<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><circle cx="20" cy="14" r="6" stroke="#fff" strokeWidth="2"/><circle cx="10" cy="28" r="4" stroke="#fff" strokeWidth="2"/><circle cx="30" cy="28" r="4" stroke="#fff" strokeWidth="2"/><path d="M14 18l-4 6M26 18l4 6" stroke="#fff" strokeWidth="2"/></svg>), title:"Greate Support", desc:"To generate highly focused leads ready to purchases our service.", ringColor:"#5a1a7a", dotColor:"#8a40c0" },
  { num:"05", icon:(<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><path d="M8 32V20l12-10 12 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="15" y="22" width="10" height="10" rx="1" stroke="#fff" strokeWidth="2"/></svg>), title:"Expert Team Work", desc:"Get access to everyone in your organization with a team directory.", ringColor:"#1a4a7a", dotColor:"#2a7acc" },
];

export function WhyChooseUsSection() {
  return (
    <section style={{ background:"linear-gradient(135deg, #1a2a6c 0%, #2a4aac 40%, #3a2a8c 70%, #1a1a5c 100%)",padding:"90px 60px",fontFamily:"'Nunito', sans-serif",position:"relative",overflow:"hidden" }}>
      <style>{`
        @keyframes rocketFloat{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(-20px) rotate(-5deg)}}
        @keyframes exhaustFlame{0%,100%{opacity:0.7;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.2)}}
        @keyframes featureFadeIn{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
        .why-feature {
          animation: featureFadeIn 0.5s ease both;
        }
        .why-feature:hover .why-num-circle {
          transform: scale(1.1);
        }
        .why-num-circle {
          transition: transform 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .why-choose-section { 
            padding: 60px 20px !important; 
          }
          .why-choose-container { 
            flex-direction: column !important; 
            text-align: center !important; 
            gap: 40px !important; 
          }
          .why-choose-left { 
            width: 100% !important; 
          }
          .why-choose-left h2 { 
            font-size: 28px !important; 
          }
          .why-choose-left p { 
            margin-left: auto !important; 
            margin-right: auto !important; 
          }
          .why-choose-right { 
            width: 100% !important; 
          }
          .why-feature { 
            text-align: left !important; 
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .why-choose-section { 
            padding: 70px 40px !important; 
          }
          .why-choose-container { 
            gap: 50px !important; 
          }
          .why-choose-left h2 { 
            font-size: 32px !important; 
          }
        }
      `}</style>
      {[[5,10],[15,40],[8,70],[25,20],[20,85],[3,55]].map(([l,t],i) => (<div key={i} style={{ position:"absolute",left:`${l}%`,top:`${t}%`,width:6,height:6,borderRadius:"50%",background:"rgba(255,255,255,0.15)",pointerEvents:"none" }}/>))}
      <div style={{ maxWidth:1300,margin:"0 auto",display:"flex",alignItems:"center",gap:80 }}>
        <div style={{ flex:"0 0 42%",position:"relative" }}>
          <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:20 }}>
            <span style={{ fontSize:12,fontWeight:800,letterSpacing:"3px",color:"rgba(255,255,255,0.7)",textTransform:"uppercase" as const }}>WHY US CHOOSE NOW</span>
            <svg width="30" height="12" viewBox="0 0 30 12" fill="none"><path d="M0 6 L5 2 L8 6 L13 2 L16 6 L21 2 L24 6" stroke="#e22222" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </div>
          <h2 style={{ fontSize:"clamp(28px,3.5vw,42px)",fontWeight:900,color:"#fff",marginBottom:20,lineHeight:1.2 }}>We Provide the Best<br/>Facilites For Business</h2>
          <p style={{ fontSize:15,color:"rgba(255,255,255,0.7)",lineHeight:1.7,marginBottom:32,maxWidth:380 }}>From keyword research to technical auditing to site migration, our team of technical SEOs are true experts in their field.</p>
          <button style={{ background:"#e22222",color:"#fff",border:"none",fontFamily:"'Nunito', sans-serif",fontSize:15,fontWeight:800,padding:"15px 36px",borderRadius:6,cursor:"pointer",boxShadow:"0 4px 20px rgba(226,34,34,0.5)",marginBottom:60 }}>Let&apos;s Get Started</button>
          <div style={{ position:"relative",width:220,height:280,margin:"0 auto",animation:"rocketFloat 4s ease-in-out infinite" }}>
            <div style={{ position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle, rgba(60,100,220,0.6) 0%, rgba(30,50,150,0.2) 60%, transparent 80%)" }}/>
            <svg viewBox="0 0 120 220" width="120" height="220" style={{ position:"absolute",left:"50%",transform:"translateX(-50%)" }}>
              <ellipse cx="60" cy="110" rx="28" ry="70" fill="#4a90d9" opacity="0.9"/>
              <path d="M32 80 Q60 10 88 80Z" fill="#5aa0e9"/>
              <circle cx="60" cy="100" r="14" fill="#1a3a6c" stroke="#7ab8f5" strokeWidth="2"/>
              <circle cx="60" cy="100" r="9" fill="#2a5aac" opacity="0.8"/>
              <circle cx="55" cy="95" r="3" fill="rgba(255,255,255,0.4)"/>
              <path d="M32 150 L10 185 L32 170Z" fill="#3a70c9"/>
              <path d="M88 150 L110 185 L88 170Z" fill="#3a70c9"/>
              <ellipse cx="60" cy="180" rx="18" ry="8" fill="#2a5aac"/>
              <ellipse cx="55" cy="198" rx="7" ry="16" fill="#FF6B35" style={{ animation:"exhaustFlame 0.6s ease-in-out infinite" }} opacity="0.9"/>
              <ellipse cx="65" cy="200" rx="5" ry="14" fill="#FFD700" style={{ animation:"exhaustFlame 0.8s ease-in-out infinite 0.2s" }} opacity="0.8"/>
              <ellipse cx="60" cy="194" rx="4" ry="12" fill="#fff" opacity="0.6"/>
              <rect x="42" y="95" width="4" height="40" rx="2" fill="rgba(255,255,255,0.2)"/>
              <rect x="74" y="95" width="4" height="40" rx="2" fill="rgba(255,255,255,0.2)"/>
            </svg>
{[[-15,210,8],[0,225,12],[15,218,6],[-8,235,5],[10,240,7]].map(([x,y,s],i) => (
  <div 
    key={i} 
    style={{ 
      position:"absolute",
      left:`calc(50% + ${x}px)`,
      top:`${y}px`,
      width:s,
      height:s,
      borderRadius:"50%",
      background:["#FF6B35","#FFD700","#FF4500","#FFA500","#FF6B35"][i],
      opacity:0.6,
      animation: `exhaustFlame ${0.5 + (i * 0.15)}s ease-in-out infinite`
    }} 
  />
))}          </div>
        </div>
        <div style={{ flex:1,display:"flex",flexDirection:"column",gap:0 }}>
          {whyChooseFeatures.map((feat,i) => (
            <div key={i} className="why-feature" style={{ animationDelay:`${i * 0.1}s`,display:"flex",alignItems:"flex-start",gap:20,padding:"20px 0",borderBottom:i < whyChooseFeatures.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div className="why-num-circle" style={{ flexShrink:0,width:64,height:64,borderRadius:"50%",background:`radial-gradient(circle at 35% 35%, ${feat.dotColor}, ${feat.ringColor})`,border:"2px solid rgba(255,255,255,0.2)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,boxShadow:"0 4px 20px rgba(0,0,0,0.3)",position:"relative" }}>
                {feat.icon}
                <span style={{ position:"absolute",bottom:-2,right:-2,width:22,height:22,borderRadius:"50%",background:"#e22222",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:900,color:"#fff",border:"2px solid rgba(255,255,255,0.3)" }}>{feat.num}</span>
              </div>
              <div><h3 style={{ fontFamily:"'Nunito', sans-serif",fontSize:18,fontWeight:800,color:"#fff",margin:"0 0 6px" }}>{feat.title}</h3><p style={{ fontSize:14,color:"rgba(255,255,255,0.65)",margin:0,lineHeight:1.6,maxWidth:380 }}>{feat.desc}</p></div>
            </div>
          ))}
        </div>
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
                <div style={{ display:"flex",alignItems:"center",gap:20,marginBottom:30,flexWrap:"wrap" }}>
                  <div style={{ width:70,height:70,borderRadius:"50%",background:"linear-gradient(135deg, #e22222, #b71c1c)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:24,boxShadow:"0 8px 20px rgba(226,34,34,0.3)" }}>
                    {t.avatar || t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize:20,fontWeight:800,color:"#1a1a2e",marginBottom:6 }}>{t.name}</h4>
                    <p style={{ fontSize:14,color:"#888",margin:0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-nav-buttons" style={{ padding:"20px 60px 40px",borderTop:"1px solid #f0f0f0",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#fafaff" }}>
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

export function ContactFooterSection() {
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

  const renderLogo = () => {
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

    // Fallback to static wolf icon
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
    <footer style={{ background:"#0a0a0a",color:"#fff",fontFamily:"'Inter', 'Nunito', sans-serif",position:"relative" }}>
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
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .newsletter-box { flex-direction: column !important; text-align: center !important; gap: 20px !important; }
        }
      `}</style>
      <div style={{ height:3,background:"linear-gradient(90deg, #e22222, #ff6b6b, #e22222)",width:"100%" }} />
      <div className="footer-container" style={{ maxWidth:1400,margin:"0 auto",padding:"80px 40px 50px" }}>
        <div className="newsletter-box" style={{ background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",borderRadius:24,padding:"50px 60px",marginBottom:70,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:30 }}>
          <div><h3 style={{ fontSize:"clamp(22px, 3vw, 28px)",fontWeight:700,marginBottom:12 }}>Subscribe to Our Newsletter</h3><p style={{ fontSize:15,color:"rgba(255,255,255,0.7)",margin:0 }}>Get the latest updates on new products and upcoming sales</p></div>
          <div style={{ display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center" }}>
            <input type="email" placeholder="Enter your email" style={{ padding:"14px 24px",borderRadius:12,border:"none",width:280,fontSize:14,outline:"none" }} />
            <button style={{ background:"#e22222",color:"#fff",border:"none",padding:"14px 32px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer",transition:"all 0.3s ease" }} onMouseEnter={e => e.currentTarget.style.background="#b71c1c"} onMouseLeave={e => e.currentTarget.style.background="#e22222"}>Subscribe →</button>
          </div>
        </div>
        <div className="footer-grid" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:50,marginBottom:60 }}>
          <div>
            <div className="footer-logo" style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24,justifyContent:"flex-start" }}>
              {renderLogo()}
              <div>
                <div style={{ fontWeight:800,fontSize:20,letterSpacing:1 }}>360ARTDESIGN</div>
                <div style={{ fontSize:11,color:"#e22222",letterSpacing:"2px",fontWeight:600,textTransform:"uppercase" }}>Digital Agency</div>
              </div>
            </div>
            <p style={{ fontSize:14,color:"rgba(255,255,255,0.6)",lineHeight:1.7,marginBottom:24 }}>We are a creative digital agency focused on crafting stunning websites, powerful brands, and growth-driven marketing strategies.</p>
            <div className="footer-social" style={{ display:"flex",gap:12 }}>{["facebook","twitter","linkedin","instagram"].map(social => (<div key={social} style={{ width:38,height:38,borderRadius:"50%",background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s ease" }} onMouseEnter={e => e.currentTarget.style.background="#e22222"} onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.08)"}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg></div>))}</div>
          </div>
          <div><h4 style={{ fontSize:18,fontWeight:700,marginBottom:24,color:"#fff",letterSpacing:0.5 }}>Our Services</h4><ul style={{ listStyle:"none",padding:0,margin:0 }}>{["Website Design & Development","E-commerce Solutions","Mobile App Development","SEO & Digital Marketing","Branding & Identity","Video Animation"].map(s => (<li key={s} style={{ marginBottom:14,fontSize:14,color:"rgba(255,255,255,0.6)",cursor:"pointer",transition:"color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="#e22222"} onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.6)"}>{s}</li>))}</ul></div>
          <div><h4 style={{ fontSize:18,fontWeight:700,marginBottom:24,color:"#fff",letterSpacing:0.5 }}>Quick Links</h4><ul style={{ listStyle:"none",padding:0,margin:0 }}>{["About Us","Portfolio","Packages","Testimonials","Blog","Contact Us"].map(s => (<li key={s} style={{ marginBottom:14,fontSize:14,color:"rgba(255,255,255,0.6)",cursor:"pointer",transition:"color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="#e22222"} onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.6)"}>{s}</li>))}</ul></div>
          <div>
            <h4 style={{ fontSize:18,fontWeight:700,marginBottom:24,color:"#fff",letterSpacing:0.5 }}>Get In Touch</h4>
            {[{ icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2" style={{ flexShrink:0,marginTop:2 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, text:"1-877-280-0258" },{ icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2" style={{ flexShrink:0,marginTop:2 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, text:"support@360artdesign.com" },{ icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="2" style={{ flexShrink:0,marginTop:2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, text:"Newark, California, 94560, US" }].map((item,i) => (<div key={i} style={{ marginBottom:18,display:"flex",alignItems:"flex-start",gap:14 }}>{item.icon}<span style={{ fontSize:14,color:"rgba(255,255,255,0.7)" }}>{item.text}</span></div>))}
          </div>
        </div>
        <div className="footer-bottom" style={{ borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:30,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:20 }}>
          <p style={{ fontSize:13,color:"rgba(255,255,255,0.4)",margin:0 }}>© Copyrights {currentYear} | All Rights Reserved 360ARTDESIGN</p>
          <div style={{ display:"flex",gap:24,flexWrap:"wrap",justifyContent:"center" }}>{["Privacy Policy","Terms & Conditions","Sitemap"].map(link => (<span key={link} style={{ fontSize:12,color:"rgba(255,255,255,0.4)",cursor:"pointer",transition:"color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="#e22222"} onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.4)"}>{link}</span>))}</div>
        </div>
      </div>
    </footer>
  );
}
// ==================== MAIN PAGE ====================
export default function Page() {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Header />
      <HeroSection heroRef={heroRef} />
      <StatsBar />
      <ClientsSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <CTASection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactFooterSection />
      <ScrollToTopButton heroRef={heroRef} />
    </>
  );
}