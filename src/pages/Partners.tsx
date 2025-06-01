import React from "react";

const partners = [
  {
    name: "Celo",
    description:
      "Celo is a carbon-negative blockchain platform bringing accessible and affordable decentralized finance (DeFi) to mobile users worldwide.",
    image: "/partner_assets/CeloLogo.jpg",
    link: "https://celo.org",
  },
  {
    name: "Venture Miner",
    description:
      "VentureMiner integrates Web3 and AI technologies to unlock new possibilities for your business.",
    image: "/partner_assets/Venture_Miner_logo.webp",
    link: "https://ventureminer.com",
  },
  {
    name: "Near Protocol",
    description:
      "NEAR Protocol is a high-performance, carbon-neutral blockchain platform designed to be fast, secure, and infinitely scalable, enabling developers to build decentralized applications with ease.",
    image: "/partner_assets/near_logo.png",
    link: "https://near.org",
  },
];

const Partners: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">Partners</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in-delay">
          {partners.map((partner) => {
            const [imageSrc, setImageSrc] = React.useState(partner.image);

            return (
              <div
                key={partner.name}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105"
              >
                <img
                  src={imageSrc}
                  alt={`Logo of ${partner.name}`}
                  className="w-full h-32 object-contain rounded-t"
                  onError={() => {
                    setImageSrc("/dist/partner_assets/fallback.png");
                    console.error(`Failed to load image: ${partner.image}`);
                  }}
                />
                <div className="mt-4">
                  <h2 className="text-xl font-semibold">{partner.name}</h2>
                  <p className="text-gray-300 mt-2">{partner.description}</p>
                  <a
                    href={partner.link || "#"}
                    className="text-blue-400 hover:underline mt-3 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {partner.name}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
