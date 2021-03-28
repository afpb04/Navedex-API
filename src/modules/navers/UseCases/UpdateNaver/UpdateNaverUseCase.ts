import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import Project from '../../../projects/entities/Project';
import Naver from '../../entities/Naver';
import INaversRepository from '../../repositories/INaversRepository';

interface IRequest {
  id: string;
  job_role: string;
  user_id: string;
  projects: Project[];
}

@injectable()
class UpdateNaverUseCase {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  async execute({ id, job_role, user_id, projects }: IRequest): Promise<Naver> {
    const naver = await this.naversRepository.findById(id);
    if (!naver) {
      throw new AppError('Naver does not exists!');
    }
    if (naver.user_id !== user_id) {
      throw new AppError('Naver does not exists!');
    }
    naver.job_role = job_role;
    naver.projects = projects;

    await this.naversRepository.create(naver);

    return naver;
  }
}

export default UpdateNaverUseCase;
