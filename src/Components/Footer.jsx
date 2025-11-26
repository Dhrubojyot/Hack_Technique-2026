import React from 'react';
import { Twitter, Youtube, Instagram, Facebook, Github, Mail, MapPin, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Globe, href: "https://www.techniqueedu.com/", label: "Website" },
    { icon: Youtube, href: "https://www.youtube.com/@techniquepolytechnicinstitute", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/tpihooghly/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/tpicollege", label: "Facebook" },
    
  ];

  const contactInfo = [
    { icon: Mail, text: "hacktechnique2026@gmail.com" },
    { icon: MapPin, text: "Technique Polytechnic Institute" },
    { icon: Phone, text: "+91 9330857191" }
  ];

  return (
    <div className="relative bg-black px-4 sm:px-6 pt-16 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fire-themed elements */}
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-orange-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
        
        {/* Trophy SVG */}
        <div className="absolute top-10 right-10 w-20 h-20 sm:w-32 sm:h-32 text-orange-500/20 animate-float">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.2,4H17V3a1,1,0,0,0-1-1H8A1,1,0,0,0,7,3V4H3.8A1.8,1.8,0,0,0,2,5.8V8A4,4,0,0,0,5,11.91V15a3,3,0,0,0,3,3h2v3H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2H14V18h2a3,3,0,0,0,3-3V11.91A4,4,0,0,0,22,8V5.8A1.8,1.8,0,0,0,20.2,4Z"/>
          </svg>
        </div>

        {/* Leaderboard SVG */}
        <div className="absolute top-44 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 text-orange-500/20 animate-float delay-100">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,4H5C3.9,4,3,4.9,3,6v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M7,12h2v5H7V12z M11,8h2v9h-2V8z M15,15h2v2h-2V15z"/>
          </svg>
        </div>

        {/* Medal SVG */}
        <div className="absolute bottom-20 right-4 sm:right-20 w-20 h-20 sm:w-28 sm:h-28 text-orange-500/20 animate-float delay-200">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C8.13,2,5,5.13,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z"/>
          </svg>
        </div>

        {/* Coding Brackets */}
        <div className="absolute top-80 sm:top-44 right-4 sm:right-40 w-16 h-16 sm:w-24 sm:h-24 text-orange-500/20 animate-pulse font-bold text-5xl sm:text-7xl">
         {"</>"}
        </div>

        {/* First Place Crown */}
        <div className="absolute bottom-40 left-4 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 text-orange-500/20 animate-float delay-150">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2z"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto max-w-6xl">
        {/* Logo Section */}
        <div className="text-4xl sm:text-7xl lg:text-[120px] font-bold leading-none tracking-tight mb-8 sm:mb-12 transition-all">
          <span className="text-white">Hack</span>
          <span className="text-orange-500">Technique</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10 lg:mb-16">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-xl mb-6 inline-block border-b-2 border-orange-500">
              Get In Touch
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white/80 hover:text-orange-500 transition-colors">
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-orange-500 font-semibold text-xl mb-6 inline-block border-b-2 border-orange-500">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['About', 'FAQ', 'Terms of Service', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/80 hover:text-orange-500 transition-colors text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h3 className="text-orange-500 font-semibold text-xl mb-6 inline-block border-b-2 border-orange-500">
                Features
              </h3>
              <ul className="space-y-3">
                {['Mission & Vision', 'Timeline', 'Our Venue', 'Our Crews'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/80 hover:text-orange-500 transition-colors text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-orange-500 font-semibold text-xl mb-6 inline-block border-b-2 border-orange-500">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg border border-orange-500/20 hover:border-orange-500 hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-orange-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
            <div className="flex items-center gap-2 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
              <span>© HackTechnique Season 1</span>
            </div>
          </div>

          <div className="text-gray-400 text-sm sm:text-base text-center sm:text-right">
            Website Developed by <span className="text-orange-500">Dhrubojyoti Chakraborty</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;