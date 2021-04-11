import { inject, injectable } from 'tsyringe';

import Project from '../../../projects/entities/Project';
import IProjectRepository from '../../../projects/repositories/IProjectsRepository';
import Naver from '../../entities/Naver';
import INaversRepository from '../../repositories/INaversRepository';

interface IRequest {
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
  projects_id: string[];
}

@injectable()
class CreateNaverUserCase {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
    @inject('ProjectsRepository')
    private projectsRepository: IProjectRepository,
  ) {}
  async execute({
    name,
    birthdate,
    admission_date,
    job_role,
    user_id,
    projects_id,
  }: IRequest): Promise<Naver> {
    const projects = await this.projectsRepository.findByIds(projects_id);

    const naver = await this.naversRepository.create({
      name,
      birthdate,
      admission_date,
      job_role,
      user_id,
      projects,
    });

    return naver;
  }
}

export default CreateNaverUserCase;
