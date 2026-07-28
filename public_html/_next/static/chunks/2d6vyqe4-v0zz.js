(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={formatUrl:function(){return a},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let o=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:i}=e,r=e.protocol||"",n=e.pathname||"",a=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:i&&(c=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||s.test(r))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${r}${c}${n}${d}${a}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return a(e)}},18581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return n}});let r=e.r(71645);function n(e,t){let i=(0,r.useRef)(null),n=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=i.current;e&&(i.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(i.current=o(e,r)),t&&(n.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},73668,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),n=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,n.hasBasePath)(i.pathname)}catch(e){return!1}}},84508,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return f},useLinkStatus:function(){return v}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let o=e.r(90809),s=e.r(43476),a=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),p=e.r(18967),h=e.r(5550);e.r(33525);let u=e.r(88540),m=e.r(91949),g=e.r(73668),x=e.r(9396);function f(t){var i,r;let n,o,f,[v,w]=(0,a.useOptimistic)(m.IDLE_LINK_STATUS),y=(0,a.useRef)(null),{href:j,as:N,children:k,prefetch:C=null,passHref:S,replace:z,shallow:E,scroll:O,onClick:T,onMouseEnter:M,onTouchStart:P,legacyBehavior:A=!1,onNavigate:_,transitionTypes:R,ref:I,unstable_dynamicOnHover:W,...L}=t;n=k,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let D=a.default.useContext(c.AppRouterContext),B=!1!==C,U=!1!==C?null===(r=C)||"auto"===r?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,F="string"==typeof(i=N||j)?i:(0,l.formatUrl)(i);if(A){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=a.default.Children.only(n)}let Y=A?o&&"object"==typeof o&&o.ref:I,H=a.default.useCallback(e=>(null!==D&&(y.current=(0,m.mountLinkInstance)(e,F,D,U,B,w)),()=>{y.current&&((0,m.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,m.unmountPrefetchableInstance)(e)}),[B,F,D,U,w]),K={ref:(0,d.useMergedRef)(H,Y),onClick(t){A||"function"!=typeof T||T(t),A&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!D||t.defaultPrevented||function(t,i,r,n,o,s,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(i)){n&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);a.default.startTransition(()=>{p(i,n?"replace":"push",!1===o?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,r.current,l)})}}(t,F,y,z,O,_,R)},onMouseEnter(e){A||"function"!=typeof M||M(e),A&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),D&&B&&(0,m.onNavigationIntent)(e.currentTarget,!0===W)},onTouchStart:function(e){A||"function"!=typeof P||P(e),A&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),D&&B&&(0,m.onNavigationIntent)(e.currentTarget,!0===W)}};return(0,p.isAbsoluteUrl)(F)?K.href=F:A&&!S&&("a"!==o.type||"href"in o.props)||(K.href=(0,h.addBasePath)(F)),f=A?a.default.cloneElement(o,K):(0,s.jsx)("a",{...L,...K,children:n}),(0,s.jsx)(b.Provider,{value:v,children:f})}e.r(84508);let b=(0,a.createContext)(m.IDLE_LINK_STATUS),v=()=>(0,a.useContext)(b);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},18566,(e,t,i)=>{t.exports=e.r(76562)},60078,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(11152),n=e.i(64069);function o(){let[e,n]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let e=()=>n(window.scrollY>500);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e)?(0,t.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{position:"fixed",bottom:30,right:30,width:50,height:50,borderRadius:"50%",background:"#e22222",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(226,34,34,0.4)",zIndex:1e3,transition:"all 0.3s ease"},onMouseEnter:e=>e.currentTarget.style.transform="translateY(-5px)",onMouseLeave:e=>e.currentTarget.style.transform="translateY(0)",children:(0,t.jsx)(r.FaArrowUp,{})}):null}function s(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .about-hero-btn-primary:hover { background: #b71c1c !important; }
        .about-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .about-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .about-hero-section { padding-top: 0 !important; }
          .about-hero-container { padding: 10px 20px 100px !important; text-align: center !important; }
          .about-hero-container h1 { font-size: 32px !important; }
          .about-hero-container p { font-size: 15px !important; padding: 0 15px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .about-hero-container { padding: 20px 30px 100px !important; text-align: center !important; }
          .about-hero-container h1 { font-size: 42px !important; }
        }
      `}),(0,t.jsxs)("section",{className:"about-hero-section",style:{paddingTop:70,minHeight:"60vh",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",fontFamily:"'Nunito', sans-serif",background:"#8b0000"},children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')",backgroundSize:"cover",backgroundPosition:"center right",opacity:.25,zIndex:0}}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)",zIndex:1}}),(0,t.jsxs)("div",{className:"about-hero-container",style:{maxWidth:1200,margin:"0 auto",width:"100%",textAlign:"center",position:"relative",zIndex:10},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[(0,t.jsx)("span",{style:{width:50,height:2,background:"rgba(255,255,255,0.6)"}}),(0,t.jsx)("span",{style:{fontSize:13,fontWeight:700,letterSpacing:"4px",color:"rgba(255,255,255,0.85)",textTransform:"uppercase"},children:"About Us"}),(0,t.jsx)("span",{style:{width:50,height:2,background:"rgba(255,255,255,0.6)"}})]}),(0,t.jsxs)("h1",{style:{fontSize:"clamp(36px, 5vw, 62px)",fontWeight:900,color:"#fff",lineHeight:1.12,marginBottom:22,letterSpacing:-.5},children:["Building ",(0,t.jsx)("span",{style:{color:"rgba(255,255,255,0.75)"},children:"Digital Excellence"})]}),(0,t.jsx)("p",{style:{fontSize:17,color:"rgba(255,255,255,0.85)",lineHeight:1.75,maxWidth:620,margin:"0 auto 36px"},children:"We are a creative digital agency passionate about crafting stunning websites, powerful brands, and growth-driven marketing strategies."}),(0,t.jsx)("div",{className:"hero-buttons",style:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}})]}),(0,t.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:280,lineHeight:0,zIndex:2,overflow:"hidden",pointerEvents:"none"},children:[(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove2 15s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z",fill:"rgba(255,255,255,0.12)"})})}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove1 12s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z",fill:"rgba(255,255,255,0.30)"})})}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove3 10s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z",fill:"#f3f4f8"})})})]})]})]})}function a(){return(0,t.jsxs)("section",{style:{background:"#f3f4f8",padding:"64px 24px 80px",fontFamily:"'Nunito', sans-serif"},children:[(0,t.jsx)("style",{children:`
        .about-wrap { max-width: 1160px; margin: 0 auto; }

        /* Section label */
        .section-eyebrow {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 14px;
        }
        .section-eyebrow span {
          font-size: 12px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #e22222;
        }
        .eyebrow-line { flex: none; width: 36px; height: 2px; background: #e22222; border-radius: 2px; }

        .section-heading { font-size: clamp(24px, 3vw, 32px); font-weight: 900; color: #111827; line-height: 1.25; margin: 0 0 12px; }
        .section-sub { font-size: 15px; color: #6b7280; line-height: 1.75; margin: 0 0 40px; max-width: 600px; }

        /* WHO WE ARE */
        .who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 80px;
        }
        .who-img-wrap { border-radius: 16px; overflow: hidden; position: relative; }
        .who-img-wrap img { width: 100%; height: 420px; object-fit: cover; display: block; }
        .who-img-badge {
          position: absolute; bottom: 24px; left: 24px;
          background: #fff; border-radius: 12px; padding: 14px 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          display: flex; align-items: center; gap: 12px;
        }
        .who-img-badge-num { font-size: 28px; font-weight: 900; color: #e22222; }
        .who-img-badge-text { font-size: 13px; color: #6b7280; font-weight: 600; line-height: 1.3; }
        .who-text p { font-size: 15px; color: #4b5563; line-height: 1.85; margin-bottom: 18px; }
        .who-text p:last-of-type { margin-bottom: 0; }
        .who-lead {
          font-size: 16px; color: #374151; line-height: 1.85;
          padding: 18px 22px; background: #fff8f8;
          border-left: 3px solid #e22222; border-radius: 0 8px 8px 0;
          margin-bottom: 20px;
        }

        /* STATS */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 80px;
        }
        .stat-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 28px 20px;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(226,34,34,0.1); border-color: #f5c6c6; }
        .stat-icon { font-size: 28px; margin-bottom: 10px; }
        .stat-number { font-size: 40px; font-weight: 900; color: #e22222; line-height: 1; margin-bottom: 8px; }
        .stat-label { font-size: 13px; color: #6b7280; font-weight: 600; }

        /* MISSION VISION */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 80px;
        }
        .mv-card {
          background: #fff;
          border-radius: 16px;
          border: 0.5px solid #e5e7eb;
          padding: 36px 32px;
          transition: box-shadow 0.25s ease;
        }
        .mv-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .mv-icon-wrap {
          width: 56px; height: 56px;
          background: linear-gradient(135deg, #e22222, #8b0000);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .mv-card h3 { font-size: 20px; font-weight: 800; color: #111827; margin-bottom: 12px; }
        .mv-card p { font-size: 15px; color: #4b5563; line-height: 1.75; margin: 0; }

        /* VALUES */
        .values-section { margin-bottom: 80px; }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .value-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 26px 22px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .value-card:hover { border-color: #e22222; box-shadow: 0 6px 20px rgba(226,34,34,0.08); }
        .value-emoji { font-size: 28px; margin-bottom: 12px; }
        .value-card h3 { font-size: 16px; font-weight: 800; color: #111827; margin-bottom: 8px; }
        .value-card p { font-size: 13px; color: #6b7280; line-height: 1.65; margin: 0; }

        /* WHY CHOOSE US */
        .why-section { margin-bottom: 80px; }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .why-item {
          display: flex;
          gap: 14px;
          background: #fff;
          border-radius: 12px;
          border: 0.5px solid #e5e7eb;
          padding: 20px 22px;
          align-items: flex-start;
          transition: border-color 0.2s ease;
        }
        .why-item:hover { border-color: #e22222; }
        .why-bullet {
          width: 32px; height: 32px; border-radius: 8px;
          background: #fff0f0; color: #e22222;
          font-size: 16px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .why-title { font-size: 14px; font-weight: 800; color: #111827; margin-bottom: 4px; }
        .why-desc { font-size: 13px; color: #6b7280; line-height: 1.6; margin: 0; }

        /* SERVICES */
        .services-section { margin-bottom: 80px; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .service-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 26px 22px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .service-card:hover { border-color: #e22222; box-shadow: 0 6px 20px rgba(226,34,34,0.08); transform: translateY(-3px); }
        .service-icon { font-size: 28px; margin-bottom: 12px; }
        .service-title { font-size: 14px; font-weight: 800; color: #111827; margin-bottom: 7px; }
        .service-desc { font-size: 13px; color: #6b7280; line-height: 1.6; margin: 0; }

        /* CTA */
        .about-cta {
          background: linear-gradient(135deg, #8b0000 0%, #c0392b 100%);
          border-radius: 20px;
          padding: 56px 40px;
          text-align: center;
        }
        .about-cta h2 { font-size: clamp(24px, 3vw, 32px); font-weight: 900; color: #fff; margin-bottom: 14px; }
        .about-cta p { font-size: 16px; color: rgba(255,255,255,0.88); line-height: 1.7; max-width: 520px; margin: 0 auto 28px; }
        .cta-btn {
          background: #fff; color: #c0392b;
          border: none; padding: 14px 42px;
          font-weight: 800; font-size: 15px;
          border-radius: 8px; cursor: pointer;
          font-family: 'Nunito', sans-serif;
          transition: transform 0.2s ease;
        }
        .cta-btn:hover { transform: translateY(-2px); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr !important; }
          .mv-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
          .who-img-wrap img { height: 260px !important; }
          .about-cta { padding: 36px 20px !important; }
        }
        @media (max-width: 480px) {
          .stats-row { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        }
      `}),(0,t.jsxs)("div",{className:"about-wrap",children:[(0,t.jsxs)("div",{className:"who-grid",children:[(0,t.jsxs)("div",{className:"who-img-wrap",children:[(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",alt:"360 Art Design Team"}),(0,t.jsxs)("div",{className:"who-img-badge",children:[(0,t.jsx)("div",{className:"who-img-badge-num",children:"8+"}),(0,t.jsxs)("div",{className:"who-img-badge-text",children:["Years of Digital",(0,t.jsx)("br",{}),"Excellence"]})]})]}),(0,t.jsxs)("div",{className:"who-text",children:[(0,t.jsxs)("div",{className:"section-eyebrow",children:[(0,t.jsx)("span",{className:"eyebrow-line"}),(0,t.jsx)("span",{children:"Who We Are"})]}),(0,t.jsx)("h2",{className:"section-heading",children:"A Team Passionate About Your Growth"}),(0,t.jsx)("p",{className:"who-lead",children:"360 Art Design is a full-service digital agency dedicated to helping businesses succeed in the digital world."}),(0,t.jsx)("p",{children:"Founded with a passion for creativity and technology, we have grown into a team of skilled professionals specializing in web development, mobile applications, graphic design, digital marketing, and business management solutions."}),(0,t.jsx)("p",{children:"We believe every business deserves a strong online presence, and we work tirelessly to deliver exceptional results that exceed expectations — combining innovative design with cutting-edge technology to drive real growth."})]})]}),(0,t.jsx)("div",{className:"stats-row",children:[{number:"500+",label:"Projects Completed",icon:"🏆"},{number:"300+",label:"Happy Clients",icon:"😊"},{number:"50+",label:"Team Members",icon:"👥"},{number:"8+",label:"Years Experience",icon:"📅"}].map((e,i)=>(0,t.jsxs)("div",{className:"stat-card",children:[(0,t.jsx)("div",{className:"stat-icon",children:e.icon}),(0,t.jsx)("div",{className:"stat-number",children:e.number}),(0,t.jsx)("div",{className:"stat-label",children:e.label})]},i))}),(0,t.jsxs)("div",{style:{marginBottom:80},children:[(0,t.jsxs)("div",{className:"section-eyebrow",children:[(0,t.jsx)("span",{className:"eyebrow-line"}),(0,t.jsx)("span",{children:"Our Purpose"})]}),(0,t.jsx)("h2",{className:"section-heading",children:"Mission & Vision"}),(0,t.jsxs)("div",{className:"mv-grid",children:[(0,t.jsxs)("div",{className:"mv-card",children:[(0,t.jsx)("div",{className:"mv-icon-wrap",children:(0,t.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("path",{d:"M12 6v6l4 2"})]})}),(0,t.jsx)("h3",{children:"Our Mission"}),(0,t.jsx)("p",{children:"To empower businesses with innovative digital solutions that drive growth, enhance brand visibility, and create meaningful connections with their target audience."})]}),(0,t.jsxs)("div",{className:"mv-card",children:[(0,t.jsx)("div",{className:"mv-icon-wrap",children:(0,t.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,t.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}),(0,t.jsx)("h3",{children:"Our Vision"}),(0,t.jsx)("p",{children:"To be the leading digital agency recognized for excellence in creativity, innovation, and client satisfaction — helping businesses worldwide achieve their full digital potential."})]})]})]}),(0,t.jsxs)("div",{className:"values-section",children:[(0,t.jsxs)("div",{className:"section-eyebrow",children:[(0,t.jsx)("span",{className:"eyebrow-line"}),(0,t.jsx)("span",{children:"Core Values"})]}),(0,t.jsx)("h2",{className:"section-heading",children:"What Drives Us Every Day"}),(0,t.jsx)("p",{className:"section-sub",children:"These principles shape how we work, how we communicate, and how we deliver results for every client."}),(0,t.jsx)("div",{className:"values-grid",children:[{title:"Creativity",desc:"We think outside the box to deliver unique and innovative solutions for every client.",icon:"💡"},{title:"Quality",desc:"We maintain the highest standards in design, development, and delivery.",icon:"⭐"},{title:"Integrity",desc:"Honesty, transparency, and ethical business practices guide everything we do.",icon:"🤝"},{title:"Collaboration",desc:"We work closely with our clients as true partners to achieve shared success.",icon:"🔗"},{title:"Innovation",desc:"We stay ahead of trends using cutting-edge technology and modern methods.",icon:"🚀"},{title:"Excellence",desc:"We strive for perfection in every project, big or small.",icon:"🎯"}].map((e,i)=>(0,t.jsxs)("div",{className:"value-card",children:[(0,t.jsx)("div",{className:"value-emoji",children:e.icon}),(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("p",{children:e.desc})]},i))})]}),(0,t.jsxs)("div",{className:"why-section",children:[(0,t.jsxs)("div",{className:"section-eyebrow",children:[(0,t.jsx)("span",{className:"eyebrow-line"}),(0,t.jsx)("span",{children:"Why Choose Us"})]}),(0,t.jsx)("h2",{className:"section-heading",children:"The 360 Art Design Difference"}),(0,t.jsx)("p",{className:"section-sub",children:"We go beyond delivery — we become your long-term digital partner committed to your success."}),(0,t.jsx)("div",{className:"why-grid",children:[{title:"Expert Team",desc:"Experienced professionals with diverse skills across design, development, and marketing."},{title:"Custom Solutions",desc:"We don't believe in one-size-fits-all. Every solution is tailored to your specific needs."},{title:"Results-Driven",desc:"We focus on measurable outcomes that directly contribute to your business growth."},{title:"Transparent Process",desc:"You stay informed and in control at every stage of your project."},{title:"Competitive Pricing",desc:"Premium quality services delivered at competitive and fair rates."},{title:"Ongoing Support",desc:"We provide continuous support and maintenance even after project completion."}].map((e,i)=>(0,t.jsxs)("div",{className:"why-item",children:[(0,t.jsx)("div",{className:"why-bullet",children:"✓"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"why-title",children:e.title}),(0,t.jsx)("p",{className:"why-desc",children:e.desc})]})]},i))})]}),(0,t.jsxs)("div",{className:"services-section",children:[(0,t.jsxs)("div",{className:"section-eyebrow",children:[(0,t.jsx)("span",{className:"eyebrow-line"}),(0,t.jsx)("span",{children:"Our Services"})]}),(0,t.jsx)("h2",{className:"section-heading",children:"Everything Your Business Needs"}),(0,t.jsx)("p",{className:"section-sub",children:"A comprehensive suite of digital services under one roof — so you never have to go anywhere else."}),(0,t.jsx)("div",{className:"services-grid",children:[{title:"Website Design & Development",desc:"Custom, responsive websites that convert visitors into paying customers.",icon:"🌐"},{title:"Mobile App Development",desc:"Native and cross-platform apps for iOS and Android.",icon:"📱"},{title:"Graphic Design",desc:"Branding, logos, marketing materials, and complete visual identity.",icon:"🎨"},{title:"Digital Marketing",desc:"SEO, social media marketing, PPC campaigns, and content marketing.",icon:"📊"},{title:"Business Management Software",desc:"Custom solutions to streamline accounts, inventory, HR, and CRM.",icon:"⚙️"},{title:"SEO & Analytics",desc:"Improve online visibility and track performance with data-driven insights.",icon:"🔍"}].map((e,i)=>(0,t.jsxs)("div",{className:"service-card",children:[(0,t.jsx)("div",{className:"service-icon",children:e.icon}),(0,t.jsx)("div",{className:"service-title",children:e.title}),(0,t.jsx)("p",{className:"service-desc",children:e.desc})]},i))})]})]})]})}e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Header,{}),(0,t.jsx)(s,{}),(0,t.jsx)(a,{}),(0,t.jsx)(n.FooterSection,{}),(0,t.jsx)(o,{})]})}])}]);