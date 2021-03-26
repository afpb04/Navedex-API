import ICreateNaversDTO from '../dtos/ICreateNaversDTO';
import Naver from '../entities/Naver';

interface INaversRepository {
  create({
    name,
    birthdate,
    admission_date,
    job_role,
    user_id,
  }: ICreateNaversDTO): Promise<Naver>;
  list(user_id: string): Promise<Naver[]>;
  findById(id: string): Promise<Naver>;
  deleteById(id: string): Promise<void>;
}

export default INaversRepository;
