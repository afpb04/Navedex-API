import { inject, injectable } from 'tsyringe';

import Naver from '../../../navers/entities/Naver';
import Project from '../../entities/Project';
import IProjectRepository from '../../repositories/IProjectsRepository';

interface IRequest {
  name: string;
  user_id: string;
  navers: Naver[];
}

@injectable()
class CreateProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectRepository,
  ) {}

  async execute({ name, user_id, navers }: IRequest): Promise<Project> {
    const project = await this.projectsRepository.create({
      name,
      user_id,
      navers,
    });
    return project;
  }
}

export default CreateProjectUseCase;
