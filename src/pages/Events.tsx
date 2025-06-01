// src/pages/Events.tsx
import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center animate-fade-in">Events</h1>
        <p className="text-xl md:text-2xltext-white/80 text-center mb-12 animate-fade-in-delay">
          Join us at upcoming Build City events, workshops, and vibathons. Stay connected, learn, and build with the community.
        </p>

        <div className="flex justify-center animate-fade-in-delay-2">
          <iframe
            src="https://lu.ma/embed/calendar/cal-d1wlfLEZn2QMKYB/events"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ borderRadius: '12px', border: '1px solid #bfcbda88', overflow: 'hidden', width: '100%', maxWidth: '100%' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Events;
