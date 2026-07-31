import { IconExternalLink } from "@tabler/icons-react";

export default function BlogPanel() {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const todayFormatted = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

  const posts = [
    {
      title: "JavaScript vs React: What's the Difference?",
      href: "https://dev.to/arijit_banerjee_a45b6e660/javascript-vs-react-whats-the-difference-2mf3",
      date: todayFormatted,
      excerpt:
        "A comprehensive guide breaking down key differences between plain JavaScript and React, exploring DOM manipulation, component architecture, state management, and rendering pipelines...",
      gradient: "from-amber-400 via-yellow-400 to-amber-200",
    },
    {
      title: "Mastering Encapsulation in Java",
      href: "https://dev.to/arijit_banerjee_a45b6e660/mastering-encapsulation-in-java-3g8d",
      date: "10 Jun 2025",
      excerpt:
        "A deep dive into Object-Oriented Programming (OOP) fundamentals in Java, exploring data hiding, access modifiers, getter/setter patterns, and building robust, maintainable backend codebases...",
      gradient: "from-sky-400 via-indigo-400 to-amber-200",
    },
  ];

  return (
    <section
      id="blog"
      className="border-x border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-none"
    >
      {/* Panel Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 py-2.5 sm:py-3">
        <h2 className="text-[1.85rem] sm:text-[2.1rem] font-semibold tracking-tight text-neutral-900 dark:text-white font-display">
          Blog
        </h2>
      </header>

      {/* Blog Cards Grid */}
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-3 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Gradient Thumbnail Cover */}
                <div
                  className={`w-full h-40 rounded-xl bg-gradient-to-br ${post.gradient} opacity-90 group-hover:opacity-100 transition-opacity mb-4 border border-neutral-200/60 dark:border-neutral-800/60 shadow-inner relative flex items-end justify-end p-3`}
                >
                  <span className="p-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconExternalLink size={16} />
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors font-display">
                  {post.title}
                </h3>

                <span className="inline-block text-xs font-mono text-neutral-400 dark:text-neutral-500 mt-1 mb-2">
                  {post.date}
                </span>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom All Posts Pill Button */}
        <div className="flex justify-center pt-2">
          <a
            href="https://dev.to/arijit_banerjee_a45b6e660"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 cursor-pointer shadow-xs"
          >
            <span>All Posts</span>
            <span>&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
