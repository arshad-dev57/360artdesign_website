"use client";
import { useState, useEffect, useRef } from "react";
import { FaCommentDots, FaTimes, FaPaperPlane, FaCheck } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: string[];
}

interface PricingPlan {
  _id: string;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  addOn: string;
  features: string[];
}

// Global event to open chatbot
if (typeof window !== 'undefined') {
  (window as any).openChatbot = () => {
    window.dispatchEvent(new CustomEvent('openChatbot'));
  };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! 👋 I'm your 360 ArtDesign assistant. How can I help you today?", isBot: true, options: ["Services", "Pricing", "Get a Quote"] }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationState, setConversationState] = useState<"greeting" | "service_inquiry" | "pricing_inquiry" | "requirement_gathering" | "email_collection" | "completed">("greeting");
  const [userRequirements, setUserRequirements] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPricing();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleOpenChatbot = () => setIsOpen(true);
    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchPricing = async () => {
    try {
      const response = await fetch('https://360artdesign-backend.vercel.app/api/pricing');
      const result = await response.json();
      if (result.success) {
        setPricingPlans(result.data);
      }
    } catch (error) {
      console.error('Error fetching pricing:', error);
    }
  };

  const services = [
    { name: "Web Design", description: "Custom website design and development" },
    { name: "Ecommerce Solutions", description: "Online store development with payment integration" },
    { name: "Web Apps", description: "Custom web applications for your business needs" },
    { name: "Mobile Apps", description: "iOS and Android mobile application development" },
    { name: "Website Maintenance", description: "Ongoing support and maintenance services" },
    { name: "Domain And Hosting", description: "Domain registration and hosting solutions" },
    { name: "Branding", description: "Logo design and complete branding packages" },
    { name: "Video Animation", description: "Professional video and animation services" },
    { name: "SEO", description: "Search engine optimization to boost visibility" },
    { name: "Shopify Store", description: "Complete Shopify store setup and management" }
  ];

  const getServiceResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("web design") || lowerInput.includes("website") || lowerInput.includes("web development")) {
      return "We offer professional Web Design & Development services including:\n\n• Custom website design\n• Responsive layouts\n• E-commerce integration\n• CMS integration (WordPress, etc.)\n• SEO-friendly structure\n\nOur websites are built to convert visitors into customers. Would you like to know about our pricing for web design packages?";
    }
    
    if (lowerInput.includes("ecommerce") || lowerInput.includes("e-commerce") || lowerInput.includes("online store")) {
      return "Our E-commerce Solutions include:\n\n• Shopping cart development\n• Payment gateway integration\n• Product management systems\n• Secure checkout processes\n• Inventory management\n\nWe work with platforms like Shopify, WooCommerce, and custom solutions. Interested in e-commerce pricing?";
    }
    
    if (lowerInput.includes("mobile app") || lowerInput.includes("ios") || lowerInput.includes("android")) {
      return "We specialize in Mobile App Development for:\n\n• iOS (iPhone/iPad)\n• Android devices\n• Cross-platform apps\n• Native and hybrid solutions\n• App store optimization\n\nOur apps are built with the latest technologies for optimal performance. Want to see our mobile app packages?";
    }
    
    if (lowerInput.includes("seo") || lowerInput.includes("search engine") || lowerInput.includes("ranking")) {
      return "Our SEO services help your business rank higher:\n\n• Keyword research\n• On-page optimization\n• Technical SEO\n• Content strategy\n• Link building\n• Performance tracking\n\nWe use proven strategies to improve your search visibility. Would you like pricing information?";
    }
    
    if (lowerInput.includes("branding") || lowerInput.includes("logo") || lowerInput.includes("identity")) {
      return "Our Branding services include:\n\n• Logo design\n• Brand identity development\n• Business cards & stationery\n• Brand guidelines\n• Social media branding\n\nWe create memorable brands that stand out. Interested in branding packages?";
    }
    
    if (lowerInput.includes("shopify")) {
      return "We offer comprehensive Shopify Services:\n\n• Store setup and configuration\n• Theme customization\n• App installation\n• Product optimization\n• Payment setup\n• Store maintenance\n\nOur Shopify experts can help you build a successful online store. Want to know about Shopify pricing?";
    }
    
    if (lowerInput.includes("video") || lowerInput.includes("animation")) {
      return "Our Video Animation services include:\n\n• Explainer videos\n• Product videos\n• Animated logos\n• Social media videos\n• Motion graphics\n\nWe create engaging videos that tell your story. Interested in video animation pricing?";
    }
    
    if (lowerInput.includes("maintenance") || lowerInput.includes("support")) {
      return "Our Website Maintenance services provide:\n\n• Regular updates\n• Security monitoring\n• Backup services\n• Performance optimization\n• Technical support\n• Content updates\n\nKeep your website running smoothly with our maintenance plans. Would you like pricing details?";
    }
    
    if (lowerInput.includes("hosting") || lowerInput.includes("domain")) {
      return "Our Domain & Hosting services include:\n\n• Domain registration\n• SSL certificates\n• Reliable hosting\n• Email setup\n• DNS management\n• Website migration\n\nWe provide secure and fast hosting solutions. Interested in hosting packages?";
    }
    
    if (lowerInput.includes("web app") || lowerInput.includes("application")) {
      return "Our Web App Development services:\n\n• Custom web applications\n• SaaS development\n• CRM systems\n• Dashboard development\n• API integration\n\nWe build scalable web applications tailored to your needs. Want to know about web app pricing?";
    }
    
    return "We offer a wide range of services including Web Design, E-commerce, Mobile Apps, SEO, Branding, Video Animation, Shopify solutions, and more. Which service would you like to know more about?";
  };

  const getPricingResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    const categoryMap: Record<string, string> = {
      "estore": "estore",
      "e-store": "estore",
      "ecommerce": "estore",
      "e-commerce": "estore",
      "website": "website",
      "web design": "website",
      "web development": "website",
      "shopify": "shopify",
      "branding": "branding",
      "logo": "branding",
      "video": "video",
      "animation": "video",
      "seo": "seo",
      "search engine": "seo"
    };

    let matchedCategory = "";
    for (const [key, value] of Object.entries(categoryMap)) {
      if (lowerInput.includes(key)) {
        matchedCategory = value;
        break;
      }
    }

    if (matchedCategory) {
      const categoryPlans = pricingPlans.filter(plan => 
        plan.category === matchedCategory || plan.category.toLowerCase() === matchedCategory
      );
      
      if (categoryPlans.length > 0) {
        let response = `Here are our ${matchedCategory.toUpperCase()} pricing plans:\n\n`;
        categoryPlans.forEach((plan, index) => {
          response += `${index + 1}. ${plan.name}\n   Price: ${plan.price} (was ${plan.originalPrice})\n   ${plan.addOn}\n\n`;
        });
        response += "Would you like to get a custom quote or proceed with one of these packages?";
        return response;
      }
    }

    // If no specific category matched, show general pricing info
    if (pricingPlans.length > 0) {
      const categories = [...new Set(pricingPlans.map(p => p.category))];
      let response = "We offer competitive pricing across multiple categories:\n\n";
      categories.forEach(cat => {
        response += `• ${cat.charAt(0).toUpperCase() + cat.slice(1)}\n`;
      });
      response += "\nWhich category would you like pricing for? (e.g., 'website pricing', 'ecommerce pricing', 'shopify pricing')";
      return response;
    }

    return "I'm fetching our latest pricing information. Please ask about a specific service (e.g., 'web design pricing', 'ecommerce pricing', 'shopify pricing') and I'll provide you with detailed package information.";
  };

  const processUserMessage = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    
    switch (conversationState) {
      case "greeting":
        if (lowerInput.includes("service") || lowerInput.includes("what do you offer") || lowerInput.includes("offer")) {
          setConversationState("service_inquiry");
          return getServiceResponse(userInput);
        }
        if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("pricing") || lowerInput.includes("how much")) {
          setConversationState("pricing_inquiry");
          return getPricingResponse(userInput);
        }
        if (lowerInput.includes("quote") || lowerInput.includes("estimate") || lowerInput.includes("project")) {
          setConversationState("requirement_gathering");
          return "Great! I'd be happy to help you get a quote. Could you please tell me about your project requirements? What service are you looking for and what are your specific needs?";
        }
        return "I can help you with:\n\n• Information about our services\n• Pricing and package details\n• Getting a custom quote\n\nWhat would you like to know?";

      case "service_inquiry":
        if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("pricing")) {
          setConversationState("pricing_inquiry");
          return getPricingResponse(userInput);
        }
        if (lowerInput.includes("quote") || lowerInput.includes("interest")) {
          setConversationState("requirement_gathering");
          return "Great! To provide you with an accurate quote, could you please share your project requirements? What specific features or services do you need?";
        }
        return getServiceResponse(userInput);

      case "pricing_inquiry":
        if (lowerInput.includes("quote") || lowerInput.includes("custom") || lowerInput.includes("interested")) {
          setConversationState("requirement_gathering");
          return "Perfect! To give you a custom quote, please tell me about your project requirements. What service do you need and what are your specific goals?";
        }
        return getPricingResponse(userInput);

      case "requirement_gathering":
        setUserRequirements(userInput);
        setConversationState("email_collection");
        return "Thank you for sharing your requirements! To have our team follow up with a detailed quote, please provide your email address.";

      case "email_collection":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(userInput)) {
          setUserEmail(userInput);
          setConversationState("completed");
          // Submit the lead
          submitLead(userRequirements, userInput);
          return "Perfect! Thank you for providing your email. Our customer support team will review your requirements and contact you shortly with a detailed quote. Is there anything else I can help you with?";
        }
        return "Please provide a valid email address so our team can reach you with your custom quote.";

      case "completed":
        if (lowerInput.includes("service") || lowerInput.includes("offer")) {
          setConversationState("service_inquiry");
          return getServiceResponse(userInput);
        }
        if (lowerInput.includes("price") || lowerInput.includes("pricing")) {
          setConversationState("pricing_inquiry");
          return getPricingResponse(userInput);
        }
        if (lowerInput.includes("quote") || lowerInput.includes("new project")) {
          setConversationState("requirement_gathering");
          setUserRequirements("");
          setUserEmail("");
          return "Sure! Let's start a new quote request. Please tell me about your project requirements.";
        }
        return "Is there anything else I can help you with? I can provide information about our services, pricing, or help you get another quote.";

      default:
        return "I'm here to help! You can ask me about our services, pricing, or request a custom quote.";
    }
  };

  const submitLead = async (requirements: string, email: string) => {
    try {
      await fetch('https://360artdesign-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: "Chatbot Lead",
          email: email,
          phoneNumber: "",
          message: `Chatbot Inquiry - Requirements: ${requirements}`
        })
      });
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    setTimeout(() => {
      const botResponse = processUserMessage(inputText);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleOptionClick = (option: string) => {
    setInputText(option);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#e22222] text-white rounded-full shadow-lg hover:bg-[#b71c1c] transition-all duration-300 flex items-center justify-center hover:scale-110"
        style={{ animation: "pulse 2s infinite" }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ animation: "modalSlide 0.3s ease" }}>
          {/* Header */}
          <div className="bg-[#e22222] text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <FaCommentDots size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Chat with us</h3>
              <p className="text-xs opacity-80">We typically reply within minutes</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.isBot ? "justify-start" : "justify-end"} mb-3`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-white text-gray-800 rounded-tl-none shadow-sm"
                        : "bg-[#e22222] text-white rounded-tr-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
                {message.options && (
                  <div className="flex flex-wrap gap-2 ml-2 mb-3">
                    {message.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        className="px-3 py-1.5 bg-white border border-[#e22222] text-[#e22222] rounded-full text-xs font-semibold hover:bg-[#e22222] hover:text-white transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-white text-gray-800 rounded-2xl rounded-tl-none p-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#e22222] text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                className="w-10 h-10 bg-[#e22222] text-white rounded-full flex items-center justify-center hover:bg-[#b71c1c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
