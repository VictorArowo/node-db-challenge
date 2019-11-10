import { Router } from 'express';
import {
  getAllProjects,
  createProject,
  createTask,
  getProjectInfo
} from './projects.controllers';

const router = Router();

router
  .route('/')
  .get(getAllProjects)
  .post(createProject);

router.get('/:id', getProjectInfo);

router.post('/:id/tasks', createTask);

export default router;
