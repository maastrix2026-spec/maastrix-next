"use client";
import React from "react";
import Image from "next/image";
import { clientLogos } from "../../data/clients";
export default function ClientSlider() {
  return (
    <section className="relative overflow-hidden border-y border-border-subtle bg-surface-light py-10 sm:py-12 lg:py-14">
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-4 lg:gap-4">
          {" "}
          {/* Header */}{" "}
          <div className="z-10 border-b border-border-subtle pb-6 text-center lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6 lg:text-left">
            {" "}
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-primary sm:text-[13px]">
              {" "}
              Our Clients{" "}
            </span>{" "}
            <h2 className="mt-1 text-sm font-extrabold uppercase leading-snug tracking-tight text-secondary sm:text-base">
              {" "}
              Trusted by Leading <br className="hidden lg:block" /> Enterprise
              Clients{" "}
            </h2>{" "}
          </div>{" "}
          {/* Slider */}{" "}
          <div className="relative min-w-0 overflow-hidden lg:col-span-3">
            {" "}
            {/* Edge gradients */}{" "}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-surface-light via-surface-light/80 to-transparent sm:w-16" />{" "}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-surface-light via-surface-light/80 to-transparent sm:w-16" />{" "}
            {/* Moving track */}{" "}
            <div className="client-marquee group flex w-max items-center">
              {" "}
              <LogoGroup /> <LogoGroup ariaHidden />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
interface LogoGroupProps {
  ariaHidden?: boolean;
}
function LogoGroup({ ariaHidden = false }: LogoGroupProps) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-20 lg:pr-20"
      aria-hidden={ariaHidden}
    >
      {" "}
      {clientLogos.map((logo) => (
        <div
          key={`${ariaHidden ? "duplicate" : "original"}-${logo.id}`}
          className="relative flex h-12 w-28 shrink-0 items-center justify-center sm:h-14 sm:w-36 lg:h-16 lg:w-40"
        >
          {" "}
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : `${logo.name} logo`}
            fill
            sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 160px"
            className="object-contain transition-transform duration-300 ease-out hover:scale-105"
          />{" "}
        </div>
      ))}{" "}
    </div>
  );
}
