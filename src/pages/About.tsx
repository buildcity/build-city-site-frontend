import { PageLayout, PageTitle, PageSubtitle } from '../components/PageLayout';
import { Card, CardGrid } from '../components/Card';
import { teamProfiles, type TeamProfile } from '../data/team';

const About = () => {
  return (
    <PageLayout>
      <PageTitle>About BuildCity</PageTitle>
      <div className="space-y-8 text-gray-300 animate-fade-in-delay">
        <p>
          BuildCity is a global community of Web3 builders, developers, and innovators. 
          We're creating spaces for collaboration, learning, and growth in cities around the world.
        </p>
        <p>
          Our mission is to accelerate the adoption of Web3 technologies by fostering local communities
          and providing resources for builders to create the future of the internet.
        </p>
        <p>
          Starting in New York City, we're expanding to major tech hubs globally, bringing together
          talented individuals who share our vision of a decentralized future.
        </p>
      </div>
      
      {teamProfiles.length > 0 && (
        <div className="mt-16">
          <PageSubtitle>Meet Our Team</PageSubtitle>
          <CardGrid>
            {teamProfiles.map((profile: TeamProfile, index: number) => (
              <Card key={index} interactive className="text-center">
                <a href={profile.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                </a>
                <h3 className="text-xl font-bold">{profile.name}</h3>
                {profile.role && <p className="text-sm text-blue-400 mt-1">{profile.role}</p>}
                <p className="text-sm text-gray-400 mt-2">{profile.description}</p>
              </Card>
            ))}
          </CardGrid>
        </div>
      )}
    </PageLayout>
  );
};

export default About;
