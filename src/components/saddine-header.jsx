import { useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function SaddineHeader({ theme, toggleTheme }) {
  const [activeTab, setActiveTab] = useState("about");

  const navItems = [
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "stack", label: "Stack", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "blog", label: "Blog", href: "#blog" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);
    if (href === "#" || href === "#about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 w-full">
      <div className="mx-auto grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-3 border border-neutral-200 dark:border-neutral-800 md:max-w-3xl bg-white/70 dark:bg-black/70 backdrop-blur-xl px-3 rounded-none">
        {/* Left Logo */}
        <div className="justify-self-start flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex h-8 w-8 items-center justify-center transition-opacity duration-300 hover:opacity-70 active:scale-95"
          >
            <svg
              className="w-6 h-6 text-neutral-900 dark:text-neutral-100"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C11.5 3.5 10 5 8.5 6C7 7 5 6.5 4 8C3 9.5 4.5 11 4 13C3.5 15 2 16.5 3 18.5C4 20.5 6.5 21 8.5 20.5C10.5 20 11.5 18 12 18C12.5 18 13.5 20 15.5 20.5C17.5 21 20 20.5 21 18.5C22 16.5 20.5 15 20 13C19.5 11 21 9.5 20 8C19 6.5 17 7 15.5 6C14 5 12.5 3.5 12 2Z" />
            </svg>
          </a>
        </div>

        {/* Center Pill Nav matching exact sequence */}
        <div className="justify-self-center">
          <nav className="flex items-center gap-1 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/80 dark:bg-neutral-900/80 p-1 backdrop-blur-xl text-xs font-medium">
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

        {/* Right Theme Toggle */}
        <div className="justify-self-end">
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
  );
}
