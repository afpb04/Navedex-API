import { inject, injectable } from 'tsyringe';

import IUsersRepository from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error('Email already exists!');
    }
    await this.usersRepository.create({
      name,
      email,
      password,
    });
  }
}

export default CreateUserUseCase;
