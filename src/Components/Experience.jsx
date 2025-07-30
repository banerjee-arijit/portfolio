import React from "react";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Experience() {
  const titleRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </div>

        <div ref={cardRef} className="max-w-4xl mx-auto scroll-reveal-scale">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8V32H16V20H24V32H32V8H24V16H16V8H8Z"
                      fill="white"
                    />
                    <circle cx="20" cy="20" r="3" fill="white" />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Frontend Developer
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                      <Building2 className="w-4 h-4" />
                      <span>Unified Mentor</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">6 Months</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Worked on building responsive user interfaces, optimized
                  performance, and collaborated in a team environment. Gained
                  hands-on experience with modern frontend technologies and best
                  practices.
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Built responsive web applications using React and modern
                        CSS frameworks
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Optimized application performance and improved user
                        experience
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Collaborated with cross-functional teams using Git and
                        modern development workflows
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "JavaScript",
                      "Tailwind v4",
                      "Git",
                      "VS Code",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
