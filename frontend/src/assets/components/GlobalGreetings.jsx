import React, { useState, useEffect } from "react";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";

const GlobalGreetings = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [showLanguage, setShowLanguage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const greetings = [
    { text: "Hello", language: "English" },
    { text: "Hola", language: "Spanish" },
    { text: "Bonjour", language: "French" },
    { text: "Hallo", language: "German" },
    { text: "Ciao", language: "Italian" },
    { text: "こんにちは", language: "Japanese" },
    { text: "안녕하세요", language: "Korean" },
    { text: "你好", language: "Chinese" },
    { text: "Olá", language: "Portuguese" },
    { text: "Привет", language: "Russian" },
    { text: "Здраво", language: "Serbian" },
    { text: "Merhaba", language: "Turkish" },
    { text: "שלום", language: "Hebrew" },
    { text: "नमस्ते", language: "Hindi" },
    { text: "Γεια σου", language: "Greek" },
    { text: "مرحبا", language: "Arabic" },
    { text: "Sawubona", language: "Zulu" },
    { text: "Hej", language: "Swedish" },
  ];

  const typingSpeed = 120;
  const deletingSpeed = 80;
  const pauseBetweenWords = 2500;
  const pauseAfterDeleting = 400;

  useEffect(() => {
    const greeting = greetings[currentIndex];

    const timeout = setTimeout(
      () => {
        if (isTyping) {
          if (charIndex < greeting.text.length) {
            setCurrentText((prev) => prev + greeting.text.charAt(charIndex));
            setCharIndex((prev) => prev + 1);
          } else {
            setShowLanguage(true);
            setIsTyping(false);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
            if (charIndex === greeting.text.length) {
              setShowLanguage(false);
            }
          } else {
            setIsTyping(true);
            setCurrentIndex((prev) => (prev + 1) % greetings.length);
          }
        }
      },
      isTyping
        ? charIndex < greeting.text.length
          ? typingSpeed
          : pauseBetweenWords
        : charIndex > 0
        ? deletingSpeed
        : pauseAfterDeleting
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, charIndex]);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center font-inter">
      {/* Grid Background -> drop */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient Orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 z-[2] blur-[100px] -top-[200px] -right-[200px] animate-float"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          transform: `translate(${mousePosition.x * 20}px, ${
            mousePosition.y * 20
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 z-[2] blur-[100px] -bottom-[200px] -left-[200px] animate-float-reverse"
        style={{
          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          transform: `translate(${mousePosition.x * 40}px, ${
            mousePosition.y * 40
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute w-[400px] h-[400px] top-[10%] right-[5%] rounded-full border border-white/5 z-[2] animate-float-slow" />
      <div
        className="absolute w-[300px] h-[300px] bottom-[15%] left-[8%] rounded-full border border-white/5 z-[2] animate-float-slow"
        style={{ animationDelay: "10s" }}
      />

      {/* Main Container */}
      <div className="relative z-10 text-center px-8 sm:px-12 md:px-16 py-20 max-w-4xl w-[90%] animate-fade-in">
        {/* Subtitle */}
        <div className="text-white/50 text-sm tracking-[3px] uppercase mb-12 sm:mb-16 font-normal">
          Global Communications
        </div>

        {/* Typing Container */}
        <div className="h-[80px] sm:h-[100px] md:h-[140px] flex items-center justify-center mb-10">
          <div className="relative">
            <span className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight">
              {currentText}
            </span>
            {/* Cursor */}
            <span
              className="inline-block w-[3px] h-[0.75em] bg-white/90 animate-blink ml-1 align-middle"
              style={{ transform: "translateY(-0.125em)" }}
            />
          </div>
        </div>

        {/* Language Name */}
        <div
          className={`text-white/40 text-base tracking-wide font-normal min-h-[24px] mb-12 transition-opacity duration-400 ${
            showLanguage ? "opacity-100" : "opacity-0"
          }`}
        >
          {greetings[currentIndex].language}
        </div>

        {/* Description */}
        <div className="text-white/60 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto tracking-wide">
          Bridging cultures and connecting people across continents through the
          universal power of greeting. One simple word that opens infinite
          possibilities.
        </div>

        {/* Accent Line */}
        <div className="relative w-[60px] h-[2px] mx-auto mt-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div
            className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer"
            style={{ left: "-100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalGreetings;
