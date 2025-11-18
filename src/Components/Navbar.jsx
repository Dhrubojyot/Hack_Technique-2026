import React, { useState, useEffect } from 'react';
import { Menu, X, Info, MapPin, HelpCircle, UserPlus, Home } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2 sm:py-4' : 'py-4 sm:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative backdrop-blur-sm bg-black/20 border border-purple-500/30 rounded-xl sm:rounded-2xl transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-2 sm:py-4'
        }`}>
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-purple-500/20 animate-pulse -z-10" />
          
          <div className="flex justify-between items-center px-4 sm:px-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2 sm:gap-4">
                <img 
                  src="/hacktech.png"
                  alt="Hackathon Logo"
                  className="h-11 sm:h-14 lg:h-14 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-orange-500 text-base lg:text-lg font-medium transition-colors hover:scale-105 transform duration-300 flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-orange-500 text-base lg:text-lg font-medium transition-colors hover:scale-105 transform duration-300 flex items-center gap-2"
              >
                <Info className="w-5 h-5" />
                About
              </button>
              <button 
                onClick={() => scrollToSection('venue')}
                className="text-white/80 hover:text-orange-500 text-base lg:text-lg font-medium transition-colors hover:scale-105 transform duration-300 flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Venue
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/80 hover:text-orange-500 text-base lg:text-lg font-medium transition-colors hover:scale-105 transform duration-300 flex items-center gap-2"
              >
                <HelpCircle className="w-5 h-5" />
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('register')}
                className="bg-black/40 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg lg:rounded-xl border border-purple-500/30 hover:border-orange-500/50 hover:bg-black/60 transition-all duration-300 text-base lg:text-lg font-medium hover:scale-105 transform flex items-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Join Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-orange-500 p-1.5 sm:p-2 transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pt-3 sm:pt-4 pb-4 sm:pb-6 px-4 sm:px-6 mt-2 sm:mt-4 border-t border-purple-500/30">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-orange-500 px-3 sm:px-4 py-1.5 sm:py-2 text-base sm:text-lg font-medium transition-colors rounded-lg hover:bg-black/20 flex items-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-orange-500 px-3 sm:px-4 py-1.5 sm:py-2 text-base sm:text-lg font-medium transition-colors rounded-lg hover:bg-black/20 flex items-center gap-2"
                >
                  <Info className="w-5 h-5" />
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('venue')}
                  className="text-white/80 hover:text-orange-500 px-3 sm:px-4 py-1.5 sm:py-2 text-base sm:text-lg font-medium transition-colors rounded-lg hover:bg-black/20 flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Venue
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-white/80 hover:text-orange-500 px-3 sm:px-4 py-1.5 sm:py-2 text-base sm:text-lg font-medium transition-colors rounded-lg hover:bg-black/20 flex items-center gap-2"
                >
                  <HelpCircle className="w-5 h-5" />
                  FAQ
                </button>
                <button 
                  onClick={() => scrollToSection('register')}
                  className="bg-black/40 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-purple-500/30 hover:border-orange-500/50 hover:bg-black/60 transition-all duration-300 text-base sm:text-lg font-medium flex items-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  Join Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;