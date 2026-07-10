import React from "react";
import {
  Brain,
  Cloud,
  Code2,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Enterprise AI",
      text: "AI assistants, automation, RAG, copilots and intelligent workflows.",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Software Engineering",
      text: "Scalable web apps, SaaS platforms, portals and business systems.",
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Cloud Native",
      text: "Secure, reliable and performance-focused cloud architecture.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Secure Delivery",
      text: "Built with authentication, access control, audit logs and API security.",
    },
  ];

  const stats = [
    { value: "22+", label: "Years Experience" },
    { value: "AI", label: "First Mindset" },
    { value: "20+", label: "Industries Served" },
    { value: "360°", label: "Digital Delivery" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Background layers matching hero */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.86), rgba(0,0,0,0.9)), url('/assets/images/hero-bg.jfif')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.14),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <Sparkles className="h-4 w-4" />
              About Maastrix
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              We Build Intelligent Digital Systems That Move Businesses Forward
              <span className="text-blue-500">.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Maastrix Solutions is an Enterprise AI, Software and Digital
              Transformation company helping businesses modernize operations
              through intelligent automation, scalable software engineering,
              cloud-native platforms and premium digital experiences.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              For over 22 years, we have helped organizations build web
              applications, SaaS products, enterprise platforms and automation
              systems that create measurable business value.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group border border-white/10 bg-black/30 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-600/10"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center border border-blue-500/40 text-blue-500 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 border border-blue-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-600"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-64 overflow-hidden border border-white/10">
                  <Image
                    src="/assets/images/about-1.jpg"
                    alt="Maastrix enterprise team"
                    className="h-full w-full object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
                  />
                </div>

                <div className="mt-10 h-64 overflow-hidden border border-white/10">
                  <Image
                    src="/assets/images/about-2.jpg"
                    alt="AI software engineering"
                    className="h-full w-full object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
                  />
                </div>

                <div className="-mt-8 h-64 overflow-hidden border border-white/10">
                  <Image
                    src="/assets/images/about-3.jpg"
                    alt="Cloud digital transformation"
                    className="h-full w-full object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
                  />
                </div>

                <div className="h-64 overflow-hidden border border-white/10">
                  <Image
                    src="/assets/images/about-4.jpg"
                    alt="Enterprise digital platform"
                    className="h-full w-full object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
                  />
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-500 bg-blue-600 text-center shadow-[0_0_60px_rgba(37,99,235,0.55)]">
                <span className="text-3xl font-extrabold">22+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Years
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 border border-white/10 bg-black/25 backdrop-blur-sm md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group border border-white/10 p-7 text-center transition-all duration-300 hover:bg-blue-600/10"
            >
              <h3 className="text-3xl font-extrabold text-blue-500 sm:text-4xl">
                {item.value}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Process strip */}
        <div className="mt-16 grid gap-0 border border-white/10 bg-black/25 backdrop-blur-sm md:grid-cols-4">
          {["Discover", "Design", "Develop", "Scale"].map((step, index) => (
            <div
              key={step}
              className="group relative border border-white/10 p-7 transition-all duration-300 hover:bg-blue-600/10"
            >
              <span className="text-sm font-bold text-blue-500">
                0{index + 1}
              </span>
              <h4 className="mt-3 text-lg font-extrabold text-white">
                {step}
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {index === 0 &&
                  "We understand your business goals, pain points and digital opportunities."}
                {index === 1 &&
                  "We plan UX, architecture, workflows and the right technical foundation."}
                {index === 2 &&
                  "We build secure, scalable and performance-ready digital products."}
                {index === 3 &&
                  "We support, optimize and improve your platform for long-term growth."}
              </p>

              {index !== 3 && (
                <div className="absolute right-5 top-8 hidden text-blue-500 md:block">
                  <Workflow className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;