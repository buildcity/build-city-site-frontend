import React from 'react';

const About = () => {
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
      </div>
    </div>
  );
};

export default About;