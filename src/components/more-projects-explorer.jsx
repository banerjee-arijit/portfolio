import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  IconTerminal,
  IconCode,
  IconSettings,
  IconBrandGithub,
  IconArrowUpRight,
  IconActivity,
  IconServer,
  IconMessages,
} from "@tabler/icons-react";
import SectionHeading from "./section-heading";

const StackIcon = lazy(() => import("tech-stack-icons"));

const getIconName = (tech) => {
  const mapping = {
    "react.js": "react",
    "node.js": "nodejs",
    "express.js": "expressjs",
    java: "java",
    "spring boot": "spring",
    postgresql: "postgresql",
    mysql: "mysql",
    redis: "redis",
    docker: "docker",
    mongodb: "mongodb",
    "socket.io": "socketio",
    supabase: "supabase",
    "tailwind css": "tailwindcss",
  };
  return mapping[tech.toLowerCase()] || null;
};

// Helper Magnetic Wrapper for Bento Cards
function MagneticCard({ children, className = "", customKey = 0 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Magnetic strength factor (smooth, subtle pull)
    const distanceX = (clientX - centerX) * 0.08;
    const distanceY = (clientY - centerY) * 0.08;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      custom={customKey}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.4,
            ease: [0.215, 0.61, 0.355, 1],
          },
        }),
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MoreProjectsExplorer() {
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
    <div className="my-14 px-4 md:px-6 py-6 border-t border-neutral-200/40 dark:border-neutral-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
        <div>
          <SectionHeading>More Projects</SectionHeading>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-[-8px]">
            Architectural teardowns of specialized distributed services & real-time engines.
          </p>
        </div>
      </div>

      {/* Magnetic Minimal Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Bento Card 1: Real-Time Auction Platform (Spans 2 columns) */}
        <MagneticCard
          customKey={0}
          className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 md:p-8 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-4">
            {/* Header row */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/50">
                  <IconTerminal className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                    HIGH CONCURRENCY
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                    Real-Time Auction Platform
                  </h3>
                </div>
              </div>

              <a
                href="https://github.com/banerjee-arijit/NovaBids_Auctions"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0"
                title="View Source Code"
              >
                <IconBrandGithub className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Engineered a real-time bidding system utilizing WebSocket connection pools with Socket.io alongside Supabase to sync bid states instantaneously across client sessions. Enforced database transaction isolation and Row Level Security in Supabase to eliminate double-bidding anomalies.
            </p>

            {/* Architecture Bullet List */}
            <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200/60 dark:border-neutral-800/60 rounded-2xl p-4 space-y-2">
              <div className="text-[10px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                <IconServer className="w-3.5 h-3.5 text-neutral-500" />
                <span>ARCHITECTURAL HIGHLIGHTS</span>
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 font-bold mt-[1px]">→</span>
                  <span>WebSocket cluster with Socket.io for instant state sync.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 font-bold mt-[1px]">→</span>
                  <span>Database transaction isolation & Row Level Security (RLS) in Supabase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 font-bold mt-[1px]">→</span>
                  <span>Automated cron runners managing escrow settlement workflows.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800/60">
            {["React.js", "Node.js", "Socket.io", "Supabase", "Tailwind CSS"].map((tech) => {
              const iconName = getIconName(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono bg-neutral-100/80 dark:bg-neutral-950/80 text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200/50 dark:border-neutral-800/60"
                >
                  {iconName && (
                    <Suspense fallback={<div className="w-3 h-3 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />}>
                      <StackIcon name={iconName} variant={isDarkMode ? "dark" : "light"} className="w-3 h-3" />
                    </Suspense>
                  )}
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        </MagneticCard>

        {/* Bento Card 2: Distributed Operation Scheduler (Spans 1 column) */}
        <MagneticCard
          customKey={1}
          className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 md:p-8 shadow-xs flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="p-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/50">
                <IconSettings className="w-5 h-5" />
              </div>
              <a
                href="https://github.com/banerjee-arijit/Operation_Scheduler-"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                title="View Source Code"
              >
                <IconBrandGithub className="w-4 h-4" />
              </a>
            </div>

            <div className="mb-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase flex items-center gap-1.5">
                <IconActivity className="w-3 h-3 text-neutral-400" />
                SPRING BOOT ENGINE
              </span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Distributed Operation Scheduler
              </h3>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Job scheduling & operation management service built using Spring Boot and React.js. Utilizes MySQL for task persistence and Docker containerization for isolated worker execution.
            </p>

            {/* Highlights */}
            <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200/60 dark:border-neutral-800/60 rounded-2xl p-3.5 mb-4 space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="flex items-start gap-2">
                <span className="text-neutral-400 font-bold">→</span>
                <span>Spring Boot backend scheduler with failover.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-neutral-400 font-bold">→</span>
                <span>MySQL persistence for execution logs.</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
            {["React.js", "Spring Boot", "Docker", "MySQL", "Tailwind CSS"].map((tech) => {
              const iconName = getIconName(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-neutral-100/80 dark:bg-neutral-950/80 text-neutral-700 dark:text-neutral-300 rounded-md border border-neutral-200/50 dark:border-neutral-800/60"
                >
                  {iconName && (
                    <Suspense fallback={<div className="w-2.5 h-2.5 rounded bg-neutral-200 dark:bg-neutral-800" />}>
                      <StackIcon name={iconName} variant={isDarkMode ? "dark" : "light"} className="w-2.5 h-2.5" />
                    </Suspense>
                  )}
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        </MagneticCard>

        {/* Bento Card 3: BaatCheet Messaging (Spans full 3 columns) */}
        <MagneticCard
          customKey={2}
          className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 md:p-8 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            
            {/* Left 2 cols: Info */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/50">
                  <IconMessages className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase flex items-center gap-1">
                    <IconCode className="w-3 h-3" />
                    DUPLEX SOCKET STREAMS
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                    BaatCheet: Real-Time Messaging Application
                  </h3>
                </div>
              </div>

              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Secure, low-latency messaging platform supporting continuous bi-directional chat streams, instant delivery receipts, and live typing indicators over Socket.io. Configured index-optimized MongoDB pagination for rapid chat history access and JWT auth session protection.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"].map((tech) => {
                  const iconName = getIconName(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono bg-neutral-100/80 dark:bg-neutral-950/80 text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200/50 dark:border-neutral-800/60"
                    >
                      {iconName && (
                        <Suspense fallback={<div className="w-3 h-3 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />}>
                          <StackIcon name={iconName} variant={isDarkMode ? "dark" : "light"} className="w-3 h-3" />
                        </Suspense>
                      )}
                      <span>{tech}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right col: GitHub CTA & Key Specs */}
            <div className="lg:col-span-1 bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200/60 dark:border-neutral-800/60 p-5 rounded-2xl space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-[10px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                  FEATURE SPECIFICATIONS
                </div>
                <div className="text-xs text-neutral-700 dark:text-neutral-300 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">→</span>
                    <span>Instant message relay via Socket.io</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">→</span>
                    <span>Paginated indexed MongoDB queries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">→</span>
                    <span>JWT token security & session guards</span>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/banerjee-arijit/BaatCheet-"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <IconBrandGithub className="w-4 h-4" />
                <span>View Source Code</span>
                <IconArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

          </div>
        </MagneticCard>

      </div>
    </div>
  );
}
