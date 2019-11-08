import { Router } from 'express';
import { createResource, getAllResources } from './resources.controllers';

const router = Router();

router
  .route('/')
  .get(getAllResources)
  .post(createResource);

export default router;
