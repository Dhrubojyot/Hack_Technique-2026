import React, { useState, useEffect, useRef } from 'react';

const ThemedMacTerminal = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const terminalRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const cursorIntervalRef = useRef(null);

  const aboutText = `
Last login: Sat Feb 15 15:30:24 on console
hacktpi@MacBook-Pro ~ % cat about.txt

Welcome to HackTPI!

About HackTPI:
-------------
HackTPI is not just another hackathon – it's a celebration of innovation,
creativity, and technological brilliance. We bring together the brightest
minds to create, collaborate, and push the boundaries of what's possible.

Key Features:
• 36-hour Intensive Coding Marathon
• Expert Mentorship from Industry Leaders
• Prizes Worth ₹50,000+
• Networking with Tech Enthusiasts
• Swag Kits and Refreshments
• State-of-the-art Facilities

Join us at RCAEC, Kolkata for an unforgettable journey of innovation.
Let's build the future together!

hacktpi@MacBook-Pro ~ % 
`.trim();

  // Function to apply color styling to text
  const colorizeText = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('Welcome to HackTPI')) {
        return `<span class="text-yellow-400 font-bold text-lg md:text-xl">${line}</span>`;
      }
      if (line.includes('About HackTPI:') || line.includes('Key Features:')) {
        return `<span class="text-orange-400">${line}</span>`;
      }
      if (line.includes('hacktpi@MacBook-Pro')) {
        return `<span class="text-blue-400">${line}</span>`;
      }
      if (line.startsWith('•')) {
        return `<span class="text-yellow-400">${line}</span>`;
      }
      return `<span class="text-emerald-400">${line}</span>`;
    }).join('\n');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setText('');
      return;
    }

    let currentIndex = 0;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    if (cursorIntervalRef.current) {
      clearInterval(cursorIntervalRef.current);
    }

    const typeText = () => {
      if (currentIndex < aboutText.length) {
        const colorizedText = colorizeText(aboutText.slice(0, currentIndex + 1));
        setText(colorizedText);
        currentIndex++;
      } else {
        clearInterval(typingIntervalRef.current);
        setIsLoading(false);
      }
    };

    typingIntervalRef.current = setInterval(typeText, 30);
    cursorIntervalRef.current = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingIntervalRef.current);
      clearInterval(cursorIntervalRef.current);
      setText('');
    };
  }, [isVisible, aboutText]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-red-900/50" ref={terminalRef}>
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-red-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-48 md:w-96 h-48 md:h-96 bg-orange-600/20 rounded-full filter blur-3xl translate-x-1/2" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 sm:py-20">
          {/* Header section */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-5xl sm:text-6xl text-white mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Mission & Vision
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
              Discover our mission and vision through the terminal
            </p>
          </div>

          {/* Terminal Container */}
          <div className="max-w-4xl mx-auto perspective-1000">
            <div className="bg-black/95 backdrop-blur-xl rounded-lg overflow-hidden border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              {/* Terminal Header */}
              <div className="bg-[#2D2D2D] px-4 py-3 flex items-center border-b border-black">
                <div className="flex space-x-2">
                  <button className="w-3 h-3 bg-[#FF5F56] rounded-full hover:brightness-90 transition-all duration-150" />
                  <button className="w-3 h-3 bg-[#FFBD2E] rounded-full hover:brightness-90 transition-all duration-150" />
                  <button className="w-3 h-3 bg-[#27C93F] rounded-full hover:brightness-90 transition-all duration-150" />
                </div>
                <div className="mx-auto text-white/80 text-sm font-medium flex items-center gap-2">
                  <img src="/tpi_logo.png" alt="terminal" className="w-6 h-6 opacity-60" />
                  hacktpi -- -zsh -- 80×24
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 sm:p-6 font-mono text-base sm:text-base bg-[#1E1E1E] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] overflow-x-auto">
                <div 
                  className="whitespace-pre-wrap leading-relaxed text-left"
                  dangerouslySetInnerHTML={{ __html: text + (cursorVisible ? '<span class="text-yellow-400 animate-pulse">█</span>' : '') }}
                />

                {/* Loading Animation */}
                {isLoading && (
                  <div className="mt-4">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 animate-progress" />
                    </div>
                    <p className="text-white/80 text-sm mt-2">Loading...</p>
                  </div>
                )}

                {/* Install Animation */}
                {!isLoading && (
                  <div className="mt-4">
                    <div className="text-white/80 text-sm">
                      <p className="text-green-400">✔ Installation complete!</p>
                      <p className="text-yellow-400">➜ Running post-install scripts...</p>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-progress" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Reflection effect */}
            <div className="w-full h-16 sm:h-32 bg-gradient-to-b from-black/40 to-transparent rounded-lg mt-1 transform scale-y-[-0.25] blur-sm opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemedMacTerminal;