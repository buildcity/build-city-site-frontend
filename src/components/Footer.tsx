import React from 'react';
import { Github, Twitter, MessageCircle, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">BUILDCITY</h3>
            <p className="text-gray-400">Building the future of communities</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/buildcity"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/buidlcity"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://t.me/buildcity"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
            <a
              href="https://lu.ma/buildcity"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Calendar className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;