export default function BackgroundAmbient() {
  return (
    <>
      {/* Background Glowing Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 dark:bg-blue-900/5 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neutral-400/5 dark:bg-neutral-900/5 blur-[120px] animate-float-reverse" />
        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-300/3 dark:bg-neutral-900/5 blur-[100px] animate-float-slow" />
      </div>

      {/* Fixed Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-15 bg-noise opacity-[0.015] dark:opacity-[0.025] bg-repeat" />
    </>
  );
}
