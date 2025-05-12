import React, { memo, useState } from 'react';

export interface Media {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  type: "article" | "twitter" | "youtube" | "workshop" | "bootcamp";
  tags: string[];
}

interface MediaCardProps {
  media: Media;
}

const MediaCard = memo(({ media }: MediaCardProps) => {
  const { id, title, description, imageUrl, url, type, tags } = media;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // 👇 Apply a taller height only for the Byte Ai card
  const imageWrapperClass =
  id === '2'
    ? 'relative h-[450px] w-full'
    : id === '1'
    ? 'relative h-[450px] w-[410px]'
    : id === '3'
    ? 'relative h-[450px] w-[400px]'
    : 'relative aspect-video';
  
// default height

    

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105">
        <div className={imageWrapperClass}>
          <img
            src={imageError ? '/fallback-image.png' : imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center"
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
