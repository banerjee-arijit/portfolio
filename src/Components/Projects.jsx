import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Filter,
  Zap,
  Palette,
  ShoppingCart,
  Users,
  Calendar,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const titleRef = useScrollReveal();
  const filtersRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const projects = [
    {
      id: 1,
      title: "NovaBid - Real Time Auction",
      description:
        "NovaBid is a modern real-time auction platform with secure user authentication powered by Supabase. It offers a sleek UI and enables users to place live bids in a fast, interactive environment.",
      image:
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind", "Supabase"],
      category: "Full-Stack",
      github: "https://github.com/banerjee-arijit/NovaBids_Auctions",
      demo: "https://nova-bids-auctions.vercel.app/",
      features: [
        "Secure authentication with Supabase",
        "Real-time auction and bidding",
        "Modern and responsive user interface",
      ],
      icon: <Zap className="text-blue-600 dark:text-blue-400" size={24} />,
    },
    {
      id: 2,
      title: "Drivio - Uber Clone",
      description:
        "Drivio is a feature-rich ride-sharing application with secure login, role-based access for drivers and users, an OTP-based login system, and integrated real-time vehicle tracking.",
      image:
        "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Google Maps API",
      ],
      category: "Full-Stack",
      github: "http://github.com/banerjee-arijit/Drivio",
      demo: "https://drivio-omega.vercel.app/",
      features: [
        "Secure authentication system",
        "Role-based driver and user functionality",
        "OTP-based login flow",
        "Live vehicle tracking system",
      ],
      icon: (
        <ShoppingCart
          className="text-green-600 dark:text-green-400"
          size={24}
        />
      ),
    },
    {
      id: 3,
      title: "Operation Scheduler Application",
      description:
        "A full-fledged operation scheduling platform where authenticated users can manage operations, book ambulances, and consult doctors. Designed with role-based access and real-time schedule management.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Redux", "Tailwind", "Firebase", "Clerk"],
      category: "Full-Stack",
      github: "https://github.com/banerjee-arijit/Operation_Scheduler-",
      demo: "https://operation-scheduler.vercel.app/",
      features: [
        "Secure authentication system",
        "Role-based access for doctors and users",
        "Schedule and manage operations",
        "Ambulance booking system",
        "Consult a doctor module",
      ],
      icon: (
        <Calendar className="text-purple-600 dark:text-purple-400" size={24} />
      ),
    },
    {
      id: 4,
      title: "Real Time Chat Application",
      description:
        "A clean and responsive real-time chat application built with Clerk authentication. It enables seamless communication with real-time updates in a beautifully designed modern interface.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind", "Firebase", "Clerk"],
      category: "Full-Stack",
      github: "http://github.com/banerjee-arijit/ChatRoomHub",
      demo: "https://my-project-nu-murex.vercel.app/",
      features: [
        "Secure authentication with Clerk",
        "Real-time chat messaging",
        "Modern and responsive user interface",
      ],
      icon: (
        <Users className="text-yellow-600 dark:text-yellow-400" size={24} />
      ),
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing clean design principles with smooth animations and optimized performance.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind v4", "JavaScript"],
      category: "Frontend",
      github: "#",
      demo: "#",
      features: ["Smooth animations", "SEO optimized", "Mobile-first design"],
      icon: <Palette className="text-teal-600 dark:text-teal-400" size={24} />,
    },
  ];

  const filters = ["All", "Frontend", "Full-Stack"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in frontend and full-stack development.
          </p>
        </div>

        <div
          ref={filtersRef}
          className="flex justify-center mb-12 scroll-reveal"
        >
          <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <Filter className="text-gray-500 dark:text-gray-400" size={20} />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 scroll-reveal"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex-1 justify-center"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="text-center mt-12 scroll-reveal">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/banerjee-arijit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
