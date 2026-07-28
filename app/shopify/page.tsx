"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";
import React from "react";
import { useRouter } from "next/navigation";
import { Header, FooterSection } from "../services/page";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", t);
    return () => window.removeEventListener("scroll", t);
  }, []);
  if (!isVisible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ position:"fixed",bottom:30,right:30,width:50,height:50,borderRadius:"50%",background:"#e22222",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(226,34,34,0.4)",zIndex:1000,transition:"all 0.3s ease" }}
      onMouseEnter={e=>e.currentTarget.style.transform="translateY(-5px)"}
      onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
    ><FaArrowUp /></button>
  );
}

function useScrollReveal<T extends HTMLElement>(threshold=0.12): [React.RefObject<T | null>, boolean]{
  const ref=useRef<T | null>(null);const[visible,setVisible]=useState(false);
  useEffect(()=>{
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);o.disconnect();}},{threshold});
    if(ref.current)o.observe(ref.current);return()=>o.disconnect();
  },[threshold]);
  return[ref,visible];
}

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

// ====== WHITE HERO ======
function WhiteHero() {
  const [ref, visible] = useScrollReveal(0.05);
  return (
    <>
      <style>{`.wh-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 38px;background:#e22222;color:#fff;border:none;font-weight:800;font-size:16px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;cursor:pointer;font-family:'Nunito',sans-serif;transition:all 0.25s ease;border-radius:6px;}.wh-btn:hover{background:#b71c1c!important;transform:translateY(-2px)!important;}`}</style>
      <section ref={ref} style={{ background:"#fff", padding:"90px 40px", textAlign:"center", fontFamily:"'Nunito',sans-serif", borderBottom:"1px solid #f0f0f0" }}>
        <div style={{ maxWidth:760, margin:"0 auto" }}>
          <div style={{ display:"flex",justifyContent:"center",marginBottom:28,opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(-20px)",transition:"all 0.6s ease" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" style={{ height:60,objectFit:"contain" }}/>
          </div>
          <h1 style={{ fontSize:"clamp(36px,4.8vw,62px)",fontWeight:900,color:"#8b0000",textTransform:"uppercase",letterSpacing:-0.5,lineHeight:1.12,margin:"0 0 20px",opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(20px)",transition:"all 0.6s ease 0.1s" }}>
            Build an Online Shopify Business
          </h1>
          <p style={{ fontSize:17,color:"#6b7280",lineHeight:1.75,marginBottom:36,fontStyle:"italic",opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(16px)",transition:"all 0.6s ease 0.2s" }}>
            With the help from our Shopify Gurus
          </p>
          <div style={{ opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(16px)",transition:"all 0.6s ease 0.3s" }}>
            <a href="#inventory" className="wh-btn">Get Started <FaArrowRight /></a>
          </div>
        </div>
      </section>
    </>
  );
}

// ====== DARK INVENTORY SECTION ======
function InventorySection() {
  const [ref, visible] = useScrollReveal(0.08);
  return (
    <>
      <style>{`
        .inv-btn { display:inline-flex;align-items:center;gap:10px;padding:14px 38px;border:2px solid #fff;color:#fff;background:transparent;font-weight:800;font-size:16px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;cursor:pointer;font-family:'Nunito',sans-serif;transition:all 0.28s ease;border-radius:6px; }
        .inv-btn:hover { background:#e22222!important;border-color:#e22222!important;transform:translateY(-2px); }
        .inv-stat-box { display:flex;flex-direction:column;padding:18px 20px;background:rgba(255,255,255,0.05);border-left:3px solid #e22222;border-radius:2px; }
        @media(max-width:900px){ .inv-outer-grid{flex-direction:column!important;} .inv-img-col{width:100%!important;padding:0 40px 64px!important;} .inv-text-col{padding:64px 40px 40px!important;} .inv-stats-row{grid-template-columns:1fr 1fr!important;} }
        @media(max-width:500px){ .inv-stats-row{grid-template-columns:1fr!important;} }
      `}</style>
      <section id="inventory" ref={ref} style={{ background:"linear-gradient(135deg,#1e1e1e 0%,#2d2d2d 60%,#1a1a1a 100%)", fontFamily:"'Nunito',sans-serif", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,zIndex:0,backgroundImage:"radial-gradient(circle at 80% 20%, rgba(226,34,34,0.06) 0%, transparent 60%)",pointerEvents:"none" }} />
        <div className="inv-outer-grid" style={{ maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"stretch",position:"relative",zIndex:1 }}>
          <div className="inv-text-col" style={{ flex:1,padding:"90px 56px 90px 48px",display:"flex",flexDirection:"column",justifyContent:"center",opacity:visible?1:0,transform:visible?"translateX(0)":"translateX(-48px)",transition:"all 0.75s ease" }}>
            <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:20 }}>
              <div style={{ width:60,height:2,background:"linear-gradient(to right, transparent, #e22222)" }} />
              <span style={{ fontSize:13,fontWeight:800,letterSpacing:"3.5px",color:"#e22222",textTransform:"uppercase" }}>SHOPIFY SERVICES</span>
            </div>
            <h2 style={{ fontSize:"clamp(36px,4.8vw,62px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:-0.5,lineHeight:1.12,margin:"0 0 20px" }}>
              Shopify Store<br />Management
            </h2>
            <div style={{ width:60,height:3,background:"#e22222",marginBottom:24,borderRadius:2 }} />
            <p style={{ fontSize:17,color:"rgba(255,255,255,0.88)",lineHeight:1.75,margin:"0 0 40px",fontWeight:500,maxWidth:500 }}>
              Worried about moving your inventory online? Move your product catalog to Shopify easily with our Store Management services. We will take care of listing, uploading, and organizing your products so your store is live and ready to sell.
            </p>
            <div className="inv-stats-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:40 }}>
              {[{num:"500+",label:"Stores Launched"},{num:"98%",label:"Client Satisfaction"},{num:"24/7",label:"Support Available"}].map((s,i)=>(
                <div key={i} className="inv-stat-box" style={{ opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(20px)",transition:`all 0.6s ease ${0.2+i*0.1}s` }}>
                  <span style={{ fontSize:28,fontWeight:900,color:"#fff",lineHeight:1 }}>{s.num}</span>
                  <span style={{ fontSize:12,fontWeight:700,color:"rgba(255,255,255,0.45)",letterSpacing:"1.5px",textTransform:"uppercase",marginTop:6 }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(16px)",transition:"all 0.6s ease 0.5s" }}>
              <a href="/shopify/store-management" className="inv-btn">Learn More <FaArrowRight /></a>
            </div>
          </div>
          <div className="inv-img-col" style={{ width:"46%",flexShrink:0,position:"relative",padding:"64px 48px 64px 0",display:"flex",alignItems:"center",opacity:visible?1:0,transform:visible?"translateX(0)":"translateX(48px)",transition:"all 0.75s ease 0.15s" }}>
            <div style={{ position:"absolute",bottom:44,right:24,width:"80%",height:"78%",background:"#e22222",zIndex:0,borderRadius:2 }} />
            <div style={{ position:"absolute",top:44,left:-12,width:"78%",height:"76%",border:"2px solid rgba(226,34,34,0.35)",zIndex:0,borderRadius:2 }} />
            <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=85" alt="Shopify Store Management" style={{ position:"relative",zIndex:2,width:"100%",height:440,objectFit:"cover",borderRadius:2,boxShadow:"0 24px 64px rgba(0,0,0,0.55)",display:"block" }} />
            <div style={{ position:"absolute",zIndex:3,bottom:80,left:-16,background:"#fff",borderRadius:3,padding:"14px 20px",boxShadow:"0 8px 32px rgba(0,0,0,0.25)",display:"flex",alignItems:"center",gap:12,opacity:visible?1:0,transform:visible?"translateX(0) scale(1)":"translateX(-20px) scale(0.9)",transition:"all 0.65s ease 0.55s" }}>
              <div style={{ width:44,height:44,borderRadius:"50%",background:"#8b0000",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize:14,fontWeight:900,color:"#1a1a1a",margin:0,lineHeight:1.2 }}>Shopify Partner</p>
                <p style={{ fontSize:12,color:"#888",margin:0,fontWeight:600 }}>Certified Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ====== STORE MANAGEMENT OVERVIEW ======
function StoreManagementOverview() {
  const [ref, visible] = useScrollReveal();
  return (
    <>
      <style>{`#overview .sm-btn{display:inline-flex;align-items:center;gap:8px;padding:14px 38px;background:#e22222;color:#fff;border:none;font-weight:800;font-size:16px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;cursor:pointer;font-family:'Nunito',sans-serif;transition:all 0.25s ease;border-radius:6px;}#overview .sm-btn:hover{background:#b71c1c!important;transform:translateY(-2px)!important;}`}</style>
      <section id="overview" ref={ref} style={{ background:"#fff", padding:"90px 40px", fontFamily:"'Nunito',sans-serif", borderBottom:"1px solid #f0f0f0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:18,opacity:visible?1:0,transition:"all 0.6s ease" }}>
            <div style={{ width:60,height:2,background:"linear-gradient(to right, transparent, #e22222)" }} />
            <span style={{ fontSize:13,fontWeight:800,letterSpacing:"3.5px",color:"#e22222",textTransform:"uppercase" }}>ABOUT THE SERVICE</span>
          </div>
          <h2 style={{ fontSize:"clamp(36px,4.8vw,62px)",fontWeight:900,color:"#111827",textTransform:"uppercase",letterSpacing:-0.5,lineHeight:1.12,margin:"0 0 8px",opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(24px)",transition:"all 0.6s ease" }}>
            Store <span style={{ color:"#e22222" }}>Management</span>
          </h2>
          <div style={{ width:60,height:3,background:"#e22222",margin:"16px 0 24px",borderRadius:2,opacity:visible?1:0,transition:"all 0.6s ease 0.08s" }} />
          <p style={{ fontSize:17,color:"#6b7280",lineHeight:1.75,marginBottom:36,maxWidth:860,opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(18px)",transition:"all 0.6s ease 0.12s" }}>
            An all-in-one platform to develop and build your business online. Shopify is built with powerful tools to help your business grow and succeed by increasing sales, building your brand awareness, and providing an easy-to-use platform for selling your products. We know how daunting it may feel to start selling online, but that's why we are here. Our team will work with you to upload and customize your store, integrate apps, and configure your store settings to make building a new online store as easy as possible.
          </p>
          <div style={{ opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(18px)",transition:"all 0.6s ease 0.22s" }}>
            <a href="/shopify/store-management" className="sm-btn">Learn More <FaArrowRight /></a>
          </div>
        </div>
      </section>
    </>
  );
}

// ====== SERVICES GRID ======
const services = [
  { title:"Store Themes & Customization", desc:"Already have a theme picked out for your new store? Or need some helping selecting the best theme for your product catalog? We are here to help you pick and customize the perfect theme for your online presence.", Icon:LaptopSVG },
  { title:"App Installation & Configuration", desc:"Add features and functionality to your store with the addition of Shopify apps. With thousands of apps to choose from, we will help upload and configure the best apps to your Shopify store.", Icon:AppIconsSVG },
  { title:"Store Optimization", desc:"Ensure your theme and store are ready for online with our Store Optimization services. Our team will review the SEO and keywords on your new site to make sure that your website stands out online.", Icon:MobileAnalyticsSVG },
  { title:"Store Configuration", desc:"Orders, Shipping and Payments just got easier with our Shopify Store Configuration. We take care of setting up your store settings so you don't have to. Working closely with you, we will set up your shipping, payments, and more.", Icon:MobileStoreSVG },
];

function ServiceCard({ title, desc, Icon, delay, onClick }: { title:string; desc:string; Icon:()=>React.ReactElement; delay:number; onClick:() => void }) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>(0.08);
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onClick={onClick}
      style={{ padding:"36px 32px", borderLeft:`3px solid ${hovered?"#e22222":"rgba(139,0,0,0.2)"}`, background:hovered?"#fafafa":"#fff", transition:"all 0.25s ease", opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(36px)", transitionDuration:"0.6s", transitionDelay:`${delay}s`, cursor:"pointer" }}>
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
  const router = useRouter();
  
  const handleCardClick = () => {
    router.push("/hire-us");
  };
  
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
          {services.map((s,i) => <ServiceCard key={i} {...s} delay={i*0.1} onClick={handleCardClick} />)}
        </div>
      </div>
    </section>
  );
}

// ====== CONTACT FORM ======
function ContactSection() {
  const [ref, visible] = useScrollReveal(0.08);
  const [form, setForm] = useState({ firstName:"",lastName:"",email:"",phone:"",company:"",role:"",revenue:"",service:"" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const hc = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitSuccess(false);
    try {
      const response = await fetch("https://360artdesign-backend.vercel.app/api/shopify", {
        method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setSubmitMessage("Thank you! Your inquiry has been submitted successfully. We'll contact you within 24 hours.");
        setForm({ firstName:"",lastName:"",email:"",phone:"",company:"",role:"",revenue:"",service:"" });
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitSuccess(false);
      setSubmitMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldStyle: React.CSSProperties = {
    width:"100%", background:"#fff", border:"1px solid #e0e0e0",
    outline:"none", color:"#111827", fontSize:15,
    fontFamily:"'Nunito',sans-serif", fontWeight:500,
    padding:"13px 16px", boxSizing:"border-box", borderRadius:8,
    transition:"all 0.2s ease",
  };
  const labelStyle: React.CSSProperties = {
    display:"block", fontSize:13, fontWeight:700,
    letterSpacing:"0.5px", textTransform:"uppercase", color:"#374151", marginBottom:8,
  };

  const fields = [
    { label:"First Name", name:"firstName", type:"text", placeholder:"Jane" },
    { label:"Last Name", name:"lastName", type:"text", placeholder:"Smith" },
    { label:"Email Address", name:"email", type:"email", placeholder:"jane@company.com" },
    { label:"Phone Number", name:"phone", type:"tel", placeholder:"+1 (555) 000-0000" },
    { label:"Company Name", name:"company", type:"text", placeholder:"Acme Corp" },
  ];

  const selects = [
    { label:"Your Role", name:"role", options:["Owner / Founder","CEO / Director","Manager","Marketing Lead","Other"] },
    { label:"Annual Revenue", name:"revenue", options:["Under $100K","$100K – $500K","$500K – $1M","$1M – $5M","$5M+"] },
    { label:"Shopify Service", name:"service", options:["Store Setup & Launch","Theme Customization","App Integration","Store Optimization","Full Management"] },
  ];

  return (
    <section ref={ref} style={{ background:"#f5f7fd", fontFamily:"'Nunito',sans-serif", padding:"90px 40px 100px" }}>
      <style>{`
        .ct2-input:focus { border-color:#e22222!important; box-shadow:0 0 0 3px rgba(226,34,34,0.1); }
        .ct2-input::placeholder { color:#9ca3af; }
        .ct2-select { appearance:none;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;background-color:#fff;padding-right:40px; }
        .ct2-btn { display:inline-flex;align-items:center;gap:10px;padding:14px 38px;background:#e22222;color:#fff;border:none;font-weight:800;font-size:16px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;font-family:'Nunito',sans-serif;transition:all 0.25s ease;border-radius:6px;box-shadow:0 4px 16px rgba(226,34,34,0.3); }
        .ct2-btn:hover { background:#b71c1c!important;transform:translateY(-2px);box-shadow:0 6px 20px rgba(226,34,34,0.4); }
        .ct2-btn:disabled { background:#ccc!important;cursor:not-allowed;transform:none;box-shadow:none; }
        @media(max-width:768px){ .ct2-grid{grid-template-columns:1fr!important;} }
      `}</style>

      <div style={{ maxWidth:860, margin:"0 auto", opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(32px)", transition:"all 0.7s ease" }}>
        {/* Header */}
        <div style={{ marginBottom:56, textAlign:"center" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:18 }}>
            <div style={{ width:60,height:2,background:"linear-gradient(to right, transparent, #e22222)" }} />
            <span style={{ fontSize:13,fontWeight:800,letterSpacing:"3.5px",color:"#e22222",textTransform:"uppercase" }}>GET IN TOUCH</span>
            <div style={{ width:60,height:2,background:"linear-gradient(to left, transparent, #e22222)" }} />
          </div>
          <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#111827",lineHeight:1.2,margin:"0 0 16px" }}>
            Let's Build Your <span style={{ color:"#e22222" }}>Shopify Store</span>
          </h2>
          <p style={{ fontSize:17,color:"#6b7280",fontWeight:500,margin:"0 auto",lineHeight:1.75,maxWidth:500 }}>
            Tell us about your business and a Shopify expert will reach out within 24 hours.
          </p>
          <div style={{ width:60,height:3,background:"#e22222",marginTop:24,borderRadius:2,marginLeft:"auto",marginRight:"auto" }} />
        </div>

        {/* Message */}
        {submitMessage && (
          <div style={{ marginBottom:28,padding:"16px 20px",borderRadius:8,background:submitSuccess?"#d4edda":"#f8d7da",border:submitSuccess?"1px solid #c3e6cb":"1px solid #f5c6cb",color:submitSuccess?"#155724":"#721c24",fontSize:15,fontWeight:600,textAlign:"center" }}>
            {submitMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ background:"#fff", padding:"48px", borderRadius:16, boxShadow:"0 6px 30px rgba(0,0,0,0.07)", border:"1px solid #e5e7eb" }}>
          <div className="ct2-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px 32px" }}>
            {fields.map(f => (
              <div key={f.name}>
                <label style={labelStyle}>{f.label} <span style={{ color:"#e22222" }}>*</span></label>
                <input className="ct2-input" name={f.name} type={f.type} value={(form as any)[f.name]} onChange={hc} placeholder={f.placeholder} style={fieldStyle} required />
              </div>
            ))}
            {selects.map(s => (
              <div key={s.name}>
                <label style={labelStyle}>{s.label} <span style={{ color:"#e22222" }}>*</span></label>
                <select className="ct2-input ct2-select" name={s.name} value={(form as any)[s.name]} onChange={hc} style={fieldStyle} required>
                  <option value="">Select</option>
                  {s.options.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
          <div style={{ marginTop:36,paddingTop:28,borderTop:"1px solid #f0f0f0",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16 }}>
            <p style={{ fontSize:14,color:"#9ca3af",fontWeight:500,margin:0 }}>
              Fields marked <span style={{ color:"#e22222" }}>*</span> are required &nbsp;·&nbsp; We respond within 24 hours
            </p>
            <button className="ct2-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Inquiry"} <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ShopifyPage() {
  return (
    <>
      <Header />
      <WhiteHero />
      <InventorySection />
      <StoreManagementOverview />
      <ServicesGrid />
      <ContactSection />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}