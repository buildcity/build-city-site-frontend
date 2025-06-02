import { memo, useState } from 'react';
import { Play, X } from 'lucide-react';

export interface Media {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  type: "article" | "twitter" | "youtube" | "workshop" | "bootcamp";
  tags: string[];
  // Dynamic content based on type
  twitterSpacesId?: string; // For Twitter Spaces audio
  youtubeVideoId?: string; // For YouTube embeds
  articlePreview?: string; // For article first paragraph
}

interface ExpandableMediaCardProps {
  media: Media;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  onClose: () => void;
}

const ExpandableMediaCard = memo(({ media, isExpanded, onExpand, onClose }: ExpandableMediaCardProps) => {
  const { id, title, description, imageUrl, url, type, tags, twitterSpacesId, youtubeVideoId, articlePreview } = media;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleCardClick = () => {
    if (!isExpanded) {
      onExpand(id);
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (isExpanded) {
    return (
      <div 
        className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center p-4 pt-20"
        onClick={handleOverlayClick}
      >
        <div 
          className={`
            bg-gray-900 rounded-lg max-w-6xl w-full max-h-[calc(100vh-6rem)] overflow-hidden
            transform transition-all duration-500 ease-out
            animate-slide-in-left flex flex-col lg:flex-row
          `}
        >
          {/* Image Section - 1/3 width */}
          <div className="lg:w-1/3 w-full h-64 lg:h-auto relative">
            {!imageError ? (
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">Image not available</span>
              </div>
            )}
          </div>

          {/* Content Section - 2/3 width */}
          <div className="lg:w-2/3 w-full p-6 flex flex-col overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={handleCloseClick}
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content based on media type */}
            <div className="flex-1 overflow-y-auto">
              {type === 'twitter' && twitterSpacesId && (
                <div className="space-y-6">
                  {/* Twitter Spaces Player */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Twitter Spaces</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
                    <div className="flex items-center space-x-4">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        <Play size={20} />
                        <span>Listen on Twitter Spaces</span>
                      </a>
                      <div className="text-gray-400 text-sm">
                        Opens in new window
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {type === 'youtube' && youtubeVideoId && (
                <div className="space-y-6">
                  {/* YouTube Link */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">YouTube Video</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
                    <div className="flex items-center space-x-4">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        <Play size={20} />
                        <span>Watch on YouTube</span>
                      </a>
                      <div className="text-gray-400 text-sm">
                        Opens in new window
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {type === 'article' && (
                <div className="space-y-4">
                  {articlePreview && (
                    <div className="bg-gray-800 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Preview</h3>
                      <p className="text-gray-300 leading-relaxed">{articlePreview}</p>
                    </div>
                  )}
                  <p className="text-gray-300">{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Read Full Article
                  </a>
                </div>
              )}

              {(type === 'workshop' || type === 'bootcamp') && (
                <div className="space-y-4">
                  <p className="text-gray-300">{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Collapsed card view
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-gray-750"
      onClick={handleCardClick}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">Image not available</span>
          </div>
        )}
        
        {/* Type indicator */}
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full capitalize">
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

ExpandableMediaCard.displayName = 'ExpandableMediaCard';

export default ExpandableMediaCard;
