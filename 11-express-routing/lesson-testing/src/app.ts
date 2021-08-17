import express from 'express';
import cors from 'cors';
import usersRoute from './routes/bolgRoutes';
import { AppError } from './utils/appError';
import { errorHandler } from './controller/errorHandler';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/blog', usersRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);
export default app;
