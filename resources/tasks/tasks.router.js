import { Router } from 'express';
import { getAllTasks, getTaskById } from './tasks.controllers';

const router = Router();

router.route('/').get(getAllTasks);
router.get('/:id', getTaskById);

export default router;
