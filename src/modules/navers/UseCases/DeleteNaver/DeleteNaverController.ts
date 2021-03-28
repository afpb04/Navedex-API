import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteNaverUseCase from './DeleteNaverUseCase';

class DeleteNaverController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { naver_id } = request.params;
    const { id: user_id } = request.user;

    const deleteNaverUseCase = container.resolve(DeleteNaverUseCase);

    await deleteNaverUseCase.execute({ naver_id, user_id });

    return response.status(204).send();
  }
}

export default DeleteNaverController;
