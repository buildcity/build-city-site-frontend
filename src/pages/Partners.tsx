import { useState } from "react";
import { PageLayout, PageTitle } from "../components/PageLayout";
import { Card, CardGrid } from "../components/Card";
import { partners, FALLBACK_IMAGE } from "../data/partners";

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
                onError={() => setImageSrc(FALLBACK_IMAGE)}
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
