import { useState, useEffect } from 'react';
import ProjectCard, { Project } from '../components/ProjectCard';
import { projectService } from '../services/projectService';
import { PageLayout, PageTitle } from '../components/PageLayout';
import { CardGrid } from '../components/Card';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectData = await projectService.getAllProjects();
        setProjects(projectData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <PageTitle>Projects</PageTitle>
        <div className="flex justify-center items-center min-h-64">
          <div className="text-white text-lg">Loading projects...</div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <PageTitle>Projects</PageTitle>
        <div className="flex justify-center items-center min-h-64">
          <div className="text-red-400 text-lg">Error: {error}</div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageTitle>Projects</PageTitle>
      <CardGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </CardGrid>
    </PageLayout>
  );
};

export default Projects;