import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import config from './ormconfig';
import app from './app';

dotenv.config();

createConnection(config)
  .then(async connection => {
    console.log('🔮 DB connection...');

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`🚀 Starting listen server on port ${port}...`);
    });
  })
  .catch(e => {
    console.error('💥 ERROR: Database connection failed!!', e);
    throw e;
  });
