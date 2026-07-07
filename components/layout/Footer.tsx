"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUpRight,
  ChevronUp
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API network latency delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    alert(`Success! We've received your email (${email}) and subscribed you to our newsletter.`);

    setEmail("");
    setIsSubmitting(false);
  };

  const footerNavLinks = [
    { label: "Terms & conditions", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "FAQs", href: "/support/faq" },
    { label: "Sitemap", href: "/sitemap.xml" },
    { label: "Blog", href: "/blog" },
    { label: "Feedback", href: "/feedback" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#0d0f12] text-gray-400 font-sans overflow-hidden border-t border-white/5 pt-10 pb-4">

      {/* Premium ambient micro-glow backing */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ROW 1: PRIMARY CORPORATE CONTACT TILES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 border-b border-white/5">

          {/* Location */}
          <div className="group flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/20">
            <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 transition-transform duration-300 group-hover:scale-110 shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Location</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                MBM Silver, Plot L3/60, 3rd Floor, Acharya Vihar, Bhubaneswar, Odisha, India. Pin: 751013
              </p>
            </div>
          </div>

          {/* Phone */}
          <a href="tel:+916742540245" className="group flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/20">
            <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 transition-transform duration-300 group-hover:scale-110 shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Phone</h3>
              <p className="text-xs text-gray-400 transition-colors duration-200 group-hover:text-white">
                +91-674-2540245
              </p>
              <p className="text-xs text-gray-500">/ 2567340</p>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:info@maastrixsolutions.com" className="group flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/20">
            <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 transition-transform duration-300 group-hover:scale-110 shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Email</h3>
              <p className="text-xs text-gray-400 break-all transition-colors duration-200 group-hover:text-white truncate">
                info@maastrixsolutions.com
              </p>
            </div>
          </a>

          {/* Web */}
          <Link href="/" className="group flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/20">
            <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 transition-transform duration-300 group-hover:scale-110 shrink-0">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Web</h3>
              <p className="text-xs text-gray-400 transition-colors duration-200 group-hover:text-white">
                www.maastrixsolutions.com
              </p>
            </div>
          </Link>

        </div>

        {/* ROW 2: CORE INFORMATION LINKS & TRUST FOOTPRINT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pt-8 pb-6">

          {/* About Column with Tight Inline Flex Logo Brand Identity */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 focus:outline-none group">
              <div className="relative w-20 h-20 shrink-0">
                <div className="relative w-20 h-20 shrink-0">
                  <Image
                    src="/assets/images/logo-bg-r.png"
                    alt="Maastrix Solutions Logo Icon"
                    fill
                    className="object-contain"
                    priority
                    sizes="80px"
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="text-lg font-black tracking-wider text-white uppercase group-hover:text-blue-400 transition-colors">
                  Maastrix
                </span>
                <span className="text-[11px] font-bold tracking-widest text-blue-500 uppercase mt-0.5">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-gray-400 max-w-sm">
              We are a highly effective, learning and fast growing organization. Up till now, our customers have their base in the USA, UK, Canada, Norway, Australia and India.
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5 pt-1">
              {[
                {
                  name: "Facebook",
                  url: "#",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )
                },
                {
                  name: "Twitter / X",
                  url: "#",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  )
                },
                {
                  name: "LinkedIn",
                  url: "#",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  aria-label={`Follow Maastrix on ${social.name}`}
                  className="p-2 rounded-full bg-white/5 text-gray-400 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Tree */}
          <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3.5 border-l-2 border-blue-500 pl-3">
                Quick Link
              </h4>
              <ul className="space-y-2 text-xs">
                {["Services", "Our Team", "Contact"].map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(" ", "")}`} className="flex items-center gap-1 hover:text-white transition-colors duration-200 group">
                      <span className="w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-2" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3.5 border-l-2 border-blue-500 pl-3">
                Resources
              </h4>
              <ul className="space-y-2 text-xs">
                {["Portfolio", "Careers", "Blog"].map((link) => (
                  <li key={link}>
                    <Link href={`${link.toLowerCase()}`} className="flex items-center gap-1 hover:text-white transition-colors duration-200 group">
                      <span className="w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-2" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Input Framework & Compliance Seals */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2.5">
                Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-sm sm:max-w-none lg:max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Subscribe with us"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-sm bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-1 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shrink-0 disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"} <ArrowUpRight className="h-3 w-3" />
                </button>
              </form>
            </div>

            {/* Verification Credentials Row */}
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <div className="bg-white rounded-sm p-1 flex items-center justify-center border border-white/10 h-10 w-24 relative select-none">
                <div className="text-[9px] text-slate-900 font-black text-center leading-none">
                  ISO 9001:2015 <br />
                  <span className="text-[7px] font-medium text-slate-500">CERTIFIED</span>
                </div>
              </div>

              <div className="bg-white rounded-sm p-1 flex items-center justify-center h-10 w-10 relative overflow-hidden select-none">
                <div className="w-7 h-7 border border-slate-900 border-dashed opacity-30 animate-spin" style={{ animationDuration: '24s' }} />
                <span className="absolute text-[8px] text-slate-900 font-bold">QR</span>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 3: COMPLIANCE ADMINISTRATIVE MATRIX & TOP FLOATER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-4 border-t border-white/5 text-[11px] text-center md:text-left">
          <p>© Copyrights 2026 Maastrixsolutions | All Rights Reserved</p>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-500 justify-center">
            {footerNavLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-gray-300 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Back-to-Top Trigger */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:-translate-y-0.5 transition-all duration-300 group z-20"
      >
        <ChevronUp className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      </button>
    </footer>
  );
}