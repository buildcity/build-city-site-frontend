import React from 'react';
import Card from './common/Card';
import { Partner } from '../types/Partner';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <Card
      title={partner.title}
      description={partner.description}
      imageUrl={partner.logo_url}
      link={partner.site}
    />
  );
};

export default PartnerCard;