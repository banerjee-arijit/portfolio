export default function AboutPanel() {
  return (
    <section
      id="about"
      className="border-x border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-none"
    >
      <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 py-2 sm:py-2">
        <h2 className="text-[1.85rem] sm:text-[2.1rem] font-semibold tracking-tight text-neutral-900 dark:text-white font-display">
          About
        </h2>
      </header>

      <div className="p-4 sm:p-6 space-y-4 text-[0.98rem] leading-7">
        <p className="text-neutral-900 dark:text-neutral-300 font-normal">
          I build digital products that feel effortless on the outside and run flawlessly on the inside. As a full-stack engineer working with Java, Spring Boot, React.js, and TypeScript, I care deeply about both the polish of the user interface and the resilience of the architecture beneath it.
        </p>

        <p className="text-neutral-900 dark:text-neutral-300 font-normal">
          My experience most recently at ShopCardd has sharpened my focus on scalable backends and reusable frontend design systems. Whether I am fine-tuning performance or architecting a solution from scratch, my goal is always to turn complex ideas into clear, fast, and natural experiences.
        </p>
      </div>
    </section>
  );
}
