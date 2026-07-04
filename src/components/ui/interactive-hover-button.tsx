import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "../../utils/cn";

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black p-2 px-6 text-center font-bold text-neutral-800 dark:text-neutral-200 shadow-sm transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="bg-neutral-950 dark:bg-white h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 select-none">
          {children}
        </span>
      </div>
      <div className="text-white dark:text-neutral-950 absolute inset-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 select-none">
        <span>{children}</span>
        <IconArrowRight size={16} />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
