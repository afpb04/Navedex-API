import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import Naver from '../../entities/Naver';
import INaversRepository from '../../repositories/INaversRepository';

interface IRequest {
  naver_id: string;
  user_id: string;
}

@injectable()
class DetailNaverUseCase {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  async execute({ naver_id, user_id }: IRequest): Promise<Naver> {
    const naver = await this.naversRepository.findById(naver_id);

    if (!naver) {
      throw new AppError('Naver does not exists!');
    }
    if (naver.user_id !== user_id) {
      throw new AppError('Naver does not exists!');
    }
    return naver;
  }
}

export default DetailNaverUseCase;
