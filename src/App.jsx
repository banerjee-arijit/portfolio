import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import Navbar from "./components/navbar";
import Container from "./components/container";
import Scales from "./components/scales";
import BackgroundAmbient from "./components/background-ambient";
import HeroSection from "./components/hero-section";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import MoreProjectsExplorer from "./components/more-projects-explorer";
import LandingContactForm from "./components/landing-contact-form";
import { Timeline } from "./components/timeline";
import { DraggableCardDemo } from "./components/draggable-card";

export default function App() {
  const [theme, setTheme] = useState(() => {
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
    document.startViewTransition(() => {
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
    <div className="relative min-h-screen bg-neutral-100 dark:bg-black text-neutral-900 dark:text-neutral-50 font-sans">
      <BackgroundAmbient />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Full-Screen Sticky Hero Section (Parallax Base - No Fading) */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 md:px-6 z-0 overflow-hidden">
        <main className="w-full max-w-5xl mx-auto">
          <HeroSection />
        </main>
      </div>

      {/* Main Portfolio Content Sliding UP Over Sticky Hero (Seamless Background Blend Parallax) */}
      <div className="relative z-10 bg-neutral-100 dark:bg-black pt-6">
        <main className="max-w-5xl mx-auto pb-4 overflow-x-hidden">
          <Container className="relative pb-4">
            <Scales />

            <div id="projects" className="mt-8">
              <Projects limit={2} />
            </div>

            <div id="experience" className="mt-12">
              <Experience />
            </div>

            <div id="skills" className="mt-12">
              <Skills />
            </div>

            <div id="about" className="mt-12">
              <Timeline />
              <DraggableCardDemo />
            </div>

            <MoreProjectsExplorer />
            <LandingContactForm />
          </Container>
        </main>
      </div>
    </div>
  );
}
