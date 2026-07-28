(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var r in i)Object.defineProperty(n,r,{enumerable:!0,get:i[r]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,i=e.protocol||"",r=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==c?(c="//"+(c||""),r&&"/"!==r[0]&&(r="/"+r)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),r=r.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${c}${r}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return r}});let i=e.r(71645);function r(e,t){let n=(0,i.useRef)(null),r=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=n.current;e&&(n.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(n.current=o(e,i)),t&&(r.current=o(t,i))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let i=e.r(18967),r=e.r(52817);function o(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,r.hasBasePath)(n.pathname)}catch(e){return!1}}},84508,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return x},useLinkStatus:function(){return y}};for(var r in i)Object.defineProperty(n,r,{enumerable:!0,get:i[r]});let o=e.r(90809),a=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),p=e.r(5550);e.r(33525);let m=e.r(88540),f=e.r(91949),h=e.r(73668),g=e.r(9396);function x(t){var n,i;let r,o,x,[y,v]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),j=(0,s.useRef)(null),{href:w,as:C,children:k,prefetch:T=null,passHref:P,replace:S,shallow:N,scroll:z,onClick:A,onMouseEnter:L,onTouchStart:R,legacyBehavior:_=!1,onNavigate:I,transitionTypes:M,ref:O,unstable_dynamicOnHover:F,...E}=t;r=k,_&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let B=s.default.useContext(c.AppRouterContext),U=!1!==T,D=!1!==T?null===(i=T)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,W="string"==typeof(n=C||w)?n:(0,l.formatUrl)(n);if(_){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(r)}let K=_?o&&"object"==typeof o&&o.ref:O,Y=s.default.useCallback(e=>(null!==B&&(j.current=(0,f.mountLinkInstance)(e,W,B,D,U,v)),()=>{j.current&&((0,f.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,f.unmountPrefetchableInstance)(e)}),[U,W,B,D,v]),$={ref:(0,d.useMergedRef)(Y,K),onClick(t){_||"function"!=typeof A||A(t),_&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!B||t.defaultPrevented||function(t,n,i,r,o,a,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(n)){r&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(n,r?"replace":"push",!1===o?m.ScrollBehavior.NoScroll:m.ScrollBehavior.Default,i.current,l)})}}(t,W,j,S,z,I,M)},onMouseEnter(e){_||"function"!=typeof L||L(e),_&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),B&&U&&(0,f.onNavigationIntent)(e.currentTarget,!0===F)},onTouchStart:function(e){_||"function"!=typeof R||R(e),_&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),B&&U&&(0,f.onNavigationIntent)(e.currentTarget,!0===F)}};return(0,u.isAbsoluteUrl)(W)?$.href=W:_&&!P&&("a"!==o.type||"href"in o.props)||($.href=(0,p.addBasePath)(W)),x=_?s.default.cloneElement(o,$):(0,a.jsx)("a",{...E,...$,children:r}),(0,a.jsx)(b.Provider,{value:y,children:x})}e.r(84508);let b=(0,s.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18566,(e,t,n)=>{t.exports=e.r(76562)},43127,e=>{"use strict";var t=e.i(43476),n=e.i(71645),i=e.i(11152),r=e.i(64069);function o(){let[e,r]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let e=()=>r(window.scrollY>500);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e)?(0,t.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{position:"fixed",bottom:30,right:30,width:50,height:50,borderRadius:"50%",background:"#e22222",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(226,34,34,0.4)",zIndex:1e3,transition:"all 0.3s ease"},onMouseEnter:e=>e.currentTarget.style.transform="translateY(-5px)",onMouseLeave:e=>e.currentTarget.style.transform="translateY(0)",children:(0,t.jsx)(i.FaArrowUp,{})}):null}function a(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @keyframes waveMove1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveMove2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes waveMove3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .terms-hero-btn-primary:hover { background: #b71c1c !important; }
        .terms-hero-btn-outline:hover { background: rgba(255,255,255,0.15) !important; }
        .terms-hero-container { padding: 30px 40px 140px !important; }
        @media (max-width: 768px) {
          .terms-hero-section { padding-top: 0 !important; }
          .terms-hero-container { padding: 10px 20px 100px !important; text-align: center !important; }
          .terms-hero-container h1 { font-size: 32px !important; }
          .terms-hero-container p { font-size: 15px !important; padding: 0 15px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; max-width: 250px !important; justify-content: center !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .terms-hero-container { padding: 20px 30px 100px !important; text-align: center !important; }
          .terms-hero-container h1 { font-size: 42px !important; }
        }
      `}),(0,t.jsxs)("section",{className:"terms-hero-section",style:{paddingTop:70,minHeight:"60vh",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",fontFamily:"'Nunito', sans-serif",background:"#8b0000"},children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')",backgroundSize:"cover",backgroundPosition:"center right",opacity:.25,zIndex:0}}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(100deg, #8b0000 0%, #aa0000 25%, #c00000 45%, rgba(100,0,0,0.75) 65%, rgba(30,10,10,0.4) 100%)",zIndex:1}}),(0,t.jsxs)("div",{className:"terms-hero-container",style:{maxWidth:1200,margin:"0 auto",width:"100%",textAlign:"center",position:"relative",zIndex:10},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[(0,t.jsx)("span",{style:{width:50,height:2,background:"rgba(255,255,255,0.6)"}}),(0,t.jsx)("span",{style:{fontSize:13,fontWeight:700,letterSpacing:"4px",color:"rgba(255,255,255,0.85)",textTransform:"uppercase"},children:"Legal"}),(0,t.jsx)("span",{style:{width:50,height:2,background:"rgba(255,255,255,0.6)"}})]}),(0,t.jsxs)("h1",{style:{fontSize:"clamp(36px, 5vw, 62px)",fontWeight:900,color:"#fff",lineHeight:1.12,marginBottom:22,letterSpacing:-.5},children:["Terms & ",(0,t.jsx)("span",{style:{color:"rgba(255,255,255,0.75)"},children:"Conditions"})]}),(0,t.jsx)("p",{style:{fontSize:17,color:"rgba(255,255,255,0.85)",lineHeight:1.75,maxWidth:620,margin:"0 auto 36px"},children:"Last Updated: January 15, 2026"}),(0,t.jsx)("div",{className:"hero-buttons",style:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}})]}),(0,t.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:280,lineHeight:0,zIndex:2,overflow:"hidden",pointerEvents:"none"},children:[(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove2 15s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,70 C360,110 720,30 1080,70 C1440,110 1800,30 2160,70 C2520,110 2880,30 3240,70 L3240,120 L0,120 Z",fill:"rgba(255,255,255,0.12)"})})}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove1 12s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,85 C270,45 540,115 810,80 C1080,45 1350,105 1620,75 C1890,45 2160,100 2430,80 C2700,45 2880,90 2880,85 L2880,120 L0,120 Z",fill:"rgba(255,255,255,0.30)"})})}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"200%",height:"100%",animation:"waveMove3 10s linear infinite"},children:(0,t.jsx)("svg",{viewBox:"0 0 2880 120",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"100%"},children:(0,t.jsx)("path",{d:"M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,88 C1680,60 1920,112 2160,90 C2400,60 2640,112 2880,95 L2880,120 L0,120 Z",fill:"#f3f4f8"})})})]})]})]})}let s=[{icon:(0,t.jsx)(i.FaFileContract,{}),number:"01",title:"Acceptance of Terms",intro:"By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website or our services.",items:[]},{icon:(0,t.jsx)(i.FaCogs,{}),number:"02",title:"Services Description",intro:"360 Art Design provides digital services including but not limited to:",items:[{label:null,desc:"Website design and development"},{label:null,desc:"Mobile application development"},{label:null,desc:"Graphic design and branding"},{label:null,desc:"Digital marketing and SEO services"},{label:null,desc:"Social media management"},{label:null,desc:"Business management software solutions"}]},{icon:(0,t.jsx)(i.FaUserCheck,{}),number:"03",title:"User Responsibilities",intro:"As a user of our services, you agree to:",items:[{label:null,desc:"Provide accurate and complete information when requested"},{label:null,desc:"Maintain the confidentiality of your account credentials"},{label:null,desc:"Notify us immediately of any unauthorized use of your account"},{label:null,desc:"Comply with all applicable laws and regulations"},{label:null,desc:"Not use our services for any illegal or unauthorized purpose"},{label:null,desc:"Not attempt to gain unauthorized access to our systems"}]},{icon:(0,t.jsx)(i.FaTrademark,{}),number:"04",title:"Intellectual Property",intro:"All content, features, and functionality of this website — including text, graphics, logos, images, software, and code — are the exclusive property of 360 Art Design and are protected by international copyright, trademark, and other intellectual property laws. Any unauthorized use, reproduction, or distribution of our intellectual property is strictly prohibited and may result in legal action.",items:[]},{icon:(0,t.jsx)(i.FaCreditCard,{}),number:"05",title:"Payment Terms",intro:"For paid services, the following terms apply:",items:[{label:"Pricing",desc:"All prices are quoted in the currency specified and are subject to change without prior notice."},{label:"Payment",desc:"Payment must be made in full before commencement of services unless otherwise agreed in writing."},{label:"Refunds",desc:"Refunds are handled on a case-by-case basis and are subject to our refund policy."},{label:"Late Payments",desc:"Late payments may incur interest charges or service suspension."}]},{icon:(0,t.jsx)(i.FaBoxOpen,{}),number:"06",title:"Project Deliverables",intro:"Regarding project deliverables:",items:[{label:null,desc:"Deliverables will be provided as specified in the project agreement"},{label:null,desc:"Client must review and approve deliverables within the specified timeframe"},{label:null,desc:"Revisions are limited to those specified in the project scope"},{label:null,desc:"Final files and source code will be delivered upon full payment"}]},{icon:(0,t.jsx)(i.FaHandshake,{}),number:"07",title:"Client Obligations",intro:"Clients agree to:",items:[{label:null,desc:"Provide necessary materials and information in a timely manner"},{label:null,desc:"Respond to communications and requests within reasonable timeframes"},{label:null,desc:"Obtain all necessary rights and permissions for materials provided"},{label:null,desc:"Review and approve work according to agreed timelines"},{label:null,desc:"Pay invoices according to agreed payment terms"}]},{icon:(0,t.jsx)(i.FaExclamationTriangle,{}),number:"08",title:"Limitation of Liability",intro:"To the maximum extent permitted by law, 360 Art Design shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from:",items:[{label:null,desc:"Your access to or use of or inability to access or use our services"},{label:null,desc:"Any conduct or content of any third party on our services"},{label:null,desc:"Any content obtained from our services"},{label:null,desc:"Unauthorized access to or alteration of your transmissions or data"}]},{icon:(0,t.jsx)(i.FaShieldAlt,{}),number:"09",title:"Indemnification",intro:"You agree to indemnify, defend, and hold harmless 360 Art Design and its affiliates, officers, directors, employees, agents, and licensors from and against any claims, damages, obligations, losses, liabilities, costs, or debt resulting from:",items:[{label:null,desc:"Your use and access of our services"},{label:null,desc:"Your violation of any term of these Terms and Conditions"},{label:null,desc:"Your violation of any third-party right, including copyright, property, or privacy right"},{label:null,desc:"Any claim that your use of our services caused damage to a third party"}]},{icon:(0,t.jsx)(i.FaBan,{}),number:"10",title:"Termination",intro:"We reserve the right to terminate or suspend your access to our services at any time, without prior notice or liability, for any reason whatsoever, including but not limited to a breach of these Terms and Conditions.",items:[]},{icon:(0,t.jsx)(i.FaGavel,{}),number:"11",title:"Governing Law",intro:"These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Pakistan.",items:[]},{icon:(0,t.jsx)(i.FaEdit,{}),number:"12",title:"Modifications",intro:"We reserve the right to modify these Terms and Conditions at any time. All modifications are effective immediately when posted. Your continued use of our services following the posting of modified Terms and Conditions constitutes your acceptance of the modifications.",items:[]}];function l(){return(0,t.jsxs)("section",{style:{background:"#f3f4f8",padding:"72px 24px 96px",fontFamily:"'Nunito', sans-serif"},children:[(0,t.jsx)("style",{children:`
        .tc-card {
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
        .tc-card:hover {
          box-shadow: 0 8px 32px rgba(226,34,34,0.10);
          transform: translateY(-2px);
        }
        .tc-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(180deg, #e22222, #8b0000);
          border-radius: 4px 0 0 4px;
        }
        .tc-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .tc-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #e22222, #8b0000);
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-size: 18px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(226,34,34,0.25);
        }
        .tc-section-num {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #e22222;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }
        .tc-section-title {
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 800;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }
        .tc-intro {
          font-size: 15.5px;
          color: #4b5563;
          line-height: 1.8;
          margin: 0 0 20px 0;
        }
        .tc-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
          margin-top: 4px;
        }
        .tc-item {
          background: #fafafa;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          padding: 14px 18px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .tc-item-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #e22222;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .tc-item-text { flex: 1; }
        .tc-item-label {
          font-size: 13px;
          font-weight: 800;
          color: #e22222;
          display: block;
          margin-bottom: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tc-item-desc {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.65;
          margin: 0;
        }
        .tc-contact-card {
          background: linear-gradient(135deg, #8b0000 0%, #c00000 100%);
          border-radius: 16px;
          padding: 40px;
          color: #fff;
          margin-top: 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(139,0,0,0.3);
        }
        .tc-contact-card::after {
          content: "";
          position: absolute;
          top: -60px; right: -60px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }
        .tc-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }
        .tc-contact-item {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          padding: 16px 20px;
        }
        .tc-contact-item-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          display: block;
          margin-bottom: 6px;
        }
        .tc-contact-item-value {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }
        .tc-footer-note {
          text-align: center;
          margin-top: 40px;
          font-size: 13px;
          color: #9ca3af;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }
        @media (max-width: 768px) {
          .tc-card { padding: 24px 20px; }
          .tc-items-grid { grid-template-columns: 1fr; }
          .tc-contact-card { padding: 28px 20px; }
          .tc-contact-grid { grid-template-columns: 1fr; }
        }
      `}),(0,t.jsxs)("div",{style:{maxWidth:900,margin:"0 auto"},children:[(0,t.jsxs)("p",{style:{fontSize:16,color:"#374151",lineHeight:1.85,textAlign:"center",maxWidth:680,margin:"0 auto 48px"},children:["Welcome to ",(0,t.jsx)("strong",{style:{color:"#e22222"},children:"360 Art Design"}),". By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services."]}),s.map((e,n)=>(0,t.jsxs)("div",{className:"tc-card",children:[(0,t.jsxs)("div",{className:"tc-card-header",children:[(0,t.jsx)("div",{className:"tc-icon-wrap",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"tc-section-num",children:e.number}),(0,t.jsx)("h2",{className:"tc-section-title",children:e.title})]})]}),e.intro&&(0,t.jsx)("p",{className:"tc-intro",children:e.intro}),e.items.length>0&&(0,t.jsx)("div",{className:"tc-items-grid",children:e.items.map((e,n)=>(0,t.jsxs)("div",{className:"tc-item",children:[(0,t.jsx)("div",{className:"tc-item-dot"}),(0,t.jsxs)("div",{className:"tc-item-text",children:[e.label&&(0,t.jsx)("span",{className:"tc-item-label",children:e.label}),(0,t.jsx)("p",{className:"tc-item-desc",children:e.desc})]})]},n))})]},n)),(0,t.jsxs)("div",{className:"tc-contact-card",children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:8,position:"relative",zIndex:1},children:[(0,t.jsx)("div",{style:{width:44,height:44,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18},children:(0,t.jsx)(i.FaEnvelope,{})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:{fontSize:11,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.65)",display:"block",marginBottom:2},children:"13"}),(0,t.jsx)("h2",{style:{fontSize:"clamp(18px, 2.5vw, 22px)",fontWeight:800,color:"#fff",margin:0},children:"Contact Information"})]})]}),(0,t.jsx)("p",{style:{fontSize:15,color:"rgba(255,255,255,0.85)",lineHeight:1.75,maxWidth:560,margin:"0",position:"relative",zIndex:1},children:"If you have any questions about these Terms and Conditions, please reach out to us through any of the following channels."}),(0,t.jsxs)("div",{className:"tc-contact-grid",style:{position:"relative",zIndex:1},children:[(0,t.jsxs)("div",{className:"tc-contact-item",children:[(0,t.jsx)("span",{className:"tc-contact-item-label",children:"Email"}),(0,t.jsx)("span",{className:"tc-contact-item-value",children:"info@bisonstechs.com"})]}),(0,t.jsxs)("div",{className:"tc-contact-item",children:[(0,t.jsx)("span",{className:"tc-contact-item-label",children:"Phone"}),(0,t.jsx)("span",{className:"tc-contact-item-value",children:"+92 300 1234567"})]}),(0,t.jsxs)("div",{className:"tc-contact-item",children:[(0,t.jsx)("span",{className:"tc-contact-item-label",children:"Address"}),(0,t.jsx)("span",{className:"tc-contact-item-value",children:"Karachi, Pakistan"})]})]})]}),(0,t.jsx)("p",{className:"tc-footer-note",children:"These Terms and Conditions are effective as of January 15, 2026."})]})]})}e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Header,{}),(0,t.jsx)(a,{}),(0,t.jsx)(l,{}),(0,t.jsx)(r.FooterSection,{}),(0,t.jsx)(o,{})]})}])}]);