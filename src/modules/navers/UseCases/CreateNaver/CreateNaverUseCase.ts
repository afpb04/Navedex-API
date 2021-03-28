import { inject, injectable } from 'tsyringe';

import Project from '../../../projects/entities/Project';
import Naver from '../../entities/Naver';
import INaversRepository from '../../repositories/INaversRepository';

interface IRequest {
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
  projects: Project[];
}

@injectable()
class CreateNaverUserCase {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}
  async execute({
    name,
    birthdate,
    admission_date,
    job_role,
    user_id,
    projects,
  }: IRequest): Promise<Naver> {
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
