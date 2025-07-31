import React from "react";
import {
  ExternalLink,
  Github,
  Zap,
  Palette,
  ShoppingCart,
  Users,
  Calendar,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Projects = () => {
  const titleRef = useScrollReveal();
  const filtersRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const filters = ["All", "Frontend", "Full-Stack"];

  const projects = [
    {
      id: 1,
      title: "NovaBid - Real Time Auction",
      description:
        "NovaBid is a modern real-time auction platform with secure user authentication powered by Supabase.",
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
        "Drivio is a ride-sharing app with secure login, OTP system, and vehicle tracking.",
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
        "Secure authentication",
        "Role-based access",
        "OTP login",
        "Live vehicle tracking",
      ],
      icon: <ShoppingCart className="text-green-600 dark:text-green-400" size={24} />,
    },
    {
      id: 3,
      title: "Operation Scheduler",
      description:
        "A platform for managing operations, ambulance booking, and doctor consults.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Redux", "Tailwind", "Firebase", "Clerk"],
      category: "Full-Stack",
      github: "https://github.com/banerjee-arijit/Operation_Scheduler-",
      demo: "https://operation-scheduler.vercel.app/",
      features: [
        "Role-based access",
        "Schedule operations",
        "Ambulance booking",
        "Consult doctors",
      ],
      icon: <Calendar className="text-purple-600 dark:text-purple-400" size={24} />,
    },
    {
      id: 4,
      title: "Real Time Chat App",
      description:
        "Responsive real-time chat application with Clerk auth and modern UI.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind", "Firebase", "Clerk"],
      category: "Full-Stack",
      github: "http://github.com/banerjee-arijit/ChatRoomHub",
      demo: "https://my-project-nu-murex.vercel.app/",
      features: [
        "Secure Clerk auth",
        "Real-time chat",
        "Responsive UI",
      ],
      icon: <Users className="text-yellow-600 dark:text-yellow-400" size={24} />,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing projects with smooth animations.",
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

  return (
    <section id="projects" className="py-14 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of my best frontend and full-stack work.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div ref={filtersRef} className="flex justify-center mb-12 scroll-reveal">
            <TabsList className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-2 flex gap-2">
              {filters.map((filter) => (
                <TabsTrigger
                  key={filter}
                  value={filter}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white px-4 py-2 rounded-md font-medium"
                >
                  {filter}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {filters.map((filter) => {
            const filtered =
              filter === "All" ? projects : projects.filter((p) => p.category === filter);

            return (
              <TabsContent key={filter} value={filter}>
                <div
                  ref={projectsRef}
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 scroll-reveal"
                >
                  {filtered.map((project) => (
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
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
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
                          <Button asChild variant="outline" className="flex-1">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                              <Github size={16} />
                              Code
                            </a>
                          </Button>
                          <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-600 text-white flex-1 hover:shadow-lg transition-all duration-200">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                              <ExternalLink size={16} />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        <div ref={ctaRef} className="text-center mt-12 scroll-reveal">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to see more of my work?
          </p>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            <a
              href="https://github.com/banerjee-arijit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
