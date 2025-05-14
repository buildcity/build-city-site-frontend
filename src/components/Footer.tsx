import React from 'react';
import { Github, Twitter, MessageCircle, Calendar, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start leading-none">
  <img
    src="/buildcitylogo_assets/buildcitylogo.png" 
    alt="Build City Logo"
    className="h-40 w-35 mt-.5"
  />

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
              href="https://www.youtube.com/@buidlcity"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://lu.ma/buildcity"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Calendar className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/build__city?igsh=NHI1YnVrbDV5cGp6"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;