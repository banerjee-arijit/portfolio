import type { Project } from "../types/project";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconExternalLink,
  IconRosetteDiscountCheckFilled as VerifiedIcon,
  IconMessageCircle,
  IconRepeat,
  IconHeart,
  IconChartBar,
  IconEye,
} from "@tabler/icons-react";
import avatarImg from "../assets/avatar.webp";

export default function ProjectCard({
  project,
  idx,
  onOpenPreview,
}: {
  project: Project;
  idx: number;
  onOpenPreview: () => void;
}) {
  // Get handle name, date, and hashtags
  const handleName = idx === 0 ? "novacode" : "stride";
  const dateString = idx === 0 ? "Apr 2026" : "Feb 2026";
  const hashtags =
    idx === 0
      ? [
          "#reactjs",
          "#typescript",
          "#nodejs",
          "#express",
          "#mongodb",
          "#gemini",
        ]
      : ["#java", "#springboot", "#reactjs", "#typescript", "#mysql"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.15 }}
      onClick={onOpenPreview}
      className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Tweet Header */}
        <div className="flex items-start justify-between w-full mb-3 select-none">
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            <img
              src={avatarImg}
              alt="Arijit Banerjee"
              className="w-10 h-10 rounded-full object-cover border border-neutral-200 dark:border-neutral-800"
            />
            {/* Project User details */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm text-neutral-900 dark:text-neutral-50 tracking-tight leading-tight group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {idx === 0 ? "NovaCode" : "Stride"}
                </span>
                <VerifiedIcon
                  size={14}
                  className="text-blue-500 fill-current"
                />
              </div>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                @{handleName} • {dateString}
              </span>
            </div>
          </div>

          {/* GitHub Icon (Top Right) */}
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100 transition-colors p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <IconBrandGithub size={18} />
          </a>
        </div>

        {/* Tweet Body Text */}
        <p className="text-xs text-neutral-800 dark:text-neutral-200 mt-1 leading-relaxed px-1">
          {project.description}
        </p>

        {/* Hashtags (Tech Stack) */}
        <div className="flex flex-wrap gap-1 px-1 mt-3 mb-4 select-none">
          {hashtags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-mono font-medium text-blue-500 dark:text-blue-400 hover:underline cursor-pointer mr-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Mockup Image (Treated as Tweet Media Attachment) */}
        <motion.div
          layoutId={`project-media-${project.title}`}
          className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-200/50 dark:border-neutral-800/50"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700"
          />
          <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 dark:bg-neutral-950/90 backdrop-blur-md rounded-full shadow-md text-[10px] font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
              <IconEye size={12} className="animate-pulse" />
              <span>Preview Live</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Tweet Footer Interactions & CTA Buttons */}
      <div className="mt-5 pt-3.5 border-t border-neutral-200 dark:border-neutral-400/50 flex items-center justify-between">
        {/* Fake Tweet Interaction Statistics */}
        <div className="flex items-center gap-4 text-neutral-400 dark:text-neutral-500 select-none">
          <div className="flex items-center gap-1 hover:text-blue-500 transition-colors text-[10px] font-mono">
            <IconMessageCircle size={14} />
            <span>12</span>
          </div>
          <div className="flex items-center gap-1 hover:text-green-500 transition-colors text-[10px] font-mono">
            <IconRepeat size={14} />
            <span>{idx === 0 ? "24" : "18"}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-red-500 transition-colors text-[10px] font-mono">
            <IconHeart size={14} />
            <span>{idx === 0 ? "142" : "89"}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono">
            <IconChartBar size={14} />
            <span>{idx === 0 ? "1.8K" : "940"}</span>
          </div>
        </div>

        {/* CTA "Try it out" Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenPreview();
          }}
          className="flex items-center gap-1.5 text-[11px] font-bold bg-neutral-900 hover:bg-black dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white px-3.5 py-1.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          Try it out
          <IconExternalLink size={11} />
        </button>
      </div>
    </motion.div>
  );
}
