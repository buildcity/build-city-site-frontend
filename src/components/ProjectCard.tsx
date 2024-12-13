import React from 'react';
import Card from './common/Card';

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

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      title={project.title}
      description={project.description}
      imageUrl={project.imageUrl}
      link={project.demoUrl}
      tags={project.tags}
    />
  );
};

export default ProjectCard;