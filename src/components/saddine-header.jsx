import { useState } from "react";
import {
  IconSun,
  IconMoon,
  IconUser,
  IconBriefcase,
  IconCode,
  IconFolder,
  IconArticle,
  IconSend,
} from "@tabler/icons-react";
import logo from "../assets/black-white-logo-with-b-it_695270-943.avif";

export default function SaddineHeader({ theme, toggleTheme }) {
  const [activeTab, setActiveTab] = useState("about");

  const navItems = [
    { id: "about", label: "About", href: "#about", icon: IconUser },
    {
      id: "experience",
      label: "Experience",
      href: "#experience",
      icon: IconBriefcase,
    },
    { id: "stack", label: "Stack", href: "#skills", icon: IconCode },
    { id: "projects", label: "Projects", href: "#projects", icon: IconFolder },
    { id: "blog", label: "Blog", href: "#blog", icon: IconArticle },
    { id: "contact", label: "Contact", href: "#contact", icon: IconSend },
  ];

  // Custom buttery-smooth animated scroll using requestAnimationFrame
  const smoothScrollTo = (targetY, duration = 750) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Ease in-out quad easing formula
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);

    if (href === "#" || href === "#about") {
      smoothScrollTo(0, 750);
      return;
    }

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = -70; // Header height offset
      const targetY =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      smoothScrollTo(targetY, 750);
    }
  };

  return (
    <>
      {/* Top Header Bar: Logo on Top Left, Theme Toggle on Top Right */}
      <header className="sticky top-0 z-50 w-full bg-[#fafafa] dark:bg-[#030303] pt-2 pb-1 transition-colors duration-300">
        <div className="mx-auto flex h-14 items-center justify-between border border-neutral-200/80 dark:border-neutral-800/80 md:max-w-3xl bg-white/80 dark:bg-black/80 backdrop-blur-xl px-3.5 sm:px-4 rounded-none shadow-2xs">
          {/* Top Left Logo */}
          <div className="flex items-center shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(0, 750);
              }}
              className="flex h-8 w-8 items-center justify-center transition-opacity duration-300 hover:opacity-70 active:scale-95"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-6 h-6 object-contain dark:invert"
              />
            </a>
          </div>

          {/* Desktop Center Pill Nav */}
          <div className="hidden md:flex justify-center max-w-full overflow-x-auto scrollbar-none px-1">
            <nav className="flex items-center gap-1 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/80 dark:bg-neutral-900/80 p-1 backdrop-blur-md text-xs font-medium whitespace-nowrap">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href, item.id)}
                    className={`px-3 py-1 rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold shadow-xs"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:opacity-80"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Top Right Theme Toggle */}
          <div className="flex items-center shrink-0">
            <button
              onClick={toggleTheme}
              title="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 hover:opacity-80 active:scale-95 cursor-pointer"
            >
              {theme === "dark" ? (
                <IconSun size={15} className="text-amber-400" />
              ) : (
                <IconMoon size={15} className="text-neutral-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Navigation Tab Bar (Icon Only) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <nav className="flex items-center justify-between gap-2.5 rounded-full border border-neutral-200/90 dark:border-neutral-800/90 bg-white/90 dark:bg-neutral-950/90 p-2 backdrop-blur-xl shadow-xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const IconComp = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href, item.id)}
                title={item.label}
                aria-label={item.label}
                className={`size-9 rounded-full flex items-center justify-center transition-all duration-300 ease-out active:scale-95 ${
                  isActive
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold shadow-md scale-105"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                <IconComp size={18} />
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
