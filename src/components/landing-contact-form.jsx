import {
  IconMail,
  IconBrandLinkedin,
  IconPhone,
  IconBrandX,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function LandingContactForm() {
  const socialLinks = [
    {
      name: "Email",
      icon: IconMail,
      href: "mailto:arijitbanerjee873@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/banerjee-arijit/",
    },
    {
      name: "Phone",
      icon: IconPhone,
      href: "tel:+916296729793",
    },
    {
      name: "X (Twitter)",
      icon: IconBrandX,
      href: "https://x.com/ArijitBane24217",
    },
    {
      name: "GitHub",
      icon: IconBrandGithub,
      href: "https://github.com/banerjee-arijit",
    },
  ];

  return (
    <section
      id="contact"
      className="border-x border-t border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-none"
    >
      {/* Panel Header matching Image 5 */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 py-2.5 sm:py-3">
        <h2 className="text-[1.85rem] sm:text-[2.1rem] font-semibold tracking-tight text-neutral-900 dark:text-white font-display">
          Connect
        </h2>
      </header>

      <div className="p-4 sm:p-6 space-y-6">
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          I am actively seeking software engineering opportunities. Feel free to
          reach out anytime via email or socials!
        </p>

        <div className="flex flex-wrap gap-2.5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={
                link.name !== "Email" && link.name !== "Phone"
                  ? "_blank"
                  : undefined
              }
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <link.icon size={16} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
