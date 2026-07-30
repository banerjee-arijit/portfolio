import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import SaddineHeader from "./components/saddine-header";
import EmblemBanner from "./components/emblem-banner";
import HeroSection from "./components/hero-section";
import AboutPanel from "./components/about-panel";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import BlogPanel from "./components/blog-panel";
import LandingContactForm from "./components/landing-contact-form";
import FooterPanel from "./components/footer-panel";

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
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
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
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const Separator = () => (
    <div className="relative flex h-8 w-full border-x border-neutral-200 dark:border-neutral-800 bg-hatched-pattern" />
  );

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030303] text-neutral-900 dark:text-neutral-100 font-sans antialiased transition-colors duration-200">
      <SaddineHeader theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-screen overflow-x-hidden px-2 pb-12">
        <div className="mx-auto md:max-w-3xl">
          <EmblemBanner />
          <HeroSection />
          <Separator />
          <AboutPanel />
          <Separator />
          <Experience />
          <Separator />
          <Skills />
          <Separator />
          <Projects />
          <Separator />
          <BlogPanel />
          <Separator />
          <LandingContactForm />
          <Separator />
          <FooterPanel />
        </div>
      </main>
    </div>
  );
}
