import type { Project } from "../types/project";
import {
  JavaIcon,
  SpringBootIcon,
  ReactIcon,
  TypeScriptIcon,
  MySqlIcon,
  GeminiIcon,
  NodeJsIcon,
  ExpressIcon,
  MongoDbIcon,
} from "../components/brand-svgs";
import novacodeImg from "../assets/novacode.png";
import strideImg from "../assets/stride.png";

export const projects: Project[] = [
  {
    title: "NovaCode – AI-Powered Online Code Editor",
    image: novacodeImg,
    href: "https://novabid.vercel.app/editor",
    description:
      "A high-performance online code editor built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) along with TypeScript, supporting robust multilingual compilation and real-time execution for concurrent users via WebSockets. Integrated the Gemini AI API to deliver intelligent code completion, ghost-text suggestions, and automated debugging, reducing average developer debugging time by 40%. Constructed secure authentication pipelines and interactive dashboards to seamlessly manage user sessions and collaborative coding environments.",
    techStack: [
      {
        name: "React.js",
        icon: ReactIcon,
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
      },
      {
        name: "Node.js",
        icon: NodeJsIcon,
      },
      {
        name: "Express.js",
        icon: ExpressIcon,
      },
      {
        name: "MongoDB",
        icon: MongoDbIcon,
      },
      {
        name: "Gemini AI",
        icon: GeminiIcon,
      },
    ],
  },
  {
    title: "Stride – Full Stack Task Management System",
    image: strideImg,
    href: "https://stride-rho-eosin.vercel.app/",
    description:
      "A responsive full-stack enterprise task tracker utilizing Spring Boot and RESTful APIs for backend services to manage 500+ tasks, alongside React.js and TypeScript for the interface. Implemented secure role-based access control (RBAC) and JWT authentication to manage team collaboration and safeguard sensitive internal workflows. Designed a scalable layered backend architecture, utilizing reusable services and optimizing complex MySQL queries to significantly reduce data retrieval times by 25%.",
    techStack: [
      {
        name: "Java",
        icon: JavaIcon,
      },
      {
        name: "Spring Boot",
        icon: SpringBootIcon,
      },
      {
        name: "React.js",
        icon: ReactIcon,
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
      },
      {
        name: "MySQL",
        icon: MySqlIcon,
      },
    ],
  },
];

