import { PageLayout, PageTitle, PageSubtitle } from '../components/PageLayout';
import { Button } from '../components/ui/button';
import { Mail, MessageSquare, Users } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      <PageTitle>Contact</PageTitle>
      <PageSubtitle>
        Get in touch with the Build City team. We're here to help you build, connect, and grow.
      </PageSubtitle>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-gray-900 rounded-lg">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-300 mb-4">Send us a message and we'll get back to you soon.</p>
          <Button variant="outline" asChild>
            <a href="mailto:hello@buildcity.org">hello@buildcity.org</a>
          </Button>
        </div>
        
        <div className="text-center p-6 bg-gray-900 rounded-lg">
          <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Join Discord</h3>
          <p className="text-gray-300 mb-4">Connect with our community and get real-time support.</p>
          <Button variant="outline" asChild>
            <a href="https://discord.gg/buildcity" target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </Button>
        </div>

        <div className="text-center p-6 bg-gray-900 rounded-lg">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Partnership</h3>
          <p className="text-gray-300 mb-4">Interested in partnering with Build City?</p>
          <Button variant="outline" asChild>
            <a href="mailto:partnerships@buildcity.org">Get in Touch</a>
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Build?</h3>
        <p className="text-gray-300 mb-6">
          Join our community of builders, creators, and innovators working together to create the future.
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSebs4h31ju2qrJ2ElC-v_W9eJRMEgK34_pT_NmtfXPAok-BvA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </Button>
      </div>
    </PageLayout>
  );
};

export default Contact;