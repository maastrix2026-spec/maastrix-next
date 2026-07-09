"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    alert(`Success! Subscribed: ${email}`);
    setEmail("");
    setIsSubmitting(false);
  };

  const footerNavLinks = [
    { label: "Terms & conditions", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    // { label: "FAQs", href: "/support/faq" },
    // { label: "Sitemap", href: "/sitemap.xml" },
    { label: "Blog", href: "/blog" },
    // { label: "Feedback", href: "/feedback" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#0d0f12] text-gray-400 font-sans overflow-hidden border-t border-white/5 pt-16 pb-6">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CONTACT TILES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 border-b border-white/5">
          {[
            { icon: MapPin, title: "Location", val: "MBM Silver,Plot L3/60, 3rd Floor, Acharya Vihar, Bhubaneswar, Odisha, India", href: "#" },
            { icon: Phone, title: "Phone", val: "+91-674-2540245", href: "tel:+916742540245" },
            { icon: Mail, title: "Email", val: "info@maastrixsolutions.com", href: "mailto:info@maastrixsolutions.com" },
            { icon: Globe, title: "Web", val: "www.maastrixsolutions.com", href: "/" },
          ].map((item, i) => (
            <a key={i} href={item.href} className="group flex gap-4 items-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/20 transition-all">
              <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-0.5">{item.title}</h3>
                <p className="text-[11px] text-gray-400 group-hover:text-white transition-colors">{item.val}</p>
              </div>
            </a>
          ))}
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-12 pb-12">

          {/* Logo Section */}
          {/* Logo Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-6 group">
              {/* Update these dimensions for larger size. w-28 h-28 = 7rem */}
              <div className="relative w-28 h-28 shrink-0 transition-transform ">
                <Image
                  src="/assets/images/logo-bg-r.png"
                  alt="Maastrix Solutions Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 112px"
                  unoptimized
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-3xl font-black tracking-wider text-white uppercase group-hover:text-blue-400 transition-colors">
                  Maastrix
                </span>
                <span className="text-[12px] font-bold tracking-[0.25em] text-blue-500 uppercase mt-1">
                  Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-gray-500 max-w-xs mt-4">
              We are a highly effective, learning and fast growing organization with a global footprint in USA, UK, Canada, Norway, Australia and India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-blue-600 pl-3">Quick Link</h4>
              <ul className="space-y-3 text-[11px]">
                {["Services", "Contact"].map((link) => (
                  <li key={link}><Link href={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-blue-400 transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-blue-600 pl-3">Resources</h4>
              <ul className="space-y-3 text-[11px]">
                {["Portfolio", "Careers", "Blog"].map((link) => (
                  <li key={link}><Link href={`/${link.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & ISO */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required className="flex-1 rounded-sm bg-white/5 border border-white/10 px-3 py-2 text-sm text-white" />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all">Subscribe</button>
            </form>

            {/* ISO Logo */}
            <div className="pt-2">
              <div className="relative w-32 h-16"> 
                <Image
                  src="/assets/images/iso.png"
                  alt="ISO Certified"
                  fill
                  className="object-contain" // Use contain to see full image
                  sizes="128px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-wider">
          <p>© 2026 Maastrix Solutions. All Rights Reserved.</p>
          <div className="flex gap-4">
            {footerNavLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}