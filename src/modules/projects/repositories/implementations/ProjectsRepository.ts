import { getRepository, Repository } from 'typeorm';

import ICreateProjectDTO from '../../dtos/ICreateProjectDTO';
import Project from '../../entities/Project';
import IProjectRepository from '../IProjectsRepository';

class ProjectsRepository implements IProjectRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = getRepository(Project);
  }
  async create({
    name,
    user_id,
    navers,
    id,
  }: ICreateProjectDTO): Promise<Project> {
    const project = this.repository.create({
      id,
      name,
      user_id,
      navers,
    });
    await this.repository.save(project);

    return project;
  }
  async list(user_id: string): Promise<Project[]> {
    const projects = await this.repository.find({ user_id });

    return projects;
  }
  async findById(id: string): Promise<Project> {
    const project = await this.repository.findOne({
      relations: ['navers'],
      where: {
        id,
      },
    });
    return project;
  }
  async removeById(id: string): Promise<void> {
    const project = await this.repository.findOne(id);
    await this.repository.remove(project);
  }
  async findByIds(ids: string[]): Promise<Project[]> {
    const projects = await this.repository.findByIds(ids);
    return projects;
  }
}

export default ProjectsRepository;
