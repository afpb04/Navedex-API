import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateNaverController from '../modules/navers/UseCases/CreateNaver/CreateNaverController';
import DeleteNaverController from '../modules/navers/UseCases/DeleteNaver/DeleteNaverController';
import DetailNaverController from '../modules/navers/UseCases/DetailNaver/DetailNaverController';
import ListNaversController from '../modules/navers/UseCases/ListNavers/ListNaversController';
import UpdateNaverController from '../modules/navers/UseCases/UpdateNaver/UpdateNaverController';

const naversRoutes = Router();

naversRoutes.use(ensureAuthenticated);

const createNaverController = new CreateNaverController();
const listNaversController = new ListNaversController();
const detailNaverController = new DetailNaverController();
const updateNaverController = new UpdateNaverController();
const deleteNaverController = new DeleteNaverController();

naversRoutes.post('/', createNaverController.handle);
naversRoutes.get('/', listNaversController.handle);
naversRoutes.get('/:naver_id', detailNaverController.handle);
naversRoutes.patch('/:id', updateNaverController.handle);
naversRoutes.delete('/:naver_id/delete', deleteNaverController.handle);

export default naversRoutes;
