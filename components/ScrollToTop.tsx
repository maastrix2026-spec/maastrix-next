"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Triggers visibility frame once user passes typical hero viewport line (400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <button
        type="button"
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl transition-all duration-300 ease-in-out transform group pointer-events-auto flex items-center justify-center border border-white/10 ${
          isVisible 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-4 scale-75"
        }`}
        aria-label="Back to top operational vector"
      >
        <ChevronUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
      </button>
    </div>
  );
}