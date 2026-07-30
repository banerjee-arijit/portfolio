export function ScrollFadeDemo() {
  return (
    <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black my-8">
      <div className="h-72 scroll-fade scrollbar-none overflow-y-auto">
        <div className="flex flex-col gap-1.5 p-1.5">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className="rounded-lg bg-neutral-100 dark:bg-neutral-900 px-3 py-2.5 text-sm text-neutral-800 dark:text-neutral-200 font-medium"
            >
              Item {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
