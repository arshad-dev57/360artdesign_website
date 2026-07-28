import FaviconSetter from "@/components/FaviconSetter";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, paddingTop: "70px" }} suppressHydrationWarning>
        <FaviconSetter />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}