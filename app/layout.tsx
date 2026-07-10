import { Plus_Jakarta_Sans, Geist } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/CookieConsent';
import { cn } from "@/lib/utils";
import ScrollToTop from '@/components/ScrollToTop';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Configure the Inter font weights
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta', // Creates a CSS variable
});

export const metadata = {
  title: "Maastrix Solutions - Enterprise AI & Digital Transformation",
  description: "Web application and IT solutions provider with over 22 years of expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Apply the font class directly to the HTML tag globally
    <html lang="en" className={cn(jakarta.className, "font-sans", geist.variable)}>
      <body>
        {children}
        <CookieConsent/>
        <ScrollToTop />
      </body>
    </html>
  );
}