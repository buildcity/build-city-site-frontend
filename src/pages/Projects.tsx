import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { PageLayout, PageTitle } from '../components/PageLayout';
import { CardGrid } from '../components/Card';

const Projects = () => {
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