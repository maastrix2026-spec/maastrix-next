import React from 'react';
import { Monitor, Cpu, Layers, Smartphone, GlobeCheck } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: <Monitor className="w-6 h-6" />, title: "Web Development" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Enterprise Apps" },
    { icon: <Cpu className="w-6 h-6" />, title: "IT Solutions" },
    { icon: <Layers className="w-6 h-6" />, title: "Custom Software" },
    { icon: <GlobeCheck className="w-6 h-6" />, title: "Secure Deployment" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between text-white bg-cover bg-center font-sans overflow-hidden"
      style={{
        // 82% overlay matches Gp's high contrast cinematic theme
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url('/assets/images/hero-bg.jfif')`
      }}
    >
      {/* Dynamic structural spacing beneath fixed navigation bar */}
      <div className="h-20"></div>

      {/* Main Core Copy Wrapper (Fully SEO Aligned) */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto my-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl">
          Powerful IT & Web <br /> Application <span className="text-blue-500">Solutions</span>.
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl font-medium tracking-wide">
          Empowering global enterprises for over 17 years with cutting-edge software engineering and digital transformation.
        </p>
      </div>

      {/* Bottom Feature Grid with boxed grid layouts directly replicating Gp template frame */}
      <div className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-8 text-center cursor-pointer transition-all duration-300 ease-out border border-white/10 md:border-y-0 md:border-x-[0.5px]"
            >
              {/* Dynamic Slide-Up Background Overlay Fill */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-10 transition-all duration-500 ease-out z-0" />

              {/* Icon layout anchor - shifts upward nicely during hover interactions */}
              <div className="text-blue-500 transform group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:text-blue-400 transition-all duration-300 ease-out z-10 mb-4">
                {feature.icon}
              </div>

              {/* Categorization links */}
              <h2 className="text-xs sm:text-sm font-bold tracking-wide text-gray-200 group-hover:text-blue-400 transition-colors duration-300 z-10">
                {feature.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;