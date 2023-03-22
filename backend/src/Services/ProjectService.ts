import Project from '../Domains/Project';
import IProject from '../Interfaces/IProject';
import IError from '../Interfaces/IError';
import ProjectODM from '../Models/ProjectODM';

const NOT_FOUND_ERROR = {
  type: 'NOT_FOUND', message: 'Project(s) not found',
} as IError;

export default class ProjectService {
  private createProjectDomain(project: IProject): Project {
    return new Project(project);
  }

  public async create(project: IProject): Promise<Project | null | undefined> {
    const projectODM = new ProjectODM();
    const newProject = await projectODM.create(project);

    return this.createProjectDomain(newProject);
  }

  public async getAll(): Promise<(Project | null)[] > {
    const projectODM = new ProjectODM();
    const projects = await projectODM.get();

    if (projects.length) return projects.map(this.createProjectDomain);

    throw NOT_FOUND_ERROR;
  }

  public async findByAuthor(author: string): Promise<Project[] | null> {
    const projectODM = new ProjectODM();
    const projects = await projectODM.findByAuthor(author);

    if (projects.length) return projects.map(this.createProjectDomain);

    throw NOT_FOUND_ERROR;
  }

  public async findById(id: string): Promise<Project | null> {
    const projectODM = new ProjectODM();
    const project = await projectODM.find(id);

    if (project) return this.createProjectDomain(project);

    throw NOT_FOUND_ERROR;
  }

  public async updateById(id: string, project: IProject): Promise<Project | null> {
    const projectODM = new ProjectODM();
    const updatedProject = await projectODM.findOneAndUpdate(id, project);

    if (updatedProject) return this.createProjectDomain(updatedProject);

    throw NOT_FOUND_ERROR;
  }

  public async removeById(id: string): Promise<null> {
    const projectODM = new ProjectODM();
    const project = await projectODM.findByIdAndRemove(id);
    
    if (project) return null;

    throw NOT_FOUND_ERROR;
  }
}
