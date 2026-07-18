import projectsData from './projects.json';

const publicUrl = process.env.PUBLIC_URL || '';

export function getProjects() {
  return projectsData.projects.map((project) => ({
    ...project,
    image: `${publicUrl}${project.image}`,
  }));
}

export const PROJECTS = getProjects();
