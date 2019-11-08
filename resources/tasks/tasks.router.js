import { Router } from 'express';
import { getAllTasks } from './tasks.controllers';

const router = Router();

router.route('/').get(getAllTasks);

export default router;
