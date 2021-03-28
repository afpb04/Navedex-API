import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateProjectController from '../modules/projects/useCases/CreateProject/CreateProjectController';

const projectsRoutes = Router();

projectsRoutes.use(ensureAuthenticated);

const createProjectController = new CreateProjectController();

projectsRoutes.post('/', createProjectController.handle);

export default projectsRoutes;
