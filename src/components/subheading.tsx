import { cn } from "../utils/cn";

export function Subheading({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("text-secondary dark:text-secondary-dark max-w-2xl text-sm leading-relaxed sm:text-base mb-6", className)}>
      {children}
    </p>
  );
}

