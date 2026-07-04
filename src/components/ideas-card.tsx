import { motion } from "framer-motion";
import { IconCpu, IconSparkles, IconUsers, IconWallet } from "@tabler/icons-react";

interface Idea {
  title: string;
  category: "AI Development" | "New Project Concepts";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tech: string[];
  description: string;
  gradient: string;
}

const ideas: Idea[] = [
  {
    title: "Multi-Agent Code Swarm",
    category: "AI Development",
    icon: IconCpu,
    tech: ["LangGraph", "Gemini API", "Spring Boot", "WebSockets"],
    description: "An autonomous orchestration platform where developers specify goals, and a crew of cooperating AI agents collaborate to generate, test, and compile full-stack React and Java modules.",
    gradient: "from-purple-500/10 to-indigo-500/10 dark:from-purple-950/20 dark:to-indigo-950/20",
  },
  {
    title: "AI Pull-Request Reviewer Bot",
    category: "AI Development",
    icon: IconSparkles,
    tech: ["Gemini Pro", "GitHub Webhooks", "Java", "Docker"],
    description: "A lightweight cloud agent that intercepts code submissions, runs automated static analyses, drafts context-aware refactoring tips, and flags potential security vulnerabilities.",
    gradient: "from-blue-500/10 to-cyan-500/10 dark:from-blue-950/20 dark:to-cyan-950/20",
  },
  {
    title: "CRDT Collaborative Whiteboard",
    category: "New Project Concepts",
    icon: IconUsers,
    tech: ["React", "TypeScript", "Yjs", "WebSockets", "Redis"],
    description: "A real-time whiteboard canvas supporting vector drawing, sticky notes, active cursor tracking, and presence syncing, optimized with CRDTs to guarantee zero merge conflicts.",
    gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-950/20 dark:to-teal-950/20",
  },
  {
    title: "Web3 Gas-Optimized Wallet Tracker",
    category: "New Project Concepts",
    icon: IconWallet,
    tech: ["Ethers.js", "Solidity", "React", "Tailwind CSS"],
    description: "A dashboard showing EVM chain transaction logs, calculating smart contract gas utilization patterns, and detailing optimized, lower-cost contract calling options.",
    gradient: "from-amber-500/10 to-orange-500/10 dark:from-amber-950/20 dark:to-orange-950/20",
  },
];

export default function IdeasExplorer() {
  return (
    <div className="mt-8 px-4 md:px-6">
      <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200 tracking-tight mb-1">
        Future Concepts & Explorations
      </h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
        Innovative concepts I am researching, designing, and preparing to build next.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ideas.map((idea, idx) => (
          <motion.div
            key={idea.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`group relative p-5 rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-gradient-to-br ${idea.gradient} hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
          >
            <div>
              {/* Header category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  idea.category === "AI Development"
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                    : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                }`}>
                  {idea.category}
                </span>
                <idea.icon className="text-neutral-500 dark:text-neutral-400 group-hover:scale-110 transition-transform duration-300" size={18} />
              </div>

              <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                {idea.title}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                {idea.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-neutral-200/20 dark:border-neutral-800/30">
              {idea.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono text-neutral-500 dark:text-neutral-500 bg-neutral-200/40 dark:bg-neutral-800/30 px-1.5 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
