import {
  IconMail,
  IconBrandLinkedin,
  IconPhone,
  IconBrandX,
  IconBrandGithub,
} from "@tabler/icons-react";
import SectionHeading from "./section-heading";
import { Subheading } from "./subheading";

export default function LandingContactForm() {
  const socialLinks = [
    {
      name: "Email",
      icon: IconMail,
      href: "mailto:arijitbanerjee873@gmail.com",
      hoverClass: "hover:text-red-500 hover:scale-110",
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/banerjee-arijit/",
      hoverClass: "hover:text-blue-500 hover:scale-110",
    },
    {
      name: "Phone",
      icon: IconPhone,
      href: "tel:+916296729793",
      hoverClass: "hover:text-emerald-500 hover:scale-110",
    },
    {
      name: "X (Twitter)",
      icon: IconBrandX,
      href: "https://x.com/ArijitBane24217",
      hoverClass:
        "hover:text-neutral-900 dark:hover:text-white hover:scale-110",
    },
    {
      name: "GitHub",
      icon: IconBrandGithub,
      href: "https://github.com/banerjee-arijit",
      hoverClass:
        "hover:text-neutral-900 dark:hover:text-white hover:scale-110",
    },
  ];

  return (
    <div
      id="contact"
      className="my-4 px-4 md:px-6 py-6 border-t border-neutral-200/20"
    >
      <SectionHeading>let's connect</SectionHeading>
      <Subheading className="md:pl-0">
        I am actively seeking full-time Software Engineering roles where I can
        build scalable systems, optimize performance, and collaborate with great
        teams. If you are hiring, want to discuss opportunities, or just want to
        connect—reach out!
      </Subheading>

      <div className="flex items-center gap-6 mt-6 select-none">
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
            title={link.name}
            className={`text-neutral-400 dark:text-neutral-500 transition-all duration-300 ${link.hoverClass}`}
          >
            <link.icon size={22} />
          </a>
        ))}
      </div>
    </div>
  );
}
