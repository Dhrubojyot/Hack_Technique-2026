import React, { useState, useEffect, useRef } from 'react';

const AboutPage = () => {
  const stats = [
    { number: 20, label: "Volunteers" },
    { number: 10, label: "Organizers" },
    { number: 200, label: "Participants" },
    { number: 10, label: "Mentors" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          stats.forEach((stat, index) => {
            for (let i = 0; i <= steps; i++) {
              setTimeout(() => {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.round((i / steps) * stat.number);
                  return newCounters;
                });
              }, i * stepDuration);
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const glassStyle = "bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-red-900/50">
      {/* Gradient Orbs for background effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/30 rounded-full filter blur-3xl translate-x-1/2"></div>
      
      {/* Content */}
      <div className="relative min-h-screen p-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl text-white mb-4 mt-8 font-bold">About Hack Technique</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
       

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo Section */}
          <div className={`rounded-xl p-4 md:p-8 flex items-center justify-center ${glassStyle}`}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center w-full">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <img src="/tpi_logo.png" alt="TPI Logo" className="w-full h-full object-contain" />
              </div>
              <div className="relative w-38 h-38 sm:w-40 sm:h-40 md:w-56 md:h-56">
                <img src="/iiclogo-1.webp" alt="Hack Technique Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>


          {/* Description Section */}
          <div className={`rounded-xl p-8 ${glassStyle}`}>
            <p className="mb-4 text-lg text-white/90">
             Hack Technique is a <span className="text-orange-500 font-medium"> 6 hour</span> offline hackathon happening on
              <span className="text-orange-500 font-medium"> 6th January 2026</span> at 
              <span className="text-orange-500 font-medium"> Technique Polytechnic Institute (TPI) </span> It brings together coders and innovators to solve real-world problems through technology.
            </p>
            <p className="text-lg text-white/90">
              Organized by <span className="text-orange-500 font-medium">Technique Polytechnic Institute</span>, 
              the event gives participants the opportunity to build impactful tech solutions, learn from experienced mentors and connect with fellow developers. Supported by 
              <span className="text-orange-500 font-medium"> Core Departments Professors</span>,
              <span className="text-orange-500 font-medium"> Department Seniors</span> and 
              <span className="text-orange-500 font-medium"> Experts</span>. Hack Technique aims to 
              become one of the largest hackathons, fostering problem solving and technological advancement.
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 text-center ${glassStyle}`}
            >
              <div className="text-4xl font-bold mb-2 text-orange-500">
                {counters[index]}+
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;