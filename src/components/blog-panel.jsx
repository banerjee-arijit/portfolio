export default function BlogPanel() {
  const posts = [
    {
      title: "Building Scalable Full-Stack Applications with Java & React",
      date: "01.10.2026",
      excerpt:
        "Key architecture principles, REST API optimizations, and clean state management strategies for building high-performance web applications...",
      gradient: "from-sky-400 via-indigo-400 to-amber-200",
    },
    {
      title: "Efficient State Management in React & TypeScript",
      date: "04.09.2026",
      excerpt:
        "Handling complex state efficiently in modern frontend applications using context, custom hooks, and strict TypeScript patterns...",
      gradient: "from-amber-400 via-rose-400 to-indigo-400",
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


      {/* Blog Cards Grid matching Image 4 & 5 */}
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <div
              key={post.title}
              className="group cursor-pointer rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-3 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Gradient Thumbnail Cover */}
                <div
                  className={`w-full h-40 rounded-xl bg-linear-to-br ${post.gradient} opacity-90 group-hover:opacity-100 transition-opacity mb-4 border border-neutral-200/60 dark:border-neutral-800/60 shadow-inner`}
                />

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
            </div>
          ))}
        </div>

        {/* Bottom All Posts Pill Button */}
        <div className="flex justify-center pt-2">
          <button className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 cursor-pointer shadow-xs">
            <span>All Posts</span>
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
