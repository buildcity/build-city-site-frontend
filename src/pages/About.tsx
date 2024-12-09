import React from 'react';

const About = () => {
  const profiles = [
    {
      name: 'Eddy P',
      description: 'An experienced and accomplished Data and AI engineer, earning Accenture over $50M in deals and leading development teams for Gen AI initiatives.',
      image: 'https://x.com/Eddgie_AI/photo',
      link: 'https://x.com/Eddgie_AI',
    },
    {
      name: 'Elon Musk',
      description: 'Visionary entrepreneur, founder of Tesla, SpaceX, and X.com. Pushing humanity toward sustainable energy and interplanetary exploration.',
      image: 'https://via.placeholder.com/150',
      link: 'https://twitter.com/elonmusk',
    },
    {
      name: 'Bill Gates',
      description: 'Co-founder of Microsoft, philanthropist, and visionary leader dedicated to global health and innovation.',
      image: 'https://via.placeholder.com/150',
      link: 'https://twitter.com/billgates',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">About BuildCity</h1>
        <div className="space-y-8 text-gray-300 animate-fade-in-delay">
          <p>
            BuildCity is a global community of Web3 builders, developers, and innovators. 
            We're creating spaces for collaboration, learning, and growth in cities around the world.
          </p>
          <p>
            Our mission is to accelerate the adoption of Web3 technologies by fostering local communities
            and providing resources for builders to create the future of the internet.
          </p>
          <p>
            Starting in New York City, we're expanding to major tech hubs globally, bringing together
            talented individuals who share our vision of a decentralized future.
          </p>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Visionaries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="text-center bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300"
              >
                <a href={profile.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                </a>
                <h3 className="text-xl font-bold">{profile.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
