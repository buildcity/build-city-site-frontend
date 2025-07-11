import { PageLayout, PageTitle, PageSubtitle } from '../components/PageLayout';
import { Button } from '../components/ui/button';
import { Calendar, MapPin, Users, Zap, Building, Clock } from 'lucide-react';
import { fadeInClasses } from '../lib/animations';

const Buffalo = () => {
  const handleApplyNow = () => {
    // Link to Buffalo Vibe Coding Week Luma page
    window.open('https://lu.ma/8mb7l0cz', '_blank');
  };

  return (
    <PageLayout>
      <PageTitle>
        <span className="text-blue-400">Vibe Coding Week</span> Buffalo
      </PageTitle>
      <PageSubtitle>
        Earn your spot to build at the Buffalo Niagara Medical Campus Innovation Center
      </PageSubtitle>

      <div className={`space-y-16 ${fadeInClasses.delay2}`}>
        {/* Date, Location and CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Turn ideas into revenue generating apps in less than a week. Prompt your way from prototype to PMF with guidance of specialized mentors and support from leading AI companies.
          </p>
          
          {/* Date and Location */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-lg">
              <Calendar className="h-6 w-6 text-blue-400" />
              <span>July 14 – July 18, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span>Buffalo, NY</span>
            </div>
          </div>

          <Button 
            onClick={handleApplyNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-2 border-transparent hover:border-blue-400/50"
          >
            Apply Now!
          </Button>
        </div>

        {/* Tagline Section */}
        <div className="text-center bg-gray-900/50 p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Speak it. Build it. Ship it.
          </h2>
          <p className="text-xl text-blue-400 mb-6">
            Vibe Coding Week Season 0 is coming to Buffalo
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We're partnering with the Buffalo Niagara Medical Campus (BNMC) and hosting this first edition of Build City Vibe Coding Week at the BNMC Innovation Center - one of Buffalo's leading hubs for technology, healthcare, and entrepreneurship.{' '}
            <a 
              href="https://bnmc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Learn more about BNMC here
            </a>
          </p>
        </div>

        {/* What is Vibe Coding Week */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">What is Vibe Coding Week?</h2>
          <p className="text-lg text-gray-300 text-center mb-12 leading-relaxed">
            Vibe Coding Week Season 0 is not a hackathon, accelerator, or conference. It is a creative build sprint where companies, students, and builders collide around real-world problems--and move fast to turn sparks into working prototypes.
          </p>

          {/* Building Models */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Reverse Pitch Flow</h3>
              <p className="text-gray-300">
                Companies present real-world problems they want solved.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Open Build Flow</h3>
              <p className="text-gray-300">
                Builders bring their own ideas to life.
              </p>
            </div>
          </div>

          {/* Who Should Attend */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Who should attend:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <p className="text-gray-300">Builders, engineers, and students</p>
              </div>
              <div className="text-center p-4">
                <Building className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <p className="text-gray-300">Companies and organizations with challenges to solve</p>
              </div>
              <div className="text-center p-4">
                <Zap className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <p className="text-gray-300">Creators, artists, and entrepreneurs</p>
              </div>
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <p className="text-gray-300">Community members interested in AI, blockchain, and innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-gray-900/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Schedule</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg">
              <Clock className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-400">07/14: Intro to Vibe Coding and Reverse Pitch event</h3>
                <p className="text-gray-300">4pm to 9pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg">
              <Clock className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-400">07/15: Co-working with mentorship</h3>
                <p className="text-gray-300">9am to 5pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg">
              <Clock className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-400">07/16: Co-working with mentorship</h3>
                <p className="text-gray-300">9am to 5pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg">
              <Clock className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-400">07/17: Co-working with mentorship</h3>
                <p className="text-gray-300">9am to 5pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg">
              <Clock className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-400">07/18: Co-working with mentorship and Project Demonstrations</h3>
                <p className="text-gray-300">9am to 1pm and 2pm to 5pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mentors */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Mentors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Build City Lead: Matheus Pagani</h3>
              <p className="text-gray-300">
                Engineer, teacher, and founder of Venture Miner. Matheus brings over a decade of experience in AI, blockchain, and innovation, and has mentored thousands of developers through specialized bootcamps.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">BNMC Lead: Saverio "sam" Marrazzo</h3>
              <p className="text-gray-300">
                Chief Innovation Office at BNMC, helping organizations innovate and drive new ideas across Buffalo's tech and healthcare sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Partners/Sponsors */}
        <div className="bg-gray-900/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Partners/Sponsors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Buffalo Niagara Medical Campus Innovation Center</h3>
              <div className="p-6 rounded-lg flex items-center justify-center min-h-[120px]">
                <img 
                  src="https://i0.wp.com/bnmc.org/wp-content/uploads/2021/09/cropped-BNMC_logo.png?w=1378&ssl=1" 
                  alt="Buffalo Niagara Medical Campus Logo"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Ganson Street</h3>
              <div className="p-6 rounded-lg flex items-center justify-center min-h-[120px]">
                <img 
                  src="https://i0.wp.com/gansonstreet.com/wp-content/uploads/2025/06/gansonstreet_logo.png-removebg-preview.png?fit=284%2C136&ssl=1" 
                  alt="Ganson Street Logo"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Venture Miner</h3>
              <div className="p-6 rounded-lg flex items-center justify-center min-h-[120px]">
                <img 
                  src="/partner_assets/Venture_Miner_logo.webp" 
                  alt="Venture Miner Logo"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Find */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">What will you find</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Collaborate with companies on real-world problems</h3>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Build ideas with potential to become funded startups</h3>
            </div>
            <div className="text-center p-6">
              <Building className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Access mentorship and industry connections</h3>
            </div>
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Be part of Buffalo's growing innovation ecosystem</h3>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join us for Vibe Coding Week Season 0 and help shape the next wave of ideas.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Apply today and grant your spot in this unique opportunity! (we need to know how much pizza to order so please apply soon so we can prepare properly 🙏)
          </p>
          <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
            <strong>Notice:</strong> This is a five-days event happening from Monday the 14th of July to the Friday the 18th of July. Since Luma has ended support for multi-session events this is how we can have a single sign-up for the week-long event ⚠️⚠️⚠️
          </p>
          <p className="text-sm text-gray-400 mb-8">
            By registering to this event you agree with our{' '}
            <a 
              href="https://docs.google.com/document/d/15FFj2iWWaqPcWsPzkjaj-SU6d07eXiA2gVVgixDUN5Y/edit?tab=t.0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline font-bold"
            >
              Code of Conduct
            </a>
            .
          </p>
          <Button 
            onClick={handleApplyNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-2 border-transparent hover:border-blue-400/50"
          >
            Apply Now!
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Buffalo;
