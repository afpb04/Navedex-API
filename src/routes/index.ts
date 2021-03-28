import { Router } from 'express';

import authenticateRoutes from './authenticate.routes';
import naversRoutes from './navers.routes';
import projectsRoutes from './projects.routes';
import usersRoutes from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/sessions', authenticateRoutes);
router.use('/navers', naversRoutes);
router.use('/projects', projectsRoutes);

export default router;
