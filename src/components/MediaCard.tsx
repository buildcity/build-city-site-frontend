import React, { memo, useState } from 'react';

export interface Media {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  type: "article" | "twitter" | "video" | "workshop";
  tags: string[];
}

interface MediaCardProps {
  project: Media;
}

const MediaCard = memo(({ project }: MediaCardProps) => {
  const { title, description, imageUrl, url, type, tags } = project;
  const [imageError, setImageError] = useState(false);

  

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105">
        <div className="relative aspect-video">
          <img 
            src={imageError ? '/fallback-image.png' : imageUrl} 
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-white truncate">{title}</h3>
            <span className="text-xs uppercase font-semibold text-gray-400">{type}</span>

          </div>

          <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
});

MediaCard.displayName = 'MediaCard';

export default MediaCard;