import express from 'express';
import emailRoutes from '../router/emailsRoutes';


const app = express();
app.use(express.json());

app.use('/api/v1/emails/', emailRoutes);

export default app;
