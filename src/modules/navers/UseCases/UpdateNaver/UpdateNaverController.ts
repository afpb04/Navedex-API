import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateNaverUseCase from './UpdateNaverUseCase';

class UpdateNaverController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { job_role, projects } = request.body;
    const { id: user_id } = request.user;
    const { id } = request.params;

    const updateNaverUseCase = container.resolve(UpdateNaverUseCase);

    const naver = await updateNaverUseCase.execute({
      id,
      job_role,
      projects,
      user_id,
    });

    return response.json(naver);
  }
}

export default UpdateNaverController;
