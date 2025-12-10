import React from 'react';
import { Instagram, Github, Linkedin, Award } from 'lucide-react';

const JudgeCard = ({ image, name, role, company }) => (
  <div className="relative w-72 group">
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-600 to-orange-300 shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Top section with name and role */}
      <div className="p-4 pb-0"> {/* Reduced pb-2 to pb-0 */}
        <h3 className="text-white text-2xl font-bold mb-2"> {/* Removed mb-1 */}
          {name}
        </h3>
        <p className="text-white/90 text-sm font-medium">
          {role}, {company}

        </p>
      </div>

      {/* Image container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Bottom social icons bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-700 p-3 flex justify-center gap-6">
        <a href="#" className="transition-transform hover:scale-110">
          <Linkedin className="w-5 h-5 text-white" />
        </a>
        <a href="#" className="transition-transform hover:scale-110">
          <Github className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  </div>
);

const JudgesPage = () => {
  const judges = [
    {
      name: 'Coming Soon',
      role: '',
      company: '',
      image: '/judges.webp'
    },
    {
      name: 'Coming Soon',
      role: '',
      company: '',
      image: '/judges.webp'
    },
    {
      name: 'Coming Soon',
      role: '',
      company: '',
      image: '/judges.webp'
    },
    {
      name: 'Coming Soon',
      role: '',
      company: '',
      image: '/judges.webp'
    },
    
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-red-900/50">
      {/* Gradient Orbs for background effect - EXACTLY SAME */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl translate-x-1/2"></div>
      
      {/* Subtle grid pattern overlay - EXACTLY SAME */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          {/* Header section - EXACT SAME STYLE */}
          <div className="text-center mb-16">
            <h1 className="text-6xl text-white mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Judges & Mentors
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Industry experts and visionaries who will evaluate innovations and guide the next generation of tech leaders
            </p>
          </div>

          {/* Cards grid - EXACT SAME LAYOUT */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {judges.map((judge, index) => (
                <div 
                  key={index} 
                  className="animate-fadeIn"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <JudgeCard {...judge} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgesPage;