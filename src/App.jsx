import React from "react";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import About from './Components/About';
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import FloatingContact from "./Components/FloatingContact";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <FloatingContact />
    </div>
  );
}

export default App;
