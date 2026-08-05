(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,a=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||i.test(a))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${a}${c}${o}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let a=e.r(71645);function o(e,t){let r=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=n(e,a)),t&&(o.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(18967),o=e.r(52817);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return g},useLinkStatus:function(){return v}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(90809),i=e.r(43476),s=n._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),p=e.r(18967),h=e.r(5550);e.r(33525);let f=e.r(88540),u=e.r(91949),m=e.r(73668),x=e.r(9396);function g(t){var r,a;let o,n,g,[v,y]=(0,s.useOptimistic)(u.IDLE_LINK_STATUS),j=(0,s.useRef)(null),{href:w,as:k,children:N,prefetch:M=null,passHref:S,replace:C,shallow:z,scroll:T,onClick:A,onMouseEnter:P,onTouchStart:L,legacyBehavior:O=!1,onNavigate:_,transitionTypes:R,ref:q,unstable_dynamicOnHover:I,...E}=t;o=N,O&&("string"==typeof o||"number"==typeof o)&&(o=(0,i.jsx)("a",{children:o}));let U=s.default.useContext(c.AppRouterContext),B=!1!==M,F=!1!==M?null===(a=M)||"auto"===a?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,W="string"==typeof(r=k||w)?r:(0,l.formatUrl)(r);if(O){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let D=O?n&&"object"==typeof n&&n.ref:q,H=s.default.useCallback(e=>(null!==U&&(j.current=(0,u.mountLinkInstance)(e,W,U,F,B,y)),()=>{j.current&&((0,u.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,u.unmountPrefetchableInstance)(e)}),[B,W,U,F,y]),K={ref:(0,d.useMergedRef)(H,D),onClick(t){O||"function"!=typeof A||A(t),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!U||t.defaultPrevented||function(t,r,a,o,n,i,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);s.default.startTransition(()=>{p(r,o?"replace":"push",!1===n?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,a.current,l)})}}(t,W,j,C,T,_,R)},onMouseEnter(e){O||"function"!=typeof P||P(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&B&&(0,u.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){O||"function"!=typeof L||L(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&B&&(0,u.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,p.isAbsoluteUrl)(W)?K.href=W:O&&!S&&("a"!==n.type||"href"in n.props)||(K.href=(0,h.addBasePath)(W)),g=O?s.default.cloneElement(n,K):(0,i.jsx)("a",{...E,...K,children:o}),(0,i.jsx)(b.Provider,{value:v,children:g})}e.r(84508);let b=(0,s.createContext)(u.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18566,(e,t,r)=>{t.exports=e.r(76562)},69139,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(11152),o=e.i(64069);function n(){let[e,o]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{let e=()=>o(window.scrollY>500);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e)?(0,t.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{position:"fixed",bottom:30,right:30,width:50,height:50,borderRadius:"50%",background:"#e22222",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(226,34,34,0.4)",zIndex:1e3,transition:"all 0.3s ease"},onMouseEnter:e=>e.currentTarget.style.transform="translateY(-5px)",onMouseLeave:e=>e.currentTarget.style.transform="translateY(0)",children:(0,t.jsx)(a.FaArrowUp,{})}):null}function i(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .contact-hero-btn-primary:hover { background: #b71c1c !important; }
        .contact-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .contact-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .contact-hero-section { padding-top: 0 !important; }
          .contact-hero-container { padding: 10px 20px 100px !important; text-align: center !important; }
          .contact-hero-container h1 { font-size: 32px !important; }
          .contact-hero-container p { font-size: 15px !important; padding: 0 15px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-hero-container { padding: 20px 30px 100px !important; text-align: center !important; }
          .contact-hero-container h1 { font-size: 42px !important; }
        }
      `}),(0,t.jsxs)("section",{className:"contact-hero-section",style:{paddingTop:70,minHeight:"60vh",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",fontFamily:"'Nunito', sans-serif",background:"#8b0000"},children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')",backgroundSize:"cover",backgroundPosition:"center right",opacity:.25,zIndex:0}}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)",zIndex:1}}),(0,t.jsxs)("div",{className:"contact-hero-container",style:{maxWidth:1200,margin:"0 auto",width:"100%",textAlign:"center",position:"relative",zIndex:10},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[(0,t.jsx)("span",{style:{width:50,height:2,background:"rgba(255,255,255,0.6)"}}),(0,t.jsx)("span",{style:{fontSize:13,fontWeight:700,letterSpacing:"4px",color:"rgba(255,255,255,0.85)",textTransform:"uppercase"},children:"Contact Us"}),(0,t.jsx)("span",{style:{width:50,height:2,background:"rgba(255,255,255,0.6)"}})]}),(0,t.jsxs)("h1",{style:{fontSize:"clamp(36px, 5vw, 62px)",fontWeight:900,color:"#fff",lineHeight:1.12,marginBottom:22,letterSpacing:-.5},children:["Get In ",(0,t.jsx)("span",{style:{color:"rgba(255,255,255,0.75)"},children:"Touch"})]}),(0,t.jsx)("p",{style:{fontSize:17,color:"rgba(255,255,255,0.85)",lineHeight:1.75,maxWidth:620,margin:"0 auto 36px"},children:"Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}),(0,t.jsx)("div",{className:"hero-buttons",style:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}})]}),(0,t.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:280,lineHeight:0,zIndex:2,overflow:"hidden",pointerEvents:"none"},children:[(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove2 15s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z",fill:"rgba(255,255,255,0.12)"})})}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove1 12s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z",fill:"rgba(255,255,255,0.30)"})})}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove3 10s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z",fill:"#f3f4f8"})})})]})]})]})}function s(){let[e,a]=(0,r.useState)({name:"",email:"",phone:"",subject:"",message:""}),[o,n]=(0,r.useState)(!1),[i,s]=(0,r.useState)(""),[l,c]=(0,r.useState)(""),d=async t=>{if(t.preventDefault(),!e.name||!e.email||!e.message)return void s("Please fill in all required fields.");n(!0),s(""),c("");try{let t=await fetch("https://360artdesign-backend.vercel.app/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:e.name,email:e.email,phoneNumber:e.phone,message:e.message})}),r=await t.json();t.ok?(c("Thank you! We will contact you soon."),a({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>c(""),5e3)):s(r.message||"Something went wrong. Please try again.")}catch{s("Network error. Please check your connection and try again.")}finally{n(!1)}},p=[{icon:(0,t.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.33 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})}),label:"Phone",lines:["+92 300 1234567","+1 (786)-761-8327"]},{icon:(0,t.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,t.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),label:"Email",lines:["info@bisonstechs.com","info@360artdesign.com"]},{icon:(0,t.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,t.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),label:"Address",lines:["Wells Fargo Plaza 333 SE 2nd Ave, Suite 2000 Miami, FL 33131"]},{icon:(0,t.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),label:"Working Hours",lines:["Mon – Fri: 9:00 AM – 6:00 PM","Sat: 10:00 AM – 4:00 PM"]}];return(0,t.jsxs)("section",{style:{background:"#f3f4f8",padding:"64px 24px 80px",fontFamily:"'Nunito', sans-serif"},children:[(0,t.jsx)("style",{children:`
        .contact-wrap { max-width: 1160px; margin: 0 auto; }

        /* QUICK STATS BAR */
        .quick-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 56px;
        }
        .quick-bar-item {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 20px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .quick-bar-item:hover { border-color: #e22222; box-shadow: 0 6px 20px rgba(226,34,34,0.08); }
        .qb-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          background: linear-gradient(135deg, #e22222, #8b0000);
          display: flex; align-items: center; justify-content: center;
        }
        .qb-label { font-size: 11px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px; }
        .qb-value { font-size: 13px; color: #111827; font-weight: 700; line-height: 1.35; }

        /* MAIN GRID */
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.55fr;
          gap: 32px;
          margin-bottom: 48px;
          align-items: start;
        }

        /* INFO COLUMN */
        .info-col-header { margin-bottom: 28px; }
        .section-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .eyebrow-line { width: 36px; height: 2px; background: #e22222; border-radius: 2px; flex-shrink: 0; }
        .eyebrow-text { font-size: 12px; font-weight: 700; color: #e22222; letter-spacing: 3px; text-transform: uppercase; }
        .info-col-header h2 { font-size: clamp(22px, 2.5vw, 28px); font-weight: 900; color: #111827; margin: 0 0 10px; }
        .info-col-header p { font-size: 14px; color: #6b7280; line-height: 1.7; margin: 0; }

        .info-cards { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
        .info-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e5e7eb;
          padding: 18px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .info-card:hover { border-color: #e22222; transform: translateX(4px); }
        .info-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          background: linear-gradient(135deg, #e22222, #8b0000);
          display: flex; align-items: center; justify-content: center;
        }
        .info-label { font-size: 11px; font-weight: 700; color: #e22222; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .info-line { font-size: 14px; color: #374151; font-weight: 600; line-height: 1.55; }

        .socials-row { display: flex; gap: 10px; align-items: center; }
        .social-btn {
          width: 40px; height: 40px; border-radius: 10px;
          background: #fff0f0; border: 0.5px solid #f5c6c6;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s ease;
        }
        .social-btn:hover { background: #e22222; border-color: #e22222; }
        .social-btn:hover svg { stroke: #fff !important; }

        /* FORM CARD */
        .form-card {
          background: #fff;
          border-radius: 16px;
          border: 0.5px solid #e5e7eb;
          padding: 40px 36px 44px;
        }
        .form-card-header { margin-bottom: 28px; }
        .form-card-header h2 { font-size: clamp(20px, 2.5vw, 26px); font-weight: 900; color: #111827; margin: 0 0 6px; }
        .form-card-header p { font-size: 14px; color: #6b7280; margin: 0; line-height: 1.6; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { margin-bottom: 18px; }
        .form-label { display: block; margin-bottom: 7px; font-weight: 700; color: #374151; font-size: 13px; }
        .req { color: #e22222; margin-left: 2px; }
        .form-input {
          width: 100%; padding: 11px 14px;
          border: 1px solid #d1d5db; border-radius: 8px;
          font-size: 14px; font-family: "'Nunito', sans-serif";
          box-sizing: border-box; transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none; color: #111827; background: #fafafa;
        }
        .form-input:focus { border-color: #e22222; box-shadow: 0 0 0 3px rgba(226,34,34,0.1); background: #fff; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-alert {
          padding: 12px 16px; border-radius: 8px; font-size: 13px;
          font-weight: 600; margin-bottom: 20px; text-align: center;
        }
        .form-alert-error { background: #fee2e2; color: #dc2626; border: 1px solid #fca5a5; }
        .form-alert-success { background: #dcfce7; color: #16a34a; border: 1px solid #86efac; }
        .submit-btn {
          width: 100%; background: #e22222; color: #fff;
          border: none; padding: 14px;
          font-weight: 800; font-size: 15px; border-radius: 10px;
          cursor: pointer; font-family: "'Nunito', sans-serif";
          transition: background 0.2s ease, transform 0.2s ease;
          letter-spacing: 0.3px;
        }
        .submit-btn:hover:not(:disabled) { background: #b71c1c; transform: translateY(-1px); }
        .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        /* MAP */
        .map-card {
          background: #fff;
          border-radius: 16px;
          border: 0.5px solid #e5e7eb;
          overflow: hidden;
        }
        .map-header {
          padding: 20px 24px;
          border-bottom: 1px solid #f3f4f6;
          display: flex; align-items: center; gap: 10px;
        }
        .map-header-dot { width: 10px; height: 10px; border-radius: 50%; background: #e22222; }
        .map-header h3 { font-size: 16px; font-weight: 800; color: #111827; margin: 0; }

        @media (max-width: 1024px) {
          .quick-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
          .quick-bar { grid-template-columns: repeat(2, 1fr) !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .form-card { padding: 24px 20px 28px !important; }
        }
        @media (max-width: 480px) {
          .quick-bar { grid-template-columns: 1fr !important; }
        }
      `}),(0,t.jsxs)("div",{className:"contact-wrap",children:[(0,t.jsx)("div",{className:"quick-bar",children:p.map((e,r)=>(0,t.jsxs)("div",{className:"quick-bar-item",children:[(0,t.jsx)("div",{className:"qb-icon",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"qb-label",children:e.label}),e.lines.map((e,r)=>(0,t.jsx)("div",{className:"qb-value",children:e},r))]})]},r))}),(0,t.jsxs)("div",{className:"contact-main-grid",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"info-col-header",children:[(0,t.jsxs)("div",{className:"section-eyebrow",children:[(0,t.jsx)("span",{className:"eyebrow-line"}),(0,t.jsx)("span",{className:"eyebrow-text",children:"Get In Touch"})]}),(0,t.jsx)("h2",{children:"Let's Start a Conversation"}),(0,t.jsx)("p",{children:"Have questions about our services? We're here to help. Reach out to us through any of the channels below."})]}),(0,t.jsx)("div",{className:"info-cards",children:p.map((e,r)=>(0,t.jsxs)("div",{className:"info-card",children:[(0,t.jsx)("div",{className:"info-icon",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"info-label",children:e.label}),e.lines.map((e,r)=>(0,t.jsx)("div",{className:"info-line",children:e},r))]})]},r))}),(0,t.jsxs)("div",{style:{marginTop:4},children:[(0,t.jsx)("div",{style:{fontSize:13,fontWeight:700,color:"#374151",marginBottom:12,textTransform:"uppercase",letterSpacing:"1px"},children:"Follow Us"}),(0,t.jsx)("div",{className:"socials-row",children:[{label:"Facebook",path:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},{label:"Twitter",path:"M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 11.5 8a12.83 12.83 0 0 1-9.28-4.7 4.52 4.52 0 0 0 1.4 6.04 4.49 4.49 0 0 1-2.05-.56v.06a4.52 4.52 0 0 0 3.62 4.43 4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.07 9.07 0 0 1 2 19.54a12.8 12.8 0 0 0 6.92 2.02c8.3 0 12.84-6.88 12.84-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 24 4.59a8.93 8.93 0 0 1-2.6.71 4.51 4.51 0 0 0 1.98-2.49"},{label:"LinkedIn",path:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},{label:"Instagram",path:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z"}].map((e,r)=>(0,t.jsx)("div",{className:"social-btn",title:e.label,children:(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#e22222",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:e.path})})},r))})]})]}),(0,t.jsxs)("div",{className:"form-card",children:[(0,t.jsxs)("div",{className:"form-card-header",children:[(0,t.jsxs)("div",{className:"section-eyebrow",children:[(0,t.jsx)("span",{className:"eyebrow-line"}),(0,t.jsx)("span",{className:"eyebrow-text",children:"Send a Message"})]}),(0,t.jsx)("h2",{children:"We'll Respond Within 24 Hours"}),(0,t.jsx)("p",{children:"Fill out the form below and our team will get back to you as soon as possible."})]}),i&&(0,t.jsx)("div",{className:"form-alert form-alert-error",children:i}),l&&(0,t.jsx)("div",{className:"form-alert form-alert-success",children:l}),(0,t.jsxs)("form",{onSubmit:d,noValidate:!0,children:[(0,t.jsxs)("div",{className:"form-row",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{className:"form-label",children:["Full Name",(0,t.jsx)("span",{className:"req",children:"*"})]}),(0,t.jsx)("input",{type:"text",className:"form-input",placeholder:"John Doe",value:e.name,onChange:t=>a({...e,name:t.target.value}),required:!0})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{className:"form-label",children:["Email Address",(0,t.jsx)("span",{className:"req",children:"*"})]}),(0,t.jsx)("input",{type:"email",className:"form-input",placeholder:"john@example.com",value:e.email,onChange:t=>a({...e,email:t.target.value}),required:!0})]})]}),(0,t.jsxs)("div",{className:"form-row",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Phone Number"}),(0,t.jsx)("input",{type:"tel",className:"form-input",placeholder:"+92 300 0000000",value:e.phone,onChange:t=>a({...e,phone:t.target.value})})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Subject"}),(0,t.jsx)("input",{type:"text",className:"form-input",placeholder:"How can we help?",value:e.subject,onChange:t=>a({...e,subject:t.target.value})})]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{className:"form-label",children:["Message",(0,t.jsx)("span",{className:"req",children:"*"})]}),(0,t.jsx)("textarea",{className:"form-input form-textarea",placeholder:"Tell us about your project or question...",value:e.message,onChange:t=>a({...e,message:t.target.value}),required:!0})]}),(0,t.jsx)("button",{type:"submit",className:"submit-btn",disabled:o,children:o?"Sending...":"Send Message →"})]})]})]}),(0,t.jsxs)("div",{className:"map-card",children:[(0,t.jsxs)("div",{className:"map-header",children:[(0,t.jsx)("div",{className:"map-header-dot"}),(0,t.jsx)("h3",{children:"Our Location"})]}),(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890123!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzQ2LjUiTiA2N8KwMDAnMDMuOSJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s",width:"100%",height:"380",style:{border:0,display:"block"},allowFullScreen:!0,loading:"lazy"})]})]})]})}e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Header,{}),(0,t.jsx)(i,{}),(0,t.jsx)(s,{}),(0,t.jsx)(o.FooterSection,{}),(0,t.jsx)(n,{})]})}])}]);