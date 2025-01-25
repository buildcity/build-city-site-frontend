import React from 'react';
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

const ProjectCard = ({ project }: { project: Project }) => (
  <a 
    href={project.demoUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block hover:opacity-90 transition-opacity"
  >
    <div className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <Github className="text-gray-400" size={20} />
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

export default ProjectCard;