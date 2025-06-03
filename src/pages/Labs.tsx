import { PageLayout } from '../components/PageLayout';
import { Button } from '../components/ui/button';
import { Beaker, Brain, Code, Rocket, Users } from 'lucide-react';
import { useState } from 'react';
import ExpandableLabCard, { LabProject } from '../components/ExpandableLabCard';

const Labs = () => {
  const [expandedCardTitle, setExpandedCardTitle] = useState<string | null>(null);

  const handleExpand = (title: string) => {
    setExpandedCardTitle(title);
  };

  const handleClose = () => {
    setExpandedCardTitle(null);
  };

  // Method to expand colors throughout the component
  const getProjectColors = (index: number) => {
    const colorMappings = [
      { border: 'border-blue-500', bg: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10', text: 'text-blue-400' }, // Lynkable - Blue to Purple
      { border: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-400' },
      { border: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400' },
      { border: 'border-yellow-500', bg: 'bg-yellow-500/10', text: 'text-yellow-400' },
      { border: 'border-red-500', bg: 'bg-red-500/10', text: 'text-red-400' }
    ];
    return colorMappings[index] || colorMappings[0];
  };

  const labProjects: LabProject[] = [
    {
      title: "Lynkable Community Platform",
      description: "A hybrid community platform that connects local event organizers, artists, and small businesses to strengthen community events.",
      status: "Active",
      tech: ["React", "TypeScript", "Node.js", "Community Tools"],
      users: 0,
      icon: <img src="/project_assets/lynkable-logo.avif" alt="Lynkable" className="h-6 w-6 rounded" />,
      detailedDescription: "Lynkable is revolutionizing how communities connect by creating a unified platform that bridges the gap between event organizers, local artists, and small businesses. Our platform facilitates meaningful collaborations that strengthen community bonds and support local economies.",
      features: [
        "Event discovery and community calendar integration",
        "Artist and venue matching system",
        "Local business partnership opportunities",
        "Community engagement analytics",
        "Real-time collaboration tools"
      ],
      repository: "https://github.com/buildcity/lynkable-project",
      demo: "https://lynkable.netlify.app/",
      timeline: "3-month development cycle with weekly feature releases",
      team: ["Eddy (CTO)", "Mike (Lynkable)"]
    },
    {
      title: "Brainwave Data Marketplace",
      description: "A decentralized marketplace for buying and selling brainwave data collected from Neurosity devices, enabling neuroscience research and applications.",
      status: "Active",
      tech: ["Next.js", "React", "NEAR Protocol", "Neurosity SDK", "IPFS"],
      users: 0,
      icon: <Brain className="h-6 w-6" />,
      detailedDescription: "The Brainwave Data Marketplace is an innovative platform that connects Neurosity device users with researchers and developers who need access to brainwave data. Users can contribute their EEG data from various activities like focus sessions, meditation, sleep, and cognitive tasks, while earning compensation through blockchain-based transactions on the NEAR Protocol.",
      features: [
        "Neurosity device integration and real-time EEG data capture",
        "NEAR Protocol blockchain integration for secure transactions",
        "IPFS storage for decentralized data management",
        "Privacy-preserving data contribution with selective disclosure",
        "Research marketplace for focus, sleep, meditation, and cognitive data",
        "Automated data processing with FFT analysis",
        "Multi-wallet support (NEAR, Ethereum wallets)",
        "Real-time device monitoring and battery tracking"
      ],
      repository: "https://github.com/buildcity/Brainwave_marketplace",
      timeline: "8-month development with continuous marketplace enhancements",
      team: ["Eddy (CTO)", "Adam Fekkah", "Nikita Kravtchouk", "Tony (CEO)"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Research':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Prototype':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Beaker className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-gray-400">BuildCity</span> <span className="text-white">Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-8">
              Where innovation meets experimentation.
            </p>
            <Button className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg">
              Join Our Research
            </Button>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Code className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Research & Development</h3>
                <p className="text-gray-300">
                  Exploring emerging technologies and developing proof-of-concepts for next-generation community solutions.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaborative Innovation</h3>
                <p className="text-gray-300">
                  Bringing together developers, researchers, and visionaries to tackle complex challenges together.
                </p>
              </div>
              <div className="text-center">
                <Rocket className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Open Source Impact</h3>
                <p className="text-gray-300">
                  Contributing to the broader community ecosystem through open-source projects and knowledge sharing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Projects */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Active Lab Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {labProjects.map((project, index) => {
                const colors = getProjectColors(index);
                return (
                  <ExpandableLabCard
                    key={project.title}
                    project={project}
                    isExpanded={expandedCardTitle === project.title}
                    onExpand={handleExpand}
                    onClose={handleClose}
                    colors={colors}
                    getStatusColor={getStatusColor}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Labs;
