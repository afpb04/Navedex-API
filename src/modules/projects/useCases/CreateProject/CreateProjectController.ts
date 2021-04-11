import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProjectUseCase from './CreateProjectUseCase';

class CreateProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, navers } = request.body;
    const { id: user_id } = request.user;
    const createProjectUseCase = container.resolve(CreateProjectUseCase);
    const project = await createProjectUseCase.execute({
      name,
      user_id,
      navers_id: navers,
    });

    return response.status(201).json(project);
  }
}

export default CreateProjectController;
