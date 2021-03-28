import { container } from 'tsyringe';

import NaversRepository from '../../modules/navers/repositories/implementations/NaversRepository';
import INaversRepository from '../../modules/navers/repositories/INaversRepository';
import ProjectsRepository from '../../modules/projects/repositories/implementations/ProjectsRepository';
import IProjectRepository from '../../modules/projects/repositories/IProjectsRepository';
import UsersRepository from '../../modules/users/repositories/implementations/UsersRepository';
import IUsersRepository from '../../modules/users/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<INaversRepository>(
  'NaversRepository',
  NaversRepository,
);
container.registerSingleton<IProjectRepository>(
  'ProjectsRepository',
  ProjectsRepository,
);
