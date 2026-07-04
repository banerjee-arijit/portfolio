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
                scale: isOpen ? 1 : 0.85,
                y: isOpen ? 0 : 40,
                filter: isOpen ? "blur(0px)" : "blur(4px)",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative w-[96vw] h-[92vh] flex flex-col bg-white dark:bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl z-10"
            >
              {/* Clean Styled Header */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-150 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900 select-none">
                {/* Title */}
                <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 font-sans tracking-tight">
                  {project.title}
                </div>

                <div className="flex items-center gap-3 mr-10">
                  {/* Open live link */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-extrabold bg-neutral-200/50 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700/80 px-2.5 py-1 rounded-full text-neutral-600 dark:text-neutral-300 transition-colors"
                  >
                    Open Live
                    <IconExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Absolute Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2.5 right-3 z-30 p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <IconX size={18} />
              </button>

              {/* Iframe Viewport Container */}
              <div className="relative flex-1 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
                {/* Embedded App Frame */}
                <iframe
                  src={project.href}
                  className="w-full h-full border-none"
                  title={project.title}
                  allow="clipboard-write; microphone; camera; midi"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
