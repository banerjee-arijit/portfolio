import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BlurFade({
  children,
  className = "",
  duration = 0.4,
  delay = 0,
  yOffset = 8,
  blur = "6px",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-40px 0px -40px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: yOffset, opacity: 0, filter: `blur(${blur})` }}
      animate={
        isInView
          ? { y: 0, opacity: 1, filter: "blur(0px)" }
          : { y: yOffset, opacity: 0, filter: `blur(${blur})` }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
