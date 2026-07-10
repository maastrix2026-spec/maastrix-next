import AboutFeatures from "./AboutFeatures";

export default function AboutContent() {
  return (
    <div className="animate-fade-up">
      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
        Who We Are
      </div>

      <h2 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
        Engineering Intelligent Digital Platforms for Modern Businesses
        <span className="text-cyan-400">.</span>
      </h2>

      <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
        Maastrix Solutions is an Enterprise AI, Software and Digital
        Transformation company helping startups, SMEs, enterprises and
        organizations modernize operations through intelligent automation,
        scalable software engineering and cloud-native digital platforms.
      </p>

      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
        With more than 22 years of industry experience, we combine AI
        engineering, enterprise architecture, UI/UX, cloud technologies and
        full-stack development to build secure, scalable and future-ready
        solutions.
      </p>

      <AboutFeatures />

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#contact"
          className="rounded-md bg-cyan-400 px-7 py-4 text-center text-sm font-bold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
        >
          Start a Project
        </a>

        <a
          href="#services"
          className="rounded-md border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-300"
        >
          Explore Services
        </a>
      </div>
    </div>
  );
}