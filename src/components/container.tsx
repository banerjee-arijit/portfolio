import { cn } from "../utils/cn";

export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-4 md:px-12", className)}>
      {children}
    </div>
  );
}

