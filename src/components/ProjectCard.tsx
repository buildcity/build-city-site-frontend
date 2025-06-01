import React, { memo, useState } from 'react';
import { Github } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const { title, description, imageUrl, demoUrl, githubUrl, tags } = project;
  const [imageError, setImageError] = useState(false);

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <a 
      href={demoUrl}
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
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors z-10"
              aria-label={`View ${title} on GitHub`}
              onClick={handleGithubClick}
            >
              <Github size={20} />
            </a>
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

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;