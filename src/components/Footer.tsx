import { Github, Twitter, MessageCircle, Calendar, Youtube, Instagram } from 'lucide-react';
import { componentStyles } from '../lib/styles';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start leading-none">
  <img
    src="/buildcitylogo_assets/buildcitylogoadjust.png" 
    alt="Build City Logo"
    className="h-5"
  />

</div>

          
          <div className="flex space-x-6">
            <a
              href="https://github.com/buildcity"
              target="_blank"
              rel="noopener noreferrer"
              className={componentStyles.socialIcon}
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/buidlcity"
              target="_blank"
              rel="noopener noreferrer"
              className={componentStyles.socialIcon}
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://t.me/buildcity"
              target="_blank"
              rel="noopener noreferrer"
              className={componentStyles.socialIcon}
            >
              <MessageCircle className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@buidlcity"
              target="_blank"
              rel="noopener noreferrer"
              className={componentStyles.socialIcon}
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://lu.ma/buildcity"
              target="_blank"
              rel="noopener noreferrer"
              className={componentStyles.socialIcon}
            >
              <Calendar className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/build__city?igsh=NHI1YnVrbDV5cGp6"
              target="_blank"
              rel="noopener noreferrer"
              className={componentStyles.socialIcon}
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
