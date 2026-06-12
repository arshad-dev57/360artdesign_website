"use client";

import { useEffect } from "react";

export default function FaviconSetter() {
  useEffect(() => {
    const setFavicon = async () => {
      try {
        const response = await fetch('https://360artdesign-backend.vercel.app/api/settings/logo');
        const result = await response.json();
        if (result.success && result.data?.type === 'image' && result.data?.imageUrl) {
          const logoUrl = result.data.imageUrl;
          
          // Remove existing favicon links
          const existingLinks = document.querySelectorAll("link[rel*='icon']");
          existingLinks.forEach(link => link.remove());
          
          // Create new link element
          const link = document.createElement('link');
          link.rel = 'icon';
          link.href = logoUrl;
          // Optionally set type based on file extension
          if (logoUrl.endsWith('.png')) link.type = 'image/png';
          else if (logoUrl.endsWith('.svg')) link.type = 'image/svg+xml';
          else if (logoUrl.endsWith('.ico')) link.type = 'image/x-icon';
          else link.type = 'image/png'; // default
            
          document.head.appendChild(link);
        }
      } catch (error) {
        console.error('Failed to set dynamic favicon:', error);
      }
    };
    
    setFavicon();
  }, []);

  return null;
}