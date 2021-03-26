import { inject, injectable } from 'tsyringe';

import Naver from '../../entities/Naver';
import INaversRepository from '../../repositories/INaversRepository';

interface IRequest {
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
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
  }: IRequest): Promise<Naver> {
    const naver = await this.naversRepository.create({
      name,
      birthdate,
      admission_date,
      job_role,
      user_id,
    });
    return naver;
  }
}

export default CreateNaverUserCase;
