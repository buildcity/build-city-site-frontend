import { PageLayout } from '../components/PageLayout';
import { Building, ExternalLink } from 'lucide-react';
import CTAButton from '../components/CTAButton';

// External links constants
const EXTERNAL_LINKS = {
  telegram: "https://t.me/+TKDvfZOEs-E3ODQ5",
  events: "https://lu.ma/user/usr-EI5qHxFqPoGxCJh",
  newsletter: "https://substack.com/@buildcity",
  vibespace: "https://vibespace.so"
} as const;

const NYC = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building className="h-16 w-16 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-blue-400">Build City</span> <span className="text-white">New York</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              The future of innovation in the Big Apple
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Stay tuned for future activations in New York City. We're working on bringing amazing opportunities to the NYC tech and innovation community.
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Coming Soon to NYC
            </h2>
            <p className="text-xl text-blue-400 mb-8">
              Stay tuned for future activations
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              While we're building something amazing for New York City, join our community to stay updated on all Build City events and opportunities. Connect with builders, innovators, and creators from around the world.
            </p>

            {/* Social Links */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Community</h3>
                <p className="text-gray-300 text-sm mb-4">Join our Telegram community to connect with builders worldwide</p>
                <CTAButton 
                  href={EXTERNAL_LINKS.telegram} 
                  variant="secondary"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Telegram
                </CTAButton>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Events</h3>
                <p className="text-gray-300 text-sm mb-4">Follow our Luma page for upcoming events and activations</p>
                <CTAButton 
                  href={EXTERNAL_LINKS.events} 
                  variant="secondary"
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Luma Events
                </CTAButton>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Newsletter</h3>
                <p className="text-gray-300 text-sm mb-4">Subscribe to our Substack for updates and insights</p>
                <CTAButton 
                  href={EXTERNAL_LINKS.newsletter} 
                  variant="secondary"
                  className="bg-orange-600 hover:bg-orange-700 text-white w-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Substack
                </CTAButton>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Vibespace</h3>
                <p className="text-gray-300 text-sm mb-4">Connect with us on our social platform</p>
                <CTAButton 
                  href={EXTERNAL_LINKS.vibespace} 
                  variant="secondary"
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vibespace
                </CTAButton>
              </div>
            </div>
          </div>
        </div>

        {/* What's Coming */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Innovation Events</h3>
                <p className="text-gray-300">
                  Cutting-edge workshops, hackathons, and build sprints designed for the NYC tech ecosystem.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Community Building</h3>
                <p className="text-gray-300">
                  Connecting builders, entrepreneurs, and innovators across the five boroughs and beyond.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Partnership Opportunities</h3>
                <p className="text-gray-300">
                  Collaborations with leading NYC institutions, companies, and innovation hubs.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Future-Forward Projects</h3>
                <p className="text-gray-300">
                  AI, blockchain, and emerging technology initiatives tailored for the NYC market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be the first to know when we launch in NYC
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our community today and stay connected for exclusive updates about Build City New York activations.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <CTAButton 
                href={EXTERNAL_LINKS.telegram} 
                variant="primary"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
              >
                Join Community
              </CTAButton>
              <CTAButton 
                href={EXTERNAL_LINKS.newsletter} 
                variant="secondary"
                className="bg-gray-900 hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
              >
                Subscribe to Newsletter
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NYC;
