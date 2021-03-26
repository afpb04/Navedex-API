import { container } from 'tsyringe';

import NaversRepository from '../../modules/navers/repositories/implementations/NaversRepository';
import INaversRepository from '../../modules/navers/repositories/INaversRepository';
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
