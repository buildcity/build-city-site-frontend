import React from 'react';
import { Partner } from '../types/Partner';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <a 
      href={partner.site}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer"
    >
      <div className="p-6 flex flex-col items-center">
        <img
          src={partner.logo_url}
          alt={partner.title}
          className="w-3/4 h-auto object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-white text-center mb-3">
          {partner.title}
        </h3>
        <p className="text-gray-400 text-center">
          {partner.description}
        </p>
      </div>
    </a>
  );
};

export default PartnerCard;