import express from 'express';
import emailRoutes from '../router/emailsRoutes';


const app = express();
app.use(express.json());

app.use('/api/v1/', emailRoutes);
app.all('*', (req, res, next)=>{
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`

  })
})

export default app;
