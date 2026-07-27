import Container from "../container";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-neutral-200 dark:border-neutral-800 relative bottom-10">
          <p className="text-xs text-neutral-500">
            Built with love by Arijit Banerjee
          </p>
          <div className="flex items-center flex-wrap gap-4 select-none">
            <a href="mailto:arijitbanerjee873@gmail.com" title="Email">
              <IconMail className="h-4.5 w-4.5 text-neutral-500 hover:text-red-500 dark:hover:text-red-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/arijitbanerjee873"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <IconBrandLinkedin className="h-4.5 w-4.5 text-neutral-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
            </a>
            <a href="tel:+918768085449" title="Phone">
              <IconPhone className="h-4.5 w-4.5 text-neutral-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href="https://x.com/arijitb_873"
              target="_blank"
              rel="noreferrer"
              title="X (Twitter)"
            >
              <IconBrandX className="h-4.5 w-4.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com/arijitbanerjee873"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <IconBrandGithub className="h-4.5 w-4.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" />
            </a>
            <a
              href="https://instagram.com/arijitbanerjee873"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <IconBrandInstagram className="h-4.5 w-4.5 text-neutral-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
