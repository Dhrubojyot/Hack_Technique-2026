import React from 'react';
import { Instagram, Github, Linkedin } from 'lucide-react';

const CrewCard = ({ image, name, role }) => (
  <div className="relative w-72 group">
    <div className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-black/20 border border-white/5 shadow-lg transition-all duration-300 hover:bg-white/5">
      {/* Image container */}
      <div className="relative w-full aspect-[3/4]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white text-xl font-bold mb-2">
            {name}
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300" />
          </h3>
          <p className="text-white/80 font-medium">
            {role}
          </p>
        </div>
      </div>

      {/* Social icons */}
      <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a href="#" className="p-2 rounded-full bg-black/30 backdrop-blur-lg hover:bg-red-500/50 transition-colors">
          <Instagram className="w-5 h-5 text-white" />
        </a>
        <a href="#" className="p-2 rounded-full bg-black/30 backdrop-blur-lg hover:bg-red-500/50 transition-colors">
          <Github className="w-5 h-5 text-white" />
        </a>
        <a href="#" className="p-2 rounded-full bg-black/30 backdrop-blur-lg hover:bg-red-500/50 transition-colors">
          <Linkedin className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  </div>
);

const CrewPage = () => {
  const members = [
    {
      name: 'DHRUBOJYOTI CHAKRABORTY',
      role: 'Tech Lead',
      image: '/Dhrubojyoti1.png'
    },
    {
      name: 'DEEP MOURI',
      role: 'Tech Lead',
      image: '/deep.png'
    },
    {
      name: 'JIT SARKAR',
      role: 'Tech Lead',
      image: '/jit.png'
    },
    {
      name: 'DHRUBA SINGHA ROY',
      role: 'Tech Lead',
      image: '/Dhruba.png'
    },
    
    
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
              Meet Our Crew
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              The talented team behind HackTPI working together to create amazing experiences
            </p>
          </div>

          {/* Cards grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="animate-fadeIn"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <CrewCard {...member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewPage;