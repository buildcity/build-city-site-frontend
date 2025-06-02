import { useState } from "react";
import { PageLayout, PageTitle } from "../components/PageLayout";
import { Card, CardGrid } from "../components/Card";

const partners = [
  {
    name: "Celo",
    description:
      "Celo is a carbon-negative blockchain platform bringing accessible and affordable decentralized finance (DeFi) to mobile users worldwide.",
    image: "/partner_assets/CeloLogo.jpg",
    link: "https://celo.org",
  },
  {
    name: "Venture Miner",
    description:
      "VentureMiner integrates Web3 and AI technologies to unlock new possibilities for your business.",
    image: "/partner_assets/Venture_Miner_logo.webp",
    link: "https://ventureminer.com",
  },
  {
    name: "Near Protocol",
    description:
      "NEAR Protocol is a high-performance, carbon-neutral blockchain platform designed to be fast, secure, and infinitely scalable, enabling developers to build decentralized applications with ease.",
    image: "/partner_assets/near_logo.png",
    link: "https://near.org",
  },
];

const Partners = () => {
  return (
    <PageLayout narrow>
      <PageTitle>Partners</PageTitle>
      <CardGrid>
        {partners.map((partner) => {
          const [imageSrc, setImageSrc] = useState(partner.image);

          return (
            <Card
              key={partner.name}
              interactive
              href={partner.link}
            >
              <img
                src={imageSrc}
                alt={`Logo of ${partner.name}`}
                className="w-full h-32 object-contain rounded-t"
                onError={() => {
                  setImageSrc("/dist/partner_assets/fallback.png");
                  console.error(`Failed to load image: ${partner.image}`);
                }}
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{partner.name}</h2>
                <p className="text-gray-300 mt-2">{partner.description}</p>
              </div>
            </Card>
          );
        })}
      </CardGrid>
    </PageLayout>
  );
};

export default Partners;
