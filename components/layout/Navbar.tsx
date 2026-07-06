"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* TEXT LOGO BRANDING */}
        <Link href="/" className="text-2xl font-black uppercase tracking-wider text-white select-none">
          MAASTRIX<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-gray-300 transition-colors duration-200 hover:text-blue-500"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/get-a-quote"
            className="rounded-sm border border-blue-500 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-blue-600 hover:border-blue-600"
          >
            Get a quote
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
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-3 text-sm font-semibold tracking-wider text-gray-300 hover:bg-white/5 hover:text-blue-400">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}