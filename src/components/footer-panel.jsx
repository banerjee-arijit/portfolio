import { useEffect, useState } from "react";

export default function FooterPanel() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTimeString(`${hours}:${minutes}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-x border-t border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-none">
      {/* Top Banner Content */}
      <div className="p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Radial Dotted Grid Background */}
        <div
          className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 space-y-2">
          {/* Emblem Logo */}
          <div className="flex justify-center mb-3">
            <svg className="w-12 h-12 text-neutral-900 dark:text-neutral-100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C11.5 3.5 10 5 8.5 6C7 7 5 6.5 4 8C3 9.5 4.5 11 4 13C3.5 15 2 16.5 3 18.5C4 20.5 6.5 21 8.5 20.5C10.5 20 11.5 18 12 18C12.5 18 13.5 20 15.5 20.5C17.5 21 20 20.5 21 18.5C22 16.5 20.5 15 20 13C19.5 11 21 9.5 20 8C19 6.5 17 7 15.5 6C14 5 12.5 3.5 12 2Z" />
              <path d="M12 6L10 10L12 14L14 10L12 6Z" fill="white" className="dark:fill-black" />
            </svg>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white font-display">
            Thanks for coming by.
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
            See you around.
          </p>
        </div>
      </div>

      {/* Bottom Metadata Bar matching Image */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-between font-mono bg-neutral-50/40 dark:bg-neutral-900/20">
        <div>
          <span className="font-semibold text-neutral-800 dark:text-neutral-200 font-sans">Arijit Banerjee</span>
          <span className="mx-1.5">•</span>
          <span>{new Date().getFullYear()}</span>
        </div>

        <div>
          <span>IST +5:30 / {timeString || "21:37"}</span>
        </div>
      </div>
    </section>
  );
}
