"use client";

import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = ["Software Engineer", "Web Developer", "DevOps Engineer"];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (text.length < currentPhrase.length) {
        const timeoutId = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
      }
    } else {
      if (text.length > 0) {
        const timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeoutId);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [text, currentPhraseIndex, isTyping]);

  return (
    <div className="w-full mb-4">
      <div className="text-2xl font-mono text-yellow-400">
        {text}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
};

export default TypingAnimation;
