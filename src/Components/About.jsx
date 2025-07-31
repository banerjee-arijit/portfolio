import React from "react";
import { Download, Code, Heart, Coffee } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import image from "../assets/profile_photo.png";

const About=()=> {
  const titleRef = useScrollReveal();
  const imageRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const factsRef = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative scroll-reveal-left">
            <div className="relative mx-auto lg:mx-0 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Arijit - Frontend Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6 scroll-reveal-right">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey Into Tech
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I’m a software developer who loves turning ideas into clean,
                interactive digital experiences. What started as a curiosity
                about how websites work quickly grew into a passion for building
                things with code.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At{" "}
                <a
                  href="https://www.unifiedmentor.com/"
                  className="font-semibold text-blue-600 dark:text-blue-400"
                >
                  Unified Mentor
                </a>
                , I worked on real-world projects, crafting responsive
                interfaces with React and Tailwind CSS. It helped me understand
                the value of clean code, teamwork, and user-focused design.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I’m always exploring modern technologies and tools that help
                build smarter, faster, and more intuitive applications. I enjoy
                learning new things, solving real-world problems, and creating
                digital products that are both useful and enjoyable for users.
              </p>
            </div>

            <div
              ref={factsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 scroll-reveal-scale"
            >
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Clean Code
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <Heart className="text-teal-600 dark:text-teal-400" size={24} />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Modern Tools
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <Coffee
                  className="text-yellow-600 dark:text-yellow-400"
                  size={24}
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Full-Stack
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-6">
              <a
                href="https://drive.google.com/uc?export=download&id=1IlqizrggJy8JikoJQb1Va_yJQ3bYuVMS"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About