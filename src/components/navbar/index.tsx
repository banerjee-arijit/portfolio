import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconHome,
  IconLayoutGrid,
  IconBriefcase,
  IconTools,
  IconUser,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";

interface TabItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

export default function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [activeTab, setActiveTab] = useState("home");

  const tabs: TabItem[] = [
    { id: "home", name: "Home", href: "#", icon: IconHome },
    { id: "projects", name: "Projects", href: "#projects", icon: IconLayoutGrid },
    { id: "experience", name: "Experience", href: "#experience", icon: IconBriefcase },
    { id: "skills", name: "Skills", href: "#skills", icon: IconTools },
    { id: "contact", name: "Contact", href: "#contact", icon: IconUser },
  ];

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tabId: string, href: string) => {
    e.preventDefault();
    setActiveTab(tabId);
    
    if (href === "#") {
      const startPosition = window.scrollY;
      const duration = 750;
      let startTime: number | null = null;
      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
        window.scrollTo(0, startPosition * (1 - run));
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };
      requestAnimationFrame(animateScroll);
    } else {
      const targetId = href.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 750;
        let startTime: number | null = null;
        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const animateScroll = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
          window.scrollTo(0, startPosition + distance * run);
          if (timeElapsed < duration) requestAnimationFrame(animateScroll);
        };
        requestAnimationFrame(animateScroll);
      }
    }
  };

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 bg-white/90 dark:bg-neutral-950/90 text-neutral-800 dark:text-neutral-200 rounded-full p-2 border border-neutral-200 dark:border-neutral-800 shadow-2xl backdrop-blur-md select-none"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <a
            key={tab.id}
            href={tab.href}
            onClick={(e) => handleTabClick(e, tab.id, tab.href)}
            title={tab.name}
            className="relative flex items-center justify-center cursor-pointer select-none"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold ${
                isActive
                  ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-inner"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              }`}
            >
              <Icon size={16} />
              <AnimatePresence mode="popLayout">
                {isActive && (
                  <motion.span
                     initial={{ opacity: 0, width: 0 }}
                     animate={{ opacity: 1, width: "auto" }}
                     exit={{ opacity: 0, width: 0 }}
                     className="overflow-hidden whitespace-nowrap"
                   >
                     {tab.name}
                   </motion.span>
                 )}
               </AnimatePresence>
             </motion.div>
           </a>
         );
       })}
 
       <div className="h-5 w-[1px] bg-neutral-200 dark:bg-neutral-800 mx-1" />
 
       {/* Theme Toggle Button inside Dock */}
       <button
         onClick={toggleTheme}
         title="Toggle Theme"
         className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800/80 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 cursor-pointer transition-colors"
       >
        {theme === "dark" ? (
          <IconSun size={16} className="text-neutral-300" />
        ) : (
          <IconMoon size={16} className="text-neutral-500" />
        )}
      </button>
    </motion.div>
  );
}


