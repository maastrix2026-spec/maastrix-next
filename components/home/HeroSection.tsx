"use client";

import React from 'react';
import { Monitor, Cpu, Layers, Smartphone, GlobeCheck, BrainCircuit } from 'lucide-react';
import { KineticText } from '../ui/kinetic-text';

const HeroSection = () => {
  const features = [
    { icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Web Development" },
    { icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Enterprise Apps" },
    { icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />, title: "IT Solutions" },
    { icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Custom Software" },
    { icon: <GlobeCheck className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Secure Deployment" },
    { icon: <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8" />, title: "AI Integration" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between pt-24 md:pt-32 text-white bg-cover bg-center font-sans overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url('/assets/images/hero-bg.jfif')`
      }}
    >
      {/* Hero Text Section */}
      <div className="grow flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto relative z-10 pb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl text-white">
          Powerful IT & Web <br className="hidden sm:block" /> 
          Application{" "}
          
          {/* 3D Perspective Container with letter spacing tracking */}
          <span className="inline-block text-blue-500 [perspective:1000px] drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] filter">
            <div className="transform transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6">
              <KineticText
                text="Solutions"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest bg-linear-to-b from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent [text-shadow:_0_4px_12px_rgba(59,130,246,0.6)]"
              />
            </div>
          </span>
          .
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl font-medium tracking-wide">
          Empowering global enterprises for over 22 years with cutting-edge software engineering and digital transformation.
        </p>
      </div>

      {/* Responsive Feature Grid */}
      <div className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center cursor-pointer transition-all duration-300 border border-white/5"
            >
              <div className="absolute inset-0 bg-blue-600 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-10 transition-all duration-500" />

              <div className="text-blue-500 transform group-hover:-translate-y-1 transition-all duration-300 z-10 mb-2 sm:mb-4">
                {feature.icon}
              </div>

              <h2 className="text-[10px] sm:text-xs font-bold tracking-wide text-gray-200 group-hover:text-blue-400 z-10 uppercase sm:normal-case">
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