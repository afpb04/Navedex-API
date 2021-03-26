import { Router } from 'express';

import CreateNaverController from '../modules/navers/UseCases/CreateNaver/CreateNaverController';

const naversRoutes = Router();

const createNaverController = new CreateNaverController();

naversRoutes.post('/', createNaverController.handle);

export default naversRoutes;
