import React from 'react';
import { Instagram, Github, Linkedin } from 'lucide-react';

const CrewCard = ({ image, name, role, socials }) => (
  <div className="relative w-full max-w-xs group">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-600 to-orange-300 shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Top section with name and role */}
      <div className="p-4 pb-0">
        <h3 className="text-white text-2xl font-bold mb-1">
          {name}
        </h3>
        <p className="text-white/90 text-lg font-medium">
          {role}
        </p>
      </div>

      {/* Image container - Maintain crew card aspect ratio */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Bottom social icons bar with individual links */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-700 p-3 flex justify-center gap-6">
        {socials.instagram && (
          <a 
            href={socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
        )}
        {socials.github && (
          <a 
            href={socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
        )}
        {socials.linkedin && (
          <a 
            href={socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const CrewPage = () => {
  const members = [
    {
      name: 'Ankush Paramanik',
      role: 'Lead Volunteer',
      image: '/ankush.png',
      socials: {
        instagram: 'https://instagram.com/ankush_paramanik',
        github: 'https://github.com/ankushparamanik',
        linkedin: 'https://linkedin.com/in/ankush-paramanik'
      }
    },
    {
      name: 'Sayan Das',
      role: 'Lead Designer',
      image: '/sayan.png',
      socials: {
        instagram: 'https://instagram.com/sayan_das',
        github: 'https://github.com/sayandas',
        linkedin: 'https://linkedin.com/in/sayan-das'
      }
    },
    {
      name: 'Surajit Guchhait',
      role: 'Volunteer',
      image: '/surjit.png',
      socials: {
        instagram: 'https://instagram.com/surajit_guchhait',
        linkedin: 'https://linkedin.com/in/surajit-guchhait'
      }
    },
    {
      name: 'Rick Koley',
      role: 'Volunteer',
      image: '/rick.png',
      socials: {
        instagram: 'https://instagram.com/rick_koley',
        github: 'https://github.com/rickkoley',
        linkedin: 'https://linkedin.com/in/rick-koley'
      }
    },
    {
      name: 'Anik Bhattacharyya',
      role: 'Volunteer',
      image: '/anik.png',
      socials: {
        github: 'https://github.com/anikbhattacharyya',
        linkedin: 'https://linkedin.com/in/anik-bhattacharyya'
      }
    },
    {
      name: 'Arpan Bhowmick',
      role: 'Volunteer',
      image: '/arpan.png',
      socials: {
        instagram: 'https://instagram.com/arpan_bhowmick',
        linkedin: 'https://linkedin.com/in/arpan-bhowmick'
      }
    },
    {
      name: 'Tandra Mukherjee',
      role: 'Volunteer',
      image: '/tandra.png',
      socials: {
        instagram: 'https://instagram.com/tandra_mukherjee',
        github: 'https://github.com/tandramukherjee',
        linkedin: 'https://linkedin.com/in/tandra-mukherjee'
      }
    },
    {
      name: 'Sneha Hazra',
      role: 'Volunteer',
      image: '/sneha.png',
      socials: {
        instagram: 'https://instagram.com/sneha_hazra',
        linkedin: 'https://linkedin.com/in/sneha-hazra'
      }
    },
    {
      name: 'Deepsikha Mukherjee',
      role: 'Volunteer',
      image: '/deepsikha.png',
      socials: {
        instagram: 'https://instagram.com/deepsikha_mukherjee',
        github: 'https://github.com/deepsikhamukherjee',
        linkedin: 'https://linkedin.com/in/deepsikha-mukherjee'
      }
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
            <h1 className="text-6xl text-white mt-14 mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Meet Our Crew
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              The talented team behind HackTPI working together to create amazing experiences
            </p>
          </div>

          {/* Cards grid - Same layout as original crew page */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="animate-fadeIn w-full max-w-xs"
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