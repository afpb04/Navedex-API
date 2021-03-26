import { Router } from 'express';

import naversRoutes from './navers.routes';
import usersRoutes from './users.routes';

const router = Router();

router.use('/navers', naversRoutes);
router.use('/users', usersRoutes);

export default router;
