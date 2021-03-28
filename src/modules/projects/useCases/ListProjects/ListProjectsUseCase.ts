import { inject, injectable } from 'tsyringe';

import Project from '../../entities/Project';
import IProjectsRepository from '../../repositories/IProjectsRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProjectsUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({ user_id }: IRequest): Promise<Project[]> {
    const projects = await this.projectsRepository.list(user_id);

    return projects;
  }
}
export default ListProjectsUseCase;
