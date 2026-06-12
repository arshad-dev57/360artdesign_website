"use client";

import { useEffect } from "react";

const FAVICON_ID = "dynamic-favicon";

function setLinkType(link: HTMLLinkElement, url: string) {
  if (url.endsWith(".png")) link.type = "image/png";
  else if (url.endsWith(".svg")) link.type = "image/svg+xml";
  else if (url.endsWith(".ico")) link.type = "image/x-icon";
  else link.type = "image/png";
}

export default function FaviconSetter() {
  useEffect(() => {
    const setFavicon = async () => {
      try {
        const response = await fetch("https://360artdesign-backend.vercel.app/api/settings/logo");
        const result = await response.json();
        if (result.success && result.data?.type === "image" && result.data?.imageUrl) {
          const logoUrl = result.data.imageUrl as string;
          let link = document.getElementById(FAVICON_ID) as HTMLLinkElement | null;

          if (!link) {
            link = document.createElement("link");
            link.id = FAVICON_ID;
            link.rel = "icon";
            document.head.appendChild(link);
          }

          link.href = logoUrl;
          setLinkType(link, logoUrl);
        }
      } catch (error) {
        console.error("Failed to set dynamic favicon:", error);
      }
    };

    setFavicon();
  }, []);

  return null;
}
