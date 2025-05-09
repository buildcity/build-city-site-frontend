import React from 'react';
import MediaCard from '../components/MediaCard';
import { mediaItems } from '../data/media';

const Media = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Media</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-delay">
          {mediaItems.map((media) => (
            <MediaCard key={media.id} media={media} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
