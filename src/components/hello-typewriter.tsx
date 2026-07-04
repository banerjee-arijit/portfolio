import { useState, useEffect } from "react";

const HELLO_WORDS = [
  "Hello, I am",      // English
  "नमस्ते, मैं हूँ",   // Hindi
  "নমস্কার, আমি",     // Bengali
];

export default function HelloTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    const currentWord = HELLO_WORDS[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        const nextText = currentWord.slice(0, currentText.length + 1);
        setCurrentText(nextText);
        setSpeed(120);

        if (nextText === currentWord) {
          // Pause before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
            setSpeed(80);
          }, 1500);
          return;
        }
      } else {
        // Deleting
        const nextText = currentWord.slice(0, currentText.length - 1);
        setCurrentText(nextText);
        setSpeed(60);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % HELLO_WORDS.length);
          setSpeed(200);
          return;
        }
      }

      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, speed]);

  return (
    <div className="h-5 flex items-center text-xs md:text-sm font-bold tracking-wider text-neutral-950 dark:text-neutral-50 uppercase mb-1">
      <span>{currentText}</span>
      <span className="w-[2px] h-3.5 bg-neutral-950 dark:bg-neutral-50 animate-pulse ml-1 inline-block" />
    </div>
  );
}
