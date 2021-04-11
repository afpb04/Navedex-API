import { inject, injectable } from 'tsyringe';

import Naver from '../../../navers/entities/Naver';
import INaversRepository from '../../../navers/repositories/INaversRepository';
import Project from '../../entities/Project';
import IProjectRepository from '../../repositories/IProjectsRepository';

interface IRequest {
  name: string;
  user_id: string;
  navers_id: string[];
}

@injectable()
class CreateProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectRepository,
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  async execute({ name, user_id, navers_id }: IRequest): Promise<Project> {
    const navers = await this.naversRepository.findByIds(navers_id);
    const project = await this.projectsRepository.create({
      name,
      user_id,
      navers,
    });
    return project;
  }
}

export default CreateProjectUseCase;
