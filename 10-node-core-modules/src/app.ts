import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();
export const PORT = process.env.PORT || 4000;


export const getApp = ():Express => {
  const app = express();

  return app;
}
