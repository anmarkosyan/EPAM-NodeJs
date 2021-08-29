import {join} from 'path';
import {ConnectionOptions} from 'typeorm';
import dotenv from 'dotenv';
import { Client } from './entities/Client';

dotenv.config()
const connectionOptions: ConnectionOptions = {
  type:'postgres',
  host: 'db',
  port: Number(process.env.POSRTGRES_PORT),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: 'pgdata',
  entities: [Client],
  synchronize: true,
  migrationsRun:true,
  logging: false,
  migrations: [join(__dirname, 'src/migration/**/*.ts')]
}

export default connectionOptions;


