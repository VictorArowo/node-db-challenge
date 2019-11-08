import { Router } from 'express';
import {
  getAllProjects,
  createProject,
  createTask
} from './projects.controllers';

const router = Router();

router
  .route('/')
  .get(getAllProjects)
  .post(createProject);

router.post('/:id/tasks', createTask);

export default router;
