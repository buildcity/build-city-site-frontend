import { useState, useEffect } from "react";
import { PageLayout, PageTitle } from "../components/PageLayout";
import { Card, CardGrid } from "../components/Card";
import { getPartners, type Partner } from "../services/partnerService";

const FALLBACK_IMAGE = "/partner_assets/placeholder-logo.png";

const Partners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const partnersData = await getPartners();
        setPartners(partnersData);
      } catch (err) {
        setError('Failed to load partners');
        console.error('Error fetching partners:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return (
      <PageLayout narrow>
        <PageTitle>Partners</PageTitle>
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-400">Loading partners...</div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout narrow>
        <PageTitle>Partners</PageTitle>
        <div className="flex justify-center items-center h-64">
          <div className="text-red-400">{error}</div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout narrow>
      <PageTitle>Partners</PageTitle>
      <CardGrid>
        {partners.map((partner) => {
          const PartnerCard = () => {
            const [imageSrc, setImageSrc] = useState(partner.image_url);

            return (
              <Card
                key={partner.id}
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
          };

          return <PartnerCard key={partner.id} />;
        })}
      </CardGrid>
    </PageLayout>
  );
};

export default Partners;
