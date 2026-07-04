import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconX, IconExternalLink } from "@tabler/icons-react";
import SectionHeading from "./section-heading";
import type { Project } from "../types/project";
import ProjectCard from "./project-card";
import { projects as allProjects } from "../constants/projects";

export default function Projects({ limit }: { limit?: number }) {
  const projects: Project[] = limit ? allProjects.slice(0, limit) : allProjects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div className="py-6 px-4 md:px-6 shadow-section-inset border-y border-neutral-200/10 dark:border-neutral-800/10">
      <SectionHeading>Take a look at my best work</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
        {projects.map((project, idx) => (
          <ProjectCard
            project={project}
            idx={idx}
            key={project.title}
            onOpenPreview={() => {
              setSelectedProject(project);
            }}
          />
        ))}
      </div>

      {/* Interactive Modal Showcase (Pre-loaded for Instant Click Response) */}
      {allProjects.map((project) => {
        const isOpen = selectedProject?.title === project.title;
        return (
          <div
            key={project.title}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
              isOpen
                ? "pointer-events-auto opacity-100 visible"
                : "pointer-events-none opacity-0 invisible"
            }`}
          >
            {/* Frosted Backdrop */}
            <div
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              animate={{
                scale: isOpen ? 1 : 0.9,
                y: isOpen ? 0 : 25,
                filter: isOpen ? "blur(0px)" : "blur(4px)",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative w-[96vw] h-[92vh] flex flex-col bg-white dark:bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl z-10"
            >
              {/* Premium Custom Showcase Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-150 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900 select-none">
                {/* Custom Tech Sandbox Status Pin */}
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 rounded-full select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">Live Sandbox</span>
                </div>

                {/* Mock Browser URL Bar */}
                <div className="hidden sm:flex items-center gap-2 px-4.5 py-1.5 bg-neutral-100 dark:bg-neutral-850/80 border border-neutral-200/40 dark:border-neutral-700/40 rounded-full max-w-md w-72 md:w-96 text-[11px] text-neutral-500 dark:text-neutral-400 font-mono tracking-tight justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                  <span className="text-neutral-400 dark:text-neutral-600 font-sans text-xs">🔗</span>
                  <span className="truncate">{project.href.replace(/^https?:\/\//, "")}</span>
                </div>

                {/* Right-aligned Navigation Controls */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white hover:bg-neutral-50 dark:bg-neutral-950 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Open Live</span>
                    <IconExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                    title="Close"
                  >
                    <IconX size={18} />
                  </button>
                </div>
              </div>

              {/* Iframe Viewport Container */}
              <div className="relative flex-1 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
                {/* Loader in the background */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900">
                  <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-3" />
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium animate-pulse">Loading live application...</span>
                </div>

                {/* Embedded App Frame (only mounted if open) */}
                {isOpen && (
                  <iframe
                    src={project.href}
                    className="w-full h-full border-none relative z-10"
                    title={project.title}
                    allow="clipboard-write; microphone; camera; midi"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
