"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button"
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to evaluate if a route or its nested sub-routes are active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* IMAGE LOGO BRANDING */}
        <Link href="/" className="flex items-center select-none group relative">
          {/* Increased size: w-28 h-28 (112px). We add a subtle negative margin 
      if you want it to "break" the navbar, but absolute sizing is safer here. */}
          <div className="relative w-28 h-28 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/images/logo-bg-r.png"
              alt="Maastrix Solutions Logo"
              fill
              className="object-contain"
              priority
              sizes="112px"
              unoptimized
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 relative py-1 ${active
                  ? "text-blue-500 font-extrabold"
                  : "text-gray-300 hover:text-blue-400"
                  }`}
              >
                {item.name}
                {/* Premium subtle underline accent for active links */}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full animate-in fade-in zoom-in-75 duration-300" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/get-a-quote" className="focus:outline-none">
            <ShimmerButton>
              <span className="whitespace-pre-wrap text-center text-xs font-black uppercase tracking-widest leading-none text-white dark:text-white">
                Get a quote
              </span>
            </ShimmerButton>
          </Link>
        </div>

        {/* Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white lg:hidden transition-colors duration-200"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 visible border-t border-white/5" : "max-h-0 opacity-0 invisible overflow-hidden"} bg-slate-950/95 backdrop-blur-xl w-full`}>
        <div className="space-y-1 px-6 py-6 pb-8">
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-3 text-sm font-semibold tracking-wider transition-colors duration-150 ${active
                  ? "bg-blue-500/10 text-blue-400 font-bold border-l-2 border-blue-500 pl-2"
                  : "text-gray-300 hover:bg-white/5 hover:text-blue-400"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}