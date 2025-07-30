import React from "react";
import {
  Palette,
  Server,
  Database,
  Code2,
  Braces,
  Layers,
  Terminal,
  GitBranch,
  Zap,
  Bot,
  Globe,
  FileText,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Skills=()=> {
  const titleRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const toolsRef = useScrollReveal();

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="text-blue-600 dark:text-blue-400" size={28} />,
      color: "blue",
      skills: [
        { name: "React", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "VS Code", level: 86 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-green-600 dark:text-green-400" size={28} />,
      color: "green",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
      ],
    },
    {
      title: "Database",
      icon: (
        <Database className="text-purple-600 dark:text-purple-400" size={28} />
      ),
      color: "purple",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 },
      ],
    },
    {
      title: "Other",
      icon: (
        <Code2 className="text-orange-600 dark:text-orange-400" size={28} />
      ),
      color: "orange",
      skills: [
        { name: "Core Java", level: 75 },
        { name: "Git", level: 80 },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
      green:
        "from-green-500 to-green-600 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
      purple:
        "from-purple-500 to-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
      orange:
        "from-orange-500 to-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    };
    return colors[color];
  };

  const getProgressColor = (color) => {
    const colors = {
      blue: "bg-gradient-to-r from-blue-500 to-blue-600",
      green: "bg-gradient-to-r from-green-500 to-green-600",
      purple: "bg-gradient-to-r from-purple-500 to-purple-600",
      orange: "bg-gradient-to-r from-orange-500 to-orange-600",
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with during my
            journey as a developer.
          </p>
        </div>

        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-reveal"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl border ${getColorClasses(
                category.color
              )} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(
                          category.color
                        )} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={toolsRef} className="mt-16 text-center scroll-reveal">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tools I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <Braces size={32} />,
                name: "VS Code",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: <GitBranch size={32} />,
                name: "Git",
                color: "text-orange-600 dark:text-orange-400",
              },
              {
                icon: <Terminal size={32} />,
                name: "Wrap",
                color: "text-gray-600 dark:text-gray-400",
              },
              {
                icon: <Layers size={32} />,
                name: "Figma",
                color: "text-purple-600 dark:text-purple-400",
              },
              {
                icon: <Globe size={32} />,
                name: "Postman",
                color: "text-green-600 dark:text-green-400",
              },
              {
                icon: <Bot size={32} />,
                name: "ChatGPT",
                color: "text-teal-600 dark:text-teal-400",
              },
              {
                icon: <Zap size={32} />,
                name: "AI Tools",
                color: "text-indigo-600 dark:text-indigo-400",
              },
              {
                icon: <FileText size={32} />,
                name: "Notion",
                color: "text-gray-700 dark:text-gray-300",
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <div className={tool.color}>{tool.icon}</div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills