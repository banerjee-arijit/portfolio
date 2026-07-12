import { useEffect, useState } from "react";
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
    <div className="min-h-screen text-neutral-900 dark:text-neutral-50 font-sans">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none bg-neutral-100 dark:bg-black">
        <div className="animate-aurora-bg w-full h-full" />
      </div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-5xl mx-auto pt-10 pb-4 overflow-x-hidden">
        <Container className="relative pb-4">
          <Scales />

          <div className="relative grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center gap-4 min-h-[85vh] md:min-h-[80vh] py-12 overflow-visible">
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] select-none">
              <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-35 dark:opacity-25" />
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
                      const targetPosition =
                        target.getBoundingClientRect().top + window.scrollY;
                      const startPosition = window.scrollY;
                      const distance = targetPosition - startPosition;
                      const duration = 800;
                      let startTime: number | null = null;
                      const easeInOutCubic = (t: number) =>
                        t < 0.5
                          ? 4 * t * t * t
                          : 1 - Math.pow(-2 * t + 2, 3) / 2;
                      const animateScroll = (currentTime: number) => {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const run = easeInOutCubic(
                          Math.min(timeElapsed / duration, 1),
                        );
                        window.scrollTo(0, startPosition + distance * run);
                        if (timeElapsed < duration)
                          requestAnimationFrame(animateScroll);
                      };
                      requestAnimationFrame(animateScroll);
                    }
                  }}
                  className="inline-block hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all rounded-[10px] cursor-pointer"
                >
                  <InteractiveHoverButton>My Work</InteractiveHoverButton>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("contact");
                    if (target) {
                      const targetPosition =
                        target.getBoundingClientRect().top + window.scrollY;
                      const startPosition = window.scrollY;
                      const distance = targetPosition - startPosition;
                      const duration = 800;
                      let startTime: number | null = null;
                      const easeInOutCubic = (t: number) =>
                        t < 0.5
                          ? 4 * t * t * t
                          : 1 - Math.pow(-2 * t + 2, 3) / 2;
                      const animateScroll = (currentTime: number) => {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const run = easeInOutCubic(
                          Math.min(timeElapsed / duration, 1),
                        );
                        window.scrollTo(0, startPosition + distance * run);
                        if (timeElapsed < duration)
                          requestAnimationFrame(animateScroll);
                      };
                      requestAnimationFrame(animateScroll);
                    }
                  }}
                  className="border border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-900 px-6 py-2.5 rounded-[10px] text-sm font-semibold transition cursor-pointer"
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
