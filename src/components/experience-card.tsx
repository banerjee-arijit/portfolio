import { lazy, Suspense, useState, useEffect } from "react";
import type { Experience } from "../types/experience";
import { motion } from "framer-motion";
import { IconMapPinFilled } from "@tabler/icons-react";

const StackIcon = lazy(() => import("tech-stack-icons"));

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col justify-between md:flex-row md:items-start border-b border-neutral-100 dark:border-neutral-900 pb-6 last:border-0 last:pb-0">
      <div className="max-w-[80%]">
        <h2 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg">
          {experience.company}
        </h2>
        <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            {experience.title}
          </p>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {experience.date}
          </p>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2">
          {experience.description}
        </p>
        <div className="my-4 flex flex-wrap gap-2">
          {experience.techStack.map((tech, index) => (
            <motion.div
              key={tech.name + index}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 px-2.5 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 hover:z-10 cursor-pointer shadow-sm"
            >
              <Suspense fallback={<div className="h-4 w-4 rounded bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse shrink-0" />}>
                <StackIcon 
                  name={tech.iconName as any} 
                  variant={isDarkMode ? "dark" : "light"} 
                  className="h-4 w-4 shrink-0" 
                />
              </Suspense>
              <span className="ml-1.5 text-neutral-600 dark:text-neutral-300 font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
        {experience.location && (
          <div className="text-xs text-neutral-500 flex items-center gap-1.5 mt-2">
            <IconMapPinFilled className="h-4 w-4 text-neutral-400" />
            <span>{experience.location}</span>
          </div>
        )}
      </div>
      <div className="hidden md:flex shrink-0 h-36 w-36 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 overflow-hidden relative group transition-all hover:shadow-md hover:border-blue-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <img
          src={experience.companyLogo}
          alt={experience.company}
          className="h-24 w-24 object-contain transition-transform duration-500 group-hover:scale-110 relative z-10"
        />
      </div>
    </div>
  );
}


