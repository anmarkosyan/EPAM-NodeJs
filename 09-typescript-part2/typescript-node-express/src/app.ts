import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;
app.get('/', (req: Request, res: Response) => {
  console.log(add(3, 5));
  res.send('Nice to meet you typescript 😍');
});

const port: number = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
