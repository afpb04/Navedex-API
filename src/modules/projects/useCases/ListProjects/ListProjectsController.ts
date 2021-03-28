import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProjectsUseCase from './ListProjectsUseCase';

class ListProjectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listProjectsUseCase = container.resolve(ListProjectsUseCase);

    const projects = await listProjectsUseCase.execute({ user_id });

    return response.json(projects);
  }
}
export default ListProjectsController;
