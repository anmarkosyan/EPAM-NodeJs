//import dotenv from 'dotenv';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Client } from './entities/Client';
import { Product } from './entities/Product';

const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pg1986',
      database: 'shop_data',
      entities: [Client, Product],
      synchronize: true,
    });
    console.log('connected to the postgres 🔮');
  } catch (e) {
    console.error(e.message);
    throw new Error('💥ERROR!!');
  }
};
main();
