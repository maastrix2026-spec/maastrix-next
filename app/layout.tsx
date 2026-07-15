import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maastrixsolutions.com"),
  title: "Maastrix Solutions - Enterprise AI & Digital Transformation",
  description: "Web application and IT solutions provider with over 22 years of expertise.",
  verification: {
    google: "B4opya_l3cwAg7nlikVPDONDkxyH1oULJFwUbc2J5TY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId =
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html
      lang="en"
      className={cn(
        jakarta.className,
        jakarta.variable,
        geist.variable,
        "font-sans"
      )}
    >
      <body>
        <ScrollToTopOnMount />
        {children}

        <CookieConsent />
        <ScrollToTop />

        {googleAnalyticsId ? (
          <GoogleAnalytics gaId={googleAnalyticsId} />
        ) : null}
      </body>
    </html>
  );
}