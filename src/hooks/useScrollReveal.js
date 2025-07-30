// src/hooks/useScrollReveal.js
import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
};
