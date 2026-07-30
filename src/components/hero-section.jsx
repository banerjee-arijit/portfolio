import whiteThemePhoto from "../assets/whiteThemePhoto.jpg";
import blackThemePhoto from "../assets/blackThemePhoto.jpg";
import HelloTypewriter from "./hello-typewriter";

export default function HeroSection({ theme }) {
  const currentAvatar = theme === "dark" ? blackThemePhoto : whiteThemePhoto;

  return (
    <section className="border-x border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
      <div className="grid gap-6 px-4 py-6 sm:px-6 sm:py-8 md:grid-cols-[176px_minmax(0,1.45fr)] md:items-stretch md:gap-8 md:px-4 md:py-0">
        {/* Desktop Portrait Avatar with exact outer border overlay and dashed frame */}
        <div className="relative hidden h-full md:flex md:items-start">
          <div className="relative mr-auto w-full max-w-[176px] p-2">
            <div
              className="absolute inset-0 border-l border-r border-dashed border-neutral-300/75 dark:border-neutral-700/75"
              aria-hidden="true"
            />
            <img
              src={currentAvatar}
              alt="Portrait of Arijit Banerjee"
              width="800"
              height="1000"
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex min-h-full flex-col justify-center space-y-4">
          <div className="space-y-2.5">
            {/* Animated 3-language greeting typewriter */}
            <div className="h-5 overflow-hidden flex items-center">
              <HelloTypewriter />
            </div>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h1 className="font-display text-[1.4rem] leading-none font-semibold tracking-[-0.045em] text-neutral-900 dark:text-white sm:text-[1.7rem] md:text-[2rem]">
                Arijit Banerjee
              </h1>
            </div>

            <p className="max-w-lg text-base leading-6 font-normal tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-[1.05rem]">
              I build full-stack web applications that make digital products
              feel clear, fast, and finished.
            </p>
          </div>

          {/* Mobile Avatar View */}
          <div className="flex justify-start md:hidden">
            <div className="relative w-full max-w-[190px] p-1.5">
              <div
                className="absolute inset-0 border border-dashed border-neutral-300/60 dark:border-neutral-700/60"
                aria-hidden="true"
              />
              <img
                src={currentAvatar}
                alt="Portrait of Arijit Banerjee"
                width="800"
                height="1000"
                className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-center ring-1 ring-neutral-300 dark:ring-neutral-700 ring-offset-[2px] ring-offset-white dark:ring-offset-black select-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Availability Status Badge */}
          <div className="pb-1">
            <div className="inline-flex items-center gap-2 font-sans text-xs leading-none text-neutral-500 dark:text-neutral-400">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>Open to new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
