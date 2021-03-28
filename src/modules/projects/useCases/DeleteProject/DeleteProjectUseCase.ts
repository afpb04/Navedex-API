import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import IProjectsRepository from '../../repositories/IProjectsRepository';

interface IRequest {
  user_id: string;
  project_id: string;
}

@injectable()
class DeleteProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({ project_id, user_id }: IRequest): Promise<void> {
    const project = await this.projectsRepository.findById(project_id);

    if (!project) {
      throw new AppError('Project does not exists!');
    }
    if (project.user_id !== user_id) {
      throw new AppError('Project does not exists!');
    }

    await this.projectsRepository.removeById(project.id);
  }
}

export default DeleteProjectUseCase;
