import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteProjectUseCase from './DeleteProjectUseCase';

class DeleteProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { project_id } = request.params;
    const { id: user_id } = request.user;

    const deleteProjectUseCase = container.resolve(DeleteProjectUseCase);

    await deleteProjectUseCase.execute({ project_id, user_id });

    return response.status(204).send();
  }
}

export default DeleteProjectController;
