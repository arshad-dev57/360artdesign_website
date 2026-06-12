import Header from "@/components/Header";
import FaviconSetter from "@/components/FaviconSetter"; // adjust path if needed
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, paddingTop: "70px" }}>
        <FaviconSetter />   {/* This will set the dynamic favicon */}
        {children}
      </body>
    </html>
  );
}