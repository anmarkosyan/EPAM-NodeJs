import express from 'express';
import courseRouter from './routes/courseRoutes.js';

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/courses', courseRouter);

export default app;
