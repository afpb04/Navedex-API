import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import Naver from '../../../navers/entities/Naver';
import Project from '../../entities/Project';
import IProjectRepository from '../../repositories/IProjectsRepository';

interface IRequest {
  id: string;
  user_id: string;
  navers: Naver[];
}

@injectable()
class UpdateProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectRepository,
  ) {}

  async execute({ id, navers, user_id }: IRequest): Promise<Project> {
    const project = await this.projectsRepository.findById(id);
    if (!project) {
      throw new AppError('Project does not exists!');
    }
    if (project.user_id !== user_id) {
      throw new AppError('Project does not exists!');
    }
    project.navers = navers;

    await this.projectsRepository.create(project);

    return project;
  }
}

export default UpdateProjectUseCase;
