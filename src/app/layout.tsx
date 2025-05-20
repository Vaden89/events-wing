import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import { Footer } from "./components/Footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Afit | Events",
  description: "Events platform for the airforce institute of technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat} antialiased`}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
