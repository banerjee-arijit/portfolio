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
import novabidImg from "../assets/novabid.png";
import baatcheetImg from "../assets/baatcheet.jpg";


export const projects = [
  {
    title: "NovaCode – AI-Powered Online Code Editor",
    year: "2026",
    image: novacodeImg,
    href: "https://novabid.vercel.app/editor",
    githubUrl: "https://github.com/banerjee-arijit/NovaCode",
    description:
      "A high-performance online code editor built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) along with TypeScript, supporting robust multilingual compilation and real-time execution for concurrent users via WebSockets. Integrated the Gemini AI API to deliver intelligent code completion, ghost-text suggestions, and automated debugging.",
    techStack: [
      { name: "React.js", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Node.js", icon: NodeJsIcon },
      { name: "Express.js", icon: ExpressIcon },
      { name: "MongoDB", icon: MongoDbIcon },
      { name: "Gemini AI", icon: GeminiIcon },
    ],
  },
  {
    title: "Stride – Full Stack Task Management System",
    year: "2026",
    image: strideImg,
    href: "https://stride-rho-eosin.vercel.app/",
    githubUrl: "https://github.com/banerjee-arijit/Stride",
    description:
      "A responsive full-stack enterprise task tracker utilizing Spring Boot and RESTful APIs for backend services to manage 500+ tasks, alongside React.js and TypeScript for the interface. Implemented secure role-based access control (RBAC) and JWT authentication to manage team collaboration and safeguard sensitive internal workflows.",
    techStack: [
      { name: "Java", icon: JavaIcon },
      { name: "Spring Boot", icon: SpringBootIcon },
      { name: "React.js", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "MySQL", icon: MySqlIcon },
    ],
  },
  {
    title: "BaatCheet – Online Messaging Application",
    year: "2025",
    image: baatcheetImg,
    githubUrl: "https://github.com/banerjee-arijit/BaatCheet-",
    description:
      "A full-stack Java real-time messaging application engineered with Spring Boot, WebSockets, and RESTful APIs to deliver low-latency instant chat communication. Built with a responsive React.js & TypeScript frontend, layered Java backend services, and MySQL database management to handle concurrent user sessions securely.",
    techStack: [
      { name: "Java", icon: JavaIcon },
      { name: "Spring Boot", icon: SpringBootIcon },
      { name: "React.js", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "MySQL", icon: MySqlIcon },
    ],
  },
  {
    title: "NovaBids – Online Auction Platform",
    year: "2025",
    image: novabidImg,
    href: "https://nova-bids-auctions.vercel.app/",
    githubUrl: "https://github.com/banerjee-arijit/NovaBids_Auctions",
    description:
      "A full-stack web auction platform featuring real-time bidding, automated item listing workflows, live countdown timers, and interactive dashboard analytics. Built using React.js, TypeScript, Node.js, Express, and MongoDB with secure session management and responsive Tailwind CSS styling.",
    techStack: [
      { name: "React.js", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Node.js", icon: NodeJsIcon },
      { name: "Express.js", icon: ExpressIcon },
      { name: "MongoDB", icon: MongoDbIcon },
    ],
  },
];
