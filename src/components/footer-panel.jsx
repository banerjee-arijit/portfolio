import { useEffect, useState } from "react";
import logo from "../assets/black-white-logo-with-b-it_695270-943.avif";

export default function FooterPanel() {
  const [dateTimeString, setDateTimeString] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const dayName = days[now.getDay()];
      const monthName = months[now.getMonth()];
      const dayNum = now.getDate();

      let hours12 = now.getHours();
      const ampm = hours12 >= 12 ? "PM" : "AM";
      hours12 = hours12 % 12;
      hours12 = hours12 ? hours12 : 12;
      const minutes = String(now.getMinutes()).padStart(2, "0");

      setDateTimeString(`${dayName}, ${dayNum} ${monthName} · ${hours12}:${minutes} ${ampm}`);
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
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain dark:invert" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white font-display">
            Thanks for coming by.
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
            See you around.
          </p>
        </div>
      </div>

      {/* Bottom Metadata Bar with Day, Date & 12-Hour Time AM/PM */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-between font-mono bg-neutral-50/40 dark:bg-neutral-900/20">
        <div>
          <span className="font-semibold text-neutral-800 dark:text-neutral-200 font-sans">Arijit Banerjee</span>
          <span className="mx-1.5">•</span>
          <span>{new Date().getFullYear()}</span>
        </div>

        <div>
          <span>{dateTimeString || "Thu, 30 Jul · 11:59 PM"}</span>
        </div>
      </div>
    </section>
  );
}
