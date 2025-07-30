import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const FloatingContact=()=> {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80 transform transition-all duration-300 origin-bottom-right">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  Arijit
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Available
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mb-4">
              <div className="text-sm text-gray-900 dark:text-white mb-1">
                Hi there! 👋
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                I'm excited to connect with you. Whether you have a project in
                mind or just want to chat about web development, feel free to
                reach out!
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Start Conversation
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center relative"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}

        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        )}
      </button>
    </div>
  );
}
export default FloatingContact