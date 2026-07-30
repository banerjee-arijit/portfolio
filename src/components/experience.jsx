import { useState } from "react";
import { IconChevronUp, IconChevronDown, IconCode } from "@tabler/icons-react";
import shopcardLogo from "../assets/shopcardd logo.png";

const experiencesList = [
  {
    company: "ShopCardd",
    role: "Frontend Developer Intern",
    type: "Internship",
    startDate: "06.2025",
    endDate: "02.2026",
    isCurrent: false,
    logoImg: shopcardLogo,
    bullets: [
      "Developed scalable frontend SaaS interfaces, including an Office Management System and Delivery Management System supporting over 200 daily operations, utilizing React.js and TypeScript.",
      "Integrated 15+ RESTful APIs to power robust delivery tracking workflows, collaborating with backend teams to ensure zero data loss during state synchronization.",
      "Boosted UI/UX performance by 30% across both web applications by implementing React lazy-loading, state memoization, and efficient component rendering techniques.",
      "Drove cross-functional collaboration, participating in 20+ code reviews and maintaining Git version control to accelerate deployment cycles by 15%.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "SaaS",
      "REST API",
      "Performance Optimization",
      "Git",
      "UI/UX",
    ],
  },
];

export default function Experience() {
  const [openItems, setOpenItems] = useState({ 0: true });

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="experience"
      className="border-x border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-none"
    >
      {/* Panel Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 py-2.5 sm:py-3">
        <h2 className="text-[1.85rem] sm:text-[2.1rem] font-semibold tracking-tight text-neutral-900 dark:text-white font-display">
          Experience
        </h2>
      </header>

      {/* Experience List - Exact Saddine HTML Structure & Spacing */}
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {experiencesList.map((item, idx) => {
          const isOpen = !!openItems[idx];
          return (
            <div key={item.company} className="py-4 px-4 sm:px-6 space-y-4">
              {/* Company Header Row */}
              <div className="flex items-center gap-3">
                <div className="flex size-6 shrink-0 items-center justify-center select-none">
                  {item.logoImg ? (
                    <img
                      src={item.logoImg}
                      alt={`${item.company} logo`}
                      className="size-6 rounded-full bg-white dark:bg-neutral-900 object-contain ring-1 ring-neutral-200 dark:ring-neutral-800"
                    />
                  ) : (
                    <div className="size-6 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center font-bold text-[10px] text-neutral-800 dark:text-neutral-200">
                      {item.company.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-lg leading-snug font-semibold text-neutral-900 dark:text-white">
                  {item.company}
                </h3>
                {item.isCurrent && (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex items-center justify-center">
                      <span className="absolute inline-flex size-3 animate-ping rounded-full bg-emerald-500 opacity-50" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span>Current</span>
                  </span>
                )}
              </div>

              {/* Timeline Wrapper */}
              <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-neutral-200 dark:before:bg-neutral-800">
                <div className="relative">
                  {/* Trigger Button */}
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="group block w-full text-left relative outline-none cursor-pointer"
                  >
                    <div className="relative z-10 mb-1 flex items-center gap-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-800 ring-offset-1 ring-offset-white dark:ring-offset-black">
                        <IconCode size={14} />
                      </div>
                      <h4 className="flex-1 font-medium text-neutral-900 dark:text-white">
                        {item.role}
                      </h4>
                      <div className="shrink-0 text-neutral-400">
                        {isOpen ? (
                          <IconChevronUp size={16} />
                        ) : (
                          <IconChevronDown size={16} />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pl-9 text-sm text-neutral-500 dark:text-neutral-400">
                      <dl>
                        <dt className="sr-only">Employment Type</dt>
                        <dd>{item.type}</dd>
                      </dl>
                      <div className="shrink-0 bg-neutral-200 dark:bg-neutral-800 w-px h-4" />
                      <dl>
                        <dt className="sr-only">Employment Period</dt>
                        <dd className="flex items-center gap-0.5 font-mono">
                          <span>{item.startDate}</span>
                          <span>—</span>
                          <span>{item.endDate}</span>
                        </dd>
                      </dl>
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  {isOpen && (
                    <div className="overflow-hidden">
                      <div className="prose max-w-none dark:prose-invert prose-sm pt-2 pl-9 text-neutral-700 dark:text-neutral-300 text-sm">
                        <ul className="list-disc pl-4 space-y-1.5 leading-relaxed">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Tag List */}
                  <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
                    {item.techStack.map((tech) => (
                      <li key={tech} className="flex">
                        <span className="inline-flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-zinc-50 dark:bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
