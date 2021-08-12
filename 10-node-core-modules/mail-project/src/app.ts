import express, { Application, Request, Response, NextFunction } from 'express';
import emailRoutes from '../router/emailsRoutes';
import AppError from '../utils/appError';

const app = express();
app.use(express.json());

app.use('/api/v1/', emailRoutes);

//error mid for unhandled  routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  //1. case without the global error mid, simple way
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });
  //2) way
   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//global error middleware
app.use((err: AppError, req: Request, res: Response) => {
  //console.log(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

export default app;
