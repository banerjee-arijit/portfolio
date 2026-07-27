import { motion, useScroll, useTransform } from "framer-motion";
import ProfileCard from "./profile-card";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import HelloTypewriter from "./hello-typewriter";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Smooth scroll transformations for fading out the Hero section as the user scrolls
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 450], [1, 0.94]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
      window.scrollTo(0, startPosition + distance * run);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <motion.div
      style={{ opacity: contentOpacity, scale: contentScale }}
      className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center my-auto py-10 w-full"
    >
      <div className="flex flex-col gap-2 max-w-xl">
        <HelloTypewriter />

        <Heading>Arijit Banerjee</Heading>

        <Subheading>
          I am a results-driven Software Engineer with experience building
          scalable full-stack applications using Java, Spring Boot, React.js, and
          Node.js. I recently completed my internship as a Java Full Stack
          Developer at ShopCardd.
        </Subheading>

        <div className="flex gap-4 mt-6 items-center">
          <div
            onClick={(e) => scrollTo(e, "projects")}
            className="inline-block hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all rounded-full cursor-pointer"
          >
            <InteractiveHoverButton>My Work</InteractiveHoverButton>
          </div>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="border border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-900 px-6 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </div>

      <ProfileCard />
    </motion.div>
  );
}
