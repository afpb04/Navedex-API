import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListNaversUseCase from './ListNaversUseCase';

class listNaversController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listNaversUseCase = container.resolve(ListNaversUseCase);

    const navers = await listNaversUseCase.execute({ user_id });

    return response.json(navers);
  }
}
export default listNaversController;
