import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';


dotenv.config();
export const PORT = process.env.PORT || 4000;

export const getApp = (): Application => {
  const app = express();
  app.disable('x-powered-by');
  app.use(compression());

  app.use(cors());
  app.get('/ping', (req: Request, res: Response) => {
    res.send('hello there))))');
  });

  return app;
};
