import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import projectsRouter from './resources/projects/projects.router';
import resourcesRouter from './resources/resources/resources.router';
import tasksRouter from './resources/tasks/tasks.router';

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

export default server;
