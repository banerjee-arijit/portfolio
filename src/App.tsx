import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import Navbar from "./components/navbar";
import Container from "./components/container";
import Scales from "./components/scales";
import { Heading } from "./components/heading";
import { Subheading } from "./components/subheading";
import ProfileCard from "./components/profile-card";
import Projects from "./components/projects";
import HelloTypewriter from "./components/hello-typewriter";
import { InteractiveHoverButton } from "./components/ui/interactive-hover-button";
import Skills from "./components/skills";
import Experience from "./components/experience";
import MoreProjectsExplorer from "./components/more-projects-explorer";
import LandingContactForm from "./components/landing-contact-form";
import { Timeline } from "./components/timeline";
import { DraggableCardDemo } from "./components/draggable-card";

export default function App() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark";
  });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (!("startViewTransition" in document)) {
      setTheme(nextTheme);
      return;
    }
    (document as any).startViewTransition(() => {
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      flushSync(() => {
        setTheme(nextTheme);
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-black text-neutral-900 dark:text-neutral-50 font-sans">
      {/* Background Glowing Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 dark:bg-blue-900/5 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neutral-400/5 dark:bg-neutral-900/5 blur-[120px] animate-float-reverse" />
        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-300/3 dark:bg-neutral-900/5 blur-[100px] animate-float-slow" />
      </div>

      {/* Fixed Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-15 bg-noise opacity-[0.015] dark:opacity-[0.025] bg-repeat" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-5xl mx-auto pt-10 pb-4 overflow-x-hidden">
        <Container className="relative pb-4">
          <Scales />

          {/* Hero Landing Profile (Full Screen Fold) */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center gap-4 min-h-[85vh] md:min-h-[80vh] py-12 overflow-visible group"
          >
            {/* Interactive Grid & Spotlight Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 select-none shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] bg-neutral-50/20 dark:bg-neutral-900/5 backdrop-blur-[2px] transition-colors duration-300 group-hover:border-neutral-300/60 dark:group-hover:border-neutral-700/60">
              {/* Glowing Cursor Spotlight */}
              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: isHovered ? 1 : 0.4,
                  background: isHovered
                    ? (theme === "dark"
                        ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)`
                        : `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 100%)`)
                    : (theme === "dark"
                        ? `radial-gradient(450px circle at 50% 50%, rgba(99, 102, 241, 0.08) 0%, rgba(59, 130, 246, 0.02) 50%, transparent 100%)`
                        : `radial-gradient(450px circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, rgba(59, 130, 246, 0.01) 50%, transparent 100%)`)
                }}
              />
              {/* Fine Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(51,65,85,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.12)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_80%,transparent_100%)] opacity-85" />
            </div>
            <div className="py-6 px-4 md:px-0">
              <HelloTypewriter />
              <Heading>Arijit Banerjee</Heading>
              <Subheading>
                I am a results-driven Software Engineer with experience building
                scalable full-stack applications using Java, Spring Boot,
                React.js, and Node.js. I recently completed my internship as a
                Java Full Stack Developer at ShopCardd.
              </Subheading>
              <div className="flex gap-4 mt-6 items-center">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("projects");
                    if (target) {
                      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                      const startPosition = window.scrollY;
                      const distance = targetPosition - startPosition;
                      const duration = 800;
                      let startTime: number | null = null;
                      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                      const animateScroll = (currentTime: number) => {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
                        window.scrollTo(0, startPosition + distance * run);
                        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
                      };
                      requestAnimationFrame(animateScroll);
                    }
                  }}
                  className="inline-block hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all rounded-full cursor-pointer"
                >
                  <InteractiveHoverButton>My Work</InteractiveHoverButton>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("contact");
                    if (target) {
                      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                      const startPosition = window.scrollY;
                      const distance = targetPosition - startPosition;
                      const duration = 800;
                      let startTime: number | null = null;
                      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                      const animateScroll = (currentTime: number) => {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
                        window.scrollTo(0, startPosition + distance * run);
                        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
                      };
                      requestAnimationFrame(animateScroll);
                    }
                  }}
                  className="border border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-900 px-6 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <ProfileCard />
          </div>

          {/* Section: Projects */}
          <div id="projects" className="mt-12">
            <Projects limit={2} />
          </div>

          {/* Section: Experience (Moved up) */}
          <div id="experience" className="mt-12">
            <Experience />
          </div>

          {/* Section: Skills */}
          <div id="skills" className="mt-12">
            <Skills />
          </div>

          {/* Section: Timeline */}
          <div id="about" className="mt-12">
            <Timeline />
            <DraggableCardDemo />
          </div>

          {/* Section: More Projects Explorer */}
          <MoreProjectsExplorer />

          {/* Section: Contact Form */}
          <LandingContactForm />
        </Container>
      </main>
    </div>
  );
}
