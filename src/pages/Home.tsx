import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import NewsletterModal from '../components/NewsletterModal';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-black bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to <span className="text-gray-400">BUILDCITY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-8 animate-fade-in-delay">
            Building the future of communities. One city at a time.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <a
              href="https://t.me/+TKDvfZOEs-E3ODQ5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Join Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://lu.ma/user/usr-EI5qHxFqPoGxCJh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              Join Our Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://substack.com/@buildcity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Subscribe to our Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;