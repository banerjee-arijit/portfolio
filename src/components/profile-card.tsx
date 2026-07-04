import { motion } from "framer-motion";
import avatarImg from "../assets/avatar.webp";
import StackIcon from "./stack-icon";

// Helper to generate circular keyframes with start angles
function getCircleKeyframes(
  r: number,
  startAngleDegrees: number,
  pointsCount = 72,
) {
  const xKeyframes: number[] = [];
  const yKeyframes: number[] = [];
  const startRad = (startAngleDegrees * Math.PI) / 180;

  for (let i = 0; i <= pointsCount; i++) {
    const t = (i / pointsCount) * 2 * Math.PI + startRad;
    const x = r * Math.cos(t);
    const y = r * Math.sin(t);
    xKeyframes.push(x);
    yKeyframes.push(y);
  }
  return { x: xKeyframes, y: yKeyframes };
}

export default function ProfileCard() {
  const radius = 190;

  // 4 badges spaced at 90-degree intervals (0, 90, 180, 270)
  const pathJava = getCircleKeyframes(radius, 0);
  const pathSpring = getCircleKeyframes(radius, 90);
  const pathReact = getCircleKeyframes(radius, 180);
  const pathNode = getCircleKeyframes(radius, 270);

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-lg mx-auto">
      {/* Atomic Figure Container (Centered, large) */}
      <div className="relative w-[440px] h-[440px] flex items-center justify-center select-none overflow-visible">
        {/* Circular Path Line (Drawn, thin, very subtle) */}
        <div className="absolute w-[380px] h-[380px] rounded-full border border-neutral-200/30 dark:border-neutral-800/40 pointer-events-none -z-10" />

        {/* Central Large Portrait Avatar with Radial-Mask Vignette Fade (No border, No shadow) */}
        <div
          style={{
            maskImage:
              "radial-gradient(ellipse at 50% 35%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 35%, black 30%, transparent 80%)",
          }}
          className="relative w-64 h-100 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 z-10"
        >
          <img
            src={avatarImg}
            alt="Arijit Banerjee Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          animate={{
            x: pathJava.x,
            y: pathJava.y,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1 bg-white/85 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm text-[10px] font-bold text-neutral-800 dark:text-neutral-200"
        >
            <StackIcon name="java" className="w-3 h-3" />
          <span>Java</span>
        </motion.div>

        {/* Badge 2: Spring */}
        <motion.div
          animate={{
            x: pathSpring.x,
            y: pathSpring.y,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1 bg-white/85 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm text-[10px] font-bold text-neutral-800 dark:text-neutral-200"
        >
            <StackIcon name="spring" className="w-3 h-3" />
          <span>Spring</span>
        </motion.div>

        {/* Badge 3: React */}
        <motion.div
          animate={{
            x: pathReact.x,
            y: pathReact.y,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1 bg-white/85 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm text-[10px] font-bold text-neutral-800 dark:text-neutral-200"
        >
            <StackIcon name="react" className="w-3 h-3" />
          <span>React</span>
        </motion.div>

        {/* Badge 4: Node */}
        <motion.div
          animate={{
            x: pathNode.x,
            y: pathNode.y,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1 bg-white/85 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm text-[10px] font-bold text-neutral-800 dark:text-neutral-200"
        >
            <StackIcon name="nodejs" className="w-3 h-3" />
          <span>Node</span>
        </motion.div>
      </div>
    </div>
  );
}
