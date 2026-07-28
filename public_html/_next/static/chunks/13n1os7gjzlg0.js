(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20348,e=>{"use strict";var i=e.i(43476),r=e.i(71645);let n=[{code:"+1",flag:"🇺🇸",name:"US"},{code:"+44",flag:"🇬🇧",name:"UK"},{code:"+92",flag:"🇵🇰",name:"PK"},{code:"+91",flag:"🇮🇳",name:"IN"},{code:"+971",flag:"🇦🇪",name:"AE"},{code:"+61",flag:"🇦🇺",name:"AU"}],t=["Website Design","Ecommerce Solutions","Web Application","Mobile Application","Website Maintenance","Domain And Hosting","Branding","Video Animation","SEO","Shopify Store"];e.s(["default",0,function(){let[e,s]=(0,r.useState)({name:"",email:"",phone:"",service:"",message:""}),[a,o]=(0,r.useState)("+92"),[l,d]=(0,r.useState)("🇵🇰"),[c,h]=(0,r.useState)(!1),[p,x]=(0,r.useState)(!1),[g,f]=(0,r.useState)(""),[m,u]=(0,r.useState)(""),[b,y]=(0,r.useState)(null),[v,j]=(0,r.useState)(!0),[w,k]=(0,r.useState)(!1);(0,r.useEffect)(()=>{N();let e=()=>k(window.scrollY>10);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let N=async()=>{try{let e=await fetch("https://360artdesign-backend.vercel.app/api/settings/logo"),i=await e.json();i.success&&y(i.data)}catch(e){console.error("Error fetching logo:",e)}finally{j(!1)}},S=async i=>{if(i.preventDefault(),!e.name||!e.email||!e.phone||!e.service)return void f("Please fill in all required fields");if(!c)return void f("Please agree to the terms and conditions");x(!0),f(""),u("");let r=`${a} ${e.phone}`;try{let i=await fetch("https://360artdesign-backend.vercel.app/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:e.name,email:e.email,phoneNumber:r,service:e.service,message:e.message||""})}),n=await i.json();i.ok?(u("Thank you! We will contact you soon."),s({name:"",email:"",phone:"",service:"",message:""}),o("+92"),d("🇵🇰"),h(!1),setTimeout(()=>u(""),5e3)):f(n.message||"Something went wrong. Please try again.")}catch(e){console.error("Form submission error:",e),f("Network error. Please check your connection and try again.")}finally{x(!1)}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Nunito', sans-serif;
          background: #fff;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .hire-page {
          min-height: 100vh;
          background: #fff;
          display: flex;
          flex-direction: column;
        }

        /* Top Bar - Dark Semi-transparent with Blur */
        .hire-topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: ${w?"rgba(18,4,4,0.97)":"rgba(18,4,4,0.85)"};
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 40px;
          flex-wrap: wrap;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .hire-logo-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 1px;
          line-height: 1;
        }

        .hire-logo-sub {
          font-size: 10px;
          color: #e22222;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .hire-close-btn {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 400;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .hire-close-btn:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.4);
        }

        /* Main Body - Add top padding to account for fixed header */
        .hire-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 130px 40px 60px;
          max-width: 820px;
          margin: 0 auto;
          width: 100%;
        }

        .hire-order-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hire-order-label span {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #111;
          text-transform: uppercase;
        }

        .zigzag {
          display: flex;
          align-items: center;
        }

        .hire-heading {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 900;
          color: #111;
          text-align: center;
          margin-bottom: 14px;
          line-height: 1.2;
        }

        .hire-sub {
          font-size: 15px;
          color: #555;
          text-align: center;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 600px;
        }

        .hire-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .hire-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .hire-field {
          position: relative;
          border: 1.5px solid #ddd;
          border-radius: 6px;
          display: flex;
          align-items: center;
          background: #fff;
          transition: border-color 0.2s;
          width: 100%;
        }
        .hire-field:focus-within {
          border-color: #e22222;
        }

        .hire-field input,
        .hire-field textarea,
        .hire-field select {
          flex: 1;
          border: none;
          outline: none;
          padding: 16px 18px;
          font-size: 14px;
          font-family: 'Nunito', sans-serif;
          color: #333;
          background: transparent;
          appearance: none;
          -webkit-appearance: none;
          width: 100%;
        }

        .hire-field textarea {
          resize: none;
          min-height: 130px;
          padding-top: 18px;
        }

        .hire-field-icon {
          padding-right: 16px;
          color: #e22222;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Phone field */
        .hire-phone-field {
          display: flex;
          align-items: center;
          border: 1.5px solid #ddd;
          border-radius: 6px;
          background: #fff;
          transition: border-color 0.2s;
          overflow: hidden;
        }
        .hire-phone-field:focus-within {
          border-color: #e22222;
        }

        .hire-country-select {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0 12px;
          border-right: 1.5px solid #ddd;
          height: 100%;
          min-height: 54px;
          position: relative;
          cursor: pointer;
          flex-shrink: 0;
        }

        .hire-country-select select {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }

        .hire-country-display {
          display: flex;
          align-items: center;
          gap: 5px;
          pointer-events: none;
        }

        .hire-country-display span:first-child {
          font-size: 18px;
        }

        .hire-country-display span:last-child {
          font-size: 13px;
          font-weight: 700;
          color: #333;
          font-family: 'Nunito', sans-serif;
        }

        .hire-country-display svg {
          margin-left: 2px;
        }

        .hire-phone-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 16px 18px;
          font-size: 14px;
          font-family: 'Nunito', sans-serif;
          color: #333;
          background: transparent;
          min-width: 0;
        }

        .hire-phone-icon {
          padding-right: 16px;
          color: #e22222;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .hire-checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 4px;
        }

        .hire-checkbox-row input[type="checkbox"] {
          margin-top: 3px;
          width: 18px;
          height: 18px;
          cursor: pointer;
          flex-shrink: 0;
          accent-color: #e22222;
        }

        .hire-checkbox-row label {
          font-size: 12px;
          color: #555;
          line-height: 1.5;
        }

        .hire-checkbox-row label a {
          color: #e22222;
          text-decoration: none;
          font-weight: 600;
        }

        .hire-submit-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }

        .hire-submit-btn {
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
        .hire-submit-btn:hover:not(:disabled) {
          background: #b71c1c;
        }
        .hire-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .error-message {
          background: #fee2e2;
          color: #dc2626;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          text-align: center;
          width: 100%;
        }

        .success-message {
          background: #dcfce7;
          color: #16a34a;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          text-align: center;
          width: 100%;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid #fff;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-right: 8px;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .hire-topbar {
            padding: 14px 20px;
          }
          .hire-body {
            padding: 110px 20px 40px;
          }
          .hire-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .hire-field input,
          .hire-field textarea,
          .hire-phone-input {
            padding: 14px 16px;
          }
          .hire-country-select {
            padding: 0 10px;
            min-height: 48px;
          }
          .hire-submit-btn {
            width: 100%;
            padding: 14px 20px;
            font-size: 15px;
          }
          .hire-checkbox-row label {
            font-size: 11px;
          }
          .hire-sub {
            font-size: 14px;
            margin-bottom: 30px;
          }
          .hire-order-label span {
            font-size: 11px;
            letter-spacing: 2px;
          }
        }

        @media (max-width: 480px) {
          .hire-logo-text {
            font-size: 18px;
          }
          .hire-logo-sub {
            font-size: 8px;
            letter-spacing: 2px;
          }
          .hire-close-btn {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          .hire-heading {
            font-size: 24px;
          }
          .hire-sub {
            font-size: 13px;
          }
          .hire-field-icon,
          .hire-phone-icon {
            padding-right: 12px;
          }
        }
      `}),(0,i.jsxs)("div",{className:"hire-page",children:[(0,i.jsxs)("div",{className:"hire-topbar",children:[(0,i.jsx)("div",{children:v?(0,i.jsx)("div",{style:{width:50,height:50,background:"rgba(255,255,255,0.1)",borderRadius:8,animation:"pulse 1.5s ease-in-out infinite"}}):b?.type==="image"&&b.imageUrl?(0,i.jsx)("img",{src:b.imageUrl,alt:b.alt||"360 ArtDesign Logo",style:{height:105,width:"auto",maxWidth:180,objectFit:"contain",display:"block"}}):(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"hire-logo-text",children:"360 ARTDESIGN"}),(0,i.jsx)("div",{className:"hire-logo-sub",children:"Digital Agency"})]})}),(0,i.jsx)("button",{className:"hire-close-btn",onClick:()=>window.history.back(),children:"✕"})]}),(0,i.jsxs)("div",{className:"hire-body",children:[(0,i.jsxs)("div",{className:"hire-order-label",children:[(0,i.jsx)("svg",{className:"zigzag",width:"38",height:"14",viewBox:"0 0 38 14",fill:"none",children:(0,i.jsx)("polyline",{points:"0,10 6,2 12,10 18,2 24,10 30,2 38,10",stroke:"#e22222",strokeWidth:"2.2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,i.jsx)("span",{children:"ORDER NOW"}),(0,i.jsx)("svg",{className:"zigzag",width:"38",height:"14",viewBox:"0 0 38 14",fill:"none",children:(0,i.jsx)("polyline",{points:"0,10 6,2 12,10 18,2 24,10 30,2 38,10",stroke:"#e22222",strokeWidth:"2.2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,i.jsx)("h1",{className:"hire-heading",children:"We would like to hear from you"}),(0,i.jsxs)("p",{className:"hire-sub",children:["Heads up! We require that you sign up for a 360 ArtDesign services and packages.",(0,i.jsx)("br",{}),"We make all your dreams come true in a successful project."]}),(0,i.jsxs)("form",{className:"hire-form",onSubmit:S,children:[(0,i.jsxs)("div",{className:"hire-row",children:[(0,i.jsxs)("div",{className:"hire-field",children:[(0,i.jsx)("input",{type:"text",placeholder:"Your Name *",value:e.name,onChange:i=>s({...e,name:i.target.value}),required:!0}),(0,i.jsx)("span",{className:"hire-field-icon",children:(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#e22222",strokeWidth:"1.8",children:[(0,i.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,i.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]}),(0,i.jsxs)("div",{className:"hire-field",children:[(0,i.jsx)("input",{type:"email",placeholder:"Email *",value:e.email,onChange:i=>s({...e,email:i.target.value}),required:!0}),(0,i.jsx)("span",{className:"hire-field-icon",children:(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#e22222",strokeWidth:"1.8",children:[(0,i.jsx)("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),(0,i.jsx)("polyline",{points:"2,4 12,13 22,4"})]})})]})]}),(0,i.jsxs)("div",{className:"hire-phone-field",children:[(0,i.jsxs)("div",{className:"hire-country-select",children:[(0,i.jsxs)("div",{className:"hire-country-display",children:[(0,i.jsx)("span",{children:l}),(0,i.jsx)("span",{children:a}),(0,i.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#555",strokeWidth:"2",children:(0,i.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,i.jsx)("select",{value:a,onChange:e=>{let i=n.find(i=>i.code===e.target.value);i&&(o(i.code),d(i.flag))},children:n.map(e=>(0,i.jsxs)("option",{value:e.code,children:[e.flag," ",e.code," (",e.name,")"]},e.code))})]}),(0,i.jsx)("input",{className:"hire-phone-input",type:"tel",placeholder:"Your Phone *",value:e.phone,onChange:i=>s({...e,phone:i.target.value}),required:!0}),(0,i.jsx)("span",{className:"hire-phone-icon",children:(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#e22222",strokeWidth:"1.8",children:(0,i.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 11.7 19.79 19.79 0 0 1 1.14 3a2 2 0 0 1 2-1.95h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})})})]}),(0,i.jsxs)("div",{className:"hire-field",children:[(0,i.jsxs)("select",{value:e.service,onChange:i=>s({...e,service:i.target.value}),required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select Service *"}),t.map(e=>(0,i.jsx)("option",{value:e,children:e},e))]}),(0,i.jsx)("span",{className:"hire-field-icon",children:(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#e22222",strokeWidth:"1.8",children:[(0,i.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,i.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,i.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})})]}),(0,i.jsxs)("div",{className:"hire-field",style:{alignItems:"flex-start"},children:[(0,i.jsx)("textarea",{placeholder:"Message",value:e.message,onChange:i=>s({...e,message:i.target.value})}),(0,i.jsx)("span",{className:"hire-field-icon",style:{paddingTop:18},children:(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#e22222",strokeWidth:"1.8",children:(0,i.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})})]}),(0,i.jsxs)("div",{className:"hire-checkbox-row",children:[(0,i.jsx)("input",{type:"checkbox",id:"hire-consent",checked:c,onChange:e=>h(e.target.checked)}),(0,i.jsxs)("label",{htmlFor:"hire-consent",children:["Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL"," ",(0,i.jsx)("a",{href:"/privacy-policy",children:"(PRIVACY POLICY"})," &"," ",(0,i.jsx)("a",{href:"/terms",children:"TERM & CONDITIONS)"})," ","- Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to stop SMS & EMAIL"]})]}),(0,i.jsxs)("div",{className:"hire-submit-wrap",children:[g&&(0,i.jsx)("div",{className:"error-message",children:g}),m&&(0,i.jsx)("div",{className:"success-message",children:m}),(0,i.jsx)("button",{type:"submit",className:"hire-submit-btn",disabled:p,children:p?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"spinner"}),"Submitting..."]}):"Submit Now"})]})]})]})]})]})}])}]);