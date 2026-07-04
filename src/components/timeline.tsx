import { IconRosetteDiscountCheckFilled as CompletedIcon } from "@tabler/icons-react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

interface timelineData {
  year: number;
  content: {
    title: string;
    date: string;
    description: string;
  }[];
}

export const Timeline = () => {
  const timelineData: timelineData[] = [
    {
      year: 2026,
      content: [
        {
          title: "Built NovaCode online editor",
          date: "Apr 2026 - May 2026",
          description:
            "Developed an AI-powered online code editor with real-time WebSocket execution, custom sandboxed compilers, and Gemini AI code completion.",
        },
        {
          title: "Built Stride Task Manager",
          date: "Feb 2026 - Mar 2026",
          description:
            "Architected a responsive enterprise task manager utilizing Spring Boot REST APIs and React with role-based access control (RBAC).",
        },
      ],
    },
    {
      year: 2025,
      content: [
        {
          title: "Joined ShopCardd as Full Stack Intern",
          date: "Jun 2025 - Feb 2026",
          description:
            "Began my internship as a Java Full Stack Developer, building SaaS solutions, integrating 15+ secure RESTful APIs, and optimizing front-end performance.",
        },
        {
          title: "B.Tech CSE Graduation",
          date: "July 2025",
          description:
            "Graduated with a Bachelor of Technology in Computer Science and Engineering from Domkal Institute of Engineering and Technology (7.96 CGPA).",
        },
      ],
    },
    {
      year: 2024,
      content: [
        {
          title: "DSA & Problem Solving",
          date: "Oct 2024",
          description:
            "Solved 100+ problems across HackerRank and GeeksforGeeks, focusing on Arrays, Strings, and Collections. Earned HackerRank Intermediate Problem Solving certification.",
        },
        {
          title: "Web Development Training",
          date: "Mar 2024",
          description:
            "Completed an intensive Web Development Course (Udemy), learning modern React, JavaScript, and database management.",
        },
      ],
    },
    {
      year: 2021,
      content: [
        {
          title: "Higher Secondary Certificate (HSC)",
          date: "Graduated: 2021",
          description:
            "Graduated high school with a focus on science and mathematics from Sainthia Gitanjali Public School (75%).",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center px-4 md:px-6 shadow-section-inset">
      <SectionHeading>Timeline of Achievements</SectionHeading>
 
      <div className="mt-4 flex w-full flex-col items-start justify-center pl-2">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-6 w-full">
            <motion.h3
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="shadow-aceternity dark:shadow-aceternity-dark w-fit rounded-md bg-neutral-200/50 dark:bg-neutral-800 px-2 py-0.5 text-sm font-bold text-black dark:text-white"
            >
              {item.year}
            </motion.h3>
            {item.content.map((content, contentIndex) => (
              <div
                key={contentIndex}
                className="mt-4 flex w-full items-center justify-between pl-4"
              >
                <div className="flex flex-col items-start gap-1">
                  <div className="text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
                    <CompletedIcon size={16} className="text-zinc-700 dark:text-zinc-300" />
                    <motion.h4
                      initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.5, delay: contentIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="text-sm text-neutral-900 dark:text-neutral-100 font-semibold"
                    >
                      {content.title}
                    </motion.h4>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: contentIndex * 0.15 }}
                    viewport={{ once: true }}
                    className="text-neutral-500 dark:text-neutral-400 max-w-lg pl-6 text-xs"
                  >
                    {content.description}
                  </motion.p>
                </div>
                <div>
                  <p className="text-neutral-400 dark:text-neutral-500 hidden md:block text-xs font-mono">
                    {content.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

