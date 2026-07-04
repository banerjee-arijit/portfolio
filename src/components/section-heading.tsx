import { cn } from "../utils/cn";

export default function SectionHeading({ children, className }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <h2 className={cn("text-primary dark:text-primary-dark text-lg font-bold tracking-tighter md:text-3xl mt-6 mb-4", className)}>
      {children}
    </h2>
  );
}


