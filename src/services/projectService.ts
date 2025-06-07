import { supabase } from '../lib/supabase'
import { Project } from '../components/ProjectCard'

export interface ProjectService {
  getAllProjects(): Promise<Project[]>
  getProjectById(id: string): Promise<Project | null>
  getProjectsByTag(tag: string): Promise<Project[]>
}

export const projectService: ProjectService = {
  async getAllProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching projects:', error)
      throw new Error('Failed to fetch projects')
    }

    // Transform the database response to match our Project interface
    return data.map(project => ({
      id: project.id,
      title: project.title,
      description: project.description,
      imageUrl: project.image_url,
      githubUrl: project.github_url,
      demoUrl: project.demo_url,
      tags: project.tags
    }))
  },

  async getProjectById(id: string): Promise<Project | null> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // Project not found
      }
      console.error('Error fetching project:', error)
      throw new Error('Failed to fetch project')
    }

    // Transform the database response to match our Project interface
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      imageUrl: data.image_url,
      githubUrl: data.github_url,
      demoUrl: data.demo_url,
      tags: data.tags
    }
  },

  async getProjectsByTag(tag: string): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .contains('tags', [tag])
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching projects by tag:', error)
      throw new Error('Failed to fetch projects by tag')
    }

    // Transform the database response to match our Project interface
    return data.map(project => ({
      id: project.id,
      title: project.title,
      description: project.description,
      imageUrl: project.image_url,
      githubUrl: project.github_url,
      demoUrl: project.demo_url,
      tags: project.tags
    }))
  }
}
