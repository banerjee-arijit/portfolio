import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-48 lg:h-48 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 lg:w-48 lg:h-48 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-overlay blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
      >
        <motion.div
          custom={1}
          variants={fadeUp}
          className="relative mx-auto w-32 h-32 lg:w-24 lg:h-24 mb-8"
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            A
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 animate-pulse opacity-20"></div>
        </motion.div>

        <motion.div custom={2} variants={fadeUp}>
          <h1 className="text-5xl lg:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Arijit Banerjee
            </span>
          </h1>
        </motion.div>

        <motion.p
          custom={3}
          variants={fadeUp}
          className="text-xl lg:text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Developer who loves clean code and creative problem-solving.
        </motion.p>

        <motion.p
          custom={4}
          variants={fadeUp}
          className="text-lg lg:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Building responsive web experiences with 6 months of hands-on
          development experience. Always curious, always learning.
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 lg:px-6 lg:py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
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
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 lg:px-6 lg:py-3 rounded-full font-semibold border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        custom={6}
        variants={fadeUp}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
