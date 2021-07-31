import express from 'express';
import courseRouter from './routes/courseRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/users', userRouter);

export default app;
