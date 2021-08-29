import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection, ConnectionOptions } from 'typeorm';
import config from './ormconfig';
import app from './app';

dotenv.config();
const port = process.env.PORT || 8080;

createConnection(config as ConnectionOptions)
  .then(async connection => {
    console.log('🔮 DB connection...');

    app.listen(port, () => {
      console.log(`👻 Starting listen server on port ${port}...`);
    });
  })
  .catch(e => {
    console.error('💥 ERROR: Database connection failed!!', e);
    throw e;
  });
