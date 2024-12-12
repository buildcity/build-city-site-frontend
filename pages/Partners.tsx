import React from 'react';

const partners = [
  {
    name: 'Partner 1',
    description: 'Description for Partner 1',
    image: 'https://via.placeholder.com/150',
    link: 'https://partner1.com',
  },
  {
    name: 'Partner 2',
    description: 'Description for Partner 2',
    image: 'https://via.placeholder.com/150',
    link: 'https://partner2.com',
  },
  {
    name: 'Partner 3',
    description: 'Description for Partner 3',
    image: 'https://via.placeholder.com/150',
    link: 'https://partner3.com',
  },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Partners</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={partner.image} alt={partner.name} className="w-full h-32 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{partner.name}</h2>
                <p className="text-gray-400">{partner.description}</p>
                <a href={partner.link} className="text-blue-400 hover:underline mt-2 block">Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;