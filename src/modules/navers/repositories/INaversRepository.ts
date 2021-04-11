import ICreateNaversDTO from '../dtos/ICreateNaversDTO';
import Naver from '../entities/Naver';

interface INaversRepository {
  create({
    id,
    name,
    birthdate,
    admission_date,
    job_role,
    user_id,
    projects,
  }: ICreateNaversDTO): Promise<Naver>;
  list(user_id: string): Promise<Naver[]>;
  findById(id: string): Promise<Naver>;
  deleteById(id: string): Promise<void>;
  findByIds(ids: string[]): Promise<Naver[]>;
}

export default INaversRepository;
