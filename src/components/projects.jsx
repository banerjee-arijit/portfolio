import { useState } from "react";
import { IconExternalLink, IconChevronUp, IconChevronDown, IconLock } from "@tabler/icons-react";
import { projects as allProjects } from "../constants/projects";

export default function Projects() {
  const [openProjects, setOpenProjects] = useState({ 0: true });
  const [showAll, setShowAll] = useState(false);

  const toggleProject = (index) => {
    setOpenProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  const getHostname = (url) => {
    if (!url) return "github.com";
    try {
      return new URL(url).hostname;
    } catch {
      return url.replace(/^https?:\/\//, "").split("/")[0];
    }
  };

  return (
    <section
      id="projects"
      className="border-x border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-none"
    >
      {/* Panel Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 py-2.5 sm:py-3">
        <h2 className="text-[1.85rem] sm:text-[2.1rem] font-semibold tracking-tight text-neutral-900 dark:text-white font-display">
          Projects
        </h2>
      </header>

      {/* Collapsible Project List matching Saddine.com */}
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {visibleProjects.map((project, idx) => {
          const isOpen = !!openProjects[idx];
          const projectLink = project.href || project.githubUrl;

          return (
            <div key={project.title} className="group/collapsible">
              {/* Project Header Row Bar */}
              <div className="flex items-center hover:bg-neutral-50/60 dark:hover:bg-neutral-900/40 transition-colors">
                {/* Left Circle Logo Icon */}
                <div className="mx-4 size-6 shrink-0 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-[10px] font-bold text-neutral-800 dark:text-neutral-200">
                  {project.title.charAt(0)}
                </div>

                {/* Main Row Content Trigger */}
                <div className="flex-1 border-l border-dashed border-neutral-200 dark:border-neutral-800">
                  <div
                    onClick={() => toggleProject(idx)}
                    className="flex w-full items-center justify-between p-4 pr-3 cursor-pointer select-none"
                  >
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug font-display">
                        {project.title.split("–")[0].trim()}
                      </h3>
                      <div className="font-mono text-[0.72rem] tracking-widest text-neutral-400 dark:text-neutral-500 uppercase flex items-center gap-1 mt-0.5">
                        <span>{project.year || "2025"}</span>
                        <span>—</span>
                        <span className="text-sm font-sans leading-none">∞</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {projectLink && (
                        <a
                          href={projectLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Open Project Link"
                          className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-opacity duration-300 hover:opacity-80"
                        >
                          <IconExternalLink size={16} />
                        </a>
                      )}
                      <button
                        onClick={() => toggleProject(idx)}
                        className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        {isOpen ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collapsible Expanded Area */}
              {isOpen && (
                <div className="border-t border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 space-y-4 bg-white dark:bg-black">
                  {/* Safari Browser Window Mockup Preview */}
                  {project.image && (
                    <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl">
                      {/* Safari Top Window Header Bar */}
                      <div className="h-9 px-3.5 bg-neutral-100/90 dark:bg-neutral-800/90 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between select-none">
                        {/* macOS Window Controls (Red, Yellow, Green) */}
                        <div className="flex items-center gap-1.5">
                          <span className="size-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                          <span className="size-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                          <span className="size-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                        </div>

                        {/* Safari URL / Address Field Bar */}
                        <div className="flex-1 max-w-xs sm:max-w-sm mx-auto px-3 py-0.5 rounded-md bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-700/80 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 text-center truncate flex items-center justify-center gap-1.5 shadow-2xs">
                          <IconLock size={10} className="text-emerald-500 shrink-0" />
                          <span className="truncate">{getHostname(project.href || project.githubUrl)}</span>
                        </div>

                        <div className="w-12 hidden sm:block" />
                      </div>

                      {/* Website Screenshot Image Viewport */}
                      <div className="relative w-full bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover object-top"
                        />
                      </div>
                    </div>
                  )}

                  {/* Prose Description */}
                  <p className="text-[0.95rem] leading-7 text-neutral-600 dark:text-neutral-400 font-normal">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-3.5 h-8 gap-1.5 transition-all duration-300 hover:opacity-80 active:scale-95"
                      >
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 px-3.5 h-8 gap-1.5 transition-all duration-300 hover:opacity-80 active:scale-95"
                      >
                        <span>Open Source</span>
                      </a>
                    )}
                  </div>

                  {/* Monospace Tech Stack Tag Pills */}
                  {project.techStack && (
                    <ul className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <li key={tech.name}>
                          <span className="inline-flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-zinc-50 dark:bg-zinc-900 px-2 py-0.5 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                            {tech.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Show More Toggle Button Pill */}
      {allProjects.length > 3 && (
        <div className="p-4 flex items-center justify-center border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 cursor-pointer shadow-xs"
          >
            <span>{showAll ? "Show Less" : "Show More"}</span>
            {showAll ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
          </button>
        </div>
      )}
    </section>
  );
}
