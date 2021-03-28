import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateProjectController from '../modules/projects/useCases/CreateProject/CreateProjectController';
import DeleteProjectController from '../modules/projects/useCases/DeleteProject/DeleteProjectController';
import DetailProjectController from '../modules/projects/useCases/DetailProject/DetailProjectController';
import ListProjectsController from '../modules/projects/useCases/ListProjects/ListProjectsController';
import UpdateProjectController from '../modules/projects/useCases/UpdateProject/UpdateProjectController';

const projectsRoutes = Router();

projectsRoutes.use(ensureAuthenticated);

const createProjectController = new CreateProjectController();
const listProjectsController = new ListProjectsController();
const detailProjectController = new DetailProjectController();
const updateProjectController = new UpdateProjectController();
const deleteProjectController = new DeleteProjectController();

projectsRoutes.post('/', createProjectController.handle);
projectsRoutes.get('/', listProjectsController.handle);
projectsRoutes.get('/:project_id', detailProjectController.handle);
projectsRoutes.patch('/:id', updateProjectController.handle);
projectsRoutes.delete('/:project_id/delete', deleteProjectController.handle);

export default projectsRoutes;
