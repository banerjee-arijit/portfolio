import React from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h1 className="text-5xl lg:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Arijit Banerjee
          </span>
        </h1>

        <p className="text-xl lg:text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Developer who loves clean code and creative problem-solving.
        </p>

        <p className="text-lg lg:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Building responsive web experiences with 6 months of hands-on
          development experience. Always curious, always learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            onClick={scrollToContact}
            className="px-8 py-6 lg:px-6 lg:py-5 text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Let's Connect
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=1IlqizrggJy8JikoJQb1Va_yJQ3bYuVMS"
            download
          >
            <button
              variant="outline"
              className="px-8 py-4 lg:px-6 lg:py-5 border-gray-300 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
