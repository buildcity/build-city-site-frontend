import React from 'react';

// Partners data
const partners = [
  {
    name: 'Celo',
    description: 'Celo is a carbon-negative blockchain platform bringing accessible and affordable decentralized finance (DeFi) to mobile users worldwide.',
    image: '/public/partner_assets/CeloLogo.jpg',
    link: 'https://celo.org',
  },
  {
    name: 'Venture Miner',
    description: 'VentureMiner integrates Web3 and AI technologies to unlock new possibilities for your business.',
    image: '/public/partner_assets/Venture_Miner_logo.webp',
    link: 'https://ventureminer.com',
  },
  {
    name: 'Near Protocol',
    description: 'NEAR Protocol is a high-performance, carbon-neutral blockchain platform designed to be fast, secure, and infinitely scalable, enabling developers to build decentralized applications with ease.',
    image: '/public/partner_assets/near_logo.png',
    link: 'https://near.org',
  },
];

const Partners: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">
          Partners
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => {
            const [imageSrc, setImageSrc] = React.useState(partner.image);

            return (
              <div key={partner.name} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <img
                  src={imageSrc}
                  alt={`Logo of ${partner.name}`}
                  className="w-full h-32 object-contain rounded-t-lg"
                  onError={() => {
                    setImageSrc('/dist/partner_assets/fallback.png'); // Ensure fallback.png exists
                    console.error(`Failed to load image: ${partner.image}`);
                  }}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{partner.name}</h2>
                  <p className="text-gray-300">{partner.description}</p>
                  <a
                    href={partner.link || '#'}
                    className="text-blue-400 hover:underline mt-2 block"
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