import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const Venue = () => {
  const address = {
    name: "TECHNIQUE POLYTECHNIC INSTITUTE",
    area: "Address: Hooghly Station Road, P.O. Sugandhya, Dist, Panchrokhi, West Bengal",
    pincode: "712102",
    phone: "+91 9330857191",
    timing: "9:00 AM - 5:00 PM"
  };

  const glassStyle = "bg-black/20 backdrop-blur-lg border border-white/5 shadow-lg hover:bg-white/5 transition-all duration-300";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-red-900/50">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen p-8 z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-6xl text-white mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Our Venue
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join us at our state-of-the-art campus for an unforgettable experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Section */}
          <div className={`${glassStyle} rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.9680459273045!2d88.35837077476704!3d22.91454942035176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8923370d786c5%3A0x3f303091da751223!2sTECHNIQUE%20POLYTECHNIC%20INSTITUTE!5e0!3m2!1sen!2sin!4v1739371948450!5m2!1sen!2sin"
              className="w-full h-[400px] rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address Section */}
          <div className={`${glassStyle} rounded-xl p-8 flex flex-col justify-center space-y-6`}>
            {/* Institute Name and Address */}
            <div className="flex items-start gap-4 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <MapPin className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white/90 mb-4">{address.name}</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {address.area}<br />
                  {address.pincode}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4 animate-fadeIn" style={{ animationDelay: '400ms' }}>
              <Phone className="w-6 h-6 text-red-500" />
              <p className="text-white/80">{address.phone}</p>
            </div>

            {/* Timing Info */}
            <div className="flex items-center gap-4 animate-fadeIn" style={{ animationDelay: '600ms' }}>
              <Clock className="w-6 h-6 text-red-500" />
              <p className="text-white/80">{address.timing}</p>
            </div>

            {/* Google Maps Link */}
            <a
              href="https://maps.google.com/?q=Technique+Polytechnic+Institute"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl mt-4 group ${glassStyle} animate-fadeIn hover:bg-gradient-to-r hover:from-red-500/20 hover:to-orange-500/20`}
              style={{ animationDelay: '800ms' }}
            >
              <Navigation className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-300" />
              <span className="text-white">Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;