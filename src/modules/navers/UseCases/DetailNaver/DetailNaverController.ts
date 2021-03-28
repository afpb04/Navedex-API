import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DetailNaverUseCase from './DetailNaverUseCase';

class DetailNaverController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { naver_id } = request.params;
    const { id: user_id } = request.user;

    const detailNaverUseCase = container.resolve(DetailNaverUseCase);

    const naver = await detailNaverUseCase.execute({ naver_id, user_id });

    return response.json(naver);
  }
}
export default DetailNaverController;
