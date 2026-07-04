import { cn } from "../utils/cn";

export function Heading({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h1 className={cn("text-primary dark:text-primary-dark text-2xl font-bold tracking-tighter md:text-5xl my-4", className)}>
      {children}
    </h1>
  );
}

