import CTAButton from '../components/CTAButton';
import { fadeInClasses } from '../lib/animations';

// External links constants
const EXTERNAL_LINKS = {
  telegram: "https://t.me/+TKDvfZOEs-E3ODQ5",
  events: "https://lu.ma/user/usr-EI5qHxFqPoGxCJh",
  newsletter: "https://substack.com/@buildcity",
  vibespace: "https://vibespace.so"
} as const;

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-black bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-6xl font-black text-white mb-6 ${fadeInClasses.base}`}>
            Welcome to <span className="text-gray-400">BUILDCITY</span>
          </h1>
          <p className={`text-xl md:text-2xl text-gray-500 mb-8 ${fadeInClasses.delay}`}>
            Building the future of communities. One city at a time.
          </p>
          <div className={`flex flex-col md:flex-row gap-4 justify-center ${fadeInClasses.delay2}`}>
            <CTAButton 
              href={EXTERNAL_LINKS.telegram} 
              variant="primary"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Join Community
            </CTAButton>
            <CTAButton 
              href={EXTERNAL_LINKS.events} 
              variant="secondary"
              className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white border-0"
            >
              Join Our Events
            </CTAButton>
            <CTAButton 
              href={EXTERNAL_LINKS.vibespace} 
              variant="secondary"
              className="bg-gray-900 hover:bg-gray-800"
            >
              Join us on Vibespace
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;