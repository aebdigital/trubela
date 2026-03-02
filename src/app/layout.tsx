import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "TRUBELA | Dekorácie a Čalúnenie od roku 1994",
  description: "Skúsenosti v oblasti dekorácií a čalúnenia od roku 1994. Závesy, záclony, garníže, čalúnenie nábytku, starožitnosti a tapety.",
  keywords: "čalúnenie, dekorácie, závesy, záclony, garníže, tapety, Bratislava, interiér",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className="antialiased">
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
