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
    { label: "Blog", href: "/blog" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#0d0f12] text-gray-400 font-sans overflow-hidden border-t border-white/5 pt-8 pb-4">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CONTACT TILES - Reduced vertical gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 border-b border-white/5">
          {[
            { icon: MapPin, title: "Location", val: "MBM Silver, Plot L3/60, 3rd Floor, Acharya Vihar, Bhubaneswar, Odisha, India", href: "#" },
            { icon: Phone, title: "Phone", val: "+91-674-2540245", href: "tel:+916742540245" },
            { icon: Mail, title: "Email", val: "info@maastrixsolutions.com", href: "mailto:info@maastrixsolutions.com" },
            { icon: Globe, title: "Web", val: "www.maastrixsolutions.com", href: "/" },
          ].map((item, i) => (
            <a key={i} href={item.href} className="group flex gap-3 items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/20 transition-all">
              <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">{item.title}</h3>
                <p className="text-[12px] text-gray-400 group-hover:text-white transition-colors line-clamp-2">{item.val}</p>
              </div>
            </a>
          ))}
        </div>

        {/* MAIN FOOTER CONTENT - Compressed Grid Margins */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-8 pb-8">

          {/* Logo & Running Text Section Together */}
          <div className="lg:col-span-5 flex items-center gap-4">
            <Link href="/" className="relative w-25 h-25 shrink-0 block">
              <Image
                src="/assets/images/logo-bg-r.png"
                alt="Maastrix Solutions Logo"
                fill
                className="object-contain"
                sizes="80px"
                unoptimized
              />
            </Link>
            <p className="text-[13px] leading-relaxed text-gray-400 max-w-xs">
              A fast-growing global organization with operations in the USA, UK, Canada, Norway, Australia, and India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-[12px] font-bold text-white uppercase tracking-widest mb-3 border-l-2 border-blue-600 pl-3">Quick Link</h4>
              <ul className="space-y-2 text-[13px]">
                {["Services", "Careers", "Contact"].map((link) => (
                  <li key={link}><Link href={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-blue-400 transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-white uppercase tracking-widest mb-3 border-l-2 border-blue-600 pl-3">Resources</h4>
              <ul className="space-y-2 text-[13px]">
                {["Portfolio", "Blog"].map((link) => (
                  <li key={link}><Link href={`/${link.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & ISO */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required className="flex-1 rounded-sm bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500" />
                <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all">Subscribe</button>
              </form>
            </div>

            {/* ISO Logo */}
            <div className="relative w-24 h-10"> 
              <Image
                src="/assets/images/iso.png"
                alt="ISO Certified"
                fill
                className="object-contain object-left"
                sizes="96px"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-white/5 text-[11px] text-gray-500 uppercase tracking-wider">
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