import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateProjectController from '../modules/projects/useCases/CreateProject/CreateProjectController';
import DetailProjectController from '../modules/projects/useCases/DetailProject/DetailProjectController';
import ListProjectsController from '../modules/projects/useCases/ListProjects/ListProjectsController';

const projectsRoutes = Router();

projectsRoutes.use(ensureAuthenticated);

const createProjectController = new CreateProjectController();
const listProjectsController = new ListProjectsController();
const detailProjectController = new DetailProjectController();

projectsRoutes.post('/', createProjectController.handle);
projectsRoutes.get('/', listProjectsController.handle);
projectsRoutes.get('/:project_id', detailProjectController.handle);

export default projectsRoutes;
