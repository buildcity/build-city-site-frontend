import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags?: string[];
  metadata?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  link,
  tags,
  metadata
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className={`${isExpanded ? '' : 'aspect-square'} flex flex-col`}>
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          {metadata && <div className="mb-3">{metadata}</div>}

          <p className={`text-gray-400 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {description}
          </p>

          {/* Tags Section */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;