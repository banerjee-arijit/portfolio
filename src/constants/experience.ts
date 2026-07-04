import type { Experience } from "../types/experience";

export const experience: Experience[] = [
  {
    title: "Java Full Stack Developer Intern",
    company: "ShopCardd",
    location: "Kolkata, India",
    date: "June 2025 - February 2026",
    description:
      "Developed scalable full-stack SaaS solutions, including an Office Management System and Delivery Management System supporting over 200 daily operations. Designed and integrated 15+ secure RESTful APIs to power robust delivery tracking, testing comprehensively with Postman to ensure zero data loss. Boosted UI/UX performance by 30% through React lazy-loading, state memoization, and efficient component rendering. Collaborated in an Agile/Scrum framework, participating in 20+ code reviews and using Git version control.",
    companyLogo: "/experience/shopcardd.png",
    techStack: [
      {
        name: "Java",
        iconName: "java",
      },
      {
        name: "Spring Boot",
        iconName: "spring",
      },
      {
        name: "React.js",
        iconName: "react",
      },
      {
        name: "Node.js",
        iconName: "nodejs",
      },
      {
        name: "Postman",
        iconName: "postman",
      },
      {
        name: "Git",
        iconName: "git",
      },
    ],
  },
];

