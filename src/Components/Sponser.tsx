import React from 'react';

const SponsorsPage = () => {
  const sponsors = {
    gold: [
      {
        name: "DEVFOLIO",
        logo: "/_Colored.png", // Update with actual path
        url: "https://devfolio.co",
        alt: "DEVFOLIO LOGO"
      }
    ],
    silver: [
      {
        name: "ETHINDIA",
        logo: "/Untitled.png", // Update with actual path
        url: "https://ethindia.co ",
        alt: "ETHINDIA LOGO"
      }
    ],
    bronze: [
      // Add bronze sponsors here when available
    ],
    partners: [
      {
        name: "",
        logo: "/innovatex.png", // Update with actual path
        url: "https://innovatexcommunity.netlify.app/ ",
        alt: "InnovateX Community LOGO"
      }
    ],
    drink: [
      {
        name: "",
        logo: "/red bull1.png", // Update with actual path
        url: "https://www.redbull.com/in-en", // Add actual URL
        alt: "Drink Partner LOGO"
      }
    ]
  };

  const glassStyle = "bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-105";

  const SponsorSection = ({ title, sponsors, titleColor }) => {
    if (!sponsors || sponsors.length === 0) return null;

    return (
      <div className="mb-16">
        <h2 className={`text-4xl font-bold text-center mb-12 ${titleColor}`}>
          {title}
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-8 justify-items-center">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl p-8 ${glassStyle} w-full max-w-md flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="relative w-64 h-32 mx-auto mb-6">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-white/80 text-xl font-semibold">
                    {sponsor.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const PartnerSection = ({ title, partners, titleColor }) => {
    if (!partners || partners.length === 0) return null;

    return (
      <div className="mb-16">
        <h2 className={`text-4xl font-bold text-center mb-12 ${titleColor}`}>
          {title}
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-8 justify-items-center">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl p-8 ${glassStyle} w-full max-w-md flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="relative w-64 h-32 mx-auto mb-6">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-white/80 text-xl font-semibold">
                    {partner.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-red-900/50">
      {/* Gradient Orbs for background effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/30 rounded-full filter blur-3xl translate-x-1/2"></div>
      
      {/* Content */}
      <div className="relative min-h-screen p-8 z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl text-white mb-4 mt-8 font-bold">Sponsors & Partners</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We're grateful to our amazing sponsors who make Hack Technique possible. 
            Their support helps us create an incredible experience for all participants.
          </p>
        </div>

        {/* Gold Sponsors */}
        <SponsorSection
          title="Our Gold Sponsor"
          sponsors={sponsors.gold}
          titleColor="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
        />

        {/* Silver Sponsors */}
        <SponsorSection
          title="Our Silver Sponsor"
          sponsors={sponsors.silver}
          titleColor="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"
        />

        {/* Bronze Sponsors */}
        <SponsorSection
          title="Our Bronze Sponsors"
          sponsors={sponsors.bronze}
          titleColor="bg-gradient-to-r from-orange-700 to-orange-900 bg-clip-text text-transparent"
        />

        {/* Drink Partner */}
        <SponsorSection
          title="Our Drink Partner"
          sponsors={sponsors.drink}
          titleColor="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        />

        {/* Partners */}
        <PartnerSection
          title="Community Partners"
          partners={sponsors.partners}
          titleColor="text-white"
        />
      </div>
    </div>
  );
};

export default SponsorsPage;