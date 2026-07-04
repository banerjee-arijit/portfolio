import { motion } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./section-heading";

export function DraggableCardDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [
    {
      title: "Collaborative Whiteboard",
      image: "/projects/crdt_canvas.png",
      className:
        "relative mx-auto my-3 rotate-[-2deg] w-full max-w-[280px] md:absolute md:top-14 md:left-[8%] md:rotate-[-6deg] z-10",
    },
    {
      title: "Workflow Automation Tool",
      image: "/projects/workflow_automation.png",
      className:
        "relative mx-auto my-3 rotate-[2deg] w-full max-w-[280px] md:absolute md:top-24 md:left-[36%] md:rotate-[4deg] z-20",
    },
    {
      title: "Codebase Knowledge Graph",
      image: "/projects/codebase_graph.png",
      className:
        "relative mx-auto my-3 rotate-[-1deg] w-full max-w-[280px] md:absolute md:top-16 md:right-[8%] md:rotate-[-4deg] z-30",
    },
  ];
  return (
    <div className="flex flex-col mt-6 overflow-visible">
      <SectionHeading className="ml-4 md:ml-6">
        Exploring new ideas.
      </SectionHeading>
      <p className="ml-4 md:ml-6 text-md text-neutral-500 dark:text-neutral-200 mt-[-9px]">
        Drag the cards away to reveal a secret message.
      </p>
      <div 
        ref={containerRef}
        className="relative flex flex-col md:flex-row min-h-auto py-6 md:min-h-[28rem] my-4 w-full items-center justify-center overflow-visible border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/10"
      >
        <p className="hidden md:block absolute top-1/2 mx-auto max-w-xs -translate-y-3/4 text-center text-xl px-4 font-black text-neutral-300 dark:text-neutral-700">
          I Love Exploring New Technologies and Building Amazing Projects.
        </p>
        {items.map((item) => (
          <motion.div
            drag
            dragConstraints={containerRef}
            whileDrag={{ scale: 1.05, zIndex: 100 }}
            key={item.title}
            className={`${item.className} bg-white dark:bg-neutral-900 p-2.5 rounded-2xl shadow-md border border-neutral-200/50 dark:border-neutral-800 cursor-grab active:cursor-grabbing w-64 sm:w-80`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none h-40 w-full object-cover rounded-xl"
            />
            <h3 className="mt-3 text-center text-base font-bold text-neutral-700 dark:text-neutral-300 tracking-tight">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
