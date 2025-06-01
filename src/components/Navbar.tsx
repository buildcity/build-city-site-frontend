import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cities = [
    { name: 'New York City', active: true },
    { name: 'Buffalo', active: true },
    { name: 'Yonkers', active: true },
  ];

  const navLinks = [
    { path: '/projects', label: 'Projects' },
    { path: '/media', label: 'Media' },
    { path: '/partners', label: 'Partners' },
    { path: '/membership', label: 'Membership' }, // 👈 Added
  ];

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/buildcitylogo_assets/buildcitylogo.png"
                alt="Build City Logo"
                className="h-35 w-40"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative group">
                <button className="px-3 py-2 text-gray-300 hover:text-white">
                  Cities
                </button>
                <div className="absolute z-10 hidden group-hover:block w-48 bg-gray-900 border border-gray-800">
                  {cities.map((city) => (
                    <a
                      key={city.name}
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        city.active ? 'text-gray-200' : 'text-gray-400'
                      } hover:bg-gray-800`}
                    >
                      {city.name}
                    </a>
                  ))}
                </div>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 text-gray-300 hover:text-white text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 text-gray-300 hover:text-white text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
