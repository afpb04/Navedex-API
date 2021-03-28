import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DetailProjectUseCase from './DetailProjectUseCase';

class DetailProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { project_id } = request.params;
    const { id: user_id } = request.user;

    const detailProjectUseCase = container.resolve(DetailProjectUseCase);

    const project = await detailProjectUseCase.execute({ project_id, user_id });

    return response.json(project);
  }
}
export default DetailProjectController;
