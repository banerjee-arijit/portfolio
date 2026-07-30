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
          I'm a software engineer building production-grade digital products
          with Java, Spring Boot, React.js, and TypeScript. I care about
          building software that feels polished on the surface and stays
          reliable underneath, with a strong focus on performance,
          maintainability, and consistency.
        </p>

        {/* Faded second paragraph */}
        <p className="text-neutral-900 dark:text-neutral-300 font-normal">
          My work spans full-stack development, reusable component design
          systems, and scalable architecture, with close attention to detail.
          Having completed my internship at ShopCardd, I enjoy turning complex
          ideas into experiences that feel clear, fast, and natural.
        </p>
      </div>
    </section>
  );
}
