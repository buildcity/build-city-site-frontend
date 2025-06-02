import { useState } from 'react';
import ExpandableMediaCard from '../components/ExpandableMediaCard';
import { mediaItems } from '../data/media';
import { PageLayout, PageTitle } from '../components/PageLayout';
import { CardGrid } from '../components/Card';

const Media = () => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    setExpandedCardId(id);
  };

  const handleClose = () => {
    setExpandedCardId(null);
  };

  return (
    <PageLayout>
      <PageTitle>Media</PageTitle>
      <CardGrid>
        {mediaItems.map((media) => (
          <ExpandableMediaCard 
            key={media.id} 
            media={media} 
            isExpanded={expandedCardId === media.id}
            onExpand={handleExpand}
            onClose={handleClose}
          />
        ))}
      </CardGrid>
    </PageLayout>
  );
};

export default Media;
