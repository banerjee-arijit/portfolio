import { lazy, Suspense, useState, useEffect } from "react";

const StackIcon = lazy(() => import("tech-stack-icons"));

const skillList = [
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
  { name: "AI Integration", iconName: "openai", isAi: true },
];

export default function Skills() {
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
    <section
      id="skills"
      className="border-x border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-none"
    >
      {/* Panel Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 py-2.5 sm:py-3">
        <h2 className="text-[1.85rem] sm:text-[2.1rem] font-semibold tracking-tight text-neutral-900 dark:text-white font-display">
          Tech Stack
        </h2>
      </header>

      <div className="p-4 sm:p-6 space-y-6">
        {/* Outer Rounded Grid Container matching User Image */}
        <div className="rounded-3xl  overflow-hidden shadow-2xs">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            {skillList.map((skill, idx) => (
              <div
                key={skill.name + idx}
                className="flex flex-col items-center justify-center p-6 border-b border-r border-neutral-200/80 dark:border-neutral-800/80 hover:bg-white/60 dark:hover:bg-neutral-900/50 transition-colors group cursor-pointer"
              >
                {/* White/Dark Rounded Squircle Badge */}
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                  {skill.isAi ? (
                    <svg
                      className="w-7 h-7 text-amber-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                  ) : (
                    <Suspense
                      fallback={
                        <div className="w-6 h-6 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                      }
                    >
                      <StackIcon
                        name={skill.iconName}
                        variant={isDarkMode ? "dark" : "light"}
                        className="w-6 h-6"
                      />
                    </Suspense>
                  )}
                </div>

                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 text-center font-display">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pill Badge: and, I am still learning... */}
        <div className="flex items-center justify-center pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-medium text-neutral-600 dark:text-neutral-400 italic shadow-2xs">
            <span className="size-2 rounded-full bg-blue-500 animate-pulse" />
            <span>and, I am still learning...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
