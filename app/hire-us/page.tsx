"use client";

import { useState, useEffect } from "react";

const countries = [
  { code: "+1", flag: "🇺🇸", name: "US" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+92", flag: "🇵🇰", name: "PK" },
  { code: "+91", flag: "🇮🇳", name: "IN" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
  { code: "+61", flag: "🇦🇺", name: "AU" },
];

const services = [
  "Website Design",
  "Ecommerce Solutions",
  "Web Application",
  "Mobile Application",
  "Website Maintenance",
  "Domain And Hosting",
  "Branding",
  "Video Animation",
  "SEO",
  "Shopify Store",
];

export default function HireUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+92");
  const [countryFlag, setCountryFlag] = useState("🇵🇰");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Logo state
  const [logo, setLogo] = useState<any>(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetchLogo();
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find((c) => c.code === e.target.value);
    if (selected) {
      setCountryCode(selected.code);
      setCountryFlag(selected.flag);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setError("Please fill in all required fields");
      return;
    }
    
    if (!isChecked) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    const fullPhoneNumber = `${countryCode} ${formData.phone}`;

    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phoneNumber: fullPhoneNumber,
          service: formData.service,
          message: formData.message || "",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Thank you! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setCountryCode("+92");
        setCountryFlag("🇵🇰");
        setIsChecked(false);
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
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
    // Fallback text
    return (
      <div>
        <div className="hire-logo-text">360 ARTDESIGN</div>
        <div className="hire-logo-sub">Digital Agency</div>
      </div>
    );
  };

  return (
    <>
      <style>{`
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
          background: ${scrolled ? "rgba(18,4,4,0.97)" : "rgba(18,4,4,0.85)"};
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
      `}</style>

      <div className="hire-page">
        {/* TOP BAR - Dark semi-transparent with blur */}
        <div className="hire-topbar">
          <div>
            {renderLogo()}
          </div>
          <button className="hire-close-btn" onClick={() => window.history.back()}>
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="hire-body">
          <div className="hire-order-label">
            <svg className="zigzag" width="38" height="14" viewBox="0 0 38 14" fill="none">
              <polyline points="0,10 6,2 12,10 18,2 24,10 30,2 38,10" stroke="#e22222" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>ORDER NOW</span>
            <svg className="zigzag" width="38" height="14" viewBox="0 0 38 14" fill="none">
              <polyline points="0,10 6,2 12,10 18,2 24,10 30,2 38,10" stroke="#e22222" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="hire-heading">We would like to hear from you</h1>

          <p className="hire-sub">
            Heads up! We require that you sign up for a 360 ArtDesign services and packages.<br />
            We make all your dreams come true in a successful project.
          </p>

          <form className="hire-form" onSubmit={handleSubmit}>
            <div className="hire-row">
              <div className="hire-field">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <span className="hire-field-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="1.8">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
              </div>

              <div className="hire-field">
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <span className="hire-field-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <polyline points="2,4 12,13 22,4"/>
                  </svg>
                </span>
              </div>
            </div>

            <div className="hire-phone-field">
              <div className="hire-country-select">
                <div className="hire-country-display">
                  <span>{countryFlag}</span>
                  <span>{countryCode}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                <select value={countryCode} onChange={handleCountryChange}>
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>{c.flag} {c.code} ({c.name})</option>
                  ))}
                </select>
              </div>
              <input
                className="hire-phone-input"
                type="tel"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <span className="hire-phone-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 11.7 19.79 19.79 0 0 1 1.14 3a2 2 0 0 1 2-1.95h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
            </div>

            <div className="hire-field">
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
              >
                <option value="">Select Service *</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              <span className="hire-field-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="1.8">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </span>
            </div>

            <div className="hire-field" style={{ alignItems: "flex-start" }}>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <span className="hire-field-icon" style={{ paddingTop: 18 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e22222" strokeWidth="1.8">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
            </div>

            <div className="hire-checkbox-row">
              <input
                type="checkbox"
                id="hire-consent"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="hire-consent">
                Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL{" "}
                <a href="/privacy-policy">(PRIVACY POLICY</a> &amp;{" "}
                <a href="/terms">TERM &amp; CONDITIONS)</a>
                {" "}- Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to stop SMS &amp; EMAIL
              </label>
            </div>

            <div className="hire-submit-wrap">
              {error && <div className="error-message">{error}</div>}
              {success && <div className="success-message">{success}</div>}
              <button 
                type="submit" 
                className="hire-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Submitting...
                  </>
                ) : (
                  "Submit Now"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}