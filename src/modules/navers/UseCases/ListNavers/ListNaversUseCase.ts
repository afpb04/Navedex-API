import { inject, injectable } from 'tsyringe';

import Naver from '../../entities/Naver';
import INaversRepository from '../../repositories/INaversRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListNaversUseCase {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  async execute({ user_id }: IRequest): Promise<Naver[]> {
    const navers = await this.naversRepository.list(user_id);

    return navers;
  }
}
export default ListNaversUseCase;
