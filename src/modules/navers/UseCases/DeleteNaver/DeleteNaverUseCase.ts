import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import INaversRepository from '../../repositories/INaversRepository';

interface IRequest {
  user_id: string;
  naver_id: string;
}

@injectable()
class DeleteNaverUseCase {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  async execute({ naver_id, user_id }: IRequest): Promise<void> {
    const naver = await this.naversRepository.findById(naver_id);

    if (!naver) {
      throw new AppError('Naver does not exists!');
    }
    if (naver.user_id !== user_id) {
      throw new AppError('Naver does not exists!');
    }

    await this.naversRepository.deleteById(naver.id);
  }
}

export default DeleteNaverUseCase;
