import { lazy, Suspense, useState, useEffect } from "react";
import SectionHeading from "./section-heading";

const StackIcon = lazy(() => import("tech-stack-icons"));

interface Skill {
  name: string;
  iconName:
    | "react"
    | "typescript"
    | "nodejs"
    | "mongodb"
    | "mysql"
    | "java"
    | "spring"
    | "tailwindcss"
    | "github"
    | "gemini";
}

const skillList: Skill[] = [
  { name: "React.js", iconName: "react" },
  { name: "TypeScript", iconName: "typescript" },
  { name: "Node.js", iconName: "nodejs" },
  { name: "MongoDB", iconName: "mongodb" },
  { name: "MySQL", iconName: "mysql" },
  { name: "Core Java", iconName: "java" },
  { name: "Spring Boot", iconName: "spring" },
  { name: "Spring Security", iconName: "spring" },
  { name: "Tailwind CSS", iconName: "tailwindcss" },
  { name: "GitHub", iconName: "github" },
  { name: "AI Integration", iconName: "gemini" },
];

export default function Skills() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect theme class on mount
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    // Observe changes to the html class attribute
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
    <div className="py-6 px-4 md:px-6 mb-6 border-t border-neutral-200/20">
      <SectionHeading className="mb-2">
        Proficiencies and Expertise
      </SectionHeading>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-medium">
        Technologies and frameworks I work with daily to build scalable web
        applications.
      </p>

      {/* High-Contrast Border Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-neutral-200 dark:border-neutral-800/80 rounded-3xl overflow-hidden select-none bg-white/5 dark:bg-neutral-900/10">
        {skillList.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 md:p-8 border-r border-b border-neutral-200 dark:border-neutral-800/80 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/20 transition-colors duration-300 group cursor-pointer"
            >
              {/* Premium Icon Card wrapper */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80 shadow-sm dark:shadow-[0_0_12px_rgba(0,0,0,0.4)] group-hover:scale-105 group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30 group-hover:shadow-md transition-all duration-300 mb-4">
                <Suspense
                  fallback={
                    <div className="w-8 h-8 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse" />
                  }
                >
                  <StackIcon
                    name={skill.iconName}
                    variant={isDarkMode ? "dark" : "light"}
                    className="w-8 h-8"
                  />
                </Suspense>
              </div>
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 text-center tracking-wide">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Centered Footnote text */}
      <div className="flex justify-center mt-8">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 italic font-medium flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100/50 dark:bg-neutral-900/30 border border-neutral-200/50 dark:border-neutral-800/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          and, I am still learning...
        </p>
      </div>
    </div>
  );
}
