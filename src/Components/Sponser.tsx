import React from 'react';

const SponsorsPage = () => {
  const sponsors = {
    gold: [
      {
        name: "DEVFOLIO",
        logo: "/_Colored.png",
        url: "https://devfolio.co",
        alt: "DEVFOLIO LOGO"
      }
    ],
    silver: [
      {
        name: "ETHINDIA",
        logo: "/Untitled.png",
        url: "https://ethindia.co ",
        alt: "ETHINDIA LOGO"
      }
    ],
    hiring: [
      {
        name: "Latrics India Private Limited",
        logo: "/latrics.png",
        url: "https://latrics.com/",
        alt: "Latrics LOGO"
      }
    ],
    inkind: [
      {
        name: "Mastra",
        logo: "/mastra.png", 
        url: "https://mastra.ai/",
        alt: "Mastra LOGO"
      },
      {
        name: "Modisconto",
        logo: "/modisconto.png", 
        url: "",
        alt: "Modisconto LOGO"
      },
      {
        name: "Code Crafters",
        logo: "/codecrafters.png", 
        url: "https://codecrafters.io/ ",
        alt: "Code Crafters LOGO"
      },
      {
        name: "Beeceptor",
        logo: "/beeceptor.png", 
        url: "https://beeceptor.com/ ",
        alt: "Beeceptor LOGO"
      },
      {
        name: "Hacktropica",
        logo: "/hacktropica.png",
        url: "",
        alt: "Hacktropica LOGO"
      },
    ],
    partners: [
      {
        name: "",
        logo: "/innovatex.png",
        url: "https://innovatexcommunity.netlify.app/ ",
        alt: "InnovateX Community LOGO"
      },
      {
        name: "",
        logo: "/aotsccse.png",
        url: "https://www.sccseaot.in/",
        alt: "AOT SC CSE LOGO"
      }
    ],
    // drink: [
    //   {
    //     name: "",
    //     logo: "/red bull1.png",
    //     url: "https://www.redbull.com/in-en",
    //     alt: "Drink Partner LOGO"
    //   }
    // ],
    domain: [
      {
        name: "XYZ Domain",
        logo: "/xyz.png",
        url: "https://gen.xyz/",
        alt: "xyz domain LOGO"
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
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl p-8 ${glassStyle} w-full sm:w-auto min-w-[300px] max-w-sm flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="relative w-64 h-32 mx-auto mb-6">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {sponsor.name && (
                    <div className="text-white/80 text-xl font-semibold">
                      {sponsor.name}
                    </div>
                  )}
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
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl p-8 ${glassStyle} w-full sm:w-auto min-w-[300px] max-w-sm flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="relative w-64 h-32 mx-auto mb-6">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {partner.name && (
                    <div className="text-white/80 text-xl font-semibold">
                      {partner.name}
                    </div>
                  )}
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

        {/* Hiring Sponsors */}
        <SponsorSection
          title="Our Hiring Partner"
          sponsors={sponsors.hiring}
          titleColor="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
        />

        {/* Inkind Sponsors */}
        <SponsorSection
          title="Our Inkind Sponsor"
          sponsors={sponsors.inkind}
          titleColor="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"
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

        {/* Domain Partners */}
        <PartnerSection
          title="Domain Partner"
          partners={sponsors.domain}
          titleColor="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent"
        />
      </div>
    </div>
  );
};

export default SponsorsPage;