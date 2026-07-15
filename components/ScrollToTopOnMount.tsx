"use client";

import { useEffect } from "react";

export default function ScrollToTopOnMount() {
  useEffect(() => {
    // Disable the browser's default scroll restoration behavior
    window.history.scrollRestoration = "manual";

    // Trigger smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return null;
}