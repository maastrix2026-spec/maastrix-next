"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    value:
      "MBM Silver, Plot L3/60, 3rd Floor, Acharya Vihar, Bhubaneswar, Odisha, India",
    href: "https://maps.google.com/?q=MBM+Silver+Acharya+Vihar+Bhubaneswar",
    external: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-674-2540245",
    href: "tel:+916742540245",
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@maastrixsolutions.com",
    href: "mailto:info@maastrixsolutions.com",
    external: false,
  },
  {
    icon: Globe,
    title: "Web",
    value: "www.maastrixsolutions.com",
    href: "https://maastrixsolutions.com",
    external: true,
  },
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

const footerNavLinks = [
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/maastrix-solutions---india/",
    icon: faLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Maastrix-Solutions-Pvt-Ltd-100072227944717/",
    icon: faFacebookF,
  },
  {
    label: "X",
    href: "https://x.com/MaastrixSolutns",
    icon: faXTwitter,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      // Replace this delay with your newsletter API request.
      await new Promise((resolve) => setTimeout(resolve, 800));

      alert(`Success! Subscribed: ${normalizedEmail}`);
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#0d0f12] font-sans text-gray-400">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-blue-600/[0.06] blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Contact tiles */}
        <div className="grid grid-cols-1 gap-3 border-b border-white/5 pb-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={`${item.title}: ${item.value}`}
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-white/[0.04] sm:p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
                    {item.title}
                  </h3>

                  <p className="break-words text-[12px] leading-relaxed text-gray-400 transition-colors group-hover:text-white">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-8">
          {/* Logo and description */}
          <div className="md:col-span-2 lg:col-span-5">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/"
                aria-label="Maastrix Solutions home"
                className="relative block h-20 w-20 shrink-0 sm:h-24 sm:w-24"
              >
                <Image
                  src="/assets/images/logo-bg-r.png"
                  alt="Maastrix Solutions Logo"
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-contain"
                  unoptimized
                />
              </Link>

              <p className="max-w-sm text-[13px] leading-relaxed text-gray-400 sm:text-sm">
                A fast-growing global organization with operations in the USA,
                UK, Canada, Norway, Australia, and India.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 md:col-span-1 lg:col-span-3 lg:gap-8">
            <FooterLinkColumn title="Quick Links" links={quickLinks} />
            <FooterLinkColumn title="Resources" links={resourceLinks} />
          </div>

          {/* Newsletter */}
          <div className="min-w-0 space-y-5 md:col-span-1 lg:col-span-4">
            <div>
              <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white">
                Newsletter
              </h4>

              <form
                onSubmit={handleSubscribe}
                className="flex w-full flex-col gap-2 sm:flex-row"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="footer-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter email"
                  required
                  disabled={isSubmitting}
                  className="min-h-11 min-w-0 flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-base text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || !email.trim()}
                  className="min-h-11 shrink-0 rounded-md bg-blue-600 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            </div>

            {/* ISO and social icons */}
            <div className="border-t border-white/5 pt-5">
              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-between">
                {/* ISO */}
                <div className="flex flex-col items-center sm:items-start">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Certified Organization
                  </p>

                  <div className="relative h-10 w-24 sm:h-11 sm:w-28">
                    <Image
                      src="/assets/images/iso.png"
                      alt="ISO Certified"
                      fill
                      sizes="(max-width:640px) 96px,112px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-[18px] transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-4 text-[10px] uppercase tracking-wider text-gray-500 sm:text-[11px] md:flex-row">
          <p className="text-center normal-case tracking-normal md:text-left">
            © {new Date().getFullYear()} Maastrix Solutions. All rights reserved.
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:justify-end"
          >
            {footerNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkColumnProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

function FooterLinkColumn({
  title,
  links,
}: FooterLinkColumnProps) {
  return (
    <div className="min-w-0">
      <h4 className="mb-3 border-l-2 border-blue-600 pl-3 text-[11px] font-bold uppercase tracking-widest text-white sm:text-[12px]">
        {title}
      </h4>

      <ul className="space-y-2.5 text-[12px] sm:text-[13px]">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex transition-all duration-200 hover:translate-x-1 hover:text-blue-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}