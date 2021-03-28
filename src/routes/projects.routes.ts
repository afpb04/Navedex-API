import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateProjectController from '../modules/projects/useCases/CreateProject/CreateProjectController';
import ListProjectsController from '../modules/projects/useCases/ListProjects/ListProjectsController';

const projectsRoutes = Router();

projectsRoutes.use(ensureAuthenticated);

const createProjectController = new CreateProjectController();
const listProjectsController = new ListProjectsController();

projectsRoutes.post('/', createProjectController.handle);
projectsRoutes.get('/', listProjectsController.handle);

export default projectsRoutes;
