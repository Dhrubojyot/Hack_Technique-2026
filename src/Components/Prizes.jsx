import React from 'react';
import { motion } from 'framer-motion';

const PrizeSection = () => {
  const prizes = [
    {
      position: "2nd",
      trophy: "/2nd prize.png",
      prize: "TBD",
      size: "w-56 h-56 md:w-70 md:h-70" 
    },
    {
      position: "1st",
      trophy: "/1st prize.png", 
      prize: "TBD",
      size: "w-64 h-64 md:w-82 md:h-82"
    },
    {
      position: "3rd",
      trophy: "/3rd prize.png",
      prize: "TBD",
      size: "w-56 h-56 md:w-65 md:h-65" 
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-red-900/50 py-20">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h1 
              className="text-6xl text-white mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Prizes
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          </div>

          {/* Prizes Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end justify-items-center">
              {/* Mobile: 1st, 2nd, 3rd | Desktop: 2nd, 1st, 3rd */}
              <div className="order-2 md:order-1">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Trophy Image */}
                  <div className="w-56 h-56 md:w-70 md:h-70 mb-8 flex items-center justify-center">
                    <img 
                      src="/2nd prize.png" 
                      alt="2nd prize trophy"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Position and Prize */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      2nd Prize
                    </h3>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-1">
                      TBD
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="order-1 md:order-2">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Trophy Image */}
                  <div className="w-64 h-64 md:w-82 md:h-82 mb-8 flex items-center justify-center">
                    <img 
                      src="/1st prize.png" 
                      alt="1st prize trophy"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Position and Prize */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      1st Prize
                    </h3>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-1">
                      TBD
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="order-3 md:order-3">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Trophy Image */}
                  <div className="w-56 h-56 md:w-65 md:h-65 mb-8 flex items-center justify-center">
                    <img 
                      src="/3rd prize.png" 
                      alt="3rd prize trophy"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Position and Prize */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      3rd Prize
                    </h3>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-1">
                      TBD
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Participation Certificate */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-white mb-4">
                + Participation Certificate
              </h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                All participants will receive digital certificates of participation
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeSection;