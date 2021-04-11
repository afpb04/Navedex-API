import ICreateProjectDTO from '../dtos/ICreateProjectDTO';
import Project from '../entities/Project';

interface IProjectRepository {
  create({ name, user_id, navers, id }: ICreateProjectDTO): Promise<Project>;
  list(user_id: string): Promise<Project[]>;
  findById(id: string): Promise<Project>;
  removeById(id: string): Promise<void>;
  findByIds(ids: string[]): Promise<Project[]>;
}

export default IProjectRepository;
