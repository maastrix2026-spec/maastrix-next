import Image from "next/image";

const images = [
  {
    src: "/images/about/about-1.jpg",
    alt: "Enterprise software team discussion",
    className: "col-span-2 h-72 lg:h-80 animate-float-slow",
  },
  {
    src: "/images/about/about-2.jpg",
    alt: "AI technology dashboard",
    className: "h-56 animate-float-medium",
  },
  {
    src: "/images/about/about-3.jpg",
    alt: "Cloud engineering workspace",
    className: "h-56 animate-float-fast",
  },
];

export default function AboutImageGrid() {
  return (
    <div className="relative animate-fade-up-delay">
      <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="grid grid-cols-2 gap-5">
        {images.map((image) => (
          <div
            key={image.src}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover opacity-80 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
          </div>
        ))}
      </div>

      <div className="absolute -bottom-8 left-8 hidden rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-5 shadow-[0_0_50px_rgba(34,211,238,0.18)] backdrop-blur-xl sm:block">
        <p className="text-4xl font-black text-cyan-300">22+</p>
        <p className="mt-1 text-sm font-semibold text-slate-300">
          Years Experience
        </p>
      </div>
    </div>
  );
}