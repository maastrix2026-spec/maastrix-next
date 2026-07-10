import Image from "next/image";
import { Award, Building2, Globe2 } from "lucide-react";
import { stats } from "./constants";
import StatsBadge from "./StatsBadge";

export default function HeroWhoWeAre() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="group relative mx-auto aspect-[4/5] max-w-md overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
            <Image
              src="/assets/images/about/about-hero.jpg"
              alt="Maastrix Solutions enterprise technology team"
              fill
              priority
              className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="absolute -right-2 top-12 flex h-28 w-28 animate-pulse-slow flex-col items-center justify-center rounded-full border border-blue-400/40 bg-blue-600 text-center shadow-[0_0_70px_rgba(37,99,235,0.55)] sm:right-10">
            <Award className="mb-1 h-7 w-7 text-white" />
            <span className="text-xs font-black uppercase leading-tight tracking-wider text-white">
              Top
              <br />
              Engineers
            </span>
          </div>
        </div>

        <div>
          <p className="mb-5 inline-flex items-center gap-3 border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-blue-400">
            <Building2 className="h-4 w-4" />
            Who We Are
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Over{" "}
            <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-7xl text-transparent sm:text-8xl lg:text-9xl">
              22
            </span>{" "}
            years experience
            <span className="text-blue-500">.</span>
          </h1>

          <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg">
            Founded in 2004, Maastrix Solutions has evolved into an Enterprise
            AI, Software and Digital Transformation partner helping businesses
            build secure, scalable and future-ready digital platforms.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            Our journey includes global collaboration and strategic exposure
            with organizations such as St.Louis-based Alpha Synopsys, an Inc
            500 listed company. Today, we serve clients across the US, Canada,
            UK, Australia, Switzerland and Europe with disciplined engineering,
            transparent communication and long-term partnership.
          </p>

          <div className="mt-7 flex items-center gap-3 text-sm font-bold text-blue-400">
            <Globe2 className="h-5 w-5" />
            Global delivery with enterprise engineering discipline
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-0 border border-white/10 bg-black/25 backdrop-blur-md lg:grid-cols-4">
        {stats.map((item) => (
          <StatsBadge key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </section>
  );
}