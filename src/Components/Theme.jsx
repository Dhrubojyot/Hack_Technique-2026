import React, { useState } from 'react';
import { Cpu, Code2, Globe, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-72 h-96 relative overflow-hidden rounded-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Base Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-red-900/80 p-6">
        <div className="flex flex-col items-center justify-center h-full">
          <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center mb-6 transition-all duration-500 ${isHovered ? 'scale-0' : 'scale-100'}`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h3 className={`text-white text-3xl font-bold text-center transition-all duration-500 ${isHovered ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}`}>
            {title}
          </h3>
        </div>
      </div>

      {/* Reveal Content */}
      <div className={`absolute inset-0 bg-gradient-to-br from-red-800/80 to-black/90 p-6 transition-all duration-500
        ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center mb-6 transition-all duration-500 ${isHovered ? 'rotate-180 scale-100' : 'rotate-0 scale-0'}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-4 text-center">{title}</h3>
          <p className="text-white/80 text-center">
            {description}
          </p>
        </div>
      </div>

      {/* Animated Border */}
      <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 border-2 border-red-500/50 rounded-xl animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-slideLeft" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-slideRight" />
      </div>

      {/* Sketch Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 text-orange-500/20 animate-float">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2z"/>
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-8 h-8 text-orange-500/20 animate-pulse">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,4H5C3.9,4,3,4.9,3,6v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M7,12h2v5H7V12z M11,8h2v9h-2V8z M15,15h2v2h-2V15z"/>
        </svg>
      </div>
      <div className="absolute top-1/2 right-4 w-6 h-6 text-orange-500/20 animate-float delay-100">
          <div className="font-bold text-3xl">{"{}"}</div>
      </div>
      <div className="absolute bottom-1/2 left-4 w-6 h-6 text-orange-500/20 animate-pulse delay-200">
          <div className="font-bold text-3xl">{"</>"}</div>
      </div>
    </motion.div>
  );
};

const TracksPage = () => {
  const tracks = [
    {
      icon: Cpu,
      title: 'Hardware Hacks',
      description: 'Build innovative solutions using Arduino, Raspberry Pi, and IoT devices.'
    },
    {
      icon: Code2,
      title: 'Blockchain Hacks',
      description: 'Create decentralized applications, smart contracts, and blockchain-based solutions.'
    },
    {
      icon: Globe,
      title: 'Web Development Hacks',
      description: 'Develop responsive web applications using modern frameworks and technologies.'
    },
    {
      icon: Brain,
      title: 'AI/ML Hacks',
      description: 'Build intelligent solutions using machine learning and deep learning.'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-red-900/50">
      {/* Gradient Orbs for background effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl translate-x-1/2"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          {/* Header section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl text-white mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Tracks & Themes
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Choose your path and build something amazing in these exciting domains
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {tracks.map((track, index) => (
                <AnimatedCard key={index} {...track} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksPage;