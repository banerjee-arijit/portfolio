import { useState, lazy, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconTerminal,
  IconCode,
  IconSettings,
  IconBrandGithub,
} from "@tabler/icons-react";
import SectionHeading from "./section-heading";

const StackIcon = lazy(() => import("tech-stack-icons"));

const getIconName = (tech: string): string | null => {
  const mapping: Record<string, string> = {
    "react.js": "react",
    "node.js": "nodejs",
    "express.js": "expressjs",
    "java": "java",
    "spring boot": "spring",
    "postgresql": "postgresql",
    "mysql": "mysql",
    "redis": "redis",
    "docker": "docker",
    "mongodb": "mongodb",
    "socket.io": "socketio",
  };
  return mapping[tech.toLowerCase()] || null;
};

interface TabProject {
  name: string;
  label: string;
  title: string;
  icon: React.ComponentType<any>;
  github: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export default function MoreProjectsExplorer() {
  const [activeTab, setActiveTab] = useState("auction-platform");
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

  const tabProjects: TabProject[] = [
    {
      name: "auction-platform",
      label: "Auction Platform",
      title: "Real-Time Auction Platform",
      icon: IconTerminal,
      github: "https://github.com/banerjee-arijit/NovaBids_Auctions",
      description: "Designed and implemented a high-concurrency real-time bidding application. It utilizes a WebSocket connection pool with Socket.io alongside a Redis-backed pub/sub adapter to synchronize bid values instantly across multiple server nodes. Applied strict database transactions and optimistic locking in MongoDB to eliminate double-bidding anomalies, and set up automated cron scheduling workers to manage auction expirations and escrow settlement states.",
      highlights: [
        "WebSocket cluster using Socket.io and Redis adapter for state sync.",
        "Optimistic locking on database bidding rates to avoid double-spend.",
        "Automated cron runners to settle bids and initiate Stripe escrow payouts."
      ],
      techStack: ["React.js", "Node.js", "Socket.io", "Redis", "MongoDB"]
    },
    {
      name: "operation-scheduler",
      label: "Operation Scheduler",
      title: "Distributed Operation Scheduler",
      icon: IconSettings,
      github: "https://github.com/banerjee-arijit/Operation_Scheduler-",
      description: "Created a clustered job scheduling service built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It coordinates background operations, automated cron schedules, and process execution logs across distributed server processes. Utilized BullMQ alongside a Redis-backed queue to enforce concurrency locks and dynamic worker failover configurations, guaranteeing high system availability and zero job drops.",
      highlights: [
        "BullMQ and Redis job queue implementation over distributed Node.js workers.",
        "Fault-tolerant execution guarantees with dynamic worker failover.",
        "Live MERN-based execution dashboards with real-time logs and manual triggers."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Docker"]
    },
    {
      name: "baatcheet",
      label: "BaatCheet",
      title: "BaatCheet: Real-Time Messaging Application",
      icon: IconCode,
      github: "https://github.com/banerjee-arijit/BaatCheet-",
      description: "Designed and built BaatCheet, a secure, real-time messaging application. It leverages a WebSocket protocol with Socket.io to support continuous two-way chat streams, instant message delivery, and real-time typing indicators. Integrated MongoDB for persistent message storage with indexed database queries to optimize paginated retrieval, and implemented secure JWT authorization to ensure user conversation privacy.",
      highlights: [
        "WebSocket connections via Socket.io for instantaneous message relay.",
        "Message persistence utilizing optimized index query lookups in MongoDB.",
        "Secure JSON Web Token (JWT) user authentication and session guardrails."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"]
    }
  ];

  return (
    <div className="my-10 px-4 md:px-6 py-6 border-t border-neutral-200/20">
      <SectionHeading>More Projects</SectionHeading>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 mt-[-9px]">
        Select a tab below to inspect project architectures, databases, and technologies.
      </p>

      {/* Horizontal Line Tab Bar */}
      <div className="flex border-b border-neutral-200 dark:border-neutral-800 gap-2 md:gap-4 overflow-x-auto select-none no-scrollbar pb-[1px]">
        {tabProjects.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className="relative px-4 py-2.5 text-xs md:text-sm font-semibold transition-colors cursor-pointer focus:outline-none"
            >
              <span
                className={`relative z-10 transition-colors duration-350 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-tab-line"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content Card */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {tabProjects.map((tab) => {
            if (tab.name !== activeTab) return null;
            return (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-neutral-50/40 dark:bg-neutral-900/10 border border-neutral-200 dark:border-neutral-800/85 rounded-3xl p-6 md:p-8 shadow-sm space-y-5"
              >
                {/* Title & Source Code Anchor Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                  <h3 className="text-base md:text-lg font-extrabold text-neutral-900 dark:text-white flex items-center gap-2">
                    <tab.icon className="w-5 h-5 text-blue-500" />
                    {tab.title}
                  </h3>
                  <a
                    href={tab.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white hover:bg-neutral-50 dark:bg-neutral-950 dark:hover:bg-neutral-900 text-xs font-bold text-neutral-600 dark:text-neutral-300 shadow-sm hover:scale-105 active:scale-95 transition-all w-fit cursor-pointer"
                  >
                    <IconBrandGithub size={15} />
                    <span>Source Code</span>
                  </a>
                </div>

                {/* Description Copy */}
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {tab.description}
                </p>

                {/* Highlights Card Block */}
                <div className="bg-neutral-50/60 dark:bg-neutral-900/30 p-4 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/40 space-y-3">
                  <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    System Architecture
                  </div>
                  <ul className="space-y-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                    {tab.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold mt-[1px]">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {tab.techStack.map((tech) => {
                    const iconName = getIconName(tech);
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-800/80 shadow-sm"
                      >
                        {iconName && (
                          <Suspense fallback={<div className="w-3.5 h-3.5 rounded bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse" />}>
                            <StackIcon 
                              name={iconName as any} 
                              variant={isDarkMode ? "dark" : "light"} 
                              className="w-3.5 h-3.5" 
                            />
                          </Suspense>
                        )}
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
