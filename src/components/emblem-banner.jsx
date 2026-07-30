import { useState } from "react";
import logo from "../assets/black-white-logo-with-b-it_695270-943.avif";

export default function EmblemBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-36 sm:h-40 border-x border-b border-neutral-200 dark:border-neutral-800 select-none flex items-center justify-center text-neutral-900 dark:text-neutral-100 relative bg-white dark:bg-black overflow-hidden">
      {/* Dotted grid with radial mask */}
      <div
        className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Center Emblem Logo */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group cursor-pointer relative z-10 inline-flex items-center justify-center"
      >
        <img
          src={logo}
          alt="Personal Logo"
          className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:invert"
        />
        {/* Hover Tooltip */}
        <div
          className={`pointer-events-none absolute bottom-[95%] left-[75%] z-20 transition-all duration-200 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          <div className="rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 px-3.5 py-1.5 text-[11px] font-medium tracking-tight text-neutral-800 dark:text-neutral-200 shadow-md backdrop-blur-md whitespace-nowrap">
            Logic to magic ✨
          </div>
        </div>
      </div>
    </div>
  );
}
