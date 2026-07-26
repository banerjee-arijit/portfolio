import type { Experience } from "../types/experience";
import shopcardLogo from "../assets/shopcardd logo.png";

export const experience: Experience[] = [
  {
    title: "Frontend Developer Intern",
    company: "ShopCard",
    location: "Kolkata, India",
    date: "June 2025 - February 2026",
    description:
      "Developed scalable frontend SaaS interfaces, including an Office Management System and Delivery Management System supporting over 200 daily operations, utilizing React.js and TypeScript. Integrated 15+ RESTful APIs to power robust delivery tracking workflows, collaborating with backend teams to ensure zero data loss during state synchronization. Boosted UI/UX performance by 30% across both web applications by implementing React lazy-loading, state memoization, and efficient component rendering techniques. Drove cross-functional collaboration, participating in 20+ code reviews and maintaining Git version control to accelerate deployment cycles by 15%.",
    companyLogo: shopcardLogo,
    techStack: [
      {
        name: "React.js",
        iconName: "react",
      },
      {
        name: "TypeScript",
        iconName: "typescript",
      },
      {
        name: "Git",
        iconName: "git",
      },
    ],
  },
];

