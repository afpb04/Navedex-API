import { getRepository, Repository } from 'typeorm';

import ICreateNaversDTO from '../../dtos/ICreateNaversDTO';
import Naver from '../../entities/Naver';
import INaversRepository from '../INaversRepository';

class NaversRepository implements INaversRepository {
  private repository: Repository<Naver>;

  constructor() {
    this.repository = getRepository(Naver);
  }

  async create({
    id,
    name,
    birthdate,
    admission_date,
    job_role,
    user_id,
    projects,
  }: ICreateNaversDTO): Promise<Naver> {
    const naver = this.repository.create({
      id,
      name,
      birthdate,
      admission_date,
      job_role,
      user_id,
      projects,
    });
    await this.repository.save(naver);

    return naver;
  }
  async list(user_id: string): Promise<Naver[]> {
    const navers = await this.repository.find({ user_id });

    return navers;
  }
  async findById(id: string): Promise<Naver> {
    const naver = await this.repository.findOne({
      relations: ['projects'],
      where: {
        id,
      },
    });

    return naver;
  }
  async deleteById(id: string): Promise<void> {
    const naver = await this.repository.findOne(id);
    await this.repository.remove(naver);
  }
}

export default NaversRepository;
