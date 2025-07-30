import React from "react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="relative mx-auto w-32 h-32 mb-8 animate-scale-in">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              A
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 animate-pulse opacity-20"></div>
          </div>

          <div
            className="space-y-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight animate-text-reveal">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent animate-gradient-text">
                Arijit Banerjee
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Developer who loves clean code and creative problem-solving.
            </p>
          </div>

          <p
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Building responsive web experiences with 6 months of hands-on
            development experience. Always curious, always learning.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Let's Connect
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1IlqizrggJy8JikoJQb1Va_yJQ3bYuVMS"
              download
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-in"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
