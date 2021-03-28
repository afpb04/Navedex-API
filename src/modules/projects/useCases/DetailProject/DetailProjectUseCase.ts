import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import Project from '../../entities/Project';
import IProjectsRepository from '../../repositories/IProjectsRepository';

interface IRequest {
  project_id: string;
  user_id: string;
}

@injectable()
class DetailProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({ project_id, user_id }: IRequest): Promise<Project> {
    const project = await this.projectsRepository.findById(project_id);

    if (!project) {
      throw new AppError('Project does not exists!');
    }
    if (project.user_id !== user_id) {
      throw new AppError('Project does not exists!');
    }
    return project;
  }
}

export default DetailProjectUseCase;
