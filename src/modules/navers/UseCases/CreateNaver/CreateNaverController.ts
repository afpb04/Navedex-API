import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateNaverUserCase from './CreateNaverUseCase';

class CreateNaverController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, birthdate, admission_date, job_role, user_id } = request.body;

    const createNaverUserCase = container.resolve(CreateNaverUserCase);

    const naver = await createNaverUserCase.execute({
      name,
      birthdate,
      admission_date,
      job_role,
      user_id,
    });

    return response.status(201).json(naver);
  }
}

export default CreateNaverController;
