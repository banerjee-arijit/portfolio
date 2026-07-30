import { useState } from "react";

export default function EmblemBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-36 sm:h-40 border-x border-b border-neutral-200 dark:border-neutral-800 select-none flex items-center justify-center text-neutral-900 dark:text-neutral-100 relative bg-white dark:bg-black overflow-hidden">
      {/* Dotted grid with radial mask */}
      <div
        className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Center Fox Emblem Logo */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group cursor-pointer relative z-10 inline-flex items-center justify-center"
      >
        <span className="relative inline-flex h-12 w-auto sm:h-14">
          <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11.5 3.5 10 5 8.5 6C7 7 5 6.5 4 8C3 9.5 4.5 11 4 13C3.5 15 2 16.5 3 18.5C4 20.5 6.5 21 8.5 20.5C10.5 20 11.5 18 12 18C12.5 18 13.5 20 15.5 20.5C17.5 21 20 20.5 21 18.5C22 16.5 20.5 15 20 13C19.5 11 21 9.5 20 8C19 6.5 17 7 15.5 6C14 5 12.5 3.5 12 2Z" />
            <path d="M12 6L10 10L12 14L14 10L12 6Z" fill="white" className="dark:fill-black" />
          </svg>
        </span>

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
