import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import emailRoutes from '../router/emailsRoutes';
import { AppError } from '../utils/appError';
import { globalErrorHandler } from '../controller/errorController';
import compression from 'compression';

const app = express();
app.use(express.json());
app.use(compression());
app.use(cors({}));

app.use('/api/v1/', emailRoutes);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//global error middleware
app.use(globalErrorHandler);

export default app;
