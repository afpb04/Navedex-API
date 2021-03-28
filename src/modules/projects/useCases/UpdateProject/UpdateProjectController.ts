import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProjectUseCase from './UpdateProjectUseCase';

class UpdateProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { navers } = request.body;
    const { id: user_id } = request.user;
    const { id } = request.params;

    const updateProjectUseCase = container.resolve(UpdateProjectUseCase);

    const naver = await updateProjectUseCase.execute({
      id,
      navers,
      user_id,
    });

    return response.json(naver);
  }
}

export default UpdateProjectController;
