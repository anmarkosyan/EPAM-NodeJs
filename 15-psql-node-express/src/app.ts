import express, { Application } from 'express';
import compression from 'compression';
import { clientRoute } from './routes/clientRoutes';
import { AppError } from './utils/appError';
import { errorHandler } from './controller/errorHandler';

const app: Application = express();
app.use(express.json());
app.use(compression());

app.use('/api/v1/clients', clientRoute);
//app.use('/api/v1/products', productsRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

export default app;
