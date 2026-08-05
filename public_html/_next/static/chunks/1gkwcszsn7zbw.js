(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let p=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),p&&"?"!==p[0]&&(p="?"+p),o=o.replace(/[?#]/g,encodeURIComponent),p=p.replace("#","%23"),`${n}${c}${o}${p}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),o=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return x},useLinkStatus:function(){return y}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809),a=e.r(43476),s=i._(e.r(71645)),l=e.r(95057),c=e.r(8372),p=e.r(18581),d=e.r(18967),u=e.r(5550);e.r(33525);let h=e.r(88540),f=e.r(91949),m=e.r(73668),g=e.r(9396);function x(t){var r,n;let o,i,x,[y,v]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:j,as:k,children:C,prefetch:P=null,passHref:S,replace:T,shallow:N,scroll:z,onClick:I,onMouseEnter:L,onTouchStart:W,legacyBehavior:_=!1,onNavigate:R,transitionTypes:O,ref:M,unstable_dynamicOnHover:A,...E}=t;o=C,_&&("string"==typeof o||"number"==typeof o)&&(o=(0,a.jsx)("a",{children:o}));let F=s.default.useContext(c.AppRouterContext),U=!1!==P,B=!1!==P?null===(n=P)||"auto"===n?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,D="string"==typeof(r=k||j)?r:(0,l.formatUrl)(r);if(_){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=s.default.Children.only(o)}let q=_?i&&"object"==typeof i&&i.ref:M,K=s.default.useCallback(e=>(null!==F&&(w.current=(0,f.mountLinkInstance)(e,D,F,B,U,v)),()=>{w.current&&((0,f.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,f.unmountPrefetchableInstance)(e)}),[U,D,F,B,v]),H={ref:(0,p.useMergedRef)(K,q),onClick(t){_||"function"!=typeof I||I(t),_&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!F||t.defaultPrevented||function(t,r,n,o,i,a,l){if("u">typeof window){let c,{nodeName:p}=t.currentTarget;if("A"===p.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(r,o?"replace":"push",!1===i?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,n.current,l)})}}(t,D,w,T,z,R,O)},onMouseEnter(e){_||"function"!=typeof L||L(e),_&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),F&&U&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){_||"function"!=typeof W||W(e),_&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),F&&U&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,d.isAbsoluteUrl)(D)?H.href=D:_&&!S&&("a"!==i.type||"href"in i.props)||(H.href=(0,u.addBasePath)(D)),x=_?s.default.cloneElement(i,H):(0,a.jsx)("a",{...E,...H,children:o}),(0,a.jsx)(b.Provider,{value:y,children:x})}e.r(84508);let b=(0,s.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18566,(e,t,r)=>{t.exports=e.r(76562)},27366,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(11152),o=e.i(64069);function i(){let[e,o]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{let e=()=>o(window.scrollY>500);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e)?(0,t.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{position:"fixed",bottom:30,right:30,width:50,height:50,borderRadius:"50%",background:"#e22222",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(226,34,34,0.4)",zIndex:1e3,transition:"all 0.3s ease"},onMouseEnter:e=>e.currentTarget.style.transform="translateY(-5px)",onMouseLeave:e=>e.currentTarget.style.transform="translateY(0)",children:(0,t.jsx)(n.FaArrowUp,{})}):null}function a(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .privacy-hero-btn-primary:hover { background: #b71c1c !important; }
        .privacy-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .privacy-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .privacy-hero-section { padding-top: 0 !important; }
          .privacy-hero-container { padding: 10px 20px 100px !important; text-align: center !important; }
          .privacy-hero-container h1 { font-size: 32px !important; }
          .privacy-hero-container p { font-size: 15px !important; padding: 0 15px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .privacy-hero-container { padding: 20px 30px 100px !important; text-align: center !important; }
          .privacy-hero-container h1 { font-size: 42px !important; }
        }
      `}),(0,t.jsxs)("section",{className:"privacy-hero-section",style:{paddingTop:70,minHeight:"60vh",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",fontFamily:"'Nunito', sans-serif",background:"#8b0000"},children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')",backgroundSize:"cover",backgroundPosition:"center right",opacity:.25,zIndex:0}}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)",zIndex:1}}),(0,t.jsxs)("div",{className:"privacy-hero-container",style:{maxWidth:1200,margin:"0 auto",width:"100%",textAlign:"center",position:"relative",zIndex:10},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[(0,t.jsx)("span",{style:{width:50,height:2,background:"rgba(255,255,255,0.6)"}}),(0,t.jsx)("span",{style:{fontSize:13,fontWeight:700,letterSpacing:"4px",color:"rgba(255,255,255,0.85)",textTransform:"uppercase"},children:"Legal"}),(0,t.jsx)("span",{style:{width:50,height:2,background:"rgba(255,255,255,0.6)"}})]}),(0,t.jsxs)("h1",{style:{fontSize:"clamp(36px, 5vw, 62px)",fontWeight:900,color:"#fff",lineHeight:1.12,marginBottom:22,letterSpacing:-.5},children:["Privacy ",(0,t.jsx)("span",{style:{color:"rgba(255,255,255,0.75)"},children:"Policy"})]}),(0,t.jsx)("p",{style:{fontSize:17,color:"rgba(255,255,255,0.85)",lineHeight:1.75,maxWidth:620,margin:"0 auto 36px"},children:"Last Updated: January 15, 2026"}),(0,t.jsx)("div",{className:"hero-buttons",style:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}})]}),(0,t.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:280,lineHeight:0,zIndex:2,overflow:"hidden",pointerEvents:"none"},children:[(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove2 15s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z",fill:"rgba(255,255,255,0.12)"})})}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove1 12s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z",fill:"rgba(255,255,255,0.30)"})})}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove3 10s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z",fill:"#f3f4f8"})})})]})]})]})}let s=[{icon:(0,t.jsx)(n.FaDatabase,{}),number:"01",title:"Information We Collect",intro:"We collect several types of information from and about users of our website:",items:[{label:"Personal Information",desc:"Name, email address, phone number, and other contact details you provide when filling out forms, contacting us, or subscribing to our newsletter."},{label:"Usage Information",desc:"Information about how you use our website, including pages visited, time spent, and features used."},{label:"Device Information",desc:"IP address, browser type, operating system, and device identifiers."},{label:"Cookies",desc:"We use cookies and similar technologies to enhance your experience and analyze website traffic."}]},{icon:(0,t.jsx)(n.FaShieldAlt,{}),number:"02",title:"How We Use Your Information",intro:"We use the information we collect for various purposes:",items:[{label:null,desc:"To provide, maintain, and improve our services"},{label:null,desc:"To process your requests and respond to your inquiries"},{label:null,desc:"To send you marketing communications (with your consent)"},{label:null,desc:"To analyze usage patterns and improve our website"},{label:null,desc:"To comply with legal obligations"},{label:null,desc:"To protect against fraud and ensure security"}]},{icon:(0,t.jsx)(n.FaShareAlt,{}),number:"03",title:"Information Sharing",intro:"We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",items:[{label:"Service Providers",desc:"With trusted third-party service providers who assist us in operating our website and conducting our business."},{label:"Legal Requirements",desc:"When required by law, court order, or government authority."},{label:"Business Transfers",desc:"In connection with a merger, sale, or transfer of our assets."},{label:"With Your Consent",desc:"When you have given us explicit permission to share your information."}]},{icon:(0,t.jsx)(n.FaLock,{}),number:"04",title:"Data Security",intro:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",items:[]},{icon:(0,t.jsx)(n.FaCookieBite,{}),number:"05",title:"Cookies and Tracking Technologies",intro:"We use cookies and similar tracking technologies to collect and track information about your activities on our website. Cookies are small files stored on your device that help us improve your experience. You can control cookie settings through your browser preferences.",items:[]},{icon:(0,t.jsx)(n.FaUserShield,{}),number:"06",title:"Your Privacy Rights",intro:"Depending on your location, you may have certain rights regarding your personal information:",items:[{label:"Access",desc:"Request access to your personal information"},{label:"Correction",desc:"Request correction of inaccurate information"},{label:"Deletion",desc:"Request deletion of your personal information"},{label:"Opt-out",desc:"Opt-out of marketing communications"},{label:"Complaint",desc:"File a complaint with a data protection authority"}]},{icon:(0,t.jsx)(n.FaExternalLinkAlt,{}),number:"07",title:"Third-Party Links",intro:"Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.",items:[]},{icon:(0,t.jsx)(n.FaChild,{}),number:"08",title:"Children's Privacy",intro:"Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",items:[]},{icon:(0,t.jsx)(n.FaSyncAlt,{}),number:"09",title:"Changes to This Privacy Policy",intro:'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.',items:[]}];function l(){return(0,t.jsxs)("section",{style:{background:"#f3f4f8",padding:"72px 24px 96px",fontFamily:"'Nunito', sans-serif"},children:[(0,t.jsx)("style",{children:`
        .pp-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 40px;
          margin-bottom: 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border: 1px solid #eee;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .pp-card:hover {
          box-shadow: 0 8px 32px rgba(226,34,34,0.10);
          transform: translateY(-2px);
        }
        .pp-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(180deg, #e22222, #8b0000);
          border-radius: 4px 0 0 4px;
        }
        .pp-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .pp-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #e22222, #8b0000);
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-size: 18px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(226,34,34,0.25);
        }
        .pp-section-num {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #e22222;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }
        .pp-section-title {
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 800;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }
        .pp-intro {
          font-size: 15.5px;
          color: #4b5563;
          line-height: 1.8;
          margin: 0 0 20px 0;
        }
        .pp-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
          margin-top: 4px;
        }
        .pp-item {
          background: #fafafa;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          padding: 14px 18px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .pp-item-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #e22222;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .pp-item-text { flex: 1; }
        .pp-item-label {
          font-size: 13px;
          font-weight: 800;
          color: #e22222;
          display: block;
          margin-bottom: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .pp-item-desc {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.65;
          margin: 0;
        }
        .pp-contact-card {
          background: linear-gradient(135deg, #8b0000 0%, #c00000 100%);
          border-radius: 16px;
          padding: 40px;
          color: #fff;
          margin-top: 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(139,0,0,0.3);
        }
        .pp-contact-card::after {
          content: "";
          position: absolute;
          top: -60px; right: -60px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }
        .pp-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }
        .pp-contact-item {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          padding: 16px 20px;
        }
        .pp-contact-item-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          display: block;
          margin-bottom: 6px;
        }
        .pp-contact-item-value {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }
        .pp-footer-note {
          text-align: center;
          margin-top: 40px;
          font-size: 13px;
          color: #9ca3af;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }
        @media (max-width: 768px) {
          .pp-card { padding: 24px 20px; }
          .pp-items-grid { grid-template-columns: 1fr; }
          .pp-contact-card { padding: 28px 20px; }
          .pp-contact-grid { grid-template-columns: 1fr; }
        }
      `}),(0,t.jsxs)("div",{style:{maxWidth:900,margin:"0 auto"},children:[(0,t.jsxs)("p",{style:{fontSize:16,color:"#374151",lineHeight:1.85,marginBottom:40,textAlign:"center",maxWidth:680,margin:"0 auto 48px"},children:["At ",(0,t.jsx)("strong",{style:{color:"#e22222"},children:"360 Art Design"}),", we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services."]}),s.map((e,r)=>(0,t.jsxs)("div",{className:"pp-card",children:[(0,t.jsxs)("div",{className:"pp-card-header",children:[(0,t.jsx)("div",{className:"pp-icon-wrap",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"pp-section-num",children:e.number}),(0,t.jsx)("h2",{className:"pp-section-title",children:e.title})]})]}),e.intro&&(0,t.jsx)("p",{className:"pp-intro",children:e.intro}),e.items.length>0&&(0,t.jsx)("div",{className:"pp-items-grid",children:e.items.map((e,r)=>(0,t.jsxs)("div",{className:"pp-item",children:[(0,t.jsx)("div",{className:"pp-item-dot"}),(0,t.jsxs)("div",{className:"pp-item-text",children:[e.label&&(0,t.jsx)("span",{className:"pp-item-label",children:e.label}),(0,t.jsx)("p",{className:"pp-item-desc",children:e.desc})]})]},r))})]},r)),(0,t.jsxs)("div",{className:"pp-contact-card",children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:8,position:"relative",zIndex:1},children:[(0,t.jsx)("div",{style:{width:44,height:44,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18},children:(0,t.jsx)(n.FaEnvelope,{})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:{fontSize:11,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.65)",display:"block",marginBottom:2},children:"10"}),(0,t.jsx)("h2",{style:{fontSize:"clamp(18px, 2.5vw, 22px)",fontWeight:800,color:"#fff",margin:0},children:"Contact Us"})]})]}),(0,t.jsx)("p",{style:{fontSize:15,color:"rgba(255,255,255,0.85)",lineHeight:1.75,maxWidth:560,margin:"0 0 0 0",position:"relative",zIndex:1},children:"If you have any questions about this Privacy Policy or our data practices, please reach out to us through any of the following channels."}),(0,t.jsxs)("div",{className:"pp-contact-grid",style:{position:"relative",zIndex:1},children:[(0,t.jsxs)("div",{className:"pp-contact-item",children:[(0,t.jsx)("span",{className:"pp-contact-item-label",children:"Email"}),(0,t.jsx)("span",{className:"pp-contact-item-value",children:"info@bisonstechs.com"})]}),(0,t.jsxs)("div",{className:"pp-contact-item",children:[(0,t.jsx)("span",{className:"pp-contact-item-label",children:"Phone"}),(0,t.jsx)("span",{className:"pp-contact-item-value",children:"+92 300 1234567"})]}),(0,t.jsxs)("div",{className:"pp-contact-item",children:[(0,t.jsx)("span",{className:"pp-contact-item-label",children:"Address"}),(0,t.jsx)("span",{className:"pp-contact-item-value",children:"Wells Fargo Plaza 333 SE 2nd Ave, Suite 2000 Miami, FL 33131"})]})]})]}),(0,t.jsx)("p",{className:"pp-footer-note",children:"This Privacy Policy is effective as of January 15, 2026."})]})]})}e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Header,{}),(0,t.jsx)(a,{}),(0,t.jsx)(l,{}),(0,t.jsx)(o.FooterSection,{}),(0,t.jsx)(i,{})]})}])}]);