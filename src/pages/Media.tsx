import { useState, useEffect } from 'react';
import ExpandableMediaCard from '../components/ExpandableMediaCard';
import { mediaService } from '../services/mediaService';
import { Media as MediaType } from '../components/MediaCard';
import { PageLayout, PageTitle } from '../components/PageLayout';
import { CardGrid } from '../components/Card';

const Media = () => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [mediaItems, setMediaItems] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        const data = await mediaService.getAll();
        setMediaItems(data);
      } catch (err) {
        console.error('Failed to fetch media:', err);
        setError('Failed to load media items');
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const handleExpand = (id: string) => {
    setExpandedCardId(id);
  };

  const handleClose = () => {
    setExpandedCardId(null);
  };

  if (loading) {
    return (
      <PageLayout>
        <PageTitle>Media</PageTitle>
        <div className="flex justify-center items-center h-64">
          <div className="text-white">Loading media...</div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <PageTitle>Media</PageTitle>
        <div className="flex justify-center items-center h-64">
          <div className="text-red-400">{error}</div>
        </div>
      </PageLayout>
    );
  }

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
