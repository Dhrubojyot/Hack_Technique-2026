import React, { useEffect, useState } from "react";

function getTimeRemaining() {
  const hackathonDate = new Date('2026-01-06T00:00:00');
  const now = new Date();
  const difference = hackathonDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function getUnitValue(unit, timeRemaining) {
  return timeRemaining[unit];
}

function Flipper({ unit, timeRemaining }) {
  const [current, setCurrent] = useState(getUnitValue(unit, timeRemaining));
  const [previous, setPrevious] = useState(getUnitValue(unit, timeRemaining));
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const newValue = getUnitValue(unit, timeRemaining);
    if (newValue !== current) {
      setPrevious(current);
      setCurrent(newValue);
      setIsFlipping(true);
      
      setTimeout(() => {
        setIsFlipping(false);
      }, 600);
    }
  }, [timeRemaining, unit, current]);

  const currentDisplay = current.toString().padStart(2, "0");
  const previousDisplay = previous.toString().padStart(2, "0");
  
  const gradient = 'linear-gradient(180deg, #ff7a18, #ea580c)';

  return (
    <div style={{ perspective: "300px" }} className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-32 lg:w-36 lg:h-40 rounded-lg text-white shadow-2xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">

      {/* Static Upper Half */}
      <div
        className="flex relative justify-between w-full h-[50%] overflow-hidden items-end rounded-t-lg border-b border-red-800"
        style={{ backgroundImage: gradient }}
      >
        <div className="h-3 w-2 md:h-4 md:w-3 rounded-r-full translate-y-1/2 bg-white"></div>
        <span className="translate-y-1/2 text-white">{currentDisplay}</span>
        <div className="h-3 w-2 md:h-4 md:w-3 rounded-l-full translate-y-1/2 bg-white"></div>
      </div>
      
      {/* Static Lower Half */}
      <div
        className="flex relative justify-between w-full h-[50%] overflow-hidden items-start rounded-b-lg"
        style={{ backgroundImage: gradient }}
      >
        <div className="h-3 w-2 md:h-4 md:w-3 rounded-r-full -translate-y-1/2 bg-white"></div>
        <span className="-translate-y-1/2 text-white">{currentDisplay}</span>
        <div className="h-3 w-2 md:h-4 md:w-3 rounded-l-full -translate-y-1/2 bg-white"></div>
      </div>
      
      {/* Divider */}
      <div className="absolute top-1/2 h-[1px] bg-red-800 left-0 right-0 z-10"></div>
      
      {/* Animated Upper Half (Fold) */}
      {isFlipping && (
        <div
          key={`fold-${current}`}
          className="absolute flex left-0 w-full h-1/2 top-0 justify-between overflow-hidden items-end rounded-t-lg border-b border-red-800"
          style={{
            backgroundImage: gradient,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transformOrigin: "50% 100%",
            animation: "fold 0.6s ease-in-out forwards"
          }}
        >
          <div className="h-3 w-2 md:h-4 md:w-3 rounded-r-full translate-y-1/2 bg-white"></div>
          <span className="translate-y-1/2 text-white">{previousDisplay}</span>
          <div className="h-3 w-2 md:h-4 md:w-3 rounded-l-full translate-y-1/2 bg-white"></div>
        </div>
      )}
      
      {/* Animated Lower Half (Unfold) */}
      {isFlipping && (
        <div
          key={`unfold-${current}`}
          className="absolute flex left-0 w-full h-1/2 top-1/2 justify-between overflow-hidden items-start rounded-b-lg"
          style={{
            backgroundImage: gradient,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transformOrigin: "50% 0%",
            animation: "unfold 0.6s ease-in-out forwards"
          }}
        >
          <div className="h-3 w-2 md:h-4 md:w-3 rounded-r-full -translate-y-1/2 bg-white"></div>
          <span className="-translate-y-1/2 text-white">{currentDisplay}</span>
          <div className="h-3 w-2 md:h-4 md:w-3 rounded-l-full -translate-y-1/2 bg-white"></div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fold {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-180deg); }
        }
        
        @keyframes unfold {
          0% { transform: rotateX(180deg); }
          100% { transform: rotateX(0deg); }
        }
      `}</style>
    </div>
  );
}

function Clock({ unit, timeRemaining }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
      <Flipper unit={unit} timeRemaining={timeRemaining} />
      <div className="uppercase text-white tracking-widest text-xs sm:text-sm md:text-base font-semibold">
        {unit}
      </div>
    </div>
  );
}

export default function HackathonCountdown() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        <Clock unit="days" timeRemaining={timeRemaining} />
        <Clock unit="hours" timeRemaining={timeRemaining} />
        <Clock unit="minutes" timeRemaining={timeRemaining} />
        <Clock unit="seconds" timeRemaining={timeRemaining} />
      </div>
    </div>
  );
}
