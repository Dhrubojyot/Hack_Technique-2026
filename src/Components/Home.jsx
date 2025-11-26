import React, { useState, useEffect } from 'react';

const Home = () => {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Load Devfolio script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const targetDate = new Date('2026-01-06').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
      });
    };

    const timer = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video2.mp4" />
      </video>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Header Section */}
            <div className="text-white space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-3xl uppercase tracking-wider mb-1 mt-8 sm:mt-12 lg:mt-20">
                  TECHNIQUE POLYTECHNIC INSTITUTE
                </h3>
                <p className="text-gray-300 text-base sm:text-lg lg:text-2xl uppercase tracking-wider">
                  PRESENTS
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-tight">
                  Hack Technique
                </h1>
                <h2 className="text-4xl sm:text-4xl lg:text-6xl font-bold">
                  6th January 2026
                </h2>
              </div>

              {/* Devfolio Apply Button */}
              <div className="flex justify-center">
                <div 
                  className="apply-button" 
                  data-hackathon-slug="hack-technique2026" 
                  data-button-theme="light"
                  style={{ height: '44px', width: '312px' }}
                ></div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="relative max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto px-4">
              <div className="bg-black bg-opacity-80 backdrop-blur-lg rounded-full p-4 sm:p-6 lg:p-8 border border-purple-500/30 shadow-2xl">
                <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center text-white">
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-medium">{time.days}</div>
                    <div className="text-xs sm:text-sm mt-1">DAYS</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-medium">{time.hours}</div>
                    <div className="text-xs sm:text-sm mt-1">HOURS</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-medium">{time.minutes}</div>
                    <div className="text-xs sm:text-sm mt-1">MINUTES</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-medium">{time.seconds}</div>
                    <div className="text-xs sm:text-sm mt-1">SECONDS</div>
                  </div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;