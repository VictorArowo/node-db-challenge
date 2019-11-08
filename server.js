import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

export default server;
