import React from "react";
import Image from "next/image";

// 1. Create an array for your partners. 
// This makes it very easy to add or remove partners later without changing the layout.
const partners = [
  { name: "Alpha Synopsys", logo: "/assets/images/Strategic_Partners/alpha.png" },
  { name: "AWS", logo: "/assets/images/Strategic_Partners/bbndry.png" },
  { name: "Google Cloud", logo: "/assets/images/Strategic_Partners/helal-bg.png" },
  { name: "OpenAI", logo: "/assets/images/Strategic_Partners/Webstein.png" },
];

export default function StrategicPartners() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y lg:py-10 border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-center text-sm font-bold tracking-widest text-slate-800 uppercase">
          Empowered by our Strategic Partners
        </h2>
        
        {/* Logo Container */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative flex items-center justify-center w-32 sm:w-40 h-16"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain filter opacity-100  transition-all duration-300 ease-in-out cursor-pointer"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}