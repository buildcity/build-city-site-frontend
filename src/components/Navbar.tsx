import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { componentStyles } from '../lib/styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cities = [
    { name: 'New York City', active: true, path: '/nyc' },
    { name: 'Buffalo', active: true, path: '/buffalo' },
  ];

  const navLinks = [
    { path: '/events', label: 'Events' }, 
    { path: '/projects', label: 'Projects' },
    { path: '/labs', label: 'Labs' },
    { path: '/media', label: 'Media' },
    { path: '/partners', label: 'Partners' },
    { path: 'https://substack.com/@buildcity', label: 'Newsletter', external: true },
    { path: 'https://vibespace.so', label: 'Vibespace.so', external: true },
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
                    <Link
                      key={city.name}
                      to={city.path}
                      className={`block px-4 py-2 text-sm ${
                        city.active ? 'text-gray-200' : 'text-gray-400'
                      } hover:bg-gray-800`}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
              {navLinks.map((link) => 
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    className={componentStyles.navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={componentStyles.navLink}
                  >
                    {link.label}
                  </Link>
                )
              )}
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

      {/* Mobile Horizontal Scrollable Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="flex overflow-x-auto scrollbar-horizontal px-4 py-3 space-x-4">
            <div className="flex items-center space-x-4 whitespace-nowrap">
              {/* Cities section */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 uppercase tracking-wide flex-shrink-0">Cities:</span>
                {cities.map((city) => (
                  <Link
                    key={city.name}
                    to={city.path}
                    className={`px-3 py-1 text-sm rounded ${
                      city.active 
                        ? 'bg-gray-700 text-gray-200' 
                        : 'bg-gray-800 text-gray-400'
                    } hover:bg-gray-600 transition-colors flex-shrink-0`}
                    onClick={() => setIsOpen(false)}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              
              {/* Separator */}
              <div className="h-6 w-px bg-gray-600 flex-shrink-0"></div>
              
              {/* Navigation links */}
              {navLinks.map((link) => 
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors flex-shrink-0 whitespace-nowrap"
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors flex-shrink-0 whitespace-nowrap"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
