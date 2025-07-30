import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact=()=> {
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const formRef = useScrollReveal();
  const footerRef = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: currentTime,
    };

    emailjs
      .send(
        "service_x2qeep9", // ✅ replace with your actual service ID
        "template_zdgrojg", // ✅ replace with your actual template ID
        templateParams,
        "SZEVnqt7QqyZEni28" // ✅ replace with your public key
      )
      .then(
        (result) => {
          toast.success("✅ Message sent! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("❌ Oops! Message not sent. Try again later.");
          console.error("Send error:", error.text);
        }
      );
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/banerjee-arijit/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/banerjee-arijit",
      color:
        "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:arijitbanerjee873@gmail.com",
      color: "bg-red-600 hover:bg-red-700",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <ToastContainer position="bottom-right" autoClose={4000} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm available for remote or hybrid work anywhere in India. Reach out
            if you'd like to collaborate or just want to say hi!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div ref={contentRef} className="space-y-8 scroll-reveal-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Whether you have a question, want to collaborate, or just want
                to say hello — I'll do my best to get back to you soon!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    arijitbanerjee873@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Response Time
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Usually within 24 hours
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Remote / Hybrid - Anywhere in India
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-lg transition-all duration-200 transform hover:scale-110 shadow-md hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg scroll-reveal-right"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 resize-none transition-all"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div
          ref={footerRef}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 scroll-reveal"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Thanks for visiting. Let's build something cool together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact