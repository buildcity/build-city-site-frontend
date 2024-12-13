import React, { useEffect, useState } from 'react';
import PartnerCard from '../components/PartnerCard';
import { fetchPartners } from '../services/api';
import { Partner } from '../types/Partner';

const Community = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const data = await fetchPartners();
        setPartners(data);
      } catch (err) {
        setError('Failed to load partners');
      } finally {
        setLoading(false);
      }
    };

    loadPartners();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Community</h1>
        
        {loading && (
          <div className="text-center text-gray-400">
            Loading partners...
          </div>
        )}

        {error && (
          <div className="text-center text-red-500">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-delay">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;